// tests/pxToVwLimitedPc.test.ts

import { describe, it, expect } from 'vitest';
import { pxToVwLimitedPc } from '../../src/css';

describe('pxToVwLimitedPc', () => {
  it('正の値では min(px, vw) を返す', () => {
    const result = pxToVwLimitedPc(100, 1920);

    expect(result).toContain('min(');
    expect(result).toContain('100px');
    expect(result).toContain('vw');
  });

  it('負の値では max(px, vw) を返す', () => {
    const result = pxToVwLimitedPc(-100, 1920);

    expect(result).toContain('max(');
    expect(result).toContain('-100px');
    expect(result).toContain('vw');
  });

  it('0 を渡した場合でも例外を出さず処理される', () => {
    const result = pxToVwLimitedPc(0, 1920);

    expect(result).toContain('0px');
    expect(result).toContain('vw');
  });

  it('precision オプションが vw の小数点桁数に反映される', () => {
    const result = pxToVwLimitedPc(100, 1920, { precision: 1 });

    // vw の小数点以下が 1 桁であることを確認
    // 数値そのものは固定しない
    const vwMatch = result.match(/([\d.-]+)vw/);
    expect(vwMatch).not.toBeNull();

    if (vwMatch) {
      const decimalPart = vwMatch[1].split('.')[1];
      expect(decimalPart?.length ?? 0).toBeLessThanOrEqual(1);
    }
  });

  it('precision が負の数の場合は RangeError を投げる', () => {
    expect(() =>
      pxToVwLimitedPc(100, 1920, { precision: -1 })
    ).toThrow(RangeError);
  });

  it('Infinity を渡した場合は例外を投げる', () => {
    expect(() =>
      pxToVwLimitedPc(Infinity, 1920)
    ).toThrow();
  });
});
