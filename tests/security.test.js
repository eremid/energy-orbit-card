import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const code = fs.readFileSync(path.resolve('energy-orbit-card.js'), 'utf8');

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
  },
  document: {
    createElement: (tag) => {
        if (tag === 'option') {
            return {
                value: '',
                textContent: ''
            };
        }
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
const script = new vm.Script(code + '\nEnergyOrbitCard;');
const EnergyOrbitCard = script.runInContext(sandbox);

test('Security: zendureSelect options safety', async (t) => {
  const card = new EnergyOrbitCard();
  const optionsCreated = [];
  const mockSelect = {
    innerHTML: 'something',
    appendChild: (child) => optionsCreated.push(child),
    addEventListener: () => {}
  };
  card.shadowRoot = {
    getElementById: (id) => id === 'zendure-selector' ? mockSelect : null
  };

  // Malicious translation
  const maliciousString = '"><img src=x onerror=alert(1)>';
  card._t = (key) => maliciousString;

  card._setupListeners();

  assert.strictEqual(mockSelect.innerHTML, '', 'innerHTML should be cleared');
  assert.strictEqual(optionsCreated.length, 5, 'Should have created 5 options');

  // options[2], [3], [4] should have the malicious string
  assert.strictEqual(optionsCreated[2].textContent, maliciousString);
  assert.strictEqual(optionsCreated[3].textContent, maliciousString);
  assert.strictEqual(optionsCreated[4].textContent, maliciousString);
});
