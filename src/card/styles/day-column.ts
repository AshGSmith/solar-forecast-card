import { css } from "lit";

export const dayColumnStyles = css`
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
    width: min(var(--sfc-bar-width, 72px), 72%);
  }

  .two-day-note {
    text-align: center;
    font-size: var(--sfc-two-day-note-font-size-default);
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
    font-size: var(--sfc-font-size, var(--sfc-value-font-size-default));
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
    line-height: 1.15;
    white-space: nowrap;
  }

  .value-unit {
    font-size: var(--sfc-font-size, var(--sfc-value-unit-font-size-default));
    color: var(--secondary-text-color);
    line-height: 1.2;
  }

  .value-estimate10 {
    font-size: var(--sfc-font-size, var(--sfc-value-estimate-font-size-default));
    font-variant-numeric: tabular-nums;
    color: var(--secondary-text-color);
    opacity: 0.60;
    line-height: 1.3;
    white-space: nowrap;
  }


  .value-empty {
    font-size: var(--sfc-font-size, var(--sfc-value-empty-font-size-default));
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
    width: min(var(--sfc-bar-width, 24px), 72%);
    height: 100%;
    border-radius: var(--sfc-bar-radius, 8px);
    background: var(--secondary-background-color, rgba(128, 128, 128, 0.07));
  }

  .bar-forecast,
  .bar-actual,
  .bar-dotted {
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 0;
    width: min(var(--sfc-bar-width, 24px), 72%);
    transition:
      height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1),
      bottom 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
  }

  /* ── Forecast bar — average (default, yellow/amber) ──────── */

  .bar-forecast {
    border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
    background: var(--sfc-average-color, linear-gradient(
      to top,
      rgba(245, 158, 11, 0.92),
      rgba(254, 215, 86, 0.78)
    ));
    box-shadow:
      0 0 0 1px rgba(251, 191, 36, 0.15),
      0 2px 10px 0 rgba(245, 158, 11, 0.28),
      0 0 16px 2px rgba(251, 191, 36, 0.18);
  }

  .bar-forecast.complete {
    background: var(--sfc-average-color, linear-gradient(
      to top,
      rgba(245, 158, 11, 0.98),
      rgba(254, 215, 86, 0.88)
    ));
    box-shadow:
      0 0 0 1px rgba(251, 191, 36, 0.25),
      0 2px 12px 0 rgba(245, 158, 11, 0.42),
      0 0 22px 4px rgba(251, 191, 36, 0.28);
  }

  /* ── Forecast bar — low (soft coral/rose) ────────────────── */

  .bar-forecast.low {
    background: var(--sfc-low-color, linear-gradient(
      to top,
      rgba(220, 80, 80, 0.88),
      rgba(252, 160, 155, 0.74)
    ));
    box-shadow:
      0 0 0 1px rgba(239, 68, 68, 0.14),
      0 2px 10px 0 rgba(220, 80, 80, 0.24),
      0 0 16px 2px rgba(239, 68, 68, 0.15);
  }

  .bar-forecast.complete.low {
    background: var(--sfc-low-color, linear-gradient(
      to top,
      rgba(220, 80, 80, 0.98),
      rgba(252, 160, 155, 0.88)
    ));
    box-shadow:
      0 0 0 1px rgba(239, 68, 68, 0.25),
      0 2px 12px 0 rgba(220, 80, 80, 0.40),
      0 0 22px 4px rgba(239, 68, 68, 0.26);
  }

  /* ── Forecast bar — high (green) ─────────────────────────── */

  .bar-forecast.high {
    background: var(--sfc-high-color, linear-gradient(
      to top,
      rgba(22, 163, 74, 0.92),
      rgba(74, 222, 128, 0.78)
    ));
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.15),
      0 2px 10px 0 rgba(22, 163, 74, 0.28),
      0 0 16px 2px rgba(34, 197, 94, 0.18);
  }

  .bar-forecast.complete.high {
    background: var(--sfc-high-color, linear-gradient(
      to top,
      rgba(22, 163, 74, 0.98),
      rgba(74, 222, 128, 0.90)
    ));
    box-shadow:
      0 0 0 1px rgba(34, 197, 94, 0.25),
      0 2px 12px 0 rgba(22, 163, 74, 0.42),
      0 0 22px 4px rgba(34, 197, 94, 0.28);
  }

  /* ── Actual generation bar — purple ──────────────────────── */

  .bar-actual {
    border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
    background: var(--sfc-actual-color, linear-gradient(
      to top,
      rgba(124, 58, 237, 0.90),
      rgba(196, 136, 255, 0.76)
    ));
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
    width: min(var(--sfc-bar-width, 24px), 72%);
    display: flex;
    flex-direction: column-reverse; /* first array sits at the bottom */
    border-radius: var(--sfc-bar-radius, 6px 6px 3px 3px);
    overflow: hidden;
    transition:
      height 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
  }

  .forecast-grid.two-day .bar-arrays-stack {
    width: min(var(--sfc-bar-width, 72px), 72%);
  }

  .bar-array-segment {
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .array-label {
    font-size: var(--sfc-font-size, var(--sfc-array-label-font-size-default));
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

  .bar-dotted.full    { border-radius: var(--sfc-bar-radius, 6px); }
  .bar-dotted.partial { border-bottom: none; border-radius: var(--sfc-bar-radius, 6px 6px 0 0); }

  /* ── Threshold lines ─────────────────────────────────────── */

  /* Each column draws its own segment. The side offsets close the gap to the
     next column (3px column padding + half the 2px grid gap) so the segments
     read as one line. The drop shadow keeps a line visible over a bar of the
     same colour. */
  .threshold-line {
    position: absolute;
    left: -4px;
    right: -4px;
    translate: 0 50%;
    border-top: 2px dashed;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.45));
    transition: bottom 0.55s cubic-bezier(0.34, 1.15, 0.64, 1);
  }

  .threshold-line.low {
    border-top-color: var(--sfc-low-threshold-line-color, rgba(239, 68, 68, 0.9));
  }

  .threshold-line.high {
    border-top-color: var(--sfc-high-threshold-line-color, rgba(34, 197, 94, 0.9));
  }

  .forecast-grid.two-day .threshold-line {
    left: -6px;
    right: -6px;
  }

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
    font-size: var(--sfc-font-size, var(--sfc-day-name-font-size-default));
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
    font-size: var(--sfc-font-size, var(--sfc-day-date-font-size-default));
    color: var(--secondary-text-color);
    font-variant-numeric: tabular-nums;
    line-height: 1.25;
    white-space: nowrap;
  }
`;
