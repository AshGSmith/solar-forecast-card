import { describe, expect, it } from "vitest";
import { parseHours } from "../src/integrations/index.js";

// CI runs this suite under several TZ values. Volcast and Open-Meteo read the
// hour from the timestamp text, so an offset must not move it. Solcast goes
// through Date, so it follows the browser's timezone.
describe("timezone handling", () => {
  it("runs in the timezone CI asked for", () => {
    const date = new Date("2026-06-15T09:00:00Z");
    expect(date.toLocaleString("en-GB"))
      .toBe(date.toLocaleString("en-GB", { timeZone: process.env.TZ }));
  });

  it("keeps the written hour for Volcast", () => {
    const raw = [{ period_start: "2026-06-15T09:00:00+00:00", value: 1 }];
    expect(parseHours("volcast", raw)).toEqual([{ hour: 9, kwh: 1 }]);
  });

  it("keeps the written hour for Open-Meteo", () => {
    const raw = { "2026-06-15T09:00:00+00:00": 1000 };
    expect(parseHours("open_meteo_solar_forecast", raw)).toEqual([{ hour: 9, kwh: 1 }]);
  });

  it("converts Solcast periods to the browser's local hour", () => {
    const periodStart = "2026-06-15T09:00:00+00:00";
    const raw = [{ period_start: periodStart, pv_estimate: 2 }];
    expect(parseHours("solcast", raw)).toEqual([
      { hour: new Date(periodStart).getHours(), kwh: 1 },
    ]);
  });
});
