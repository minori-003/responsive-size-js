// pxToPt.js
import { pxToPtRaw } from './pxToPtRaw.js';
import { variable } from '../../setting/index.js';

function pxToPt(px, options = {}){

    const {
        conversionTargetDpi = variable.dpi.legacy,
        conversionSourceDpi = variable.dpi.web,
        precision = 3
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    const ptValueRaw = pxToPtRaw(px, conversionTargetDpi, conversionSourceDpi);
    const roundedPtValue = Number(ptValueRaw.toFixed(precision));

    return `${roundedPtValue}pt`;
}

export { pxToPt };