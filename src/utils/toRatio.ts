// toRatio.ts
import { removeUnit } from './removeUnit';

// type ToRatioOptions = {
//   errorMessage?: string;
// };

// export function toRatio(numerator: number, denominator: number, options: ToRatioOptions = {}): number {
//     const { errorMessage =
//         'toRatio: denominator must be a positive finite number'
//     } = options;
//     const numeratorNum = removeUnit(numerator);
//     const denominatorNum = removeUnit(denominator);

//   if (!Number.isFinite(numeratorNum)) {
//     throw new Error('toRatio: numerator must be a finite number');
//   }

//   if (!Number.isFinite(denominatorNum) || denominatorNum <= 0) {
//     throw new Error(errorMessage);
//   }

//   return numeratorNum / denominatorNum;
// }

type ToRatioOptions = {
  errorMessage?: string;
};

export function toRatio(
  numerator: number | string,
  denominator: number | string,
  options: ToRatioOptions = {}
): number {
  const {
    errorMessage = 'toRatio: denominator must be a positive finite number'
  } = options;

  // 数値化処理
  const numeratorNum = removeUnit(numerator);
  const denominatorNum = removeUnit(denominator);

  // 分子のチェック
  if (!Number.isFinite(numeratorNum)) {
    throw new Error('toRatio: numerator must be a finite number');
  }

  // 分母のチェック (0 または 負の数 または 無限大 はエラー)
  if (!Number.isFinite(denominatorNum) || denominatorNum <= 0) {
    throw new Error(errorMessage);
  }

  return numeratorNum / denominatorNum;
}