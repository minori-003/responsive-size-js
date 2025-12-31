// pxToVwPc.ts

import { pxToVwLimitedPcRaw } from '../raw/pxToVwLimitedPcRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * px を pcサイズのvwに変換し、上限を設けてCSSのmin/max関数文字列で返す
 * 例: 正の値 -> min(100px, 5.2vw) / 負の値 -> max(-100px, -5.2vw)
 */

type PxToVwLimitedPcOptions = {
  precision?: number;
  errorMessage?: string;
};

export function pxToVwLimitedPc(
  px: string | number,
  baseViewportWidth: string | number = DEFAULT_SETTINGS.maxViewportWidth,
  options: PxToVwLimitedPcOptions = {}
) {
  const { 
    precision = 3,
    errorMessage
  } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }

  const { pxValue, vwValueRaw } = pxToVwLimitedPcRaw(px, baseViewportWidth, { errorMessage });

  const roundedVwPcValue = Number(vwValueRaw.toFixed(precision));
  
  const pxPart = `${Number(pxValue.toFixed(precision))}px`;
  
  const cssFunction = pxValue < 0 ? 'max' : 'min';
  return `${cssFunction}(${pxPart}, ${roundedVwPcValue}vw)`;
}