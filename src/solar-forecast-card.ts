import { LitElement, html, css, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { SolarForecastCardConfig, HomeAssistant } from "./types.js";
import { normalizeConfig } from "./solar-forecast-card-editor.js";

// Side-effect import: registers <solar-forecast-card-editor>
import "./solar-forecast-card-editor.js";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const COMPLETE_THRESHOLD = 0.9;
const POPUP_CLOSE_MS = 260;

interface ForecastRow {
  date: Date;
  isToday: boolean;
  entityId: string;
  forecastKwh: number | null;
  actualKwh: number | null;  // today only
  /** Populated when actual_arrays configured; null otherwise. Heights use flex proportions. */
  actualArrays: Array<{ label: string; kwh: number }> | null;
  rawHoursAttr: unknown;     // raw "hours" attribute — parsed lazily
  forecastPct: number;       // 0–100, relative to week max
  actualPct: number;         // 0–100, capped at forecastPct
  dottedPct: number;         // forecastPct - actualPct
  isComplete: boolean;       // actual ≥ 90% of forecast
}

interface HourPoint {
  hour: number;
  kwh: number;
}

@customElement("solar-forecast-card")
export class SolarForecastCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: SolarForecastCardConfig;

  /** Currently open popup row (null = closed). */
  @state() private _popup: ForecastRow | null = null;
  /** True once the popup is in-DOM and should animate in. */
  @state() private _popupVisible = false;

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
      date_format: "DD/MM",
      show_header: true,
    };
  }

  public setConfig(config: Partial<SolarForecastCardConfig>): void {
    if (!config) throw new Error("Invalid configuration");
    this._config = normalizeConfig(config);
  }

  public getCardSize(): number {
    return 4;
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
    if (changedProps.has("_config") || changedProps.has("_popup") || changedProps.has("_popupVisible")) return true;
    if (!this._config || !this.hass) return false;

    const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
    if (!oldHass) return true;

    const watchIds = [
      ...this._config.forecast_entities,
      this._config.live_power_entity,
      this._config.today_actual_entity,
      ...(this._config.actual_arrays?.map((a) => a.entity) ?? []),
    ].filter(Boolean) as string[];

    return watchIds.some((id) => oldHass.states[id] !== this.hass!.states[id]);
  }

  // ── Data ─────────────────────────────────────────────────────────────────

  private _buildRows(): ForecastRow[] {
    if (!this._config || !this.hass) return [];

    const cfg = this._config;
    const today = new Date();

    let todayActualKwh: number | null = null;
    if (cfg.today_actual_entity) {
      const actualState = this.hass.states[cfg.today_actual_entity];
      const actualRaw  = parseFloat(actualState?.state ?? "");
      const actualUnit = (actualState?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
      const v = isFinite(actualRaw) ? (actualUnit === "wh" ? actualRaw / 1000 : actualRaw) : NaN;
      if (isFinite(v)) todayActualKwh = v;
    }

    // ── Actual arrays (manual multi-array breakdown) ──────────────────────────
    // Arrays are an optional visual enhancement layer. When configured:
    //   - Each array entity is read and Wh-normalised to kWh.
    //   - If the sum of all arrays is > 0, it becomes the canonical actualKwh
    //     (used for bar height, dotted-remainder, and isComplete).
    //   - If the sum is 0 (pre-sunrise, all entities unavailable, incomplete
    //     config, etc.), todayActualKwh is left unchanged so it retains the
    //     today_actual_entity value already read above — graceful fallback.
    //
    // The header (_renderLive) always reads today_actual_entity independently
    // and is never affected by this block.
    let todayArrayEntries: Array<{ label: string; kwh: number }> | null = null;
    if ((cfg.actual_arrays?.length ?? 0) > 0) {
      todayArrayEntries = cfg.actual_arrays!.map((a) => {
        const st   = a.entity ? this.hass!.states[a.entity] : undefined;
        const raw  = parseFloat(st?.state ?? "");
        const unit = (st?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
        const kwh  = isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : 0;
        return { label: a.label || "?", kwh };
      });

      const sumKwh = todayArrayEntries.reduce((s, e) => s + e.kwh, 0);
      if (sumKwh > 0) {
        // Arrays have live data — their sum is the canonical actual total.
        todayActualKwh = sumKwh;
      }
      // sumKwh === 0: all arrays are producing nothing or unavailable.
      // todayActualKwh is intentionally left as-is (today_actual_entity fallback).
    }

    type Raw = Omit<ForecastRow, "forecastPct" | "actualPct" | "dottedPct" | "isComplete">;

    const raw: Raw[] = cfg.forecast_entities.map((entityId, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const s      = entityId ? this.hass!.states[entityId] : undefined;
      const kwhVal = parseFloat(s?.state ?? "");

      return {
        date,
        isToday: i === 0,
        entityId,
        forecastKwh: isFinite(kwhVal) ? kwhVal : null,
        actualKwh: i === 0 ? todayActualKwh : null,
        actualArrays: i === 0 ? (todayArrayEntries ?? null) : null,
        rawHoursAttr: cfg.integration_type === "solcast"
          ? s?.attributes?.detailedForecast
          : cfg.integration_type === "volcast"
            ? s?.attributes?.hours
            : cfg.integration_type === "forecast_solar"
              ? undefined
              : cfg.integration_type === "open_meteo_solar_forecast"
                ? s?.attributes?.wh_period
                : s?.attributes?.hours ?? s?.attributes?.detailedForecast,
      };
    });

    const maxKwh = Math.max(...raw.map((r) => r.forecastKwh ?? 0), 0.001);

    return raw.map((r): ForecastRow => {
      const forecastPct = r.forecastKwh !== null
        ? Math.round((r.forecastKwh / maxKwh) * 100) : 0;
      const rawActualPct = r.actualKwh !== null
        ? Math.round((r.actualKwh / maxKwh) * 100) : 0;
      const actualPct = Math.min(rawActualPct, forecastPct);
      const dottedPct = forecastPct - actualPct;
      const isComplete = r.isToday
        && r.forecastKwh !== null && r.forecastKwh > 0
        && r.actualKwh !== null
        && r.actualKwh / r.forecastKwh >= COMPLETE_THRESHOLD;

      return { ...r, forecastPct, actualPct, dottedPct, isComplete };
    });
  }

  /**
   * Parse the raw hourly attribute into trimmed [{hour, kwh}] points.
   *
   * @param hint  integration_type from config — skips format detection when known.
   *
   * Handles four formats:
   *   1. Solcast detailedForecast  – [{period_start: ISO, pv_estimate: kW}, …]
   *                                  30-min periods, aggregated into hourly kWh
   *   2. Array of numbers          – index is the hour
   *   3. Array of objects          – looks for common value-key names
   *   4. Plain object keyed by hour – {"6": 0.5, "7": 1.2, …}
   */
  private _parseHours(
    raw: unknown,
    hint?: "volcast" | "solcast" | "forecast_solar" | "open_meteo_solar_forecast" | "manual"
  ): HourPoint[] {
    // ── Always log the raw value so callers can verify the format ────────────
    console.debug(
      "[solar-forecast-card] hours attr →",
      raw === undefined ? "undefined" :
      raw === null      ? "null" :
      Array.isArray(raw)
        ? `array[${(raw as unknown[]).length}] first=${JSON.stringify((raw as unknown[])[0])}`
        : `${typeof raw} ${JSON.stringify(raw).slice(0, 120)}`
    );

    if (raw === null || raw === undefined) return [];

    // ── Open-Meteo: dispatch before generic format detection ─────────────────
    if (hint === "open_meteo_solar_forecast") {
      if (typeof raw !== "object" || Array.isArray(raw)) {
        console.debug("[solar-forecast-card] hours: Open-Meteo wh_period is not a plain object");
        return [];
      }
      console.debug("[solar-forecast-card] hours: Open-Meteo wh_period format");
      return this._parseOpenMeteoWhPeriod(raw as Record<string, unknown>);
    }

    try {
      let points: HourPoint[];

      if (Array.isArray(raw)) {
        if (raw.length === 0) {
          console.debug("[solar-forecast-card] hours: empty array");
          return [];
        }

        // ── Format 1: Solcast detailedForecast ────────────────────────────
        // When hint is "solcast", skip detection and parse directly.
        // Otherwise detect by inspecting the first element.
        const isSolcast = hint === "solcast" ||
          (hint !== "volcast" &&
            typeof (raw[0] as Record<string, unknown>)?.period_start === "string" &&
            "pv_estimate" in (raw[0] as Record<string, unknown>));

        if (isSolcast) {
          console.debug("[solar-forecast-card] hours: Solcast detailedForecast format");
          points = this._parseSolcastPeriods(raw as Array<Record<string, unknown>>);
        } else {

        // ── Format 2 & 3: generic array ───────────────────────────────────
        points = raw.map((v, i): HourPoint => {
          // 1 — bare number, index = hour
          if (typeof v === "number") {
            return { hour: i, kwh: isFinite(v) ? v : 0 };
          }

          // 2 — object with hour + value fields
          if (typeof v === "object" && v !== null) {
            const obj = v as Record<string, unknown>;

            // Resolve hour index — try "hour", "time", "h" keys
            const rawH = obj.hour ?? obj.time ?? obj.h;
            const hour = typeof rawH === "number" ? rawH
                       : typeof rawH === "string" ? parseInt(rawH, 10)
                       : i;

            // Resolve value — try all known key names in priority order
            const rawV =
              obj.value       ?? obj.energy   ?? obj.kwh  ??
              obj.wh          ?? obj.power_kw  ?? obj.pv_estimate ??
              obj.forecast    ?? obj.solar     ?? 0;
            const kwh = typeof rawV === "number" ? rawV
                      : typeof rawV === "string" ? parseFloat(rawV)
                      : 0;

            return {
              hour: isFinite(hour) ? hour : i,
              kwh:  isFinite(kwh)  ? kwh  : 0,
            };
          }

          return { hour: i, kwh: 0 };
        });
        } // close else (non-Solcast array)

      // ── Format 3: plain object keyed by hour ────────────────────────────
      } else if (typeof raw === "object") {
        const entries = Object.entries(raw as Record<string, unknown>);
        if (entries.length === 0) {
          console.debug("[solar-forecast-card] hours: empty object");
          return [];
        }

        points = entries
          .map(([k, v]): HourPoint => {
            const hour = parseInt(k, 10);
            const kwh  = typeof v === "number" ? v
                       : typeof v === "string"  ? parseFloat(v)
                       : 0;
            return {
              hour: isFinite(hour) ? hour : 0,
              kwh:  isFinite(kwh)  ? kwh  : 0,
            };
          })
          .sort((a, b) => a.hour - b.hour);

      } else {
        console.warn("[solar-forecast-card] hours: unrecognised type:", typeof raw);
        return [];
      }

      // ── Trim leading / trailing zeros ────────────────────────────────────
      let first = -1, last = -1;
      for (let i = 0; i < points.length; i++) {
        if (points[i].kwh > 0) { if (first === -1) first = i; last = i; }
      }

      if (first === -1) {
        console.debug("[solar-forecast-card] hours: attribute present but all values are zero");
        return [];
      }

      const trimmed = points.slice(first, last + 1);
      console.debug(
        `[solar-forecast-card] hours: ${trimmed.length} points,`,
        `${trimmed[0].hour}:00 → ${trimmed[trimmed.length - 1].hour}:00,`,
        `peak ${Math.max(...trimmed.map((p) => p.kwh)).toFixed(3)} kWh`
      );
      return trimmed;

    } catch (err) {
      console.error("[solar-forecast-card] hours: parse failed →", err, "\nraw value:", raw);
      return [];
    }
  }

  private _parseSolcastPeriods(entries: Array<Record<string, unknown>>): HourPoint[] {
    const buckets = new Map<number, number>();
    for (const entry of entries) {
      const periodStart = entry.period_start;
      if (typeof periodStart !== "string") continue;
      const d = new Date(periodStart);
      if (isNaN(d.getTime())) continue;
      const hour     = d.getHours();
      const estimate = typeof entry.pv_estimate === "number" ? entry.pv_estimate : 0;
      const kwh      = estimate * 0.5; // 30-min period in kW → kWh
      buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
    }
    return Array.from(buckets.entries())
      .map(([hour, kwh]) => ({ hour, kwh }))
      .sort((a, b) => a.hour - b.hour);
  }

  /**
   * Parse Open-Meteo's `wh_period` attribute into HourPoint[].
   *
   * The attribute is a plain object keyed by ISO datetime strings
   * (e.g. "2024-04-22T06:00:00") with numeric Wh energy values for each
   * period. Multiple sub-hourly periods with the same hour are summed.
   * Values are converted from Wh to kWh.
   */
  private _parseOpenMeteoWhPeriod(raw: Record<string, unknown>): HourPoint[] {
    const buckets = new Map<number, number>();

    for (const [isoKey, val] of Object.entries(raw)) {
      // Extract the hour directly from the ISO string (the T-portion is the
      // local hour in HA's timezone). Using new Date().getHours() would shift
      // the hour to the browser's local timezone, which may differ from HA's.
      const hourMatch = isoKey.match(/T(\d{2}):/);
      if (!hourMatch) continue;
      const hour = parseInt(hourMatch[1], 10);
      if (!isFinite(hour) || hour < 0 || hour > 23) continue;

      const wh = typeof val === "number" ? val
               : typeof val === "string"  ? parseFloat(val)
               : NaN;
      if (!isFinite(wh)) continue;

      buckets.set(hour, (buckets.get(hour) ?? 0) + wh / 1000); // Wh → kWh
    }

    return Array.from(buckets.entries())
      .map(([hour, kwh]) => ({ hour, kwh }))
      .sort((a, b) => a.hour - b.hour);
  }

  // ── Colour tier ──────────────────────────────────────────────────────────

  private _tier(kwh: number | null): "low" | "average" | "high" {
    if (kwh === null) return "average";
    const lo = this._config?.low_threshold;
    const hi = this._config?.high_threshold;
    if (lo !== undefined && kwh < lo) return "low";
    if (hi !== undefined && kwh > hi) return "high";
    return "average";
  }

  // ── Popup ─────────────────────────────────────────────────────────────────

  private _openPopup(row: ForecastRow): void {
    clearTimeout(this._closeTimer);

    // Re-read the entity state fresh at click time so we always get the latest hours
    const freshState = row.entityId ? this.hass?.states[row.entityId] : undefined;
    const intType = this._config?.integration_type;
    const freshHours = intType === "solcast"
      ? freshState?.attributes?.detailedForecast
      : intType === "volcast"
        ? freshState?.attributes?.hours
        : intType === "forecast_solar"
          ? undefined
          : intType === "open_meteo_solar_forecast"
            ? freshState?.attributes?.wh_period
            : freshState?.attributes?.hours ?? freshState?.attributes?.detailedForecast;

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
    // Single rAF lets Lit stamp the overlay into the DOM before we add .visible
    requestAnimationFrame(() => { this._popupVisible = true; });
  }

  private _closePopup(): void {
    this._popupVisible = false;
    this._closeTimer = setTimeout(() => { this._popup = null; }, POPUP_CLOSE_MS);
  }

  // ── Formatting ────────────────────────────────────────────────────────────

  private _dayLabel(date: Date, isToday: boolean): string {
    return isToday ? "Today" : DAY_NAMES[date.getDay()];
  }

  private _dateLabel(date: Date): string {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    return this._config!.date_format === "MM/DD" ? `${m}/${d}` : `${d}/${m}`;
  }

  private _fullDateLabel(date: Date, isToday: boolean): string {
    const weekday = isToday ? "Today" : date.toLocaleDateString(undefined, { weekday: "long" });
    const dt = date.toLocaleDateString(undefined, { day: "numeric", month: "long" });
    return `${weekday} · ${dt}`;
  }

  private _hourLabel(hour: number): string {
    if (this._config?.time_format === "12h") {
      const period = hour < 12 ? "am" : "pm";
      const h = hour % 12 || 12;   // 0 → 12, 13 → 1, etc.
      return `${h}${period}`;
    }
    return String(hour).padStart(2, "0") + ":00";
  }

  // ── Styles ────────────────────────────────────────────────────────────────

  static override get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px 12px 14px;
        overflow: hidden;
        box-sizing: border-box;
      }

      /* ── Header ──────────────────────────────────────────── */

      .card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
        padding: 0 4px;
      }

      .header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--primary-text-color);
        flex: 1;
        min-width: 0;
        flex-wrap: wrap;
      }

      .header-title ha-icon {
        color: var(--state-active-color, #fbbf24);
        flex-shrink: 0;
      }

      .header-live {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        padding-top: 3px;
        white-space: nowrap;
      }

      .live-row {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.75rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
      }

      .live-label {
        font-weight: 700;
        color: var(--state-active-color, #fbbf24);
      }

      .live-week {
        font-size: 0.68rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        opacity: 0.72;
      }

      .week-label {
        font-weight: 600;
      }

      /* ── Placeholder ─────────────────────────────────────── */

      .placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 0;
        gap: 10px;
        color: var(--secondary-text-color);
        text-align: center;
      }

      .placeholder ha-icon {
        --mdc-icon-size: 40px;
        color: var(--state-active-color, #fbbf24);
        opacity: 0.65;
      }

      .placeholder p {
        margin: 0;
        font-size: 0.88rem;
        line-height: 1.5;
      }

      /* ── 7-column grid ───────────────────────────────────── */

      .forecast-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        min-width: 0;
      }

      /* ── 2-column grid (forecast.solar) ──────────────────── */

      .forecast-grid.two-day {
        grid-template-columns: repeat(2, minmax(0, 140px));
        justify-content: center;
        gap: 8px;
      }

      .forecast-grid.two-day .bar-bg,
      .forecast-grid.two-day .bar-forecast,
      .forecast-grid.two-day .bar-actual,
      .forecast-grid.two-day .bar-dotted {
        width: min(72px, 72%);
      }

      .two-day-note {
        text-align: center;
        font-size: 0.65rem;
        color: var(--secondary-text-color);
        opacity: 0.45;
        margin-top: 10px;
        padding: 0 4px 2px;
      }

      /* ── Column ──────────────────────────────────────────── */

      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 3px 5px;
        border-radius: 12px;
        gap: 3px;
        min-width: 0;
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: background 0.2s ease, transform 0.1s ease;
        outline: none;
      }

      .col:hover {
        background: rgba(251, 191, 36, 0.08);
      }

      .col:active {
        transform: scale(0.94);
      }

      .col.today {
        background: rgba(251, 191, 36, 0.10);
      }

      .col.today:hover {
        background: rgba(251, 191, 36, 0.16);
      }

      /* ── Value label ─────────────────────────────────────── */

      .col-value {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        min-height: 30px;
        width: 100%;
        text-align: center;
        pointer-events: none;
      }

      .value-num {
        font-size: 0.75rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        color: var(--primary-text-color);
        line-height: 1.15;
        white-space: nowrap;
      }

      .value-unit {
        font-size: 0.60rem;
        color: var(--secondary-text-color);
        line-height: 1.2;
      }

      .value-empty {
        font-size: 0.78rem;
        color: var(--secondary-text-color);
        opacity: 0.4;
        line-height: 30px;
      }

      /* ── Bar area ────────────────────────────────────────── */

      .col-bar-wrap {
        position: relative;
        width: 100%;
        height: clamp(100px, 20vw, 160px);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        pointer-events: none;
      }

      .bar-bg {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(24px, 72%);
        height: 100%;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.07));
      }

      .bar-forecast,
      .bar-actual,
      .bar-dotted {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(24px, 72%);
        transition:
          height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1),
          bottom 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
      }

      /* ── Forecast bar — average (default, yellow/amber) ──────── */

      .bar-forecast {
        border-radius: 6px 6px 3px 3px;
        background: linear-gradient(
          to top,
          rgba(245, 158, 11, 0.92),
          rgba(254, 215, 86, 0.78)
        );
        box-shadow:
          0 0 0 1px rgba(251, 191, 36, 0.15),
          0 2px 10px 0 rgba(245, 158, 11, 0.28),
          0 0 16px 2px rgba(251, 191, 36, 0.18);
      }

      .bar-forecast.complete {
        background: linear-gradient(
          to top,
          rgba(245, 158, 11, 0.98),
          rgba(254, 215, 86, 0.88)
        );
        box-shadow:
          0 0 0 1px rgba(251, 191, 36, 0.25),
          0 2px 12px 0 rgba(245, 158, 11, 0.42),
          0 0 22px 4px rgba(251, 191, 36, 0.28);
      }

      /* ── Forecast bar — low (soft coral/rose) ────────────────── */

      .bar-forecast.low {
        background: linear-gradient(
          to top,
          rgba(220, 80, 80, 0.88),
          rgba(252, 160, 155, 0.74)
        );
        box-shadow:
          0 0 0 1px rgba(239, 68, 68, 0.14),
          0 2px 10px 0 rgba(220, 80, 80, 0.24),
          0 0 16px 2px rgba(239, 68, 68, 0.15);
      }

      .bar-forecast.complete.low {
        background: linear-gradient(
          to top,
          rgba(220, 80, 80, 0.98),
          rgba(252, 160, 155, 0.88)
        );
        box-shadow:
          0 0 0 1px rgba(239, 68, 68, 0.25),
          0 2px 12px 0 rgba(220, 80, 80, 0.40),
          0 0 22px 4px rgba(239, 68, 68, 0.26);
      }

      /* ── Forecast bar — high (green) ─────────────────────────── */

      .bar-forecast.high {
        background: linear-gradient(
          to top,
          rgba(22, 163, 74, 0.92),
          rgba(74, 222, 128, 0.78)
        );
        box-shadow:
          0 0 0 1px rgba(34, 197, 94, 0.15),
          0 2px 10px 0 rgba(22, 163, 74, 0.28),
          0 0 16px 2px rgba(34, 197, 94, 0.18);
      }

      .bar-forecast.complete.high {
        background: linear-gradient(
          to top,
          rgba(22, 163, 74, 0.98),
          rgba(74, 222, 128, 0.90)
        );
        box-shadow:
          0 0 0 1px rgba(34, 197, 94, 0.25),
          0 2px 12px 0 rgba(22, 163, 74, 0.42),
          0 0 22px 4px rgba(34, 197, 94, 0.28);
      }

      /* ── Actual generation bar — purple ──────────────────────── */

      .bar-actual {
        border-radius: 6px 6px 3px 3px;
        background: linear-gradient(
          to top,
          rgba(124, 58, 237, 0.90),
          rgba(196, 136, 255, 0.76)
        );
        box-shadow:
          0 0 0 1px rgba(139, 92, 246, 0.15),
          0 2px 10px 0 rgba(124, 58, 237, 0.28),
          0 0 16px 2px rgba(139, 92, 246, 0.18);
      }

      .bar-actual.below-dotted {
        border-radius: 0 0 3px 3px;
      }

      /* ── Stacked actual-arrays bar ───────────────────────────── */

      .bar-arrays-stack {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50% 0;
        width: min(24px, 72%);
        display: flex;
        flex-direction: column-reverse; /* first array sits at the bottom */
        border-radius: 6px 6px 3px 3px;
        overflow: hidden;
        transition:
          height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
      }

      .forecast-grid.two-day .bar-arrays-stack {
        width: min(72px, 72%);
      }

      .bar-array-segment {
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .array-label {
        font-size: 0.5rem;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.90);
        line-height: 1;
        pointer-events: none;
        user-select: none;
      }

      /*
       * Segment colour palette — 8 slots, cycles every 8 arrays.
       *
       * Base group (indices 0–3):
       *   0  purple      primary actual colour, matches existing bar-actual
       *   1  teal        cool green-blue
       *   2  indigo      deep blue-purple
       *   3  slate-blue  muted steel blue
       *
       * Extended group (indices 4–7) — lighter / shifted variations:
       *   4  violet      lighter purple
       *   5  emerald     deeper teal
       *   6  periwinkle  lighter indigo
       *   7  steel       darker slate
       */
      .seg-color-0 {
        background: linear-gradient(
          to top, rgba(124, 58, 237, 0.90), rgba(196, 136, 255, 0.76)
        );
      }
      .seg-color-1 {
        background: linear-gradient(
          to top, rgba(13, 148, 136, 0.90), rgba(45, 212, 191, 0.76)
        );
      }
      .seg-color-2 {
        background: linear-gradient(
          to top, rgba(79, 70, 229, 0.90), rgba(129, 140, 248, 0.76)
        );
      }
      .seg-color-3 {
        background: linear-gradient(
          to top, rgba(71, 107, 167, 0.90), rgba(119, 159, 207, 0.76)
        );
      }
      .seg-color-4 {
        background: linear-gradient(
          to top, rgba(139, 92, 246, 0.90), rgba(196, 180, 254, 0.76)
        );
      }
      .seg-color-5 {
        background: linear-gradient(
          to top, rgba(4, 120, 87, 0.90), rgba(52, 211, 153, 0.76)
        );
      }
      .seg-color-6 {
        background: linear-gradient(
          to top, rgba(99, 102, 241, 0.90), rgba(165, 180, 252, 0.76)
        );
      }
      .seg-color-7 {
        background: linear-gradient(
          to top, rgba(71, 85, 105, 0.90), rgba(100, 116, 139, 0.76)
        );
      }

      /* ── Dotted forecast remainder — tier-aware ──────────────── */

      .bar-dotted {
        border: 2px dashed rgba(245, 158, 11, 0.65);
        background: rgba(251, 191, 36, 0.07);
        box-sizing: border-box;
      }

      .bar-dotted.low {
        border-color: rgba(239, 68, 68, 0.58);
        background: rgba(239, 68, 68, 0.06);
      }

      .bar-dotted.high {
        border-color: rgba(34, 197, 94, 0.58);
        background: rgba(34, 197, 94, 0.06);
      }

      .bar-dotted.full    { border-radius: 6px; }
      .bar-dotted.partial { border-bottom: none; border-radius: 6px 6px 0 0; }

      /* ── Day label ───────────────────────────────────────── */

      .col-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
        text-align: center;
        width: 100%;
        min-width: 0;
        pointer-events: none;
      }

      .day-name {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.25;
        white-space: nowrap;
      }

      .col.today .day-name {
        font-weight: 700;
        color: var(--warning-color, #f59e0b);
      }

      .day-date {
        font-size: 0.65rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        line-height: 1.25;
        white-space: nowrap;
      }

      /* ════════════════════════════════════════════════════════
         POPUP
         ════════════════════════════════════════════════════════ */

      .popup-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.42);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        box-sizing: border-box;
        /* enter / exit */
        opacity: 0;
        pointer-events: none;
        transition: opacity ${POPUP_CLOSE_MS}ms ease;
      }

      .popup-overlay.visible {
        opacity: 1;
        pointer-events: auto;
      }

      /* ── Panel ───────────────────────────────────────────── */

      .popup-panel {
        position: relative;
        background: var(--ha-card-background, var(--card-background-color, #1c1c1e));
        border-radius: 20px;
        width: 100%;
        max-width: 400px;
        max-height: min(520px, calc(100dvh - 32px));
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow:
          0 32px 72px rgba(0, 0, 0, 0.32),
          0 8px 24px rgba(0, 0, 0, 0.18);
        /* enter: slide up + scale in */
        transform: translateY(32px) scale(0.95);
        opacity: 0;
        transition:
          transform ${POPUP_CLOSE_MS + 40}ms cubic-bezier(0.34, 1.28, 0.64, 1),
          opacity ${POPUP_CLOSE_MS}ms ease;
        will-change: transform, opacity;
      }

      .popup-overlay.visible .popup-panel {
        transform: translateY(0) scale(1);
        opacity: 1;
      }

      /* ── Header ──────────────────────────────────────────── */

      .popup-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 18px 16px 14px 20px;
        gap: 8px;
        border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
        flex-shrink: 0;
      }

      .popup-title {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
      }

      .popup-day-name {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--primary-text-color);
        line-height: 1.2;
      }

      .popup-subtitle {
        font-size: 0.82rem;
        color: var(--secondary-text-color);
        display: flex;
        align-items: baseline;
        gap: 4px;
        flex-wrap: wrap;
      }

      .popup-total-kwh {
        font-size: 0.95rem;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        color: var(--warning-color, #f59e0b);
      }

      .popup-close {
        flex-shrink: 0;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.10));
        border: none;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s, color 0.15s;
        margin-top: -2px;
      }

      .popup-close:hover {
        background: var(--divider-color, rgba(128, 128, 128, 0.18));
        color: var(--primary-text-color);
      }

      .popup-close ha-icon {
        --mdc-icon-size: 18px;
      }

      /* ── Chart ───────────────────────────────────────────── */

      .chart-scroll {
        overflow-y: auto;
        overflow-x: hidden;
        padding: 14px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        /* Custom scrollbar — subtle */
        scrollbar-width: thin;
        scrollbar-color: rgba(128, 128, 128, 0.25) transparent;
      }

      .chart-scroll::-webkit-scrollbar { width: 4px; }
      .chart-scroll::-webkit-scrollbar-thumb {
        background: rgba(128, 128, 128, 0.25);
        border-radius: 2px;
      }

      .chart-no-data {
        text-align: center;
        padding: 32px 0;
        color: var(--secondary-text-color);
        font-size: 0.88rem;
        line-height: 1.5;
      }

      /* Grid: [hour label] [bar track] [value] */
      .chart-header,
      .chart-row {
        display: grid;
        grid-template-columns: 2.8rem 1fr 2.6rem;
        gap: 8px;
      }

      .chart-header {
        align-items: center;
        padding-bottom: 6px;
        margin-bottom: 2px;
        border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
      }

      .chart-header span {
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
        opacity: 0.7;
      }

      .chart-header .col-time  { text-align: right; }
      .chart-header .col-power { text-align: left; padding-left: 0; }
      .chart-header .col-kwh   { text-align: left; }

      .chart-row {
        align-items: center;
        height: 24px;
      }

      .chart-hour {
        font-size: 0.70rem;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        text-align: right;
        line-height: 1;
        opacity: 0.75;
      }

      .chart-bar-track {
        position: relative;
        height: 9px;
        border-radius: 5px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.08));
        overflow: hidden;
      }

      .chart-bar-fill {
        position: absolute;
        inset: 0 auto 0 0;
        border-radius: 5px;
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 0.88),
          rgba(254, 215, 86, 0.76)
        );
        /* Bars animate in staggered via --delay set inline */
        animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
        animation-delay: var(--delay, 0ms);
      }

      .chart-bar-fill.peak {
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 1.0),
          rgba(254, 215, 86, 0.92)
        );
        box-shadow: 0 0 7px 1px rgba(245, 158, 11, 0.38);
      }

      @keyframes bar-in {
        from { width: 0 !important; }
      }

      .chart-val {
        font-size: 0.70rem;
        font-weight: 500;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        line-height: 1;
        text-align: left;
      }

      .chart-val.peak {
        color: var(--warning-color, #f59e0b);
        font-weight: 600;
      }
    `;
  }

  // ── Render ────────────────────────────────────────────────────────────────

  protected override render() {
    if (!this._config) return nothing;

    const title = this._config.title ?? "Solar Forecast";
    const icon  = this._config.icon  ?? "mdi:solar-power";
    const hasEntities = this._config.forecast_entities.some(Boolean);

    const header = this._config.show_header ? html`
      <div class="card-header">
        <div class="header-title">
          <ha-icon icon=${icon}></ha-icon>
          ${title}
        </div>
        ${this._renderLive()}
      </div>
    ` : nothing;

    if (!hasEntities) {
      return html`
        <ha-card>
          ${header}
          <div class="placeholder">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            <p>No forecast entities configured.<br />Open the card editor to get started.</p>
          </div>
        </ha-card>
      `;
    }

    const rows = this._buildRows();
    const validRows = rows.filter((r) => r.entityId);
    const isTwoDay  = this._config.integration_type === "forecast_solar" && validRows.length <= 2;
    const displayRows = isTwoDay ? validRows : rows;

    return html`
      <ha-card>
        ${header}
        <div class="forecast-grid ${isTwoDay ? "two-day" : ""}">
          ${displayRows.map((row) => this._renderCol(row))}
        </div>
        ${isTwoDay ? html`<div class="two-day-note">2-day forecast available</div>` : nothing}
      </ha-card>
      ${this._renderPopup()}
    `;
  }

  // ── Live badge ────────────────────────────────────────────────────────────

  private _formatPower(watts: number): string {
    if (watts < 10)   return "0 W";
    if (watts < 1000) return `${Math.round(watts)} W`;
    return `${(watts / 1000).toFixed(1)} kW`;
  }

  private _renderLive() {
    const cfg = this._config!;

    // ── Live power / actual generation ────────────────────────────────────────
    const powerState = cfg.live_power_entity
      ? this.hass?.states[cfg.live_power_entity]
      : undefined;
    const powerRaw  = parseFloat(powerState?.state ?? "");
    const powerUnit = (powerState?.attributes?.unit_of_measurement as string | undefined) ?? "W";
    const powerW    = isFinite(powerRaw)
      ? (powerUnit.toLowerCase() === "kw" ? powerRaw * 1000 : powerRaw)
      : NaN;

    const actualState = cfg.today_actual_entity
      ? this.hass?.states[cfg.today_actual_entity]
      : undefined;
    const actualRawVal  = parseFloat(actualState?.state ?? "");
    const actualRawUnit = (actualState?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
    const actualKwh     = isFinite(actualRawVal)
      ? (actualRawUnit === "wh" ? actualRawVal / 1000 : actualRawVal)
      : NaN;

    const hasPower  = isFinite(powerW);
    const hasActual = isFinite(actualKwh);

    // ── Week total / daily average ────────────────────────────────────────────
    const validForecasts = cfg.forecast_entities
      .map((id) => (id ? parseFloat(this.hass?.states[id]?.state ?? "") : NaN))
      .filter((v) => isFinite(v));
    const weekTotal = validForecasts.reduce((s, v) => s + v, 0);
    const avgDay    = validForecasts.length > 0 ? weekTotal / validForecasts.length : NaN;
    const hasWeek   = validForecasts.length > 0;

    if (!hasPower && !hasActual && !hasWeek) return nothing;

    const liveParts: string[] = [];
    if (hasPower)  liveParts.push(this._formatPower(powerW));
    if (hasActual) liveParts.push(actualKwh.toFixed(1) + " kWh");

    return html`
      <div class="header-live">
        ${hasPower || hasActual ? html`
          <div class="live-row">
            <span class="live-label">LIVE:</span>
            <span>${liveParts.join(" | ")}</span>
          </div>
        ` : nothing}
        ${hasWeek ? html`
          <div class="live-week">
            <span class="week-label">WEEK:</span>
            ${weekTotal.toFixed(1)} kWh | <span class="week-label">AVG:</span> ${avgDay.toFixed(1)} kWh/day
          </div>
        ` : nothing}
      </div>
    `;
  }

  // ── Popup actual-generation subtitle ────────────────────────────────────

  /**
   * Returns the actual-generation subtitle for the popup header.
   * Only shown for today's row; format depends on whether arrays are configured.
   *
   * - No arrays:  "<X.XX> kWh generated"
   * - Arrays:     "E: 4.2 kWh | W: 3.8 kWh | Total: 8.0 kWh"
   */
  private _renderActualSubtitle(row: ForecastRow) {
    if (!row.isToday) return nothing;
    const cfg = this._config!;
    const hasArrays = (cfg.actual_arrays?.length ?? 0) > 0;

    if (hasArrays && row.actualArrays && row.actualArrays.length > 0) {
      // Per-array breakdown: label: X.X kWh for each, then total
      const sum = row.actualArrays.reduce((s, a) => s + a.kwh, 0);
      const arrayText = row.actualArrays
        .map((a) => `${a.label || "?"}: ${a.kwh.toFixed(1)} kWh`)
        .join(" | ");
      return html`
        <span class="popup-subtitle">
          ${arrayText} | <span class="popup-total-kwh">Total: ${sum.toFixed(1)} kWh</span>
        </span>
      `;
    }

    // No arrays configured — show the single total if available
    if (!hasArrays && row.actualKwh !== null) {
      return html`
        <span class="popup-subtitle">
          <span class="popup-total-kwh">${row.actualKwh.toFixed(2)}</span> kWh generated
        </span>
      `;
    }

    return nothing;
  }

  // ── Column ────────────────────────────────────────────────────────────────

  private _renderCol(row: ForecastRow) {
    const { forecastPct, actualPct, dottedPct, isComplete, isToday } = row;
    const tier = this._tier(row.forecastKwh);

    // Arrays that are currently producing (kwh > 0).
    // Used to decide stacked vs single-bar path.
    const visibleArrays = row.actualArrays?.filter((a) => a.kwh > 0) ?? [];

    // Only enter stacked mode when at least 2 arrays are producing —
    // a single active source stays on the existing single-colour bar path.
    const useStacked = visibleArrays.length >= 2;

    let bars;
    if (isToday && row.actualKwh !== null && row.forecastKwh !== null) {
      if (isComplete) {
        // Completion indicator — solid forecast bar regardless of arrays
        bars = html`<div class="bar-forecast complete ${tier}" style="height:${forecastPct}%"></div>`;

      } else if (useStacked) {
        // ── Stacked per-array segments ──────────────────────────────────────
        // Segments use flex-grow proportional to each array's kWh so they
        // automatically fill the container correctly without pixel maths.
        //
        // Label visibility: estimate the segment's pixel height from the
        // mid-range bar height (120 px ≈ clamp(100 px, 20 vw, 160 px)).
        // Only render the label when the estimated height is ≥ 16 px.
        const sumKwh    = visibleArrays.reduce((s, a) => s + a.kwh, 0);
        const stackPx   = (actualPct / 100) * 120; // estimated total stack height
        const hasDotted = dottedPct > 1;

        bars = html`
          <div class="bar-arrays-stack" style="height:${actualPct}%">
            ${visibleArrays.map((arr, i) => {
              const segPx     = sumKwh > 0 ? (arr.kwh / sumKwh) * stackPx : 0;
              const showLabel = arr.label && segPx >= 16;
              return html`
                <div class="bar-array-segment seg-color-${i % 8}" style="flex:${arr.kwh}">
                  ${showLabel ? html`<span class="array-label">${arr.label}</span>` : nothing}
                </div>
              `;
            })}
          </div>
          ${hasDotted ? html`
            <div class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
                 style="height:${dottedPct}%;bottom:${actualPct}%"></div>
          ` : nothing}
        `;

      } else {
        // ── Single-colour actual bar — default and single-source fallback ───
        const hasDotted = dottedPct > 1;
        bars = html`
          <div class="bar-actual ${hasDotted ? "below-dotted" : ""}"
               style="height:${actualPct}%"></div>
          ${hasDotted ? html`
            <div class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
                 style="height:${dottedPct}%;bottom:${actualPct}%"></div>
          ` : nothing}
        `;
      }
    } else {
      bars = html`<div class="bar-forecast ${tier}" style="height:${forecastPct}%"></div>`;
    }

    const valueLabel = row.forecastKwh !== null
      ? html`<span class="value-num">${row.forecastKwh.toFixed(1)}</span><span class="value-unit">kWh</span>`
      : html`<span class="value-empty">—</span>`;

    return html`
      <div
        class="col ${isToday ? "today" : ""}"
        role="button"
        tabindex="0"
        aria-label="${this._dayLabel(row.date, isToday)} ${this._dateLabel(row.date)}"
        @click=${() => this._openPopup(row)}
        @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && this._openPopup(row)}
      >
        <div class="col-value">${valueLabel}</div>
        <div class="col-bar-wrap">
          <div class="bar-bg"></div>
          ${bars}
        </div>
        <div class="col-label">
          <span class="day-name">${this._dayLabel(row.date, isToday)}</span>
          <span class="day-date">${this._dateLabel(row.date)}</span>
        </div>
      </div>
    `;
  }

  // ── Popup ─────────────────────────────────────────────────────────────────

  private _renderPopup() {
    if (!this._popup) return nothing;

    const row = this._popup;
    const isForecastSolar = this._config?.integration_type === "forecast_solar";

    let chartContent;
    if (isForecastSolar) {
      chartContent = html`
        <div class="chart-no-data">
          <p>The selected forecast entities do not provide hourly forecast data.</p>
        </div>
      `;
    } else {
      const points = this._parseHours(row.rawHoursAttr, this._config?.integration_type);
      const peakKwh = points.length ? Math.max(...points.map((p) => p.kwh)) : 0;

      // Determine the reference ceiling for bar scaling
      const { inverter_max_kw, solar_max_kwp } = this._config!;
      let maxRef: number;
      if (inverter_max_kw !== undefined && solar_max_kwp !== undefined) {
        maxRef = solar_max_kwp >= inverter_max_kw ? inverter_max_kw : solar_max_kwp;
      } else if (inverter_max_kw !== undefined) {
        maxRef = inverter_max_kw;
      } else if (solar_max_kwp !== undefined) {
        maxRef = solar_max_kwp;
      } else {
        maxRef = peakKwh;
      }

      chartContent = this._renderHourlyChart(points, peakKwh, maxRef);
    }

    return html`
      <div
        class="popup-overlay ${this._popupVisible ? "visible" : ""}"
        @click=${this._closePopup}
      >
        <div class="popup-panel" @click=${(e: Event) => e.stopPropagation()}>

          <div class="popup-header">
            <div class="popup-title">
              <span class="popup-day-name">
                ${this._fullDateLabel(row.date, row.isToday)}
              </span>
              <span class="popup-subtitle">
                ${row.forecastKwh !== null
                  ? html`<span class="popup-total-kwh">${row.forecastKwh.toFixed(2)}</span> kWh forecast`
                  : html`No forecast data`}
              </span>
              ${this._renderActualSubtitle(row)}
            </div>
            <button
              class="popup-close"
              aria-label="Close"
              @click=${this._closePopup}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>
          </div>

          <div class="chart-scroll">
            ${chartContent}
          </div>

        </div>
      </div>
    `;
  }

  private _renderHourlyChart(points: HourPoint[], peakKwh: number, maxRef: number) {
    if (points.length === 0) {
      return html`
        <div class="chart-no-data">
          <p>No hourly data available for this day.</p>
        </div>
      `;
    }

    return [
      html`
        <div class="chart-header">
          <span class="col-time">Time</span>
          <span class="col-power">Power</span>
          <span class="col-kwh">kWh</span>
        </div>
      `,
      ...points.map((pt, i) => {
      const pct = maxRef > 0 ? Math.min((pt.kwh / maxRef) * 100, 100) : 0;
      const isPeak = pt.kwh === peakKwh && peakKwh > 0;
      // Stagger: 20ms base + 18ms per row, capped at 300ms
      const delay = Math.min(20 + i * 18, 300);

      return html`
        <div class="chart-row">
          <span class="chart-hour">${this._hourLabel(pt.hour)}</span>
          <div class="chart-bar-track">
            <div
              class="chart-bar-fill ${isPeak ? "peak" : ""}"
              style="width:${pct.toFixed(1)}%;--delay:${delay}ms"
            ></div>
          </div>
          <span class="chart-val ${isPeak ? "peak" : ""}">
            ${pt.kwh.toFixed(2)}
          </span>
        </div>
      `;
    }),
    ];
  }
}

// ── Lovelace registration ─────────────────────────────────────────────────────

declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>;
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "solar-forecast-card",
  name: "Solar Forecast Card",
  description: "Daily solar energy forecast with hourly breakdown support.",
  preview: false,
});
