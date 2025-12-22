// conversionDpiRate.ts
// import { removeUnit } from './removeUnit';
// import { toRatio } from './toRatio';

// export function conversionDpiRate(conversionTargetDpi: string | number, conversionSourceDpi: string | number){
//     const conversionSourceDpiNum = removeUnit(conversionSourceDpi);
//     const conversionTargetDpiNum = removeUnit(conversionTargetDpi);


//     if(conversionTargetDpiNum <= 0){
//         throw new RangeError('conversionTargetDpi must be greater than 0');
//     }
    
//     return toRatio(conversionTargetDpiNum, conversionSourceDpiNum, {
//         errorMessage: 'conversionSourceDpi must be greater than 0'
//     });
// }

import { removeUnit } from './removeUnit';
import { toRatio } from './toRatio';

export function conversionDpiRate(
  conversionTargetDpi: string | number,
  conversionSourceDpi: string | number
): number {
  const conversionTargetDpiNum = removeUnit(conversionTargetDpi);
  // Source側は toRatio 内部のバリデーションに任せても良いですが、
  // ここで数値化しておくと toRatio に渡すのが数値で統一されます。
  const conversionSourceDpiNum = removeUnit(conversionSourceDpi);

  // 改善点: NaN の場合も弾くように修正
  // NaN <= 0 は false になるため、isFinite チェックが必要です
  if (!Number.isFinite(conversionTargetDpiNum) || conversionTargetDpiNum <= 0) {
    throw new RangeError('conversionTargetDpi must be greater than 0');
  }

  return toRatio(conversionTargetDpiNum, conversionSourceDpiNum, {
    // Source側のエラーメッセージをDPI用に上書き
    errorMessage: 'conversionSourceDpi must be greater than 0'
  });
}