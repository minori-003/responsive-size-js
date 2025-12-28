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

export function pxToPtRaw(
  px: string | number,
  targetDpi: string | number,
  sourceDpi: string | number
): number {

  let pxNum: number;

  try{
    pxNum = removeUnit(px);
  }catch{
    throw new Error('pxToPtRaw: val must be a finite number');
  }

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(pxNum)) {
    throw new Error('pxToPtRaw: val must be a finite number');
  }

  // DPIの検証と比率計算は conversionDpiRate に任せる
  const rate = conversionDpiRate(targetDpi, sourceDpi);

  return pxNum * rate;
}