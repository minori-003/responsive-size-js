// toRatio.js
import { removeUnit } from '../utils/removeUnit.js';

function toRatio(numerator, denominator){
    const numeratorNum = removeUnit(numerator);
    const denominatorNum = removeUnit(denominator);

    if(denominatorNum <= 0){
        throw new RangeError('denominator must be greater than 0');
    }

    return numeratorNum / denominatorNum;
}

export { toRatio };