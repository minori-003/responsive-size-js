// pxToPtRaw.test.ts

import { describe, it, expect } from 'vitest';
import { pxToPtRaw } from '../../src/raw/pxToPtRaw';

describe('pxToPtRaw', () => {
    describe('defaults', () => {
        it('uses standard CSS conversion (96dpi to 72dpi) when arguments are omitted', () => {
        // 引数を省略すると、1px = 0.75pt (72/96) になるはず
        expect(pxToPtRaw(1)).toBe(0.75);
        expect(pxToPtRaw(96)).toBe(72);
        });
    });

    describe('valid cases', () => {
    it('converts px to pt using target/source dpi ratio', () => {
      // 96px (96dpi) -> 72pt (72dpi)
      expect(pxToPtRaw(96, 72, 96)).toBe(72);
      
      // 文字列入力
      expect(pxToPtRaw('96px', 72, 96)).toBe(72);
    });

    it('handles decimal values correctly', () => {
      // 150px (300dpi) -> 36pt (72dpi)
      // 150 * (72/300) = 150 * 0.24 = 36
      expect(pxToPtRaw(150, 72, 300)).toBe(36);
    });
    });

    describe('invalid cases', () => {
    it('throws if input value is invalid', () => {
      expect(() => pxToPtRaw('abc', 72, 96)).toThrow('pxToPtRaw: val must be a finite number');
    });

    it('propagates errors from conversionDpiRate', () => {
      expect(() => pxToPtRaw(96, 72, -1)).toThrow('conversionSourceDpi must be greater than 0');
    });
    });
});