// convertByRatio.ts

import{removeUnit, toRatio} from '../utils';

/**
 * Converts a value by a ratio.
 * 
 * @param value - The value to convert.
 * @param numerator - The numerator of the ratio.
 * @param denominator - The denominator of the ratio.
 */

export function convertByRatio(
  value: string | number,
  numerator: string | number,
  denominator: string | number
): number {
  const valueNum = removeUnit(value);

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(valueNum)) {
    throw new TypeError('convertByRatio: value must be a finite number');
  }

  // 比率計算は toRatio に任せる
  const rate = toRatio(numerator, denominator);

  return valueNum * rate;
}