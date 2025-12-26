# responsive-size-js

CSS で利用できるレスポンシブなサイズ計算を、
JavaScript / TypeScript から安全に扱うためのユーティリティ集です。

主に clamp() を用いた可変サイズ指定や、
px / rem / em / pt などの単位変換を提供します。

---

## 特徴

- CSS でそのまま使える文字列を返す API
- `clamp()` を使ったレスポンシブサイズ生成
- px 基準の思考のまま rem / em / vw に変換
- 計算ロジックと CSS 出力を分離した設計


## インストール

```bash
npm install responsive-size-js
```

## クイックスタート

### Responsive clamp (px)

```typescript
import { rClampPx } from 'responsive-size-js';

const fontSize = rClampPx(16, 24, 375, 1440);
// clamp(16px, 1.23vw + 10.45px, 24px)
```

---

### Responsive clamp (rem)

```typescript
import { rClampRem } from 'responsive-size-js';

const fontSize = rClampRem(16, 24, 375, 1440, {
  baseFontSize: 16,
});
// clamp(1rem, 1.23vw + 0.65rem, 1.5rem)

```

---


### Simple unit conversion

```typescript
import { pxToRem, remToPx } from 'responsive-size-js';

pxToRem(16); // "1rem"
remToPx(1);  // "16px"

```

対応関数：

- pxToRem / remToPx

- pxToEm / emToPx

- pxToPt / ptToPx

---

## API

### rClampPx

px ベースの値から `clamp()` を生成します。

options:
- allowReverse: サイズの大小関係を反転（default: false）
- precision: 小数点以下の桁数（default: 3）

---

### rClampRem

px ベースの値を rem に正規化して `clamp()` を生成します。

options:
- rClampPx と同じ
- baseFontSize: rem 計算の基準値（default: 16）

---

## Optionについて

### allowReverse

サイズが縮小方向になる指定を許可します。

```typescript

rClampPx(24, 16, 375, 1440, { allowReverse: true });

```

デフォルトでは minSize < maxSize を強制します。

---

### precision

出力値の小数点以下桁数を指定します

```typescript

rClampPx(16, 24, 375, 1440, { precision: 2 });


```

デフォルトの設定は3です。

---

### baseFontSize（rClampRem 系のみ）

px → rem 変換時の基準フォントサイズです。

```typescript

rClampRem(16, 24, 375, 1440, {
  baseFontSize: 16,
});

```

デフォルトの設定は16です。

---


## エラーについて

このライブラリは **不正な入力を黙って補正しません。**

以下のような場合、Error を throw します。

- 数値として解釈できない値

- Infinity / NaN

- viewport 差分が不正

- reverse 指定が許可されていない状態での逆転指定

---

## Design Policy

- 数値計算と CSS 表現を分離

- 暗黙のデフォルトを極力排除

- 破綻しにくい API を優先

通常は**公開 API（css レイヤー）**の利用を推奨します。

---

## ライセンス

MIT

---

## 補足（重要）

- 内部には raw / utils レイヤー が存在しますが、<br>
これは内部実装向けであり、公開 API ではありません。

- README に記載された使用例はテストで検証されています。

- 例外として、emの性質上pxToEmとemToPxはデフォルト値を持ちません

---

## お問い合わせ

Issue や Pull Request は歓迎します。
