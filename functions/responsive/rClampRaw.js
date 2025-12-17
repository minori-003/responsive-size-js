// rClampRaw.js

import { removeUnit } from '../utils/removeUnit.js';

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

    const slope = (maxSizeNum - minSizeNum) / (maxViewportNum - minViewportNum);
    const intercept = minSizeNum - slope * minViewportNum;

    return {
        min: minSizeNum,
        slope,
        intercept,
        max: maxSizeNum,
    };
}

export { rClampRaw };