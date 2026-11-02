import type { HomeAssistant, SolarForecastCardConfig } from "../types.js";

export interface ArrayActual {
  label: string;
  kwh: number;
}

/** Read an energy sensor, normalising Wh to kWh. Null when absent or non-numeric. */
export function readKwh(
  hass: HomeAssistant | undefined,
  entityId: string | undefined
): number | null {
  const st = entityId ? hass?.states[entityId] : undefined;
  const raw = parseFloat(st?.state ?? "");
  if (!isFinite(raw)) return null;
  const unit = (st?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
  return unit === "wh" ? raw / 1000 : raw;
}

/** Read a power sensor, normalising kW to W. Null when absent or non-numeric. */
export function readPowerW(
  hass: HomeAssistant | undefined,
  entityId: string | undefined
): number | null {
  const st = entityId ? hass?.states[entityId] : undefined;
  const raw = parseFloat(st?.state ?? "");
  if (!isFinite(raw)) return null;
  const unit = (st?.attributes?.unit_of_measurement as string | undefined) ?? "W";
  return unit.toLowerCase() === "kw" ? raw * 1000 : raw;
}

/** Per-array actuals from actual_arrays. Null when none are configured. */
export function readArrayActuals(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig
): ArrayActual[] | null {
  if (!cfg.actual_arrays?.length) return null;
  return cfg.actual_arrays.map((a) => ({
    label: a.label || "?",
    kwh: readKwh(hass, a.entity) ?? 0,
  }));
}

/**
 * Today's actual generation.
 *
 * Arrays are an optional visual enhancement layer. When they are producing
 * (sum > 0) their sum is the canonical total, used for bar height, the dotted
 * remainder, isComplete and the header. When they sum to 0 (pre-sunrise, all
 * entities unavailable, incomplete config, etc.) this falls back to
 * today_actual_entity. The bars and the header both use this function, so
 * they always agree.
 */
export function resolveActualKwh(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig,
  arrays: ArrayActual[] | null
): number | null {
  const sumKwh = arrays?.reduce((s, a) => s + a.kwh, 0) ?? 0;
  return sumKwh > 0 ? sumKwh : readKwh(hass, cfg.today_actual_entity);
}
