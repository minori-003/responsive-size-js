// pxToVwSpRaw.ts

import { pxToVwRaw } from './pxToVwRaw.js';

/**
 * px を vw に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */

type PxToVwSpRawOptions = {
  errorMessage?: string;
};

export function pxToVwSpRaw(px: string | number, baseViewportWidth: string | number, options?: PxToVwSpRawOptions){

  const vwSpValueRaw = pxToVwRaw(px, baseViewportWidth, options);

  return vwSpValueRaw;
}