// rClampRem.ts
import { rClampRemRaw } from '../raw/rClampRemRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

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
        precision = 3,
        baseFontSize = DEFAULT_SETTINGS.rootFontSize,
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }
    const { minRem, vwCoef, interceptRem, maxRem } = rClampRemRaw(
    minSize,
    maxSize,
    minViewport,
    maxViewport,
    { allowReverse, minViewportDiff, baseFontSize }
);

    const round = (v: number): number => Number(v.toFixed(precision));
    const absVwCoef = Math.abs(vwCoef);
    const vwPart =
        vwCoef < 0
            ? `-${round(absVwCoef)}vw`
            : `${round(absVwCoef)}vw`;

    const interceptSign = interceptRem < 0 ? '-' : '+';
    const absInterceptRem = Math.abs(interceptRem);

    return `clamp(${round(minRem)}rem, calc(${vwPart} ${interceptSign} ${round(absInterceptRem)}rem), ${round(maxRem)}rem)`;
}