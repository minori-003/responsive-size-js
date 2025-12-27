// remToPx.test.js

import { describe, it, expect } from 'vitest';
import { remToPx } from '../../src/css';

describe('remToPx', () => {
  it('returns a px string from rem number', () => {
    const result = remToPx(2);

    expect(typeof result).toBe('string');
    expect(result).toContain('px');
  });

  it('accepts custom baseFontSize', () => {
    const result = remToPx(2, 10);

    expect(result).toContain('px');
  });

  it('accepts rem string input', () => {
    const result = remToPx('1.5rem', '16px');

    expect(result).toContain('px');
  });

  it('throws when baseFontSize is zero', () => {
    expect(() => remToPx(1, 0)).toThrow();
  });

  it('throws when baseFontSize is negative', () => {
    expect(() => remToPx(1, -16)).toThrow();
  });
});
