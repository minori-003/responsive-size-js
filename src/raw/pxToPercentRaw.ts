// src/raw/pxToPercentRaw.ts

import { toRatio } from '../utils/toRatio.js';

/**
 * px を % に変換し、数値として返す
 * @param px 対象の px 値
 * @param contextSize 基準となるサイズ（親要素など）
 * @returns number (% 値。100 = 100%)
 */

type PxToPercentRawOptions = {
  errorMessage?: string;
};

export function pxToPercentRaw(px: string | number, contextSize: string | number, options: PxToPercentRawOptions = {}){
  const {
    errorMessage = 'contextSize must be greater than 0'
  } = options;

  const ratio = toRatio(px, contextSize, { errorMessage });

  const valueRaw = ratio * 100;

  return valueRaw;
}