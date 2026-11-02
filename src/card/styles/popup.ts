import { css } from "lit";
import { POPUP_CLOSE_MS } from "../const.js";

export const popupStyles = css`
  /* ════════════════════════════════════════════════════════
     POPUP
     ════════════════════════════════════════════════════════ */

  .popup-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-sizing: border-box;
    /* enter / exit */
    opacity: 0;
    pointer-events: none;
    transition: opacity ${POPUP_CLOSE_MS}ms ease;
  }

  .popup-overlay.visible {
    opacity: 1;
    pointer-events: auto;
  }

  /* ── Panel ───────────────────────────────────────────── */

  .popup-panel {
    position: relative;
    background: var(--sfc-popup-background, var(--ha-card-background, var(--card-background-color, #1c1c1e)));
    border-radius: var(--sfc-popup-border-radius, 20px);
    color: var(--sfc-popup-text-color, var(--primary-text-color));
    width: 100%;
    max-width: 400px;
    max-height: min(520px, calc(100dvh - 32px));
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow:
      0 32px 72px rgba(0, 0, 0, 0.32),
      0 8px 24px rgba(0, 0, 0, 0.18);
    /* enter: slide up + scale in */
    transform: translateY(32px) scale(0.95);
    opacity: 0;
    transition:
      transform ${POPUP_CLOSE_MS + 40}ms cubic-bezier(0.34, 1.28, 0.64, 1),
      opacity ${POPUP_CLOSE_MS}ms ease;
    will-change: transform, opacity;
  }

  .popup-overlay.visible .popup-panel {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  /* ── Header ──────────────────────────────────────────── */

  .popup-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 18px 16px 14px 20px;
    gap: 8px;
    border-bottom: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
    flex-shrink: 0;
  }

  .popup-title {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }

  .popup-day-name {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--sfc-popup-text-color, var(--primary-text-color));
    line-height: 1.2;
  }

  .popup-subtitle {
    font-size: 0.82rem;
    color: var(--secondary-text-color);
    display: flex;
    align-items: baseline;
    gap: 4px;
    flex-wrap: wrap;
  }

  .popup-total-kwh {
    font-size: 0.95rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: var(--sfc-popup-accent-color, var(--warning-color, #f59e0b));
  }

  .popup-close {
    flex-shrink: 0;
    background: var(--secondary-background-color, rgba(128, 128, 128, 0.10));
    border: none;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s, color 0.15s;
    margin-top: -2px;
  }

  .popup-close:hover {
    background: var(--divider-color, rgba(128, 128, 128, 0.18));
    color: var(--sfc-popup-text-color, var(--primary-text-color));
  }

  .popup-close ha-icon {
    --mdc-icon-size: 18px;
  }
`;
