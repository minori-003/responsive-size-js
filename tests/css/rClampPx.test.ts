// rClampPx.test.js
import { describe, it, expect } from 'vitest';
import { rClampPx } from '../../src/';

describe('rClampPx', () => {
  it('returns clamp css string for normal scaling', () => {
    const result = rClampPx(16, 24, 375, 1440);

    expect(result).toContain('clamp(');
    expect(result).toContain('vw');
    expect(result).toContain('px');
  });

  it('ensures clamp min is smaller than clamp max', () => {
    const result = rClampPx(16, 24, 375, 1440);

    expect(result.startsWith('clamp(16px')).toBe(true);
    expect(result.endsWith('24px)')).toBe(true);
  });

  it('uses + when intercept is positive', () => {
    const result = rClampPx(16, 32, 375, 1440);
    expect(result).toMatch(/vw \+ \d+(\.\d+)?px/);
  });

  it('uses negative slope for reverse scaling', () => {
    const result = rClampPx(
      32,
      16,
      375,
      1440,
      { allowReverse: true }
    );
    // Slope is negative, intercept is positive
    expect(result).toMatch(/vw \+ \d+(\.\d+)?px/);
  });

  it('uses - when intercept is negative', () => {
    // 10 -> 100 over 375 -> 1440 results in negative intercept
    const result = rClampPx(10, 100, 375, 1440);
    expect(result).toMatch(/vw - \d+(\.\d+)?px/);
  });

  it('respects precision option', () => {
    const result = rClampPx(16, 24, 375, 1440, { precision: 1 });
    expect(result).toMatch(/\d+\.\d{1}px/);
  });

  it('throws when reverse scaling is not allowed', () => {
    expect(() => {
      rClampPx(24, 16, 375, 1440);
    }).toThrow(RangeError);
  });
});
