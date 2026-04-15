# Solar Forecast Card

A Home Assistant Lovelace custom card for displaying solar energy forecast data.

## Installation

### HACS (recommended)

1. Open HACS in your Home Assistant instance.
2. Go to **Frontend** → click the **+** button.
3. Search for **Solar Forecast Card** and install it.
4. Reload your browser.

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
title: Solar Forecast      # optional, defaults to "Solar Forecast"
entity: sensor.solar_power # optional HA entity to display
```

### Options

| Option   | Type   | Required | Description                         |
|----------|--------|----------|-------------------------------------|
| `type`   | string | yes      | `custom:solar-forecast-card`        |
| `title`  | string | no       | Card title (default: Solar Forecast)|
| `entity` | string | no       | HA entity ID to display             |

## Development

```bash
npm install
npm run build   # produces dist/solar-forecast-card.js
npm run dev     # watch mode
```

## License

MIT
