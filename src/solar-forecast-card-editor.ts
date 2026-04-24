import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type {
  SolarForecastCardConfig,
  ActualArrayEntry,
  HomeAssistant,
  EntityRegistryEntry,
} from "./types.js";

// ── ha-form schema (minimal typings — HA provides the element at runtime) ────

interface Selector {
  text?: Record<string, unknown>;
  device?: Record<string, unknown>;
  entity?: { domain?: string | string[] };
  select?: { options: Array<{ value: string; label: string }> };
  icon?: Record<string, unknown>;
  boolean?: Record<string, unknown>;
  number?: { min?: number; max?: number; step?: number; mode?: string; unit_of_measurement?: string };
}

interface HaFormSchema {
  name: string;
  required?: boolean;
  selector: Selector;
}

/** Return type for all _autoDetect* methods. */
interface AutoDetectResult {
  forecast_entities: SolarForecastCardConfig["forecast_entities"];
  integration_type: SolarForecastCardConfig["integration_type"];
  /** Populated when the device exposes a discrete "remaining today" sensor. */
  remaining_today_entity?: string;
  /** Populated when the device exposes a discrete "next hour forecast" sensor. */
  next_hour_entity?: string;
}

// ── Field labels ──────────────────────────────────────────────────────────────

const LABELS: Record<string, string> = {
  title:               "Title (optional)",
  icon:                "Header icon (optional, e.g. mdi:solar-power)",
  show_header:           "Show header",
  display_estimate10:    "Display Estimate10 Forecast Values",
  device_id:           "Forecast Device",
  forecast_entity_0:   "Day 1 — Today",
  forecast_entity_1:   "Day 2 — Tomorrow",
  forecast_entity_2:   "Day 3",
  forecast_entity_3:   "Day 4",
  forecast_entity_4:   "Day 5",
  forecast_entity_5:   "Day 6",
  forecast_entity_6:   "Day 7",
  export_rate_entity:       "Current Export Rate Entity",
  live_power_entity:        "Live power (optional, kW sensor)",
  today_actual_entity:      "Today's actual generation (optional)",
  next_hour_entity:         "+1HR forecast (optional, overrides auto-derived value)",
  remaining_today_entity:   "LEFT / remaining today (optional, overrides auto-derived value)",
  date_format:         "Date format",
  time_format:         "Time format (hourly popup)",
  inverter_max_kw:     "Inverter max output (kW)",
  solar_max_kwp:       "Solar array size (kWp)",
  low_threshold:       "Low threshold (kWh)",
  high_threshold:      "High threshold (kWh)",
};

// ── Schema segments (rendered with section headers between them) ──────────────

// Device field — rendered first as the primary entry point
const SCHEMA_DEVICE: HaFormSchema[] = [
  { name: "device_id", selector: { device: {} } },
];

// Remaining top-level fields — always visible
const SCHEMA_TOP: HaFormSchema[] = [
  { name: "title",              selector: { text: {} } },
  { name: "icon",               selector: { icon: {} } },
  { name: "show_header",        selector: { boolean: {} } },
  { name: "display_estimate10", selector: { boolean: {} } },
];

const SCHEMA_FORECAST: HaFormSchema[] = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
  name: `forecast_entity_${i}` as const,
  selector: { entity: { domain: "sensor" } },
}));

// All Live Data entity pickers in one schema so a single ha-form instance
// handles them — matching the same pattern used by SCHEMA_FORECAST (all 7
// forecast entities in one ha-form), which is what makes them correctly
// reflect auto-detected values in the editor.
const SCHEMA_LIVE: HaFormSchema[] = [
  { name: "live_power_entity",      selector: { entity: { domain: "sensor" } } },
  { name: "today_actual_entity",    selector: { entity: { domain: "sensor" } } },
  { name: "next_hour_entity",       selector: { entity: { domain: "sensor" } } },
  { name: "remaining_today_entity", selector: { entity: { domain: "sensor" } } },
];

const SCHEMA_DISPLAY: HaFormSchema[] = [
  {
    name: "date_format",
    selector: {
      select: {
        options: [
          { value: "DD/MM", label: "DD/MM  (e.g. 15/04)" },
          { value: "MM/DD", label: "MM/DD  (e.g. 04/15)" },
        ],
      },
    },
  },
  {
    name: "time_format",
    selector: {
      select: {
        options: [
          { value: "24h", label: "24h  (e.g. 17:00)" },
          { value: "12h", label: "12h  (e.g. 5pm)" },
        ],
      },
    },
  },
];

const SCHEMA_ENERGY_PROVIDER: HaFormSchema[] = [
  { name: "export_rate_entity", selector: { entity: {} } },
];

const SCHEMA_SYSTEM: HaFormSchema[] = [
  { name: "inverter_max_kw", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kW"  } } },
  { name: "solar_max_kwp",   selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWp" } } },
];

const SCHEMA_THRESHOLDS: HaFormSchema[] = [
  { name: "low_threshold",  selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
  { name: "high_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
];

// ── Flat form data (ha-form requires a plain object) ─────────────────────────

interface FormData {
  title: string;
  icon: string;
  show_header: boolean;
  display_estimate10: boolean;
  device_id: string;
  forecast_entity_0: string;
  forecast_entity_1: string;
  forecast_entity_2: string;
  forecast_entity_3: string;
  forecast_entity_4: string;
  forecast_entity_5: string;
  forecast_entity_6: string;
  export_rate_entity: string;
  live_power_entity: string;
  today_actual_entity: string;
  next_hour_entity: string;
  remaining_today_entity: string;
  date_format: string;
  time_format: string;
  inverter_max_kw: number | undefined;
  solar_max_kwp: number | undefined;
  low_threshold: number | undefined;
  high_threshold: number | undefined;
}

// ── Config normalisation (exported — also used by the main card) ──────────────

export function normalizeConfig(
  raw: Partial<SolarForecastCardConfig>
): SolarForecastCardConfig {
  const incoming = Array.isArray(raw.forecast_entities)
    ? raw.forecast_entities.slice(0, 7)
    : [];
  while (incoming.length < 7) incoming.push("");

  return {
    type:               raw.type ?? "custom:solar-forecast-card",
    title:              raw.title,
    icon:               raw.icon,
    show_header:          raw.show_header !== false,
    display_estimate10:   raw.display_estimate10 ?? false,
    device_id:          raw.device_id,
    integration_type:   raw.integration_type ?? "manual",
    forecast_entities:  incoming as SolarForecastCardConfig["forecast_entities"],
    export_rate_entity:     raw.export_rate_entity,
    live_power_entity:      raw.live_power_entity,
    today_actual_entity:    raw.today_actual_entity,
    next_hour_entity:       raw.next_hour_entity,
    remaining_today_entity: raw.remaining_today_entity,
    actual_arrays: Array.isArray(raw.actual_arrays)
      ? (raw.actual_arrays as ActualArrayEntry[]).filter(
          (e): e is ActualArrayEntry =>
            typeof e === "object" && e !== null && typeof e.entity === "string"
        )
      : undefined,
    date_format:        raw.date_format ?? "DD/MM",
    time_format:        raw.time_format ?? "24h",
    inverter_max_kw:    raw.inverter_max_kw,
    solar_max_kwp:      raw.solar_max_kwp,
    low_threshold:      raw.low_threshold,
    high_threshold:     raw.high_threshold,
  };
}

// ── Editor element ────────────────────────────────────────────────────────────

/** Entity FormData keys that count as "manually edited" when changed by the user. */
const ENTITY_FIELDS: string[] = [
  "forecast_entity_0", "forecast_entity_1", "forecast_entity_2",
  "forecast_entity_3", "forecast_entity_4", "forecast_entity_5",
  "forecast_entity_6", "today_actual_entity", "live_power_entity",
  "next_hour_entity", "remaining_today_entity",
];

@customElement("solar-forecast-card-editor")
export class SolarForecastCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SolarForecastCardConfig;

  /**
   * True when the current entity values were populated by auto-detection.
   * Set to true after any auto-detect run; reset to false if the user
   * manually edits any entity field. Used to decide whether a device switch
   * should overwrite all mapped entities or leave them alone.
   */
  @state() private _autoPopulated = false;

  /**
   * True when the user changed the device while entities were manually
   * configured. Cleared once auto-population takes over or device is removed.
   */
  @state() private _showManualWarning = false;

  public setConfig(config: Partial<SolarForecastCardConfig>): void {
    this._config = normalizeConfig(config);
  }

  // ── Config ↔ flat FormData conversion ──────────────────────────────────────

  private _toFormData(cfg: SolarForecastCardConfig): FormData {
    return {
      title:               cfg.title              ?? "",
      icon:                cfg.icon               ?? "",
      show_header:          cfg.show_header,
      display_estimate10:   cfg.display_estimate10 ?? false,
      device_id:            cfg.device_id          ?? "",
      export_rate_entity:     cfg.export_rate_entity     ?? "",
      live_power_entity:      cfg.live_power_entity      ?? "",
      today_actual_entity:    cfg.today_actual_entity    ?? "",
      next_hour_entity:       cfg.next_hour_entity       ?? "",
      remaining_today_entity: cfg.remaining_today_entity ?? "",
      date_format:         cfg.date_format         ?? "DD/MM",
      time_format:         cfg.time_format         ?? "24h",
      inverter_max_kw:     cfg.inverter_max_kw,
      solar_max_kwp:       cfg.solar_max_kwp,
      low_threshold:       cfg.low_threshold,
      high_threshold:      cfg.high_threshold,
      forecast_entity_0:   cfg.forecast_entities[0] ?? "",
      forecast_entity_1:   cfg.forecast_entities[1] ?? "",
      forecast_entity_2:   cfg.forecast_entities[2] ?? "",
      forecast_entity_3:   cfg.forecast_entities[3] ?? "",
      forecast_entity_4:   cfg.forecast_entities[4] ?? "",
      forecast_entity_5:   cfg.forecast_entities[5] ?? "",
      forecast_entity_6:   cfg.forecast_entities[6] ?? "",
    };
  }

  private _fromFormData(data: FormData): SolarForecastCardConfig {
    return {
      type:             this._config?.type ?? "custom:solar-forecast-card",
      title:            data.title || undefined,
      icon:             data.icon  || undefined,
      show_header:        data.show_header,
      display_estimate10: data.display_estimate10,
      device_id:          data.device_id || undefined,
      integration_type: this._config?.integration_type ?? "manual",
      forecast_entities: [
        data.forecast_entity_0,
        data.forecast_entity_1,
        data.forecast_entity_2,
        data.forecast_entity_3,
        data.forecast_entity_4,
        data.forecast_entity_5,
        data.forecast_entity_6,
      ] as SolarForecastCardConfig["forecast_entities"],
      export_rate_entity:     data.export_rate_entity     || undefined,
      live_power_entity:      data.live_power_entity      || undefined,
      today_actual_entity:    data.today_actual_entity    || undefined,
      next_hour_entity:       data.next_hour_entity       || undefined,
      remaining_today_entity: data.remaining_today_entity || undefined,
      actual_arrays:          this._config?.actual_arrays,
      date_format: (data.date_format as "DD/MM" | "MM/DD") || "DD/MM",
      time_format: (data.time_format as "24h" | "12h") || "24h",
      inverter_max_kw: typeof data.inverter_max_kw === "number" ? data.inverter_max_kw : undefined,
      solar_max_kwp:   typeof data.solar_max_kwp   === "number" ? data.solar_max_kwp   : undefined,
      low_threshold:   typeof data.low_threshold   === "number" ? data.low_threshold   : undefined,
      high_threshold:  typeof data.high_threshold  === "number" ? data.high_threshold  : undefined,
    };
  }

  // ── Actual-array management ─────────────────────────────────────────────────

  private _addArray(): void {
    const arrays = [...(this._config?.actual_arrays ?? []), { entity: "", label: "" }];
    this._dispatchArrayChange(arrays);
  }

  private _removeArray(idx: number): void {
    const arrays = (this._config?.actual_arrays ?? []).filter((_, i) => i !== idx);
    this._dispatchArrayChange(arrays);
  }

  private _updateArrayEntity(idx: number, entity: string): void {
    const arrays = [...(this._config?.actual_arrays ?? [])];
    arrays[idx] = { ...arrays[idx], entity: entity ?? "" };
    this._dispatchArrayChange(arrays);
  }

  private _updateArrayLabel(idx: number, raw: string): void {
    const arrays = [...(this._config?.actual_arrays ?? [])];
    arrays[idx] = { ...arrays[idx], label: raw.slice(0, 1) };
    this._dispatchArrayChange(arrays);
  }

  private _dispatchArrayChange(arrays: ActualArrayEntry[]): void {
    if (!this._config) return;
    const newConfig: SolarForecastCardConfig = {
      ...this._config,
      actual_arrays: arrays.length > 0 ? arrays : undefined,
    };
    this._config = newConfig;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    }));
  }

  // ── Entity auto-detection ───────────────────────────────────────────────────

  private _deviceSensors(deviceId: string): EntityRegistryEntry[] {
    if (!this.hass?.entities) return [];
    return Object.values(this.hass.entities).filter(
      (e) =>
        e.device_id === deviceId &&
        !e.disabled_by &&
        !e.hidden_by &&
        e.entity_id.startsWith("sensor.")
    );
  }

  private _autoDetect(deviceId: string): AutoDetectResult {
    const sensors = this._deviceSensors(deviceId);

    // Route to integration-specific detection when platform is identifiable
    const isSolcast          = sensors.some((e) => e.platform === "solcast_solar");
    const isForecastSolar    = sensors.some((e) => e.platform === "forecast_solar");
    const isOpenMeteo        = sensors.some((e) => e.platform === "open_meteo_solar_forecast");
    if (isSolcast)            return this._autoDetectSolcast(sensors);
    if (isForecastSolar)      return this._autoDetectForecastSolar(sensors);
    if (isOpenMeteo)          return this._autoDetectOpenMeteo(sensors);

    // ── Split into forecast sensors (have "hours") and actual candidates ──────

    const forecastSensors = sensors.filter(
      (e) => Array.isArray(this.hass!.states[e.entity_id]?.attributes?.hours)
    );

    // ── Map each forecast sensor to a day-offset from today ───────────────────

    const todayMidnight = this._localMidnight(new Date());

    type Candidate = { entityId: string; offset: number | null };

    const candidates: Candidate[] = forecastSensors.map((e) => {
      const state  = this.hass!.states[e.entity_id];
      const date   = this._extractForecastDate(e.entity_id, state);
      let offset: number | null = null;

      if (date !== null) {
        const diff = this._localMidnight(date).getTime() - todayMidnight.getTime();
        offset = Math.round(diff / 86_400_000);
      }

      return { entityId: e.entity_id, offset };
    });

    // ── Build the 7-slot array ────────────────────────────────────────────────

    const slots: string[] = ["", "", "", "", "", "", ""];
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
                    ? `Day ${c.offset} (${["Today","Tomorrow","Day 3","Day 4","Day 5","Day 6","Day 7"][c.offset]})`
                    : "unplaced",
        }))
    );

    return {
      forecast_entities: slots as SolarForecastCardConfig["forecast_entities"],
      integration_type:  "volcast",
    };
  }

  /**
   * Solcast-specific auto-detection.
   *
   * Solcast entities don't carry an `hours` array attribute so the generic
   * detector won't find them. Instead we match against the well-known keywords
   * the integration embeds in every entity_id:
   *
   *   forecast_today → slot 0  (today)
   *   forecast_tomorrow → slot 1  (tomorrow)
   *   forecast_day_3 … forecast_day_7 → slots 2–6
   *
   * Only kWh sensors are considered to avoid picking up power/API sensors.
   * today_actual_entity is left undefined — Solcast doesn't expose actual
   * generation; that sensor typically comes from the inverter integration.
   */
  private _autoDetectSolcast(
    sensors: EntityRegistryEntry[]
  ): AutoDetectResult {
    const slots: string[] = ["", "", "", "", "", "", ""];

    const DAY_KEYWORDS: Array<[string, number]> = [
      ["forecast_today",    0],
      ["forecast_tomorrow", 1],
      ["forecast_day_3",    2],
      ["forecast_day_4",    3],
      ["forecast_day_5",    4],
      ["forecast_day_6",    5],
      ["forecast_day_7",    6],
    ];

    for (const sensor of sensors) {
      const state = this.hass!.states[sensor.entity_id];
      const unit  = state?.attributes?.unit_of_measurement as string | undefined;
      if (unit !== "kWh") continue;

      for (const [keyword, slot] of DAY_KEYWORDS) {
        if (sensor.entity_id.includes(keyword)) {
          slots[slot] = sensor.entity_id;
          break;
        }
      }
    }

    console.debug(
      "[solar-forecast-card] Solcast auto-detect mapping:",
      slots.map((id, i) => ({
        slot: `Day ${i} (${["Today","Tomorrow","Day 3","Day 4","Day 5","Day 6","Day 7"][i]})`,
        entity: id ? id.replace(/^sensor\./, "") : "(empty)",
      }))
    );

    return {
      forecast_entities: slots as SolarForecastCardConfig["forecast_entities"],
      integration_type:  "solcast",
    };
  }

  /**
   * forecast.solar-specific auto-detection.
   *
   * The integration exposes two daily energy sensors per device:
   *   energy_production_today     → slot 0
   *   energy_production_tomorrow  → slot 1
   *
   * Slots 2–6 are left empty; forecast.solar doesn't provide day 3+ totals.
   * today_actual_entity is left undefined — actual generation comes from the
   * inverter, not from this integration.
   *
   * The native unit is Wh but HA displays it as kWh; both are accepted.
   * "energy_production_today_remaining" is excluded from slot 0 by requiring
   * the keyword is not followed by "_remaining".
   */
  private _autoDetectForecastSolar(
    sensors: EntityRegistryEntry[]
  ): AutoDetectResult {
    const slots: string[] = ["", "", "", "", "", "", ""];
    let remainingTodayEntity: string | undefined;

    for (const sensor of sensors) {
      const state = this.hass!.states[sensor.entity_id];
      const unit  = state?.attributes?.unit_of_measurement as string | undefined;
      if (unit !== "kWh" && unit !== "Wh") continue;

      const id = sensor.entity_id;
      if (id.includes("energy_production_today_remaining")) {
        // Capture as remaining_today_entity — provides the LEFT header value
        // directly for forecast.solar (which has no hourly attribute data).
        remainingTodayEntity = id;
      } else if (id.includes("energy_production_today")) {
        slots[0] = id;
      } else if (id.includes("energy_production_tomorrow")) {
        slots[1] = id;
      }
    }

    console.debug(
      "[solar-forecast-card] forecast.solar auto-detect mapping:",
      slots.map((id, i) => ({
        slot:   `Day ${i} (${["Today","Tomorrow","Day 3","Day 4","Day 5","Day 6","Day 7"][i]})`,
        entity: id ? id.replace(/^sensor\./, "") : "(empty)",
      })),
      "remaining_today_entity:", remainingTodayEntity ?? "(none)"
    );

    return {
      forecast_entities:      slots as SolarForecastCardConfig["forecast_entities"],
      integration_type:       "forecast_solar",
      remaining_today_entity: remainingTodayEntity,
    };
  }

  /**
   * Open-Meteo Solar Forecast auto-detection.
   *
   * The integration (platform: "open_meteo_solar_forecast") exposes daily
   * energy sensors whose entity_id follows the pattern:
   *   sensor.{service_slug}_{key}
   *
   * Keys mapped to card slots:
   *   energy_production_today     → slot 0  (today)
   *   energy_production_tomorrow  → slot 1  (tomorrow)
   *   energy_production_d2        → slot 2
   *   energy_production_d3        → slot 3
   *   energy_production_d4        → slot 4
   *   energy_production_d5        → slot 5
   *   energy_production_d6        → slot 6
   *   energy_production_d7        → skipped (card only has 7 slots, 0–6)
   *
   * "energy_production_today_remaining" is excluded.
   * Native unit is Wh; HA auto-converts to kWh via suggested_unit_of_measurement.
   * Both "kWh" and "Wh" are accepted to be safe.
   *
   * Each daily sensor carries a `wh_period` attribute (ISO datetime → Wh)
   * that the card uses for the hourly popup chart.
   */
  private _autoDetectOpenMeteo(
    sensors: EntityRegistryEntry[]
  ): AutoDetectResult {
    const slots: string[] = ["", "", "", "", "", "", ""];
    let remainingTodayEntity: string | undefined;

    // Key suffix → slot index.  Order matters: "today" must be listed before
    // any d-number so the endsWith check doesn't need extra guards.
    const KEY_SLOTS: Array<[string, number]> = [
      ["energy_production_today",    0],
      ["energy_production_tomorrow", 1],
      ["energy_production_d2",       2],
      ["energy_production_d3",       3],
      ["energy_production_d4",       4],
      ["energy_production_d5",       5],
      ["energy_production_d6",       6],
      // energy_production_d7 → no slot, intentionally omitted
    ];

    for (const sensor of sensors) {
      const id = sensor.entity_id;

      // "remaining" sensors are not daily totals and must not go into a forecast slot,
      // but energy_production_today_remaining maps to remaining_today_entity.
      if (id.includes("_remaining")) {
        if (id.includes("energy_production_today_remaining")) {
          const state = this.hass!.states[id];
          const unit  = state?.attributes?.unit_of_measurement as string | undefined;
          if (unit === "kWh" || unit === "Wh") remainingTodayEntity = id;
        }
        continue;
      }

      const state = this.hass!.states[id];
      const unit  = state?.attributes?.unit_of_measurement as string | undefined;
      if (unit !== "kWh" && unit !== "Wh") continue;

      for (const [key, slot] of KEY_SLOTS) {
        // entity_id format is sensor.{slug}_{key}, so the key is always the suffix
        if (id.endsWith("_" + key)) {
          slots[slot] = id;
          break;
        }
      }
    }

    console.debug(
      "[solar-forecast-card] Open-Meteo auto-detect mapping:",
      slots.map((id, i) => ({
        slot:   `Day ${i} (${["Today","Tomorrow","Day 3","Day 4","Day 5","Day 6","Day 7"][i]})`,
        entity: id ? id.replace(/^sensor\./, "") : "(empty)",
      })),
      "remaining_today_entity:", remainingTodayEntity ?? "(none)"
    );

    return {
      forecast_entities:      slots as SolarForecastCardConfig["forecast_entities"],
      integration_type:       "open_meteo_solar_forecast",
      remaining_today_entity: remainingTodayEntity,
    };
  }

  /**
   * Extract the forecast date from an entity, trying in priority order:
   *   1. `datetime` state attribute  (ISO datetime string)
   *   2. `date`     state attribute  (ISO date string  YYYY-MM-DD)
   *   3. ISO date pattern inside the entity_id  (YYYY_MM_DD or YYYY-MM-DD)
   *
   * Returns null when no reliable date can be found.
   */
  private _extractForecastDate(
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
      const d = this._parseLocalDate(dateAttr);
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

  /** Parse "YYYY-MM-DD" as a local-timezone Date (avoids UTC midnight offset). */
  private _parseLocalDate(value: string): Date | null {
    const m = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return null;
    const d = new Date(+m[1], +m[2] - 1, +m[3]);
    return isNaN(d.getTime()) ? null : d;
  }

  /** Return a new Date set to local midnight of the given date. */
  private _localMidnight(d: Date): Date {
    const out = new Date(d);
    out.setHours(0, 0, 0, 0);
    return out;
  }

  // ── Event handling ──────────────────────────────────────────────────────────

  /**
   * Shared handler for all ha-form value-changed events.
   * Each form instance fires only its own field subset; we merge with the
   * current full FormData before converting back to SolarForecastCardConfig.
   */
  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) return;
    ev.stopPropagation(); // don't let ha-form's value-changed bubble further

    const partial = ev.detail.value as Partial<FormData>;
    const current = this._toFormData(this._config);
    const merged: FormData = { ...current, ...partial };

    let newConfig = this._fromFormData(merged);

    const deviceChanged = !!(newConfig.device_id && newConfig.device_id !== this._config.device_id);
    const deviceCleared = !newConfig.device_id && !!this._config.device_id;
    const isFirstDevice  = deviceChanged && !this._config.device_id;

    if (deviceChanged) {
      const detected = this._autoDetect(newConfig.device_id!);

      if (isFirstDevice || this._autoPopulated) {
        // First-ever device selection, or entities were previously auto-filled:
        // replace forecast_entities, integration_type, and any detected
        // summary entities. today_actual_entity is always preserved — it
        // typically comes from the inverter, not the forecast device, so
        // device changes must never clear it.
        //
        // remaining_today_entity and next_hour_entity are set to the detected
        // value (may be undefined = clear) so that switching between integrations
        // never leaves stale auto-populated values from a previous device.
        newConfig = {
          ...newConfig,
          forecast_entities:      detected.forecast_entities,
          integration_type:       detected.integration_type,
          remaining_today_entity: detected.remaining_today_entity,
          next_hour_entity:       detected.next_hour_entity,
        };
        this._autoPopulated = true;
        this._showManualWarning = false;
      } else {
        // User has manually edited entities — leave them alone, but still
        // update integration_type so parsing logic stays correct.
        newConfig = { ...newConfig, integration_type: detected.integration_type };
        this._showManualWarning = true;
      }
    } else if (deviceCleared) {
      newConfig = {
        ...newConfig,
        integration_type:       "manual",
        remaining_today_entity: undefined,
        next_hour_entity:       undefined,
      };
      this._autoPopulated = false;
      this._showManualWarning = false;
    } else if (ENTITY_FIELDS.some((f) => f in partial)) {
      // User manually edited an entity field — mark as no longer auto-populated.
      this._autoPopulated = false;
    }

    this._config = newConfig;

    // composed: true is required so the event crosses the shadow DOM boundary
    // back to HA's dialog and the config is actually saved.
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  // ── Styles ──────────────────────────────────────────────────────────────────

  static override get styles() {
    return css`
      :host {
        display: block;
      }

      .device-helper {
        display: flex;
        align-items: center;
        gap: 4px;
        margin: 4px 0 8px;
        padding: 0 4px;
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        opacity: 0.75;
      }

      .device-helper ha-icon {
        --mdc-icon-size: 14px;
        flex-shrink: 0;
      }

      ha-expansion-panel {
        display: block;
        margin-top: 8px;
        --expansion-panel-summary-padding: 0 8px;
        --expansion-panel-content-padding: 0 8px 8px;
      }

      /* ── Actual-array list ─────────────────────────────────── */

      .array-row {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 4px 0;
      }

      .array-row ha-selector {
        flex: 1;
        min-width: 0;
      }

      /* Nudge the delete button down so it sits beside the input,
         not the label heading above it. */
      .array-row > ha-icon-button {
        margin-top: 20px;
        flex-shrink: 0;
      }

      /* Wrapper: stacks the heading, input, and hint vertically */
      .array-label-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        flex-shrink: 0;
      }

      .array-field-label {
        font-size: 0.63rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
        line-height: 1.2;
      }

      .array-label-hint {
        font-size: 0.58rem;
        color: var(--secondary-text-color);
        opacity: 0.65;
        white-space: nowrap;
        text-align: center;
        line-height: 1.2;
      }

      .array-label-input {
        width: 3.2rem;
        border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
        border-radius: 4px;
        padding: 6px 6px;
        font-size: 0.9rem;
        text-align: center;
        background: var(--secondary-background-color, transparent);
        color: var(--primary-text-color);
        outline: none;
        box-sizing: border-box;
      }

      .array-label-input:focus {
        border-color: var(--primary-color);
      }

      .add-array-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 4px 2px;
        cursor: pointer;
        color: var(--primary-color);
        font-size: 0.85rem;
        font-weight: 500;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      .add-array-btn:hover { opacity: 0.8; }

      .add-array-btn ha-icon {
        --mdc-icon-size: 18px;
      }
    `;
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  protected override render() {
    if (!this.hass || !this._config) return nothing;

    const data = this._toFormData(this._config);
    const label = (s: HaFormSchema) => LABELS[s.name] ?? s.name;
    const onChange = this._valueChanged.bind(this);

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_DEVICE}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
      <p class="device-helper">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        Recommended: selecting a device will auto-configure the card
      </p>

      ${this._showManualWarning ? html`
        <ha-alert alert-type="warning">
          Changing device will not overwrite manually configured entities.
        </ha-alert>
      ` : nothing}

      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_TOP}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
      <p class="device-helper" style="margin:0 0 4px">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        Estimate10 option only available when using the Solcast integration
      </p>

      <ha-expansion-panel header="Daily Forecast Entities" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_FORECAST}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Live Data" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_LIVE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:4px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          +1HR and LEFT are auto-detected or auto-derived where possible. Set these manually to override, or to use a custom sensor.
        </p>
      </ha-expansion-panel>

      <ha-expansion-panel header="Actual Generation Arrays" outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 10px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          Optional: configure individual array sensors to display a stacked breakdown on today's bar.
          Each label is a single character shown inside its segment (e.g. N, S, E).
        </p>
        ${(this._config.actual_arrays ?? []).map((entry, idx) => html`
          <div class="array-row">
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { domain: ["sensor"] } }}
              .value=${entry.entity || ""}
              .label=${"Array entity"}
              @value-changed=${(e: CustomEvent) =>
                this._updateArrayEntity(idx, e.detail.value as string)}
            ></ha-selector>
            <div class="array-label-wrap">
              <span class="array-field-label">Label (1 char)</span>
              <input
                type="text"
                class="array-label-input"
                placeholder="E"
                maxlength="1"
                .value=${entry.label || ""}
                @input=${(e: InputEvent) =>
                  this._updateArrayLabel(idx, (e.target as HTMLInputElement).value)}
              />
              <span class="array-label-hint">bar &amp; popup</span>
            </div>
            <ha-icon-button
              .label=${"Remove"}
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              @click=${() => this._removeArray(idx)}
            ></ha-icon-button>
          </div>
        `)}
        <div
          class="add-array-btn"
          role="button"
          tabindex="0"
          @click=${this._addArray.bind(this)}
          @keydown=${(e: KeyboardEvent) =>
            (e.key === "Enter" || e.key === " ") && this._addArray()}
        >
          <ha-icon icon="mdi:plus-circle-outline"></ha-icon>
          Add array
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel header="System Parameters" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_SYSTEM}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Energy Provider" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_ENERGY_PROVIDER}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Colour Thresholds" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_THRESHOLDS}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header="Date/Time Formats" outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>
    `;
  }
}
