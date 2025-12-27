// pxToEm.test.js

import { describe, it, expect } from 'vitest';
import { pxToEm } from '../../src/css';

describe('pxToEm', () => {
  it('returns a valid CSS em value', () => {
    const result = pxToEm(32, 16);

    expect(result).toMatch(/em$/);
  });

  it('accepts custom baseFontSize', () => {
    const result = pxToEm(20, 10);

    expect(result).toContain('em');
  });

  it('accepts px string input', () => {
    const result = pxToEm('16px', '16px');

    expect(result).toContain('em');
  });

  it('throws when baseFontSize is zero', () => {
    expect(() => pxToEm(16, 0)).toThrow();
  });

  it('throws when baseFontSize is negative', () => {
    expect(() => pxToEm(16, -16)).toThrow();
  });

  it('throws when baseFontSize is omitted', () => {
    expect(() => pxToEm(16)).toThrow();
  });
});
