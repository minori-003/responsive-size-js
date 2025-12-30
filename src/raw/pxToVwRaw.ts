// src/raw/pxToVwRaw.ts

import { removeUnit } from '../utils/removeUnit.js';
import { toRatio } from '../utils/toRatio.js';

type PxToVwRawOptions = {
  errorMessage?: string;
};

export function pxToVwRaw(px: string | number, baseViewportWidth: string | number, options: PxToVwRawOptions = {}){
  const {
    errorMessage = 'baseViewportWidth must be greater than 0'
  } = options;

  const vwRatio = toRatio(removeUnit(px), removeUnit(baseViewportWidth), { errorMessage });

  const vwValueRaw = vwRatio * 100;

  return vwValueRaw;
}