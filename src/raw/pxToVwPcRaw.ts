// pxToVwPcRaw.ts

import { pxToVwRaw } from './pxToVwRaw.js';

/**
 * px を vw に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */

type PxToVwPcRawOptions = {
  errorMessage?: string;
};

export function pxToVwPcRaw(px: string | number, baseViewportWidth: string | number, options: PxToVwPcRawOptions = {}){
  const {
    errorMessage = 'baseViewportWidth must be greater than 0'
  } = options;

  const vwPcValueRaw = pxToVwRaw(px, baseViewportWidth, { errorMessage });

  return vwPcValueRaw;
}