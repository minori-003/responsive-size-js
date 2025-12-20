// toRatio.test.ts

import { describe, it, expect } from 'vitest';
import { toRatio } from '../../src/utils/toRatio';

describe('toRatio', () => {
  describe('valid cases', () => {
    it('returns correct ratio for positive numbers', () => {
      expect(toRatio(10, 2)).toBe(5);
    });

    it('returns 0 when numerator is 0', () => {
      expect(toRatio(0, 5)).toBe(0);
    });

    it('supports decimal numbers', () => {
      expect(toRatio(1.5, 0.5)).toBe(3);
    });
  });

  describe('invalid numerator', () => {
    it('throws when numerator is NaN', () => {
      expect(() => toRatio(NaN, 5)).toThrow();
    });

    it('throws when numerator is Infinity', () => {
      expect(() => toRatio(Infinity, 5)).toThrow();
    });

    it('throws when numerator is -Infinity', () => {
      expect(() => toRatio(-Infinity, 5)).toThrow();
    });
  });

  describe('invalid denominator', () => {
    it('throws when denominator is 0', () => {
      expect(() => toRatio(5, 0)).toThrow();
    });

    it('throws when denominator is negative', () => {
      expect(() => toRatio(5, -1)).toThrow();
    });

    it('throws when denominator is NaN', () => {
      expect(() => toRatio(5, NaN)).toThrow();
    });

    it('throws when denominator is Infinity', () => {
      expect(() => toRatio(5, Infinity)).toThrow();
    });
  });

  expect(() => toRatio(NaN, 5))
  .toThrow('toRatio: numerator must be a finite number');

  expect(() => toRatio(5, 0))
  .toThrow('toRatio: denominator must be a positive finite number');
  

  describe('custom error message', () => {
    it('uses custom error message when provided', () => {
      expect(() =>
        toRatio(5, 0, { errorMessage: 'custom error' })
      ).toThrow('custom error');
    });
  });
});
