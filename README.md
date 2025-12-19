# responsive-size-js

<parameter name="Leスポンシブデザインのための単位変換とFluid Typographyユーティリティライブラリ

[![npm version](https://img.shields.io/npm/v/responsive-size-js.svg)](https://www.npmjs.com/package/responsive-size-js)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

モダンなWebデザインに必要な単位変換（px/rem/pt）とFluid Typography（CSS `clamp()`生成）を提供するJavaScript/TypeScriptライブラリです。

## ✨ 特徴

- 🎯 **単位変換**: px ⇔ rem ⇔ pt の相互変換
- 📐 **Fluid Typography**: レスポンシブなCSS `clamp()` 生成
- 🌲 **Tree-shakable**: ES Modules対応で必要な関数だけをインポート
- 🧪 **テスト済み**: 21個のテストで品質を保証
- 📦 **軽量**: 依存関係なし、シンプルな実装
- 🔧 **TypeScript対応**: 型定義ファイル付き（予定）

## 📦 インストール

```bash
npm install responsive-size-js
```

または

```bash
pnpm add responsive-size-js
```

## 🚀 Basic Usage

### CSS string utilities

These functions return CSS-ready strings and are intended for direct use in styles.

```javascript
import { pxToRem, rClamp } from 'responsive-size-js';

pxToRem(16);
// => "1rem"

rClamp(16, 24, 375, 1440);
// => "clamp(...)"
```

### Raw utilities

Raw functions return numbers only and perform pure calculations.
They are useful for JavaScript logic or custom formatting.

```javascript
import { pxToRemRaw, rClampRaw } from 'responsive-size-js';

pxToRemRaw(16);
// => 1

rClampRaw(16, 24, 375, 1440);
// => number
```

## Other Utilities

This library also provides unit conversion utilities between px and pt.

```javascript
import { pxToPt, ptToPx } from 'responsive-size-js';

pxToPt(16);
// => "12pt"

ptToPx(12);
// => "16px"
```

Raw versions are also available and return numeric values only.

## Error Handling

Raw functions validate inputs strictly.
If a calculation becomes mathematically invalid (for example, division by zero or non-finite values),
they will throw an error instead of returning a broken result.

Non-Raw functions propagate these errors and additionally validate formatting options
such as precision.

This design helps prevent invalid values from silently leaking into CSS.

## Notes

Internal utility functions are not exposed to keep the public API stable
and allow future improvements without breaking changes.


## 📚 API リファレンス

### 単位変換関数

#### `pxToRem(px, baseFontSize?, options?)`

px を rem に変換します。

- **px**: `number | string` - 変換する値（例: `16`, `'16px'`）
- **baseFontSize**: `number | string` - ベースフォントサイズ（デフォルト: `16`）
- **options**: `object`
  - **precision**: `number` - 小数点以下の桁数（デフォルト: `3`）
- **戻り値**: `string` - rem単位の文字列（例: `'1rem'`）

#### `remToPx(rem, baseFontSize?, options?)`

rem を px に変換します。

#### `ptToPx(pt, dpi?, options?)`

pt を px に変換します。

- **dpi**: `number | string` - DPI（デフォルト: `72`）

#### `pxToPt(px, dpi?, options?)`

px を pt に変換します。

### Fluid Typography関数

#### `rClampPx(minSize, maxSize, minViewport?, maxViewport?, options?)`

px単位でCSS `clamp()` 関数を生成します。

- **minSize**: `number | string` - 最小サイズ
- **maxSize**: `number | string` - 最大サイズ
- **minViewport**: `number | string` - 最小ビューポート幅（デフォルト: `375`）
- **maxViewport**: `number | string` - 最大ビューポート幅（デフォルト: `1440`）
- **options**: `object`
  - **allowReverse**: `boolean` - 逆スケール（減少）を許可（デフォルト: `false`）
  - **minViewportDiff**: `number` - 最小/最大ビューポートの最小差（デフォルト: `1`）
  - **precision**: `number` - 小数点以下の桁数（デフォルト: `3`）
- **戻り値**: `string` - CSS clamp関数（例: `'clamp(14px, calc(0.376vw + 12.592px), 18px)'`）

#### `rClampRem(minSize, maxSize, minViewport?, maxViewport?, options?)`

rem単位でCSS `clamp()` 関数を生成します。

#### `rClampRaw(minSize, maxSize, minViewport?, maxViewport?, options?)`

clampの計算値（min, max, slope, intercept）をオブジェクトで返します。

### ユーティリティ関数

#### `removeUnit(value)`

文字列から単位を削除して数値を返します。

```javascript
import { removeUnit } from 'sass-responsive-util-javascript';

removeUnit('16px');    // 16
removeUnit('1.5rem');  // 1.5
removeUnit(20);        // 20
```

## 🎨 使用例

### レスポンシブなフォントサイズ

```javascript
import { rClampPx } from 'sass-responsive-util-javascript';

// モバイル(375px)で14px、デスクトップ(1440px)で18pxに自動スケール
const fontSize = rClampPx(14, 18, 375, 1440);

// CSS-in-JSで使用
const styles = {
  fontSize: fontSize,  // 'clamp(14px, calc(0.376vw + 12.592px), 18px)'
};
```

### Next.js / React での使用

```jsx
import { pxToRem, rClampRem } from 'sass-responsive-util-javascript';

const MyComponent = () => {
  return (
    <div style={{
      padding: pxToRem(24),           // '1.5rem'
      fontSize: rClampRem(1, 1.5),    // fluid typography
    }}>
      Hello World
    </div>
  );
};
```

## 🧪 テスト

```bash
npm test
```

## 📝 ライセンス

ISC License - 詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 🤝 貢献

Issue報告やPull Requestを歓迎します！

## 📧 お問い合わせ

バグ報告やご質問は[GitHub Issues](https://github.com/YOUR_USERNAME/sass-responsive-util-JavaScript/issues)までお願いします。
