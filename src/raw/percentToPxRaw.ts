// percentToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';
import { toRatio } from '../utils/toRatio.js';

/**
 * % を px に変換し、数値として返す
 * @param {number|string} percent
 * @param {number|string} contextSize
 * @returns {number}
 */
export function percentToPxRaw(
  percent: string | number,
  contextSize: string | number
) {
  const percentNum = removeUnit(percent);
  const contextSizeNum = removeUnit(contextSize);

  if (contextSizeNum <= 0) {
    throw new Error('contextSize must be greater than 0');
  }

  const pxValueProduct = percentNum * contextSizeNum;

  return toRatio(pxValueProduct, 100, {
    errorMessage: 'Invalid percent value',
  });
}
