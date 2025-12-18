// toRatio.js
import { removeUnit } from '../utils/removeUnit.js';

function toRatio(numerator, denominator, options = {}){
    const { errorMessage =
        'denominator must be greater than 0'
    } = options;
    const numeratorNum = removeUnit(numerator);
    const denominatorNum = removeUnit(denominator);

    if(denominatorNum <= 0){
        throw new RangeError(errorMessage);
    }

    return numeratorNum / denominatorNum;
}

export { toRatio };