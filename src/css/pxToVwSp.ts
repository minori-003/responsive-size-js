// pxToVwSp.ts

import { pxToVwSpRaw } from '../raw/pxToVwSpRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * px を spサイズのvw に変換し、文字列で返す
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */

type PxToVwSpOptions = {
  precision?: number;
};

export function pxToVwSp(
  px: string | number,
  baseViewportWidth: string | number = DEFAULT_SETTINGS.minViewportWidth,
  options:PxToVwSpOptions = {}
){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const vwSpValue = pxToVwSpRaw(px, baseViewportWidth);
  const roundedVwSpValue = Number(vwSpValue.toFixed(precision));

  return `${roundedVwSpValue}vw`;

}