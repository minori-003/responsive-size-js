// pxToRemRaw.ts

import { DEFAULT_SETTINGS } from '../setting';
import { pxToEmRaw } from './pxToEmRaw';

/**
 * px を rem に変換し、数値として返す
 * @param {number|string} px
 * @param {number|string} baseFontSize
 * @returns {number}
 */

type pxToRemRawOptions = {
  errorMessage?: string;
};

export function pxToRemRaw(px: string | number, baseFontSize: string | number = DEFAULT_SETTINGS.rootFontSize, options: pxToRemRawOptions = {}){
  const {
    errorMessage = 'baseFontSize must be greater than 0'
  } = options;

  const remValueRaw = pxToEmRaw(px, baseFontSize, { errorMessage });

  return remValueRaw;
}