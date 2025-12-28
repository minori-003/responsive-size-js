// emToPx.ts

import { emToPxRaw } from '../raw/emToPxRaw.js';

/**
 * em を px に変換し、文字列で返す
 * @param {number|string} em
 * @param {number|string} baseFontSize
 * @param {EmToPxOptions} options
 * @param {number} options.precision - 小数点以下の桁数（デフォルト: 3）
 * @returns {string}
 */
type EmToPxOptions = {
    precision?: number;
};

export function emToPx(
  em: string | number,
  baseFontSize: string | number,
  options: EmToPxOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const pxValue = emToPxRaw(em, baseFontSize);
  const roundedValue = Number(pxValue.toFixed(precision));

  return `${roundedValue}px`;
}