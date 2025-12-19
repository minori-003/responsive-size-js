// pxToPtRaw.ts

import{removeUnit, conversionDpiRate} from '../utils';

export function pxToPtRaw(px: string | number, conversionTargetDpi: string | number, conversionSourceDpi: string | number){
    const pxNum = removeUnit(px);
    const rate = conversionDpiRate(conversionTargetDpi, conversionSourceDpi);
    return pxNum * rate;
}