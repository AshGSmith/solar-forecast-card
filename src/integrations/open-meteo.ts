import type { EntityRegistryEntry, HomeAssistant } from "../types.js";
import { bucketsToPoints, emptySlots, hasPlatform, logDetectedSlots, sensorUnit } from "./shared.js";
import type { AutoDetectResult, HourPoint, IntegrationAdapter } from "./types.js";

// Key suffix → slot index.  Order matters: "today" must be listed before
// any d-number so the endsWith check doesn't need extra guards.
const KEY_SLOTS: Array<[string, number]> = [
  ["energy_production_today",    0],
  ["energy_production_tomorrow", 1],
  ["energy_production_d2",       2],
  ["energy_production_d3",       3],
  ["energy_production_d4",       4],
  ["energy_production_d5",       5],
  ["energy_production_d6",       6],
  // energy_production_d7 → no slot, intentionally omitted
];

/**
 * Parse Open-Meteo's `wh_period` attribute into HourPoint[].
 *
 * The attribute is a plain object keyed by ISO datetime strings
 * (e.g. "2024-04-22T06:00:00") with numeric Wh energy values for each
 * period. Multiple sub-hourly periods with the same hour are summed.
 * Values are converted from Wh to kWh.
 */
function parseWhPeriod(raw: unknown): HourPoint[] {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return [];

  const buckets = new Map<number, number>();

  for (const [isoKey, val] of Object.entries(raw as Record<string, unknown>)) {
    // Extract the hour directly from the ISO string (the T-portion is the
    // local hour in HA's timezone). Using new Date().getHours() would shift
    // the hour to the browser's local timezone, which may differ from HA's.
    const hourMatch = isoKey.match(/T(\d{2}):/);
    if (!hourMatch) continue;
    const hour = parseInt(hourMatch[1], 10);
    if (!isFinite(hour) || hour < 0 || hour > 23) continue;

    const wh = typeof val === "number" ? val
             : typeof val === "string"  ? parseFloat(val)
             : NaN;
    if (!isFinite(wh)) continue;

    buckets.set(hour, (buckets.get(hour) ?? 0) + wh / 1000); // Wh → kWh
  }

  // Filter out hours with zero generation — Open-Meteo includes all 24 hours
  // in wh_period (including night/cloudy hours with 0 Wh). The other parsers
  // trim only leading/trailing zeros; for Open-Meteo we remove ALL zero-value
  // hours so the popup shows only generating periods.
  return bucketsToPoints(buckets).filter((p) => p.kwh > 0);
}

/**
 * The integration (platform: "open_meteo_solar_forecast") exposes daily
 * energy sensors whose entity_id follows the pattern:
 *   sensor.{service_slug}_{key}
 *
 * Keys mapped to card slots:
 *   energy_production_today     → slot 0  (today)
 *   energy_production_tomorrow  → slot 1  (tomorrow)
 *   energy_production_d2        → slot 2
 *   energy_production_d3        → slot 3
 *   energy_production_d4        → slot 4
 *   energy_production_d5        → slot 5
 *   energy_production_d6        → slot 6
 *   energy_production_d7        → skipped (card only has 7 slots, 0–6)
 *
 * "energy_production_today_remaining" is excluded.
 * Native unit is Wh; HA auto-converts to kWh via suggested_unit_of_measurement.
 * Both "kWh" and "Wh" are accepted to be safe.
 *
 * Each daily sensor carries a `wh_period` attribute (ISO datetime → Wh)
 * that the card uses for the hourly popup chart.
 */
function detect(
  sensors: EntityRegistryEntry[],
  hass: HomeAssistant
): AutoDetectResult | null {
  if (!hasPlatform(sensors, "open_meteo_solar_forecast")) return null;

  const slots = emptySlots();
  let remainingTodayEntity: string | undefined;

  for (const sensor of sensors) {
    const id = sensor.entity_id;
    const unit = sensorUnit(hass, id);

    // "remaining" sensors are not daily totals and must not go into a forecast slot,
    // but energy_production_today_remaining maps to remaining_today_entity.
    if (id.includes("_remaining")) {
      if (id.includes("energy_production_today_remaining")) {
        if (unit === "kWh" || unit === "Wh") remainingTodayEntity = id;
      }
      continue;
    }

    if (unit !== "kWh" && unit !== "Wh") continue;

    for (const [key, slot] of KEY_SLOTS) {
      // entity_id format is sensor.{slug}_{key}, so the key is always the suffix
      if (id.endsWith("_" + key)) {
        slots[slot] = id;
        break;
      }
    }
  }

  logDetectedSlots(
    "Open-Meteo", slots,
    "remaining_today_entity:", remainingTodayEntity ?? "(none)"
  );

  return {
    forecast_entities:      slots as AutoDetectResult["forecast_entities"],
    integration_type:       "open_meteo_solar_forecast",
    remaining_today_entity: remainingTodayEntity,
  };
}

export const openMeteo: IntegrationAdapter = {
  hoursAttr: (state) => state.attributes?.wh_period,
  parseHours: parseWhPeriod,
  detect,
};
