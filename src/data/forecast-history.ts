import type { HomeAssistant, SolarForecastCardConfig } from "../types.js";
import { queryHistory, type HistEntry } from "./history.js";

const HISTORY_DAYS = 7;
/** A day's forecast is the reading in place at this local hour. */
const FORECAST_READ_HOUR = 6;
/** Readings before this local hour are ignored, in case yesterday's total hasn't reset yet. */
const ACTUAL_FIRST_HOUR = 1;

export interface HistoryDay {
  date: Date;
  forecastKwh: number | null;
  actualKwh: number | null;
}

export interface HistoryScore {
  /** 100 minus the average percentage miss, floored at 0. */
  accuracyPct: number;
  /** Average size of the daily miss, ignoring direction. */
  averageMissKwh: number;
  /** Average of actual minus forecast. Positive means generation beat the forecast. */
  biasKwh: number;
}

interface Reading {
  time: number;
  value: number;
}

function toReadings(entries: HistEntry[] | undefined, isWh: boolean): Reading[] {
  return (entries ?? [])
    .map((e) => ({ time: Date.parse(e.last_changed), value: parseFloat(e.state) }))
    .filter((r) => isFinite(r.time) && isFinite(r.value))
    .map((r) => ({ time: r.time, value: isWh ? r.value / 1000 : r.value }))
    .sort((a, b) => a.time - b.time);
}

function localDay(now: Date, daysAgo: number, hour = 0): number {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysAgo, hour).getTime();
}

/** The reading in place at FORECAST_READ_HOUR, or else the day's first reading. */
function forecastForDay(readings: Reading[], now: Date, daysAgo: number): number | null {
  const start = localDay(now, daysAgo);
  const cutoff = localDay(now, daysAgo, FORECAST_READ_HOUR);
  const end = localDay(now, daysAgo - 1);

  const day = readings.filter((r) => r.time >= start && r.time < end);
  const morning = day.filter((r) => r.time <= cutoff);
  const reading = morning.length > 0 ? morning[morning.length - 1] : day[0];
  return reading?.value ?? null;
}

/** today_actual_entity and array sensors reset daily, so a day's total is its peak. */
function actualForDay(readings: Reading[], now: Date, daysAgo: number): number | null {
  const start = localDay(now, daysAgo, ACTUAL_FIRST_HOUR);
  const end = localDay(now, daysAgo - 1);

  const day = readings.filter((r) => r.time >= start && r.time < end);
  return day.length > 0 ? Math.max(...day.map((r) => r.value)) : null;
}

/** The last HISTORY_DAYS full days, oldest first. Today is left out because it isn't finished. */
function buildHistoryDays(
  forecast: Reading[],
  actuals: Reading[][],
  now: Date
): HistoryDay[] {
  const days: HistoryDay[] = [];

  for (let daysAgo = HISTORY_DAYS; daysAgo >= 1; daysAgo--) {
    const totals = actuals
      .map((readings) => actualForDay(readings, now, daysAgo))
      .filter((v): v is number => v !== null);

    days.push({
      date: new Date(localDay(now, daysAgo)),
      forecastKwh: forecastForDay(forecast, now, daysAgo),
      actualKwh: totals.length > 0 ? totals.reduce((s, v) => s + v, 0) : null,
    });
  }

  return days;
}

/** Array sensors take precedence over today_actual_entity, as they do for the live total. */
function actualEntities(cfg: SolarForecastCardConfig): string[] {
  const arrays = cfg.actual_arrays?.map((a) => a.entity).filter(Boolean) ?? [];
  if (arrays.length > 0) return arrays;
  return cfg.today_actual_entity ? [cfg.today_actual_entity] : [];
}

function reportsWh(hass: HomeAssistant, entityId: string): boolean {
  const unit = hass.states[entityId]?.attributes?.unit_of_measurement as string | undefined;
  return unit?.toLowerCase() === "wh";
}

/**
 * Load the last week of forecast and actual totals from recorder history.
 * Returns null if the request fails, so the caller can retry.
 */
export async function fetchForecastHistory(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig
): Promise<HistoryDay[] | null> {
  const forecastId = cfg.forecast_entities[0];
  if (!hass || !forecastId) return [];

  const now = new Date();
  const actualIds = actualEntities(cfg);
  const history = await queryHistory(
    hass,
    [forecastId, ...actualIds],
    new Date(localDay(now, HISTORY_DAYS)),
    new Date(localDay(now, 0))
  );
  if (!history) return null;

  return buildHistoryDays(
    toReadings(history.get(forecastId), reportsWh(hass, forecastId)),
    actualIds.map((id) => toReadings(history.get(id), reportsWh(hass, id))),
    now
  );
}

export function scoreHistory(days: HistoryDay[]): HistoryScore | null {
  const paired = days.flatMap((d) =>
    d.forecastKwh !== null && d.forecastKwh > 0 && d.actualKwh !== null
      ? [{ forecast: d.forecastKwh, actual: d.actualKwh }]
      : []
  );
  if (paired.length === 0) return null;

  const average = (values: number[]) => values.reduce((s, v) => s + v, 0) / values.length;
  const averagePctMiss = average(
    paired.map((d) => (Math.abs(d.actual - d.forecast) / d.forecast) * 100)
  );

  return {
    accuracyPct: Math.max(100 - averagePctMiss, 0),
    averageMissKwh: average(paired.map((d) => Math.abs(d.actual - d.forecast))),
    biasKwh: average(paired.map((d) => d.actual - d.forecast)),
  };
}

/** A round axis with at most four intervals that fits maxKwh. */
export function historyScale(maxKwh: number): { step: number; top: number } {
  for (let magnitude = 1; ; magnitude *= 10) {
    for (const base of [1, 2, 5]) {
      const step = base * magnitude;
      const intervals = Math.max(Math.ceil(maxKwh / step), 1);
      if (intervals <= 4) return { step, top: intervals * step };
    }
  }
}
