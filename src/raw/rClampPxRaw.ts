// rClampPxRaw.ts
import { rClampCore } from './rClampCore.js';

type RClampPxRawOptions = {
    allowReverse: boolean;
    minViewportDiff: number;
};

export function rClampPxRaw(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number,
    maxViewport: string | number,
    options: RClampPxRawOptions
) {
    const {
        allowReverse,
        minViewportDiff,
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

    return {
        minPx: clampMinPx,
        maxPx: clampMaxPx,
        vwCoef,
        intercept,
    };
}