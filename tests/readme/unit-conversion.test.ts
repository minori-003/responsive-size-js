// tests/readme/unit-conversion.test.ts
// These tests ensure README examples always stay valid.

import { describe, it, expect } from 'vitest';
import {
  pxToRem,
  remToPx,
  pxToEm,
  emToPx,
  pxToPt,
  ptToPx,
} from '../../src';

describe('README: unit conversion', () => {
  it('pxToRem', () => {
    expect(pxToRem(16)).toContain('rem');
  });

  it('remToPx', () => {
    expect(remToPx(1)).toContain('px');
  });

  it('pxToEm / emToPx (no defaults)', () => {
    expect(pxToEm(16, 16)).toContain('em');
    expect(emToPx(1, 16)).toContain('px');
  });

  it('pxToPt / ptToPx', () => {
    expect(pxToPt(16)).toContain('pt');
    expect(ptToPx(12)).toContain('px');
  });
});
