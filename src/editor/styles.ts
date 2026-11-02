import { css } from "lit";

export const editorStyles = css`
  :host {
    display: block;
  }

  .device-helper {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 4px 0 8px;
    padding: 0 4px;
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    opacity: 0.75;
  }

  .device-helper ha-icon {
    --mdc-icon-size: 14px;
    flex-shrink: 0;
  }

  ha-expansion-panel {
    display: block;
    margin-top: 8px;
    --expansion-panel-summary-padding: 0 8px;
    --expansion-panel-content-padding: 0 8px 8px;
  }

  /* ── Actual-array list ─────────────────────────────────── */

  .array-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 4px 0;
  }

  .array-row ha-selector {
    flex: 1;
    min-width: 0;
  }

  /* Nudge the delete button down so it sits beside the input,
     not the label heading above it. */
  .array-row > ha-icon-button {
    margin-top: 20px;
    flex-shrink: 0;
  }

  /* Wrapper: stacks the heading, input, and hint vertically */
  .array-label-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
  }

  .array-field-label {
    font-size: 0.63rem;
    font-weight: 500;
    color: var(--secondary-text-color);
    white-space: nowrap;
    line-height: 1.2;
  }

  .array-label-hint {
    font-size: 0.58rem;
    color: var(--secondary-text-color);
    opacity: 0.65;
    white-space: nowrap;
    text-align: center;
    line-height: 1.2;
  }

  .array-label-input {
    width: 3.2rem;
    border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
    border-radius: 4px;
    padding: 6px 6px;
    font-size: 0.9rem;
    text-align: center;
    background: var(--secondary-background-color, transparent);
    color: var(--primary-text-color);
    outline: none;
    box-sizing: border-box;
  }

  .array-label-input:focus {
    border-color: var(--primary-color);
  }

  .add-array-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 4px 2px;
    cursor: pointer;
    color: var(--primary-color);
    font-size: 0.85rem;
    font-weight: 500;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .add-array-btn:hover { opacity: 0.8; }

  .add-array-btn ha-icon {
    --mdc-icon-size: 18px;
  }
`;
