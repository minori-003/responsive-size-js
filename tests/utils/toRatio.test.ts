import { describe, it, expect } from 'vitest';
import { toRatio } from '../../src/utils/toRatio';

describe('toRatio', () => {

  describe('valid inputs', () => {
    it('returns numerator / denominator', () => {
      expect(toRatio(10, 5)).toBe(2);
      expect(toRatio(0, 5)).toBe(0);
    });
  });

  describe('invalid numerator', () => {
    it('throws when numerator is NaN or Infinity', () => {
      expect(() => toRatio(NaN, 5)).toThrow();
      expect(() => toRatio(Infinity, 5)).toThrow();
      expect(() => toRatio(-Infinity, 5)).toThrow();
    });
  });

  describe('invalid denominator', () => {
    it('throws when denominator is not a positive finite number', () => {
      expect(() => toRatio(5, 0)).toThrow();
      expect(() => toRatio(5, -1)).toThrow();
      expect(() => toRatio(5, NaN)).toThrow();
      expect(() => toRatio(5, Infinity)).toThrow();
      expect(() => toRatio(5, -Infinity)).toThrow();
    });
  });

});
