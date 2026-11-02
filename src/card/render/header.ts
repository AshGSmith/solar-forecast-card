import { html, nothing } from "lit";
import { computeHeaderStats } from "../../data/header-stats.js";
import type { HomeAssistant, SolarForecastCardConfig } from "../../types.js";
import type { Formatter } from "../format.js";

function renderExportRate(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig,
  fmt: Formatter
) {
  if (!cfg.export_rate_entity) return nothing;

  const st = hass?.states[cfg.export_rate_entity];
  if (!st) return nothing;

  // Treat unavailable / unknown / non-numeric states as absent — hide cleanly
  const num = parseFloat(st.state);
  if (!isFinite(num)) return nothing;

  const unit = (st.attributes?.unit_of_measurement as string | undefined) ?? "";

  return html`
    <div class="export-rate-row">
      <span class="live-label">${fmt.t("card.labels.exportRate")}</span>
      <span>${st.state}${unit ? ` ${unit}` : ""}</span>
    </div>
  `;
}

function renderThresholds(low: number | undefined, high: number | undefined, fmt: Formatter) {
  const unit = fmt.t("card.units.kilowattHours");
  return html`
    <div class="live-week">
      ${low !== undefined ? html`
        <span class="week-label">${fmt.t("card.labels.low")}</span>
        ${fmt.number(low, 1)} ${unit}
      ` : nothing}
      ${low !== undefined && high !== undefined ? " | " : nothing}
      ${high !== undefined ? html`
        <span class="week-label">${fmt.t("card.labels.high")}</span>
        ${fmt.number(high, 1)} ${unit}
      ` : nothing}
    </div>
  `;
}

function renderLive(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig,
  fmt: Formatter
) {
  const {
    powerW,
    actualKwh,
    nextHourKwh,
    forecastLeftKwh,
    week,
    lowThresholdKwh,
    highThresholdKwh,
  } = computeHeaderStats(hass, cfg);

  const hasPower  = powerW !== null;
  const hasActual = actualKwh !== null;
  const hasForecastSummary = nextHourKwh !== null || forecastLeftKwh !== null;

  // Thresholds only mean something next to the daily bars they colour.
  const hasThresholds = cfg.main_view === "daily"
    && (lowThresholdKwh !== undefined || highThresholdKwh !== undefined);

  if (!hasPower && !hasActual && !week && !hasForecastSummary && !hasThresholds) return nothing;

  const liveParts: string[] = [];
  if (hasPower)  liveParts.push(fmt.power(powerW));
  if (hasActual) liveParts.push(`${fmt.number(actualKwh, 1)} ${fmt.t("card.units.kilowattHours")}`);

  return html`
    <div class="header-live">
      ${hasPower || hasActual ? html`
        <div class="live-row">
          <span class="live-label">${fmt.t("card.labels.live")}</span>
          <span>${liveParts.join(" | ")}</span>
        </div>
      ` : nothing}
      ${hasForecastSummary ? html`
        <div class="live-row">
          ${nextHourKwh !== null ? html`
            <span class="live-label">${fmt.t("card.labels.nextHour")}</span>
            <span>${fmt.kwh(nextHourKwh)}</span>
          ` : nothing}
          ${nextHourKwh !== null && forecastLeftKwh !== null ? html`
            <span style="opacity:0.35">|</span>
          ` : nothing}
          ${forecastLeftKwh !== null ? html`
            <span class="live-label">${fmt.t("card.labels.left")}</span>
            <span>${fmt.kwh(forecastLeftKwh)}</span>
          ` : nothing}
        </div>
      ` : nothing}
      ${week ? html`
        <div class="live-week">
          <span class="week-label">${fmt.t("card.labels.week")}</span>
          ${fmt.number(week.totalKwh, 1)} ${fmt.t("card.units.kilowattHours")} | <span class="week-label">${fmt.t("card.labels.avg")}</span> ${fmt.number(week.avgKwh, 1)} ${fmt.t("card.units.kilowattHoursPerDay")}
        </div>
      ` : nothing}
      ${hasThresholds ? renderThresholds(lowThresholdKwh, highThresholdKwh, fmt) : nothing}
    </div>
  `;
}

export function renderHeader(
  hass: HomeAssistant | undefined,
  cfg: SolarForecastCardConfig,
  fmt: Formatter
) {
  const title = cfg.title ?? fmt.t("card.defaultTitle");
  const icon  = cfg.icon  ?? "mdi:solar-power";

  return html`
    <div part="header" class="card-header">
      <div class="header-left">
        <div part="title" class="header-title">
          <ha-icon icon=${icon}></ha-icon>
          ${title}
        </div>
        ${renderExportRate(hass, cfg, fmt)}
      </div>
      ${renderLive(hass, cfg, fmt)}
    </div>
  `;
}
