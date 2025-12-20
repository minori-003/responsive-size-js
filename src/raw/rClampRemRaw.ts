// rClampRem.ts
import { rClampCore } from '.';
import { DEFAULT_SETTINGS } from '../setting';
import { pxToRemRaw } from './pxToRemRaw';

type rClampRemOptions = {
    allowReverse?: boolean;
    minViewportDiff?: number;
    baseFontSize?: string | number;
};

export function rClampRemRaw(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number = DEFAULT_SETTINGS.minViewportWidth,
    maxViewport: string | number = DEFAULT_SETTINGS.maxViewportWidth,
    options: rClampRemOptions = {}
) {
    const {
        allowReverse = false,
        minViewportDiff = 1,
        baseFontSize = DEFAULT_SETTINGS.rootFontSize,
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
        vwCoef,
        interceptRem,
        maxRem: clampMaxRem,
    };
}