// pxToRem.js

import { variable } from '../../setting/index.js';
import { pxToRemRaw } from './pxToRemRaw.js';

/**
 * px を rem に変換し、文字列で返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */
function pxToRem(px, baseFontSize = variable.rootFontSize, options = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const remValue = pxToRemRaw(px, baseFontSize);
  const roundedValue = Number(remValue.toFixed(precision));

  return `${roundedValue}rem`;
}

export { pxToRem };