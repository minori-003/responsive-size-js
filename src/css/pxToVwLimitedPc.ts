// pxToVwPc.ts

import { pxToVwLimitedPcRaw } from '../raw/pxToVwLimitedPcRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * px を PC サイズ基準の vw に変換し、
 * CSS の min() / max() を用いて値の上限・下限を制限した文字列を返す。
 *
 * ※ 実際の制限ロジックは CSS 関数によって行われる
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