// pxToRemRaw.js

import { toRatio } from '../rates/toRatio.js';

/**
 * px を rem に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @returns {number}
 */
function pxToRemRaw(px, baseFontSize, options = {}){
  const {
    errorMessage = 'baseFontSize must be greater than 0'
  } = options;

  const remValueRaw = toRatio(px, baseFontSize, { errorMessage });

  return remValueRaw;
}

export { pxToRemRaw };