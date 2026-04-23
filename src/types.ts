export interface ActualArrayEntry {
  entity: string;
  /** Single display character shown inside the stacked bar segment. */
  label: string;
}

export interface SolarForecastCardConfig {
  type: string;
  title?: string;
  icon?: string;
  show_header: boolean;
  device_id?: string;
  /** Set automatically when a device is selected; not exposed in UI. */
  integration_type: "volcast" | "solcast" | "forecast_solar" | "open_meteo_solar_forecast" | "manual";
  forecast_entities: [string, string, string, string, string, string, string];
  live_power_entity?: string;
  today_actual_entity?: string;
  /** Manual override for the +1HR header value. When set, reads state directly instead of deriving from hourly forecast data. */
  next_hour_entity?: string;
  /** Manual override for the LEFT header value. When set, reads state directly instead of deriving from hourly forecast data. */
  remaining_today_entity?: string;
  /** Optional per-array actual-generation sensors. When set, renders stacked bar segments on today's column. */
  actual_arrays?: ActualArrayEntry[];
  date_format: "DD/MM" | "MM/DD";
  time_format: "24h" | "12h";
  inverter_max_kw?: number;
  solar_max_kwp?: number;
  low_threshold?: number;
  high_threshold?: number;
}

export interface EntityRegistryEntry {
  entity_id: string;
  device_id: string | null;
  platform: string;
  name: string | null;
  original_name: string | null;
  disabled_by: string | null;
  hidden_by: string | null;
}

export interface DeviceRegistryEntry {
  id: string;
  name: string | null;
  name_by_user: string | null;
  identifiers: Array<[string, string]>;
  area_id: string | null;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  entities: Record<string, EntityRegistryEntry>;
  devices: Record<string, DeviceRegistryEntry>;
  language: string;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}
