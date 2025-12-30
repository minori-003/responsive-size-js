// vwSpToPx.ts

import { vwSpToPxRaw } from '../raw/vwSpToPxRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * spサイズのvw を px に変換し、文字列で返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @param {VwSpToPxOptions} options
 * @param {number} options.precision - 小数点以下の桁数（デフォルト: 3）
 * @returns {string}
 */
type VwSpToPxOptions = {
    precision?: number;
};

export function vwSpToPx(vw: string | number,
  baseViewportWidth: string | number = DEFAULT_SETTINGS.minViewportWidth,
  options: VwSpToPxOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const pxValue = vwSpToPxRaw(vw, baseViewportWidth);
  const roundedValue = Number(pxValue.toFixed(precision));

  return `${roundedValue}px`;
}