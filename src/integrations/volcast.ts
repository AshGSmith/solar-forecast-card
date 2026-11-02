import type { EntityRegistryEntry, HomeAssistant } from "../types.js";
import { bucketsToPoints, emptySlots, readEnergyValue, slotLabel, trimZeroHours } from "./shared.js";
import type { AutoDetectResult, HourPoint, IntegrationAdapter } from "./types.js";

/**
 * Parse Volcast's `hours` attribute into HourPoint[].
 *
 * The attribute can take two forms:
 *
 *   a) Array of numbers — treated as a midnight-indexed 24-element array
 *      where index = clock hour. This is the standard Volcast format for
 *      full-day forecasts. If Volcast returns a shorter array (past hours
 *      removed during the day), left-over indices still map to clock hours
 *      0-N; the LEFT filter in computeHeaderStats then applies the same
 *      clock-hour comparison, so hours are still excluded correctly.
 *
 *   b) Array of objects — clock hour is resolved in priority order:
 *        1. Numeric "hour", "time", or "h" field
 *        2. ISO datetime string in "period_start", "datetime", or "start"
 *           — the T-component is extracted directly (avoids UTC offset shift)
 *        3. Array index (last resort)
 *      Multiple sub-hourly periods for the same clock hour are summed.
 *
 * Output is sorted ascending by clock hour with leading/trailing zeros
 * trimmed, consistent with all other integration parsers.
 */
function parseVolcastHours(raw: unknown): HourPoint[] {
  if (!Array.isArray(raw)) return [];

  const buckets = new Map<number, number>();

  for (let i = 0; i < raw.length; i++) {
    const v: unknown = raw[i];
    let hour: number;
    let kwh: number;

    if (typeof v === "number") {
      // Bare number: index = clock hour (standard 24-element midnight array)
      hour = i;
      kwh  = isFinite(v) ? v : 0;

    } else if (typeof v === "object" && v !== null) {
      const obj = v as Record<string, unknown>;

      // ── Resolve clock hour ────────────────────────────────────────────
      const rawH = obj.hour ?? obj.time ?? obj.h;

      if (typeof rawH === "number" && isFinite(rawH)) {
        hour = rawH;
      } else if (typeof rawH === "string") {
        const parsed = parseInt(rawH, 10);
        hour = isFinite(parsed) ? parsed : i;
      } else {
        // Fallback: ISO datetime field — extract T-component as local hour.
        // Matches "2024-04-26T14:00:00" → 14.  Avoids new Date() UTC shift.
        const dtField = obj.period_start ?? obj.datetime ?? obj.start;
        if (typeof dtField === "string") {
          const m = dtField.match(/T(\d{2}):/);
          hour = m ? parseInt(m[1], 10) : i;
        } else {
          hour = i;
        }
      }

      kwh = readEnergyValue(obj);

    } else {
      continue; // skip null / unexpected types
    }

    if (!isFinite(hour) || hour < 0 || hour > 23) continue;
    buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
  }

  return trimZeroHours(bucketsToPoints(buckets));
}

/** Parse "YYYY-MM-DD" as a local-timezone Date (avoids UTC midnight offset). */
function parseLocalDate(value: string): Date | null {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return isNaN(d.getTime()) ? null : d;
}

/** Return a new Date set to local midnight of the given date. */
function localMidnight(d: Date): Date {
  const out = new Date(d);
  out.setHours(0, 0, 0, 0);
  return out;
}

/**
 * Extract the forecast date from an entity, trying in priority order:
 *   1. `datetime` state attribute  (ISO datetime string)
 *   2. `date`     state attribute  (ISO date string  YYYY-MM-DD)
 *   3. ISO date pattern inside the entity_id  (YYYY_MM_DD or YYYY-MM-DD)
 *
 * Returns null when no reliable date can be found.
 */
function extractForecastDate(
  entityId: string,
  state: { attributes: Record<string, unknown> } | undefined
): Date | null {
  // 1. datetime attribute
  const dtAttr = state?.attributes?.datetime;
  if (typeof dtAttr === "string") {
    const d = new Date(dtAttr);
    if (!isNaN(d.getTime())) return d;
  }

  // 2. date attribute (parse as local to avoid UTC-offset day shift)
  const dateAttr = state?.attributes?.date;
  if (typeof dateAttr === "string") {
    const d = parseLocalDate(dateAttr);
    if (d) return d;
  }

  // 3. ISO date embedded in entity_id:  sensor.foo_2024_04_15_bar
  //                                  or sensor.foo_2024-04-15_bar
  const m = entityId.match(/(\d{4})[_-](\d{2})[_-](\d{2})/);
  if (m) {
    const d = new Date(+m[1], +m[2] - 1, +m[3]);
    if (!isNaN(d.getTime())) return d;
  }

  return null;
}

/**
 * Volcast has no identifying platform, so this is the fallback detector: it
 * looks for sensors carrying an `hours` array and always returns a result.
 */
export function detectVolcast(
  sensors: EntityRegistryEntry[],
  hass: HomeAssistant
): AutoDetectResult {
  // ── Split into forecast sensors (have "hours") and actual candidates ──────

  const forecastSensors = sensors.filter(
    (e) => Array.isArray(hass.states[e.entity_id]?.attributes?.hours)
  );

  // ── Map each forecast sensor to a day-offset from today ───────────────────

  const todayMidnight = localMidnight(new Date());

  type Candidate = { entityId: string; offset: number | null };

  const candidates: Candidate[] = forecastSensors.map((e) => {
    const state  = hass.states[e.entity_id];
    const date   = extractForecastDate(e.entity_id, state);
    let offset: number | null = null;

    if (date !== null) {
      const diff = localMidnight(date).getTime() - todayMidnight.getTime();
      offset = Math.round(diff / 86_400_000);
    }

    return { entityId: e.entity_id, offset };
  });

  // ── Build the 7-slot array ────────────────────────────────────────────────

  const slots = emptySlots();
  const hasDates = candidates.some((c) => c.offset !== null);

  if (hasDates) {
    // Place entities whose offset falls within [0, 6]
    for (const c of candidates) {
      if (c.offset !== null && c.offset >= 0 && c.offset < 7) {
        slots[c.offset] = c.entityId;
      }
    }

    // Any leftover entities (past, or no date info) fill the first empty slots
    const unplaced = candidates
      .filter((c) => c.offset === null || c.offset < 0 || c.offset >= 7)
      .sort((a, b) => a.entityId.localeCompare(b.entityId));

    let si = 0;
    for (const c of unplaced) {
      while (si < 7 && slots[si]) si++;
      if (si < 7) slots[si++] = c.entityId;
    }
  } else {
    // No date metadata at all — stable alphabetical fallback
    const sorted = [...forecastSensors]
      .sort((a, b) => a.entity_id.localeCompare(b.entity_id))
      .map((e) => e.entity_id);
    for (let i = 0; i < 7; i++) slots[i] = sorted[i] ?? "";
  }

  // ── Debug log ─────────────────────────────────────────────────────────────

  console.debug(
    "[solar-forecast-card] auto-detect mapping:",
    candidates
      .slice()
      .sort((a, b) => (a.offset ?? 999) - (b.offset ?? 999))
      .map((c) => ({
        entity: c.entityId.replace(/^sensor\./, ""),
        offset: c.offset ?? "no-date",
        slot:   c.offset !== null && c.offset >= 0 && c.offset < 7
                  ? slotLabel(c.offset)
                  : "unplaced",
      }))
  );

  return {
    forecast_entities: slots as AutoDetectResult["forecast_entities"],
    integration_type:  "volcast",
  };
}

export const volcast: IntegrationAdapter = {
  hoursAttr: (state) => state.attributes?.hours,
  parseHours: parseVolcastHours,
};
