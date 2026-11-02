import { css } from "lit";

export const headerStyles = css`
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
    font-size: var(--sfc-title-font-size, 1.05rem);
    font-weight: 500;
    color: var(--sfc-title-color, var(--primary-text-color));
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
    color: var(--sfc-header-value-color, var(--secondary-text-color));
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
    color: var(--sfc-header-value-color, var(--secondary-text-color));
  }

  .live-label {
    font-weight: 700;
    color: var(--sfc-header-label-color, var(--state-active-color, #fbbf24));
  }

  .live-week {
    font-size: 0.68rem;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-header-value-color, var(--secondary-text-color));
    opacity: 0.72;
  }

  .week-label {
    font-weight: 600;
    color: var(--sfc-header-label-color, var(--sfc-header-value-color, var(--secondary-text-color)));
  }
`;
