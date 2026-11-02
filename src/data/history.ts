import type { HomeAssistant } from "../types.js";
import { dayKey } from "./history-log.js";

export interface HistEntry {
  entity_id?: string;
  state: string;
  last_changed: string;
}

/**
 * Read recorder history for the given entities, keyed by entity_id.
 * Returns null when the history API is unavailable or the request fails.
 */
export async function queryHistory(
  hass: HomeAssistant,
  entityIds: string[],
  start: Date,
  end: Date
): Promise<Map<string, HistEntry[]> | null> {
  if (!hass.callApi) return null;

  try {
    // significant_changes_only=false: return every recorded state change,
    // not just those that cross a threshold — essential for cumulative sensors.
    const path =
      `history/period/${start.toISOString()}` +
      `?filter_entity_id=${encodeURIComponent(entityIds.join(","))}` +
      `&end_time=${encodeURIComponent(end.toISOString())}` +
      `&minimal_response=true&no_attributes=true&significant_changes_only=false`;

    // HA history API returns: Array<Array<{state, last_changed}>>
    // Outer array is per-entity; inner array is chronological state entries.
    // Only the first entry of each inner array carries the entity_id, and
    // entities with no history are left out, so position can't be relied on.
    const result = await hass.callApi<HistEntry[][]>("GET", path);
    if (!Array.isArray(result)) return null;

    const history = new Map<string, HistEntry[]>();
    for (const entries of result) {
      if (!Array.isArray(entries) || entries.length === 0) continue;
      const entityId = entries[0]?.entity_id ?? (entityIds.length === 1 ? entityIds[0] : undefined);
      if (entityId) history.set(entityId, entries);
    }
    return history;

  } catch (err) {
    console.debug("[solar-forecast-card] history fetch failed:", err);
    return null;
  }
}

interface StatisticRow {
  /** Epoch milliseconds, or an ISO string on older Home Assistant versions. */
  start: number | string;
  change?: number | null;
  mean?: number | null;
}

/** Add up statistics rows into a kWh total per local day. */
async function queryStatistics(
  hass: HomeAssistant,
  message: Record<string, unknown>,
  toKwh: (row: StatisticRow) => number | null | undefined
): Promise<Map<string, number> | null> {
  if (!hass.callWS) return null;

  try {
    const result = await hass.callWS<Record<string, StatisticRow[]>>({
      type: "recorder/statistics_during_period",
      ...message,
    });

    const totals = new Map<string, number>();
    for (const rows of Object.values(result ?? {})) {
      for (const row of rows) {
        const time = typeof row.start === "number" ? row.start : Date.parse(row.start);
        const kwh = toKwh(row);
        // No energy means the sensor was offline, not that nothing was generated.
        if (!isFinite(time) || typeof kwh !== "number" || kwh <= 0) continue;
        const key = dayKey(new Date(time));
        totals.set(key, (totals.get(key) ?? 0) + kwh);
      }
    }
    return totals;

  } catch (err) {
    console.debug("[solar-forecast-card] statistics fetch failed:", err);
    return null;
  }
}

/**
 * Read each day's energy from long-term statistics, the data behind the Energy
 * dashboard, as a total per local day across the given sensors.
 *
 * Statistics outlive recorder's purge, and "change" is correct for sensors that
 * reset daily and for lifetime totals alike. Sensors need a state_class to have
 * statistics. Returns null when they can't be read.
 */
export async function queryDailyEnergy(
  hass: HomeAssistant,
  entityIds: string[],
  start: Date,
  end: Date
): Promise<Map<string, number> | null> {
  if (entityIds.length === 0) return null;
  return queryStatistics(hass, {
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    statistic_ids: entityIds,
    period: "day",
    types: ["change"],
    units: { energy: "kWh" },
  }, (row) => row.change);
}

/**
 * Estimate each day's energy from a power sensor's hourly averages. Hours are
 * added rather than averaging the day, because inverters that go unavailable
 * overnight would otherwise inflate the daily mean.
 */
export async function queryDailyEnergyFromPower(
  hass: HomeAssistant,
  entityIds: string[],
  start: Date,
  end: Date
): Promise<Map<string, number> | null> {
  if (entityIds.length === 0) return null;
  return queryStatistics(hass, {
    start_time: start.toISOString(),
    end_time: end.toISOString(),
    statistic_ids: entityIds,
    period: "hour",
    types: ["mean"],
    units: { power: "W" },
  }, (row) => (typeof row.mean === "number" ? row.mean / 1000 : null));
}

/** The solar sensors chosen in the Energy dashboard. Empty if there are none. */
export async function readEnergySolarSensors(hass: HomeAssistant): Promise<string[]> {
  if (!hass.callWS) return [];

  try {
    const prefs = await hass.callWS<{
      energy_sources?: Array<{ type?: string; stat_energy_from?: string }>;
    }>({ type: "energy/get_prefs" });

    return (prefs?.energy_sources ?? []).flatMap((source) =>
      source.type === "solar" && source.stat_energy_from ? [source.stat_energy_from] : []
    );
  } catch (err) {
    console.debug("[solar-forecast-card] Energy dashboard preferences unavailable:", err);
    return [];
  }
}

/**
 * Fetch hourly actual-generation values for today from the HA history API.
 *
 * today_actual_entity is a cumulative energy sensor (kWh or Wh) whose value
 * rises monotonically through the day. Per-hour generation is the difference
 * between the sensor's value at the end and start of each hour boundary.
 *
 * Returns a Map<localHour (0–23), kWh> containing only hours with positive
 * generation (> 0).  Pre-sunrise and future hours are not included so the
 * popup table stays clean — a missing key means "no data / future", not zero.
 *
 * Returns an empty Map (never rejects) if the history API is unavailable,
 * the entity has no recorded history for today, or any other error occurs.
 */
export async function fetchActualHourly(
  hass: HomeAssistant | undefined,
  entityId: string
): Promise<Map<number, number>> {
  if (!hass?.callApi) return new Map();

  const now = new Date();
  const startOfDay = new Date(now);
  startOfDay.setHours(0, 0, 0, 0);

  // Detect Wh vs kWh from the live entity state so history values are
  // normalised to kWh consistently with the rest of the card.
  const unit = (
    hass.states[entityId]?.attributes?.unit_of_measurement as string | undefined
  )?.toLowerCase();
  const isWh = unit === "wh";

  const history = await queryHistory(hass, [entityId], startOfDay, now);
  const recorded = history?.get(entityId);
  if (!recorded) return new Map();

  try {
    // Normalise: keep only entries with finite numeric state, sorted ascending.
    const entries: HistEntry[] = recorded
      .filter((e) => e && typeof e.last_changed === "string" && isFinite(parseFloat(e.state)))
      .sort((a, b) => (a.last_changed < b.last_changed ? -1 : a.last_changed > b.last_changed ? 1 : 0));

    if (entries.length === 0) return new Map();

    /**
     * Returns the most-recent finite numeric state value recorded at or
     * before the given UTC ISO timestamp.  Entries are sorted ascending so
     * iteration stops as soon as we pass the target timestamp.
     */
    const valueAt = (isoTs: string): number | null => {
      let val: number | null = null;
      for (const e of entries) {
        if (e.last_changed <= isoTs) {
          const v = parseFloat(e.state);
          if (isFinite(v)) val = v;
        } else {
          break;
        }
      }
      return val;
    };

    const map = new Map<number, number>();
    const currentHour = now.getHours();

    for (let h = 0; h <= currentHour; h++) {
      const hourStart = new Date(now);
      hourStart.setHours(h, 0, 0, 0);
      const hourEnd = new Date(now);
      hourEnd.setHours(h + 1, 0, 0, 0);

      const startVal = valueAt(hourStart.toISOString());
      const endVal   = valueAt(hourEnd.toISOString());

      if (startVal === null || endVal === null) continue;

      let delta = endVal - startVal;
      if (delta < 0) continue;     // sensor reset or stale data — skip
      if (isWh) delta /= 1000;     // Wh → kWh

      // Only record hours that actually generated something.
      // This keeps the popup table free of zero rows for pre-sunrise hours.
      if (delta > 0) map.set(h, delta);
    }

    console.debug(
      `[solar-forecast-card] actual history: ${map.size} generating hour(s) found for ${entityId}`
    );
    return map;

  } catch (err) {
    console.debug("[solar-forecast-card] actual history fetch failed:", err);
    return new Map();
  }
}
