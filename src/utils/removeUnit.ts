// removeUnit.ts
// 数値または単位付き数値文字列から、
// 「数値として解釈可能な部分」だけを抽出する。
// 単位の妥当性や意味解釈は行わない。

export function removeUnit(value: number | string): number {
    if (typeof value === 'number') {
      if (!Number.isFinite(value)) {
        throw new Error('removeUnit: value must be a finite number');
      }
      return value;
    }
  const parsed = parseFloat(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`removeUnit: cannot extract numeric value from "${value}"`);
  }

  if (!Number.isFinite(parsed)) {
    throw new Error('removeUnit: value must be a finite number');
  }

  return parsed;
}
