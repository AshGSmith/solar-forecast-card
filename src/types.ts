export interface SolarForecastCardConfig {
  type: string;
  title?: string;
  icon?: string;
  show_header: boolean;
  device_id?: string;
  forecast_entities: [string, string, string, string, string, string, string];
  live_power_entity?: string;
  today_actual_entity?: string;
  date_format: "DD/MM" | "MM/DD";
  time_format: "24h" | "12h";
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
