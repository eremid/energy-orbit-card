import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const code = fs.readFileSync(path.resolve('energy-orbit-card.js'), 'utf8');

const mockLocalStorage = {
  getItem: () => null,
  setItem: () => {},
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
const script = new vm.Script(code + '\nEnergyOrbitCard;');
const EnergyOrbitCard = script.runInContext(sandbox);

test('_getBatteryLevel aggregation', async (t) => {
  await t.test('should return value from single battery_entity', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      battery_entity: 'sensor.battery'
    });
    card._hass = {
      states: {
        'sensor.battery': { state: '45' }
      }
    };
    assert.strictEqual(card._getBatteryLevel(), 45);
  });

  await t.test('should return average of multiple battery_entities', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      battery_entities: ['sensor.battery1', 'sensor.battery2']
    });
    card._hass = {
      states: {
        'sensor.battery1': { state: '40' },
        'sensor.battery2': { state: '60' }
      }
    };
    assert.strictEqual(card._getBatteryLevel(), 50);
  });

  await t.test('should return 0 if no entities and no hass', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      battery_entities: []
    });
    assert.strictEqual(card._getBatteryLevel(), 0);
  });
});

test('_getBatteryPower aggregation', async (t) => {
  await t.test('should return value from single battery_power_entity', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      battery_power_entity: 'sensor.battery_power'
    });
    card._hass = {
      states: {
        'sensor.battery_power': { state: '100' }
      }
    };
    assert.strictEqual(card._getBatteryPower(), 100);
  });

  await t.test('should return sum of multiple battery_power_entities', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      battery_power_entities: ['sensor.battery_power1', 'sensor.battery_power2']
    });
    card._hass = {
      states: {
        'sensor.battery_power1': { state: '100' },
        'sensor.battery_power2': { state: '200' }
      }
    };
    assert.strictEqual(card._getBatteryPower(), 300);
  });

  await t.test('should handle negative values (charging)', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      battery_power_entities: ['sensor.battery_power1', 'sensor.battery_power2']
    });
    card._hass = {
      states: {
        'sensor.battery_power1': { state: '-100' },
        'sensor.battery_power2': { state: '-50' }
      }
    };
    assert.strictEqual(card._getBatteryPower(), -150);
  });
});

test('_getSolarProduction aggregation', async (t) => {
  await t.test('should return value from single solar_entity', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      solar_entity: 'sensor.solar'
    });
    card._hass = {
      states: {
        'sensor.solar': { state: '1000' }
      }
    };
    assert.strictEqual(card._getSolarProduction(), 1000);
  });

  await t.test('should return sum of multiple solar_entities', () => {
    const card = new EnergyOrbitCard();
    card.setConfig({
      grid_entity: 'sensor.grid',
      solar_entities: ['sensor.solar1', 'sensor.solar2']
    });
    card._hass = {
      states: {
        'sensor.solar1': { state: '1500' },
        'sensor.solar2': { state: '2500' }
      }
    };
    assert.strictEqual(card._getSolarProduction(), 4000);
  });
});
