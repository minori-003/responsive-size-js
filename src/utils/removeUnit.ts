// removeUnit.ts
// 入力された値から、単位を除いた数値を返す

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
