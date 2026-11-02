import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { autoDetect, parseHours, readHoursAttr, sumEstimate10 } from "../src/integrations/index.js";
import { entity, KWH, makeHass, sensor, WH } from "./helpers.js";

// Payloads follow the formats documented in the parsers; they are not captures
// from live integrations.

beforeEach(() => {
  vi.spyOn(console, "debug").mockImplementation(() => {});
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("readHoursAttr", () => {
  const state = entity(1, { hours: "hours", detailedForecast: "detailed", wh_period: "period" });

  it.each([
    ["solcast", "detailed"],
    ["volcast", "hours"],
    ["forecast_solar", undefined],
    ["open_meteo_solar_forecast", "period"],
    ["manual", "hours"],
  ] as const)("picks the right attribute for %s", (type, expected) => {
    expect(readHoursAttr(type, state)).toBe(expected);
  });

  it("falls back to the other attribute name", () => {
    expect(readHoursAttr("solcast", entity(1, { hours: "hours" }))).toBe("hours");
    expect(readHoursAttr("manual", entity(1, { detailedForecast: "detailed" }))).toBe("detailed");
  });

  it("returns undefined without an entity", () => {
    expect(readHoursAttr("solcast", undefined)).toBeUndefined();
  });
});

describe("parseHours", () => {
  it("returns no points for null and undefined", () => {
    expect(parseHours("manual", null)).toEqual([]);
    expect(parseHours("solcast", undefined)).toEqual([]);
  });

  it("treats an unknown integration type as manual", () => {
    expect(parseHours("other" as "manual", [0, 1])).toEqual([{ hour: 1, kwh: 1 }]);
  });

  describe("solcast", () => {
    const at = (hour: number, minute: number) => new Date(2026, 5, 15, hour, minute).toISOString();

    it("aggregates 30-minute kW periods into hourly kWh", () => {
      const raw = [
        { period_start: at(5, 30), pv_estimate: 0 },
        { period_start: at(6, 0), pv_estimate: 2 },
        { period_start: at(6, 30), pv_estimate: 4 },
        { period_start: at(7, 0), pv_estimate: 1 },
        { period_start: at(8, 0), pv_estimate: 0 },
      ];
      expect(parseHours("solcast", raw)).toEqual([
        { hour: 6, kwh: 3 },
        { hour: 7, kwh: 0.5 },
      ]);
    });

    it("accepts an object keyed by hour from the hours fallback", () => {
      expect(parseHours("solcast", { "7": 1, "9": "2.5" })).toEqual([
        { hour: 7, kwh: 1 },
        { hour: 9, kwh: 2.5 },
      ]);
    });

    it("returns no points rather than throwing on malformed entries", () => {
      expect(parseHours("solcast", [null])).toEqual([]);
    });
  });

  describe("volcast", () => {
    it("treats bare numbers as midnight-indexed", () => {
      expect(parseHours("volcast", [0, 0, 1, 0, 2, 0])).toEqual([
        { hour: 2, kwh: 1 },
        { hour: 3, kwh: 0 },
        { hour: 4, kwh: 2 },
      ]);
    });

    it("resolves the hour from explicit fields, then ISO strings, and sums repeats", () => {
      const raw = [
        { period_start: "2026-06-15T09:00:00", value: 1.5 },
        { datetime: "2026-06-15T09:30:00", kwh: "0.5" },
        { hour: 14, energy: 2 },
        { hour: "15", wh: 1 },
      ];
      expect(parseHours("volcast", raw)).toEqual([
        { hour: 9, kwh: 2 },
        { hour: 14, kwh: 2 },
        { hour: 15, kwh: 1 },
      ]);
    });

    it("skips out-of-range hours and unexpected values", () => {
      expect(parseHours("volcast", [{ hour: 24, value: 1 }, null, "x", 2])).toEqual([
        { hour: 3, kwh: 2 },
      ]);
    });

    it("rejects non-arrays", () => {
      expect(parseHours("volcast", { "6": 1 })).toEqual([]);
    });
  });

  describe("open-meteo", () => {
    it("converts Wh to kWh and removes every zero hour", () => {
      const raw = {
        "2026-06-15T05:00:00": 0,
        "2026-06-15T06:00:00": 500,
        "2026-06-15T06:30:00": "250",
        "2026-06-15T07:00:00": 0,
        "2026-06-15T08:00:00": 1000,
        "not-a-date": 900,
      };
      expect(parseHours("open_meteo_solar_forecast", raw)).toEqual([
        { hour: 6, kwh: 0.75 },
        { hour: 8, kwh: 1 },
      ]);
    });

    it("rejects arrays", () => {
      expect(parseHours("open_meteo_solar_forecast", [1, 2])).toEqual([]);
    });
  });

  describe("forecast_solar", () => {
    it("has no hourly data", () => {
      expect(parseHours("forecast_solar", [1, 2])).toEqual([]);
    });
  });

  describe("manual", () => {
    it("detects the Solcast shape from the first entry", () => {
      const raw = [{ period_start: new Date(2026, 5, 15, 9).toISOString(), pv_estimate: 2 }];
      expect(parseHours("manual", raw)).toEqual([{ hour: 9, kwh: 1 }]);
    });

    it("parses mixed arrays and trims surrounding zeros", () => {
      expect(parseHours("manual", [0, { hour: 6, power_kw: 1.5 }, { time: "7", solar: "2" }, 0])).toEqual([
        { hour: 6, kwh: 1.5 },
        { hour: 7, kwh: 2 },
      ]);
    });

    it("parses objects keyed by hour", () => {
      expect(parseHours("manual", { "14": 2, "6": "0.5", "15": "bad" })).toEqual([
        { hour: 6, kwh: 0.5 },
        { hour: 14, kwh: 2 },
      ]);
    });

    it("returns no points when everything is zero or the type is wrong", () => {
      expect(parseHours("manual", [0, 0])).toEqual([]);
      expect(parseHours("manual", "nope")).toEqual([]);
    });
  });
});

describe("sumEstimate10", () => {
  it("sums half-hourly kW into kWh", () => {
    expect(sumEstimate10([{ pv_estimate10: 2 }, { pv_estimate10: 1 }, {}])).toBe(1.5);
  });

  it("returns null when there is nothing to sum", () => {
    expect(sumEstimate10(undefined)).toBeNull();
    expect(sumEstimate10([])).toBeNull();
    expect(sumEstimate10([{ pv_estimate: 1 }])).toBeNull();
  });
});

describe("autoDetect", () => {
  it("maps Solcast sensors by keyword and ignores non-kWh sensors", () => {
    const ids = ["sensor.s_forecast_today", "sensor.s_forecast_day_7", "sensor.s_forecast_tomorrow_power"];
    const hass = makeHass({
      [ids[0]]: entity(1, KWH),
      [ids[1]]: entity(1, KWH),
      [ids[2]]: entity(1, { unit_of_measurement: "W" }),
    });
    const result = autoDetect(ids.map((id) => sensor(id, "solcast_solar")), hass);
    expect(result.integration_type).toBe("solcast");
    expect(result.forecast_entities).toEqual([ids[0], "", "", "", "", "", ids[1]]);
  });

  it("maps forecast.solar sensors and captures the remaining sensor", () => {
    const ids = [
      "sensor.fs_energy_production_today",
      "sensor.fs_energy_production_tomorrow",
      "sensor.fs_energy_production_today_remaining",
    ];
    const hass = makeHass(Object.fromEntries(ids.map((id) => [id, entity(1, WH)])));
    const result = autoDetect(ids.map((id) => sensor(id, "forecast_solar")), hass);
    expect(result.integration_type).toBe("forecast_solar");
    expect(result.forecast_entities.slice(0, 3)).toEqual([ids[0], ids[1], ""]);
    expect(result.remaining_today_entity).toBe(ids[2]);
  });

  it("maps Open-Meteo sensors and skips d7", () => {
    const ids = [
      "sensor.om_energy_production_today",
      "sensor.om_energy_production_d2",
      "sensor.om_energy_production_d7",
      "sensor.om_energy_production_today_remaining",
    ];
    const hass = makeHass(Object.fromEntries(ids.map((id) => [id, entity(1, KWH)])));
    const result = autoDetect(ids.map((id) => sensor(id, "open_meteo_solar_forecast")), hass);
    expect(result.integration_type).toBe("open_meteo_solar_forecast");
    expect(result.forecast_entities).toEqual([ids[0], "", ids[1], "", "", "", ""]);
    expect(result.remaining_today_entity).toBe(ids[3]);
  });

  it("falls back to Volcast and places sensors by date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 5, 15, 12));
    const hours = { hours: [1] };
    const hass = makeHass({
      "sensor.v_2026_06_16": entity(1, hours),
      "sensor.v_attr": entity(1, { ...hours, date: "2026-06-15" }),
      "sensor.v_undated": entity(1, hours),
      "sensor.unrelated": entity(1),
    });
    const ids = Object.keys(hass.states);
    const result = autoDetect(ids.map((id) => sensor(id, "volcast")), hass);
    expect(result.integration_type).toBe("volcast");
    expect(result.forecast_entities.slice(0, 3)).toEqual([
      "sensor.v_attr",
      "sensor.v_2026_06_16",
      "sensor.v_undated",
    ]);
  });

  it("sorts undated Volcast sensors alphabetically", () => {
    const hass = makeHass({ "sensor.b": entity(1, { hours: [] }), "sensor.a": entity(1, { hours: [] }) });
    const result = autoDetect(
      ["sensor.b", "sensor.a"].map((id) => sensor(id, "volcast")),
      hass
    );
    expect(result.forecast_entities.slice(0, 2)).toEqual(["sensor.a", "sensor.b"]);
  });
});
