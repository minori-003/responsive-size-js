// pxToRem.test.js

import { describe, it, expect } from 'vitest';
import { pxToRem } from '../../src/css';

describe('pxToRem', () => {
  it('returns a rem string from px number', () => {
    const result = pxToRem(32);

    expect(typeof result).toBe('string');
    expect(result).toContain('rem');
  });

  it('accepts custom baseFontSize', () => {
    const result = pxToRem(20, 10);

    expect(result).toContain('rem');
  });

  it('accepts px string input', () => {
    const result = pxToRem('16px');

    expect(result).toContain('rem');
  });

  it('throws when baseFontSize is zero', () => {
    expect(() => pxToRem(16, 0)).toThrow();
  });

  it('throws when baseFontSize is negative', () => {
    expect(() => pxToRem(16, -16)).toThrow();
  });
});
