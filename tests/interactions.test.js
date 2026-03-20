import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const code = fs.readFileSync(path.resolve('energy-orbit-card.js'), 'utf8');

function createSandbox(overrides = {}) {
  const sandbox = {
    HTMLElement: class {
      constructor() {
        this.shadowRoot = {
          innerHTML: '',
          getElementById: () => null,
          querySelector: () => null,
          querySelectorAll: () => [],
        };
      }
      attachShadow() { return this.shadowRoot; }
      dispatchEvent() {}
    },
    customElements: { define: () => {} },
    window: { customCards: [] },
    localStorage: { getItem: () => null, setItem: () => {}, ...overrides.localStorage },
    document: {
      createElement: () => ({ attachShadow: () => ({}) }),
      createDocumentFragment: () => ({ appendChild: () => {} }),
    },
    console: console,
    Event: class {},
    requestAnimationFrame: (cb) => cb(),
    ...overrides,
  };
  vm.createContext(sandbox);
  return sandbox;
}

// --- setConfig error path ---

test('setConfig throws when grid_entity is missing', () => {
  const sandbox = createSandbox();
  const EnergyOrbitCard = new vm.Script(code + '\nEnergyOrbitCard;').runInContext(sandbox);
  const card = new EnergyOrbitCard();

  assert.throws(() => card.setConfig({}), { message: /Grid Entity required/ });
  assert.throws(() => card.setConfig({ solar_entities: ['sensor.solar'] }), { message: /Grid Entity required/ });
});

test('setConfig succeeds with grid_entity', () => {
  const sandbox = createSandbox();
  const EnergyOrbitCard = new vm.Script(code + '\nEnergyOrbitCard;').runInContext(sandbox);
  const card = new EnergyOrbitCard();

  assert.doesNotThrow(() => card.setConfig({ grid_entity: 'sensor.grid' }));
  assert.strictEqual(card.config.grid_entity, 'sensor.grid');
});

// --- _toggleBatteryMode cycle ---

test('_toggleBatteryMode cycles percent → power → minimal → percent', () => {
  const stored = {};
  const sandbox = createSandbox({
    localStorage: {
      getItem: (k) => stored[k] || null,
      setItem: (k, v) => { stored[k] = v; },
    },
  });
  const EnergyOrbitCard = new vm.Script(code + '\nEnergyOrbitCard;').runInContext(sandbox);
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.grid' });
  card._updateContent = () => {};

  assert.strictEqual(card._batteryMode, 'percent');

  card._toggleBatteryMode();
  assert.strictEqual(card._batteryMode, 'power');

  card._toggleBatteryMode();
  assert.strictEqual(card._batteryMode, 'minimal');

  card._toggleBatteryMode();
  assert.strictEqual(card._batteryMode, 'percent');
});

test('_toggleBatteryMode persists to localStorage', () => {
  const stored = {};
  const sandbox = createSandbox({
    localStorage: {
      getItem: (k) => stored[k] || null,
      setItem: (k, v) => { stored[k] = v; },
    },
  });
  const EnergyOrbitCard = new vm.Script(code + '\nEnergyOrbitCard;').runInContext(sandbox);
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.grid' });
  card._updateContent = () => {};

  card._toggleBatteryMode();
  const key = Object.keys(stored).find(k => k.includes('battery_mode'));
  assert.ok(key, 'Should have written a battery_mode key to localStorage');
  assert.strictEqual(stored[key], 'power');
});

// --- _setZendureMode ---

test('_setZendureMode calls hass.callService with correct params', () => {
  const sandbox = createSandbox();
  const EnergyOrbitCard = new vm.Script(code + '\nEnergyOrbitCard;').runInContext(sandbox);
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.grid', zendure_mode_entity: 'select.zendure' });

  let calledWith = null;
  card._hass = {
    callService: (domain, service, data) => { calledWith = { domain, service, data }; },
  };

  card._setZendureMode({ target: { value: 'smart' } });

  assert.ok(calledWith, 'callService should have been called');
  assert.strictEqual(calledWith.domain, 'select');
  assert.strictEqual(calledWith.service, 'select_option');
  assert.strictEqual(calledWith.data.entity_id, 'select.zendure');
  assert.strictEqual(calledWith.data.option, 'smart');
});

test('_setZendureMode does nothing without zendure_mode_entity', () => {
  const sandbox = createSandbox();
  const EnergyOrbitCard = new vm.Script(code + '\nEnergyOrbitCard;').runInContext(sandbox);
  const card = new EnergyOrbitCard();
  card.setConfig({ grid_entity: 'sensor.grid' });

  let called = false;
  card._hass = {
    callService: () => { called = true; },
  };

  card._setZendureMode({ target: { value: 'smart' } });
  assert.strictEqual(called, false, 'Should not call service without zendure_mode_entity');
});
