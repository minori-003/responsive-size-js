// rClampCore.ts

import {removeUnit} from '../utils/removeUnit';
import {toRatio} from '../utils/toRatio';

export function rClampCore(
    minSize: string | number,
    maxSize: string | number,
    minViewport: string | number,
    maxViewport: string | number,
    options: {
        allowReverse: boolean;
        minViewportDiff: number;
    }
)   {
    const {
        allowReverse,
        minViewportDiff,
    } = options;


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

    const slope = toRatio(maxSizeNum - minSizeNum, maxViewportNum - minViewportNum);
    const intercept = minSizeNum - slope * minViewportNum;

    return {
        min: minSizeNum,
        max: maxSizeNum,
        slope,
        intercept,
    };
}