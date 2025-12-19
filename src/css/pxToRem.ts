// pxToRem.ts

import { DEFAULT_SETTINGS } from '../setting/index.js';
import { pxToRemRaw } from '../raw/pxToRemRaw';

/**
 * px を rem に変換し、文字列で返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */

type pxToRemOptions = {
  precision?: number;
};

function pxToRem(px: string | number, baseFontSize: string | number = DEFAULT_SETTINGS.rootFontSize, options:pxToRemOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const remValue = pxToRemRaw(px, baseFontSize);
  const roundedValue = Number(remValue.toFixed(precision));

  return `${roundedValue}rem`;
}

export { pxToRem };