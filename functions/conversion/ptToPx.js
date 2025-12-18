// ptToPx.js
import { ptToPxRaw } from './ptToPxRaw.js';
import { variable } from '../../setting/index.js';

function ptToPx(pt, options = {}){

    const {
        conversionTargetDpi = variable.dpi.web,
        conversionSourceDpi = variable.dpi.legacy,
        precision = 3
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    const pxValueRaw = ptToPxRaw(pt, conversionTargetDpi, conversionSourceDpi);
    const roundedPxValue = Number(pxValueRaw.toFixed(precision));

    return `${roundedPxValue}px`;
}

export { ptToPx };