import type {
  EntityRegistryEntry,
  HassEntity,
  HomeAssistant,
  IntegrationType,
} from "../types.js";
import { forecastSolar } from "./forecast-solar.js";
import { manual } from "./manual.js";
import { openMeteo } from "./open-meteo.js";
import { solcast } from "./solcast.js";
import type { AutoDetectResult, ForecastPeriod, HourPoint, IntegrationAdapter } from "./types.js";
import { detectVolcast, volcast } from "./volcast.js";

export type { AutoDetectResult, HourPoint } from "./types.js";
export { sumEstimate10 } from "./solcast.js";

const ADAPTERS: Record<IntegrationType, IntegrationAdapter> = {
  solcast,
  volcast,
  forecast_solar: forecastSolar,
  open_meteo_solar_forecast: openMeteo,
  manual,
};

const PLATFORM_ADAPTERS = [solcast, forecastSolar, openMeteo];

function adapterFor(type: IntegrationType | undefined): IntegrationAdapter {
  return (type && ADAPTERS[type]) || manual;
}

export function readHoursAttr(
  type: IntegrationType | undefined,
  state: HassEntity | undefined
): unknown {
  return state ? adapterFor(type).hoursAttr(state) : undefined;
}

/** Parse a raw hourly attribute. Returns [] rather than throwing on bad data. */
export function parseHours(type: IntegrationType | undefined, raw: unknown): HourPoint[] {
  if (raw === null || raw === undefined) return [];
  try {
    return adapterFor(type).parseHours(raw);
  } catch (err) {
    console.debug("[solar-forecast-card] hours: parse failed →", err, "\nraw value:", raw);
    return [];
  }
}

/**
 * Past forecasts from the integration behind forecastId, if it keeps any. The
 * sensor's platform is checked too, because cards set up by hand stay "manual".
 */
export async function readForecastHistory(
  hass: HomeAssistant,
  type: IntegrationType | undefined,
  forecastId: string,
  start: Date,
  end: Date
): Promise<ForecastPeriod[] | null> {
  const adapter = hass.entities?.[forecastId]?.platform === "solcast_solar"
    ? solcast
    : adapterFor(type);
  return adapter.forecastHistory?.(hass, start, end) ?? null;
}

export function autoDetect(
  sensors: EntityRegistryEntry[],
  hass: HomeAssistant
): AutoDetectResult {
  for (const adapter of PLATFORM_ADAPTERS) {
    const result = adapter.detect?.(sensors, hass);
    if (result) return result;
  }
  return detectVolcast(sensors, hass);
}
