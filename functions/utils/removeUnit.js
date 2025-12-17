// removeUnit.js
// 入力された値から、単位を除いた数値を返す

function removeUnit(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const match = value.trim().match(/^(-?\d+(\.\d+)?)/);
    if (match) {
      return Number(match[0]);
    }
  }

  throw new TypeError('removeUnit: value must be a number or a unit value string');
}

export { removeUnit };