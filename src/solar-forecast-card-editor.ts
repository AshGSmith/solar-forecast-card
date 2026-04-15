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
  show_title:          "Show title",
  full_width:          "Full width",
  device_id:           "Device (optional — auto-detects entities)",
  forecast_entity_0:   "Day 1 — Today",
  forecast_entity_1:   "Day 2 — Tomorrow",
  forecast_entity_2:   "Day 3",
  forecast_entity_3:   "Day 4",
  forecast_entity_4:   "Day 5",
  forecast_entity_5:   "Day 6",
  forecast_entity_6:   "Day 7",
  today_actual_entity: "Today's actual generation (optional)",
  date_format:         "Date format",
  low_threshold:       "Low threshold (kWh)",
  high_threshold:      "High threshold (kWh)",
};

// ── Schema segments (rendered with section headers between them) ──────────────

const SCHEMA_CARD: HaFormSchema[] = [
  { name: "title",      selector: { text: {} } },
  { name: "icon",       selector: { icon: {} } },
  { name: "show_title", selector: { boolean: {} } },
  { name: "full_width", selector: { boolean: {} } },
];

const SCHEMA_DEVICE: HaFormSchema[] = [
  { name: "device_id", selector: { device: {} } },
];

const SCHEMA_FORECAST: HaFormSchema[] = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
  name: `forecast_entity_${i}` as const,
  selector: { entity: { domain: "sensor" } },
}));

const SCHEMA_ACTUAL: HaFormSchema[] = [
  { name: "today_actual_entity", selector: { entity: { domain: "sensor" } } },
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
];

const SCHEMA_THRESHOLDS: HaFormSchema[] = [
  { name: "low_threshold",  selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
  { name: "high_threshold", selector: { number: { min: 0, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
];

// ── Flat form data (ha-form requires a plain object) ─────────────────────────

interface FormData {
  title: string;
  icon: string;
  show_title: boolean;
  full_width: boolean;
  device_id: string;
  forecast_entity_0: string;
  forecast_entity_1: string;
  forecast_entity_2: string;
  forecast_entity_3: string;
  forecast_entity_4: string;
  forecast_entity_5: string;
  forecast_entity_6: string;
  today_actual_entity: string;
  date_format: string;
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
    show_title:         raw.show_title !== false,
    full_width:         raw.full_width !== false,
    device_id:          raw.device_id,
    forecast_entities:  incoming as SolarForecastCardConfig["forecast_entities"],
    today_actual_entity: raw.today_actual_entity,
    date_format:        raw.date_format ?? "DD/MM",
    low_threshold:      raw.low_threshold,
    high_threshold:     raw.high_threshold,
  };
}

// ── Editor element ────────────────────────────────────────────────────────────

@customElement("solar-forecast-card-editor")
export class SolarForecastCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SolarForecastCardConfig;

  public setConfig(config: Partial<SolarForecastCardConfig>): void {
    this._config = normalizeConfig(config);
  }

  // ── Config ↔ flat FormData conversion ──────────────────────────────────────

  private _toFormData(cfg: SolarForecastCardConfig): FormData {
    return {
      title:               cfg.title              ?? "",
      icon:                cfg.icon               ?? "",
      show_title:          cfg.show_title,
      full_width:          cfg.full_width,
      device_id:           cfg.device_id          ?? "",
      today_actual_entity: cfg.today_actual_entity ?? "",
      date_format:         cfg.date_format         ?? "DD/MM",
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
      type:       this._config?.type ?? "custom:solar-forecast-card",
      title:      data.title || undefined,
      icon:       data.icon  || undefined,
      show_title: data.show_title,
      full_width: data.full_width,
      device_id:  data.device_id || undefined,
      forecast_entities: [
        data.forecast_entity_0,
        data.forecast_entity_1,
        data.forecast_entity_2,
        data.forecast_entity_3,
        data.forecast_entity_4,
        data.forecast_entity_5,
        data.forecast_entity_6,
      ] as SolarForecastCardConfig["forecast_entities"],
      today_actual_entity: data.today_actual_entity || undefined,
      date_format: (data.date_format as "DD/MM" | "MM/DD") || "DD/MM",
      low_threshold:  typeof data.low_threshold  === "number" ? data.low_threshold  : undefined,
      high_threshold: typeof data.high_threshold === "number" ? data.high_threshold : undefined,
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
    "forecast_entities" | "today_actual_entity"
  > {
    const sensors = this._deviceSensors(deviceId);

    // ── Split into forecast sensors (have "hours") and actual candidates ──────

    const forecastSensors = sensors.filter(
      (e) => Array.isArray(this.hass!.states[e.entity_id]?.attributes?.hours)
    );

    const actualEntry = sensors.find((e) => {
      const s = this.hass!.states[e.entity_id];
      if (!s) return false;
      const unit = s.attributes.unit_of_measurement as string | undefined;
      return !Array.isArray(s.attributes.hours) && (unit === "kWh" || unit === "Wh");
    });

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
      today_actual_entity: actualEntry?.entity_id,
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

    // Auto-detect entities when device selection changes
    if (newConfig.device_id && newConfig.device_id !== this._config.device_id) {
      const detected = this._autoDetect(newConfig.device_id);
      // Fill empty slots only — don't overwrite manual selections
      const slots = [...newConfig.forecast_entities] as string[];
      detected.forecast_entities.forEach((id, i) => {
        if (!slots[i] && id) slots[i] = id;
      });
      newConfig = {
        ...newConfig,
        forecast_entities: slots as SolarForecastCardConfig["forecast_entities"],
        today_actual_entity:
          newConfig.today_actual_entity || detected.today_actual_entity,
      };
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

      .section-title {
        font-size: 0.78rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin: 20px 0 4px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      }

      .section-title:first-child {
        margin-top: 4px;
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
      <p class="section-title">Card</p>
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_CARD}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>

      <p class="section-title">Device</p>
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_DEVICE}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>

      <p class="section-title">Daily Forecast Entities</p>
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_FORECAST}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>

      <p class="section-title">Today's Actual Generation</p>
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_ACTUAL}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>

      <p class="section-title">Display</p>
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_DISPLAY}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>

      <p class="section-title">Colour Thresholds</p>
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA_THRESHOLDS}
        .computeLabel=${label}
        @value-changed=${onChange}
      ></ha-form>
    `;
  }
}
