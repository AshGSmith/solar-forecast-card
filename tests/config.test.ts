import { describe, expect, it } from "vitest";
import { normalizeConfig } from "../src/config.js";
import { fromFormData, toFormData } from "../src/editor/form-data.js";

describe("normalizeConfig", () => {
  it("applies defaults", () => {
    const cfg = normalizeConfig({});
    expect(cfg).toMatchObject({
      type: "custom:solar-forecast-card",
      show_header: true,
      display_estimate10: false,
      main_view: "daily",
      show_low_threshold_zone: false,
      show_high_threshold_zone: false,
      integration_type: "manual",
      forecast_entities: ["", "", "", "", "", "", ""],
    });
  });

  it("reads the legacy hourly setting, with main_view taking precedence", () => {
    expect(normalizeConfig({ show_hourly_as_main: true }).main_view).toBe("hourly");
    expect(normalizeConfig({ show_hourly_as_main: false }).main_view).toBe("daily");
    expect(normalizeConfig({ show_hourly_as_main: true, main_view: "history" }).main_view).toBe("history");
    expect(normalizeConfig({ show_hourly_as_main: true })).not.toHaveProperty("show_hourly_as_main");
  });

  it("pads and truncates forecast entities to seven", () => {
    expect(normalizeConfig({ forecast_entities: ["a"] as never }).forecast_entities).toHaveLength(7);
    const long = ["1", "2", "3", "4", "5", "6", "7", "8"] as never;
    expect(normalizeConfig({ forecast_entities: long }).forecast_entities).toEqual(["1", "2", "3", "4", "5", "6", "7"]);
  });

  it("drops malformed array entries", () => {
    const arrays = [{ entity: "sensor.a", label: "A" }, null, { label: "B" }] as never;
    expect(normalizeConfig({ actual_arrays: arrays }).actual_arrays).toEqual([{ entity: "sensor.a", label: "A" }]);
  });
});

describe("editor form data", () => {
  const cfg = normalizeConfig({
    title: "Roof",
    forecast_entities: ["sensor.a"] as never,
    integration_type: "solcast",
    actual_arrays: [{ entity: "sensor.e", label: "E" }],
    inverter_max_kw: 5,
    desktop_text_scale: 120,
    font_size: 14,
    show_low_threshold_zone: true,
    show_high_threshold_zone: true,
    threshold_zone_opacity: 40,
  });

  it("round-trips a config", () => {
    expect(fromFormData(toFormData(cfg), cfg)).toEqual(cfg);
  });

  it("shows the default tint opacity when unset", () => {
    expect(toFormData(normalizeConfig({})).threshold_zone_opacity).toBe(15);
  });

  it("keeps fields ha-form doesn't manage", () => {
    const current = { ...cfg, date_format: "MM/DD" as const };
    const result = fromFormData(toFormData(current), current);
    expect(result.actual_arrays).toEqual(cfg.actual_arrays);
    expect(result.date_format).toBe("MM/DD");
  });

  it("omits blank values and default slider values", () => {
    const data = {
      ...toFormData(cfg),
      title: "",
      live_power_entity: "",
      desktop_text_scale: 100,
      threshold_zone_opacity: 15,
    };
    const result = fromFormData(data, cfg);
    expect(result.title).toBeUndefined();
    expect(result.live_power_entity).toBeUndefined();
    expect(result.desktop_text_scale).toBeUndefined();
    expect(result.threshold_zone_opacity).toBeUndefined();
  });
});
