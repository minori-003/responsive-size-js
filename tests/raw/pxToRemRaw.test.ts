// pxToRemRaw.js
import { describe, it, expect } from 'vitest';
import { pxToRemRaw } from '../../src/raw/pxToRemRaw';
import { DEFAULT_SETTINGS } from '../../src/setting';

describe('pxToRemRaw', () => {

  it('uses DEFAULT_SETTINGS.rootFontSize by default', () => {
    expect(pxToRemRaw(16)).toBe(
      16 / DEFAULT_SETTINGS.rootFontSize
    );
  });

  it('delegates calculation to pxToEmRaw', () => {
    expect(pxToRemRaw('16px', 16)).toBe(1);
  });

});
