// rClampPx.ts
import { rClampRaw } from '../raw';
import { DEFAULT_SETTINGS } from '../setting';

type rClampPxOptions = {
    allowReverse?: boolean;
    minViewportDiff?: number;
    precision?: number;
};
function rClampPx(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number = DEFAULT_SETTINGS.minViewportWidth,
    maxViewport: string | number = DEFAULT_SETTINGS.maxViewportWidth,
    options: rClampPxOptions = {}
) {
    const {
        allowReverse = false,
        minViewportDiff = 1,
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

    const clampMin = Math.min(min, max);
    const clampMax = Math.max(min, max);

    const vwCoef = slope * 100;
    const absVwCoef = Math.abs(vwCoef);
    const vwPart =
        slope < 0
            ? `-${round(absVwCoef)}vw`
            : `${round(absVwCoef)}vw`;

    const interceptSign = intercept < 0 ? '-' : '+';
    const absIntercept = Math.abs(intercept);

    return `clamp(${round(clampMin)}px, calc(${vwPart} ${interceptSign} ${round(absIntercept)}px), ${round(clampMax)}px)`;

}

export { rClampPx };