// pxToPtRaw.ts

import{removeUnit, conversionDpiRate} from '../utils';
import { DEFAULT_SETTINGS } from '../setting';

/**
 * Converts pixels (px) to points (pt).
 * 
 * @param px - The value in pixels.
 * @param targetDpi - The DPI of the output unit (default: 72 for standard pt).
 * @param sourceDpi - The DPI of the input unit (default: 96 for Web/CSS px).
 */

export function pxToPtRaw(
  px: string | number,
  targetDpi: string | number = DEFAULT_SETTINGS.dpi.legacy,
  sourceDpi: string | number = DEFAULT_SETTINGS.dpi.web
): number {
  const pxNum = removeUnit(px);

  // 値自体が無効な場合はエラーを投げる
  if (!Number.isFinite(pxNum)) {
    throw new TypeError('pxToPtRaw: val must be a finite number');
  }

  // DPIの検証と比率計算は conversionDpiRate に任せる
  const rate = conversionDpiRate(targetDpi, sourceDpi);

  return pxNum * rate;
}