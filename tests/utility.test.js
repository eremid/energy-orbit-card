import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const code = fs.readFileSync(path.resolve('energy-orbit-card.js'), 'utf8');

const mockLocalStorage = {
  getItem: (key) => null,
  setItem: (key, value) => {},
};

const sandbox = {
  HTMLElement: class {
    constructor() {
      this.shadowRoot = {
        innerHTML: '',
        getElementById: () => null,
        querySelector: () => null,
      };
    }
    attachShadow() {
      return this.shadowRoot;
    }
    dispatchEvent() {}
  },
  customElements: {
    define: () => {},
  },
  window: {
    customCards: []
  },
  localStorage: mockLocalStorage,
  document: {
    createElement: () => ({
      attachShadow: () => ({})
    })
  },
  console: console,
  Event: class {},
  requestAnimationFrame: (cb) => cb(),
};

vm.createContext(sandbox);
const script = new vm.Script(code + '\n[EnergyOrbitCard, EnergyOrbitCardEditor];');
const [EnergyOrbitCard, EnergyOrbitCardEditor] = script.runInContext(sandbox);

test('_t translation method', async (t) => {
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.grid' });

  await t.test('should return English translation by default', () => {
    card._hass = { language: 'en' };
    assert.strictEqual(card._t('charging'), 'CHARGING');
    assert.strictEqual(card._t('discharging'), 'DISCHARGING');
  });

  await t.test('should return French translation when language is fr', () => {
    card._hass = { language: 'fr' };
    assert.strictEqual(card._t('charging'), 'CHARGE');
    assert.strictEqual(card._t('discharging'), 'DÉCHARGE');
  });

  await t.test('should return Spanish translation when language is es', () => {
    card._hass = { language: 'es' };
    assert.strictEqual(card._t('charging'), 'CARGANDO');
  });

  await t.test('should return German translation when language is de', () => {
    card._hass = { language: 'de' };
    assert.strictEqual(card._t('charging'), 'LÄDT');
  });

  await t.test('should fallback to English for unsupported language', () => {
    card._hass = { language: 'it' };
    assert.strictEqual(card._t('charging'), 'CHARGING');
  });

  await t.test('should return the key if translation is missing', () => {
    card._hass = { language: 'en' };
    assert.strictEqual(card._t('non_existent_key'), 'non_existent_key');
  });

  await t.test('EnergyOrbitCardEditor should also translate correctly', () => {
    const editor = new EnergyOrbitCardEditor();
    editor._hass = { language: 'fr' };
    assert.strictEqual(editor._t('charging'), 'CHARGE');
  });
});

test('_getBatteryOperationLabel', async (t) => {
  const card = new EnergyOrbitCard();
  card.setConfig({
    grid_entity: 'sensor.grid',
    operation_state_entity: 'sensor.battery_state'
  });

  await t.test('should return charging when state is charging or 1', () => {
    card._hass = { language: 'en', states: { 'sensor.battery_state': { state: 'charging' } } };
    assert.strictEqual(card._getBatteryOperationLabel(), 'CHARGING');
    card._hass.states['sensor.battery_state'].state = '1';
    assert.strictEqual(card._getBatteryOperationLabel(), 'CHARGING');
  });

  await t.test('should return discharging when state is discharging or 2', () => {
    card._hass = { language: 'en', states: { 'sensor.battery_state': { state: 'discharging' } } };
    assert.strictEqual(card._getBatteryOperationLabel(), 'DISCHARGING');
    card._hass.states['sensor.battery_state'].state = '2';
    assert.strictEqual(card._getBatteryOperationLabel(), 'DISCHARGING');
  });

  await t.test('should return standby when state is idle or 0', () => {
    card._hass = { language: 'en', states: { 'sensor.battery_state': { state: 'idle' } } };
    assert.strictEqual(card._getBatteryOperationLabel(), 'STANDBY');
    card._hass.states['sensor.battery_state'].state = '0';
    assert.strictEqual(card._getBatteryOperationLabel(), 'STANDBY');
  });

  await t.test('should return off when state is off or 3', () => {
    card._hass = { language: 'en', states: { 'sensor.battery_state': { state: 'off' } } };
    assert.strictEqual(card._getBatteryOperationLabel(), 'OFF');
    card._hass.states['sensor.battery_state'].state = '3';
    assert.strictEqual(card._getBatteryOperationLabel(), 'OFF');
  });

  await t.test('should fallback to battery when state is unknown', () => {
    card._hass = { language: 'en', states: { 'sensor.battery_state': { state: 'unknown' } } };
    assert.strictEqual(card._getBatteryOperationLabel(), 'BATTERY');
  });
});

test('_getEntityValue and _getEntityState', async (t) => {
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.grid' });
  card._hass = {
    states: {
      'sensor.test': { state: '123.45' },
      'sensor.string': { state: 'on' }
    }
  };

  await t.test('_getEntityValue should parse float', () => {
    assert.strictEqual(card._getEntityValue('sensor.test'), 123.45);
  });

  await t.test('_getEntityValue should return 0 for non-numeric', () => {
    assert.strictEqual(card._getEntityValue('sensor.string'), 0);
  });

  await t.test('_getEntityState should return raw state', () => {
    assert.strictEqual(card._getEntityState('sensor.string'), 'on');
  });
});

test('_getStorageKey', async (t) => {
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.my_grid_power' });

  await t.test('should generate key based on grid entity', () => {
    assert.strictEqual(card._getStorageKey('test', 'sensor.grid'), 'eoc_sensor_grid_test');
  });

  await t.test('should use config grid_entity if not provided', () => {
    assert.strictEqual(card._getStorageKey('mode'), 'eoc_sensor_my_grid_power_mode');
  });
});
