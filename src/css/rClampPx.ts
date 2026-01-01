// rClampPx.ts
import { rClampPxRaw } from '../raw/rClampPxRaw.js';
import { DEFAULT_SETTINGS } from '../setting/index.js';

type RClampPxOptions = {
    allowReverse?: boolean;
    minViewportDiff?: number;
    precision?: number;
};

export function rClampPx(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number = DEFAULT_SETTINGS.minViewportWidth,
    maxViewport: string | number = DEFAULT_SETTINGS.maxViewportWidth,
    options: RClampPxOptions = {}
) {
    const {
        allowReverse = false,
        minViewportDiff = 1,
        precision = 3,
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }
    const { minPx, maxPx, vwCoef, intercept } = rClampPxRaw(
        minSize,
        maxSize,
        minViewport,
        maxViewport,
        { allowReverse, minViewportDiff }
    );

    const round = (v: number): number => Number(v.toFixed(precision));
    const absVwCoef = Math.abs(vwCoef);
    const vwPart =
        vwCoef < 0
            ? `-${round(absVwCoef)}vw`
            : `${round(absVwCoef)}vw`;

    const interceptSign = intercept < 0 ? '-' : '+';
    const absIntercept = Math.abs(intercept);

    return `clamp(${round(minPx)}px, calc(${vwPart} ${interceptSign} ${round(absIntercept)}px), ${round(maxPx)}px)`;
}