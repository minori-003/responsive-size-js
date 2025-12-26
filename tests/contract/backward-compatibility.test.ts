import { describe, it, expect } from 'vitest';
import {
  rClampPx,
  rClampRem,
  pxToRem,
  pxToEm,
  pxToPt,
  ptToPx,
  emToPx,
  remToPx,
} from '../../src';

describe('Backward compatibility (public API)', () => {
  describe('rClampPx', () => {
    it('returns a valid clamp() string using px and vw', () => {
      const result = rClampPx(16, 24, 375, 1440);

      expect(typeof result).toBe('string');
      expect(result).toContain('clamp(');
      expect(result).toContain('px');
      expect(result).toContain('vw');
    });

    it('does not throw for typical inputs', () => {
      expect(() => {
        rClampPx(12, 18, 320, 1280);
      }).not.toThrow();
    });
  });

  describe('rClampRem', () => {
    it('returns a valid clamp() string using rem and vw', () => {
      const result = rClampRem(16, 24, 375, 1440);

      expect(typeof result).toBe('string');
      expect(result).toContain('clamp(');
      expect(result).toContain('rem');
      expect(result).toContain('vw');
    });
  });

  describe('unit conversion helpers (css layer)', () => {
    it('pxToRem returns rem string', () => {
      const result = pxToRem(16);

      expect(result).toBe('1rem');
    });

    it('pxToEm returns em string', () => {
      const result = pxToEm(16, 16);

      expect(result).toBe('1em');
    });

    it('pxToPt returns pt string', () => {
      const result = pxToPt(16);

      expect(result).toContain('pt');
    });

    it('ptToPx returns px string', () => {
      const result = ptToPx(12);

      expect(result).toContain('px');
    });

    it('emToPx returns px string', () => {
      const result = emToPx('1em', '16px');

      expect(result).toContain('px');
    });

    it('remToPx returns px string', () => {
      const result = remToPx('1rem');

      expect(result).toContain('px');
    });
  });
});
