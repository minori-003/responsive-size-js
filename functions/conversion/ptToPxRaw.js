// ptToPxRaw.js

import { removeUnit } from '../utils/removeUnit.js';
import { ptToPxRate } from '../rates/ptToPxRate.js';

function ptToPxRaw(pt, dpi){
    const ptNum = removeUnit(pt);
    const rate = ptToPxRate(dpi);
    return ptNum * rate;
}

export { ptToPxRaw };
