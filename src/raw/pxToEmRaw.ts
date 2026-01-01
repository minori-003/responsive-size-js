// pxToEmRaw.ts

import { toRatio } from '../utils/toRatio.js';


/**
 * px を em に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @returns {number}
 */

type PxToEmRawOptions = {
  errorMessage?: string;
};

export function pxToEmRaw(px: string | number, baseFontSize: string | number, options: PxToEmRawOptions = {}){
  const {
    errorMessage = 'baseFontSize must be greater than 0'
  } = options;

  const emValueRaw = toRatio(px, baseFontSize, { errorMessage });

  return emValueRaw;
}