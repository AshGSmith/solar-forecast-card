import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type {
  SolarForecastCardConfig,
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

// ── Field labels ──────────────────────────────────────────────────────────────

const LABELS: Record<string, string> = {
  title:               "Title (optional)",
  icon:                "Header icon (optional, e.g. mdi:solar-power)",
  show_header:          "Show header",
  device_id:           "Forecast Device",
  forecast_entity_0:   "Day 1 — Today",
  forecast_entity_1:   "Day 2 — Tomorrow",
  forecast_entity_2:   "Day 3",
  forecast_entity_3:   "Day 4",
  forecast_entity_4:   "Day 5",
  forecast_entity_5:   "Day 6",
  forecast_entity_6:   "Day 7",
  live_power_entity:   "Live power (optional, kW sensor)",
  today_actual_entity: "Today's actual generation (optional)",
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
  { name: "title",       selector: { text: {} } },
  { name: "icon",        selector: { icon: {} } },
  { name: "show_header", selector: { boolean: {} } },
];

const SCHEMA_FORECAST: HaFormSchema[] = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
  name: `forecast_entity_${i}` as const,
  selector: { entity: { domain: "sensor" } },
}));

const SCHEMA_TODAY_ACTUAL: HaFormSchema[] = [
  { name: "today_actual_entity", selector: { entity: { domain: "sensor" } } },
];

const SCHEMA_LIVE_POWER: HaFormSchema[] = [
  { name: "live_power_entity", selector: { entity: { domain: "sensor" } } },
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
  device_id: string;
  forecast_entity_0: string;
  forecast_entity_1: string;
  forecast_entity_2: string;
  forecast_entity_3: string;
  forecast_entity_4: string;
  forecast_entity_5: string;
  forecast_entity_6: string;
  live_power_entity: string;
  today_actual_entity: string;
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
    show_header:         raw.show_header !== false,
    device_id:          raw.device_id,
    integration_type:   raw.integration_type ?? "manual",
    forecast_entities:  incoming as SolarForecastCardConfig["forecast_entities"],
    live_power_entity:   raw.live_power_entity,
    today_actual_entity: raw.today_actual_entity,
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
      device_id:           cfg.device_id          ?? "",
      live_power_entity:   cfg.live_power_entity   ?? "",
      today_actual_entity: cfg.today_actual_entity ?? "",
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
      show_header:      data.show_header,
      device_id:        data.device_id || undefined,
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
      live_power_entity:   data.live_power_entity   || undefined,
      today_actual_entity: data.today_actual_entity || undefined,
      date_format: (data.date_format as "DD/MM" | "MM/DD") || "DD/MM",
      time_format: (data.time_format as "24h" | "12h") || "24h",
      inverter_max_kw: typeof data.inverter_max_kw === "number" ? data.inverter_max_kw : undefined,
      solar_max_kwp:   typeof data.solar_max_kwp   === "number" ? data.solar_max_kwp   : undefined,
      low_threshold:   typeof data.low_threshold   === "number" ? data.low_threshold   : undefined,
      high_threshold:  typeof data.high_threshold  === "number" ? data.high_threshold  : undefined,
    };
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

  private _autoDetect(deviceId: string): Pick<
    SolarForecastCardConfig,
    "forecast_entities" | "integration_type"
  > {
    const sensors = this._deviceSensors(deviceId);

    // Route to integration-specific detection when platform is identifiable
    const isSolcast      = sensors.some((e) => e.platform === "solcast_solar");
    const isForecastSolar = sensors.some((e) => e.platform === "forecast_solar");
    if (isSolcast)       return this._autoDetectSolcast(sensors);
    if (isForecastSolar) return this._autoDetectForecastSolar(sensors);

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
  ): Pick<SolarForecastCardConfig, "forecast_entities" | "integration_type"> {
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
  ): Pick<SolarForecastCardConfig, "forecast_entities" | "integration_type"> {
    const slots: string[] = ["", "", "", "", "", "", ""];

    for (const sensor of sensors) {
      const state = this.hass!.states[sensor.entity_id];
      const unit  = state?.attributes?.unit_of_measurement as string | undefined;
      if (unit !== "kWh" && unit !== "Wh") continue;

      const id = sensor.entity_id;
      if (id.includes("energy_production_today") && !id.includes("remaining")) {
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
      }))
    );

    return {
      forecast_entities: slots as SolarForecastCardConfig["forecast_entities"],
      integration_type:  "forecast_solar",
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
        // replace forecast_entities and integration_type. today_actual_entity
        // is always preserved — it typically comes from the inverter, not the
        // forecast device, so device changes must never clear it.
        newConfig = {
          ...newConfig,
          forecast_entities: detected.forecast_entities,
          integration_type:  detected.integration_type,
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
      newConfig = { ...newConfig, integration_type: "manual" };
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
        margin: -6px 0 4px;
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
          .schema=${SCHEMA_LIVE_POWER}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_TODAY_ACTUAL}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
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
