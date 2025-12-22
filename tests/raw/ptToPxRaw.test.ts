// ptToPxRaw.test.ts

import { describe, it, expect } from 'vitest';
import { ptToPxRaw } from '../../src/raw/ptToPxRaw';

describe('ptToPxRaw', () => {

      describe('defaults', () => {
    it('uses standard CSS conversion (72dpi to 96dpi) when arguments are omitted', () => {
      // 引数を省略すると、1pt = 1.333px (96/72) になるはず
      expect(ptToPxRaw(1)).toBeCloseTo(1.3333);
      expect(ptToPxRaw(72)).toBe(96);
    });
  });
  describe('valid cases', () => {
    it('converts pt to px using target/source dpi ratio', () => {
      // 72pt (72dpi) -> 96px (96dpi) : 標準的なDPI変換
      expect(ptToPxRaw(72, 96, 72)).toBe(96);
      
      // 文字列入力のサポート
      expect(ptToPxRaw('72pt', 96, 72)).toBe(96);
    });

    it('handles decimal values correctly', () => {
      // 10.5pt * (96/72) = 14px
      expect(ptToPxRaw(10.5, 96, 72)).toBeCloseTo(14);
      
      // 100pt * (144/72) = 200px
      expect(ptToPxRaw(100, 144, 72)).toBe(200);
    });
  });

  describe('invalid cases', () => {
    it('throws if input value is invalid', () => {
      expect(() => ptToPxRaw('invalid', 96, 72)).toThrow('ptToPxRaw: val must be a finite number');
    });

    it('propagates errors from conversionDpiRate', () => {
      // conversionDpiRate 側のエラー (Target DPI が 0) が伝播することを確認
      expect(() => ptToPxRaw(72, 0, 72)).toThrow('conversionTargetDpi must be greater than 0');
    });
  });
});