// ptToPx.ts
import { ptToPxRaw } from '../raw';
import { DEFAULT_SETTINGS } from '../setting';

type PtToPxOptions = {
    targetDpi?: string | number;
    sourceDpi?: string | number;
    /**
     * Decimal places to round to. Defaults to 3.
     * Trailing zeros will be removed.
     */
    precision?: number;
};

/**
 * Converts points to pixels string (e.g., "16px").
 */

export function ptToPx(pt: string | number, options: PtToPxOptions = {}){

    const {
        targetDpi = DEFAULT_SETTINGS.dpi.web,
        sourceDpi = DEFAULT_SETTINGS.dpi.legacy,
        precision = 3
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    // undefinedを渡すとデフォルト値が適用されます
    const pxValueRaw = ptToPxRaw(pt, targetDpi, sourceDpi);

    // 指定桁で四捨五入し、Number()で不要な末尾ゼロを除去
    const roundedPxValue = Number(pxValueRaw.toFixed(precision));

    return `${roundedPxValue}px`;
}