import { html, nothing } from "lit";
import type { ForecastRow, Tier } from "../../data/rows.js";
import type { Formatter } from "../format.js";

function renderBars(row: ForecastRow, tier: Tier) {
  const { forecastPct, actualPct, dottedPct, isComplete, isToday } = row;

  if (!isToday || row.actualKwh === null || row.forecastKwh === null) {
    return html`<div part="daily-bar" class="bar-forecast ${tier}" style="height:${forecastPct}%"></div>`;
  }

  // Completion indicator — solid forecast bar regardless of arrays
  if (isComplete) {
    return html`<div part="daily-bar" class="bar-forecast complete ${tier}" style="height:${forecastPct}%"></div>`;
  }

  // Arrays that are currently producing (kwh > 0).
  const visibleArrays = row.actualArrays?.filter((a) => a.kwh > 0) ?? [];
  const hasDotted = dottedPct > 1;
  const dotted = hasDotted ? html`
    <div part="daily-bar" class="bar-dotted ${tier} ${actualPct > 0 ? "partial" : "full"}"
         style="height:${dottedPct}%;bottom:${actualPct}%"></div>
  ` : nothing;

  // Only enter stacked mode when at least 2 arrays are producing —
  // a single active source stays on the existing single-colour bar path.
  if (visibleArrays.length >= 2) {
    // ── Stacked per-array segments ──────────────────────────────────────
    // Segments use flex-grow proportional to each array's kWh so they
    // automatically fill the container correctly without pixel maths.
    //
    // Label visibility: estimate the segment's pixel height from the
    // mid-range bar height (120 px ≈ clamp(100 px, 20 vw, 160 px)).
    // Only render the label when the estimated height is ≥ 16 px.
    const sumKwh  = visibleArrays.reduce((s, a) => s + a.kwh, 0);
    const stackPx = (actualPct / 100) * 120; // estimated total stack height

    return html`
      <div part="daily-bar" class="bar-arrays-stack" style="height:${actualPct}%">
        ${visibleArrays.map((arr, i) => {
          const segPx     = sumKwh > 0 ? (arr.kwh / sumKwh) * stackPx : 0;
          const showLabel = arr.label && segPx >= 16;
          return html`
            <div part="daily-bar" class="bar-array-segment seg-color-${i % 8}" style="flex:${arr.kwh}">
              ${showLabel ? html`<span class="array-label">${arr.label}</span>` : nothing}
            </div>
          `;
        })}
      </div>
      ${dotted}
    `;
  }

  // ── Single-colour actual bar — default and single-source fallback ───
  return html`
    <div part="daily-bar" class="bar-actual ${hasDotted ? "below-dotted" : ""}"
         style="height:${actualPct}%"></div>
    ${dotted}
  `;
}

/** Zone edges for the track's background, consumed by .bar-bg in the styles. */
function thresholdZoneStyle(row: ForecastRow): string {
  const edges = [
    row.lowThresholdPct  === null ? "" : `--sfc-low-zone-top:${row.lowThresholdPct.toFixed(1)}%;`,
    row.highThresholdPct === null ? "" : `--sfc-high-zone-bottom:${row.highThresholdPct.toFixed(1)}%;`,
  ];
  return edges.join("");
}

export function renderDayColumn(
  row: ForecastRow,
  tier: Tier,
  fmt: Formatter,
  onOpen: (row: ForecastRow) => void
) {
  const valueLabel = row.forecastKwh !== null
    ? html`<span class="value-num">${fmt.number(row.forecastKwh, 1)}</span><span class="value-unit">${fmt.t("card.units.kilowattHours")}</span>`
    : html`<span class="value-empty">—</span>`;

  const estimate10Label = row.estimate10Kwh !== null
    ? html`<span class="value-estimate10">${fmt.t("card.labels.p10")} ${fmt.number(row.estimate10Kwh, 1)}</span>`
    : nothing;

  return html`
    <div
      class="col ${row.isToday ? "today" : ""} ${row.dayIndex <= 2 ? "primary-day-label" : ""}"
      role="button"
      tabindex="0"
      aria-label=${fmt.t("card.aria.dayButton", { day: fmt.dayLabel(row), date: fmt.dateLabel(row.date) })}
      @click=${() => onOpen(row)}
      @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && onOpen(row)}
    >
      <div part="daily-value" class="col-value">${valueLabel}${estimate10Label}</div>
      <div class="col-bar-wrap">
        <div part="daily-bar" class="bar-bg" style=${thresholdZoneStyle(row)}></div>
        ${renderBars(row, tier)}
      </div>
      <div part="daily-label" class="col-label">
        <span class="day-name">${fmt.dayLabel(row)}</span>
        <span class="day-date">${fmt.dateLabel(row.date)}</span>
      </div>
    </div>
  `;
}
