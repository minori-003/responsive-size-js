// src/raw/pxToVwLimitedRaw.ts

/**
 * px を vw に変換し、CSS の min() / max() で
 * 制限をかけるための raw 値を返す。
 *
 * この関数自体は制限を適用しない。
 * 制限は css レイヤーで行うことを前提とする。
 */

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
  const vwValueRaw = pxToVwRaw(pxValue, baseViewportWidth, { errorMessage });

  return {
    pxValue,
    vwValueRaw
  };
}