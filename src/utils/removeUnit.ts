// removeUnit.ts
// 入力された値から、単位を除いた数値を返す

export function removeUnit(value: number | string): number {
  if (typeof value === 'number') {
    return value;
  }
  return parseFloat(value);
}
