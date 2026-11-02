import { parseKeyedHours, readEnergyValue, trimZeroHours } from "./shared.js";
import { parseSolcastPeriods } from "./solcast.js";
import type { HourPoint, IntegrationAdapter } from "./types.js";

function isSolcastPeriods(raw: unknown[]): raw is Array<Record<string, unknown>> {
  const first = raw[0] as Record<string, unknown> | undefined;
  return typeof first?.period_start === "string" && "pv_estimate" in first;
}

/** Parse an array of bare numbers (index = hour) or of {hour, value} objects. */
function parseArrayHours(raw: unknown[]): HourPoint[] {
  const points = raw.map((v, i): HourPoint => {
    // 1 — bare number, index = hour
    if (typeof v === "number") {
      return { hour: i, kwh: isFinite(v) ? v : 0 };
    }

    // 2 — object with hour + value fields
    if (typeof v === "object" && v !== null) {
      const obj = v as Record<string, unknown>;

      // Resolve hour index — try "hour", "time", "h" keys
      const rawH = obj.hour ?? obj.time ?? obj.h;
      const hour = typeof rawH === "number" ? rawH
                 : typeof rawH === "string" ? parseInt(rawH, 10)
                 : i;

      return {
        hour: isFinite(hour) ? hour : i,
        kwh:  readEnergyValue(obj),
      };
    }

    return { hour: i, kwh: 0 };
  });

  return trimZeroHours(points);
}

/** No integration selected: try both common attribute names and detect the format. */
export const manual: IntegrationAdapter = {
  hoursAttr: (state) => state.attributes?.hours ?? state.attributes?.detailedForecast,

  parseHours(raw) {
    if (!Array.isArray(raw)) return parseKeyedHours(raw);
    return isSolcastPeriods(raw) ? parseSolcastPeriods(raw) : parseArrayHours(raw);
  },
};
