// percent.test.ts

import { describe, it, expect } from 'vitest';
import { pxToPercent, percentToPx } from '../../src/css';

describe('percent unit conversion (css layer)', () => {
  describe('pxToPercent', () => {
    it('returns a percent string from px number', () => {
      const result = pxToPercent(50, 200);

      expect(typeof result).toBe('string');
      expect(result).toContain('%');
    });

    it('accepts px string input', () => {
      const result = pxToPercent('25px', '200px');

      expect(result).toContain('%');
    });

    it('throws when container size is omitted', () => {
      // @ts-expect-error intentional
      expect(() => pxToPercent(50)).toThrow();
    });

    it('throws when container size is zero', () => {
      expect(() => pxToPercent(50, 0)).toThrow();
    });

    it('throws when container size is negative', () => {
      expect(() => pxToPercent(50, -200)).toThrow();
    });
  });

  describe('percentToPx', () => {
    it('returns a px string from percent number', () => {
      const result = percentToPx(50, 200);

      expect(typeof result).toBe('string');
      expect(result).toContain('px');
    });

    it('accepts percent string input', () => {
      const result = percentToPx('25%', '200px');

      expect(result).toContain('px');
    });

    it('throws when container size is omitted', () => {
      // @ts-expect-error intentional
      expect(() => percentToPx(50)).toThrow();
    });

    it('throws when container size is zero', () => {
      expect(() => percentToPx(50, 0)).toThrow();
    });

    it('throws when container size is negative', () => {
      expect(() => percentToPx(50, -200)).toThrow();
    });
  });
});
