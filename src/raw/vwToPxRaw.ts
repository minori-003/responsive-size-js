// vwToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';
import { toRatio } from '../utils/toRatio.js';

/**
 * vw を px に変換し、数値として返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */
export function vwToPxRaw(vw: string | number, baseViewportWidth: string | number){
  const vwNum = removeUnit(vw);
  const baseViewportWidthNum = removeUnit(baseViewportWidth);

  const pxValueProduct = vwNum * baseViewportWidthNum;

  return toRatio(pxValueProduct, 100, {
    errorMessage: 'baseViewportWidth must be greater than 0',
  });
}