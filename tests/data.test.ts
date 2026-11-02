import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  readArrayActuals,
  readKwh,
  readPowerW,
  resolveActualKwh,
} from "../src/data/entities.js";
import { computeHeaderStats } from "../src/data/header-stats.js";
import { fetchActualHourly } from "../src/data/history.js";
import { buildRows, forecastTier } from "../src/data/rows.js";
import { entity, KWH, makeConfig, makeHass, WH } from "./helpers.js";

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 5, 15, 13, 20));
  vi.spyOn(console, "debug").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("readKwh", () => {
  it("normalises Wh in any casing", () => {
    const hass = makeHass({ "sensor.a": entity(1500, WH), "sensor.b": entity(1500, { unit_of_measurement: "wh" }) });
    expect(readKwh(hass, "sensor.a")).toBe(1.5);
    expect(readKwh(hass, "sensor.b")).toBe(1.5);
  });

  it("returns null for missing or non-numeric sensors", () => {
    const hass = makeHass({ "sensor.a": entity("unavailable") });
    expect(readKwh(hass, "sensor.a")).toBeNull();
    expect(readKwh(hass, "sensor.missing")).toBeNull();
    expect(readKwh(hass, undefined)).toBeNull();
    expect(readKwh(undefined, "sensor.a")).toBeNull();
  });
});

describe("readPowerW", () => {
  it("normalises kW and assumes watts without a unit", () => {
    const hass = makeHass({
      "sensor.kw": entity(1.5, { unit_of_measurement: "kW" }),
      "sensor.bare": entity(200),
    });
    expect(readPowerW(hass, "sensor.kw")).toBe(1500);
    expect(readPowerW(hass, "sensor.bare")).toBe(200);
  });
});

describe("resolveActualKwh", () => {
  const hass = makeHass({
    "sensor.total": entity(5, KWH),
    "sensor.east": entity(2000, WH),
    "sensor.west": entity(1, KWH),
    "sensor.off": entity("unavailable"),
  });

  it("prefers the array sum when arrays are producing", () => {
    const cfg = makeConfig({
      today_actual_entity: "sensor.total",
      actual_arrays: [{ entity: "sensor.east", label: "E" }, { entity: "sensor.west", label: "" }],
    });
    const arrays = readArrayActuals(hass, cfg);
    expect(arrays).toEqual([{ label: "E", kwh: 2 }, { label: "?", kwh: 1 }]);
    expect(resolveActualKwh(hass, cfg, arrays)).toBe(3);
  });

  it("falls back to the single entity when arrays sum to zero", () => {
    const cfg = makeConfig({
      today_actual_entity: "sensor.total",
      actual_arrays: [{ entity: "sensor.off", label: "E" }],
    });
    expect(resolveActualKwh(hass, cfg, readArrayActuals(hass, cfg))).toBe(5);
  });

  it("returns null when nothing is configured", () => {
    const cfg = makeConfig();
    expect(readArrayActuals(hass, cfg)).toBeNull();
    expect(resolveActualKwh(hass, cfg, null)).toBeNull();
  });
});

describe("buildRows", () => {
  const ids = ["sensor.d0", "sensor.d1"] as never;

  it("scales bars to the week max and caps actual at forecast", () => {
    const hass = makeHass({
      "sensor.d0": entity(5, KWH),
      "sensor.d1": entity(10, KWH),
      "sensor.total": entity(2, KWH),
    });
    const rows = buildRows(hass, makeConfig({ forecast_entities: ids, today_actual_entity: "sensor.total" }));
    expect(rows).toHaveLength(7);
    expect(rows[0]).toMatchObject({ isToday: true, forecastPct: 50, actualPct: 20, dottedPct: 30, isComplete: false });
    expect(rows[1]).toMatchObject({ isToday: false, forecastPct: 100, actualKwh: null });
    expect(rows[1].date.getDate()).toBe(16);
    expect(rows[2]).toMatchObject({ entityId: "", forecastKwh: null, forecastPct: 0 });
  });

  it("marks today complete once actual reaches forecast", () => {
    const hass = makeHass({ "sensor.d0": entity(5, KWH), "sensor.total": entity(5, KWH) });
    const rows = buildRows(hass, makeConfig({ forecast_entities: ids, today_actual_entity: "sensor.total" }));
    expect(rows[0].isComplete).toBe(true);
  });

  it("normalises forecast sensors reporting Wh", () => {
    const hass = makeHass({ "sensor.d0": entity(12000, WH) });
    expect(buildRows(hass, makeConfig({ forecast_entities: ids }))[0].forecastKwh).toBe(12);
  });

  it("only sums estimate10 for Solcast when enabled", () => {
    const hass = makeHass({ "sensor.d0": entity(5, { ...KWH, detailedForecast: [{ pv_estimate10: 2 }] }) });
    const row = (integration_type: "solcast" | "manual", display_estimate10: boolean) =>
      buildRows(hass, makeConfig({ forecast_entities: ids, integration_type, display_estimate10 }))[0];
    expect(row("solcast", true).estimate10Kwh).toBe(1);
    expect(row("solcast", false).estimate10Kwh).toBeNull();
    expect(row("manual", true).estimate10Kwh).toBeNull();
  });
});

describe("forecastTier", () => {
  it("is average for unknown values and without thresholds", () => {
    expect(forecastTier(makeHass({}), makeConfig(), null)).toBe("average");
    expect(forecastTier(makeHass({}), makeConfig(), 5)).toBe("average");
  });

  it("uses static thresholds", () => {
    const cfg = makeConfig({ low_threshold: 5, high_threshold: 10 });
    expect(forecastTier(makeHass({}), cfg, 4)).toBe("low");
    expect(forecastTier(makeHass({}), cfg, 5)).toBe("average");
    expect(forecastTier(makeHass({}), cfg, 11)).toBe("high");
  });

  it("prefers threshold sensors and normalises Wh in any casing", () => {
    const cfg = makeConfig({ low_threshold: 1, low_threshold_entity: "sensor.lo" });
    expect(forecastTier(makeHass({ "sensor.lo": entity(6000, WH) }), cfg, 5)).toBe("low");
    expect(forecastTier(makeHass({ "sensor.lo": entity(6000, { unit_of_measurement: "wh" }) }), cfg, 5)).toBe("low");
  });

  it("falls back to the static value for unusable sensors", () => {
    const cfg = makeConfig({ low_threshold: 6, low_threshold_entity: "sensor.lo" });
    expect(forecastTier(makeHass({ "sensor.lo": entity("unavailable") }), cfg, 5)).toBe("low");
    expect(forecastTier(makeHass({ "sensor.lo": entity(-1) }), cfg, 5)).toBe("low");
  });
});

describe("threshold zones", () => {
  const ids = ["sensor.d0", "sensor.d1"] as never;
  const hass = makeHass({
    "sensor.d0": entity(5, KWH),
    "sensor.d1": entity(20, KWH),
    "sensor.lo": entity(10000, WH),
  });
  const firstRow = (config: Parameters<typeof makeConfig>[0]) =>
    buildRows(hass, makeConfig({ forecast_entities: ids, ...config }))[0];

  it("is off by default", () => {
    const row = firstRow({ low_threshold: 5, high_threshold: 15 });
    expect(row.lowThresholdPct).toBeNull();
    expect(row.highThresholdPct).toBeNull();
  });

  it("switches each zone independently, on the bar scale", () => {
    const thresholds = { low_threshold: 5, high_threshold: 15 };
    expect(firstRow({ ...thresholds, show_low_threshold_zone: true }))
      .toMatchObject({ lowThresholdPct: 25, highThresholdPct: null });
    expect(firstRow({ ...thresholds, show_high_threshold_zone: true }))
      .toMatchObject({ lowThresholdPct: null, highThresholdPct: 75 });
  });

  it("gives every column the same position, including days without a forecast", () => {
    const rows = buildRows(hass, makeConfig({
      forecast_entities: ids,
      low_threshold: 5,
      show_low_threshold_zone: true,
    }));
    expect(rows.map((r) => r.lowThresholdPct)).toEqual(Array(7).fill(25));
  });

  it("uses the sensor value, normalised to kWh, over the static value", () => {
    const row = firstRow({
      low_threshold: 1,
      low_threshold_entity: "sensor.lo",
      show_low_threshold_zone: true,
    });
    expect(row.lowThresholdPct).toBe(50);
  });

  it("hides a zone above the scale but keeps one at the top", () => {
    expect(firstRow({ high_threshold: 21, show_high_threshold_zone: true }).highThresholdPct).toBeNull();
    expect(firstRow({ high_threshold: 20, show_high_threshold_zone: true }).highThresholdPct).toBe(100);
  });

  it("has no zone without a threshold or any forecast", () => {
    expect(firstRow({ show_low_threshold_zone: true }).lowThresholdPct).toBeNull();
    const rows = buildRows(makeHass({}), makeConfig({ low_threshold: 5, show_low_threshold_zone: true }));
    expect(rows[0].lowThresholdPct).toBeNull();
  });
});

describe("computeHeaderStats", () => {
  const ids = ["sensor.d0", "sensor.d1"] as never;

  it("derives +1HR and LEFT from the next full hour onward", () => {
    const hours = Array.from({ length: 24 }, (_, h) => (h >= 12 && h <= 16 ? h - 11 : 0));
    const hass = makeHass({ "sensor.d0": entity(5, { ...KWH, hours }) });
    const stats = computeHeaderStats(hass, makeConfig({ forecast_entities: ids, integration_type: "volcast" }));
    expect(stats.nextHourKwh).toBe(3);   // hour 14
    expect(stats.forecastLeftKwh).toBe(12); // hours 14 + 15 + 16
  });

  it("lets configured sensors override derived values", () => {
    const hass = makeHass({
      "sensor.d0": entity(5, { ...KWH, hours: [0, 1] }),
      "sensor.next": entity(900, WH),
      "sensor.left": entity(2, KWH),
    });
    const stats = computeHeaderStats(hass, makeConfig({
      forecast_entities: ids,
      next_hour_entity: "sensor.next",
      remaining_today_entity: "sensor.left",
    }));
    expect(stats.nextHourKwh).toBe(0.9);
    expect(stats.forecastLeftKwh).toBe(2);
  });

  it("totals the week across numeric forecasts only", () => {
    const hass = makeHass({ "sensor.d0": entity(4, KWH), "sensor.d1": entity("unavailable") });
    expect(computeHeaderStats(hass, makeConfig({ forecast_entities: ids })).week)
      .toEqual({ totalKwh: 4, avgKwh: 4 });
  });

  it("reports nothing when no sensors have data", () => {
    expect(computeHeaderStats(makeHass({}), makeConfig())).toEqual({
      powerW: null,
      actualKwh: null,
      nextHourKwh: null,
      forecastLeftKwh: null,
      week: null,
    });
  });
});

describe("fetchActualHourly", () => {
  const history = (...points: Array<[number, number, number]>) =>
    points.map(([hour, minute, state]) => ({
      state: String(state),
      last_changed: new Date(2026, 5, 15, hour, minute).toISOString(),
    }));

  it("differences a cumulative sensor across hour boundaries", async () => {
    const callApi = vi.fn().mockResolvedValue([history([8, 0, 0], [9, 30, 1], [10, 30, 3])]);
    const hass = makeHass({ "sensor.a": entity(3, KWH) }, { callApi: callApi as never });
    const map = await fetchActualHourly(hass, "sensor.a");
    expect([...map]).toEqual([[9, 1], [10, 2]]);
    expect(callApi.mock.calls[0][1]).toContain("filter_entity_id=sensor.a");
  });

  it("normalises Wh and skips sensor resets", async () => {
    const callApi = vi.fn().mockResolvedValue([history([8, 0, 0], [8, 30, 2000], [9, 30, 500])]);
    const hass = makeHass({ "sensor.a": entity(1, WH) }, { callApi: callApi as never });
    expect([...await fetchActualHourly(hass, "sensor.a")]).toEqual([[8, 2]]);
  });

  it("returns an empty map instead of rejecting", async () => {
    const failing = vi.fn().mockRejectedValue(new Error("offline"));
    const hass = makeHass({}, { callApi: failing as never });
    expect((await fetchActualHourly(hass, "sensor.a")).size).toBe(0);
    expect((await fetchActualHourly(makeHass({}), "sensor.a")).size).toBe(0);
    expect((await fetchActualHourly(undefined, "sensor.a")).size).toBe(0);
  });
});
