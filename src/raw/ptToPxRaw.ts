// ptToPxRaw.ts

import{removeUnit} from '../utils/removeUnit.js';
import{conversionDpiRate} from '../utils/conversionDpiRate.js';

/**
 * Converts points (pt) to pixels (px).
 * 
 * @param pt - The value in points.
 * @param targetDpi - The DPI of the output unit.
 * @param sourceDpi - The DPI of the input unit.
 */

export function ptToPxRaw(
  pt: string | number,
  targetDpi: string | number,
  sourceDpi: string | number
): number {
  
  let ptNum: number;
  try{
    ptNum = removeUnit(pt);
  }catch{
    throw new Error('ptToPxRaw: val must be a finite number');
  }

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(ptNum)) {
    throw new Error('ptToPxRaw: val must be a finite number');
  }

  // DPIの検証と比率計算は conversionDpiRate に任せる
  const rate = conversionDpiRate(targetDpi, sourceDpi);

  return ptNum * rate;
}