// ptToPx.js
import { ptToPxRaw } from './ptToPxRaw.js';
import { variable } from '../../setting/index.js';

function ptToPx(pt, dpi = variable.dpi.legacy, options = {}){

    const { precision = 3 } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    const pxValueRaw = ptToPxRaw(pt, dpi);
    const roundedPxValue = Number(pxValueRaw.toFixed(precision));

    return `${roundedPxValue}px`;
}

export { ptToPx };