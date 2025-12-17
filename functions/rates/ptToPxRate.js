// ptToPxRate.js
import { removeUnit } from '../utils/removeUnit.js';

function ptToPxRate(dpi){
    const dpiNum = removeUnit(dpi);

    if(dpiNum <= 0){
        throw new RangeError('dpi must be greater than 0');
    }

    return 96 / dpiNum;
}

export { ptToPxRate };