import type { EntityRegistryEntry, HomeAssistant } from "../types.js";
import type { HourPoint } from "./types.js";

const SLOT_NAMES = ["Today", "Tomorrow", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

export function emptySlots(): string[] {
  return ["", "", "", "", "", "", ""];
}

export function slotLabel(slot: number): string {
  return `Day ${slot} (${SLOT_NAMES[slot]})`;
}

export function hasPlatform(sensors: EntityRegistryEntry[], platform: string): boolean {
  return sensors.some((e) => e.platform === platform);
}

export function sensorUnit(hass: HomeAssistant, entityId: string): string | undefined {
  return hass.states[entityId]?.attributes?.unit_of_measurement as string | undefined;
}

export function logDetectedSlots(name: string, slots: string[], ...extra: unknown[]): void {
  console.debug(
    `[solar-forecast-card] ${name} auto-detect mapping:`,
    slots.map((id, i) => ({
      slot:   slotLabel(i),
      entity: id ? id.replace(/^sensor\./, "") : "(empty)",
    })),
    ...extra
  );
}

/** Drop leading and trailing zero-generation hours. */
export function trimZeroHours(points: HourPoint[]): HourPoint[] {
  let first = -1, last = -1;
  for (let i = 0; i < points.length; i++) {
    if (points[i].kwh > 0) { if (first === -1) first = i; last = i; }
  }
  return first === -1 ? [] : points.slice(first, last + 1);
}

export function bucketsToPoints(buckets: Map<number, number>): HourPoint[] {
  return Array.from(buckets.entries())
    .map(([hour, kwh]) => ({ hour, kwh }))
    .sort((a, b) => a.hour - b.hour);
}

/** Resolve an energy value, trying all known key names in priority order. */
export function readEnergyValue(obj: Record<string, unknown>): number {
  const rawV =
    obj.value    ?? obj.energy    ?? obj.kwh   ??
    obj.wh       ?? obj.power_kw  ?? obj.pv_estimate ??
    obj.forecast ?? obj.solar     ?? 0;
  const kwh = typeof rawV === "number" ? rawV
            : typeof rawV === "string" ? parseFloat(rawV)
            : 0;
  return isFinite(kwh) ? kwh : 0;
}

/** Parse a plain object keyed by hour: {"6": 0.5, "7": 1.2, …}. */
export function parseKeyedHours(raw: unknown): HourPoint[] {
  if (typeof raw !== "object" || raw === null) return [];

  const points = Object.entries(raw as Record<string, unknown>)
    .map(([k, v]): HourPoint => {
      const hour = parseInt(k, 10);
      const kwh  = typeof v === "number" ? v
                 : typeof v === "string"  ? parseFloat(v)
                 : 0;
      return {
        hour: isFinite(hour) ? hour : 0,
        kwh:  isFinite(kwh)  ? kwh  : 0,
      };
    })
    .sort((a, b) => a.hour - b.hour);

  return trimZeroHours(points);
}
