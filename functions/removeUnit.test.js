import { describe, it, expect } from 'vitest';
import { removeUnit } from './utils/removeUnit.js';

describe('removeUnit', () => {
    it('converts px string to number', () => {
        expect(removeUnit('16px')).toBe(16);
    });

    it('converts negative px string to negative number', () => {
        expect(removeUnit('-8px')).toBe(-8);
    });

    it('throws TypeError when value is not a number or a unit value string', () => {
        expect(()=>{removeUnit('abc')}).toThrow(TypeError);
    });

});