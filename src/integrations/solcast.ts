import type { EntityRegistryEntry, HomeAssistant } from "../types.js";
import {
  bucketsToPoints,
  emptySlots,
  hasPlatform,
  logDetectedSlots,
  parseKeyedHours,
  sensorUnit,
  trimZeroHours,
} from "./shared.js";
import type { AutoDetectResult, ForecastPeriod, HourPoint, IntegrationAdapter } from "./types.js";

const DAY_KEYWORDS: Array<[string, number]> = [
  ["forecast_today",    0],
  ["forecast_tomorrow", 1],
  ["forecast_day_3",    2],
  ["forecast_day_4",    3],
  ["forecast_day_5",    4],
  ["forecast_day_6",    5],
  ["forecast_day_7",    6],
];

/** Parse detailedForecast: [{period_start: ISO, pv_estimate: kW}, …], 30-min periods. */
export function parseSolcastPeriods(entries: Array<Record<string, unknown>>): HourPoint[] {
  const buckets = new Map<number, number>();
  for (const entry of entries) {
    const periodStart = entry.period_start;
    if (typeof periodStart !== "string") continue;
    const d = new Date(periodStart);
    if (isNaN(d.getTime())) continue;
    const hour     = d.getHours();
    const estimate = typeof entry.pv_estimate === "number" ? entry.pv_estimate : 0;
    const kwh      = estimate * 0.5; // 30-min period in kW → kWh
    buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
  }
  return trimZeroHours(bucketsToPoints(buckets));
}

/**
 * Sum the pv_estimate10 values from a Solcast detailedForecast attribute.
 *
 * detailedForecast is an array of 30-min period objects:
 *   { period_start: ISO, pv_estimate: kW, pv_estimate10: kW, pv_estimate90: kW }
 *
 * pv_estimate10 is the 10th-percentile kW output for each 30-min slot.
 * Multiplying by 0.5 converts the half-hourly kW figure to kWh.
 *
 * Returns null when the attribute is absent, not an array, or every entry
 * lacks a finite pv_estimate10 value — so the caller can cleanly skip
 * rendering rather than showing 0.00 kWh.
 */
export function sumEstimate10(raw: unknown): number | null {
  if (!Array.isArray(raw) || raw.length === 0) return null;
  let total  = 0;
  let hasAny = false;
  for (const entry of raw as Array<Record<string, unknown>>) {
    const val = entry.pv_estimate10;
    if (typeof val === "number" && isFinite(val)) {
      total  += val * 0.5; // 30-min period kW → kWh
      hasAny  = true;
    }
  }
  return hasAny ? total : null;
}

/**
 * Solcast entities don't carry an `hours` array attribute so the generic
 * detector won't find them. Instead we match against the well-known keywords
 * the integration embeds in every entity_id:
 *
 *   forecast_today → slot 0  (today)
 *   forecast_tomorrow → slot 1  (tomorrow)
 *   forecast_day_3 … forecast_day_7 → slots 2–6
 *
 * Only kWh sensors are considered to avoid picking up power/API sensors.
 * today_actual_entity is left undefined — Solcast doesn't expose actual
 * generation; that sensor typically comes from the inverter integration.
 */
function detect(
  sensors: EntityRegistryEntry[],
  hass: HomeAssistant
): AutoDetectResult | null {
  if (!hasPlatform(sensors, "solcast_solar")) return null;

  const slots = emptySlots();

  for (const sensor of sensors) {
    if (sensorUnit(hass, sensor.entity_id) !== "kWh") continue;

    for (const [keyword, slot] of DAY_KEYWORDS) {
      if (sensor.entity_id.includes(keyword)) {
        slots[slot] = sensor.entity_id;
        break;
      }
    }
  }

  logDetectedSlots("Solcast", slots);

  return {
    forecast_entities: slots as AutoDetectResult["forecast_entities"],
    integration_type:  "solcast",
  };
}

/**
 * Solcast keeps past forecasts in its own cache, up to 730 days by default, and
 * returns them from the query_forecast_data action. For past periods this is
 * the last forecast made, so it can be closer to reality than a morning one.
 */
async function forecastHistory(
  hass: HomeAssistant,
  start: Date,
  end: Date
): Promise<ForecastPeriod[] | null> {
  if (!hass.callWS) return null;

  try {
    const result = await hass.callWS<{ response?: { data?: Array<Record<string, unknown>> } }>({
      type: "call_service",
      domain: "solcast_solar",
      service: "query_forecast_data",
      service_data: {
        start_date_time: start.toISOString(),
        end_date_time: end.toISOString(),
      },
      return_response: true,
    });

    return (result?.response?.data ?? []).flatMap((entry) => {
      const time = Date.parse(String(entry.period_start));
      const estimate = entry.pv_estimate;
      return isFinite(time) && typeof estimate === "number"
        ? [{ time, kwh: estimate * 0.5 }] // 30-min period in kW → kWh
        : [];
    });
  } catch (err) {
    console.debug("[solar-forecast-card] Solcast forecast history failed:", err);
    return null;
  }
}

export const solcast: IntegrationAdapter = {
  // Prefer detailedForecast (standard Solcast attribute); fall back to
  // hours so manually-configured cards work with alternate attribute names.
  hoursAttr: (state) => state.attributes?.detailedForecast ?? state.attributes?.hours,

  parseHours: (raw) =>
    Array.isArray(raw)
      ? parseSolcastPeriods(raw as Array<Record<string, unknown>>)
      : parseKeyedHours(raw),

  detect,
  forecastHistory,
};
