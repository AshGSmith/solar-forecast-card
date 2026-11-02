import { css } from "lit";

export const historyStyles = css`
  /* ── Forecast history view ───────────────────────────── */

  .history {
    --sfc-history-forecast: var(--sfc-history-forecast-color, var(--warning-color, #f59e0b));
    --sfc-history-actual: var(--sfc-history-actual-color, #8b5cf6);
    --sfc-history-over: var(--sfc-history-over-color, var(--success-color, #4caf50));
    --sfc-history-under: var(--sfc-history-under-color, #dc5050);
    --sfc-history-surface: var(--ha-card-background, var(--card-background-color, #fff));
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 4px 2px;
  }

  .history-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 4px 10px;
  }

  .history-title {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .history-legend {
    display: flex;
    gap: 12px;
    font-size: 0.7rem;
    color: var(--secondary-text-color);
  }

  .history-key {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .history-key::before {
    content: "";
    width: 18px;
    border-top: 2px solid var(--sfc-history-actual);
  }

  .history-key.forecast::before {
    border-top: 2px dashed var(--sfc-history-forecast);
  }

  .history-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    padding: 8px 0;
    border-top: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
  }

  .history-stat {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .history-stat strong {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }

  .history-stat strong.over {
    color: var(--sfc-history-over);
  }

  .history-stat strong.under {
    color: var(--sfc-history-under);
  }

  .history-stat span {
    font-size: 0.66rem;
    line-height: 1.25;
    color: var(--secondary-text-color);
  }

  .history-plot {
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
  }

  .history-chart {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Day labels are HTML rather than SVG text so they reuse .day-name and
     .day-date from the daily view, and share their size, scaling and
     font_size setting. Line heights and the 1px gap match .col-label. */
  .history-days {
    position: relative;
    height: calc(
      (
        var(--sfc-font-size, var(--sfc-day-name-font-size-default)) +
        var(--sfc-font-size, var(--sfc-day-date-font-size-default))
      ) * 1.25 + 1px
    );
  }

  .history-day {
    position: absolute;
    top: 0;
    translate: -50% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .history-day.selected .day-name {
    font-weight: 700;
  }

  .history-grid {
    stroke: var(--divider-color, rgba(128, 128, 128, 0.2));
    stroke-width: 1;
  }

  .history-axis {
    fill: var(--secondary-text-color);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
  }

  .history-forecast,
  .history-actual {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .history-forecast {
    stroke: var(--sfc-history-forecast);
    stroke-width: 2;
    stroke-dasharray: 5 4;
  }

  .history-actual {
    stroke: var(--sfc-history-actual);
    stroke-width: 2.5;
  }

  .history-gain {
    fill: var(--sfc-history-over);
    fill-opacity: 0.24;
  }

  .history-loss {
    fill: var(--sfc-history-under);
    fill-opacity: 0.24;
  }

  .history-dot-forecast {
    fill: var(--sfc-history-surface);
    stroke: var(--sfc-history-forecast);
    stroke-width: 1.5;
  }

  .history-dot-actual {
    fill: var(--sfc-history-actual);
    stroke: var(--sfc-history-surface);
    stroke-width: 1.5;
  }

  .history-hit {
    fill: transparent;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .history-hit:hover,
  .history-hit:focus-visible,
  .history-hit.selected {
    fill: rgba(128, 128, 128, 0.1);
  }

  .history-note {
    font-size: 0.72rem;
    line-height: 1.35;
    color: var(--secondary-text-color);
  }

  .history-readout {
    min-height: 1.4em;
    font-size: 0.78rem;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }
`;
