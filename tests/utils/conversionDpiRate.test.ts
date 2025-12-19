
import { describe, it, expect } from 'vitest';
import { conversionDpiRate } from '../../functions/rates/conversionDpiRate';

describe('conversionDpiRate', () => {
    it('calculates dpi rate correctly', () => {
        expect(conversionDpiRate(96, 72)).toBeCloseTo(1.3333, 4);
    });

    it('throws custom RangeError when conversionSourceDpi is 0', () => {
        expect(() => conversionDpiRate(96, 0)).toThrow('conversionSourceDpi must be greater than 0');
    });

    it('throws RangeError when conversionTargetDpi is 0', () => {
        // This is still handled by manual check in conversionDpiRate, not toRatio
        expect(() => conversionDpiRate(0, 96)).toThrow('conversionTargetDpi must be greater than 0');
    });
});
