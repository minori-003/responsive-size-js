// conversionDpiRate.ts

import { removeUnit } from './removeUnit';
import { toRatio } from './toRatio';

export function conversionDpiRate(
  conversionTargetDpi: string | number,
  conversionSourceDpi: string | number
): number {

  let conversionTargetDpiNum: number;
  let conversionSourceDpiNum: number;

  try {
    conversionTargetDpiNum = removeUnit(conversionTargetDpi);
  } catch {
    throw new Error('conversionTargetDpi must be greater than 0');
  }

  try {
    conversionSourceDpiNum = removeUnit(conversionSourceDpi);
  } catch {
    throw new Error('conversionSourceDpi must be greater than 0');
  }

  // 改善点: NaN の場合も弾くように修正
  // NaN <= 0 は false になるため、isFinite チェックが必要です
  if (!Number.isFinite(conversionTargetDpiNum) || conversionTargetDpiNum <= 0) {
    throw new Error('conversionTargetDpi must be greater than 0');
  }

  return toRatio(conversionTargetDpiNum, conversionSourceDpiNum, {
    // Source側のエラーメッセージをDPI用に上書き
    errorMessage: 'conversionSourceDpi must be greater than 0'
  });
}