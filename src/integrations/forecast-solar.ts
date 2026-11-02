import type { EntityRegistryEntry, HomeAssistant } from "../types.js";
import { emptySlots, hasPlatform, logDetectedSlots, sensorUnit } from "./shared.js";
import type { AutoDetectResult, IntegrationAdapter } from "./types.js";

/**
 * The integration exposes two daily energy sensors per device:
 *   energy_production_today     → slot 0
 *   energy_production_tomorrow  → slot 1
 *
 * Slots 2–6 are left empty; forecast.solar doesn't provide day 3+ totals.
 * today_actual_entity is left undefined — actual generation comes from the
 * inverter, not from this integration.
 *
 * The native unit is Wh but HA displays it as kWh; both are accepted.
 * "energy_production_today_remaining" is excluded from slot 0 by requiring
 * the keyword is not followed by "_remaining".
 */
function detect(
  sensors: EntityRegistryEntry[],
  hass: HomeAssistant
): AutoDetectResult | null {
  if (!hasPlatform(sensors, "forecast_solar")) return null;

  const slots = emptySlots();
  let remainingTodayEntity: string | undefined;

  for (const sensor of sensors) {
    const unit = sensorUnit(hass, sensor.entity_id);
    if (unit !== "kWh" && unit !== "Wh") continue;

    const id = sensor.entity_id;
    if (id.includes("energy_production_today_remaining")) {
      // Capture as remaining_today_entity — provides the LEFT header value
      // directly for forecast.solar (which has no hourly attribute data).
      remainingTodayEntity = id;
    } else if (id.includes("energy_production_today")) {
      slots[0] = id;
    } else if (id.includes("energy_production_tomorrow")) {
      slots[1] = id;
    }
  }

  logDetectedSlots(
    "forecast.solar", slots,
    "remaining_today_entity:", remainingTodayEntity ?? "(none)"
  );

  return {
    forecast_entities:      slots as AutoDetectResult["forecast_entities"],
    integration_type:       "forecast_solar",
    remaining_today_entity: remainingTodayEntity,
  };
}

/** forecast.solar carries no hourly attribute, so there is nothing to parse. */
export const forecastSolar: IntegrationAdapter = {
  hoursAttr: () => undefined,
  parseHours: () => [],
  detect,
};
