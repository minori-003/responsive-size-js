// removeUnit.ts
// 入力された値から、単位を除いた数値を返す

// export function removeUnit(value: number | string): number {
//   if (typeof value === 'number') {
//     return value;
//   }

//   if (typeof value === 'string') {
//     const match = value.trim().match(/^(-?\d*\.?\d+)/);
//     if (match) {
//       return Number(match[0]);
//     }
//   }

//   throw new TypeError('removeUnit: value must be a number or a unit value string');
// }

export function removeUnit(value: number | string): number {
  if (typeof value === 'number') {
    return value;
  }
  return parseFloat(value);
}
