import { parseHours, readHoursAttr } from "../integrations/index.js";
import type { HomeAssistant, SolarForecastCardConfig } from "../types.js";
import { readArrayActuals, readKwh, readPowerW, resolveActualKwh } from "./entities.js";

export interface HeaderStats {
  powerW: number | null;
  actualKwh: number | null;
  nextHourKwh: number | null;
  forecastLeftKwh: number | null;
  /** Null when no forecast entity has a numeric state. */
  week: { totalKwh: number; avgKwh: number } | null;
}

/**
 * Forecast summary: +1HR and LEFT. Both values are derived purely from the
 * integration's own hourly forecast data — they are independent of actual
 * generation sensors.
 *
 * +1HR — forecast kWh for the next full hour (currentHour + 1).
 * LEFT — sum of all forecast kWh for every hour still remaining today
 *        (i.e. all hours > currentHour, which includes +1HR itself).
 *
 * The gate is data-driven, not integration-name-driven: integrations that
 * carry no hourly attribute (forecast.solar being the current example) parse
 * to no points, so both values stay null and the line is not rendered.
 */
function deriveForecastSummary(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig
): Pick<HeaderStats, "nextHourKwh" | "forecastLeftKwh"> {
  const todayEntityId = cfg.forecast_entities[0];
  const todayState = todayEntityId ? hass?.states[todayEntityId] : undefined;
  const type = cfg.integration_type;
  const points = parseHours(type, readHoursAttr(type, todayState));

  // nextForecastHour is the next FULL hour slot after whatever the clock
  // currently shows.  At 13:15 → 14; at 13:00 → 14; at 23:50 → 24.
  // Hour 24 won't match any slot so both values stay null after midnight.
  const nextForecastHour = new Date().getHours() + 1; // browser/local time

  // isFinite guards: a bad attribute can never produce "NaN kWh".
  const nextHourPt = points.find((p) => p.hour === nextForecastHour);
  const nextHourKwh = nextHourPt && isFinite(nextHourPt.kwh) ? nextHourPt.kwh : null;

  // Tomorrow is automatically excluded: only today's entity is parsed.
  const futurePoints = points.filter((p) => p.hour >= nextForecastHour);
  const sum = futurePoints.reduce((s, p) => s + p.kwh, 0);
  const forecastLeftKwh = futurePoints.length > 0 && isFinite(sum) ? sum : null;

  return { nextHourKwh, forecastLeftKwh };
}

export function computeHeaderStats(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig
): HeaderStats {
  const derived = deriveForecastSummary(hass, cfg);

  const validForecasts = cfg.forecast_entities
    .map((id) => readKwh(hass, id))
    .filter((v): v is number => v !== null);
  const totalKwh = validForecasts.reduce((s, v) => s + v, 0);

  return {
    powerW: readPowerW(hass, cfg.live_power_entity),
    actualKwh: resolveActualKwh(hass, cfg, readArrayActuals(hass, cfg)),
    // next_hour_entity / remaining_today_entity take precedence over the
    // auto-derived values. This lets users point to any sensor (e.g. a helper
    // or a custom integration attribute) regardless of integration type.
    nextHourKwh: readKwh(hass, cfg.next_hour_entity) ?? derived.nextHourKwh,
    forecastLeftKwh: readKwh(hass, cfg.remaining_today_entity) ?? derived.forecastLeftKwh,
    week: validForecasts.length > 0
      ? { totalKwh, avgKwh: totalKwh / validForecasts.length }
      : null,
  };
}
