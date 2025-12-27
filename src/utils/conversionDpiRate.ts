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

  if (!Number.isFinite(conversionTargetDpiNum) || conversionTargetDpiNum <= 0) {
    throw new Error('conversionTargetDpi must be greater than 0');
  }

  if (!Number.isFinite(conversionSourceDpiNum) || conversionSourceDpiNum <= 0) {
    throw new Error('conversionSourceDpi must be greater than 0');
  }

  return toRatio(conversionTargetDpiNum, conversionSourceDpiNum);
}