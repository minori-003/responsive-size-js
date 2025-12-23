// rClampPxRaw.test.js
import { describe, it, expect } from 'vitest';
import { rClampPxRaw } from '../../src/raw/rClampPxRaw';

describe('rClampPxRaw', () => {
  it('calculates correct vwCoef and intercept', () => {
    const { vwCoef, intercept } = rClampPxRaw(16, 24, 375, 1440);

    const expectedSlope = (24 - 16) / (1440 - 375);
    const expectedIntercept = 16 - expectedSlope * 375;

    expect(vwCoef).toBeCloseTo(expectedSlope);
    expect(intercept).toBeCloseTo(expectedIntercept);
  });

  it('handles inputs with units correctly', () => {
    const { vwCoef, intercept } = rClampPxRaw('16px', '24px', '375px', '1440px');
    const expectedSlope = (24 - 16) / (1440 - 375);
    const expectedIntercept = 16 - expectedSlope * 375;

    expect(vwCoef).toBeCloseTo(expectedSlope);
    expect(intercept).toBeCloseTo(expectedIntercept);
  });

  it('returns negative slope when reverse scaling is allowed', () => {
    const result = rClampPxRaw(24, 16, 375, 1440, { allowReverse: true });
    expect(result.vwCoef).toBeLessThan(0);
    expect(Number.isFinite(result.intercept)).toBe(true);
  });

  it('throws when reverse scaling is not allowed', () => {
    expect(() => {
      rClampPxRaw(24, 16, 375, 1440, { allowReverse: false });
    }).toThrow(RangeError);
  });

  it('throws when minSize equals maxSize', () => {
    expect(() => {
      rClampPxRaw(16, 16, 375, 1440, { minViewportDiff: 1 });
    }).toThrow(RangeError);
  });

  it('throws when minViewport is greater than or equal to maxViewport', () => {
    expect(() => {
      rClampPxRaw(16, 24, 1440, 375);
    }).toThrow(RangeError);
  });

  it('throws when viewport diff is smaller than minViewportDiff', () => {
    expect(() => {
      rClampPxRaw(16, 24, 375, 376, { minViewportDiff: 10 });
    }).toThrow(RangeError);
  });
});
