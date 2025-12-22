// rClampCore.test.ts

// rClampCore.test.ts
import { describe, it, expect } from 'vitest';
import { rClampCore } from '../../src/raw/rClampCore';

describe('rClampCore', () => {
  it('calculates slope and intercept correctly (number input)', () => {
    const result = rClampCore(16, 24, 320, 1280);

    expect(result.slope).toBeCloseTo(8 / 960);
    expect(result.intercept).toBeCloseTo(16 - (8 / 960) * 320);
  });

  it('accepts unit values as strings', () => {
    const result = rClampCore('16px', '24px', '320px', '1280px');

    expect(result.slope).toBeCloseTo(8 / 960);
    expect(result.intercept).toBeCloseTo(16 - (8 / 960) * 320);
  });

  it('throws when minViewport >= maxViewport', () => {
    expect(() =>
      rClampCore(16, 24, 1000, 1000)
    ).toThrow(RangeError);
  });

  it('throws when minSize > maxSize and allowReverse is false', () => {
    expect(() =>
      rClampCore(24, 16, 320, 1280)
    ).toThrow(RangeError);
  });

  it('does not throw when allowReverse is true', () => {
    expect(() =>
      rClampCore(24, 16, 320, 1280, { allowReverse: true })
    ).not.toThrow();
  });

  it('throws when minSize equals maxSize', () => {
    expect(() =>
      rClampCore(16, 16, 320, 1280)
    ).toThrow(RangeError);
  });

  it('throws when viewport diff is smaller than minViewportDiff', () => {
    expect(() =>
      rClampCore(16, 24, 320, 320.5, { minViewportDiff: 1 })
    ).toThrow(RangeError);
  });
});
