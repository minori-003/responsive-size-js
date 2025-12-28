// rClampRemRaw.ts
import { rClampCore } from './rClampCore.js';
import { pxToRemRaw } from './pxToRemRaw.js';

type RClampRemRawOptions = {
    allowReverse: boolean;
    minViewportDiff: number;
    baseFontSize: string | number;
};

export function rClampRemRaw(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number,
    maxViewport: string | number,
    options: RClampRemRawOptions
) {
    const {
        allowReverse,
        minViewportDiff,
        baseFontSize,
    } = options;
    const { min, max, slope, intercept } = rClampCore(
        minSize,
        maxSize,
        minViewport,
        maxViewport,
        { allowReverse, minViewportDiff }
    );
    const clampMinPx = Math.min(min, max);
    const clampMaxPx = Math.max(min, max);

    const vwCoef = slope * 100;

    const clampMinRem = pxToRemRaw(clampMinPx, baseFontSize);
    const clampMaxRem = pxToRemRaw(clampMaxPx, baseFontSize);
    const interceptRem = pxToRemRaw(intercept, baseFontSize);

    return {
        minRem: clampMinRem,
        maxRem: clampMaxRem,
        vwCoef,
        interceptRem,
    };
}