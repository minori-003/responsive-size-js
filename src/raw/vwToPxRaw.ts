// vwToPxRaw.ts

// import { removeUnit } from '../utils/removeUnit.js';
// import { toRatio } from '../utils/toRatio.js';

// /**
//  * vw を px に変換し、数値として返す
//  * @param {number|string} vw
//  * @param {number|string} baseViewportWidth
//  * @returns {number}
//  */
// export function vwToPxRaw(vw: string | number, baseViewportWidth: string | number){
//   const vwNum = removeUnit(vw);
//   const baseViewportWidthNum = removeUnit(baseViewportWidth);

//   const pxValueProduct = vwNum * baseViewportWidthNum;

//   return toRatio(pxValueProduct, 100, {
//     errorMessage: 'baseViewportWidth must be greater than 0',
//   });
// }
// vwToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';

/**
 * vw を px に変換し、数値として返す
 * 計算式: (vw * baseViewportWidth) / 100
 * 
 * @param {number|string} vw
 * @param {number|string} baseViewportWidth
 * @returns {number}
 */

type VwToPxRawOptions = {
  errorMessage?: string;
};

export function vwToPxRaw(
  vw: string | number,
  baseViewportWidth: string | number,
  options: VwToPxRawOptions = {}
): number {
  const {
    errorMessage = 'baseViewportWidth must be greater than 0'
  } = options;

  const vwNum = removeUnit(vw);
  const widthNum = removeUnit(baseViewportWidth);

  // pxToVw系と整合性を合わせ、基準幅が正の数でない場合はエラーにする
  if (widthNum <= 0) {
    throw new Error(errorMessage);
  }

  return (vwNum * widthNum) / 100;
}