// conversionDpiRate.ts
import { removeUnit } from './removeUnit';
import { toRatio } from './toRatio';

export function conversionDpiRate(conversionTargetDpi: string | number, conversionSourceDpi: string | number){
    const conversionSourceDpiNum = removeUnit(conversionSourceDpi);
    const conversionTargetDpiNum = removeUnit(conversionTargetDpi);


    if(conversionTargetDpiNum <= 0){
        throw new RangeError('conversionTargetDpi must be greater than 0');
    }
    
    return toRatio(conversionTargetDpiNum, conversionSourceDpiNum, {
        errorMessage: 'conversionSourceDpi must be greater than 0'
    });
}