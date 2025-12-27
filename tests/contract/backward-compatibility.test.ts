// backward-compatibility.test.ts

import { describe, it, expect } from 'vitest';
import {
  rClampPx,
  rClampRem,
  pxToRem,
  remToPx,
} from '../../src/css';

describe('Backward compatibility (public API)', () => {
  it('supports legacy rClampPx usage', () => {
    const result = rClampPx(16, 24, 375, 1440);
    expect(result).toContain('clamp(');
  });

  it('supports legacy rClampRem usage without options', () => {
    const result = rClampRem(16, 24, 375, 1440);
    expect(result).toContain('clamp(');
  });

  it('supports legacy pxToRem usage', () => {
    expect(pxToRem(16)).toBe('1rem');
  });

  it('supports legacy remToPx usage', () => {
    expect(remToPx('1rem')).toBe('16px');
  });
});
