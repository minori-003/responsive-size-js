# responsive-size-js

CSS で使えるレスポンシブなサイズ計算を、  
JavaScript 関数として提供するユーティリティライブラリです。

px ベースで考えた値を、そのまま `clamp()` や `rem` / `em` に変換できます。

---

## 特徴

- CSS でそのまま使える文字列を返す API
- `clamp()` を使ったレスポンシブサイズを簡単に生成
- px 基準の思考のまま rem / em / vw に変換可能
- 数値計算と CSS 出力を分離した設計


## インストール

```bash
npm install responsive-size-js
```

## クイックスタート

### Responsive clamp (px)

```typescript
import { rClampPx } from 'responsive-size-js';

const padding = rClampPx(
  16,
  32,
  375,
  1440
);

// clamp(16px, calc(1.111vw + 11.833px), 32px)
```

---

### Responsive clamp (rem)

```typescript
import { rClampRem } from 'responsive-size-js';

const fontSize = rClampRem(
  14,   // min size (px)
  18,   // max size (px)
  375,  // min viewport (px)
  1440  // max viewport (px)
);

// clamp(0.875rem, calc(0.278vw + 0.2rem), 1.125rem)

```

---


### Simple unit conversion

```typescript
import { pxToRem } from 'responsive-size-js';

pxToRem(16);
// '1rem'

```

---

## 高度な使い方

### raw レイヤーを直接使う（上級者向け）

**注意**
1. この使用方法は自己責任でお願いします。通常は css レイヤーを使用することを推奨します。
2. raw API は内部実装寄りの低レベル API です。将来のバージョンで仕様変更される可能性があります。

CSS を出力せず、数値計算結果だけを利用したい場合は
raw レイヤーを使用できます。

```typescript
import { rClampCore } from 'responsive-size-js/raw';

const { slope, intercept } = rClampCore(
  14,
  18,
  375,
  1440,
  {
    allowReverse: false,
    minViewportDiff: 1,
  });

```

---

```typescript
import { rClampRemRaw } from 'responsive-size-js/raw';

const { minRem, maxRem, vwCoef, interceptRem } = rClampRemRaw(
  14,
  18,
  375,
  1440,
  {
    allowReverse: false,
    minViewportDiff: 1,
    baseFontSize: 16,
  }
);

```

rClampRemRaw は、px ベースの値を rem 文脈に正規化した上で
clamp 計算を行う raw API です。
baseFontSize は必須です。

---
raw API は単位を持たない純粋な数値計算を提供します。
そのため、すべての前提条件を呼び出し側が明示的に指定する必要があります

一部の Raw 関数は、数値計算だけでなく
「どの単位文脈で扱われている値か」を示すラベルとしても機能します。

---

## オプションについて

1.  rClampPx<br>
    options:
    - allowReverse: サイズの大小関係を反転させる
    - precision: 小数点以下の桁数（デフォルト: 3）

---

2. rClampRem<br>
    options:
    - rClampPx のオプションと同じ
    - baseFontSize: rem 計算に使用する基準フォントサイズ(デフォルト: 16)

---

3. raw レイヤーについて（注意書き）<br>
    Raw API では、より低レベルな数値計算を行います。<br>
    そのため、利便性のためのデフォルト値は提供されません。<br>
    すべての前提条件を呼び出し側で明示的に指定してください。<br>
    通常は css レイヤーの使用を推奨します。

---



## レイヤー構成について

本パッケージは用途ごとにレイヤーを分けています。

- **css**

  CSS で直接使える文字列を返す公開 API

- **raw**

  単位付き値を前提とした数値計算を行い、
  最終的に純粋な数値のみを返す低レベル API
  内部処理の再利用や CSS 以外の用途向け

raw レイヤーは、単位付き値を前提とした計算ロジックを提供し、
最終的に**数値のみ**を返す低レベル API です。
他のプログラムや独自のスタイル生成処理に組み込む用途を想定しています。

通常の利用では css レイヤーの使用を推奨します。

---

## ライセンス

MIT

---

## お問い合わせ

Issue や Pull Request は歓迎します。
