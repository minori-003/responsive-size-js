// pxToPt.ts
import { pxToPtRaw } from '../raw';
import { DEFAULT_SETTINGS } from '../setting';

type pxToPtOptions = {
    conversionTargetDpi?: string | number;
    conversionSourceDpi?: string | number;
    precision?: number;
};

export function pxToPt(px: string | number, options: pxToPtOptions = {}){

    const {
        conversionTargetDpi = DEFAULT_SETTINGS.dpi.legacy,
        conversionSourceDpi = DEFAULT_SETTINGS.dpi.web,
        precision = 3
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    const ptValueRaw = pxToPtRaw(px, conversionTargetDpi, conversionSourceDpi);
    const roundedPtValue = Number(ptValueRaw.toFixed(precision));

    return `${roundedPtValue}pt`;
}