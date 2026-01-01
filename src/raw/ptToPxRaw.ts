// ptToPxRaw.ts

import{removeUnit} from '../utils/removeUnit.js';
import{conversionDpiRate} from '../utils/conversionDpiRate.js';

/**
 * pt を px に変換し、数値として返す
 * 
 * @param pt - The value in points.
 * @param targetDpi - The DPI of the output unit.
 * @param sourceDpi - The DPI of the input unit.
 */

type PtToPxOptions = {
    errorMessage?: string;
};

export function ptToPxRaw(
  pt: string | number,
  targetDpi: string | number,
  sourceDpi: string | number,
  options: PtToPxOptions = {}
): number {
  const {
    errorMessage = 'ptToPxRaw: val must be a finite number'
  } = options;
  
  let ptNum: number;
  try{
    ptNum = removeUnit(pt);
  }catch{
    throw new Error(errorMessage);
  }

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(ptNum)) {
    throw new Error(errorMessage);
  }

  // DPIの検証と比率計算は conversionDpiRate に任せる
  const rate = conversionDpiRate(targetDpi, sourceDpi);

  return ptNum * rate;
}