// vwSpToPxRaw.ts

import { vwToPxRaw } from './vwToPxRaw.js';

/**
 * spサイズのvw を px に変換し、数値として返す
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */

type VwSpToPxRawOptions = {
  errorMessage?: string;
};

export function vwSpToPxRaw(
  vw: string | number,
  baseViewportWidth: string | number,
  options?: VwSpToPxRawOptions
) {
  return vwToPxRaw(vw, baseViewportWidth, options);
}