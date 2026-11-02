import { css } from "lit";

export const baseStyles = css`
  :host {
    display: block;
    --sfc-card-padding-default: 16px 12px 14px;
    --sfc-value-font-size-default: 0.75rem;
    --sfc-value-unit-font-size-default: 0.60rem;
    --sfc-value-estimate-font-size-default: 0.58rem;
    --sfc-value-empty-font-size-default: 0.78rem;
    --sfc-day-name-font-size-default: 0.75rem;
    --sfc-day-date-font-size-default: 0.65rem;
    --sfc-two-day-note-font-size-default: 0.65rem;
    --sfc-array-label-font-size-default: 0.5rem;
  }

  ha-card {
    background: var(--sfc-card-background, var(--ha-card-background, var(--card-background-color, var(--primary-background-color, #fff))));
    border-radius: var(--sfc-card-border-radius, var(--ha-card-border-radius, 12px));
    box-shadow: var(--sfc-card-box-shadow, var(--ha-card-box-shadow, none));
    padding: var(--sfc-card-padding, var(--sfc-card-padding-default));
    overflow: hidden;
    box-sizing: border-box;
  }
`;

export const placeholderStyles = css`
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
`;
