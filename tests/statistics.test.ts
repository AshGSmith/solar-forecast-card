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

describe("finding actuals without a configured energy sensor", () => {
  /** Answers statistics requests by sensor and period, with Energy dashboard preferences. */
  function ws(
    statistics: Record<string, Array<Record<string, unknown>>>,
    solar: string[] = [],
    period = "day"
  ) {
    return vi.fn(async (message: Record<string, unknown>) => {
      if (message.type === "frontend/get_user_data") return { value: null };
      if (message.type === "energy/get_prefs") {
        return {
          energy_sources: [
            { type: "grid", flow_from: [] },
            ...solar.map((id) => ({ type: "solar", stat_energy_from: id })),
          ],
        };
      }
      if (message.type !== "recorder/statistics_during_period" || message.period !== period) return {};
      const wanted = message.statistic_ids as string[];
      return Object.fromEntries(Object.entries(statistics).filter(([id]) => wanted.includes(id)));
    });
  }

  it("uses the Energy dashboard's solar sensor when none is configured", async () => {
    const callWS = ws({ "sensor.inverter_total": [{ start: dayStart(14), change: 19 }] }, ["sensor.inverter_total"]);
    const days = await load(callWS, { today_actual_entity: undefined });
    expect(days![6].actualKwh).toBe(19);
  });

  it("uses it when the configured sensor has no statistics", async () => {
    const callWS = ws({ "sensor.inverter_total": [{ start: dayStart(14), change: 19 }] }, ["sensor.inverter_total"]);
    expect((await load(callWS))![6].actualKwh).toBe(19);
  });

  it("adds several solar sources together", async () => {
    const callWS = ws({
      "sensor.a": [{ start: dayStart(14), change: 10 }],
      "sensor.b": [{ start: dayStart(14), change: 9 }],
    }, ["sensor.a", "sensor.b"]);
    expect((await load(callWS, { today_actual_entity: undefined }))![6].actualKwh).toBe(19);
  });

  it("prefers the configured sensor when it has statistics", async () => {
    const callWS = ws({
      "sensor.total": [{ start: dayStart(14), change: 18 }],
      "sensor.inverter_total": [{ start: dayStart(14), change: 19 }],
    }, ["sensor.inverter_total"]);
    expect((await load(callWS))![6].actualKwh).toBe(18);
  });

  it("estimates energy from hourly power, ignoring hours with no data", async () => {
    const hour = (h: number) => new Date(2026, 5, 14, h).getTime();
    const callWS = ws({
      "sensor.power": [{ start: hour(10), mean: 2000 }, { start: hour(11), mean: 3000 }, { start: hour(2), mean: null }],
    }, [], "hour");
    const days = await load(callWS, { today_actual_entity: undefined, live_power_entity: "sensor.power" });
    expect(days![6].actualKwh).toBe(5);
  });

  it("uses an energy sensor chosen as the live sensor", async () => {
    const callWS = ws({ "sensor.eg4_yield": [{ start: dayStart(14), change: 17 }] });
    const callApi = vi.fn().mockResolvedValue([]);
    const hass = makeHass(
      { "sensor.forecast": entity(20, KWH), "sensor.eg4_yield": entity(3, KWH) },
      { callWS: callWS as never, callApi: callApi as never }
    );
    const days = await fetchForecastHistory(hass, makeConfig({
      forecast_entities: ids,
      live_power_entity: "sensor.eg4_yield",
    }));
    expect(days![6].actualKwh).toBe(17);
  });

  it("copes with no Energy dashboard preferences", async () => {
    const callWS = vi.fn(async (message: Record<string, unknown>) => {
      if (message.type === "energy/get_prefs") throw new Error("No prefs");
      return message.type === "frontend/get_user_data" ? { value: null } : {};
    });
    const days = await load(callWS, { today_actual_entity: undefined });
    expect(days![6].actualKwh).toBeNull();
  });
});
