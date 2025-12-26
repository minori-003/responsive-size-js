// // toRatio.test.ts

// import { describe, it, expect } from 'vitest';
// import { toRatio } from '../../src/utils/toRatio';

// describe('toRatio', () => {
//   describe('valid cases', () => {
//     it('returns correct ratio for positive numbers', () => {
//       expect(toRatio(10, 2)).toBe(5);
//     });

//     it('returns 0 when numerator is 0', () => {
//       expect(toRatio(0, 5)).toBe(0);
//     });

//     it('supports decimal numbers', () => {
//       expect(toRatio(1.5, 0.5)).toBe(3);
//     });
//   });

//   describe('invalid numerator', () => {
//     it('throws when numerator is NaN', () => {
//       expect(() => toRatio(NaN, 5)).toThrow();
//     });

//     it('throws when numerator is Infinity', () => {
//       expect(() => toRatio(Infinity, 5)).toThrow();
//     });

//     it('throws when numerator is -Infinity', () => {
//       expect(() => toRatio(-Infinity, 5)).toThrow();
//     });
//   });

//   describe('invalid denominator', () => {
//     it('throws when denominator is 0', () => {
//       expect(() => toRatio(5, 0)).toThrow();
//     });

//     it('throws when denominator is negative', () => {
//       expect(() => toRatio(5, -1)).toThrow();
//     });

//     it('throws when denominator is NaN', () => {
//       expect(() => toRatio(5, NaN)).toThrow();
//     });

//     it('throws when denominator is Infinity', () => {
//       expect(() => toRatio(5, Infinity)).toThrow();
//     });
//   });

//   expect(() => toRatio(NaN, 5))
//   .toThrow('toRatio: numerator must be a finite number');

//   expect(() => toRatio(5, 0))
//   .toThrow('toRatio: denominator must be a positive finite number');
  

//   describe('custom error message', () => {
//     it('uses custom error message when provided', () => {
//       expect(() =>
//         toRatio(5, 0, { errorMessage: 'custom error' })
//       ).toThrow('custom error');
//     });
//   });
// });

import { describe, it, expect } from 'vitest';
import { toRatio } from '../../src/utils/toRatio';

// removeUnitの挙動を前提としたテストになります。
// 必要であれば vi.mock('./removeUnit') でモック化してください。

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

    // 追加: 文字列（単位付き）のサポートを確認
    it('supports strings with units', () => {
      // removeUnitの実装に依存しますが、一般的に想定されるケース
      expect(toRatio('100px', '50px')).toBe(2);
    });

    it('handles different unit strings consistently', () => {
      expect(toRatio('100px', '50rem')).toBe(2);
    });

    it('supports negative numerator', () => {
      expect(toRatio(-10, 2)).toBe(-5);
    });

    it('handles very small numbers', () => {
      expect(toRatio(0.0001, 0.0002)).toBeCloseTo(0.5);
    });

    it('works without options argument', () => {
      expect(toRatio(10, 5)).toBe(2);
    });
  });

  describe('invalid numerator', () => {
    it('throws when numerator is NaN', () => {
      expect(() => toRatio(NaN, 5)).toThrow('toRatio: numerator must be a finite number');
    });

    it('throws when numerator is Infinity', () => {
      expect(() => toRatio(Infinity, 5)).toThrow('toRatio: numerator must be a finite number');
    });

    it('throws when numerator is -Infinity', () => {
      expect(() => toRatio(-Infinity, 5)).toThrow('toRatio: numerator must be a finite number');
    });
  });

  describe('invalid denominator', () => {
    const defaultDenomError = 'toRatio: denominator must be a positive finite number';

    it('throws when denominator is 0', () => {
      expect(() => toRatio(5, 0)).toThrow(defaultDenomError);
    });

    it('throws when denominator is negative', () => {
      expect(() => toRatio(5, -1)).toThrow(defaultDenomError);
    });

    it('throws when denominator is NaN', () => {
      expect(() => toRatio(5, NaN)).toThrow(defaultDenomError);
    });

    it('throws when denominator is Infinity', () => {
      expect(() => toRatio(5, Infinity)).toThrow(defaultDenomError);
    });
  });

  describe('custom error message', () => {
    it('uses custom error message when provided', () => {
      expect(() =>
        toRatio(5, 0, { errorMessage: 'custom error' })
      ).toThrow('custom error');
    });
  });
});