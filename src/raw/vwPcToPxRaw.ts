// vwPcToPxRaw.ts

import { vwToPxRaw } from './vwToPxRaw.js';

/**
 * pcサイズのvw を px に変換し、数値として返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */

type VwPcToPxRawOptions = {
  errorMessage?: string;
};

export function vwPcToPxRaw(
  vw: string | number,
  baseViewportWidth: string | number,
  options?: VwPcToPxRawOptions
) {
  return vwToPxRaw(vw, baseViewportWidth, options);
}