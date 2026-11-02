import { localize } from "./localize.js";

// Side-effect imports: register <solar-forecast-card> and <solar-forecast-card-editor>
import "./card/card.js";
import "./editor/editor.js";

declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string; preview?: boolean }>;
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "solar-forecast-card",
  name: localize("en", "customCard.name"),
  description: localize("en", "customCard.description"),
  preview: false,
});
