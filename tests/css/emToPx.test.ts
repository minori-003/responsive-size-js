// emToPx.test.js

import { describe, it, expect } from 'vitest';
import { emToPx } from '../../src/css';

describe('emToPx', () => {
  it('returns a px string from em number', () => {
    const result = emToPx(2, 16);

    expect(typeof result).toBe('string');
    expect(result).toContain('px');
  });

  it('accepts custom baseFontSize', () => {
    const result = emToPx(2, 10);

    expect(result).toContain('px');
  });

  it('accepts em string input', () => {
    const result = emToPx('1.5em', '16px');

    expect(result).toContain('px');
  });

  it('throws when baseFontSize is zero', () => {
    expect(() => emToPx(1, 0)).toThrow();
  });

  it('throws when baseFontSize is negative', () => {
    expect(() => emToPx(1, -16)).toThrow();
  });

  it('throws when baseFontSize is omitted', () => {
    expect(() => emToPx(16)).toThrow();
  });
});
