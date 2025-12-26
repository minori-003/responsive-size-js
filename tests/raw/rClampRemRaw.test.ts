import { describe, it, expect } from 'vitest';
import { rClampRemRaw } from '../../src/raw/rClampRemRaw';

describe('rClampRemRaw', () => {
  it('基本的な clamp 計算ができる', () => {
    const result = rClampRemRaw(
      14,
      18,
      375,
      1440,
      {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 16,
      }
    );

    expect(result).toHaveProperty('minRem');
    expect(result).toHaveProperty('maxRem');
    expect(result).toHaveProperty('vwCoef');
    expect(result).toHaveProperty('interceptRem');
  });
});

describe('rClampRemRaw 数値計算', () => {
  it('vwCoef が期待値になる', () => {
    const result = rClampRemRaw(
      14,
      18,
      375,
      1440,
      {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 16,
      }
    );

    expect(result.minRem).toBeCloseTo(0.875, 5);
    expect(result.maxRem).toBeCloseTo(1.125, 5);
    expect(result.vwCoef).toBeCloseTo(0.375586, 5);
  });
});

describe('rClampRemRaw minViewportDiff 境界値', () => {
  it('minViewport + minViewportDiff ちょうどは許可される', () => {
    const result = rClampRemRaw(
      14,
      18,
      375,
      376,
      {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 16,
      }
    );

    expect(Number.isFinite(result.vwCoef)).toBe(true);
  });
});

it('minViewportDiff 未満の場合はエラーになる', () => {
  expect(() =>
    rClampRemRaw(
      14,
      18,
      375,
      375,
      {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 16,
      }
    )
  ).toThrow();
});

describe('rClampRemRaw - valid cases', () => {

  it('returns normalized rem-based clamp parameters', () => {
    const result = rClampRemRaw(
      14,
      18,
      375,
      1440,
      {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 16,
      }
    );

    /**
     * px → rem
     * min: 14 / 16 = 0.875
     * max: 18 / 16 = 1.125
     */
    expect(result.minRem).toBeCloseTo(0.875);
    expect(result.maxRem).toBeCloseTo(1.125);

    /**
     * slope(px) = (18 - 14) / (1440 - 375)
     * vwCoef = slope * 100
     */
    const expectedSlope = (18 - 14) / (1440 - 375);
    expect(result.vwCoef).toBeCloseTo(expectedSlope * 100);

    /**
     * intercept(px) = minSize - slope * minViewport
     * interceptRem = interceptPx / baseFontSize
     */
    const interceptPx = 14 - expectedSlope * 375;
    expect(result.interceptRem).toBeCloseTo(interceptPx / 16);
  });

  it('returns negative vwCoef when reverse scaling is allowed', () => {
    const result = rClampRemRaw(
      18,
      14,
      375,
      1440,
      {
        allowReverse: true,
        minViewportDiff: 1,
        baseFontSize: 16,
      }
    );

    expect(result.vwCoef).toBeLessThan(0);
    expect(Number.isFinite(result.interceptRem)).toBe(true);
  });

});


describe('rClampRemRaw - invalid cases', () => {

  it('throws when baseFontSize is 0', () => {
    expect(() =>
      rClampRemRaw(14, 18, 375, 1440, {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 0,
      })
    ).toThrow(Error);
  });

  it('throws when baseFontSize is negative', () => {
    expect(() =>
      rClampRemRaw(14, 18, 375, 1440, {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: -16,
      })
    ).toThrow(Error);
  });

  it('throws when baseFontSize cannot be parsed as number', () => {
    expect(() =>
      rClampRemRaw(14, 18, 375, 1440, {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 'abc',
      })
    ).toThrow();
  });

  it('throws when minSize equals maxSize (delegated from rClampCore)', () => {
    expect(() =>
      rClampRemRaw(16, 16, 375, 1440, {
        allowReverse: false,
        minViewportDiff: 1,
        baseFontSize: 16,
      })
    ).toThrow(Error);
  });

});
