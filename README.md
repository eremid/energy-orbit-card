# Energy Orbit Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/release/eremid/energy-orbit-card.svg)](https://github.com/eremid/energy-orbit-card/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A custom Lovelace card for Home Assistant to monitor your home energy flows through animated concentric rings.
Designed for setups with solar panels, a home battery (perfect for Zendure) and a grid connection (EDF Tempo supported).

![Energy Orbit Card](https://raw.githubusercontent.com/eremid/energy-orbit-card/main/energy-orbit-card.png)

## ✨ Features

- 📊 **Concentric Orbits** — Visualize Grid (Import/Export), Solar Production and Battery level at a glance.
- 🏷️ **Dynamic Labels** — Integrated labels directly inside the rings showing current state (IMPORT, EXPORT, CHARGING, DISCHARGING).
- 🔄 **Smart Directions** — All gauges start at the top (12 o'clock). Positive flows (Import, Discharge, Production) go clockwise, while negative flows (Export, Charge) go counter-clockwise.
- 🌍 **Automatic i18n** — Detects your Home Assistant profile language automatically (English, French, Spanish, German).
- ⚙️ **Visual UI Editor** — Configure all entities, max values, thresholds, colors and options directly from the Lovelace card editor. No YAML needed.
- 🎨 **Color Themes** — Choose from built-in color themes (Default, Lavender, Candy, Neon, Sunset, Nostromo) or customize individual orbit colors with a color picker. Each theme includes Tempo mode color variants.
- 🌓 **Theme-aware** — Borders, shadows and text colors adapt natively to your dashboard Light or Dark theme.
- 🔋 **Zendure Support** — Includes a built-in dropdown to switch your Zendure battery mode (Priority Charge, Priority Discharge, etc.) directly from the card.
- 🔴 **EDF Tempo Color** — Displays the current day Tempo color (Blue, White, Red) as an indicator.
- 📱 **Responsive** — Mobile-optimized layout with a large, clear orbit display.
- 🌬️ **Breathing Animation** — Optional subtle animation when data is live.
- 💾 **Smart Persistence** — Remembers your last display choices (Percent vs Power vs Minimal for battery, Total vs Detail for solar) per device using `localStorage`.

## 📐 Orbit Logic & Directions

All rings start at the **top (12 o'clock)** for a cleaner, unified look.

| Ring | Flow Type | Direction | Label |
|---|---|---|---|
| **Outer** | Battery Level (%) | Clockwise | BATTERY |
| **Middle 1** | Grid Power (W) | Clockwise (Import) / Counter-Clockwise (Export) | IMPORT / EXPORT |
| **Middle 2** | Battery Power (W) | Clockwise (Discharge) / Counter-Clockwise (Charge) | DISCHARGING / CHARGING |
| **Inner** | Solar Power (W) | Clockwise | PRODUCTION |

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
battery_power_max: 2000                   # Max fixed battery charge/discharge power (W)
battery_power_max_entity: sensor.limit    # Optional - Dynamic max power entity
battery_capacity_wh: 1920                 # Battery total capacity (Wh) – used for time estimate

# --- Alert Thresholds ---
grid_warning_threshold: 4500              # Warning color threshold (W)
grid_alert_threshold: 5500                # Critical color threshold (W)

# --- Zendure & Tempo ---
zendure_mode_entity: select.zendure_smart_mode
tempo_today_entity: sensor.rte_tempo_current_color
tempo_tomorrow_entity: sensor.rte_tempo_next_color
show_zendure_mode: true
show_tempo: true

# --- Colors ---
colors:
  color_theme: nostromo                   # default | lavender | candy | neon | sunset | nostromo
  grid_import: '#00ff41'                  # Override individual colors (hex)
  grid_export: '#00e5ff'
  solar: '#ccaa00'
  battery: '#ff8c00'
  battery_charge: '#b2ff59'
  battery_discharge: '#ff3333'
  tempo_blue: '#00e5ff'                   # Tempo mode colors per theme
  tempo_white: '#b2ff59'
  tempo_red: '#ff3333'

# --- Display Options ---
bidirectional_mode: bidirectional         # bidirectional | normal
enable_breathing: true
gauge_opacity: 0.85
show_ring_labels: true
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
| `tempo_tomorrow_entity` | — | Sensor for EDF Tempo color tomorrow. |
| `grid_max` | `6000` | Maximum grid power displayed on orbit (W). |
| `solar_max` | `5000` | Maximum solar power displayed on orbit (W). |
| `battery_max` | `100` | Maximum battery level displayed on orbit (%). |
| `battery_power_max` | `2400` | Maximum fixed battery power displayed on orbit (W). |
| `battery_power_max_entity` | — | Dynamic entity for battery power max (priority over `battery_power_max`). |
| `battery_capacity_wh` | `1920` | Total battery capacity in Wh (used for time-to-full/empty estimate). |
| `grid_warning_threshold` | `6000` | Power (W) above which the grid orbit turns orange. |
| `grid_alert_threshold` | `9000` | Power (W) above which the grid orbit turns red. |
| `bidirectional_mode` | `bidirectional` | Orbit style: `bidirectional` (dynamic) or `normal` (standard). |
| `show_zendure_mode` | `true` | Show or hide the Zendure mode selector. |
| `show_tempo` | `true` | Show or hide the EDF Tempo indicator. |
| `enable_breathing` | `true` | Enable the subtle breathing animation. |
| `gauge_opacity` | `0.8` | Opacity of orbit tracks (0 to 1). |
| `show_ring_labels` | `false` | Show text labels inside the orbit rings. |

### Color Options

Colors are configured under the `colors` key. You can select a theme preset or override individual colors.

| Option | Default | Description |
|---|---|---|
| `colors.color_theme` | `default` | Color theme preset: `default`, `lavender`, `candy`, `neon`, `sunset`, `nostromo`. |
| `colors.grid_import` | `#3498db` | Grid import orbit color. |
| `colors.grid_export` | `#2ecc71` | Grid export orbit color. |
| `colors.solar` | `#FFD700` | Solar production orbit color. |
| `colors.battery` | `#FF6B35` | Battery level orbit color. |
| `colors.battery_charge` | `#e74c3c` | Battery charging orbit color. |
| `colors.battery_discharge` | `#2ecc71` | Battery discharging orbit color. |
| `colors.tempo_blue` | `#3498db` | Tempo Blue day color (overrides theme). |
| `colors.tempo_white` | `#ecf0f1` | Tempo White day color (overrides theme). |
| `colors.tempo_red` | `#e74c3c` | Tempo Red day color (overrides theme). |

When a color theme is selected, it applies all colors at once. You can then override individual colors — the theme switches to "Custom" automatically. Use the visual editor's reset buttons to restore defaults.

### Available Color Themes

| Theme | Style |
|---|---|
| **Default** | Classic blue/green/gold palette |
| **Lavender** | Soft purple and pink tones |
| **Candy** | Pastel blue, yellow and pink |
| **Neon** | Vibrant cyan, yellow and orange |
| **Sunset** | Warm coral, amber and teal |
| **Nostromo** | Retro terminal green and amber |

Each theme includes matching Tempo mode color variants (blue, white, red) that stay recognizable while fitting the theme aesthetic.

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
