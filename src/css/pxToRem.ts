// pxToRem.ts

import { pxToRemRaw } from '../raw/pxToRemRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * px を rem に変換し、文字列で返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @param {object} options
 * @param {number} options.precision
 * @returns {string}
 */

type PxToRemOptions = {
  precision?: number;
  errorMessage?: string;
};

export function pxToRem(px: string | number, baseFontSize: string | number = DEFAULT_SETTINGS.rootFontSize, options:PxToRemOptions = {}){
  const {
    precision = 3,
    errorMessage
  } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const remValue = pxToRemRaw(px, baseFontSize, { errorMessage });
  const roundedValue = Number(remValue.toFixed(precision));

  return `${roundedValue}rem`;
}