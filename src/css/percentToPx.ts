// percentToPx.ts

import { percentToPxRaw } from '../raw/percentToPxRaw.js';

/**
 * % を px に変換し、文字列で返す
 * @param {number|string} percent
 * @param {number|string} contextSize
 * @param {PercentToPxOptions} options
 * @param {number} options.precision - 小数点以下の桁数（デフォルト: 3）
 * @param {string} options.errorMessage - エラーメッセージ
 * @returns {string}
 */
type PercentToPxOptions = {
    precision?: number;
    errorMessage?: string;
};

export function percentToPx(
  percent: string | number,
  contextSize: string | number,
  options: PercentToPxOptions = {}){
  const {
    precision = 3,
    errorMessage
  } = options;

  if (!Number.isInteger(precision) || precision < 0) {
    throw new RangeError('precision must be a non-negative integer');
  }
  const pxValue = percentToPxRaw(percent, contextSize, { errorMessage });
  const roundedValue = Number(pxValue.toFixed(precision));

  return `${roundedValue}px`;
}