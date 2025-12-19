// ptToPxRaw.js

import { removeUnit } from '../utils/removeUnit.js';
import { conversionDpiRate } from '../rates/conversionDpiRate.js';

function ptToPxRaw(pt, conversionTargetDpi, conversionSourceDpi){
    const ptNum = removeUnit(pt);
    const rate = conversionDpiRate(conversionTargetDpi, conversionSourceDpi);
    return ptNum * rate;
}

export { ptToPxRaw };
