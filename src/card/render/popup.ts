import { html, nothing } from "lit";
import type { ForecastRow } from "../../data/rows.js";
import type { SolarForecastCardConfig } from "../../types.js";
import type { Formatter } from "../format.js";
import { renderHourlyChartContent } from "./hourly-chart.js";

/**
 * Returns the actual-generation subtitle for the popup header.
 * Only shown for today's row; format depends on whether arrays are configured.
 *
 * - No arrays:  "<X.XX> kWh generated"
 * - Arrays:     "E: 4.2 kWh | W: 3.8 kWh | Total: 8.0 kWh"
 */
function renderActualSubtitle(row: ForecastRow, fmt: Formatter) {
  if (!row.isToday) return nothing;

  const sum = row.actualArrays?.reduce((s, a) => s + a.kwh, 0) ?? 0;
  if (row.actualArrays && sum > 0) {
    // Arrays are producing — show per-array breakdown with total.
    const arrayText = row.actualArrays
      .map((a) => `${a.label}: ${fmt.number(a.kwh, 1)} ${fmt.t("card.units.kilowattHours")}`)
      .join(" | ");
    return html`
      <span class="popup-subtitle">
        ${arrayText} | <span class="popup-total-kwh">${fmt.t("card.labels.total")}: ${fmt.number(sum, 1)} ${fmt.t("card.units.kilowattHours")}</span>
      </span>
    `;
  }

  // No arrays configured, or arrays configured but not yet producing.
  // Show the single actual total when available rather than an all-zeros
  // breakdown (row.actualKwh is the today_actual_entity value here).
  if (row.actualKwh !== null) {
    return html`
      <span class="popup-subtitle">
        <span class="popup-total-kwh">${fmt.number(row.actualKwh, 2)}</span> ${fmt.t("card.units.kilowattHours")} ${fmt.t("card.labels.generated")}
      </span>
    `;
  }

  return nothing;
}

export interface PopupState {
  row: ForecastRow;
  visible: boolean;
  actualHourly: Map<number, number> | null;
  onClose: () => void;
}

export function renderPopup(
  cfg: SolarForecastCardConfig,
  { row, visible, actualHourly, onClose }: PopupState,
  fmt: Formatter
) {
  return html`
    <div
      class="popup-overlay ${visible ? "visible" : ""}"
      @click=${onClose}
    >
      <div part="popup" class="popup-panel" @click=${(e: Event) => e.stopPropagation()}>

        <div class="popup-header">
          <div class="popup-title">
            <span class="popup-day-name">
              ${fmt.fullDateLabel(row.date, row.isToday)}
            </span>
            <span class="popup-subtitle">
              ${row.forecastKwh !== null
                ? html`<span class="popup-total-kwh">${fmt.number(row.forecastKwh, 2)}</span> ${fmt.t("card.units.kilowattHours")} ${fmt.t("card.labels.forecast")}`
                : html`${fmt.t("card.popup.noForecastData")}`}
            </span>
            ${renderActualSubtitle(row, fmt)}
          </div>
          <button
            class="popup-close"
            aria-label=${fmt.t("card.popup.close")}
            @click=${onClose}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>

        <div class="chart-scroll">
          ${renderHourlyChartContent(cfg, row, actualHourly, fmt)}
        </div>

      </div>
    </div>
  `;
}
