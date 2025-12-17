// rClampRaw.test.js
import { describe, it, expect } from 'vitest';
import { rClampRaw } from './responsive/rClampRaw.js';

describe('rClampRaw', () => {
  it('calculates correct slope and intercept', () => {
    const { slope, intercept } = rClampRaw(16, 24, 375, 1440);

    const expectedSlope = (24 - 16) / (1440 - 375);
    const expectedIntercept = 16 - expectedSlope * 375;

    expect(slope).toBeCloseTo(expectedSlope);
    expect(intercept).toBeCloseTo(expectedIntercept);
  });

  it('handles inputs with units correctly', () => {
    const { slope, intercept } = rClampRaw('16px', '24px', '375px', '1440px');
    const expectedSlope = (24 - 16) / (1440 - 375);
    const expectedIntercept = 16 - expectedSlope * 375;

    expect(slope).toBeCloseTo(expectedSlope);
    expect(intercept).toBeCloseTo(expectedIntercept);
  });

  it('returns negative slope when reverse scaling is allowed', () => {
    const result = rClampRaw(24, 16, 375, 1440, { allowReverse: true });
    expect(result.slope).toBeLessThan(0);
    expect(Number.isFinite(result.intercept)).toBe(true);
  });

  it('throws when reverse scaling is not allowed', () => {
    expect(() => {
      rClampRaw(24, 16, 375, 1440);
    }).toThrow(RangeError);
  });

  it('throws when minSize equals maxSize', () => {
    expect(() => {
      rClampRaw(16, 16, 375, 1440);
    }).toThrow(RangeError);
  });

  it('throws when minViewport is greater than or equal to maxViewport', () => {
    expect(() => {
      rClampRaw(16, 24, 1440, 375);
    }).toThrow(RangeError);
  });

  it('throws when viewport diff is smaller than minViewportDiff', () => {
    expect(() => {
      rClampRaw(16, 24, 375, 376, { minViewportDiff: 10 });
    }).toThrow(RangeError);
  });
});
