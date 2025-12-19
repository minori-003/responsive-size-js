// ptToPx.ts
import { ptToPxRaw } from './ptToPxRaw';
import { DEFAULT_SETTINGS } from '../setting';

type ptToPxOptions = {
    conversionTargetDpi?: string | number;
    conversionSourceDpi?: string | number;
    precision?: number;
};

export function ptToPx(pt: string | number, options: ptToPxOptions = {}){

    const {
        conversionTargetDpi = DEFAULT_SETTINGS.dpi.web,
        conversionSourceDpi = DEFAULT_SETTINGS.dpi.legacy,
        precision = 3
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    const pxValueRaw = ptToPxRaw(pt, conversionTargetDpi, conversionSourceDpi);
    const roundedPxValue = Number(pxValueRaw.toFixed(precision));

    return `${roundedPxValue}px`;
}