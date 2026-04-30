import en from "./locales/en.json";
import fr from "./locales/fr.json";
import type { HomeAssistant, SolarForecastCardConfig } from "./types.js";

export type LocaleKey = "en" | "fr";
type LocaleTree = Record<string, unknown>;

const LOCALES: Record<LocaleKey, LocaleTree> = { en, fr };
export const LANGUAGE_OPTIONS: LocaleKey[] = ["en", "fr"];

function normaliseLanguage(value: unknown): LocaleKey {
  if (typeof value !== "string" || value.trim() === "") return "en";
  const base = value.toLowerCase().replace("_", "-").split("-")[0];
  return base in LOCALES ? (base as LocaleKey) : "en";
}

export function resolveLanguage(
  hass: HomeAssistant | undefined,
  config: Pick<SolarForecastCardConfig, "language_override"> | undefined
): LocaleKey {
  if (config?.language_override && config.language_override !== "auto") {
    return normaliseLanguage(config.language_override);
  }

  const localeLanguage =
    hass?.locale && typeof hass.locale === "object" && "language" in hass.locale
      ? (hass.locale as { language?: unknown }).language
      : undefined;

  return normaliseLanguage(localeLanguage ?? hass?.language);
}

function readPath(tree: LocaleTree, key: string): unknown {
  return key.split(".").reduce<unknown>((node, part) => {
    if (node && typeof node === "object" && part in node) {
      return (node as Record<string, unknown>)[part];
    }
    return undefined;
  }, tree);
}

export function localize(
  language: LocaleKey,
  key: string,
  vars?: Record<string, string | number>
): string {
  const translated = readPath(LOCALES[language] ?? en, key);
  const fallback = readPath(en, key);
  const raw = typeof translated === "string"
    ? translated
    : typeof fallback === "string"
      ? fallback
      : key;

  return vars
    ? raw.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`))
    : raw;
}
