import type { HomeAssistant, SolarForecastCardConfig } from "../types.js";
import { readArrayActuals, readKwh, resolveActualKwh } from "./entities.js";

const KEY_PREFIX = "solar_forecast_card_history:";
/** The 7 full days shown, plus today while it is being recorded. */
const KEEP_DAYS = 8;
/** Before this local hour, daily sensors may still hold yesterday's values. */
export const FIRST_RELIABLE_HOUR = 1;
/** Used as the end of the generating day when sun.sun isn't available. */
const FALLBACK_EVENING_HOUR = 20;

export interface LoggedDay {
  forecastKwh: number | null;
  actualKwh: number | null;
  /** True once the actual was seen after sunset, so it covers the whole day. */
  complete: boolean;
}

export type HistoryLog = Record<string, LoggedDay>;

export function dayKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function generationFinished(hass: HomeAssistant, now: Date): boolean {
  const sun = hass.states["sun.sun"];
  if (!sun) return now.getHours() >= FALLBACK_EVENING_HOUR;
  return now.getHours() >= 12 && sun.state === "below_horizon";
}

/**
 * Add today's readings to the log. The earliest forecast is kept, matching
 * what recorder history uses, and the highest actual, because daily sensors
 * only count up. Entries older than KEEP_DAYS are dropped.
 */
export function addToLog(
  log: HistoryLog,
  now: Date,
  forecastKwh: number | null,
  actualKwh: number | null,
  finished: boolean
): HistoryLog {
  const key = dayKey(now);
  const previous = log[key];
  const oldest = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - KEEP_DAYS));
  const kept = Object.fromEntries(Object.entries(log).filter(([date]) => date >= oldest));
  const actuals = [previous?.actualKwh ?? null, actualKwh].filter((v): v is number => v !== null);

  return {
    ...kept,
    [key]: {
      forecastKwh: previous?.forecastKwh ?? forecastKwh,
      actualKwh: actuals.length > 0 ? Math.max(...actuals) : null,
      complete: (previous?.complete ?? false) || finished,
    },
  };
}

/** Read the saved log. Returns null if Home Assistant's user storage can't be read. */
export async function loadHistoryLog(
  hass: HomeAssistant,
  forecastId: string
): Promise<HistoryLog | null> {
  if (!hass.callWS) return null;
  try {
    const result = await hass.callWS<{ value?: HistoryLog | null }>({
      type: "frontend/get_user_data",
      key: KEY_PREFIX + forecastId,
    });
    return result?.value ?? {};
  } catch (err) {
    console.debug("[solar-forecast-card] history log read failed:", err);
    return null;
  }
}

/** Save today's forecast and actual to Home Assistant's per-user storage. */
export async function recordToday(
  hass: HomeAssistant,
  cfg: SolarForecastCardConfig
): Promise<void> {
  const forecastId = cfg.forecast_entities[0];
  const now = new Date();
  if (!forecastId || !hass.callWS || now.getHours() < FIRST_RELIABLE_HOUR) return;

  const forecastKwh = readKwh(hass, forecastId);
  const actualKwh = resolveActualKwh(hass, cfg, readArrayActuals(hass, cfg));
  if (forecastKwh === null && actualKwh === null) return;

  const log = await loadHistoryLog(hass, forecastId);
  if (!log) return;

  const updated = addToLog(log, now, forecastKwh, actualKwh, generationFinished(hass, now));
  if (JSON.stringify(updated) === JSON.stringify(log)) return;

  try {
    await hass.callWS({
      type: "frontend/set_user_data",
      key: KEY_PREFIX + forecastId,
      value: updated,
    });
  } catch (err) {
    console.debug("[solar-forecast-card] history log write failed:", err);
  }
}
