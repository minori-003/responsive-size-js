// remToPxRaw.js

import { removeUnit } from '../utils';
import { emToPxRaw } from './emToPxRaw';

/**
 * rem を px に変換し、数値として返す
 * @param {number|string} rem
 * @param {number|string} baseFontSize
 * @returns {number}
 */
export function remToPxRaw(
  rem: string | number,
  baseFontSize: string | number
){
  const remNum = removeUnit(rem);
  const baseFontSizeNum = removeUnit(baseFontSize)

  if(baseFontSizeNum <= 0){
    throw new RangeError('baseFontSize must be greater than 0');
  }

  const pxValueRaw = emToPxRaw(remNum, baseFontSizeNum);

  return pxValueRaw;
}