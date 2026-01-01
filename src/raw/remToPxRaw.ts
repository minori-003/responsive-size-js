// remToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';
import { emToPxRaw } from './emToPxRaw.js';

/**
 * rem を px に変換し、数値として返す
 * @param {number|string} rem
 * @param {number|string} baseFontSize
 * @returns {number}
 */

type RemToPxRawOptions = {
    errorMessage?: string;
};

export function remToPxRaw(
  rem: string | number,
  baseFontSize: string | number,
  options: RemToPxRawOptions = {}
){
  const {
    errorMessage = 'baseFontSize must be greater than 0'
  } = options;
  const remNum = removeUnit(rem);
  const baseFontSizeNum = removeUnit(baseFontSize);

  if(baseFontSizeNum <= 0){
    throw new RangeError(errorMessage);
  }

  const pxValueRaw = emToPxRaw(remNum, baseFontSizeNum);

  return pxValueRaw;
}