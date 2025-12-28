// tests/readme/rClampRem.test.ts
// These tests ensure README examples always stay valid.

import { describe, it, expect } from 'vitest';
import { rClampRem } from '../../src';

describe('README: rClampRem', () => {
  it('returns a clamp() string using rem and vw', () => {
    const result = rClampRem(16, 24, 375, 1440);

    expect(result).toContain('clamp(');
    expect(result).toContain('vw');
    expect(result).toContain('rem');

    expect(result.startsWith('clamp(1rem')).toBe(true);
    expect(result.endsWith('1.5rem)')).toBe(true);
  });

});
