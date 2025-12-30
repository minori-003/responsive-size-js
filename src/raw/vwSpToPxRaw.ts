// vwSpToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';
import { vwToPxRaw } from './vwToPxRaw.js';

/**
 * spサイズのvw を px に変換し、数値として返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */
export function vwSpToPxRaw(
  vw: string | number,
  baseViewportWidth: string | number
){
  const vwNum = removeUnit(vw);
  const baseViewportWidthNum = removeUnit(baseViewportWidth);

  if(baseViewportWidthNum <= 0){
    throw new RangeError('baseViewportWidth must be greater than 0');
  }

  const pxValueRaw = vwToPxRaw(vwNum, baseViewportWidthNum);

  return pxValueRaw;
}