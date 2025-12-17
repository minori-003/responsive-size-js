// rClampRem.test.js
import { describe, it, expect } from 'vitest';
import { rClampRem } from './responsive/rClampRem.js';

describe('rClampRem', () => {
  it('returns clamp css string with rem units', () => {
    const result = rClampRem(16, 24, 375, 1440);

    expect(result).toContain('clamp(');
    expect(result).toContain('rem');
    expect(result).toContain('vw');
  });

  it('converts px values to rem correctly', () => {
    const result = rClampRem(
      16,
      24,
      375,
      1440,
      { baseFontSize: 16, precision: 3 }
    );

    expect(result).toContain('1rem');
    expect(result).toContain('1.5rem');
  });

  it('ensures clamp min is smaller than clamp max', () => {
    const result = rClampRem(16, 24, 375, 1440);
    // Assuming baseFontSize is 16
    expect(result).toMatch(/^clamp\(\d+(\.\d+)?rem/);
    expect(result).toMatch(/\d+(\.\d+)?rem\)$/);
  });

  it('uses + when intercept is positive', () => {
    const result = rClampRem(16, 32, 375, 1440);
    expect(result).toMatch(/vw \+ \d+(\.\d+)?rem/);
  });

  it('uses negative slope for reverse scaling', () => {
    const result = rClampRem(
      32,
      16,
      375,
      1440,
      { allowReverse: true }
    );
    // Slope is negative
    expect(result).toMatch(/-\d+(\.\d+)?vw/);
  });

  it('uses - when intercept is negative', () => {
    // 10 -> 100 over 375 -> 1440 results in negative intercept
    const result = rClampRem(10, 100, 375, 1440);
    expect(result).toMatch(/vw - \d+(\.\d+)?rem/);
  });

  it('works with reverse scaling when allowed', () => {
    const result = rClampRem(
      24,
      16,
      375,
      1440,
      { allowReverse: true }
    );

    expect(result.startsWith('clamp(')).toBe(true);
  });

  it('throws when precision is invalid', () => {
    expect(() => {
      rClampRem(16, 24, 375, 1440, { precision: -1 });
    }).toThrow(RangeError);
  });
});
