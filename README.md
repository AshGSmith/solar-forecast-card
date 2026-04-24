# Solar Forecast Card

A Home Assistant Lovelace custom card for displaying solar energy forecast data supplied by any forecasting integration, with simple setup for use with the Volcast, Solcast, Forecast.Solar, and Open-Meteo Solar Forecast integrations by selecting the relevant device in the card configuration to allow the auto-mapping of daily forecast entities.

## Screenshots

<img src="https://raw.githubusercontent.com/AshGSmith/solar-forecast-card/main/docs/screenshots/v1.3.0/card-main.jpg" alt="Solar Forecast Card — main view" width="600">

<img src="https://raw.githubusercontent.com/AshGSmith/solar-forecast-card/main/docs/screenshots/v1.3.0/card-popup.jpg" alt="Solar Forecast Card — hourly popup" width="360">

## Installation

### HACS (Recommended)
#### Install via HACS

1. Open HACS in your Home Assistant instance.
2. Click on the **⋮** button on the top right and select **Custom repositories***
3. Enter the below in the **Repository** field
```url
https://github.com/AshGSmith/solar-forecast-card
```
4. Select **Dashboard** as the **Type** and Add.
5. Search for **Solar Forecast Card** and install it.
6. Reload your browser.

### Manual

1. Download `solar-forecast-card.js` from the [latest release](../../releases/latest).
2. Copy it to your `config/www/` folder (e.g. `config/www/solar-forecast-card.js`).
3. In Home Assistant, go to **Settings → Dashboards → Resources** and add:
   - URL: `/local/solar-forecast-card.js`
   - Resource type: **JavaScript module**
4. Reload your browser.

## Configuration

Add the card to a dashboard using the card picker, or add it manually in YAML:

```yaml
type: custom:solar-forecast-card
title: Solar Forecast          # optional — defaults to "Solar Forecast"
icon: mdi:solar-power          # optional — defaults to mdi:solar-power
show_header: true              # optional — defaults to true
display_estimate10: false      # optional — Solcast only, shows P10 forecast values
device_id: <your_device_id>    # optional — auto-detects forecast entities
forecast_entities:
  - sensor.forecast_today
  - sensor.forecast_tomorrow
  - sensor.forecast_day_3
  - sensor.forecast_day_4
  - sensor.forecast_day_5
  - sensor.forecast_day_6
  - sensor.forecast_day_7
live_power_entity: sensor.solar_power_now
today_actual_entity: sensor.solar_energy_today
export_rate_entity: sensor.current_export_rate
next_hour_entity: sensor.solar_forecast_next_hour
remaining_today_entity: sensor.solar_forecast_remaining_today
actual_arrays:
  - entity: sensor.solar_east_array_energy_today
    label: E
  - entity: sensor.solar_west_array_energy_today
    label: W
inverter_max_kw: 5.0
solar_max_kwp: 4.2
date_format: DD/MM
time_format: 24h
low_threshold: 10
high_threshold: 30
```

### Options

#### Card

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `type` | string | yes | — | Must be `custom:solar-forecast-card` |
| `title` | string | no | `Solar Forecast` | Text displayed in the card header |
| `icon` | string | no | `mdi:solar-power` | MDI icon shown to the left of the title (e.g. `mdi:solar-power-variant`) |
| `show_header` | boolean | no | `true` | Show or hide the card header, including the title and live data badge |
| `display_estimate10` | boolean | no | `false` | When enabled with the Solcast integration, shows a secondary P10 (10th-percentile) forecast value below each day's main forecast total |

#### Device & Entities

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `device_id` | string | no | — | Home Assistant device ID. When set, forecast entities are auto-detected from the device. Supports Volcast, Solcast, Forecast.Solar, and Open-Meteo Solar Forecast integrations |
| `forecast_entities` | list | yes | — | Exactly 7 sensor entity IDs representing Day 1 (today) through Day 7. Each sensor must expose a numeric state (kWh) and, for hourly popup support, an `hours` or `wh_period` attribute |

#### Live Data

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `live_power_entity` | string | no | — | Sensor reporting current solar output. Accepts W or kW (detected via `unit_of_measurement`). Displayed in the header as `LIVE: X W` or `X.X kW` |
| `today_actual_entity` | string | no | — | Sensor reporting total energy generated today (kWh or Wh). Used as the actual generation source when no `actual_arrays` are configured. Shown in the header and used to render the actual generation bar on today's column |
| `next_hour_entity` | string | no | — | Sensor reporting forecast generation for the next full hour (kWh or Wh). When set, overrides the auto-derived `+1HR` header value. Auto-populated from the Solcast and Open-Meteo integrations where available |
| `remaining_today_entity` | string | no | — | Sensor reporting remaining forecast generation for today (kWh or Wh). When set, overrides the auto-derived `LEFT` header value. Auto-populated from the forecast.solar and Open-Meteo integrations |
| `export_rate_entity` | string | no | — | Sensor reporting the current energy export rate. When set, displays `EXPORT RATE: X unit` in the card header below the title |

#### Actual Generation Arrays

The `actual_arrays` option lets you configure individual per-array energy sensors to display a proportional stacked breakdown on today's actual-generation bar. When two or more arrays are producing, the bar is divided into coloured segments sized in proportion to each array's output. The card header and the hourly popup both show a per-array breakdown alongside the overall total.

This field is entirely optional. When omitted, the card behaves exactly as in previous versions.

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `actual_arrays` | list | no | — | List of per-array sensor entries. When configured, array totals are always used in preference to `today_actual_entity` for the actual generation display |

Each entry in `actual_arrays`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `entity` | string | yes | Sensor entity reporting energy generated by this array today. Accepts kWh or Wh (detected via `unit_of_measurement`) |
| `label` | string | yes | Single character shown inside the segment on the bar and in the popup header (e.g. `N`, `S`, `E`, `W`) |

**Example:**

```yaml
actual_arrays:
  - entity: sensor.solar_east_array_energy_today
    label: E
  - entity: sensor.solar_west_array_energy_today
    label: W
```

**Behaviour notes:**

- When arrays are configured, their sum is used as the actual generation total in the card header and bar. `today_actual_entity` is not used for display when arrays are present.
- The stacked bar activates when 2 or more arrays are producing. A single active array uses the standard single-colour bar.
- If all array sensors read zero (e.g. pre-sunrise) or are unavailable, the bar falls back to `today_actual_entity` for its height. The header will show `0.0 kWh` from the arrays.
- Each segment is drawn from an 8-slot colour palette (purple, blue, indigo, slate-blue, violet, emerald, periwinkle, steel) and shows its label when the segment is tall enough to fit it.
- Arrays are configured manually in the visual editor via the **Actual Generation Arrays** expansion panel.

#### System

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `inverter_max_kw` | number | no | — | Inverter maximum continuous output in kW. Used as the ceiling for hourly popup bar scaling when the solar array is at or above this value |
| `solar_max_kwp` | number | no | — | Solar array peak capacity in kWp. Used as the hourly graph ceiling when smaller than `inverter_max_kw`. If neither system value is set, bars scale relative to the day's peak hour |

#### Display

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `date_format` | string | no | `DD/MM` | Date format for day column labels. `DD/MM` (e.g. 15/04) or `MM/DD` (e.g. 04/15) |
| `time_format` | string | no | `24h` | Time format used in the hourly forecast popup. `24h` (e.g. `17:00`) or `12h` (e.g. `5pm`) |

#### Colour Thresholds

Bar colours change based on each day's forecast total. When neither threshold is set all bars use the default amber colour.

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `low_threshold` | number | no | — | Days forecast below this value (kWh) are shown in a soft red/coral colour |
| `high_threshold` | number | no | — | Days forecast above this value (kWh) are shown in green |

## Support
This card is provided completely free of charge, but if you want to support me or just say thanks by buying me a coffee, that would mean so much!

<a href="https://www.buymeacoffee.com/AshGSmith" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me a Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

MIT
