// toRatio.ts
import { removeUnit } from './removeUnit';

type ToRatioOptions = {
  errorMessage?: string;
};

export function toRatio(numerator: number, denominator: number, options: ToRatioOptions = {}): number {
    const { errorMessage =
        'toRatio: denominator must be a positive finite number'
    } = options;
    const numeratorNum = removeUnit(numerator);
    const denominatorNum = removeUnit(denominator);

  if (!Number.isFinite(numeratorNum)) {
    throw new Error('toRatio: numerator must be a finite number');
  }

  if (!Number.isFinite(denominatorNum) || denominatorNum <= 0) {
    throw new Error(errorMessage);
  }

  return numeratorNum / denominatorNum;
}
