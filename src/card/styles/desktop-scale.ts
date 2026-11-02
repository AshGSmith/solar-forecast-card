import { css } from "lit";

export const desktopScaleStyles = css`
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
    :host {
      --sfc-value-font-size-default: calc(0.75rem * var(--dts-factor, 1));
      --sfc-value-unit-font-size-default: calc(0.60rem * var(--dts-factor, 1));
      --sfc-value-estimate-font-size-default: calc(0.58rem * var(--dts-factor, 1));
      --sfc-value-empty-font-size-default: calc(0.78rem * var(--dts-factor, 1));
      --sfc-day-name-font-size-default: calc(0.75rem * var(--dts-factor, 1));
      --sfc-day-date-font-size-default: calc(0.65rem * var(--dts-factor, 1));
      --sfc-two-day-note-font-size-default: calc(0.65rem * var(--dts-factor, 1));
      --sfc-array-label-font-size-default: calc(0.5rem * var(--dts-factor, 1));
    }

    /* Header */
    .header-title    { font-size: calc(1.05rem * var(--dts-factor, 1)); }
    .export-rate-row { font-size: calc(0.75rem * var(--dts-factor, 1)); }
    .live-row        { font-size: calc(0.75rem * var(--dts-factor, 1)); }
    .live-week       { font-size: calc(0.68rem * var(--dts-factor, 1)); }

    /* Inline hourly summary */
    .main-hourly-day   { font-size: calc(0.82rem * var(--dts-factor, 1)); }
    .main-hourly-total { font-size: calc(0.74rem * var(--dts-factor, 1)); }
  }
`;
