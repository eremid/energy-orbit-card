import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const code = fs.readFileSync(path.resolve('energy-orbit-card.js'), 'utf8');

function createSandbox(localStorageOverrides = {}) {
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
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      ...localStorageOverrides
    },
    document: {
      createElement: (tag) => {
          return {
            attachShadow: () => ({})
          };
      }
    },
    console: console,
    Event: class {},
    requestAnimationFrame: (cb) => cb(),
  };
  vm.createContext(sandbox);
  return sandbox;
}

test('EnergyOrbitCard handles localStorage.getItem exception in setConfig', async (t) => {
  const sandbox = createSandbox({
    getItem: () => { throw new Error('localStorage blocked'); }
  });
  const script = new vm.Script(code + '\nEnergyOrbitCard;');
  const EnergyOrbitCard = script.runInContext(sandbox);

  const card = new EnergyOrbitCard();
  const config = { grid_entity: 'sensor.grid' };

  // This should not throw
  assert.doesNotThrow(() => {
    card.setConfig(config);
  });

  assert.strictEqual(card._batteryMode, 'percent', 'Should fallback to default batteryMode');
  assert.strictEqual(card._solarMode, 'total', 'Should fallback to default solarMode');
});

test('EnergyOrbitCard handles localStorage.setItem exception in _toggleBatteryMode', async (t) => {
    const sandbox = createSandbox({
      setItem: () => { throw new Error('localStorage full'); }
    });
    const script = new vm.Script(code + '\nEnergyOrbitCard;');
    const EnergyOrbitCard = script.runInContext(sandbox);

    const card = new EnergyOrbitCard();
    card.config = { grid_entity: 'sensor.grid' };
    card._updateContent = () => {}; // Mock

    // This should not throw
    assert.doesNotThrow(() => {
      card._toggleBatteryMode();
    });
});
