// pxToRemRaw.js

import { removeUnit } from '../utils/removeUnit.js';

/**
 * px を rem に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @returns {number}
 */
function pxToRemRaw(px, baseFontSize){
  const pxNum = removeUnit(px);
  const baseFontSizeNum = removeUnit(baseFontSize)

  if(baseFontSizeNum <= 0){
    throw new RangeError('baseFontSize must be greater than 0');
  }

  const remValueRaw = pxNum / baseFontSizeNum;

  return remValueRaw;
}

export { pxToRemRaw };