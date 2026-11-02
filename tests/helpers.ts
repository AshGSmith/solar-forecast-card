import { normalizeConfig } from "../src/config.js";
import type {
  EntityRegistryEntry,
  HassEntity,
  HomeAssistant,
  SolarForecastCardConfig,
} from "../src/types.js";

export function entity(state: unknown, attributes: Record<string, unknown> = {}): HassEntity {
  return { entity_id: "", state: String(state), attributes, last_changed: "", last_updated: "" };
}

export function makeHass(
  states: Record<string, HassEntity>,
  extra: Partial<HomeAssistant> = {}
): HomeAssistant {
  return { states, entities: {}, devices: {}, language: "en", ...extra };
}

export function makeConfig(config: Partial<SolarForecastCardConfig> = {}): SolarForecastCardConfig {
  return normalizeConfig(config);
}

export function sensor(entityId: string, platform: string): EntityRegistryEntry {
  return {
    entity_id: entityId,
    device_id: "device",
    platform,
    name: null,
    original_name: null,
    disabled_by: null,
    hidden_by: null,
  };
}

export const KWH = { unit_of_measurement: "kWh" };
export const WH = { unit_of_measurement: "Wh" };
