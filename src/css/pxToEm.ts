// pxToEm.ts

import { pxToEmRaw } from '../raw/pxToEmRaw.js';

/**
 * px を em に変換し、文字列で返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */

type pxToEmOptions = {
  precision?: number;
};

export function pxToEm(px: string | number, baseFontSize: string | number, options:pxToEmOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const emValue = pxToEmRaw(px, baseFontSize);
  const roundedValue = Number(emValue.toFixed(precision));

  return `${roundedValue}em`;
}