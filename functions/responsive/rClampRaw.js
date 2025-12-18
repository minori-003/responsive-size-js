// rClampRaw.js

import { removeUnit } from '../utils/removeUnit.js';
import { toRatio } from '../rates/toRatio.js';

function rClampRaw(
    minSize,
    maxSize,
    minViewport,
    maxViewport,
    options = {}
)   {
    const { allowReverse = false, minViewportDiff = 1 } = options;


    const minSizeNum = removeUnit(minSize);
    const maxSizeNum = removeUnit(maxSize);
    const minViewportNum = removeUnit(minViewport);
    const maxViewportNum = removeUnit(maxViewport);

    if (minViewportNum >= maxViewportNum) {
        throw new RangeError('minViewport must be less than maxViewport');
    }

    if (!allowReverse && minSizeNum > maxSizeNum) {
        throw new RangeError('minSize must be less than maxSize');
    }

    if (minSizeNum === maxSizeNum) {
        throw new RangeError('minSize must be different from maxSize');
    }

    if (maxViewportNum - minViewportNum < minViewportDiff) {
        throw new RangeError('throws when viewport diff is smaller than minViewportDiff');
    }

    const slope = toRatio(maxSizeNum - minSizeNum, maxViewportNum - minViewportNum, {
        errorMessage: 'maxViewport must be greater than minViewport'
    });
    const intercept = minSizeNum - slope * minViewportNum;

    return {
        min: minSizeNum,
        slope,
        intercept,
        max: maxSizeNum,
    };
}

export { rClampRaw };