// pxToPtRaw.ts

import{removeUnit} from '../utils/removeUnit.js';
import{conversionDpiRate} from '../utils/conversionDpiRate.js';

/**
 * Converts pixels (px) to points (pt).
 * 
 * @param px - The value in pixels.
 * @param targetDpi - The DPI of the output unit.
 * @param sourceDpi - The DPI of the input unit.
 */

type PxToPtRawOptions = {
    errorMessage?: string;
};

export function pxToPtRaw(
  px: string | number,
  targetDpi: string | number,
  sourceDpi: string | number,
  options: PxToPtRawOptions = {}) {
  const {
    errorMessage = 'pxToPtRaw: val must be a finite number'
  } = options;
  let pxNum: number;

  try{
    pxNum = removeUnit(px);
  }catch{
    throw new Error(errorMessage);
  }

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(pxNum)) {
    throw new Error(errorMessage);
  }

  // DPIの検証と比率計算は conversionDpiRate に任せる
  const rate = conversionDpiRate(targetDpi, sourceDpi);

  return pxNum * rate;
}