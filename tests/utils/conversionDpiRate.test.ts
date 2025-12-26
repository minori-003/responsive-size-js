// conversionDpiRate.test.ts

import { describe, it, expect } from 'vitest';
import { conversionDpiRate } from '../../src/utils/conversionDpiRate';

describe('conversionDpiRate', () => {
  describe('valid cases', () => {
    it('should return the ratio of targetDpi to sourceDpi', () => {
      // 96 / 72 = 1.333...
      // toBeCloseTo を使うと浮動小数点の微細な誤差を許容してくれます
      expect(conversionDpiRate(96, 72)).toBeCloseTo(96 / 72);
      expect(conversionDpiRate(72, 96)).toBe(0.75);
      expect(conversionDpiRate(96, 96)).toBe(1);
    });

    // 追加: 文字列（単位付き）の入力サポートを確認
    it('supports string inputs with units', () => {
      expect(conversionDpiRate('96dpi', '72dpi')).toBeCloseTo(1.3333);
      expect(conversionDpiRate('300', '72')).toBeCloseTo(4.1666);
    });
  });

  describe('invalid cases', () => {
    it('should throw an error if conversionTargetDpi is not a positive number', () => {
      // 0以下
      expect(() => conversionDpiRate(0, 96)).toThrow('conversionTargetDpi must be greater than 0');
      expect(() => conversionDpiRate(-10, 96)).toThrow('conversionTargetDpi must be greater than 0');
      
      // 追加: 無効な文字列 (NaNになるケース)
      expect(() => conversionDpiRate('invalid', 96)).toThrow('conversionTargetDpi must be greater than 0');
    });

    it('should throw an error if conversionSourceDpi is not a positive number', () => {
      // 分母（Source）のエラーメッセージ確認
      expect(() => conversionDpiRate(96, 0)).toThrow('conversionSourceDpi must be greater than 0');
      expect(() => conversionDpiRate(96, -20)).toThrow('conversionSourceDpi must be greater than 0');
      
      // 追加: 無効な文字列
      expect(() => conversionDpiRate(96, 'invalid')).toThrow('conversionSourceDpi must be greater than 0');
    });
  });
});
