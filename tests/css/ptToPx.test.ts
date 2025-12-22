import { describe, it, expect } from 'vitest';
import { ptToPx } from '../../src/css/';

describe('ptToPx', () => {
  it('formats output with "px" unit', () => {
    // 72pt -> 96px (default DPI)
    expect(ptToPx(72)).toBe('96px');
  });

  it('respects precision option', () => {
    // 10pt -> 13.3333...px
    
    // Default precision is 3
    expect(ptToPx(10)).toBe('13.333px'); 

    // Custom precision
    expect(ptToPx(10, { precision: 1 })).toBe('13.3px');
    expect(ptToPx(10, { precision: 0 })).toBe('13px');
  });

  it('removes trailing zeros', () => {
    // 9pt -> 12px exactly. Should not be "12.000px"
    expect(ptToPx(9, { precision: 3 })).toBe('12px');
    
    // 10.5pt -> 14px exactly
    expect(ptToPx(10.5)).toBe('14px');
  });

  it('throws range error for invalid precision', () => {
    expect(() => ptToPx(10, { precision: -1 })).toThrow(RangeError);
    expect(() => ptToPx(10, { precision: 1.5 })).toThrow(RangeError);
  });
  
  it('passes DPI options correctly', () => {
    // raw関数への受け渡し確認 (Target: 72dpi, Source: 72dpi -> 等倍)
    expect(ptToPx(100, { targetDpi: 72, sourceDpi: 72 })).toBe('100px');
  });
});