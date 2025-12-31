// percentToPxRaw.ts

// import { removeUnit } from '../utils/removeUnit.js';
// import { toRatio } from '../utils/toRatio.js';

// /**
//  * % を px に変換し、数値として返す
//  * @param {number|string} percent
//  * @param {number|string} contextSize
//  * @returns {number}
//  */
// type PercentToPxRawOptions = {
//   errorMessage?: string;
// };

// export function percentToPxRaw(
//   percent: string | number,
//   contextSize: string | number,
//   options: PercentToPxRawOptions = {}
// ) {
//   const percentNum = removeUnit(percent);
//   const contextSizeNum = removeUnit(contextSize);
//   const {
//     errorMessage = 'contextSize must be greater than 0'
//   } = options;


//   if (contextSizeNum <= 0) {
//     throw new Error('contextSize must be greater than 0');
//   }

//   const pxValueProduct = percentNum * contextSizeNum;

//   return toRatio(pxValueProduct, 100, {
//     errorMessage
//   });
// }

// percentToPxRaw.ts

import { removeUnit } from '../utils/removeUnit.js';

/**
 * % を px に変換し、数値として返す
 * 計算式: (percent * contextSize) / 100
 * 
 * @param {number|string} percent
 * @param {number|string} contextSize
 * @returns {number}
 */
type PercentToPxRawOptions = {
  errorMessage?: string;
};

export function percentToPxRaw(
  percent: string | number,
  contextSize: string | number,
  options: PercentToPxRawOptions = {}
): number {
  const {
    errorMessage = 'contextSize must be greater than 0'
  } = options;

  const percentNum = removeUnit(percent);
  const contextSizeNum = removeUnit(contextSize);

  if (contextSizeNum <= 0) {
    throw new Error(errorMessage);
  }

  return (percentNum * contextSizeNum) / 100;
}