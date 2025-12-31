// pxToVwLimitedPcRaw.ts

import { pxToVwLimitedRaw } from './pxToVwLimitedRaw.js';

/**
 * px を vw に変換し、css関数min()またはmax()で使用するための数値として返す
 * @param {number|string} px
 * @param {number|string} baseViewportWidth
 * @returns {{pxValue: number, vwValueRaw: number}}
 */

type PxToVwLimitedPcRawOptions = {
  errorMessage?: string;
};

export function pxToVwLimitedPcRaw(px: string | number, baseViewportWidth: string | number, options?: PxToVwLimitedPcRawOptions ){

    // オプションと処理をそのまま委譲（パススルー）
  // 変数への分割代入 → 再return は不要なので、直接返します
  return pxToVwLimitedRaw(px, baseViewportWidth, options);
}