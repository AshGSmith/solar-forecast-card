import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchForecastHistory } from "../src/data/forecast-history.js";
import { addToLog, dayKey, recordToday, type HistoryLog } from "../src/data/history-log.js";
import type { HomeAssistant } from "../src/types.js";
import { entity, KWH, makeConfig, makeHass } from "./helpers.js";

const ids = ["sensor.forecast"] as never;
const config = makeConfig({ forecast_entities: ids, today_actual_entity: "sensor.total" });
const key = "solar_forecast_card_history:sensor.forecast";

/** Fake Home Assistant user storage. */
function storage(initial?: HistoryLog) {
  const saved: { value: HistoryLog | undefined } = { value: initial };
  const callWS = vi.fn(async (message: Record<string, unknown>) => {
    if (message.type === "frontend/get_user_data") return { value: saved.value ?? null };
    if (message.type === "frontend/set_user_data") saved.value = message.value as HistoryLog;
    return null;
  });
  return { saved, callWS: callWS as unknown as HomeAssistant["callWS"], mock: callWS };
}

const states = (sun = "above_horizon") => ({
  "sensor.forecast": entity(25, KWH),
  "sensor.total": entity(9, KWH),
  "sun.sun": entity(sun),
});

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 5, 15, 13, 20));
  vi.spyOn(console, "debug").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("addToLog", () => {
  const now = new Date(2026, 5, 15, 13);

  it("keeps the earliest forecast and the highest actual", () => {
    const first = addToLog({}, now, 25, 4, false);
    expect(addToLog(first, now, 30, 3, false)["2026-06-15"])
      .toEqual({ forecastKwh: 25, actualKwh: 4, complete: false });
    expect(addToLog(first, now, 30, 8, false)["2026-06-15"].actualKwh).toBe(8);
  });

  it("fills in a value that was missing earlier", () => {
    const first = addToLog({}, now, null, 4, false);
    expect(addToLog(first, now, 25, null, false)["2026-06-15"])
      .toEqual({ forecastKwh: 25, actualKwh: 4, complete: false });
  });

  it("stays complete once a day is finished", () => {
    const finished = addToLog({}, now, 25, 4, true);
    expect(addToLog(finished, now, 25, 4, false)["2026-06-15"].complete).toBe(true);
  });

  it("keeps 8 days and drops anything older", () => {
    const entry = { forecastKwh: 1, actualKwh: 1, complete: true };
    const log = addToLog({ "2026-06-07": entry, "2026-06-06": entry }, now, 1, 1, false);
    expect(Object.keys(log).sort()).toEqual(["2026-06-07", "2026-06-15"]);
  });
});

describe("recordToday", () => {
  it("saves today's values under the forecast entity", async () => {
    const { saved, mock, callWS } = storage();
    await recordToday(makeHass(states(), { callWS }), config);
    expect(mock.mock.calls[1][0]).toMatchObject({ type: "frontend/set_user_data", key });
    expect(saved.value!["2026-06-15"]).toEqual({ forecastKwh: 25, actualKwh: 9, complete: false });
  });

  it("marks the day complete after sunset", async () => {
    vi.setSystemTime(new Date(2026, 5, 15, 21));
    const { saved, callWS } = storage();
    await recordToday(makeHass(states("below_horizon"), { callWS }), config);
    expect(saved.value!["2026-06-15"].complete).toBe(true);
  });

  it("does not treat before dawn as after sunset", async () => {
    vi.setSystemTime(new Date(2026, 5, 15, 4));
    const { saved, callWS } = storage();
    await recordToday(makeHass(states("below_horizon"), { callWS }), config);
    expect(saved.value!["2026-06-15"].complete).toBe(false);
  });

  it("uses the evening hour without a sun entity", async () => {
    vi.setSystemTime(new Date(2026, 5, 15, 20));
    const { saved, callWS } = storage();
    const { "sun.sun": _sun, ...noSun } = states();
    await recordToday(makeHass(noSun, { callWS }), config);
    expect(saved.value!["2026-06-15"].complete).toBe(true);
  });

  it("skips the first hour, when sensors may hold yesterday's values", async () => {
    vi.setSystemTime(new Date(2026, 5, 15, 0, 30));
    const { mock, callWS } = storage();
    await recordToday(makeHass(states(), { callWS }), config);
    expect(mock).not.toHaveBeenCalled();
  });

  it("does not write when nothing changed", async () => {
    const { mock, callWS } = storage({ "2026-06-15": { forecastKwh: 25, actualKwh: 9, complete: false } });
    await recordToday(makeHass(states(), { callWS }), config);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("does not overwrite the log when it can't be read", async () => {
    const callWS = vi.fn().mockRejectedValue(new Error("offline"));
    await recordToday(makeHass(states(), { callWS: callWS as never }), config);
    expect(callWS).toHaveBeenCalledTimes(1);
  });
});

describe("history from the log", () => {
  const yesterday = dayKey(new Date(2026, 5, 14));

  async function days(log: HistoryLog, rows: unknown = []) {
    const { callWS } = storage(log);
    const callApi = vi.fn().mockResolvedValue(rows);
    return fetchForecastHistory(makeHass(states(), { callWS, callApi: callApi as never }), config);
  }

  it("fills days the recorder doesn't have", async () => {
    const result = await days({ [yesterday]: { forecastKwh: 25, actualKwh: 22, complete: true } });
    expect(result![6]).toMatchObject({ forecastKwh: 25, actualKwh: 22 });
  });

  it("ignores a partial day's actual but keeps its forecast", async () => {
    const result = await days({ [yesterday]: { forecastKwh: 25, actualKwh: 6, complete: false } });
    expect(result![6]).toMatchObject({ forecastKwh: 25, actualKwh: null });
  });

  it("prefers recorder data", async () => {
    const rows = [[{ entity_id: "sensor.forecast", state: "30", last_changed: new Date(2026, 5, 14, 3).toISOString() }]];
    const result = await days({ [yesterday]: { forecastKwh: 25, actualKwh: 22, complete: true } }, rows);
    expect(result![6]).toMatchObject({ forecastKwh: 30, actualKwh: 22 });
  });

  it("still shows the log when the recorder request fails", async () => {
    const { callWS } = storage({ [yesterday]: { forecastKwh: 25, actualKwh: 22, complete: true } });
    const callApi = vi.fn().mockRejectedValue(new Error("offline"));
    const result = await fetchForecastHistory(makeHass(states(), { callWS, callApi: callApi as never }), config);
    expect(result![6].actualKwh).toBe(22);
  });
});
