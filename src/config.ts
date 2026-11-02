import type { ActualArrayEntry, SolarForecastCardConfig } from "./types.js";

export function normalizeConfig(
  raw: Partial<SolarForecastCardConfig>
): SolarForecastCardConfig {
  const incoming = Array.isArray(raw.forecast_entities)
    ? raw.forecast_entities.slice(0, 7)
    : [];
  while (incoming.length < 7) incoming.push("");

  return {
    type:               raw.type ?? "custom:solar-forecast-card",
    title:              raw.title,
    icon:               raw.icon,
    show_header:          raw.show_header !== false,
    display_estimate10:   raw.display_estimate10 ?? false,
    device_id:          raw.device_id,
    integration_type:   raw.integration_type ?? "manual",
    forecast_entities:  incoming as SolarForecastCardConfig["forecast_entities"],
    export_rate_entity:     raw.export_rate_entity,
    live_power_entity:      raw.live_power_entity,
    today_actual_entity:    raw.today_actual_entity,
    next_hour_entity:       raw.next_hour_entity,
    remaining_today_entity: raw.remaining_today_entity,
    actual_arrays: Array.isArray(raw.actual_arrays)
      ? (raw.actual_arrays as ActualArrayEntry[]).filter(
          (e): e is ActualArrayEntry =>
            typeof e === "object" && e !== null && typeof e.entity === "string"
        )
      : undefined,
    date_format:          raw.date_format,
    time_format:          raw.time_format,
    show_hourly_as_main:  raw.show_hourly_as_main ?? false,
    inverter_max_kw:      raw.inverter_max_kw,
    solar_max_kwp:        raw.solar_max_kwp,
    low_threshold:        raw.low_threshold,
    low_threshold_entity: raw.low_threshold_entity,
    high_threshold:       raw.high_threshold,
    high_threshold_entity: raw.high_threshold_entity,
    show_low_threshold_line:  raw.show_low_threshold_line ?? false,
    show_high_threshold_line: raw.show_high_threshold_line ?? false,
    desktop_text_scale:   raw.desktop_text_scale,
    font_size:            raw.font_size,
    bar_width:            raw.bar_width,
  };
}
