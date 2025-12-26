// pxToRem.test.js
import { describe, it, expect } from 'vitest';
import { pxToRem } from '../../src/css';

describe('pxToRem', () => {
    it('converts px number to rem string using default baseFontSize', () => {
        expect(pxToRem(32)).toBe('2rem');
    });

    it('converts px number to rem string using custom baseFontSize', () => {
        expect(pxToRem(20, 10)).toBe('2rem');
    });

    it('converts px string to rem string using default baseFontSize', () => {
        expect(pxToRem('16px')).toBe('1rem');
    });
  
    // it('throws RangeError when baseFontSize is 0', () => {
    //     expect(()=>{pxToRem(16, 0)}).toThrow(RangeError);
    // });
  
    // it('throws RangeError when baseFontSize is negative', () => {
    //     expect(()=>{pxToRem(16, -16)}).toThrow(RangeError);
    // });
});