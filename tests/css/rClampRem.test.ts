// rClampRem.test.js
import { describe, it, expect } from 'vitest';
import { rClampRem } from '../../src/index';

describe('rClampRem', () => {
  it('returns clamp css string for normal scaling', () => {
    const result = rClampRem(16, 24, 375, 1440);
    expect(result).toContain('clamp(');
    expect(result).toContain('vw');
    expect(result).toContain('rem');
  });

  it('includes rem values in clamp()', () => {
    const result = rClampRem(16, 24, 375, 1440);
    expect(result).toContain('rem');
  });

  it('accepts precision option', () => {
    expect(() => {
      rClampRem(16, 24, 375, 1440, { precision: 1 });
    }).not.toThrow();
  });

  it('throws when reverse scaling is not allowed', () => {
    expect(() => {
      rClampRem(24, 16, 375, 1440);
    }).toThrow();
  });
});
