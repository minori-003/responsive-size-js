// pxToPtRaw.js

import { removeUnit } from '../utils/removeUnit.js';
import { conversionDpiRate } from '../rates/conversionDpiRate.js';

function pxToPtRaw(px, conversionTargetDpi, conversionSourceDpi){
    const pxNum = removeUnit(px);
    const rate = conversionDpiRate(conversionTargetDpi, conversionSourceDpi);
    return pxNum * rate;
}

export { pxToPtRaw };