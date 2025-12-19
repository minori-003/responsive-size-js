// ptToPxRaw.ts

import{removeUnit, conversionDpiRate} from '../utils';

export function ptToPxRaw(pt: string | number, conversionTargetDpi: string | number, conversionSourceDpi: string | number){
    const ptNum = removeUnit(pt);
    const rate = conversionDpiRate(conversionTargetDpi, conversionSourceDpi);
    return ptNum * rate;
}