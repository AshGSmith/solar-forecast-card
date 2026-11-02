import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type {
  SolarForecastCardConfig,
  ActualArrayEntry,
  HomeAssistant,
  EntityRegistryEntry,
} from "../types.js";
import { normalizeConfig } from "../config.js";
import { autoDetect } from "../integrations/index.js";
import { localize, resolveLanguage } from "../localize.js";
import { ENTITY_FIELDS, fromFormData, toFormData, type FormData } from "./form-data.js";
import {
  integrationSchema,
  mainViewSchema,
  SCHEMA_DEVICE,
  SCHEMA_DISPLAY_BAR_WIDTH,
  SCHEMA_DISPLAY_FONT_SIZE,
  SCHEMA_DISPLAY_TEXT_SCALE,
  SCHEMA_ENERGY_PROVIDER,
  SCHEMA_FORECAST,
  SCHEMA_LIVE,
  SCHEMA_SYSTEM,
  SCHEMA_THRESHOLDS,
  SCHEMA_TOP,
  type HaFormSchema,
} from "./schema.js";
import { editorStyles } from "./styles.js";

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

  private _language() {
    return resolveLanguage(this.hass);
  }

  private _t(key: string, vars?: Record<string, string | number>): string {
    return localize(this._language(), key, vars);
  }

  static override styles = editorStyles;

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
    const current = toFormData(this._config);
    const merged: FormData = { ...current, ...partial };

    let newConfig = fromFormData(merged, this._config);

    const deviceChanged = !!(newConfig.device_id && newConfig.device_id !== this._config.device_id);
    const deviceCleared = !newConfig.device_id && !!this._config.device_id;
    const isFirstDevice  = deviceChanged && !this._config.device_id;

    if (deviceChanged) {
      const detected = autoDetect(this._deviceSensors(newConfig.device_id!), this.hass!);

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

  protected override render() {
    if (!this.hass || !this._config) return nothing;

    const data = toFormData(this._config);
    const label = (s: HaFormSchema) => this._t(`editor.labels.${s.name}`);
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
        ${this._t("editor.helpers.device")}
      </p>

      ${this._showManualWarning ? html`
        <ha-alert alert-type="warning">
          ${this._t("editor.warnings.manualEntities")}
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
        ${this._t("editor.helpers.estimate10")}
      </p>

      <ha-expansion-panel header=${this._t("editor.sections.integrationType")} outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.integrationType")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${integrationSchema((key) => this._t(key))}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.dailyForecastEntities")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_FORECAST}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.liveData")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_LIVE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:4px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.liveData")}
        </p>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.actualGenerationArrays")} outlined leftChevron>
        <p class="device-helper" style="margin:8px 0 10px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.actualArrays")}
        </p>
        ${(this._config.actual_arrays ?? []).map((entry, idx) => html`
          <div class="array-row">
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { domain: ["sensor"] } }}
              .value=${entry.entity || ""}
              .label=${this._t("editor.arrays.entity")}
              @value-changed=${(e: CustomEvent) =>
                this._updateArrayEntity(idx, e.detail.value as string)}
            ></ha-selector>
            <div class="array-label-wrap">
              <span class="array-field-label">${this._t("editor.arrays.label")}</span>
              <input
                type="text"
                class="array-label-input"
                placeholder=${this._t("editor.arrays.placeholder")}
                maxlength="1"
                .value=${entry.label || ""}
                @input=${(e: InputEvent) =>
                  this._updateArrayLabel(idx, (e.target as HTMLInputElement).value)}
              />
              <span class="array-label-hint">${this._t("editor.arrays.hint")}</span>
            </div>
            <ha-icon-button
              .label=${this._t("editor.arrays.remove")}
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
          ${this._t("editor.arrays.add")}
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.systemParameters")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_SYSTEM}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.energyProvider")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_ENERGY_PROVIDER}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.colourThresholds")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_THRESHOLDS}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
      </ha-expansion-panel>

      <ha-expansion-panel header=${this._t("editor.sections.dateTimeDisplay")} outlined leftChevron>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_TEXT_SCALE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.desktopTextScale")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_FONT_SIZE}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.fontSize")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA_DISPLAY_BAR_WIDTH}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.barWidth")}
        </p>
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${mainViewSchema((key) => this._t(key))}
          .computeLabel=${label}
          @value-changed=${onChange}
        ></ha-form>
        <p class="device-helper" style="margin:2px 0 6px">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          ${this._t("editor.helpers.mainView")}
        </p>
      </ha-expansion-panel>
    `;
  }
}
