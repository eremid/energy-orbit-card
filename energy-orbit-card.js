
const eocTranslations = {
  en: {
    network: "GRID", charging: "CHARGING", discharging: "DISCHARGING", standby: "STANDBY",
    production: "PRODUCTION", today: "TODAY", tomorrow: "TOMORROW", battery: "BATTERY", off: "OFF",
    loading: "Loading...", z_charge: "Priority Charge", z_discharge: "Priority Discharge", z_off: "Off",

    editor_grid_entity: "Grid Entity", editor_battery_entities: "Battery Level Entities",
    editor_battery_power_entities: "Battery Power Entities", editor_solar_entities: "Solar Production Entities",
    editor_operation_state_entity: "Battery Operation State Entity", editor_zendure_mode_entity: "Zendure Mode (select)",
    editor_tempo_today_entity: "Tempo Color Today", editor_grid_max: "Grid Max (W)", editor_solar_max: "Solar Max (W)",
    editor_battery_max: "Battery Max (%)", editor_battery_power_max: "Battery Power Max (W)",
    editor_battery_capacity_wh: "Battery Capacity (Wh)", editor_grid_warning_threshold: "Grid Warning Threshold (W)",
    editor_grid_alert_threshold: "Grid Alert Threshold (W)", editor_bidirectional_mode: "Bidirectional Mode",
    editor_initial_battery_mode: "Initial Battery Display", editor_initial_solar_mode: "Initial Solar Display",
    editor_show_zendure_mode: "Show Zendure Mode", editor_show_tempo: "Show Tempo",
    editor_enable_breathing: "Breathing Animation", editor_gauge_opacity: "Orbit Opacity",
    editor_mobile_gauge_size: "Mobile Orbit Size (px)", opt_symmetric: "Symmetric", opt_import_only: "Import Only",
    opt_export_only: "Export Only", opt_percent: "Percent", opt_power: "Power", opt_total: "Total", opt_detail: "Detail"
  },
  fr: {
    network: "RÉSEAU", charging: "CHARGE", discharging: "DÉCHARGE", standby: "VEILLE",
    production: "PRODUCTION", today: "AUJOURD'HUI", tomorrow: "DEMAIN", battery: "BATTERIE", off: "ARRÊT",
    loading: "Chargement...", z_charge: "Charge Prioritaire", z_discharge: "Décharge Prioritaire", z_off: "Arrêt (Off)",

    editor_grid_entity: "Entité réseau (grid)", editor_battery_entities: "Entités niveau batterie",
    editor_battery_power_entities: "Entités puissance batterie", editor_solar_entities: "Entités production solaire",
    editor_operation_state_entity: "État opérationnel batterie", editor_zendure_mode_entity: "Mode Zendure (select)",
    editor_tempo_today_entity: "Couleur Tempo EDF", editor_grid_max: "Max réseau (W)", editor_solar_max: "Max solaire (W)",
    editor_battery_max: "Max batterie (%)", editor_battery_power_max: "Max puissance batterie (W)",
    editor_battery_capacity_wh: "Capacité batterie (Wh)", editor_grid_warning_threshold: "Seuil alerte réseau (W)",
    editor_grid_alert_threshold: "Seuil critique réseau (W)", editor_bidirectional_mode: "Mode bidirectionnel",
    editor_initial_battery_mode: "Affichage batterie initial", editor_initial_solar_mode: "Affichage solaire initial",
    editor_show_zendure_mode: "Afficher mode Zendure", editor_show_tempo: "Afficher Tempo",
    editor_enable_breathing: "Animation respiration", editor_gauge_opacity: "Opacité orbites",
    editor_mobile_gauge_size: "Taille orbite mobile (px)", opt_symmetric: "Symétrique", opt_import_only: "Import uniquement",
    opt_export_only: "Export uniquement", opt_percent: "Pourcentage", opt_power: "Puissance", opt_total: "Total", opt_detail: "Détail"
  },
  es: {
    network: "RED", charging: "CARGANDO", discharging: "DESCARGANDO", standby: "ESPERA",
    production: "PRODUCCIÓN", today: "HOY", tomorrow: "MAÑANA", battery: "BATERÍA", off: "APAGADO",
    loading: "Cargando...", z_charge: "Carga Prioritaria", z_discharge: "Descarga Prioritaria", z_off: "Apagado",

    editor_grid_entity: "Entidad de red (grid)", editor_battery_entities: "Entidades de nivel de batería",
    editor_battery_power_entities: "Entidades de potencia de batería", editor_solar_entities: "Entidades de producción solar",
    editor_operation_state_entity: "Entidad de estado operativo de batería", editor_zendure_mode_entity: "Modo Zendure (select)",
    editor_tempo_today_entity: "Color Tempo Hoy", editor_grid_max: "Max red (W)", editor_solar_max: "Max solar (W)",
    editor_battery_max: "Max batería (%)", editor_battery_power_max: "Max potencia batería (W)",
    editor_battery_capacity_wh: "Capacidad de batería (Wh)", editor_grid_warning_threshold: "Umbral advertencia red (W)",
    editor_grid_alert_threshold: "Umbral crítico red (W)", editor_bidirectional_mode: "Modo bidireccional",
    editor_initial_battery_mode: "Pantalla inicial de batería", editor_initial_solar_mode: "Pantalla inicial solar",
    editor_show_zendure_mode: "Mostrar modo Zendure", editor_show_tempo: "Mostrar Tempo",
    editor_enable_breathing: "Animación de respiración", editor_gauge_opacity: "Opacidad de órbitas",
    editor_mobile_gauge_size: "Tamaño órbita móvil (px)", opt_symmetric: "Simétrico", opt_import_only: "Solo importación",
    opt_export_only: "Solo exportación", opt_percent: "Porcentaje", opt_power: "Potencia", opt_total: "Total", opt_detail: "Detalle"
  },
  de: {
    network: "NETZ", charging: "LÄDT", discharging: "ENTLÄDT", standby: "STANDBY",
    production: "PRODUKTION", today: "HEUTE", tomorrow: "MORGEN", battery: "BATTERIE", off: "AUS",
    loading: "Wird geladen...", z_charge: "Vorrangige Ladung", z_discharge: "Vorrangige Entladung", z_off: "Aus",

    editor_grid_entity: "Netz-Entität (grid)", editor_battery_entities: "Batteriestand-Entitäten",
    editor_battery_power_entities: "Batterieleistung-Entitäten", editor_solar_entities: "Solarproduktion-Entitäten",
    editor_operation_state_entity: "Batteriestatus-Entität", editor_zendure_mode_entity: "Zendure-Modus (select)",
    editor_tempo_today_entity: "Tempo Farbe Heute", editor_grid_max: "Max Netz (W)", editor_solar_max: "Max Solar (W)",
    editor_battery_max: "Max Batterie (%)", editor_battery_power_max: "Max Batterieleistung (W)",
    editor_battery_capacity_wh: "Batteriekapazität (Wh)", editor_grid_warning_threshold: "Netz-Warnschwelle (W)",
    editor_grid_alert_threshold: "Netz-Kritische Schwelle (W)", editor_bidirectional_mode: "Bidirektionaler Modus",
    editor_initial_battery_mode: "Initiale Batterieanzeige", editor_initial_solar_mode: "Initiale Solaranzeige",
    editor_show_zendure_mode: "Zendure-Modus anzeigen", editor_show_tempo: "Tempo anzeigen",
    editor_enable_breathing: "Atmungsanimation", editor_gauge_opacity: "Orbit-Deckkraft",
    editor_mobile_gauge_size: "Mobile Orbitgröße (px)", opt_symmetric: "Symmetrisch", opt_import_only: "Nur Import",
    opt_export_only: "Nur Export", opt_percent: "Prozent", opt_power: "Leistung", opt_total: "Gesamt", opt_detail: "Detail"
  }
};

const eocIcons = {
  'grid': 'M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z',
  'battery': 'M16 18H8V6h8M4.67 19h14.66c.57 0 1.02-.46.95-1.02l-.77-7.09c-.05-.42-.39-.73-.81-.73H5.3c-.42 0-.76.31-.81.73l-.77 7.09c-.07.56.38 1.02.95 1.02M16 4H8v2h8V4z',
  'battery-charging': 'M20 4H6C4.89 4 4 4.89 4 6V18C4 19.11 4.89 20 6 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M13 17L11 13H7L12 7L14 11H18L13 17Z',
  'solar': 'M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z',
  'zendure': 'M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z'
};

/**
 * Energy Gauge Card V4.5.0 - Rounded Bars & Custom Colors
 * @version 4.5.0
 * 
 * Changelog:
 * - FIX: Gauge clipping issue on mobile > 170px (Adjusted viewBox and margins).
 * - STYLE: Added `stroke-linecap="round"` to stat bars for rounded ends.
 * - STYLE: Restored vivid default colors (less opacity on backgrounds).
 * - NEW: Custom colors configuration (grid_color, solar_color, battery_color, etc.).
 */

class EnergyOrbitCard extends HTMLElement {
  _t(key) {
    const lang = (this._hass && this._hass.language) ? this._hass.language.substring(0, 2) : 'en';
    const t = eocTranslations[lang] || eocTranslations['en'];
    return t[key] || eocTranslations['en'][key] || key;
  }

  static getConfigElement() {
    return document.createElement("energy-orbit-card-editor");
  }

  static getStubConfig() {
    return {
      grid_entity: "sensor.grid_power",
      battery_entities: [],
      battery_power_entities: [],
      solar_entities: [],
    };
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._updating = false;
    this._batteryMode = 'percent'; 
    this._solarMode = 'total';
  }

  setConfig(config) {
    if (!config.grid_entity) throw new Error('Grid Entity required');
    this.config = {
      ...config,
      battery_entities: config.battery_entities || [],
      solar_entities: config.solar_entities || [],
      battery_power_entities: config.battery_power_entities || [],
      battery_max: config.battery_max || 100,
      solar_max: config.solar_max || 5000,
      grid_max: config.grid_max || 6000,
      battery_power_max: config.battery_power_max || 2400,
      bidirectional_mode: config.bidirectional_mode || 'symmetric',
      
      initial_battery_mode: config.initial_battery_mode || 'percent',
      initial_solar_mode: config.initial_solar_mode || 'total',
      battery_capacity_wh: config.battery_capacity_wh || 1920,
      grid_warning_threshold: config.grid_warning_threshold || 6000,
      grid_alert_threshold: config.grid_alert_threshold || 9000,
      show_zendure_mode: config.show_zendure_mode !== false,
      show_tempo: config.show_tempo !== false,
      gauge_opacity: config.gauge_opacity !== undefined ? config.gauge_opacity : 0.8,
      enable_breathing: config.enable_breathing !== false,
      mobile_gauge_size: config.mobile_gauge_size || 160,
      colors: {
        grid_import: config.grid_import_color || config.colors?.grid_import || '#3498db',
        grid_export: config.grid_export_color || config.colors?.grid_export || '#2ecc71',
        solar: config.solar_color || config.colors?.solar || '#FFD700',
        battery: config.battery_color || config.colors?.battery || '#FF6B35',
        battery_charge: config.battery_charge_color || config.colors?.battery_charge || '#e74c3c',
        battery_discharge: config.battery_discharge_color || config.colors?.battery_discharge || '#2ecc71',
                      }
    };
    this._batteryMode = this.config.initial_battery_mode;
    this._solarMode = this.config.initial_solar_mode;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._rendered || this._lastLang !== hass.language) {
      this._lastLang = hass.language;
      this._render();
      this._rendered = true;
    }
    if (!this._updating) {
      this._updating = true;
      requestAnimationFrame(() => {
        this._updateContent();
        this._updating = false;
      });
    }
  }

  _toggleBatteryMode() {
    this._batteryMode = this._batteryMode === 'percent' ? 'power' : 'percent';
    this._updateContent();
  }

  _toggleSolarMode() {
    this._solarMode = this._solarMode === 'total' ? 'detail' : 'total';
    this._updateContent();
  }

  _setZendureMode(e) {
      if(!this.config.zendure_mode_entity) return;
      this._hass.callService('select', 'select_option', {
          entity_id: this.config.zendure_mode_entity,
          option: e.target.value
      });
  }

  _navigateToTempo() {
      if(this.config.tempo_today_entity) {
          const event = new Event("hass-more-info", { bubbles: true, composed: true });
          event.detail = { entityId: this.config.tempo_today_entity };
          this.dispatchEvent(event);
      }
  }

  _getEntityValue(entityId) {
    if (!this._hass || !entityId) return 0;
    const state = this._hass.states[entityId];
    return state ? parseFloat(state.state) || 0 : 0;
  }

  _getEntityState(entityId) {
    if (!this._hass || !entityId) return null;
    return this._hass.states[entityId]?.state || null;
  }

  _getEntityFriendlyName(entityId) {
      if (!this._hass || !entityId) return entityId;
      return this._hass.states[entityId]?.attributes?.friendly_name || entityId;
  }

  _getBatteryOperationLabel() {
    if (!this.config.operation_state_entity) return this._t('battery');
    const stateObj = this._hass.states[this.config.operation_state_entity];
    if (!stateObj) return this._t('battery');
    const state = stateObj.state;
    if (state === '1' || state.toLowerCase() === 'charging') return this._t('charging');
    if (state === '2' || state.toLowerCase() === 'discharging') return this._t('discharging');
    if (state === '0' || state.toLowerCase() === 'idle') return this._t('standby');
    if (state === '3' || state.toLowerCase() === 'off') return this._t('off');
    return this._t('battery');
  }

  _getBatteryLevel() {
    if (this.config.battery_entities.length > 0) {
      return this.config.battery_entities.reduce((acc, e) => acc + this._getEntityValue(e), 0) / this.config.battery_entities.length;
    }
    return this._getEntityValue(this.config.battery_entity);
  }

  _getBatteryPower() {
    if (this.config.battery_power_entities.length > 0) {
      return this.config.battery_power_entities.reduce((acc, e) => acc + this._getEntityValue(e), 0);
    }
    return this._getEntityValue(this.config.battery_power_entity);
  }

  _getSolarProduction() {
    let total = 0;
    if (this.config.solar_entities.length > 0) total += this.config.solar_entities.reduce((acc, e) => acc + this._getEntityValue(e), 0);
    if (this.config.solar_entity) total += this._getEntityValue(this.config.solar_entity);
    return total;
  }

  _getMdiPath(icon) {
    return eocIcons[icon] || eocIcons['grid'];
  }

  _render() {
        const gridIconPath = this._getMdiPath('grid');
    const batteryIconPath = this._getMdiPath('battery');
    const c = this.config.colors;

    this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; }
        :host { display: block; }
        ha-card {
          background: var(--ha-card-background, var(--card-background-color, #1c2b3a));
          border-radius: 16px; padding: 16px; position: relative; overflow: hidden; z-index: 1;
          box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0,0,0,0.2));
        }

        .main-layout { display: grid; grid-template-columns: 1fr; position: relative; min-height: 260px; align-items: center; }
        .stats-col { display: flex; flex-direction: column; gap: 10px; z-index: 2; position: relative; padding-top: 0; }
        .gauge-col { display: flex; justify-content: center; align-items: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10; pointer-events: none; width: 100%; height: 100%; }

        
        @media (max-width: 500px) {
            .main-layout { display: block !important; min-height: 0 !important; }
            .stats-col { display: flex; flex-direction: column; gap: 8px; padding-top: 0; }
            #grid-stat { width: 55%; }
            #battery-stat-item { width: 55%; }
            #solar-stat-item { width: 100%; margin-top: 4px; }
            .gauge-col { 
                position: absolute !important; 
                top: -5px !important; 
                right: -15px !important; 
                left: auto !important; 
                transform: none !important; 
                width: 50% !important; 
                height: 150px !important; 
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                margin: 0 !important;
                z-index: 10;
                pointer-events: none;
            }
            .gauge-wrapper { width: 150px !important; height: 150px !important; overflow: visible; }
            .center-content { width: 65px !important; height: 65px !important; }
            .grid-value { font-size: 1.6em !important; }
            .grid-unit { font-size: 0.9em !important; }
            .stat-label { font-size: 0.6em; }
        }


        .stat-item {
          background: var(--input-fill-color, rgba(128, 128, 128, 0.1));
          border-radius: 12px; padding: 8px 12px; display: flex; align-items: center; gap: 10px;
          border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
          transition: all 0.3s ease; position: relative; min-height: 50px; overflow: hidden;
        }
        .stat-item.clickable { cursor: pointer; }
        /* ROUNDED BAR */
        .stat-item::before { 
            content: ''; position: absolute; top: 8px; left: 0; bottom: 8px; width: 4px; 
            background: var(--stat-color); opacity: 1; border-top-right-radius: 4px; border-bottom-right-radius: 4px; 
        }

        @keyframes breathe {
            0% { box-shadow: 0 0 0 0 rgba(var(--halo-rgb), 0.1); }
            50% { box-shadow: 0 0 15px 4px rgba(var(--halo-rgb), var(--halo-intensity)); }
            100% { box-shadow: 0 0 0 0 rgba(var(--halo-rgb), 0.1); }
        }

        .stat-icon {
            width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
            background: var(--stat-bg); flex-shrink: 0; position: relative; transition: box-shadow 0.3s ease;
        }
        .stat-icon.breathing { animation: breathe 3s ease-in-out infinite; }
        .stat-icon svg { width: 16px; height: 16px; z-index: 1; }

        .stat-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
        .stat-main-line { display: flex; align-items: baseline; gap: 5px; white-space: nowrap; }
        .stat-value { font-size: 1.2em; font-weight: 700; color: var(--stat-color); line-height: 1; }
        .stat-unit { font-size: 0.8em; opacity: 0.7; }
        .stat-label { font-size: 0.7em; opacity: 0.5; text-transform: uppercase; margin-left: auto; } #battery-label { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); }
        .stat-subtext { font-size: 0.7em; opacity: 0.6; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .solar-details { margin-top: 5px; padding-top: 5px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8em; }
        .solar-detail-row { display: flex; justify-content: space-between; margin-bottom: 2px; }

        .gauge-wrapper { width: 240px; height: 240px; position: relative; filter: drop-shadow(0 8px 24px var(--ha-card-box-shadow, rgba(0,0,0,0.2))); transition: all 0.3s ease; }
        .gauge-track { fill: none; stroke: var(--divider-color, rgba(150, 150, 150, 0.2)); stroke-linecap: round; }
        .gauge-progress { fill: none; stroke-linecap: round; transition: stroke-dashoffset 0.8s ease, stroke 0.3s ease; opacity: var(--gauge-opacity); }

        .center-content {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          text-align: center; color: var(--primary-text-color, #fff);
          background: var(--card-background-color, var(--ha-card-background, #1c2b3a));
          border-radius: 50%; width: 85px; height: 85px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          z-index: 20; box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0,0,0,0.2));
          transition: all 0.3s ease;
        }
        .grid-value { font-size: 2em; font-weight: 700; line-height: 1; letter-spacing: -1px; }
        .grid-value.positive { color: ${c.grid_import}; }
        .grid-value.negative { color: ${c.grid_export}; }
        .grid-value.warning { color: #f1c40f; }
        .grid-value.alert { color: #e74c3c; animation: pulse 1s infinite; }
        @keyframes pulse { 50% { opacity: 0.5; } }

        .zendure-mode { margin-top: 8px; display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); padding: 5px 10px; border-radius: 8px; }
        .zendure-select { background: transparent; border: none; color: inherit; width: 100%; outline: none; font-size: 0.85em; font-weight:600; cursor: pointer; }
        .zendure-select option { background: #333; color: #fff; }

        .tempo-container { display: flex; gap: 8px; margin-top: 12px; cursor: pointer; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); }
        .tempo-day { flex: 1; display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); padding: 6px 10px; border-radius: 8px; }
        .tempo-indicator { width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 10px currentColor; border: 2px solid rgba(255,255,255,0.2); }
      </style>

      <ha-card style="--gauge-opacity: ${this.config.gauge_opacity}; --mobile-gauge-size: ${this.config.mobile_gauge_size}px;">
        <div class="card-container">
          <div class="main-layout">
            <div class="stats-col" id="stats-grid">
                <div class="stat-item" id="grid-stat" style="--stat-color: ${c.grid_import}; --stat-bg: ${c.grid_import}26;">
                  <div class="stat-icon"><svg viewBox="0 0 24 24" fill="${c.grid_import}" id="grid-icon"><path d="${gridIconPath}"/></svg></div>
                  <div class="stat-content">
                    <div class="stat-main-line"><span class="stat-value" id="grid-stat-value">--</span><span class="stat-unit">W</span><span class="stat-label">${this._t('network')}</span></div>
                  </div>
                </div>
                <div class="stat-item clickable" id="battery-stat-item" style="--stat-color: ${c.battery}; --stat-bg: ${c.battery}26;">
                  <div class="stat-icon" id="battery-icon-wrapper" style="--halo-rgb: 255,107,53;"><svg viewBox="0 0 24 24" fill="${c.battery}" id="battery-icon-svg"><path d="${batteryIconPath}"/></svg></div>
                  <div class="stat-content">
                    <div class="stat-main-line"><span class="stat-value" id="battery-value">--</span><span class="stat-unit" id="battery-unit">%</span><span class="stat-label" id="battery-label">${this._t('battery')}</span></div>
                    <div class="stat-subtext" id="battery-autonomy"></div>
                  </div>
                </div>
                <div class="stat-item clickable" id="solar-stat-item" style="--stat-color: ${c.solar}; --stat-bg: ${c.solar}26;">
                  <div class="stat-icon breathing" id="solar-icon-wrapper" style="--halo-rgb: 255,215,0;"><svg viewBox="0 0 24 24" fill="${c.solar}"><path d="${this._getMdiPath('solar')}"/></svg></div>
                  <div class="stat-content">
                    <div class="stat-main-line"><span class="stat-value" id="solar-value">--</span><span class="stat-unit">W</span><span class="stat-label">${this._t('production')}</span></div>
                    <div id="solar-details-container" class="solar-details" style="display: none;"></div>
                  </div>
                </div>
            </div>

            <!-- TIGHTER GAUGE SVG WITH CLIP FIX -->
            <div class="gauge-col">
               <div class="gauge-wrapper">
                  <svg viewBox="-10 -10 220 220">
                     <defs>
                       <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c.grid_import}"/><stop offset="100%" style="stop-color:${c.grid_import}aa"/></linearGradient>
                       <linearGradient id="gridInjectionGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c.grid_export}"/><stop offset="100%" style="stop-color:${c.grid_export}aa"/></linearGradient>
                       <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c.battery}"/><stop offset="100%" style="stop-color:${c.battery}aa"/></linearGradient>
                       <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c.solar}"/><stop offset="100%" style="stop-color:${c.solar}aa"/></linearGradient>
                       <linearGradient id="batteryChargingGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c.battery_charge}"/><stop offset="100%" style="stop-color:${c.battery_charge}aa"/></linearGradient>
                       <linearGradient id="batteryDischargingGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c.battery_discharge}"/><stop offset="100%" style="stop-color:${c.battery_discharge}aa"/></linearGradient>
                       <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                     </defs>

                     <!-- Battery (Outer) - r=84 -->
                     <circle class="gauge-track" cx="100" cy="100" r="88" stroke-width="10" transform="rotate(-90 100 100)" />
                     <circle class="gauge-progress" cx="100" cy="100" r="88" id="battery-level-gauge" transform="rotate(-90 100 100)" stroke="url(#batteryGradient)" stroke-width="10" filter="url(#glow)"/>

                     <!-- Grid - r=68 -->
                     <circle class="gauge-track" cx="100" cy="100" r="72" stroke-width="8" transform="rotate(-90 100 100)" />
                     <circle class="gauge-progress" cx="100" cy="100" r="72" id="grid-gauge" transform="rotate(-90 100 100)" stroke="url(#gridGradient)" stroke-width="8" filter="url(#glow)"/>

                     <!-- Battery Power - r=52 -->
                     <circle class="gauge-track" cx="100" cy="100" r="63" stroke-width="8" transform="rotate(-90 100 100)" />
                     <circle class="gauge-progress" cx="100" cy="100" r="63" id="battery-power-gauge" transform="rotate(-90 100 100)" stroke="url(#batteryDischargingGradient)" stroke-width="8" filter="url(#glow)"/>

                     <!-- Solar (Inner) - r=36 -->
                     <circle class="gauge-track" cx="100" cy="100" r="54" stroke-width="8" transform="rotate(-90 100 100)" />
                     <circle class="gauge-progress" cx="100" cy="100" r="54" id="solar-gauge" transform="rotate(-90 100 100)" stroke="url(#solarGradient)" stroke-width="8" filter="url(#glow)"/>
                  </svg>
                  <div class="center-content">
                     <div class="grid-value" id="center-value">--</div><div class="grid-unit" id="center-unit">W</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        ${this.config.show_zendure_mode && this.config.zendure_mode_entity ? `
          <div class="zendure-mode">
            <svg viewBox="0 0 24 24" style="width:20px;height:20px;flex-shrink:0;"><path d="${this._getMdiPath('zendure')}" fill="currentColor"/></svg>
            <select class="zendure-select" id="zendure-selector"><option value="auto">${this._t('loading')}</option></select>
          </div>
        ` : ''}

        ${this.config.show_tempo ? `
          <div class="tempo-container" id="tempo-container">
            ${this.config.tempo_today_entity ? `<div class="tempo-day" style="justify-content:flex-end"><span style="font-size:0.7em;opacity:0.6;text-transform:uppercase">${this._t('today')}</span><div class="tempo-indicator" id="tempo-today-indicator"></div></div>` : ''}
            ${this.config.tempo_tomorrow_entity ? `<div class="tempo-day"><div class="tempo-indicator" id="tempo-tomorrow-indicator"></div><span style="font-size:0.7em;opacity:0.6;text-transform:uppercase">${this._t('tomorrow')}</span></div>` : ''}
          </div>
        ` : ''}
      </ha-card>
    `;

    this._setupListeners();
    this._updateContent();
  }

  _setupListeners() {
      this.shadowRoot.getElementById('battery-stat-item')?.addEventListener('click', () => this._toggleBatteryMode());
      this.shadowRoot.getElementById('solar-stat-item')?.addEventListener('click', () => this._toggleSolarMode());
      this.shadowRoot.getElementById('tempo-container')?.addEventListener('click', () => this._navigateToTempo());
      const zendureSelect = this.shadowRoot.getElementById('zendure-selector');
      if(zendureSelect) {
          const options = [
              {v: 'smart', l: 'Auto (Smart)'}, {v: 'manual', l: 'Manuel'},
              {v: 'smart_discharging', l: this._t('z_discharge')}, {v: 'smart_charging', l: this._t('z_charge')},
              {v: 'off', l: this._t('z_off')}
          ];
          zendureSelect.innerHTML = options.map(o => `<option value="${o.v}">${o.l}</option>`).join('');
          zendureSelect.addEventListener('change', (e) => this._setZendureMode(e));
      }
  }

  _updateContent() {
    if (!this._hass || !this.shadowRoot) return;

    // DATA
    const batteryPercent = this._getBatteryLevel();
    const batteryPower = this._getBatteryPower();
    const solar = this._getSolarProduction();
    const grid = this._getEntityValue(this.config.grid_entity);
    const gridAbs = Math.abs(grid);
    const isInjection = grid < 0;
    const c = this.config.colors;

    // GRID
    const gridStatEl = this.shadowRoot.getElementById('grid-stat');
    const gridIconSvg = this.shadowRoot.getElementById('grid-icon');

    if (gridStatEl) {
      const color = isInjection ? c.grid_export : c.grid_import;
      gridStatEl.style.setProperty('--stat-color', color);
      gridStatEl.style.setProperty('--stat-bg', color + '26');
      if(gridIconSvg) {
        gridIconSvg.innerHTML = `<path d="${this._getMdiPath(isInjection ? 'grid-import' : 'grid')}"/>`;
        gridIconSvg.style.fill = color;
      }
    }
    const gridStatVal = this.shadowRoot.getElementById('grid-stat-value');
    if(gridStatVal) gridStatVal.textContent = Math.round(gridAbs);

    // CENTER VALUE
    const centerVal = this.shadowRoot.getElementById('center-value');
    if(centerVal) {
        centerVal.textContent = Math.round(gridAbs);
        centerVal.className = 'grid-value';
        centerVal.style.color = ''; // Reset inline color
        if (isInjection) centerVal.style.color = c.grid_export;
        else if (gridAbs > this.config.grid_alert_threshold) { centerVal.classList.add('alert'); centerVal.style.color = '#e74c3c'; }
        else if (gridAbs > this.config.grid_warning_threshold) { centerVal.classList.add('warning'); centerVal.style.color = '#f1c40f'; }
        else centerVal.style.color = c.grid_import;
    }

    // BATTERY
    const batLabelEl = this.shadowRoot.getElementById('battery-label');
    if (batLabelEl) batLabelEl.textContent = this._getBatteryOperationLabel();

    let isCharging = false;
    if (this.config.operation_state_entity && this._hass.states[this.config.operation_state_entity]) {
        const st = this._hass.states[this.config.operation_state_entity].state;
        isCharging = st === '1' || st.toLowerCase() === 'charging';
    } else {
        isCharging = batteryPower > 0;
    }

    const batStatItem = this.shadowRoot.getElementById('battery-stat-item');
    const batIconWrapper = this.shadowRoot.getElementById('battery-icon-wrapper');
    const batIconSvg = this.shadowRoot.getElementById('battery-icon-svg');

    if (this.config.enable_breathing && Math.abs(batteryPower) > 50) {
        batIconWrapper.classList.add('breathing');
        const intensity = Math.min(0.8, Math.max(0.2, Math.abs(batteryPower) / this.config.battery_power_max));
        batIconWrapper.style.setProperty('--halo-intensity', intensity);
    } else {
        batIconWrapper.classList.remove('breathing');
    }

    // Determine Battery Colors
    let bColor = c.battery;
    if (this._batteryMode !== 'percent') {
        bColor = isCharging ? c.battery_charge : c.battery_discharge;
    }

    if (batStatItem) {
        batStatItem.style.setProperty('--stat-color', bColor);
        batStatItem.style.setProperty('--stat-bg', bColor + '26');
    }
    if (batIconWrapper) {
        batIconWrapper.style.backgroundColor = bColor + '26';
        batIconWrapper.style.setProperty('--halo-rgb', this._hexToRgb(bColor));
    }
    if (batIconSvg) batIconSvg.setAttribute('fill', bColor);

    const batValEl = this.shadowRoot.getElementById('battery-value');
    const batUnitEl = this.shadowRoot.getElementById('battery-unit');
    if(batValEl) {
        if(this._batteryMode === 'percent') {
            batValEl.textContent = batteryPercent.toFixed(0);
            batUnitEl.textContent = '%';
        } else {
            batValEl.textContent = Math.abs(batteryPower).toFixed(0);
            batUnitEl.textContent = 'W';
        }
    }

    const batAutoEl = this.shadowRoot.getElementById('battery-autonomy');
    if (batAutoEl) {
        if (this._batteryMode === 'percent') {
            if (this.config.battery_capacity_wh && Math.abs(batteryPower) > 10) {
                let text = "";
                const capacity = this.config.battery_capacity_wh;
                if (isCharging) {
                    const remainingWh = capacity - (capacity * (batteryPercent / 100));
                    const hours = remainingWh / Math.abs(batteryPower);
                    if (hours < 48) text = `Fin: ${Math.floor(hours)}h${Math.round((hours % 1) * 60)}m`;
                } else {
                    const remainingWh = capacity * (batteryPercent / 100);
                    const hours = remainingWh / Math.abs(batteryPower);
                    if (hours < 48) text = `Temps: ${Math.floor(hours)}h${Math.round((hours % 1) * 60)}m`;
                }
                batAutoEl.textContent = text;
            } else {
                batAutoEl.textContent = "";
            }
        } else {
            const parts = [];
            if (this.config.battery_power_entities && this.config.battery_power_entities.length > 0) {
                this.config.battery_power_entities.forEach((e) => {
                    const v = this._getEntityValue(e);
                    parts.push(`${Math.round(Math.abs(v))}W`);
                });
            } else if (this.config.battery_power_entity) {
                const v = this._getEntityValue(this.config.battery_power_entity);
                parts.push(`${Math.round(Math.abs(v))}W`);
            }
            batAutoEl.textContent = parts.join(' + ');
        }
    }

    const batIcon = batIconSvg?.querySelector('path');
    if(batIcon) batIcon.setAttribute('d', isCharging ? this._getMdiPath('battery-charging') : this._getMdiPath('battery'));

    // SOLAR
    const solValEl = this.shadowRoot.getElementById('solar-value');
    if(solValEl) solValEl.textContent = solar.toFixed(0);

    const solarIconWrapper = this.shadowRoot.getElementById('solar-icon-wrapper');
    if (this.config.enable_breathing && solar > 50) {
        solarIconWrapper.classList.add('breathing');
        const intensity = Math.min(0.8, Math.max(0.2, solar / this.config.solar_max));
        solarIconWrapper.style.setProperty('--halo-intensity', intensity);
    } else {
        solarIconWrapper.classList.remove('breathing');
    }

    const solDetCont = this.shadowRoot.getElementById('solar-details-container');
    if(solDetCont) {
        if (this._solarMode === 'detail') {
            solDetCont.style.display = 'block'; 
            const ents = [...this.config.solar_entities];
            if(this.config.solar_entity) ents.push(this.config.solar_entity);
            solDetCont.innerHTML = ents.map(e => {
                let n = this._getEntityFriendlyName(e).replace(/(Solar|Production)/gi, '').trim();
                if(n.length > 15) n = n.substring(0,15)+'.';
                return `<div class="solar-detail-row"><span>${n}</span><span>${this._getEntityValue(e).toFixed(0)} <span class="unit">W</span></span></div>`;
            }).join('');
        } else {
            solDetCont.style.display = 'none';
        }
    }

    // GAUGES
    this._updateGauge('battery-level-gauge', Math.max(0, Math.min(100, batteryPercent)), 88); // r=84
    this._updateBidirectionalGauge('grid-gauge', grid, this.config.grid_max, 72, isInjection); // r=68
    this._updateGauge('solar-gauge', Math.min(100, (solar / this.config.solar_max)*100), 54); // r=36 (Inner)
    this._updateBidirectionalGauge('battery-power-gauge', batteryPower, this.config.battery_power_max, 63, !isCharging); // r=52

    // TEMPO
    const getTempoColor = (s) => {
        if(!s) return '#666666';
        const st = s.toLowerCase();
        if(st.includes('bleu') || st.includes('blue')) return '#4A90E2';
        if(st.includes('blanc') || st.includes('white')) return '#E8E8E8';
        if(st.includes('rouge') || st.includes('red')) return '#E74C3C';
        return '#666666';
    };
    if(this.config.show_tempo) {
        const t1 = this.shadowRoot.getElementById('tempo-today-indicator');
        if(t1) t1.style.backgroundColor = getTempoColor(this._getEntityState(this.config.tempo_today_entity));
        const t2 = this.shadowRoot.getElementById('tempo-tomorrow-indicator');
        if(t2) t2.style.backgroundColor = getTempoColor(this._getEntityState(this.config.tempo_tomorrow_entity));
    }

    if(this.config.show_zendure_mode && this.config.zendure_mode_entity) {
         const currentMode = this._getEntityState(this.config.zendure_mode_entity);
         const sel = this.shadowRoot.getElementById('zendure-selector');
         if(sel && currentMode && sel.value !== currentMode) sel.value = currentMode;
    }
  }

  _hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : '128,128,128';
  }

  _updateGauge(id, percent, radius) {
    const el = this.shadowRoot.getElementById(id);
    if (!el) return;
    const C = 2 * Math.PI * radius;
    const offset = C * (1 - percent / 100);
    el.style.strokeDasharray = `${C}`;
    el.style.strokeDashoffset = `${offset}`;
    el.setAttribute('stroke-linecap', 'round'); // Rounded ends
  }

  _updateBidirectionalGauge(id, value, max, radius, isNeg) {
    const el = this.shadowRoot.getElementById(id);
    if (!el) return;
    const abs = Math.abs(value);
    const C = 2 * Math.PI * radius;
    const half = C / 2;
    const pct = Math.min(100, (abs / max) * 100);
    const arc = (half * pct) / 100;

    if (this.config.bidirectional_mode === 'symmetric') {
        if (value === 0) { 
            el.style.strokeDasharray = `0 ${C}`; 
            el.style.strokeDashoffset = 0; 
        } else if (value > 0) { 
            el.style.strokeDasharray = `${arc} ${C - arc}`; 
            el.style.strokeDashoffset = `${half}`; 
        } else { 
            el.style.strokeDasharray = `${arc} ${C - arc}`; 
            el.style.strokeDashoffset = `${half + arc}`; 
        }
    } else {
        const arcUni = (C * pct) / 100;
        this._updateGauge(id, pct, radius);
    }
    let strokeUrl = '';
    const c = this.config.colors;
    if(id.includes('grid')) { strokeUrl = isNeg ? 'url(#gridInjectionGradient)' : 'url(#gridGradient)'; }
    else if(id.includes('battery-level')) { strokeUrl = 'url(#batteryGradient)'; }
    else if(id.includes('battery-power')) { strokeUrl = isNeg ? 'url(#batteryDischargingGradient)' : 'url(#batteryChargingGradient)'; }
    else if(id.includes('solar')) { strokeUrl = 'url(#solarGradient)'; }
    el.setAttribute('stroke', strokeUrl);
    el.setAttribute('stroke-linecap', 'round');
  }

  getCardSize() { return 3; }
  static getConfigElement() { return document.createElement("energy-orbit-card-editor"); }
  static getStubConfig() { return { grid_entity: "sensor.grid_power", battery_entity: "sensor.battery_level", solar_entity: "sensor.solar_power" }; }
}


class EnergyOrbitCardEditor extends HTMLElement {
  constructor() { super(); }

  _t(key) {
    const lang = (this._hass && this._hass.language) ? this._hass.language.substring(0, 2) : 'en';
    const t = eocTranslations[lang] || eocTranslations['en'];
    return t[key] || eocTranslations['en'][key] || key;
  }

  setConfig(config) {
    this._config = config;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._lastLang !== hass.language) {
      this._lastLang = hass.language;
      if (this.form) {
        this.form.schema = this._getSchema();
        this.form.requestUpdate && this.form.requestUpdate();
      }
    }
    this.render();
  }

  _getSchema() {
    return [
      { name: 'grid_entity', required: true, selector: { entity: { domain: 'sensor' } } },
      { name: 'battery_entities', selector: { entity: { domain: 'sensor', multiple: true } } },
      { name: 'battery_power_entities', selector: { entity: { domain: 'sensor', multiple: true } } },
      { name: 'solar_entities', selector: { entity: { domain: 'sensor', multiple: true } } },
      { name: 'operation_state_entity', selector: { entity: {} } },
      { name: 'zendure_mode_entity', selector: { entity: { domain: 'select' } } },
      { name: 'tempo_today_entity', selector: { entity: {} } },
      { type: 'grid', name: '', schema: [
          { name: 'grid_max', selector: { number: { min: 100, max: 20000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'solar_max', selector: { number: { min: 100, max: 20000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'battery_max', selector: { number: { min: 1, max: 100, step: 1, mode: 'box', unit_of_measurement: '%' } } },
          { name: 'battery_power_max', selector: { number: { min: 100, max: 10000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'battery_capacity_wh', selector: { number: { min: 100, max: 50000, step: 100, mode: 'box', unit_of_measurement: 'Wh' } } },
          { name: 'grid_warning_threshold', selector: { number: { min: 100, max: 20000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'grid_alert_threshold', selector: { number: { min: 100, max: 20000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
        ]
      },
      { type: 'grid', name: '', schema: [
          { name: 'bidirectional_mode', selector: { select: { options: [{label:this._t('opt_symmetric'), value:'symmetric'}, {label:this._t('opt_import_only'), value:'import_only'}, {label:this._t('opt_export_only'), value:'export_only'}] } } },
          { name: 'initial_battery_mode', selector: { select: { options: [{label:this._t('opt_percent'), value:'percent'}, {label:this._t('opt_power'), value:'power'}] } } },
          { name: 'initial_solar_mode', selector: { select: { options: [{label:this._t('opt_total'), value:'total'}, {label:this._t('opt_detail'), value:'detail'}] } } },
        ]
      },
      { type: 'grid', name: '', schema: [
          { name: 'show_zendure_mode', selector: { boolean: {} } },
          { name: 'show_tempo', selector: { boolean: {} } },
          { name: 'enable_breathing', selector: { boolean: {} } },
        ]
      },
      { type: 'grid', name: '', schema: [
          { name: 'gauge_opacity', selector: { number: { min: 0, max: 1, step: 0.05, mode: 'slider' } } },
          { name: 'mobile_gauge_size', selector: { number: { min: 80, max: 300, step: 10, mode: 'box', unit_of_measurement: 'px' } } },
        ]
      }
    ];
  }

  render() {
    if (!this._config || !this._hass) return;
    if (!this.form) {
      this.innerHTML = '';
      this.form = document.createElement('ha-form');
      this.form.addEventListener('value-changed', (ev) => {
        this.dispatchEvent(new CustomEvent('config-changed', {
          detail: { config: { ...this._config, ...ev.detail.value } },
          bubbles: true,
          composed: true,
        }));
      });
      this.appendChild(this.form);
    }
    this.form.schema = this._getSchema();
    this.form.computeLabel = (schema) => {
      const labels = {
        grid_entity: this._t('editor_grid_entity'),
        battery_entities: this._t('editor_battery_entities'),
        battery_power_entities: this._t('editor_battery_power_entities'),
        solar_entities: this._t('editor_solar_entities'),
        operation_state_entity: this._t('editor_operation_state_entity'),
        zendure_mode_entity: this._t('editor_zendure_mode_entity'),
        tempo_today_entity: this._t('editor_tempo_today_entity'),
        grid_max: this._t('editor_grid_max'), solar_max: this._t('editor_solar_max'),
        battery_max: this._t('editor_battery_max'), battery_power_max: this._t('editor_battery_power_max'),
        battery_capacity_wh: this._t('editor_battery_capacity_wh'),
        grid_warning_threshold: this._t('editor_grid_warning_threshold'),
        grid_alert_threshold: this._t('editor_grid_alert_threshold'),
        bidirectional_mode: this._t('editor_bidirectional_mode'),
        initial_battery_mode: this._t('editor_initial_battery_mode'),
        initial_solar_mode: this._t('editor_initial_solar_mode'),
        show_zendure_mode: this._t('editor_show_zendure_mode'),
        show_tempo: this._t('editor_show_tempo'),
        enable_breathing: this._t('editor_enable_breathing'),
        gauge_opacity: this._t('editor_gauge_opacity'),
        mobile_gauge_size: this._t('editor_mobile_gauge_size')
      };
      return labels[schema.name] || schema.name;
    };
    this.form.hass = this._hass;
    this.form.data = this._config;
  }
}

customElements.define("energy-orbit-card-editor", EnergyOrbitCardEditor);
customElements.define("energy-orbit-card", EnergyOrbitCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "energy-orbit-card",
  name: "Energy Orbit Card",
  description: "Home energy monitoring card with concentric orbit rings",
  preview: true
});
console.info("%c ENERGY-ORBIT-CARD %c 1.0.0 ", "color:white;background:#FF6B35", "color:white;background:#1a2332");
