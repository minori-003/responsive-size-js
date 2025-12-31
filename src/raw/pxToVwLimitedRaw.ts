// src/raw/pxToVwLimitedRaw.ts

import { removeUnit } from '../utils/removeUnit.js';
import { pxToVwRaw } from './pxToVwRaw.js';

type PxToVwLimitedRawOptions = {
  errorMessage?: string;
};

export function pxToVwLimitedRaw(
  px: string | number,
  baseViewportWidth: string | number,
  options: PxToVwLimitedRawOptions = {}
) { // 戻り値の型推論は { pxValue: number; vwValueRaw: number; } になります
  const {
    errorMessage = 'baseViewportWidth must be greater than 0'
  } = options;

  // 1. PX値を数値化
  const pxValue = removeUnit(px);

  // 2. VW値を算出
  // 修正点: ここで元の 'px' ではなく、抽出済みの 'pxValue' を渡すと効率的です
  const vwValueRaw = pxToVwRaw(pxValue, baseViewportWidth, { errorMessage });

  return {
    pxValue,
    vwValueRaw
  };
}