// pxToPtRaw.js

import { removeUnit } from '../utils/removeUnit.js';
import { pxToPtRate } from '../rates/pxToPtRate.js';

function pxToPtRaw(px, dpi){
    const pxNum = removeUnit(px);
    const rate = pxToPtRate(dpi);
    return pxNum * rate;
}

export { pxToPtRaw };