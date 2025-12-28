// remToPx.ts

import { remToPxRaw } from '../raw/remToPxRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

/**
 * rem を px に変換し、文字列で返す
 * @param {number|string} rem
 * @param {number|string} baseFontSize
 * @param {RemToPxOptions} options
 * @param {number} options.precision - 小数点以下の桁数（デフォルト: 3）
 * @returns {string}
 */
type RemToPxOptions = {
    precision?: number;
};

export function remToPx(rem: string | number,
  baseFontSize: string | number = DEFAULT_SETTINGS.rootFontSize,
  options: RemToPxOptions = {}){
  const { precision = 3 } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const pxValue = remToPxRaw(rem, baseFontSize);
  const roundedValue = Number(pxValue.toFixed(precision));

  return `${roundedValue}px`;
}