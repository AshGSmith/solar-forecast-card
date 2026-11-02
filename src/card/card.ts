import { LitElement, html, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { normalizeConfig } from "../config.js";
import { fetchActualHourly } from "../data/history.js";
import { buildRows, forecastTier, type ForecastRow } from "../data/rows.js";
import { readHoursAttr } from "../integrations/index.js";
import { localize, resolveLanguage } from "../localize.js";
import type { HomeAssistant, SolarForecastCardConfig } from "../types.js";
import { MAIN_ACTUAL_REFRESH_MS, POPUP_CLOSE_MS } from "./const.js";
import { Formatter } from "./format.js";
import { renderDayColumn } from "./render/day-column.js";
import { renderHeader } from "./render/header.js";
import { renderMainHourly } from "./render/hourly-chart.js";
import { renderPopup } from "./render/popup.js";
import { cardStyles } from "./styles/index.js";

@customElement("solar-forecast-card")
export class SolarForecastCard extends LitElement {
  static override styles = cardStyles;

  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SolarForecastCardConfig;

  /** Currently open popup row (null = closed). */
  @state() private _popup: ForecastRow | null = null;
  /** True once the popup is in-DOM and should animate in. */
  @state() private _popupVisible = false;

  /**
   * Hourly actual-generation data (local hour → kWh) fetched asynchronously
   * from the HA history API when today's popup opens.
   * null  = not yet fetched or not applicable (not today / no entity).
   * Map   = fetch completed; map may be empty if no generating hours found.
   */
  @state() private _popupActualHourly: Map<number, number> | null = null;

  /**
   * Same actual-history data as the popup uses, but for the optional main-card
   * hourly view. Kept separate so opening/closing the popup never resets the
   * inline chart's Actual column.
   */
  @state() private _mainActualHourly: Map<number, number> | null = null;
  private _mainActualFetchKey?: string;
  private _mainActualDataScope?: string;
  private _mainActualRefreshInFlight = false;
  private _mainActualNextRefreshAt = 0;

  private _closeTimer?: ReturnType<typeof setTimeout>;
  private readonly _onDocKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this._popup) this._closePopup();
  };

  // ── Lovelace lifecycle ────────────────────────────────────────────────────

  public static getConfigElement(): HTMLElement {
    return document.createElement("solar-forecast-card-editor");
  }

  public static getStubConfig(): Partial<SolarForecastCardConfig> {
    return {
      forecast_entities: ["", "", "", "", "", "", ""],
      show_header: true,
    };
  }

  public setConfig(config: Partial<SolarForecastCardConfig>): void {
    if (!config) throw new Error(localize("en", "card.errors.invalidConfig"));
    this._config = normalizeConfig(config);
    this._resetMainActual();
    // Apply the desktop text scale as a CSS custom property on the host element.
    // The static stylesheet uses calc(base * var(--dts-factor, 1)) inside a
    // @media (min-width: 768px) block so mobile sizing is never affected.
    const factor = (this._config.desktop_text_scale ?? 100) / 100;
    this.style.setProperty("--dts-factor", String(factor));
    this._setOptionalCssPx("--sfc-font-size", this._config.font_size);
    this._setOptionalCssPx("--sfc-bar-width", this._config.bar_width);
  }

  public getCardSize(): number {
    return 4;
  }

  private _setOptionalCssPx(name: string, value: number | undefined): void {
    if (typeof value === "number" && Number.isFinite(value)) {
      this.style.setProperty(name, `${value}px`);
    } else {
      this.style.removeProperty(name);
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("keydown", this._onDocKey);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this._onDocKey);
    clearTimeout(this._closeTimer);
  }

  // ── Update optimisation ───────────────────────────────────────────────────

  protected override shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has("_config") || changedProps.has("_popup") || changedProps.has("_popupVisible") || changedProps.has("_popupActualHourly") || changedProps.has("_mainActualHourly")) return true;
    if (!this._config || !this.hass) return false;

    const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
    if (!oldHass) return true;
    if (resolveLanguage(oldHass) !== resolveLanguage(this.hass)) return true;

    const watchIds = [
      ...this._config.forecast_entities,
      this._config.live_power_entity,
      this._config.today_actual_entity,
      this._config.next_hour_entity,
      this._config.remaining_today_entity,
      this._config.export_rate_entity,
      this._config.low_threshold_entity,
      this._config.high_threshold_entity,
      ...(this._config.actual_arrays?.map((a) => a.entity) ?? []),
    ].filter(Boolean) as string[];

    return watchIds.some((id) => oldHass.states[id] !== this.hass!.states[id]);
  }

  protected override willUpdate(): void {
    if (this.hass && this._config?.show_hourly_as_main && this._config.forecast_entities[0]) {
      this._ensureMainActualHourly();
    }
  }

  // ── Popup ─────────────────────────────────────────────────────────────────

  private readonly _openPopup = (row: ForecastRow): void => {
    clearTimeout(this._closeTimer);

    // Re-read the entity state fresh at click time so we always get the latest hours
    const freshState = row.entityId ? this.hass?.states[row.entityId] : undefined;
    const freshHours = readHoursAttr(this._config?.integration_type, freshState);

    // Log which entity is being used and what the hours attribute looks like
    const hoursType = freshHours === undefined ? "missing"
                    : freshHours === null       ? "null"
                    : Array.isArray(freshHours) ? `array[${(freshHours as unknown[]).length}]`
                    : `${typeof freshHours}`;
    console.debug(
      "[solar-forecast-card] popup →",
      row.entityId || "(no entity)",
      "| state:", freshState?.state ?? "n/a",
      "| hours:", hoursType
    );

    this._popup = { ...row, rawHoursAttr: freshHours ?? row.rawHoursAttr };
    this._popupVisible = false;

    // Fetch per-hour actual-generation history for today's popup.
    // Reset to null first so the popup renders forecast-only until the fetch
    // completes, then re-renders cleanly when the Map arrives.
    this._popupActualHourly = null;
    if (row.isToday && this._config?.today_actual_entity) {
      fetchActualHourly(this.hass, this._config.today_actual_entity).then((map) => {
        // Only apply if the popup is still open (user may have closed it while fetching)
        if (this._popup) this._popupActualHourly = map;
      });
    }

    // Single rAF lets Lit stamp the overlay into the DOM before we add .visible
    requestAnimationFrame(() => { this._popupVisible = true; });
  };

  private readonly _closePopup = (): void => {
    this._popupVisible = false;
    this._popupActualHourly = null;
    this._closeTimer = setTimeout(() => { this._popup = null; }, POPUP_CLOSE_MS);
  };

  // ── Main-card hourly data ─────────────────────────────────────────────────

  private _resetMainActual(): void {
    this._mainActualFetchKey = undefined;
    this._mainActualDataScope = undefined;
    this._mainActualRefreshInFlight = false;
    this._mainActualNextRefreshAt = 0;
    this._mainActualHourly = null;
  }

  private _ensureMainActualHourly(): void {
    const entityId = this._config?.today_actual_entity;
    if (!entityId) {
      this._resetMainActual();
      return;
    }

    const todayKey = new Date().toDateString();
    const scopeKey = `${entityId}|${todayKey}`;
    if (this._mainActualDataScope !== scopeKey) {
      this._resetMainActual();
      this._mainActualDataScope = scopeKey;
    }

    const refreshKey = `${scopeKey}|${new Date().getHours()}`;
    const now = Date.now();
    const hasActualData = this._mainActualHourly instanceof Map;
    if (
      this._mainActualRefreshInFlight ||
      (hasActualData && this._mainActualFetchKey === refreshKey && now < this._mainActualNextRefreshAt)
    ) {
      return;
    }

    this._mainActualFetchKey = refreshKey;
    this._mainActualRefreshInFlight = true;
    fetchActualHourly(this.hass, entityId).then((map) => {
      if (
        this._mainActualFetchKey === refreshKey &&
        this._mainActualDataScope === scopeKey &&
        this._config?.show_hourly_as_main
      ) {
        // Keep the last known non-empty dataset visible if HA briefly returns an
        // empty history response during a refresh. This prevents the inline
        // hourly Actual column from disappearing on frequent sensor updates.
        const hasExistingData = this._mainActualHourly instanceof Map && this._mainActualHourly.size > 0;
        if (map.size > 0 || !hasExistingData) {
          this._mainActualHourly = map;
        }
        this._mainActualNextRefreshAt = Date.now() + MAIN_ACTUAL_REFRESH_MS;
      }
    }).finally(() => {
      if (this._mainActualFetchKey === refreshKey && this._mainActualDataScope === scopeKey) {
        this._mainActualRefreshInFlight = false;
      }
    });
  }

  // ── Render ────────────────────────────────────────────────────────────────

  protected override render() {
    if (!this._config) return nothing;

    const cfg = this._config;
    const fmt = new Formatter(this.hass);
    const header = cfg.show_header ? renderHeader(this.hass, cfg, fmt) : nothing;
    const rows = this.hass ? buildRows(this.hass, cfg) : [];

    if (cfg.show_hourly_as_main) {
      return html`
        <ha-card part="card">
          ${header}
          ${renderMainHourly(cfg, rows[0], this._mainActualHourly, fmt)}
        </ha-card>
      `;
    }

    if (!cfg.forecast_entities.some(Boolean)) {
      return html`
        <ha-card part="card">
          ${header}
          <div class="placeholder">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            <p>${fmt.t("card.placeholder")}<br />${fmt.t("card.placeholderAction")}</p>
          </div>
        </ha-card>
      `;
    }

    const validRows = rows.filter((r) => r.entityId);
    const isTwoDay  = cfg.integration_type === "forecast_solar" && validRows.length <= 2;
    const displayRows = isTwoDay ? validRows : rows;

    return html`
      <ha-card part="card">
        ${header}
        <div class="forecast-grid ${isTwoDay ? "two-day" : ""}">
          ${displayRows.map((row) =>
            renderDayColumn(row, forecastTier(this.hass, cfg, row.forecastKwh), fmt, this._openPopup)
          )}
        </div>
        ${isTwoDay ? html`<div class="two-day-note">${fmt.t("card.twoDayNote")}</div>` : nothing}
      </ha-card>
      ${this._popup ? renderPopup(cfg, {
        row: this._popup,
        visible: this._popupVisible,
        actualHourly: this._popupActualHourly,
        onClose: this._closePopup,
      }, fmt) : nothing}
    `;
  }
}
