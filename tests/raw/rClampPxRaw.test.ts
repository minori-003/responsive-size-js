// rClampPxRaw.test.ts
import { describe, it, expect } from 'vitest';
import { rClampPxRaw } from '../../src/raw/rClampPxRaw';

describe('rClampPxRaw', () => {
  it('calculates correct vwCoef and intercept', () => {
    const { vwCoef, intercept } = rClampPxRaw(16, 24, 375, 1440, { minViewportDiff: 1, allowReverse: false });

    const expectedSlope = (24 - 16) / (1440 - 375);
    const expectedIntercept = 16 - expectedSlope * 375;

    expect(vwCoef).toBeCloseTo(expectedSlope * 100);
    expect(intercept).toBeCloseTo(expectedIntercept);
  });

  it('handles inputs with units correctly', () => {
    const { vwCoef, intercept } = rClampPxRaw('16px', '24px', '375px', '1440px',{ minViewportDiff: 1, allowReverse: false });
    const expectedSlope = (24 - 16) / (1440 - 375);
    const expectedIntercept = 16 - expectedSlope * 375;

    expect(vwCoef).toBeCloseTo(expectedSlope * 100);
    expect(intercept).toBeCloseTo(expectedIntercept);
  });

  it('returns negative slope when reverse scaling is allowed', () => {
    const result = rClampPxRaw(24, 16, 375, 1440, {minViewportDiff: 1, allowReverse: true });
    expect(result.vwCoef).toBeLessThan(0);
    expect(Number.isFinite(result.intercept)).toBe(true);
  });

  it('throws when reverse scaling is not allowed', () => {
    expect(() => {
      rClampPxRaw(24, 16, 375, 1440, {minViewportDiff: 1, allowReverse: false });
    }).toThrow(RangeError);
  });

  it('throws when minSize equals maxSize', () => {
    expect(() => {
      rClampPxRaw(16, 16, 375, 1440, { minViewportDiff: 1, allowReverse: false });
    }).toThrow(RangeError);
  });

  it('throws when minViewport is greater than or equal to maxViewport', () => {
    expect(() => {
      rClampPxRaw(16, 24, 1440, 375,{ minViewportDiff: 1, allowReverse: false });
    }).toThrow(RangeError);
  });

  it('throws when viewport diff is smaller than minViewportDiff', () => {
    expect(() => {
      rClampPxRaw(16, 24, 375, 376, { minViewportDiff: 10, allowReverse: false });
    }).toThrow(RangeError);
  });

  it('allows viewport diff equal to minViewportDiff', () => {
    expect(() => {
        rClampPxRaw(16, 24, 375, 385, {
                minViewportDiff: 10,
                allowReverse: false,
            });
        }).not.toThrow();
    });


  it('supports negative sizes', () => {
    const { vwCoef, intercept } = rClampPxRaw(-16, 16, 375, 1440, {
        minViewportDiff: 1,
        allowReverse: false,
    });

        expect(Number.isFinite(vwCoef)).toBe(true);
        expect(Number.isFinite(intercept)).toBe(true);
    });

    it('supports decimal sizes and viewports', () => {
        const result = rClampPxRaw(1.5, 2.5, 320.5, 1440.5, {
            minViewportDiff: 1,
            allowReverse: false,
        });
        expect(Number.isFinite(result.vwCoef)).toBe(true);
        expect(Number.isFinite(result.intercept)).toBe(true);
    });

});
