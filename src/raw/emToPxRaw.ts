// emToPxRaw.ts

import { removeUnit } from '../utils/removeUnit';

/**
 * em を px に変換し、数値として返す
 * @param {number|string} em
 * @param {number|string} baseFontSize
 * @returns {number}
 */
export function emToPxRaw(em: string | number, baseFontSize: string | number){
  const emNum = removeUnit(em);
  const baseFontSizeNum = removeUnit(baseFontSize)

  if(baseFontSizeNum <= 0){
    throw new RangeError('baseFontSize must be greater than 0');
  }

  const pxValueRaw = emNum * baseFontSizeNum;

  return pxValueRaw;
}