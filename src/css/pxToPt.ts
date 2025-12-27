// pxToPt.ts
import { pxToPtRaw } from '../raw/pxToPtRaw';
import { DEFAULT_SETTINGS } from '../setting';

type PxToPtOptions = {
    targetDpi?: string | number;
    sourceDpi?: string | number;
    /**
     * Decimal places to round to. Defaults to 3.
     * Trailing zeros will be removed.
     */
    precision?: number;
};

/**
 * Converts pixels to points string (e.g., "12pt").
 */

export function pxToPt(
    px: string | number,
    options: PxToPtOptions = {}
    ): string {

    const {
        targetDpi = DEFAULT_SETTINGS.dpi.legacy,
        sourceDpi = DEFAULT_SETTINGS.dpi.web,
        precision = 3
    } = options;

    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError('precision must be a non-negative integer');
    }

    // undefinedを渡すとデフォルト値が適用されます
    const ptValueRaw = pxToPtRaw(px, targetDpi, sourceDpi);
    
    // 指定桁で四捨五入し、Number()で不要な末尾ゼロを除去
    const roundedPtValue = Number(ptValueRaw.toFixed(precision));

    return `${roundedPtValue}pt`;
}