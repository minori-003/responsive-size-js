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

  it('includes min and max values in clamp()', () => {
    const result = rClampPx(16, 24, 375, 1440);
    expect(result).toContain('16px');
    expect(result).toContain('24px');
  });

  it('accepts precision option', () => {
    expect(() => {
      rClampPx(16, 24, 375, 1440, { precision: 1 });
    }).not.toThrow();
  });

  it('throws when reverse scaling is not allowed', () => {
    expect(() => {
      rClampPx(24, 16, 375, 1440);
    }).toThrow();
  });
});
