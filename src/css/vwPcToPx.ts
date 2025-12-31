// vwPcToPx.ts

import { vwPcToPxRaw } from '../raw/vwPcToPxRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * pcサイズのvw を px に変換し、文字列で返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @param {VwPcToPxOptions} options
 * @param {number} options.precision - 小数点以下の桁数（デフォルト: 3）
 * @returns {string}
 */
type VwPcToPxOptions = {
    precision?: number;
    errorMessage?: string;
};

export function vwPcToPx(vw: string | number,
  baseViewportWidth: string | number = DEFAULT_SETTINGS.maxViewportWidth,
  options: VwPcToPxOptions = {}){
  const {
    precision = 3,
    errorMessage
   } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const pxValue = vwPcToPxRaw(vw, baseViewportWidth, { errorMessage });
  const roundedValue = Number(pxValue.toFixed(precision));

  return `${roundedValue}px`;
}