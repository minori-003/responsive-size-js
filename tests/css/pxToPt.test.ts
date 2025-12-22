import { describe, it, expect } from 'vitest';
import { pxToPt } from '../../src/css';

describe('pxToPt', () => {
  it('formats output with "pt" unit', () => {
    // 96px -> 72pt (default DPI)
    expect(pxToPt(96)).toBe('72pt');
  });

  it('respects precision option', () => {
    // 100px -> 75pt
    // 10px -> 7.5pt
    // 1px -> 0.75pt
    
    // 100px / 1.333... = 75
    expect(pxToPt(100)).toBe('75pt');

    // 10px -> 7.5pt
    expect(pxToPt(10)).toBe('7.5pt');
  });

  it('handles rounding correctly', () => {
    // 1px = 0.75pt
    expect(pxToPt(1, { precision: 1 })).toBe('0.8pt'); // 0.75 -> rounded to 0.8
    expect(pxToPt(1, { precision: 2 })).toBe('0.75pt');
  });

  it('removes trailing zeros', () => {
    expect(pxToPt(96, { precision: 5 })).toBe('72pt'); // Not "72.00000pt"
  });

  it('throws range error for invalid precision', () => {
    expect(() => pxToPt(10, { precision: -1 })).toThrow(RangeError);
  });
});