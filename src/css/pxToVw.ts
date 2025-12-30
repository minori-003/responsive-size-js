// pxToVw.ts

import { pxToVwRaw } from '../raw/pxToVwRaw.js';

/**
 * px を vw に変換し、文字列で返す  
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */

type PxToVwOptions = {
  precision?: number;
};

export function pxToVw(px: string | number, baseViewportWidth: string | number, options:PxToVwOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const vwValue = pxToVwRaw(px, baseViewportWidth);
  const roundedValue = Number(vwValue.toFixed(precision));

  return `${roundedValue}vw`;
}