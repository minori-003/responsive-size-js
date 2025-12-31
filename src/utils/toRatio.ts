// toRatio.ts
// 分子 / 分母として数値を解釈し、
// 「正の有限な分母」を前提に比率を計算する。
// 単位の意味解釈は行わない。

import { removeUnit } from './removeUnit.js';

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

  let numeratorNum: number;
  let denominatorNum: number;

  try {
    numeratorNum = removeUnit(numerator);
  } catch {
    throw new Error('toRatio: numerator must be a finite number');
  }

  try {
    denominatorNum = removeUnit(denominator);
  } catch {
    throw new Error(errorMessage);
  }

  if (!Number.isFinite(numeratorNum)) {
    throw new Error('toRatio: numerator must be a finite number');
  }

  // if (!Number.isFinite(denominatorNum) || denominatorNum <= 0) {
  //   throw new Error(errorMessage);
  // }
  if (denominatorNum <= 0) {
    throw new Error(errorMessage);
  }

  return numeratorNum / denominatorNum;
}