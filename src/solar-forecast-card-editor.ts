import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type {
  SolarForecastCardConfig,
  HomeAssistant,
  EntityRegistryEntry,
} from "./types.js";

const EMPTY_FORECAST: SolarForecastCardConfig["forecast_entities"] = [
  "", "", "", "", "", "", "",
];

const DAY_LABELS = [
  "Day 1 — Today",
  "Day 2 — Tomorrow",
  "Day 3",
  "Day 4",
  "Day 5",
  "Day 6",
  "Day 7",
];

/** Normalise a raw/partial config into a fully-populated one. */
export function normalizeConfig(
  raw: Partial<SolarForecastCardConfig>
): SolarForecastCardConfig {
  const incoming = Array.isArray(raw.forecast_entities)
    ? raw.forecast_entities.slice(0, 7)
    : [];
  while (incoming.length < 7) incoming.push("");

  return {
    type: raw.type ?? "custom:solar-forecast-card",
    title: raw.title,
    device_id: raw.device_id,
    forecast_entities:
      incoming as SolarForecastCardConfig["forecast_entities"],
    today_actual_entity: raw.today_actual_entity,
    date_format: raw.date_format ?? "DD/MM",
  };
}

@customElement("solar-forecast-card-editor")
export class SolarForecastCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SolarForecastCardConfig;

  public setConfig(config: Partial<SolarForecastCardConfig>): void {
    this._config = normalizeConfig(config);
  }

  // ── Entity discovery ────────────────────────────────────────────────────────

  /** Sensor entities that belong to `deviceId` and are not disabled/hidden. */
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

  /**
   * Inspect live state to determine which entities are Volcast daily-forecast
   * sensors (they carry an `hours` array attribute) and which is the actual
   * generation sensor (kWh unit, no `hours`).
   */
  private _autoDetect(
    deviceId: string
  ): Pick<SolarForecastCardConfig, "forecast_entities" | "today_actual_entity"> {
    const sensors = this._deviceSensors(deviceId);

    const forecastIds = sensors
      .filter((e) => {
        const s = this.hass!.states[e.entity_id];
        return Array.isArray(s?.attributes?.hours);
      })
      .sort((a, b) => a.entity_id.localeCompare(b.entity_id))
      .map((e) => e.entity_id);

    const padded = [...forecastIds];
    while (padded.length < 7) padded.push("");

    const actualEntry = sensors.find((e) => {
      const s = this.hass!.states[e.entity_id];
      if (!s) return false;
      const unit = s.attributes.unit_of_measurement as string | undefined;
      return (
        !Array.isArray(s.attributes.hours) &&
        (unit === "kWh" || unit === "Wh")
      );
    });

    return {
      forecast_entities:
        padded.slice(0, 7) as SolarForecastCardConfig["forecast_entities"],
      today_actual_entity: actualEntry?.entity_id,
    };
  }

  // ── Event handlers ──────────────────────────────────────────────────────────

  private _titleChanged(ev: CustomEvent): void {
    if (!this._config) return;
    const value = (ev.target as HTMLInputElement).value;
    this._fire({ ...this._config, title: value || undefined });
  }

  private _deviceChanged(ev: CustomEvent): void {
    if (!this._config) return;
    const deviceId = (ev.detail.value as string) || undefined;
    const detected = deviceId ? this._autoDetect(deviceId) : {};
    this._fire({ ...this._config, device_id: deviceId, ...detected });
  }

  private _redetect(): void {
    if (!this._config?.device_id) return;
    this._fire({ ...this._config, ...this._autoDetect(this._config.device_id) });
  }

  private _forecastEntityChanged(ev: CustomEvent, index: number): void {
    if (!this._config) return;
    const entities = [
      ...this._config.forecast_entities,
    ] as SolarForecastCardConfig["forecast_entities"];
    entities[index] = (ev.detail.value as string) ?? "";
    this._fire({ ...this._config, forecast_entities: entities });
  }

  private _actualEntityChanged(ev: CustomEvent): void {
    if (!this._config) return;
    this._fire({
      ...this._config,
      today_actual_entity: (ev.detail.value as string) || undefined,
    });
  }

  private _dateFormatChanged(ev: CustomEvent): void {
    if (!this._config) return;
    const value = (ev.detail.value as string) || "";
    if (!value) return;
    this._fire({
      ...this._config,
      date_format: value as SolarForecastCardConfig["date_format"],
    });
  }

  private _fire(config: SolarForecastCardConfig): void {
    this._config = config;
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config }, bubbles: true })
    );
  }

  // ── Styles ──────────────────────────────────────────────────────────────────

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .section-title {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 20px 0 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .section-title:first-of-type {
        margin-top: 8px;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .row > * {
        flex: 1;
      }

      ha-entity-picker,
      ha-device-picker,
      ha-select,
      ha-textfield {
        display: block;
        width: 100%;
        margin-bottom: 8px;
      }

      .redetect-btn {
        flex: 0 0 auto;
        margin-bottom: 8px;
      }

      .helper-text {
        font-size: 0.8rem;
        color: var(--secondary-text-color);
        margin: -4px 0 8px;
      }

      .detected-badge {
        font-size: 0.75rem;
        color: var(--success-color, #4caf50);
        display: flex;
        align-items: center;
        gap: 4px;
        margin: -4px 0 8px;
      }
    `;
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  protected render() {
    if (!this._config) return nothing;

    const cfg = this._config;
    const forecastEntities = cfg.forecast_entities ?? EMPTY_FORECAST;
    const detectedCount = forecastEntities.filter(Boolean).length;

    return html`
      <!-- Title -->
      <p class="section-title">Card</p>
      <ha-textfield
        .value=${cfg.title ?? ""}
        label="Title (optional)"
        placeholder="Solar Forecast"
        @change=${this._titleChanged}
      ></ha-textfield>

      <!-- Device -->
      <p class="section-title">Device</p>

      <div class="row">
        <ha-device-picker
          .hass=${this.hass}
          .value=${cfg.device_id ?? ""}
          label="Source device (optional)"
          @value-changed=${this._deviceChanged}
        ></ha-device-picker>

        ${cfg.device_id
          ? html`
              <mwc-icon-button
                class="redetect-btn"
                title="Re-detect entities from device"
                @click=${this._redetect}
              >
                <ha-icon icon="mdi:refresh"></ha-icon>
              </mwc-icon-button>
            `
          : nothing}
      </div>

      ${cfg.device_id && detectedCount > 0
        ? html`
            <p class="detected-badge">
              <ha-icon icon="mdi:check-circle"></ha-icon>
              ${detectedCount} of 7 forecast entities auto-detected
            </p>
          `
        : html`
            <p class="helper-text">
              Select a device to auto-detect Volcast forecast entities, or set
              them manually below.
            </p>
          `}

      <!-- Daily forecast entities -->
      <p class="section-title">Daily Forecast Entities</p>

      ${DAY_LABELS.map(
        (label, i) => html`
          <ha-entity-picker
            .hass=${this.hass}
            .value=${forecastEntities[i] ?? ""}
            .label=${label}
            .includeDomains=${["sensor"]}
            allow-custom-entity
            @value-changed=${(ev: CustomEvent) =>
              this._forecastEntityChanged(ev, i)}
          ></ha-entity-picker>
        `
      )}

      <!-- Actual generation -->
      <p class="section-title">Today's Actual Generation</p>
      <ha-entity-picker
        .hass=${this.hass}
        .value=${cfg.today_actual_entity ?? ""}
        label="Actual generation entity (optional)"
        .includeDomains=${["sensor"]}
        allow-custom-entity
        @value-changed=${this._actualEntityChanged}
      ></ha-entity-picker>
      <p class="helper-text">
        A sensor tracking how much energy the panels have actually produced
        today. Will be overlaid on the forecast bar.
      </p>

      <!-- Display options -->
      <p class="section-title">Display</p>
      <ha-select
        .value=${cfg.date_format ?? "DD/MM"}
        label="Date format"
        naturalMenuWidth
        fixedMenuPosition
        @value-changed=${this._dateFormatChanged}
      >
        <mwc-list-item value="DD/MM">DD/MM &nbsp;(e.g. 15/04)</mwc-list-item>
        <mwc-list-item value="MM/DD">MM/DD &nbsp;(e.g. 04/15)</mwc-list-item>
      </ha-select>
    `;
  }
}
