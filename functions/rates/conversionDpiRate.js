// conversionDpiRate.js
import { removeUnit } from '../utils/removeUnit.js';
import { toRatio } from './toRatio.js';

function conversionDpiRate(conversionTargetDpi, conversionSourceDpi){
    const conversionSourceDpiNum = removeUnit(conversionSourceDpi);
    const conversionTargetDpiNum = removeUnit(conversionTargetDpi);

    if(conversionSourceDpiNum <= 0){
        throw new RangeError('conversionSourceDpi must be greater than 0');
    }

    if(conversionTargetDpiNum <= 0){
        throw new RangeError('conversionTargetDpi must be greater than 0');
    }
    
    return toRatio(conversionTargetDpiNum, conversionSourceDpiNum);
}

export { conversionDpiRate };