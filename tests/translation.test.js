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
    appendChild() {}
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
      attachShadow: () => ({}),
      addEventListener: () => {},
    })
  },
  console: console,
  Event: class {},
  CustomEvent: class {},
  requestAnimationFrame: (cb) => cb(),
};

vm.createContext(sandbox);
const script = new vm.Script(code + '\n[EnergyOrbitCard, EnergyOrbitCardEditor];');
const [EnergyOrbitCard, EnergyOrbitCardEditor] = script.runInContext(sandbox);

test('Translation method _t', async (t) => {
  await t.test('EnergyOrbitCard should translate correctly in English', () => {
    const card = new EnergyOrbitCard();
    card._hass = { language: 'en' };
    assert.strictEqual(card._t('network'), 'GRID');
  });

  await t.test('EnergyOrbitCard should translate correctly in French', () => {
    const card = new EnergyOrbitCard();
    card._hass = { language: 'fr' };
    assert.strictEqual(card._t('network'), 'RÉSEAU');
  });

  await t.test('EnergyOrbitCard should fallback to key for unknown key', () => {
    const card = new EnergyOrbitCard();
    card._hass = { language: 'fr' };
    assert.strictEqual(card._t('unknown_key'), 'unknown_key');
  });

  await t.test('EnergyOrbitCard should fallback to English for unknown language', () => {
    const card = new EnergyOrbitCard();
    card._hass = { language: 'it' };
    assert.strictEqual(card._t('network'), 'GRID');
  });

  await t.test('EnergyOrbitCardEditor should translate correctly in English', () => {
    const editor = new EnergyOrbitCardEditor();
    editor._hass = { language: 'en' };
    assert.strictEqual(editor._t('header_entities'), 'Entities');
  });

  await t.test('EnergyOrbitCardEditor should translate correctly in French', () => {
    const editor = new EnergyOrbitCardEditor();
    editor._hass = { language: 'fr' };
    assert.strictEqual(editor._t('header_entities'), 'Entités');
  });
});
