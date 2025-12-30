// vwToPx.ts

import { vwToPxRaw } from '../raw/vwToPxRaw.js';

/**
 * vw を px に変換し、文字列で返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @param {VwToPxOptions} options
 * @param {number} options.precision - 小数点以下の桁数（デフォルト: 3）
 * @returns {string}
 */
type VwToPxOptions = {
    precision?: number;
};

export function vwToPx(
  vw: string | number,
  baseViewportWidth: string | number,
  options: VwToPxOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const pxValue = vwToPxRaw(vw, baseViewportWidth);
  const roundedValue = Number(pxValue.toFixed(precision));

  return `${roundedValue}px`;
}