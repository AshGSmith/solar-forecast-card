import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchForecastHistory } from "../src/data/forecast-history.js";
import { dayKey, type HistoryLog } from "../src/data/history-log.js";
import { entity, KWH, makeConfig, makeHass } from "./helpers.js";

const ids = ["sensor.forecast"] as never;
const dayStart = (day: number) => new Date(2026, 5, day).getTime();

function statsWS(statistics: unknown, log: HistoryLog | null = null) {
  return vi.fn(async (message: Record<string, unknown>) => {
    if (message.type === "frontend/get_user_data") return { value: log };
    if (message.type !== "recorder/statistics_during_period") return null;
    if (statistics instanceof Error) throw statistics;
    return statistics;
  });
}

async function load(callWS: unknown, config: Parameters<typeof makeConfig>[0] = {}, rows: unknown = []) {
  const callApi = vi.fn().mockResolvedValue(rows);
  const hass = makeHass(
    { "sensor.forecast": entity(20, KWH), "sensor.total": entity(1, KWH) },
    { callWS: callWS as never, callApi: callApi as never }
  );
  return fetchForecastHistory(hass, makeConfig({
    forecast_entities: ids,
    today_actual_entity: "sensor.total",
    ...config,
  }));
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 5, 15, 13, 20));
  vi.spyOn(console, "debug").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("actuals from long-term statistics", () => {
  it("asks for each day's change in kWh", async () => {
    const callWS = statsWS({});
    await load(callWS);
    expect(callWS).toHaveBeenCalledWith({
      type: "recorder/statistics_during_period",
      start_time: new Date(2026, 5, 8).toISOString(),
      end_time: new Date(2026, 5, 15).toISOString(),
      statistic_ids: ["sensor.total"],
      period: "day",
      types: ["change"],
      units: { energy: "kWh" },
    });
  });

  it("uses each day's change, which suits lifetime totals", async () => {
    const days = await load(statsWS({
      "sensor.total": [{ start: dayStart(13), change: 21.5 }, { start: dayStart(14), change: 18 }],
    }));
    expect(days![5].actualKwh).toBe(21.5);
    expect(days![6].actualKwh).toBe(18);
    expect(days![0].actualKwh).toBeNull();
  });

  it("accepts ISO start times from older versions", async () => {
    const days = await load(statsWS({
      "sensor.total": [{ start: new Date(dayStart(14)).toISOString(), change: 18 }],
    }));
    expect(days![6].actualKwh).toBe(18);
  });

  it("adds array sensors together", async () => {
    const callWS = statsWS({
      "sensor.east": [{ start: dayStart(14), change: 7 }],
      "sensor.west": [{ start: dayStart(14), change: 5 }],
    });
    const days = await load(callWS, {
      actual_arrays: [{ entity: "sensor.east", label: "E" }, { entity: "sensor.west", label: "W" }],
    });
    expect(days![6].actualKwh).toBe(12);
    const message = callWS.mock.calls.find(([m]) => m.type === "recorder/statistics_during_period")![0];
    expect(message.statistic_ids).toEqual(["sensor.east", "sensor.west"]);
  });

  it("takes priority over recorder history and the log", async () => {
    const key = dayKey(new Date(2026, 5, 14));
    const rows = [[{ entity_id: "sensor.total", state: "9000", last_changed: new Date(2026, 5, 14, 12).toISOString() }]];
    const days = await load(
      statsWS({ "sensor.total": [{ start: dayStart(14), change: 18 }] }, {
        [key]: { forecastKwh: 25, actualKwh: 16, complete: true },
      }),
      {},
      rows
    );
    expect(days![6].actualKwh).toBe(18);
  });

  it("ignores days with no generation or missing values", async () => {
    const days = await load(statsWS({
      "sensor.total": [{ start: dayStart(13), change: 0 }, { start: dayStart(14), change: null }],
    }));
    expect(days![5].actualKwh).toBeNull();
    expect(days![6].actualKwh).toBeNull();
  });

  it("falls back to recorder history when statistics fail", async () => {
    const rows = [[{ entity_id: "sensor.total", state: "9", last_changed: new Date(2026, 5, 14, 12).toISOString() }]];
    const days = await load(statsWS(new Error("unknown command")), {}, rows);
    expect(days![6].actualKwh).toBe(9);
  });

  it("is skipped with no actual sensor", async () => {
    const callWS = statsWS({});
    await load(callWS, { today_actual_entity: undefined });
    expect(callWS.mock.calls.some(([m]) => m.type === "recorder/statistics_during_period")).toBe(false);
  });
});
