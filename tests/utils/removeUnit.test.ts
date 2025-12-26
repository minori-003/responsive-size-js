import { describe, it, expect } from 'vitest';
import { removeUnit } from '../../src/utils/removeUnit';

describe('removeUnit', () => {

  describe('numeric input', () => {
    it('returns the number as-is', () => {
      expect(removeUnit(16)).toBe(16);
      expect(removeUnit(-8)).toBe(-8);
      expect(removeUnit(0.5)).toBe(0.5);
    });
  });

  describe('string input with unit', () => {
    it('extracts integer value', () => {
      expect(removeUnit('16px')).toBe(16);
      expect(removeUnit('-8rem')).toBe(-8);
    });

    it('extracts decimal value', () => {
      expect(removeUnit('0.5em')).toBe(0.5);
      expect(removeUnit('.5rem')).toBe(0.5);
    });

    it('ignores trailing characters', () => {
      expect(removeUnit('16px solid')).toBe(16);
    });
  });

  describe('invalid input', () => {
    it('throws when no numeric value can be extracted', () => {
      expect(() => removeUnit('abc')).toThrow(Error);
      expect(() => removeUnit('px16')).toThrow(Error);
      expect(() => removeUnit('')).toThrow(Error);
    });

    it('throws RangeError for non-finite numbers', () => {
      expect(() => removeUnit(NaN)).toThrow(Error);
      expect(() => removeUnit(Infinity)).toThrow(Error);
      expect(() => removeUnit(-Infinity)).toThrow(Error);
    });
  });

});
