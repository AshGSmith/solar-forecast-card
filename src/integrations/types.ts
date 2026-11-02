import type {
  EntityRegistryEntry,
  HassEntity,
  HomeAssistant,
  SolarForecastCardConfig,
} from "../types.js";

export interface HourPoint {
  hour: number;
  kwh: number;
}

/** One forecast period's energy, as reported by the integration itself. */
export interface ForecastPeriod {
  /** Period start, in epoch milliseconds. */
  time: number;
  kwh: number;
}

/** Return type for every adapter's detect(). */
export interface AutoDetectResult {
  forecast_entities: SolarForecastCardConfig["forecast_entities"];
  integration_type: SolarForecastCardConfig["integration_type"];
  /** Populated when the device exposes a discrete "remaining today" sensor. */
  remaining_today_entity?: string;
  /** Populated when the device exposes a discrete "next hour forecast" sensor. */
  next_hour_entity?: string;
}

/** Everything the card and editor need to know about one forecast integration. */
export interface IntegrationAdapter {
  /** The raw attribute holding this integration's hourly forecast. */
  hoursAttr(state: HassEntity): unknown;
  /** Normalise that attribute into hourly points. Never receives null/undefined. */
  parseHours(raw: unknown): HourPoint[];
  /**
   * Map a device's sensors to card slots. Returns null when the sensors belong
   * to another integration. Absent when there is no identifying platform.
   */
  detect?(sensors: EntityRegistryEntry[], hass: HomeAssistant): AutoDetectResult | null;
  /**
   * Past forecasts from the integration's own storage, independent of recorder.
   * Returns null if they can't be read. Absent when the integration has none.
   */
  forecastHistory?(hass: HomeAssistant, start: Date, end: Date): Promise<ForecastPeriod[] | null>;
}
