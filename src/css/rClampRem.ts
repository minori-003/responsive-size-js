// rClampRem.js

import { rClampRaw } from './rClampRaw.js';
import { variable } from '../../setting/index.js';
import { pxToRemRaw } from '../conversion/pxToRemRaw.js';

function rClampRem(
    minSize,
    maxSize,
    minViewport = variable.minViewportWidth,
    maxViewport = variable.maxViewportWidth,
    options = {}
) {
    const {
        allowReverse = false,
        minViewportDiff = 1,
        baseFontSize = variable.rootFontSize,
        precision = 3,
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }
    const { min, max, slope, intercept } = rClampRaw(
    minSize,
    maxSize,
    minViewport,
    maxViewport,
    { allowReverse, minViewportDiff }
);

    const round = (v) => Number(v.toFixed(precision));
    const clampMinPx = Math.min(min, max);
    const clampMaxPx = Math.max(min, max);

    const vwCoef = slope * 100;
    const absVwCoef = Math.abs(vwCoef);
    const vwPart =
        slope < 0
            ? `-${round(absVwCoef)}vw`
            : `${round(absVwCoef)}vw`;

    const clampMinRem = pxToRemRaw(clampMinPx, baseFontSize);
    const clampMaxRem = pxToRemRaw(clampMaxPx, baseFontSize);
    const interceptRem = pxToRemRaw(intercept, baseFontSize);

    

    const interceptSign = interceptRem < 0 ? '-' : '+';
    const absInterceptRem = Math.abs(interceptRem);

    return `clamp(${round(clampMinRem)}rem, calc(${vwPart} ${interceptSign} ${round(absInterceptRem)}rem), ${round(clampMaxRem)}rem)`;
}

export { rClampRem };