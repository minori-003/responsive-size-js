// ptToPxRaw.ts

import{removeUnit, conversionDpiRate} from '../utils';
import { DEFAULT_SETTINGS } from '../setting';

/**
 * Converts points (pt) to pixels (px).
 * 
 * @param pt - The value in points.
 * @param targetDpi - The DPI of the output unit (default: 96 for Web/CSS px).
 * @param sourceDpi - The DPI of the input unit (default: 72 for standard pt).
 */

export function ptToPxRaw(
  pt: string | number,
  targetDpi: string | number = DEFAULT_SETTINGS.dpi.web,
  sourceDpi: string | number = DEFAULT_SETTINGS.dpi.legacy
): number {
  const ptNum = removeUnit(pt);

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(ptNum)) {
    throw new TypeError('ptToPxRaw: val must be a finite number');
  }

  // DPIの検証と比率計算は conversionDpiRate に任せる
  const rate = conversionDpiRate(targetDpi, sourceDpi);

  return ptNum * rate;
}