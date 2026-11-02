// ── ha-form schema (minimal typings — HA provides the element at runtime) ────

interface Selector {
  text?: Record<string, unknown>;
  device?: Record<string, unknown>;
  entity?: { domain?: string | string[] };
  select?: { options: Array<{ value: string; label: string }> };
  icon?: Record<string, unknown>;
  boolean?: Record<string, unknown>;
  number?: { min?: number; max?: number; step?: number; mode?: string; unit_of_measurement?: string };
}

export interface HaFormSchema {
  name: string;
  required?: boolean;
  selector: Selector;
}

// ── Schema segments (rendered with section headers between them) ──────────────

// Device field — rendered first as the primary entry point
export const SCHEMA_DEVICE: HaFormSchema[] = [
  { name: "device_id", selector: { device: {} } },
];

// Integration type — auto-set by device detection; exposed here as a manual
// override for users who configure forecast_entities without a device.
// Remaining top-level fields — always visible
export const SCHEMA_TOP: HaFormSchema[] = [
  { name: "title",              selector: { text: {} } },
  { name: "icon",               selector: { icon: {} } },
  { name: "show_header",        selector: { boolean: {} } },
  { name: "display_estimate10", selector: { boolean: {} } },
];

export const SCHEMA_FORECAST: HaFormSchema[] = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
  name: `forecast_entity_${i}` as const,
  selector: { entity: { domain: "sensor" } },
}));

// All Live Data entity pickers in one schema so a single ha-form instance
// handles them — matching the same pattern used by SCHEMA_FORECAST (all 7
// forecast entities in one ha-form), which is what makes them correctly
// reflect auto-detected values in the editor.
export const SCHEMA_LIVE: HaFormSchema[] = [
  { name: "live_power_entity",      selector: { entity: { domain: "sensor" } } },
  { name: "today_actual_entity",    selector: { entity: { domain: "sensor" } } },
  { name: "next_hour_entity",       selector: { entity: { domain: "sensor" } } },
  { name: "remaining_today_entity", selector: { entity: { domain: "sensor" } } },
];

export const SCHEMA_DISPLAY_TEXT_SCALE: HaFormSchema[] = [
  {
    name: "desktop_text_scale",
    selector: {
      number: { min: 100, max: 150, step: 5, mode: "slider", unit_of_measurement: "%" },
    },
  },
];

export const SCHEMA_DISPLAY_FONT_SIZE: HaFormSchema[] = [
  {
    name: "font_size",
    selector: {
      number: { min: 10, max: 24, step: 1, mode: "box", unit_of_measurement: "px" },
    },
  },
];

export const SCHEMA_DISPLAY_BAR_WIDTH: HaFormSchema[] = [
  {
    name: "bar_width",
    selector: {
      number: { min: 8, max: 40, step: 1, mode: "box", unit_of_measurement: "px" },
    },
  },
];

type Translate = (key: string) => string;

export function mainViewSchema(t: Translate): HaFormSchema[] {
  return [
    {
      name: "main_view",
      selector: {
        select: {
          options: [
            { value: "daily",   label: t("editor.options.mainViewDaily") },
            { value: "hourly",  label: t("editor.options.mainViewHourly") },
            { value: "history", label: t("editor.options.mainViewHistory") },
          ],
        },
      },
    },
  ];
}

export const SCHEMA_ENERGY_PROVIDER: HaFormSchema[] = [
  { name: "export_rate_entity", selector: { entity: {} } },
];

export const SCHEMA_SYSTEM: HaFormSchema[] = [
  { name: "inverter_max_kw", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kW"  } } },
  { name: "solar_max_kwp",   selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWp" } } },
];

export const SCHEMA_THRESHOLDS: HaFormSchema[] = [
  { name: "low_threshold",  selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
  { name: "low_threshold_entity", selector: { entity: { domain: "sensor" } } },
  { name: "show_low_threshold_zone", selector: { boolean: {} } },
  { name: "high_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
  { name: "high_threshold_entity", selector: { entity: { domain: "sensor" } } },
  { name: "show_high_threshold_zone", selector: { boolean: {} } },
  {
    name: "threshold_zone_opacity",
    selector: {
      number: { min: 5, max: 100, step: 5, mode: "slider", unit_of_measurement: "%" },
    },
  },
];

export function integrationSchema(t: Translate): HaFormSchema[] {
  return [
    {
      name: "integration_type",
      selector: {
        select: {
          options: [
            { value: "manual",                    label: t("editor.options.autoDetect") },
            { value: "solcast",                   label: t("editor.options.solcast") },
            { value: "volcast",                   label: t("editor.options.volcast") },
            { value: "forecast_solar",            label: t("editor.options.forecastSolar") },
            { value: "open_meteo_solar_forecast", label: t("editor.options.openMeteo") },
          ],
        },
      },
    },
  ];
}
