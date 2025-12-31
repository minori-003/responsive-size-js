// vw.test.ts
import { describe, it, expect } from 'vitest';

import {
  pxToVw,
  vwToPx,
  pxToVwPc,
  vwPcToPx,
  pxToVwSp,
  vwSpToPx,
} from '../../src/css';

describe('vw unit conversion (css layer)', () => {
  it('pxToVw returns a vw string', () => {
    const result = pxToVw(100, 375);

    expect(typeof result).toBe('string');
    expect(result).toContain('vw');
  });

  it('vwToPx returns a px string', () => {
    const result = vwToPx(100, 375);

    expect(typeof result).toBe('string');
    expect(result).toContain('px');
  });

  it('accepts number and string inputs', () => {
    const result = pxToVw('100px', '375px');

    expect(result).toContain('vw');
  });

  it('throws when viewport is omitted', () => {
    expect(() => pxToVw(100)).toThrow();
    expect(() => vwToPx(100)).toThrow();
  });

  it('throws when viewport is zero or negative', () => {
    expect(() => pxToVw(100, 0)).toThrow();
    expect(() => pxToVw(100, -375)).toThrow();
  });

  it('sp variant returns vw string', () => {
    const result = pxToVwSp(375);

    expect(result).toContain('vw');
  });

  it('vwSpToPx returns px string', () => {
    const result = vwSpToPx(100);

    expect(result).toContain('px');
  });

  it('pc variant returns vw string', () => {
    const result = pxToVwPc(1440);

    expect(result).toContain('vw');
  });

  it('vwPcToPx returns px string', () => {
    const result = vwPcToPx(100);

    expect(result).toContain('px');
  });
});
