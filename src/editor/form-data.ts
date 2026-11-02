import { DEFAULT_THRESHOLD_ZONE_OPACITY } from "../config.js";
import type { MainView, SolarForecastCardConfig } from "../types.js";

// ── Flat form data (ha-form requires a plain object) ─────────────────────────

export interface FormData {
  title: string;
  icon: string;
  show_header: boolean;
  display_estimate10: boolean;
  device_id: string;
  forecast_entity_0: string;
  forecast_entity_1: string;
  forecast_entity_2: string;
  forecast_entity_3: string;
  forecast_entity_4: string;
  forecast_entity_5: string;
  forecast_entity_6: string;
  export_rate_entity: string;
  live_power_entity: string;
  today_actual_entity: string;
  next_hour_entity: string;
  remaining_today_entity: string;
  integration_type: string;
  main_view: string;
  inverter_max_kw: number | undefined;
  solar_max_kwp: number | undefined;
  low_threshold: number | undefined;
  low_threshold_entity: string;
  high_threshold: number | undefined;
  high_threshold_entity: string;
  show_low_threshold_zone: boolean;
  show_high_threshold_zone: boolean;
  threshold_zone_opacity: number;
  desktop_text_scale: number;
  font_size: number | undefined;
  bar_width: number | undefined;
}

/** Entity FormData keys that count as "manually edited" when changed by the user. */
export const ENTITY_FIELDS: string[] = [
  "forecast_entity_0", "forecast_entity_1", "forecast_entity_2",
  "forecast_entity_3", "forecast_entity_4", "forecast_entity_5",
  "forecast_entity_6", "today_actual_entity", "live_power_entity",
  "next_hour_entity", "remaining_today_entity",
];

function optionalNumber(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

export function toFormData(cfg: SolarForecastCardConfig): FormData {
  return {
    title:               cfg.title              ?? "",
    icon:                cfg.icon               ?? "",
    show_header:          cfg.show_header,
    display_estimate10:   cfg.display_estimate10 ?? false,
    device_id:            cfg.device_id          ?? "",
    integration_type:     cfg.integration_type   ?? "manual",
    export_rate_entity:     cfg.export_rate_entity     ?? "",
    live_power_entity:      cfg.live_power_entity      ?? "",
    today_actual_entity:    cfg.today_actual_entity    ?? "",
    next_hour_entity:       cfg.next_hour_entity       ?? "",
    remaining_today_entity: cfg.remaining_today_entity ?? "",
    main_view:           cfg.main_view ?? "daily",
    inverter_max_kw:     cfg.inverter_max_kw,
    solar_max_kwp:       cfg.solar_max_kwp,
    low_threshold:       cfg.low_threshold,
    low_threshold_entity: cfg.low_threshold_entity ?? "",
    high_threshold:      cfg.high_threshold,
    high_threshold_entity: cfg.high_threshold_entity ?? "",
    show_low_threshold_zone:  cfg.show_low_threshold_zone ?? false,
    show_high_threshold_zone: cfg.show_high_threshold_zone ?? false,
    threshold_zone_opacity:   cfg.threshold_zone_opacity ?? DEFAULT_THRESHOLD_ZONE_OPACITY,
    desktop_text_scale:  cfg.desktop_text_scale ?? 100,
    font_size:           cfg.font_size,
    bar_width:           cfg.bar_width,
    forecast_entity_0:   cfg.forecast_entities[0] ?? "",
    forecast_entity_1:   cfg.forecast_entities[1] ?? "",
    forecast_entity_2:   cfg.forecast_entities[2] ?? "",
    forecast_entity_3:   cfg.forecast_entities[3] ?? "",
    forecast_entity_4:   cfg.forecast_entities[4] ?? "",
    forecast_entity_5:   cfg.forecast_entities[5] ?? "",
    forecast_entity_6:   cfg.forecast_entities[6] ?? "",
  };
}

/**
 * @param current  Config being edited; supplies the fields ha-form doesn't manage.
 */
export function fromFormData(
  data: FormData,
  current: SolarForecastCardConfig | undefined
): SolarForecastCardConfig {
  return {
    type:             current?.type ?? "custom:solar-forecast-card",
    title:            data.title || undefined,
    icon:             data.icon  || undefined,
    show_header:        data.show_header,
    display_estimate10: data.display_estimate10,
    device_id:          data.device_id || undefined,
    integration_type: (data.integration_type as SolarForecastCardConfig["integration_type"]) || "manual",
    forecast_entities: [
      data.forecast_entity_0,
      data.forecast_entity_1,
      data.forecast_entity_2,
      data.forecast_entity_3,
      data.forecast_entity_4,
      data.forecast_entity_5,
      data.forecast_entity_6,
    ] as SolarForecastCardConfig["forecast_entities"],
    export_rate_entity:     data.export_rate_entity     || undefined,
    live_power_entity:      data.live_power_entity      || undefined,
    today_actual_entity:    data.today_actual_entity    || undefined,
    next_hour_entity:       data.next_hour_entity       || undefined,
    remaining_today_entity: data.remaining_today_entity || undefined,
    actual_arrays:          current?.actual_arrays,
    date_format:            current?.date_format,
    time_format:            current?.time_format,
    main_view: (data.main_view as MainView) || "daily",
    inverter_max_kw:    typeof data.inverter_max_kw    === "number" ? data.inverter_max_kw    : undefined,
    solar_max_kwp:      typeof data.solar_max_kwp      === "number" ? data.solar_max_kwp      : undefined,
    low_threshold:      typeof data.low_threshold      === "number" ? data.low_threshold      : undefined,
    high_threshold:     typeof data.high_threshold     === "number" ? data.high_threshold     : undefined,
    low_threshold_entity: data.low_threshold_entity || undefined,
    high_threshold_entity: data.high_threshold_entity || undefined,
    show_low_threshold_zone:  data.show_low_threshold_zone,
    show_high_threshold_zone: data.show_high_threshold_zone,
    // Only persist when non-default, as for desktop_text_scale.
    threshold_zone_opacity:
      typeof data.threshold_zone_opacity === "number" &&
      data.threshold_zone_opacity !== DEFAULT_THRESHOLD_ZONE_OPACITY
        ? data.threshold_zone_opacity
        : undefined,
    // Only persist when non-default (100) so YAML stays clean for most users.
    desktop_text_scale: typeof data.desktop_text_scale === "number" && data.desktop_text_scale !== 100
      ? data.desktop_text_scale
      : undefined,
    font_size: optionalNumber(data.font_size),
    bar_width: optionalNumber(data.bar_width),
  };
}
