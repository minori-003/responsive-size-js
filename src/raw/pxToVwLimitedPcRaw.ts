// pxToVwLimitedPcRaw.ts

import { pxToVwLimitedRaw } from './pxToVwLimitedRaw.js';

/**
 * PC レイアウト基準の px 値を vw に変換し、
 * CSS の min() / max() で制限をかけるための raw 値を返す。
 *
 * この関数自体は制限を適用しない。
 * 制限は css レイヤーで行うことを前提とする。
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @returns {{pxValue: number, vwValueRaw: number}}
 */

type PxToVwLimitedPcRawOptions = {
  errorMessage?: string;
};

export function pxToVwLimitedPcRaw(px: string | number, baseViewportWidth: string | number, options?: PxToVwLimitedPcRawOptions ){

  return pxToVwLimitedRaw(px, baseViewportWidth, options);
}