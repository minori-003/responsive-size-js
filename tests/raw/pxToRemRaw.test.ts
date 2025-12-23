// pxToRemRaw.js
import { describe, it, expect } from 'vitest';
import { pxToRemRaw } from '../../src/raw/pxToRemRaw';

describe('pxToRemRaw', () => {

  it('uses baseFontSize by default', () => {
    expect(pxToRemRaw(16, 16)).toBe(1);
  });

  it('delegates calculation to pxToEmRaw', () => {
    expect(pxToRemRaw('16px', 16)).toBe(1);
  });

});
