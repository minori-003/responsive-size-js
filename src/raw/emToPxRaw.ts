// emToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';

/**
 * em を px に変換し、数値として返す
 * @param {number|string} em
 * @param {number|string} baseFontSize
 * @returns {number}
 */

type EmToPxRawOptions = {
    precision?: number;
    errorMessage?: string;
};
export function emToPxRaw(em: string | number, baseFontSize: string | number, options: EmToPxRawOptions = {}){
  const emNum = removeUnit(em);
  const baseFontSizeNum = removeUnit(baseFontSize);
  const {
    errorMessage = 'baseFontSize must be greater than 0'
  } = options;

  if(baseFontSizeNum <= 0){
    throw new RangeError(errorMessage);
  }

  const pxValueRaw = emNum * baseFontSizeNum;

  return pxValueRaw;
}