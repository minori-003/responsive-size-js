// pxToVwPc.ts

import { pxToVwPcRaw } from '../raw/pxToVwPcRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * px を pcサイズのvw に変換し、文字列で返す  
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */

type PxToVwPcOptions = {
  precision?: number;
  errorMessage?: string;
};

export function pxToVwPc(
  px: string | number,
  baseViewportWidth: string | number = DEFAULT_SETTINGS.maxViewportWidth,
  options:PxToVwPcOptions = {}
){
  const {
    precision = 3,
    errorMessage
  } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const vwPcValue = pxToVwPcRaw(px, baseViewportWidth, {errorMessage});
  const roundedVwPcValue = Number(vwPcValue.toFixed(precision));

  return `${roundedVwPcValue}vw`;

}