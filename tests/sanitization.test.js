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

test('_sanitizeNumber', async (t) => {
  const card = new EnergyOrbitCard();

  await t.test('should return parsed float for valid numeric input', () => {
    assert.strictEqual(card._sanitizeNumber(42, 0), 42);
    assert.strictEqual(card._sanitizeNumber('42.5', 0), 42.5);
    assert.strictEqual(card._sanitizeNumber('-10', 0), -10);
  });

  await t.test('should return fallback for NaN inputs', () => {
    assert.strictEqual(card._sanitizeNumber('not a number', 100), 100);
    assert.strictEqual(card._sanitizeNumber(undefined, 50), 50);
    assert.strictEqual(card._sanitizeNumber(null, 25), 25);
    assert.strictEqual(card._sanitizeNumber({}, 10), 10);
  });
});

test('_sanitizeColor', async (t) => {
  const card = new EnergyOrbitCard();

  await t.test('should return color if it matches safe pattern', () => {
    assert.strictEqual(card._sanitizeColor('#ffffff', '#000000'), '#ffffff');
    assert.strictEqual(card._sanitizeColor('red', '#000000'), 'red');
    assert.strictEqual(card._sanitizeColor('rgb(255, 0, 0)', '#000000'), 'rgb(255, 0, 0)');
    assert.strictEqual(card._sanitizeColor('var(--primary-color)', '#000000'), 'var(--primary-color)');
  });

  await t.test('should return fallback for unsafe colors', () => {
    assert.strictEqual(card._sanitizeColor('<script>alert(1)</script>', '#000000'), '#000000');
    assert.strictEqual(card._sanitizeColor('javascript:void(0)', '#000000'), '#000000');
    assert.strictEqual(card._sanitizeColor('"; background: url(x)', '#000000'), '#000000');
  });

  await t.test('should return fallback if input is not a string', () => {
    assert.strictEqual(card._sanitizeColor(null, '#000000'), '#000000');
    assert.strictEqual(card._sanitizeColor(123, '#000000'), '#000000');
  });
});

test('_hexToRgb', async (t) => {
  const card = new EnergyOrbitCard();

  await t.test('should convert 6-digit hex to rgb string', () => {
    assert.strictEqual(card._hexToRgb('#FF6B35'), '255,107,53');
    assert.strictEqual(card._hexToRgb('#000000'), '0,0,0');
    assert.strictEqual(card._hexToRgb('#ffffff'), '255,255,255');
  });

  await t.test('should convert 3-digit hex to rgb string', () => {
    assert.strictEqual(card._hexToRgb('#F63'), '255,102,51');
    assert.strictEqual(card._hexToRgb('#000'), '0,0,0');
  });

  await t.test('should handle hex without #', () => {
    assert.strictEqual(card._hexToRgb('FF6B35'), '255,107,53');
    assert.strictEqual(card._hexToRgb('F63'), '255,102,51');
  });

  await t.test('should return default rgb for invalid hex', () => {
    const defaultRgb = '128,128,128';
    assert.strictEqual(card._hexToRgb('invalid'), defaultRgb);
    assert.strictEqual(card._hexToRgb(null), defaultRgb);
    assert.strictEqual(card._hexToRgb('#GGGGGG'), defaultRgb);
  });
});
