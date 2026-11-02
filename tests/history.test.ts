import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  fetchForecastHistory,
  historyScale,
  scoreHistory,
} from "../src/data/forecast-history.js";
import { entity, KWH, makeConfig, makeHass, WH } from "./helpers.js";

const at = (day: number, hour: number, minute = 0) =>
  new Date(2026, 5, day, hour, minute).toISOString();
const row = (entityId: string, ...points: Array<[string, unknown]>) =>
  points.map(([last_changed, state], i) => ({
    ...(i === 0 ? { entity_id: entityId } : {}),
    state: String(state),
    last_changed,
  }));

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 5, 15, 13, 20));
  vi.spyOn(console, "debug").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("fetchForecastHistory", () => {
  const ids = ["sensor.forecast"] as never;

  async function load(
    rows: unknown,
    config: Parameters<typeof makeConfig>[0] = {},
    states: Record<string, ReturnType<typeof entity>> = {}
  ) {
    const callApi = vi.fn().mockResolvedValue(rows);
    const hass = makeHass(
      { "sensor.forecast": entity(1, KWH), "sensor.total": entity(1, KWH), ...states },
      { callApi: callApi as never }
    );
    const cfg = makeConfig({ forecast_entities: ids, today_actual_entity: "sensor.total", ...config });
    return { days: await fetchForecastHistory(hass, cfg), callApi };
  }

  it("returns the last 7 full days, oldest first, ending yesterday", async () => {
    const { days } = await load([]);
    expect(days).toHaveLength(7);
    expect(days![0].date).toEqual(new Date(2026, 5, 8));
    expect(days![6].date).toEqual(new Date(2026, 5, 14));
    expect(days![6]).toMatchObject({ forecastKwh: null, actualKwh: null });
  });

  it("requests both sensors from a week ago up to midnight", async () => {
    const { callApi } = await load([]);
    const path = callApi.mock.calls[0][1] as string;
    expect(path).toContain(`history/period/${at(8, 0)}`);
    expect(path).toContain(`end_time=${encodeURIComponent(at(15, 0))}`);
    expect(decodeURIComponent(path)).toContain("filter_entity_id=sensor.forecast,sensor.total");
  });

  it("uses the forecast in place at 06:00, ignoring later revisions", async () => {
    const { days } = await load([
      row("sensor.forecast", [at(14, 0, 5), 20], [at(14, 5), 22], [at(14, 9), 30]),
    ]);
    expect(days![6].forecastKwh).toBe(22);
  });

  it("falls back to the day's first forecast when none exists by 06:00", async () => {
    const { days } = await load([row("sensor.forecast", [at(14, 8), 18], [at(14, 12), 19])]);
    expect(days![6].forecastKwh).toBe(18);
  });

  it("does not carry a forecast over from the previous day", async () => {
    const { days } = await load([row("sensor.forecast", [at(13, 5), 18])]);
    expect(days![5].forecastKwh).toBe(18);
    expect(days![6].forecastKwh).toBeNull();
  });

  it("uses the day's peak as actual, skipping a late midnight reset", async () => {
    const { days } = await load([
      row("sensor.total", [at(13, 0, 0), 31], [at(13, 9), 2], [at(13, 19), 12], [at(13, 23, 59), 12]),
    ]);
    expect(days![5].actualKwh).toBe(12);
  });

  it("normalises Wh sensors", async () => {
    const { days } = await load(
      [row("sensor.forecast", [at(14, 3), 20000]), row("sensor.total", [at(14, 12), 18000])],
      {},
      { "sensor.forecast": entity(1, WH), "sensor.total": entity(1, { unit_of_measurement: "wh" }) }
    );
    expect(days![6]).toMatchObject({ forecastKwh: 20, actualKwh: 18 });
  });

  it("ignores unavailable readings", async () => {
    const { days } = await load([
      row("sensor.total", [at(14, 12), 8], [at(14, 13), "unavailable"]),
    ]);
    expect(days![6].actualKwh).toBe(8);
  });

  it("sums array sensors, matching rows by entity rather than position", async () => {
    const { days } = await load(
      [row("sensor.west", [at(14, 12), 3]), row("sensor.east", [at(14, 12), 4])],
      {
        today_actual_entity: "sensor.total",
        actual_arrays: [{ entity: "sensor.east", label: "E" }, { entity: "sensor.west", label: "W" }],
      }
    );
    expect(days![6].actualKwh).toBe(7);
  });

  it("works with no actual sensor configured", async () => {
    const { days } = await load([row("sensor.forecast", [at(14, 3), 20])], { today_actual_entity: undefined });
    expect(days![6]).toMatchObject({ forecastKwh: 20, actualKwh: null });
  });

  it("returns null when the request fails so it can be retried", async () => {
    const callApi = vi.fn().mockRejectedValue(new Error("offline"));
    const hass = makeHass({}, { callApi: callApi as never });
    expect(await fetchForecastHistory(hass, makeConfig({ forecast_entities: ids }))).toBeNull();
  });

  it("returns no days without a forecast entity", async () => {
    expect(await fetchForecastHistory(makeHass({}), makeConfig())).toEqual([]);
  });
});

describe("scoreHistory", () => {
  const day = (forecastKwh: number | null, actualKwh: number | null) =>
    ({ date: new Date(), forecastKwh, actualKwh });

  it("reports accuracy, average miss and direction", () => {
    const score = scoreHistory([day(20, 18), day(10, 12)])!;
    expect(score.accuracyPct).toBeCloseTo(85);   // misses of 10% and 20%
    expect(score.averageMissKwh).toBeCloseTo(2);
    expect(score.biasKwh).toBeCloseTo(0);
  });

  it("is negative when generation fell short", () => {
    expect(scoreHistory([day(20, 16), day(10, 9)])!.biasKwh).toBeCloseTo(-2.5);
  });

  it("skips days missing either value or with no forecast", () => {
    const score = scoreHistory([day(20, 20), day(null, 5), day(10, null), day(0, 3)])!;
    expect(score.accuracyPct).toBe(100);
  });

  it("floors accuracy at zero", () => {
    expect(scoreHistory([day(1, 10)])!.accuracyPct).toBe(0);
  });

  it("returns null with nothing to compare", () => {
    expect(scoreHistory([day(null, null), day(10, null)])).toBeNull();
  });
});

describe("historyScale", () => {
  it.each([
    [0, 1, 1],
    [2.5, 1, 3],
    [4, 1, 4],
    [31.2, 10, 40],
    [29, 10, 30],
    [140, 50, 150],
  ])("fits a peak of %d kWh", (peak, step, top) => {
    expect(historyScale(peak)).toEqual({ step, top });
  });
});
