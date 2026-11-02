import { css } from "lit";

export const hourlyChartStyles = css`
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
    color: var(--sfc-popup-text-color, var(--primary-text-color));
  }

  .main-hourly-total {
    flex-shrink: 0;
    font-size: 0.74rem;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
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
    background: var(--sfc-average-color, linear-gradient(
      to right,
      rgba(245, 158, 11, 0.88),
      rgba(254, 215, 86, 0.76)
    ));
    /* Bars animate in staggered via --delay set inline */
    animation: bar-in 0.45s cubic-bezier(0.34, 1.1, 0.64, 1) both;
    animation-delay: var(--delay, 0ms);
  }

  .chart-bar-track.with-actual .chart-bar-fill {
    bottom: 5px;
    height: 8px;
  }

  .chart-bar-fill.peak {
    background: var(--sfc-average-color, linear-gradient(
      to right,
      rgba(245, 158, 11, 1.0),
      rgba(254, 215, 86, 0.92)
    ));
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
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
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
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
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
    box-shadow: inset 2px 0 0 0 var(--sfc-popup-accent-color, rgba(245, 158, 11, 0.50));
    z-index: 0;
  }

  .chart-row.current-hour > * {
    position: relative;
    z-index: 1;
  }

  /* Amber time label so the current hour is easy to find at a glance */
  .chart-row.current-hour .chart-hour {
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
    opacity: 1;
  }
`;
