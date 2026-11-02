import { localize, resolveLanguage, type LocaleKey } from "../localize.js";
import type { HomeAssistant } from "../types.js";

const DAY_KEYS = [
  "sunday_short",
  "monday_short",
  "tuesday_short",
  "wednesday_short",
  "thursday_short",
  "friday_short",
  "saturday_short",
] as const;

/** Translation and locale-aware formatting for one render pass. */
export class Formatter {
  private readonly _hass?: HomeAssistant;
  private readonly _language: LocaleKey;

  constructor(hass: HomeAssistant | undefined) {
    this._hass = hass;
    this._language = resolveLanguage(hass);
  }

  public t(key: string, vars?: Record<string, string | number>): string {
    return localize(this._language, key, vars);
  }

  public number(value: number, minimumFractionDigits: number, maximumFractionDigits = minimumFractionDigits): string {
    return new Intl.NumberFormat(this._language, {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(value);
  }

  public power(watts: number): string {
    if (watts < 10)   return `0 ${this.t("card.units.watts")}`;
    if (watts < 1000) return `${Math.round(watts)} ${this.t("card.units.watts")}`;
    return `${this.number(watts / 1000, 1)} ${this.t("card.units.kilowatts")}`;
  }

  /**
   * Format an energy value compactly: 2 dp below 1 kWh, 1 dp above.
   * Guards against non-finite input — should never occur in normal use, but
   * prevents "NaN kWh" / "Infinity kWh" from appearing in the header.
   */
  public kwh(kwh: number): string {
    if (!isFinite(kwh) || kwh < 0) return `0.00 ${this.t("card.units.kilowattHours")}`;
    return `${kwh < 1 ? this.number(kwh, 2) : this.number(kwh, 1)} ${this.t("card.units.kilowattHours")}`;
  }

  public dayLabel(row: { dayIndex: number; date: Date }): string {
    if (row.dayIndex === 1) return this.t("day.today");
    if (row.dayIndex === 2) return this.t("day.tomorrow");
    return this.t(`day.${DAY_KEYS[row.date.getDay()]}`);
  }

  public dateLabel(date: Date): string {
    try {
      return new Intl.DateTimeFormat(this._dateLocale(), {
        day: "2-digit",
        month: "2-digit",
      }).format(date);
    } catch {
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      return `${d}/${m}`;
    }
  }

  public fullDateLabel(date: Date, isToday: boolean): string {
    const weekday = isToday ? this.t("card.days.today") : date.toLocaleDateString(this._language, { weekday: "long" });
    const dt = date.toLocaleDateString(this._language, { day: "numeric", month: "long" });
    return `${weekday} · ${dt}`;
  }

  public hourLabel(hour: number): string {
    const date = new Date(2000, 0, 1, hour, 0, 0, 0);
    const hour12 = this._hour12();
    try {
      return new Intl.DateTimeFormat(this._dateLocale(), {
        hour: "numeric",
        minute: "2-digit",
        ...(hour12 === undefined ? {} : { hour12 }),
      }).format(date);
    } catch {
      return String(hour).padStart(2, "0") + ":00";
    }
  }

  private _dateLocale(): string {
    const hass = this._hass;
    const localeLanguage =
      hass?.locale && typeof hass.locale === "object" && "language" in hass.locale
        ? hass.locale.language
        : undefined;

    if (typeof localeLanguage === "string" && localeLanguage.trim() !== "") {
      return localeLanguage.replace("_", "-");
    }

    if (typeof hass?.language === "string" && hass.language.trim() !== "") {
      return hass.language.replace("_", "-");
    }

    return "en-GB";
  }

  private _hour12(): boolean | undefined {
    const timeFormat = this._hass?.locale?.time_format;
    if (typeof timeFormat !== "string") return undefined;
    const normalized = timeFormat.toLowerCase().replace(/[-_\s]/g, "");
    if (normalized === "12" || normalized === "12h" || normalized === "ampm") return true;
    if (normalized === "24" || normalized === "24h" || normalized === "twentyfour") return false;
    return undefined;
  }
}
