// pxToPercent.ts

import { pxToPercentRaw } from '../raw/pxToPercentRaw.js';

/**
 * px を % に変換し、文字列で返す
 * % は親要素などの文脈に依存するため、contextSize を必ず明示してください
 * @param {number|string} px
 * @param {number|string} contextSize
 * @param {object} options
 * @param {number} options.precision
 * @param {string} options.errorMessage
 * @returns {string}
 */

type PxToPercentOptions = {
  precision?: number;
  errorMessage?: string;
};

export function pxToPercent(px: string | number, contextSize: string | number, options:PxToPercentOptions = {}){
  const {
    precision = 3,
    errorMessage
  } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const percentValue = pxToPercentRaw(px, contextSize, { errorMessage });
  const roundedValue = Number(percentValue.toFixed(precision));

  return `${roundedValue}%`;
}