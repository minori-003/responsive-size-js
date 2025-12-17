// pxToPtRate.js
import { removeUnit } from '../utils/removeUnit.js';

function pxToPtRate(dpi){
    const dpiNum = removeUnit(dpi);

    if(dpiNum <= 0){
        throw new RangeError('dpi must be greater than 0');
    }

    return dpiNum / 96;
}

export { pxToPtRate };