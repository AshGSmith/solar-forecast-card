import { html, nothing, svg } from "lit";
import {
  historyScale,
  scoreHistory,
  type HistoryDay,
  type HistoryScore,
} from "../../data/forecast-history.js";
import type { Formatter } from "../format.js";

// Chart geometry, in viewBox units.
const WIDTH = 340;
const HEIGHT = 158;
const LEFT = 26;
const RIGHT = 332;
const TOP = 8;
const BOTTOM = 150;

const signed = (value: number, fmt: Formatter) =>
  `${value >= 0 ? "+" : "−"}${fmt.number(Math.abs(value), 1)}`;

function linePath(values: Array<number | null>, xOf: (i: number) => number, yOf: (v: number) => number): string {
  let path = "";
  let drawing = false;
  values.forEach((value, i) => {
    if (value === null) {
      drawing = false;
      return;
    }
    path += `${drawing ? "L" : "M"}${xOf(i).toFixed(1)} ${yOf(value).toFixed(1)} `;
    drawing = true;
  });
  return path;
}

function polygon(points: Array<[number, number]>, gain: boolean) {
  const list = points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return svg`<polygon class=${gain ? "history-gain" : "history-loss"} points=${list}></polygon>`;
}

/** Fill the space between the lines, splitting a segment where the lines cross. */
function gapShading(days: HistoryDay[], xOf: (i: number) => number, yOf: (v: number) => number) {
  const shapes = [];

  for (let i = 0; i < days.length - 1; i++) {
    const { forecastKwh: f0, actualKwh: a0 } = days[i];
    const { forecastKwh: f1, actualKwh: a1 } = days[i + 1];
    if (f0 === null || a0 === null || f1 === null || a1 === null) continue;

    const d0 = a0 - f0;
    const d1 = a1 - f1;
    const forecastStart: [number, number] = [xOf(i), yOf(f0)];
    const forecastEnd: [number, number] = [xOf(i + 1), yOf(f1)];
    const actualStart: [number, number] = [xOf(i), yOf(a0)];
    const actualEnd: [number, number] = [xOf(i + 1), yOf(a1)];

    if (d0 * d1 >= 0) {
      shapes.push(polygon([forecastStart, forecastEnd, actualEnd, actualStart], d0 + d1 > 0));
    } else {
      const t = d0 / (d0 - d1);
      const cross: [number, number] = [
        forecastStart[0] + (forecastEnd[0] - forecastStart[0]) * t,
        forecastStart[1] + (forecastEnd[1] - forecastStart[1]) * t,
      ];
      shapes.push(polygon([forecastStart, cross, actualStart], d0 > 0));
      shapes.push(polygon([cross, forecastEnd, actualEnd], d1 > 0));
    }
  }

  return shapes;
}

function renderChart(
  days: HistoryDay[],
  selected: number,
  fmt: Formatter,
  onSelect: (index: number) => void
) {
  const peak = Math.max(...days.flatMap((d) => [d.forecastKwh ?? 0, d.actualKwh ?? 0]));
  const { step, top } = historyScale(peak);
  const spacing = (RIGHT - LEFT) / (days.length - 1);
  const xOf = (i: number) => LEFT + i * spacing;
  const yOf = (value: number) => BOTTOM - (value / top) * (BOTTOM - TOP);
  const ticks = Array.from({ length: top / step + 1 }, (_, i) => i * step);

  return html`
    <div class="history-plot">
      <svg class="history-chart" viewBox="0 0 ${WIDTH} ${HEIGHT}" role="img"
           aria-label=${fmt.t("card.history.title")}>
        ${ticks.map((value) => svg`
          <line class="history-grid" x1=${LEFT} x2=${RIGHT} y1=${yOf(value)} y2=${yOf(value)}></line>
          <text class="history-axis" x=${LEFT - 6} y=${yOf(value) + 3.5} text-anchor="end">${fmt.number(value, 0)}</text>
        `)}
        ${gapShading(days, xOf, yOf)}
        <path class="history-forecast" d=${linePath(days.map((d) => d.forecastKwh), xOf, yOf)}></path>
        <path class="history-actual" d=${linePath(days.map((d) => d.actualKwh), xOf, yOf)}></path>
        ${days.map((day, i) => svg`
          ${day.forecastKwh === null ? nothing : svg`<circle class="history-dot-forecast" cx=${xOf(i)} cy=${yOf(day.forecastKwh)} r="2.8"></circle>`}
          ${day.actualKwh === null ? nothing : svg`<circle class="history-dot-actual" cx=${xOf(i)} cy=${yOf(day.actualKwh)} r="3.4"></circle>`}
          <rect
            class="history-hit ${i === selected ? "selected" : ""}"
            x=${xOf(i) - spacing / 2} y="0" width=${spacing} height=${HEIGHT} rx="6"
            tabindex="0" role="button"
            aria-label=${fmt.dayLabel({ dayIndex: 3, date: day.date })}
            @click=${() => onSelect(i)}
            @keydown=${(e: KeyboardEvent) => (e.key === "Enter" || e.key === " ") && onSelect(i)}
          ></rect>
        `)}
      </svg>
      <div class="history-days">
        ${days.map((day, i) => html`
          <div
            class="history-day ${i === selected ? "selected" : ""}"
            style="left:${((xOf(i) / WIDTH) * 100).toFixed(2)}%"
            @click=${() => onSelect(i)}
          >
            <span class="day-name">${fmt.dayLabel({ dayIndex: 3, date: day.date })}</span>
            <span class="day-date">${fmt.dateLabel(day.date)}</span>
          </div>
        `)}
      </div>
    </div>
  `;
}

function renderScore(score: HistoryScore, fmt: Formatter) {
  const unit = fmt.t("card.units.kilowattHours");
  return html`
    <div class="history-stats">
      <div class="history-stat">
        <strong>${fmt.number(score.accuracyPct, 0)}%</strong>
        <span>${fmt.t("card.history.accuracy")}</span>
      </div>
      <div class="history-stat">
        <strong>${fmt.number(score.averageMissKwh, 1)} ${unit}</strong>
        <span>${fmt.t("card.history.averageMiss")}</span>
      </div>
      <div class="history-stat">
        <strong class=${score.biasKwh >= 0 ? "over" : "under"}>${signed(score.biasKwh, fmt)} ${unit}</strong>
        <span>${fmt.t("card.history.bias")}</span>
      </div>
    </div>
  `;
}

function readout(day: HistoryDay, fmt: Formatter): string {
  const name = fmt.dayLabel({ dayIndex: 3, date: day.date });
  if (day.forecastKwh === null) return fmt.t("card.history.noForecast", { day: name });

  const forecast = fmt.number(day.forecastKwh, 1);
  if (day.actualKwh === null) return fmt.t("card.history.noActual", { day: name, forecast });

  return fmt.t("card.history.readout", {
    day: name,
    forecast,
    actual: fmt.number(day.actualKwh, 1),
    difference: signed(day.actualKwh - day.forecastKwh, fmt),
  });
}

export function renderHistory(
  days: HistoryDay[] | null,
  selected: number,
  fmt: Formatter,
  onSelect: (index: number) => void
) {
  if (days === null) {
    return html`<div class="chart-no-data"><p>${fmt.t("card.history.loading")}</p></div>`;
  }

  if (!days.some((d) => d.forecastKwh !== null || d.actualKwh !== null)) {
    return html`<div class="chart-no-data"><p>${fmt.t("card.history.noData")}</p></div>`;
  }

  const score = scoreHistory(days);

  return html`
    <div part="history" class="history">
      <div class="history-head">
        <span class="history-title">${fmt.t("card.history.title")}</span>
        <span class="history-legend">
          <span class="history-key forecast">${fmt.t("card.history.forecast")}</span>
          <span class="history-key actual">${fmt.t("card.history.actual")}</span>
        </span>
      </div>
      ${score ? renderScore(score, fmt) : nothing}
      ${renderChart(days, selected, fmt, onSelect)}
      <div class="history-readout">${readout(days[selected], fmt)}</div>
      ${days.some((d) => d.actualKwh !== null)
        ? nothing
        : html`<div class="history-note">${fmt.t("card.history.noActualData")}</div>`}
    </div>
  `;
}
