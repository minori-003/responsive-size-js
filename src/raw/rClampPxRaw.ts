// rClampPxRaw.ts
import { rClampCore } from '.';
import { DEFAULT_SETTINGS } from '../setting';

type rClampPxRawOptions = {
    allowReverse?: boolean;
    minViewportDiff?: number;
};

export function rClampPxRaw(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number = DEFAULT_SETTINGS.minViewportWidth,
    maxViewport: string | number = DEFAULT_SETTINGS.maxViewportWidth,
    options: rClampPxRawOptions = {}
) {
    const {
        allowReverse = false,
        minViewportDiff = 1,
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