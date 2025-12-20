// rClampRem.ts
import { rClampRaw } from '../raw';
import { DEFAULT_SETTINGS } from '../setting';
import { pxToRemRaw } from '../raw/pxToRemRaw';

type rClampRemOptions = {
    allowReverse?: boolean;
    minViewportDiff?: number;
    baseFontSize?: string | number;
    precision?: number;
};

export function rClampRem(
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