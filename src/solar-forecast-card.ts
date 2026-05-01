import { LitElement, html, css, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { SolarForecastCardConfig, HomeAssistant } from "./types.js";
import { normalizeConfig } from "./solar-forecast-card-editor.js";
import { localize, resolveLanguage } from "./localize.js";

// Side-effect import: registers <solar-forecast-card-editor>
import "./solar-forecast-card-editor.js";

const DAY_KEYS = [
  "sunday_short",
  "monday_short",
  "tuesday_short",
  "wednesday_short",
  "thursday_short",
  "friday_short",
  "saturday_short",
] as const;
const COMPLETE_THRESHOLD = 1.0;
const POPUP_CLOSE_MS = 260;

interface ForecastRow {
  dayIndex: number;
  date: Date;
  isToday: boolean;
  entityId: string;
  forecastKwh: number | null;
  actualKwh: number | null;  // today only
  /** Populated when actual_arrays configured; null otherwise. Heights use flex proportions. */
  actualArrays: Array<{ label: string; kwh: number }> | null;
  rawHoursAttr: unknown;     // raw "hours" attribute — parsed lazily
  /** Summed pv_estimate10 for the day (kWh). Null when not applicable or unavailable. */
  estimate10Kwh: number | null;
  forecastPct: number;       // 0–100, relative to week max
  actualPct: number;         // 0–100, capped at forecastPct
  dottedPct: number;         // forecastPct - actualPct
  isComplete: boolean;       // actual >= forecast
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
    this._mainActualFetchKey = undefined;
    this._mainActualHourly = null;
    // Apply the desktop text scale as a CSS custom property on the host element.
    // The static stylesheet uses calc(base * var(--dts-factor, 1)) inside a
    // @media (min-width: 768px) block so mobile sizing is never affected.
    const factor = (this._config.desktop_text_scale ?? 100) / 100;
    this.style.setProperty("--dts-factor", String(factor));
  }

  public getCardSize(): number {
    return 4;
  }

  private _language() {
    return resolveLanguage(this.hass);
  }

  private _t(key: string, vars?: Record<string, string | number>): string {
    return localize(this._language(), key, vars);
  }

  private _localeCode(): string {
    return this._language();
  }

  private _dateLocaleCode(): string {
    const localeLanguage =
      this.hass?.locale && typeof this.hass.locale === "object" && "language" in this.hass.locale
        ? this.hass.locale.language
        : undefined;

    if (typeof localeLanguage === "string" && localeLanguage.trim() !== "") {
      return localeLanguage.replace("_", "-");
    }

    if (typeof this.hass?.language === "string" && this.hass.language.trim() !== "") {
      return this.hass.language.replace("_", "-");
    }

    return "en-GB";
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
    if (resolveLanguage(oldHass) !== this._language()) return true;

    const watchIds = [
      ...this._config.forecast_entities,
      this._config.live_power_entity,
      this._config.today_actual_entity,
      this._config.next_hour_entity,
      this._config.remaining_today_entity,
      this._config.export_rate_entity,
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
    // The header (_renderLive) applies the same precedence: arrays sum when
    // configured, today_actual_entity otherwise. It reads entities directly
    // so it stays in sync without depending on this _buildRows output.
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

    const showEstimate10 =
      cfg.integration_type === "solcast" && cfg.display_estimate10;

    const raw: Raw[] = cfg.forecast_entities.map((entityId, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const s      = entityId ? this.hass!.states[entityId] : undefined;
      const kwhVal = parseFloat(s?.state ?? "");

      return {
        dayIndex: i + 1,
        date,
        isToday: i === 0,
        entityId,
        forecastKwh: isFinite(kwhVal) ? kwhVal : null,
        actualKwh: i === 0 ? todayActualKwh : null,
        actualArrays: i === 0 ? (todayArrayEntries ?? null) : null,
        estimate10Kwh: showEstimate10
          ? this._sumEstimate10(s?.attributes?.detailedForecast)
          : null,
        rawHoursAttr: cfg.integration_type === "solcast"
          // Prefer detailedForecast (standard Solcast attribute); fall back to
          // hours so manually-configured cards work with alternate attribute names.
          ? (s?.attributes?.detailedForecast ?? s?.attributes?.hours)
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
   * Handles five formats:
   *   1. Solcast detailedForecast  – [{period_start: ISO, pv_estimate: kW}, …]
   *                                  30-min periods, aggregated into hourly kWh
   *   2. Volcast hours             – array of numbers (index = clock hour for
   *                                  24-element arrays) OR array of objects with
   *                                  explicit hour/datetime fields; dispatched to
   *                                  _parseVolcastHours so clock hours are always
   *                                  resolved correctly regardless of array length
   *   3. Open-Meteo wh_period      – plain object keyed by ISO datetime → Wh
   *   4. Array of numbers          – index is the hour (generic fallback)
   *   5. Plain object keyed by hour – {"6": 0.5, "7": 1.2, …}
   */
  private _parseHours(
    raw: unknown,
    hint?: "volcast" | "solcast" | "forecast_solar" | "open_meteo_solar_forecast" | "manual",
    silent = false
  ): HourPoint[] {
    // ── Always log the raw value so callers can verify the format ────────────
    if (!silent) console.debug(
      "[solar-forecast-card] hours attr →",
      raw === undefined ? "undefined" :
      raw === null      ? "null" :
      Array.isArray(raw)
        ? `array[${(raw as unknown[]).length}] first=${JSON.stringify((raw as unknown[])[0])}`
        : `${typeof raw} ${JSON.stringify(raw).slice(0, 120)}`
    );

    if (raw === null || raw === undefined) return [];

    // ── Volcast: dispatch before generic format detection ────────────────────
    // The generic array path maps array index → clock hour, which is only
    // correct for 24-element midnight-indexed arrays. Volcast may provide a
    // shorter array (trimmed past hours removed as the day progresses) or an
    // array of objects whose time is encoded in period_start/datetime fields
    // rather than an explicit "hour" key. _parseVolcastHours handles all cases
    // by extracting the clock hour from ISO datetime fields when available,
    // falling back to array index only for bare-number 24-element arrays.
    if (hint === "volcast") {
      if (!Array.isArray(raw)) {
        if (!silent) console.debug("[solar-forecast-card] hours: Volcast hours is not an array");
        return [];
      }
      if (!silent) console.debug("[solar-forecast-card] hours: Volcast hours format");
      const pts = this._parseVolcastHours(raw as unknown[]);
      if (!silent && pts.length > 0) console.debug(
        `[solar-forecast-card] hours: ${pts.length} Volcast points,`,
        `${pts[0].hour}:00 → ${pts[pts.length - 1].hour}:00,`,
        `peak ${Math.max(...pts.map((p) => p.kwh)).toFixed(3)} kWh`
      );
      return pts;
    }

    // ── Open-Meteo: dispatch before generic format detection ─────────────────
    if (hint === "open_meteo_solar_forecast") {
      if (typeof raw !== "object" || Array.isArray(raw)) {
        if (!silent) console.debug("[solar-forecast-card] hours: Open-Meteo wh_period is not a plain object");
        return [];
      }
      if (!silent) console.debug("[solar-forecast-card] hours: Open-Meteo wh_period format");
      return this._parseOpenMeteoWhPeriod(raw as Record<string, unknown>);
    }

    try {
      let points: HourPoint[];

      if (Array.isArray(raw)) {
        if (raw.length === 0) {
          if (!silent) console.debug("[solar-forecast-card] hours: empty array");
          return [];
        }

        // ── Format 1: Solcast detailedForecast ────────────────────────────
        // When hint is "solcast", skip detection and parse directly.
        // Otherwise detect by inspecting the first element.
        // Volcast is dispatched above so hint can never be "volcast" here.
        const isSolcast = hint === "solcast" ||
          (typeof (raw[0] as Record<string, unknown>)?.period_start === "string" &&
            "pv_estimate" in (raw[0] as Record<string, unknown>));

        if (isSolcast) {
          if (!silent) console.debug("[solar-forecast-card] hours: Solcast detailedForecast format");
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
          if (!silent) console.debug("[solar-forecast-card] hours: empty object");
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
        if (!silent) console.warn("[solar-forecast-card] hours: unrecognised type:", typeof raw);
        return [];
      }

      // ── Trim leading / trailing zeros ────────────────────────────────────
      let first = -1, last = -1;
      for (let i = 0; i < points.length; i++) {
        if (points[i].kwh > 0) { if (first === -1) first = i; last = i; }
      }

      if (first === -1) {
        if (!silent) console.debug("[solar-forecast-card] hours: attribute present but all values are zero");
        return [];
      }

      const trimmed = points.slice(first, last + 1);
      if (!silent) console.debug(
        `[solar-forecast-card] hours: ${trimmed.length} points,`,
        `${trimmed[0].hour}:00 → ${trimmed[trimmed.length - 1].hour}:00,`,
        `peak ${Math.max(...trimmed.map((p) => p.kwh)).toFixed(3)} kWh`
      );
      return trimmed;

    } catch (err) {
      if (!silent) console.error("[solar-forecast-card] hours: parse failed →", err, "\nraw value:", raw);
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
   * Parse Volcast's `hours` attribute into HourPoint[].
   *
   * The attribute can take two forms:
   *
   *   a) Array of numbers — treated as a midnight-indexed 24-element array
   *      where index = clock hour. This is the standard Volcast format for
   *      full-day forecasts. If Volcast returns a shorter array (past hours
   *      removed during the day), left-over indices still map to clock hours
   *      0-N; the resulting LEFT filter in _renderLive will then apply the
   *      same clock-hour comparison, so hours are still excluded correctly.
   *
   *   b) Array of objects — clock hour is resolved in priority order:
   *        1. Numeric "hour", "time", or "h" field
   *        2. ISO datetime string in "period_start", "datetime", or "start"
   *           — the T-component is extracted directly (avoids UTC offset shift)
   *        3. Array index (last resort)
   *      Multiple sub-hourly periods for the same clock hour are summed.
   *
   * Output is sorted ascending by clock hour with leading/trailing zeros
   * trimmed, consistent with all other integration parsers.
   */
  private _parseVolcastHours(raw: unknown[]): HourPoint[] {
    if (raw.length === 0) return [];

    const buckets = new Map<number, number>();

    for (let i = 0; i < raw.length; i++) {
      const v = raw[i];
      let hour: number;
      let kwh: number;

      if (typeof v === "number") {
        // Bare number: index = clock hour (standard 24-element midnight array)
        hour = i;
        kwh  = isFinite(v) ? v : 0;

      } else if (typeof v === "object" && v !== null) {
        const obj = v as Record<string, unknown>;

        // ── Resolve clock hour ────────────────────────────────────────────
        const rawH = obj.hour ?? obj.time ?? obj.h;

        if (typeof rawH === "number" && isFinite(rawH)) {
          hour = rawH;
        } else if (typeof rawH === "string") {
          const parsed = parseInt(rawH, 10);
          hour = isFinite(parsed) ? parsed : i;
        } else {
          // Fallback: ISO datetime field — extract T-component as local hour.
          // Matches "2024-04-26T14:00:00" → 14.  Avoids new Date() UTC shift.
          const dtField = obj.period_start ?? obj.datetime ?? obj.start;
          if (typeof dtField === "string") {
            const m = dtField.match(/T(\d{2}):/);
            hour = m ? parseInt(m[1], 10) : i;
          } else {
            hour = i;
          }
        }

        // ── Resolve energy value ──────────────────────────────────────────
        const rawV =
          obj.value    ?? obj.energy    ?? obj.kwh   ??
          obj.wh       ?? obj.power_kw  ?? obj.pv_estimate ??
          obj.forecast ?? obj.solar     ?? 0;
        kwh = typeof rawV === "number" ? rawV
            : typeof rawV === "string" ? parseFloat(rawV)
            : 0;
        if (!isFinite(kwh)) kwh = 0;

      } else {
        continue; // skip null / unexpected types
      }

      if (!isFinite(hour) || hour < 0 || hour > 23) continue;
      buckets.set(hour, (buckets.get(hour) ?? 0) + kwh);
    }

    const points = Array.from(buckets.entries())
      .map(([hour, kwh]) => ({ hour, kwh }))
      .sort((a, b) => a.hour - b.hour);

    // Trim leading / trailing zeros — consistent with all other parsers
    let first = -1, last = -1;
    for (let i = 0; i < points.length; i++) {
      if (points[i].kwh > 0) { if (first === -1) first = i; last = i; }
    }
    if (first === -1) return [];
    return points.slice(first, last + 1);
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

    // Filter out hours with zero generation — Open-Meteo includes all 24 hours
    // in wh_period (including night/cloudy hours with 0 Wh). The generic path
    // used by Volcast/Solcast trims only leading/trailing zeros; for Open-Meteo
    // we remove ALL zero-value hours so the popup shows only generating periods.
    return Array.from(buckets.entries())
      .filter(([, kwh]) => kwh > 0)
      .map(([hour, kwh]) => ({ hour, kwh }))
      .sort((a, b) => a.hour - b.hour);
  }

  // ── Estimate10 ───────────────────────────────────────────────────────────

  /**
   * Sum the pv_estimate10 values from a Solcast detailedForecast attribute.
   *
   * detailedForecast is an array of 30-min period objects:
   *   { period_start: ISO, pv_estimate: kW, pv_estimate10: kW, pv_estimate90: kW }
   *
   * pv_estimate10 is the 10th-percentile kW output for each 30-min slot.
   * Multiplying by 0.5 converts the half-hourly kW figure to kWh.
   *
   * Returns null when the attribute is absent, not an array, or every entry
   * lacks a finite pv_estimate10 value — so the caller can cleanly skip
   * rendering rather than showing 0.00 kWh.
   */
  private _sumEstimate10(raw: unknown): number | null {
    if (!Array.isArray(raw) || raw.length === 0) return null;
    let total  = 0;
    let hasAny = false;
    for (const entry of raw as Array<Record<string, unknown>>) {
      const val = entry.pv_estimate10;
      if (typeof val === "number" && isFinite(val)) {
        total  += val * 0.5; // 30-min period kW → kWh
        hasAny  = true;
      }
    }
    return hasAny ? total : null;
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
      // Prefer detailedForecast; fall back to hours for manually-configured setups.
      ? (freshState?.attributes?.detailedForecast ?? freshState?.attributes?.hours)
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

    // Fetch per-hour actual-generation history for today's popup.
    // Reset to null first so the popup renders forecast-only until the fetch
    // completes, then re-renders cleanly when the Map arrives.
    this._popupActualHourly = null;
    if (row.isToday && this._config?.today_actual_entity) {
      const entityId = this._config.today_actual_entity;
      this._fetchActualHourly(entityId).then((map) => {
        // Only apply if the popup is still open (user may have closed it while fetching)
        if (this._popup) this._popupActualHourly = map;
      });
    }

    // Single rAF lets Lit stamp the overlay into the DOM before we add .visible
    requestAnimationFrame(() => { this._popupVisible = true; });
  }

  private _closePopup(): void {
    this._popupVisible = false;
    this._popupActualHourly = null;
    this._closeTimer = setTimeout(() => { this._popup = null; }, POPUP_CLOSE_MS);
  }

  // ── Actual-generation history ─────────────────────────────────────────────

  /**
   * Fetch hourly actual-generation values for today from the HA history API.
   *
   * today_actual_entity is a cumulative energy sensor (kWh or Wh) whose value
   * rises monotonically through the day. Per-hour generation is the difference
   * between the sensor's value at the end and start of each hour boundary.
   *
   * Returns a Map<localHour (0–23), kWh> containing only hours with positive
   * generation (> 0).  Pre-sunrise and future hours are not included so the
   * popup table stays clean — a missing key means "no data / future", not zero.
   *
   * Returns an empty Map (never rejects) if the history API is unavailable,
   * the entity has no recorded history for today, or any other error occurs.
   */
  private async _fetchActualHourly(entityId: string): Promise<Map<number, number>> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hass = this.hass as any;
    if (!hass?.callApi) return new Map();

    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    // Detect Wh vs kWh from the live entity state so history values are
    // normalised to kWh consistently with the rest of the card.
    const unit = (
      this.hass?.states[entityId]?.attributes?.unit_of_measurement as string | undefined
    )?.toLowerCase();
    const isWh = unit === "wh";

    try {
      // Build the history/period REST path.
      // significant_changes_only=false: return every recorded state change,
      // not just those that cross a threshold — essential for cumulative sensors.
      const path =
        `history/period/${startOfDay.toISOString()}` +
        `?filter_entity_id=${encodeURIComponent(entityId)}` +
        `&end_time=${encodeURIComponent(now.toISOString())}` +
        `&minimal_response=true&no_attributes=true&significant_changes_only=false`;

      // HA history API returns: Array<Array<{state, last_changed}>>
      // Outer array is per-entity; inner array is chronological state entries.
      interface HistEntry { state: string; last_changed: string; }
      const result = await hass.callApi("GET", path) as HistEntry[][];

      if (!Array.isArray(result) || result.length === 0 || !Array.isArray(result[0])) {
        return new Map();
      }

      // Normalise: keep only entries with finite numeric state, sorted ascending.
      const entries: HistEntry[] = result[0]
        .filter((e) => e && typeof e.last_changed === "string" && isFinite(parseFloat(e.state)))
        .sort((a, b) => (a.last_changed < b.last_changed ? -1 : a.last_changed > b.last_changed ? 1 : 0));

      if (entries.length === 0) return new Map();

      /**
       * Returns the most-recent finite numeric state value recorded at or
       * before the given UTC ISO timestamp.  Entries are sorted ascending so
       * iteration stops as soon as we pass the target timestamp.
       */
      const valueAt = (isoTs: string): number | null => {
        let val: number | null = null;
        for (const e of entries) {
          if (e.last_changed <= isoTs) {
            const v = parseFloat(e.state);
            if (isFinite(v)) val = v;
          } else {
            break;
          }
        }
        return val;
      };

      const map = new Map<number, number>();
      const currentHour = now.getHours();

      for (let h = 0; h <= currentHour; h++) {
        const hourStart = new Date(now);
        hourStart.setHours(h, 0, 0, 0);
        const hourEnd = new Date(now);
        hourEnd.setHours(h + 1, 0, 0, 0);

        const startVal = valueAt(hourStart.toISOString());
        const endVal   = valueAt(hourEnd.toISOString());

        if (startVal === null || endVal === null) continue;

        let delta = endVal - startVal;
        if (delta < 0) continue;     // sensor reset or stale data — skip
        if (isWh) delta /= 1000;     // Wh → kWh

        // Only record hours that actually generated something.
        // This keeps the popup table free of zero rows for pre-sunrise hours.
        if (delta > 0) map.set(h, delta);
      }

      console.debug(
        `[solar-forecast-card] actual history: ${map.size} generating hour(s) found for ${entityId}`
      );
      return map;

    } catch (err) {
      console.debug("[solar-forecast-card] actual history fetch failed:", err);
      return new Map();
    }
  }

  // ── Formatting ────────────────────────────────────────────────────────────

  private _dayLabel(row: ForecastRow): string {
    if (row.dayIndex === 1) return this._t("day.today");
    if (row.dayIndex === 2) return this._t("day.tomorrow");
    const { date } = row;
    return this._t(`day.${DAY_KEYS[date.getDay()]}`);
  }

  private _dateLabel(date: Date): string {
    try {
      return new Intl.DateTimeFormat(this._dateLocaleCode(), {
        day: "2-digit",
        month: "2-digit",
      }).format(date);
    } catch {
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      return `${d}/${m}`;
    }
  }

  private _fullDateLabel(date: Date, isToday: boolean): string {
    const weekday = isToday ? this._t("card.days.today") : date.toLocaleDateString(this._localeCode(), { weekday: "long" });
    const dt = date.toLocaleDateString(this._localeCode(), { day: "numeric", month: "long" });
    return `${weekday} · ${dt}`;
  }

  private _hourLabel(hour: number): string {
    const date = new Date(2000, 0, 1, hour, 0, 0, 0);
    const hour12 = this._localeHour12();
    try {
      return new Intl.DateTimeFormat(this._dateLocaleCode(), {
        hour: "numeric",
        minute: "2-digit",
        ...(hour12 === undefined ? {} : { hour12 }),
      }).format(date);
    } catch {
      return String(hour).padStart(2, "0") + ":00";
    }
  }

  private _localeHour12(): boolean | undefined {
    const timeFormat = this.hass?.locale?.time_format;
    if (typeof timeFormat !== "string") return undefined;
    const normalized = timeFormat.toLowerCase().replace(/[-_\s]/g, "");
    if (normalized === "12" || normalized === "12h" || normalized === "ampm") return true;
    if (normalized === "24" || normalized === "24h" || normalized === "twentyfour") return false;
    return undefined;
  }

  private _formatNumber(value: number, minimumFractionDigits: number, maximumFractionDigits = minimumFractionDigits): string {
    return new Intl.NumberFormat(this._localeCode(), {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(value);
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

      /* Left column: stacks title + export rate row vertically */
      .header-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        flex: 1;
        min-width: 0;
      }

      .header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.05rem;
        font-weight: 500;
        color: var(--primary-text-color);
        flex-wrap: wrap;
      }

      .header-title ha-icon {
        color: var(--state-active-color, #fbbf24);
        flex-shrink: 0;
      }

      .export-rate-row {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.75rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        white-space: nowrap;
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

      .col.primary-day-label {
        padding-inline: 2px;
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

      .value-estimate10 {
        font-size: 0.58rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        opacity: 0.60;
        line-height: 1.3;
        white-space: nowrap;
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
       *   1  blue        cornflower / sky-blue
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
          to top, rgba(59, 130, 246, 0.90), rgba(147, 197, 253, 0.76)
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
        text-align: center;
      }

      .col.today .day-name {
        font-weight: 700;
        color: var(--warning-color, #f59e0b);
      }

      .col.primary-day-label .day-name {
        max-width: 100%;
        white-space: normal;
        overflow-wrap: anywhere;
        line-height: 1.1;
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

      /* ── Inline hourly main-card view ─────────────────────── */

      .main-hourly {
        padding: 0 4px 2px;
      }

      .main-hourly-summary {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        padding: 0 4px 8px;
        border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
        color: var(--secondary-text-color);
      }

      .main-hourly-day {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.82rem;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .main-hourly-total {
        flex-shrink: 0;
        font-size: 0.74rem;
        font-variant-numeric: tabular-nums;
        color: var(--warning-color, #f59e0b);
      }

      .main-hourly-chart {
        max-height: min(360px, 55vh);
        padding: 10px 4px 2px;
      }

      .main-hourly .chart-no-data {
        padding: 26px 8px 24px;
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

      .chart-bar-track.with-actual {
        height: 14px;
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

      .chart-bar-track.with-actual .chart-bar-fill {
        bottom: 5px;
        height: 8px;
      }

      .chart-bar-fill.peak {
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 1.0),
          rgba(254, 215, 86, 0.92)
        );
        box-shadow: 0 0 7px 1px rgba(245, 158, 11, 0.38);
      }

      .chart-actual-fill {
        position: absolute;
        left: 0;
        bottom: 1px;
        height: 3px;
        border-radius: 3px;
        background: linear-gradient(
          to right,
          rgba(220, 80, 80, 0.78),
          rgba(252, 160, 155, 0.68)
        );
        animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
        animation-delay: var(--delay, 0ms);
      }

      .chart-actual-fill.actual-match {
        background: linear-gradient(
          to right,
          rgba(245, 158, 11, 0.82),
          rgba(254, 215, 86, 0.70)
        );
      }

      .chart-actual-fill.actual-over {
        background: linear-gradient(
          to right,
          rgba(22, 163, 74, 0.82),
          rgba(74, 222, 128, 0.70)
        );
        box-shadow: 0 0 6px 1px rgba(34, 197, 94, 0.24);
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

      /* ── Popup chart — 4-column layout (today + actual) ────── */

      /* Extend the grid when actual history data is available */
      .chart-header.with-actuals,
      .chart-row.with-actuals {
        grid-template-columns: 2.8rem 1fr 2.6rem 2.8rem;
      }

      /* Align the "Fcst" header label left (matches bar-value column) */
      /* Align the "Act." header label right (matches actual-value column) */
      .chart-header.with-actuals .col-actual {
        text-align: right;
      }

      /* Actual-generation value cell */
      .chart-val-actual {
        font-size: 0.70rem;
        font-variant-numeric: tabular-nums;
        color: var(--secondary-text-color);
        font-weight: 500;
        line-height: 1;
        text-align: right;
      }

      .chart-val-actual.actual-under {
        color: rgba(220, 80, 80, 0.92);
      }

      .chart-val-actual.actual-match {
        color: var(--warning-color, #f59e0b);
      }

      .chart-val-actual.actual-over {
        color: var(--success-color, #4caf50);
      }

      /* Placeholder dash for hours with no actual data (future / pre-sunrise) */
      .chart-val-actual.empty {
        color: var(--secondary-text-color);
        opacity: 0.35;
        font-weight: 400;
      }

      /* ── Current-hour highlight (today only) ─────────────────── */

      /* Subtle amber-tinted row with a 2 px left accent line.
         Inset box-shadow is used for the accent so it doesn't affect layout.
         The amber values match the forecast bar / today column palette so the
         highlight feels at home in both light and dark HA themes. */
      .chart-row.current-hour {
        position: relative;
        border-radius: 4px;
      }

      .chart-row.current-hour::before {
        content: "";
        position: absolute;
        inset: -2px -2px;
        pointer-events: none;
        border-radius: 4px;
        background: rgba(251, 191, 36, 0.07);
        box-shadow: inset 2px 0 0 0 rgba(245, 158, 11, 0.50);
        z-index: 0;
      }

      .chart-row.current-hour > * {
        position: relative;
        z-index: 1;
      }

      /* Amber time label so the current hour is easy to find at a glance */
      .chart-row.current-hour .chart-hour {
        color: var(--warning-color, #f59e0b);
        opacity: 1;
      }

      /* ══════════════════════════════════════════════════════════
         DESKTOP TEXT SCALING
         ══════════════════════════════════════════════════════════
         --dts-factor is set by setConfig() from desktop_text_scale
         (config value / 100, default 1.0).

         Applied ONLY on viewports >= 768 px so mobile sizing is
         always left untouched.  At the default factor of 1.0 the
         calc() values are numerically identical to the base sizes,
         so there is zero visual change for users who haven't set
         the option.

         Scope: header, daily value labels, day labels, bar segment
         labels, and summary values in the live header.
         Popup text is intentionally excluded — it is a modal panel
         that already displays at comfortable reading size.
         ══════════════════════════════════════════════════════════ */

      @media (min-width: 768px) {
        /* Header */
        .header-title    { font-size: calc(1.05rem * var(--dts-factor, 1)); }
        .export-rate-row { font-size: calc(0.75rem * var(--dts-factor, 1)); }
        .live-row        { font-size: calc(0.75rem * var(--dts-factor, 1)); }
        .live-week       { font-size: calc(0.68rem * var(--dts-factor, 1)); }

        /* Column value labels */
        .value-num        { font-size: calc(0.75rem * var(--dts-factor, 1)); }
        .value-unit       { font-size: calc(0.60rem * var(--dts-factor, 1)); }
        .value-estimate10 { font-size: calc(0.58rem * var(--dts-factor, 1)); }
        .value-empty      { font-size: calc(0.78rem * var(--dts-factor, 1)); }

        /* Day labels */
        .day-name         { font-size: calc(0.75rem * var(--dts-factor, 1)); }
        .day-date         { font-size: calc(0.65rem * var(--dts-factor, 1)); }

        /* Two-day footnote */
        .two-day-note     { font-size: calc(0.65rem * var(--dts-factor, 1)); }

        /* Inline hourly summary */
        .main-hourly-day   { font-size: calc(0.82rem * var(--dts-factor, 1)); }
        .main-hourly-total { font-size: calc(0.74rem * var(--dts-factor, 1)); }

        /* Bar segment labels */
        .array-label      { font-size: calc(0.5rem  * var(--dts-factor, 1)); }
      }
    `;
  }

  // ── Render ────────────────────────────────────────────────────────────────

  protected override render() {
    if (!this._config) return nothing;

    const title = this._config.title ?? this._t("card.defaultTitle");
    const icon  = this._config.icon  ?? "mdi:solar-power";
    const hasEntities = this._config.forecast_entities.some(Boolean);

    const header = this._config.show_header ? html`
      <div class="card-header">
        <div class="header-left">
          <div class="header-title">
            <ha-icon icon=${icon}></ha-icon>
            ${title}
          </div>
          ${this._renderExportRate()}
        </div>
        ${this._renderLive()}
      </div>
    ` : nothing;

    const rows = this._buildRows();

    if (this._config.show_hourly_as_main) {
      return html`
        <ha-card>
          ${header}
          ${this._renderMainHourly(rows[0])}
        </ha-card>
      `;
    }

    if (!hasEntities) {
      return html`
        <ha-card>
          ${header}
          <div class="placeholder">
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            <p>${this._t("card.placeholder")}<br />${this._t("card.placeholderAction")}</p>
          </div>
        </ha-card>
      `;
    }

    const validRows = rows.filter((r) => r.entityId);
    const isTwoDay  = this._config.integration_type === "forecast_solar" && validRows.length <= 2;
    const displayRows = isTwoDay ? validRows : rows;

    return html`
      <ha-card>
        ${header}
        <div class="forecast-grid ${isTwoDay ? "two-day" : ""}">
          ${displayRows.map((row) => this._renderCol(row))}
        </div>
        ${isTwoDay ? html`<div class="two-day-note">${this._t("card.twoDayNote")}</div>` : nothing}
      </ha-card>
      ${this._renderPopup()}
    `;
  }

  // ── Export rate ───────────────────────────────────────────────────────────

  private _renderExportRate() {
    const cfg = this._config!;
    if (!cfg.export_rate_entity) return nothing;

    const st  = this.hass?.states[cfg.export_rate_entity];
    if (!st) return nothing;

    // Treat unavailable / unknown / non-numeric states as absent — hide cleanly
    const num = parseFloat(st.state);
    if (!isFinite(num)) return nothing;

    const unit = (st.attributes?.unit_of_measurement as string | undefined) ?? "";

    return html`
      <div class="export-rate-row">
        <span class="live-label">${this._t("card.labels.exportRate")}</span>
        <span>${st.state}${unit ? ` ${unit}` : ""}</span>
      </div>
    `;
  }

  // ── Live badge ────────────────────────────────────────────────────────────

  private _formatPower(watts: number): string {
    if (watts < 10)   return `0 ${this._t("card.units.watts")}`;
    if (watts < 1000) return `${Math.round(watts)} ${this._t("card.units.watts")}`;
    return `${this._formatNumber(watts / 1000, 1)} ${this._t("card.units.kilowatts")}`;
  }

  /**
   * Format an energy value compactly: 2 dp below 1 kWh, 1 dp above.
   * Guards against non-finite input — should never occur in normal use, but
   * prevents "NaN kWh" / "Infinity kWh" from appearing in the header.
   */
  private _formatKwh(kwh: number): string {
    if (!isFinite(kwh) || kwh < 0) return `0.00 ${this._t("card.units.kilowattHours")}`;
    return `${kwh < 1 ? this._formatNumber(kwh, 2) : this._formatNumber(kwh, 1)} ${this._t("card.units.kilowattHours")}`;
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

    // ── Actual generation total — arrays take precedence over single entity ──
    // When actual_arrays are configured and producing (sum > 0) their sum is the
    // canonical header total. When arrays are configured but sum to 0 (pre-sunrise,
    // all entities unavailable, etc.) we fall back to today_actual_entity — the
    // same precedence rule that _buildRows uses so the bar and header always agree.
    let actualKwh: number = NaN;
    const hasArrays = (cfg.actual_arrays?.length ?? 0) > 0;
    if (hasArrays) {
      const arraysSum = cfg.actual_arrays!.reduce((s, a) => {
        const st   = a.entity ? this.hass?.states[a.entity] : undefined;
        const raw  = parseFloat(st?.state ?? "");
        const unit = (st?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
        return s + (isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : 0);
      }, 0);
      if (arraysSum > 0) {
        // Arrays are live — their sum is the canonical total.
        actualKwh = arraysSum;
      } else if (cfg.today_actual_entity) {
        // Arrays sum to 0 (pre-sunrise / all unavailable) — fall back to the
        // single entity so the header always matches the bar in _renderCol.
        const actualState   = this.hass?.states[cfg.today_actual_entity];
        const actualRawVal  = parseFloat(actualState?.state ?? "");
        const actualRawUnit = (actualState?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
        const v = isFinite(actualRawVal) ? (actualRawUnit === "wh" ? actualRawVal / 1000 : actualRawVal) : NaN;
        if (isFinite(v)) actualKwh = v;
      }
      // If arrays are configured but neither path produces a finite value,
      // actualKwh stays NaN and the header omits the actual total cleanly.
    } else if (cfg.today_actual_entity) {
      const actualState   = this.hass?.states[cfg.today_actual_entity];
      const actualRawVal  = parseFloat(actualState?.state ?? "");
      const actualRawUnit = (actualState?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
      actualKwh = isFinite(actualRawVal)
        ? (actualRawUnit === "wh" ? actualRawVal / 1000 : actualRawVal)
        : NaN;
    }

    const hasPower  = isFinite(powerW);
    const hasActual = isFinite(actualKwh);

    // ── Week total / daily average ────────────────────────────────────────────
    const validForecasts = cfg.forecast_entities
      .map((id) => (id ? parseFloat(this.hass?.states[id]?.state ?? "") : NaN))
      .filter((v) => isFinite(v));
    const weekTotal = validForecasts.reduce((s, v) => s + v, 0);
    const avgDay    = validForecasts.length > 0 ? weekTotal / validForecasts.length : NaN;
    const hasWeek   = validForecasts.length > 0;

    // ── Forecast summary: +1HR and LEFT ──────────────────────────────────────
    // Both values are derived purely from the integration's own hourly forecast
    // data — they are independent of actual generation sensors.
    //
    // +1HR — forecast kWh for the next full hour (currentHour + 1).
    // LEFT — sum of all forecast kWh for every hour still remaining today
    //        (i.e. all hours > currentHour, which includes +1HR itself).
    //
    // The gate is data-driven, not integration-name-driven: rawHours resolves
    // to undefined for any integration that carries no hourly attribute
    // (forecast.solar being the current example), and the inner block is
    // skipped cleanly — both values stay null and the line is not rendered.
    //
    // Attribute resolution mirrors _openPopup exactly so all four integrations
    // are handled by the same _parseHours normalisation path:
    //   Volcast        → hours            (array of numbers/objects)
    //   Solcast        → detailedForecast  (30-min period objects → aggregated hourly)
    //   Open-Meteo     → wh_period         (ISO datetime→Wh dict  → hourly kWh)
    //   forecast.solar → undefined         (no hourly data; values not shown)
    //   manual         → hours ?? detailedForecast (best-effort fallback)
    let nextHourKwh: number | null = null;
    let forecastLeftKwh: number | null = null;

    const todayEntityId = cfg.forecast_entities[0];
    const todayFcState  = todayEntityId ? this.hass?.states[todayEntityId] : undefined;

    if (todayEntityId && todayFcState) {
      const intType = cfg.integration_type;
      // Mirrors the attribute resolution in _openPopup — keep in sync if that changes.
      const rawHours =
        // Solcast: prefer detailedForecast, fall back to hours for manual configs.
        intType === "solcast"                   ? (todayFcState.attributes?.detailedForecast ?? todayFcState.attributes?.hours) :
        intType === "volcast"                   ? todayFcState.attributes?.hours            :
        intType === "forecast_solar"            ? undefined                                 :
        intType === "open_meteo_solar_forecast" ? todayFcState.attributes?.wh_period        :
        // manual / unknown — try both common attribute names
        (todayFcState.attributes?.hours ?? todayFcState.attributes?.detailedForecast);

      if (rawHours !== undefined) {
        try {
          // nextForecastHour is the next FULL hour slot after whatever the clock
          // currently shows.  At 13:15 → 14; at 13:00 → 14; at 23:50 → 24.
          // Hour 24 won't match any slot so both values stay null after midnight.
          const currentHour      = new Date().getHours(); // 0–23, browser/local time
          const nextForecastHour = currentHour + 1;

          // Parse silently — runs on every render, console noise not wanted here
          const points = this._parseHours(rawHours, intType, true);

          // +1HR — the single forecast bucket for the next upcoming full hour.
          // Example: 13:15 → slot 14, 13:59 → slot 14.
          // isFinite guard: _parseHours already ensures finite values, but we
          // defend here too so a bad attribute can never produce "NaN kWh".
          const nextHourPt = points.find((p) => p.hour === nextForecastHour);
          if (nextHourPt && isFinite(nextHourPt.kwh)) {
            nextHourKwh = nextHourPt.kwh;
          }

          // LEFT — sum of all forecast buckets from the next full hour onward.
          // Example: 13:15 → slots 14 + 15 + 16 … through end of today.
          // Tomorrow is automatically excluded: _parseHours only processes
          // today's entity and its trimming removes trailing zero slots, so
          // no tomorrow data can be present in points[].
          const futurePoints = points.filter((p) => p.hour >= nextForecastHour);
          if (futurePoints.length > 0) {
            const sum = futurePoints.reduce((s, p) => s + p.kwh, 0);
            if (isFinite(sum)) forecastLeftKwh = sum;
          }
        } catch {
          // If parsing or calculation fails for any reason, leave both values
          // as null so the summary line is simply not rendered rather than
          // showing broken or misleading data.
          nextHourKwh    = null;
          forecastLeftKwh = null;
        }
      }
    }

    // ── Manual entity overrides ────────────────────────────────────────────────
    // When next_hour_entity / remaining_today_entity are configured in the card
    // config, their state values take precedence over the auto-derived results
    // computed above. This lets users point to any sensor (e.g. a helper or a
    // custom integration attribute) regardless of integration type.
    // Both Wh and kWh units are normalised to kWh for consistency.
    if (cfg.next_hour_entity) {
      const st   = this.hass?.states[cfg.next_hour_entity];
      const raw  = parseFloat(st?.state ?? "");
      const unit = (st?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
      const kwh  = isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : NaN;
      if (isFinite(kwh)) nextHourKwh = kwh;
    }
    if (cfg.remaining_today_entity) {
      const st   = this.hass?.states[cfg.remaining_today_entity];
      const raw  = parseFloat(st?.state ?? "");
      const unit = (st?.attributes?.unit_of_measurement as string | undefined)?.toLowerCase();
      const kwh  = isFinite(raw) ? (unit === "wh" ? raw / 1000 : raw) : NaN;
      if (isFinite(kwh)) forecastLeftKwh = kwh;
    }

    const hasForecastSummary = nextHourKwh !== null || forecastLeftKwh !== null;

    if (!hasPower && !hasActual && !hasWeek && !hasForecastSummary) return nothing;

    const liveParts: string[] = [];
    if (hasPower)  liveParts.push(this._formatPower(powerW));
    if (hasActual) liveParts.push(`${this._formatNumber(actualKwh, 1)} ${this._t("card.units.kilowattHours")}`);

    return html`
      <div class="header-live">
        ${hasPower || hasActual ? html`
          <div class="live-row">
            <span class="live-label">${this._t("card.labels.live")}</span>
            <span>${liveParts.join(" | ")}</span>
          </div>
        ` : nothing}
        ${hasForecastSummary ? html`
          <div class="live-row">
            ${nextHourKwh !== null ? html`
              <span class="live-label">${this._t("card.labels.nextHour")}</span>
              <span>${this._formatKwh(nextHourKwh)}</span>
            ` : nothing}
            ${nextHourKwh !== null && forecastLeftKwh !== null ? html`
              <span style="opacity:0.35">|</span>
            ` : nothing}
            ${forecastLeftKwh !== null ? html`
              <span class="live-label">${this._t("card.labels.left")}</span>
              <span>${this._formatKwh(forecastLeftKwh)}</span>
            ` : nothing}
          </div>
        ` : nothing}
        ${hasWeek ? html`
          <div class="live-week">
            <span class="week-label">${this._t("card.labels.week")}</span>
            ${this._formatNumber(weekTotal, 1)} ${this._t("card.units.kilowattHours")} | <span class="week-label">${this._t("card.labels.avg")}</span> ${this._formatNumber(avgDay, 1)} ${this._t("card.units.kilowattHoursPerDay")}
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
      const sum = row.actualArrays.reduce((s, a) => s + a.kwh, 0);
      if (sum > 0) {
        // Arrays are producing — show per-array breakdown with total.
        const arrayText = row.actualArrays
          .map((a) => `${a.label || "?"}: ${this._formatNumber(a.kwh, 1)} ${this._t("card.units.kilowattHours")}`)
          .join(" | ");
        return html`
          <span class="popup-subtitle">
            ${arrayText} | <span class="popup-total-kwh">${this._t("card.labels.total")}: ${this._formatNumber(sum, 1)} ${this._t("card.units.kilowattHours")}</span>
          </span>
        `;
      }
      // Arrays sum to 0 (pre-sunrise / all unavailable) — fall through to
      // single-entity display so row.actualKwh (from today_actual_entity) shows
      // rather than an all-zeros breakdown.
    }

    // No arrays configured, or arrays configured but not yet producing.
    // Show the single actual total when available (row.actualKwh is the
    // today_actual_entity value, or the arrays sum when they are producing —
    // _buildRows ensures these are consistent).
    if (row.actualKwh !== null) {
      return html`
        <span class="popup-subtitle">
          <span class="popup-total-kwh">${this._formatNumber(row.actualKwh, 2)}</span> ${this._t("card.units.kilowattHours")} ${this._t("card.labels.generated")}
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
      ? html`<span class="value-num">${this._formatNumber(row.forecastKwh, 1)}</span><span class="value-unit">${this._t("card.units.kilowattHours")}</span>`
      : html`<span class="value-empty">—</span>`;

    const estimate10Label = row.estimate10Kwh !== null
      ? html`<span class="value-estimate10">${this._t("card.labels.p10")} ${this._formatNumber(row.estimate10Kwh, 1)}</span>`
      : nothing;

    return html`
      <div
        class="col ${isToday ? "today" : ""} ${row.dayIndex <= 2 ? "primary-day-label" : ""}"
        role="button"
        tabindex="0"
        aria-label=${this._t("card.aria.dayButton", { day: this._dayLabel(row), date: this._dateLabel(row.date) })}
        @click=${() => this._openPopup(row)}
        @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && this._openPopup(row)}
      >
        <div class="col-value">${valueLabel}${estimate10Label}</div>
        <div class="col-bar-wrap">
          <div class="bar-bg"></div>
          ${bars}
        </div>
        <div class="col-label">
          <span class="day-name">${this._dayLabel(row)}</span>
          <span class="day-date">${this._dateLabel(row.date)}</span>
        </div>
      </div>
    `;
  }

  // ── Main-card hourly view ─────────────────────────────────────────────────

  private _renderMainHourly(row: ForecastRow | undefined) {
    if (!row || !row.entityId) {
      return html`
        <div class="main-hourly">
          <div class="chart-no-data">
            <p>${this._t("card.popup.noHourlyData")}</p>
          </div>
        </div>
      `;
    }

    this._ensureMainActualHourly(row);

    return html`
      <div class="main-hourly">
        <div class="main-hourly-summary">
          <span class="main-hourly-day">${this._fullDateLabel(row.date, row.isToday)}</span>
          <span class="main-hourly-total">
            ${row.forecastKwh !== null
              ? `${this._formatNumber(row.forecastKwh, 2)} ${this._t("card.units.kilowattHours")} ${this._t("card.labels.forecast")}`
              : this._t("card.popup.noForecastData")}
          </span>
        </div>
        <div class="chart-scroll main-hourly-chart">
          ${this._renderHourlyChartContent(row, row.isToday ? this._mainActualHourly : undefined)}
        </div>
      </div>
    `;
  }

  private _ensureMainActualHourly(row: ForecastRow): void {
    const entityId = this._config?.today_actual_entity;
    if (!this._config?.show_hourly_as_main || !row.isToday || !entityId) {
      this._mainActualFetchKey = undefined;
      if (this._mainActualHourly !== null) this._mainActualHourly = null;
      return;
    }

    const state = this.hass?.states[entityId];
    const todayKey = new Date().toDateString();
    const key = `${entityId}|${todayKey}|${new Date().getHours()}|${state?.last_updated ?? state?.state ?? ""}`;
    if (this._mainActualFetchKey === key) return;

    this._mainActualFetchKey = key;
    this._mainActualHourly = null;
    this._fetchActualHourly(entityId).then((map) => {
      if (this._mainActualFetchKey === key && this._config?.show_hourly_as_main) {
        this._mainActualHourly = map;
      }
    });
  }

  private _renderHourlyChartContent(
    row: ForecastRow,
    actualHourly?: Map<number, number> | null
  ) {
    if (this._config?.integration_type === "forecast_solar") {
      return html`
        <div class="chart-no-data">
          <p>${this._t("card.popup.integrationNoHourlyData")}</p>
        </div>
      `;
    }

    const points = this._parseHours(row.rawHoursAttr, this._config?.integration_type);
    const peakKwh = points.length ? Math.max(...points.map((p) => p.kwh)) : 0;

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

    return this._renderHourlyChart(
      points, peakKwh, maxRef,
      row.isToday ? actualHourly : undefined,
      row.isToday
    );
  }

  // ── Popup ─────────────────────────────────────────────────────────────────

  private _renderPopup() {
    if (!this._popup) return nothing;

    const row = this._popup;
    const chartContent = this._renderHourlyChartContent(
      row,
      row.isToday ? this._popupActualHourly : undefined
    );

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
                  ? html`<span class="popup-total-kwh">${this._formatNumber(row.forecastKwh, 2)}</span> ${this._t("card.units.kilowattHours")} ${this._t("card.labels.forecast")}`
                  : html`${this._t("card.popup.noForecastData")}`}
              </span>
              ${this._renderActualSubtitle(row)}
            </div>
            <button
              class="popup-close"
              aria-label=${this._t("card.popup.close")}
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

  /**
   * Render the hourly forecast chart rows.
   *
   * @param points       Parsed hourly forecast points (trimmed, sorted by hour).
   * @param peakKwh      Highest forecast kWh value — used to highlight peak row.
   * @param maxRef       Bar-scale ceiling (inverter / array / day peak).
   * @param actualHourly Optional: Map<localHour, kWh> from HA history.
   *   undefined  → not today; render forecast-only (3-column, unchanged layout).
   *   null       → today but fetch still in progress; render forecast-only until ready.
   *   Map        → today, fetch complete; render 4-column with Forecast + Actual.
   * @param isToday      True when the popup is showing today's forecast. Used to
   *   enable current-hour row highlighting; false/undefined = no highlight.
   */
  private _renderHourlyChart(
    points: HourPoint[],
    peakKwh: number,
    maxRef: number,
    actualHourly?: Map<number, number> | null,
    isToday?: boolean
  ) {
    if (points.length === 0) {
      return html`
        <div class="chart-no-data">
          <p>${this._t("card.popup.noHourlyData")}</p>
        </div>
      `;
    }

    // Only show the Actual column when the fetch has completed (Map, not null/undefined)
    const showActualCol = actualHourly instanceof Map;

    // Current local hour — used to highlight the matching row.
    // Set to -1 for future days so no row ever matches.
    const currentHour = isToday ? new Date().getHours() : -1;

    return [
      html`
        <div class="chart-header ${showActualCol ? "with-actuals" : ""}">
          <span class="col-time">${this._t("card.popup.chart.time")}</span>
          <span class="col-power">${this._t("card.popup.chart.power")}</span>
          <span class="col-kwh">${showActualCol ? this._t("card.popup.chart.forecastShort") : this._t("card.popup.chart.kwh")}</span>
          ${showActualCol ? html`<span class="col-actual">${this._t("card.popup.chart.actualShort")}</span>` : nothing}
        </div>
      `,
      ...points.map((pt, i) => {
        const pct           = maxRef > 0 ? Math.min((pt.kwh / maxRef) * 100, 100) : 0;
        const isPeak        = pt.kwh === peakKwh && peakKwh > 0;
        const isCurrentHour = pt.hour === currentHour;
        // Stagger: 20ms base + 18ms per row, capped at 300ms
        const delay         = Math.min(20 + i * 18, 300);

        // Look up actual kWh for this hour.
        // null  = no entry in map → future hour or pre-sunrise → show dash
        // number = real measured value (> 0 since map only stores positives)
        const actualKwh: number | null = showActualCol
          ? (actualHourly!.has(pt.hour) ? actualHourly!.get(pt.hour)! : null)
          : null;
        const actualPct = actualKwh !== null && maxRef > 0
          ? Math.min((actualKwh / maxRef) * 100, 100)
          : 0;
        const compareClass = actualKwh === null
          ? ""
          : actualKwh > pt.kwh + 0.005
            ? "actual-over"
            : actualKwh < pt.kwh - 0.005
              ? "actual-under"
              : "actual-match";

        return html`
          <div class="chart-row
            ${showActualCol ? "with-actuals" : ""}
            ${isCurrentHour ? "current-hour" : ""}">
            <span class="chart-hour">${this._hourLabel(pt.hour)}</span>
            <div class="chart-bar-track ${actualKwh !== null ? "with-actual" : ""}">
              <div
                class="chart-bar-fill ${isPeak ? "peak" : ""}"
                style="width:${pct.toFixed(1)}%;--delay:${delay}ms"
              ></div>
              ${actualKwh !== null ? html`
                <div
                  class="chart-actual-fill ${compareClass}"
                  style="width:${actualPct.toFixed(1)}%;--delay:${delay}ms"
                ></div>
              ` : nothing}
            </div>
            <span class="chart-val ${isPeak ? "peak" : ""}">
              ${this._formatNumber(pt.kwh, 2)}
            </span>
            ${showActualCol ? html`
              <span class="chart-val-actual ${actualKwh !== null ? compareClass : "empty"}">
                ${actualKwh !== null ? this._formatNumber(actualKwh, 2) : "—"}
              </span>
            ` : nothing}
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
  name: localize("en", "customCard.name"),
  description: localize("en", "customCard.description"),
  preview: false,
});
