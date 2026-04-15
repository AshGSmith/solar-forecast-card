# Solar Forecast Card

A Home Assistant Lovelace custom card for displaying solar energy forecast data supplied by any forcasting integration, but with simple set up for use with the Volcast integration by selecting the Volcast device to allow the card to auto map entities. 

## Installation

### HACS (Recommended)
#### Install via HACS

Click below to add this repository to HACS:

[![Add to Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=AshGSmith&repository=solar-forecast-card)

#### HACS Custom Repository Manual Steps
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
title: Volcast Forecast      # optional, defaults to "Solar Forecast"
show_header: true
device_id: 520b8e8a057fa9e963562e31923056a5
forecast_entities:
  - sensor.volcast_solar_forecast_energy_forecast_today
  - sensor.volcast_solar_forecast_energy_forecast_tomorrow
  - sensor.volcast_solar_forecast_energy_forecast_day_3
  - sensor.volcast_solar_forecast_energy_forecast_day_4
  - sensor.volcast_solar_forecast_energy_forecast_day_5
  - sensor.volcast_solar_forecast_energy_forecast_day_6
  - sensor.volcast_solar_forecast_energy_forecast_day_7
live_power_entity: sensor.solar_power_generation
today_actual_entity: sensor.solar_generated_today
date_format: DD/MM
time_format: 24h
low_threshold: 10
high_threshold: 30
```

### Options

| Option   | Type   | Required | Description                         |
|----------|--------|----------|-------------------------------------|
| `type`   | string | yes      | `custom:solar-forecast-card`        |
| `title`  | string | no       | Card title (default: Solar Forecast)|
| `entity` | string | no       | HA entity ID to display             |

## License

MIT
