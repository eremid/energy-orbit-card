# Energy Orbit Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/release/eremid/energy-orbit-card.svg)](https://github.com/eremid/energy-orbit-card/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A custom Lovelace card for Home Assistant to monitor your home energy flows through animated concentric rings.
Designed for setups with solar panels, a home battery (perfect for Zendure) and a grid connection (EDF Tempo supported).

![Energy Orbit Card Preview](https://raw.githubusercontent.com/eremid/energy-orbit-card/main/preview.png)

## ✨ Features

- 📊 **Concentric Orbits** — Visualize Grid (Import/Export), Solar Production and Battery level at a glance.
- 🏷️ **Dynamic Labels** — Integrated labels directly inside the rings showing current state (IMPORT, EXPORT, CHARGING, DISCHARGING).
- 🔄 **Smart Directions** — All gauges start at the top (12 o'clock). Positive flows (Import, Discharge, Production) go clockwise, while negative flows (Export, Charge) go counter-clockwise.
- 🌍 **Automatic i18n** — Detects your Home Assistant profile language automatically (English, French, Spanish, German).
- ⚙️ **Visual UI Editor** — Configure all entities, max values, thresholds and options directly from the Lovelace card editor. No YAML needed.
- 🌓 **Theme-aware** — Borders, shadows and text colors adapt natively to your dashboard Light or Dark theme.
- 🔋 **Zendure Support** — Includes a built-in dropdown to switch your Zendure battery mode (Priority Charge, Priority Discharge, etc.) directly from the card.
- 🔴 **EDF Tempo Color** — Displays the current day Tempo color (Blue, White, Red) as an indicator.
- 📱 **Responsive** — Mobile-optimized layout with a large, clear orbit display.
- 🌬️ **Breathing Animation** — Optional subtle animation when data is live.

## 📐 Orbit Logic & Directions

All rings start at the **top (12 o'clock)** for a cleaner, unified look.

| Ring | Flow Type | Direction | Label |
|---|---|---|---|
| **Outer** | Battery Level (%) | Clockwise | BATTERY |
| **Middle 1** | Grid Power (W) | Clockwise (Import) / Counter-Clockwise (Export) | IMPORT / EXPORT |
| **Middle 2** | Battery Power (W) | Clockwise (Discharge) / Counter-Clockwise (Charge) | DISCHARGING / CHARGING |
| **Inner** | Solar Power (W) | Clockwise | PRODUCTION |

![Energy Orbit Card Discharge Mode](https://raw.githubusercontent.com/eremid/energy-orbit-card/main/discharge-mode.png)
*Example: Card in Discharge mode (Battery power flowing clockwise).*

## 📦 Installation

### Via HACS (Recommended)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=eremid&repository=energy-orbit-card&category=plugin)

*Note: If the button above doesn't work, you can add it manually:*
1. Open **HACS** in your Home Assistant.
2. Click the 3 dots in the top right corner → **Custom repositories**.
3. Paste the URL of this repository: `https://github.com/eremid/energy-orbit-card`
4. Select the **Lovelace** category.
5. Click **Add**, then **Download**.
6. Hard-refresh your browser (Ctrl+F5).

### Manual Installation

1. Download `energy-orbit-card.js` from the latest [Release](https://github.com/eremid/energy-orbit-card/releases).
2. Copy it to `www/community/energy-orbit-card/energy-orbit-card.js` in your Home Assistant config folder.
3. Go to **Settings → Dashboards → Resources** and add:
   - URL: `/local/community/energy-orbit-card/energy-orbit-card.js`
   - Type: **JavaScript module**

## 🛠 Configuration

The card includes a full visual editor. Simply add the card from the Lovelace UI and configure it without writing any YAML.

For advanced users, here is a full YAML configuration example:

```yaml
type: custom:energy-orbit-card

# --- Main Entities ---
grid_entity: sensor.grid_power            # Required – Negative = Export, Positive = Import
solar_entities:
  - sensor.solar_roof_power
  - sensor.solar_garden_power
battery_entities:
  - sensor.zendure_battery_level          # In %
battery_power_entities:
  - sensor.zendure_battery_power          # In W (negative = charging, positive = discharging)
operation_state_entity: sensor.zendure_operation_state

# --- Scale Settings ---
grid_max: 6000                            # Max grid power (W)
solar_max: 3000                           # Max solar power (W)
battery_max: 100                          # Max battery level (%)
battery_power_max: 2000                   # Max battery charge/discharge power (W)
battery_capacity_wh: 1920                 # Battery total capacity (Wh) – used for time estimate

# --- Alert Thresholds ---
grid_warning_threshold: 4500              # Warning color threshold (W)
grid_alert_threshold: 5500                # Critical color threshold (W)

# --- Zendure & Tempo ---
zendure_mode_entity: select.zendure_smart_mode
tempo_today_entity: sensor.rte_tempo_current_color
show_zendure_mode: true
show_tempo: true

# --- Display Options ---
bidirectional_mode: bidirectional         # bidirectional | normal
initial_battery_mode: percent             # percent | power
initial_solar_mode: total                 # total | detail
enable_breathing: true
gauge_opacity: 0.85
mobile_gauge_size: 160
```

## ⚙️ Options Reference

| Option | Default | Description |
|---|---|---|
| `grid_entity` | *required* | Sensor entity for grid power (W). Negative = export. |
| `solar_entities` | `[]` | List of sensor entities for solar production (W). |
| `battery_entities` | `[]` | List of sensor entities for battery level (%). |
| `battery_power_entities` | `[]` | List of sensor entities for battery charge/discharge power (W). |
| `operation_state_entity` | — | Entity for battery state (`charging`, `discharging`, `idle`, `off`). |
| `zendure_mode_entity` | — | `select` entity to control the Zendure smart mode. |
| `tempo_today_entity` | — | Sensor for EDF Tempo color today. |
| `grid_max` | `6000` | Maximum grid power displayed on orbit (W). |
| `solar_max` | `5000` | Maximum solar power displayed on orbit (W). |
| `battery_max` | `100` | Maximum battery level displayed on orbit (%). |
| `battery_power_max` | `2400` | Maximum battery power displayed on orbit (W). |
| `battery_capacity_wh` | `1920` | Total battery capacity in Wh (used for time-to-full/empty estimate). |
| `grid_warning_threshold` | `6000` | Power (W) above which the grid orbit turns orange. |
| `grid_alert_threshold` | `9000` | Power (W) above which the grid orbit turns red. |
| `bidirectional_mode` | `bidirectional` | `bidirectional` or `normal`. |
| `initial_battery_mode` | `percent` | Default battery display: `percent` or `power`. Click on the card to toggle. |
| `initial_solar_mode` | `total` | Default solar display: `total` or `detail`. Click on the card to toggle. |
| `show_zendure_mode` | `true` | Show or hide the Zendure mode selector. |
| `show_tempo` | `true` | Show or hide the EDF Tempo indicator. |
| `enable_breathing` | `true` | Enable the subtle breathing animation. |
| `gauge_opacity` | `0.8` | Opacity of orbit tracks (0 to 1). |
| `mobile_gauge_size` | `160` | Orbit SVG size on mobile (px). |

## 🌍 Supported Languages

The card automatically switches language based on your Home Assistant user profile setting.

| Code | Language |
|---|---|
| `en` | English |
| `fr` | French |
| `es` | Spanish |
| `de` | German |

Want to add your language? Contributions are welcome — just edit the `eocTranslations` object at the top of `energy-orbit-card.js`!

## 🤝 Contributing

Contributions, bug reports and feature requests are welcome!

This project uses [release-please](https://github.com/googleapis/release-please-action) for automated releases. Please use [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages:

- `feat: add Italian translation` → bumps minor version
- `fix: grid color not updating` → bumps patch version
- `feat!: breaking change in config` → bumps major version

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

*Made with ❤️ for the Home Assistant community.*
