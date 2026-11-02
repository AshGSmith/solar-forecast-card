import { html, nothing } from "lit";
import type { ForecastRow } from "../../data/rows.js";
import { parseHours, type HourPoint } from "../../integrations/index.js";
import type { SolarForecastCardConfig } from "../../types.js";
import type { Formatter } from "../format.js";

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
 * @param isToday      True when the chart is showing today's forecast. Used to
 *   enable current-hour row highlighting; false = no highlight.
 */
function renderHourlyChart(
  points: HourPoint[],
  peakKwh: number,
  maxRef: number,
  actualHourly: Map<number, number> | null | undefined,
  isToday: boolean,
  fmt: Formatter
) {
  if (points.length === 0) {
    return html`
      <div class="chart-no-data">
        <p>${fmt.t("card.popup.noHourlyData")}</p>
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
        <span class="col-time">${fmt.t("card.popup.chart.time")}</span>
        <span class="col-power">${fmt.t("card.popup.chart.power")}</span>
        <span class="col-kwh">${showActualCol ? fmt.t("card.popup.chart.forecastShort") : fmt.t("card.popup.chart.kwh")}</span>
        ${showActualCol ? html`<span class="col-actual">${fmt.t("card.popup.chart.actualShort")}</span>` : nothing}
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
        <div part="popup-row" class="chart-row
          ${showActualCol ? "with-actuals" : ""}
          ${isCurrentHour ? "current-hour" : ""}">
          <span class="chart-hour">${fmt.hourLabel(pt.hour)}</span>
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
            ${fmt.number(pt.kwh, 2)}
          </span>
          ${showActualCol ? html`
            <span class="chart-val-actual ${actualKwh !== null ? compareClass : "empty"}">
              ${actualKwh !== null ? fmt.number(actualKwh, 2) : "—"}
            </span>
          ` : nothing}
        </div>
      `;
    }),
  ];
}

export function renderHourlyChartContent(
  cfg: SolarForecastCardConfig,
  row: ForecastRow,
  actualHourly: Map<number, number> | null,
  fmt: Formatter
) {
  if (cfg.integration_type === "forecast_solar") {
    return html`
      <div class="chart-no-data">
        <p>${fmt.t("card.popup.integrationNoHourlyData")}</p>
      </div>
    `;
  }

  const points = parseHours(cfg.integration_type, row.rawHoursAttr);
  const peakKwh = points.length ? Math.max(...points.map((p) => p.kwh)) : 0;

  const { inverter_max_kw, solar_max_kwp } = cfg;
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

  return renderHourlyChart(
    points, peakKwh, maxRef,
    row.isToday ? actualHourly : undefined,
    row.isToday,
    fmt
  );
}

export function renderMainHourly(
  cfg: SolarForecastCardConfig,
  row: ForecastRow | undefined,
  actualHourly: Map<number, number> | null,
  fmt: Formatter
) {
  if (!row || !row.entityId) {
    return html`
      <div class="main-hourly">
        <div class="chart-no-data">
          <p>${fmt.t("card.popup.noHourlyData")}</p>
        </div>
      </div>
    `;
  }

  return html`
    <div class="main-hourly">
      <div class="main-hourly-summary">
        <span class="main-hourly-day">${fmt.fullDateLabel(row.date, row.isToday)}</span>
        <span class="main-hourly-total">
          ${row.forecastKwh !== null
            ? `${fmt.number(row.forecastKwh, 2)} ${fmt.t("card.units.kilowattHours")} ${fmt.t("card.labels.forecast")}`
            : fmt.t("card.popup.noForecastData")}
        </span>
      </div>
      <div class="chart-scroll main-hourly-chart">
        ${renderHourlyChartContent(cfg, row, actualHourly, fmt)}
      </div>
    </div>
  `;
}
