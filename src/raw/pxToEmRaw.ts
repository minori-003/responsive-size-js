// pxToEmRaw.ts

import { toRatio, removeUnit } from '../utils';


/**
 * px を em に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @returns {number}
 */

type pxToEmRawOptions = {
  errorMessage?: string;
};

export function pxToEmRaw(px: string | number, baseFontSize: string | number, options: pxToEmRawOptions = {}){
  const {
    errorMessage = 'baseFontSize must be greater than 0'
  } = options;

  const emValueRaw = toRatio(removeUnit(px), removeUnit(baseFontSize), { errorMessage });

  return emValueRaw;
}