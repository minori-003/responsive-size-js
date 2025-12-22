// pxToEmRaw.js
import { describe, it, expect } from 'vitest';
import { pxToEmRaw } from '../../src/raw/pxToEmRaw';

describe('pxToEmRaw', () => {

  it('returns correct em value from numbers', () => {
    expect(pxToEmRaw(16, 16)).toBe(1);
    expect(pxToEmRaw(12, 16)).toBe(0.75);
  });

  it('returns correct em value from mixed string and number inputs', () => {
    expect(pxToEmRaw('16px', 16)).toBe(1);
    expect(pxToEmRaw(16, '16px')).toBe(1);
    expect(pxToEmRaw('12px', '16px')).toBe(0.75);
  });

});
