# responsive-size-js

CSS で利用できるレスポンシブなサイズ計算を、
JavaScript / TypeScript から**安全に生成するためのユーティリティライブラリ**です。

`clamp()` を用いた可変サイズ指定や、
px / rem / em / pt などの単位変換を、CSS でそのまま使える文字列として提供します。

---

## クイックスタート

### Responsive clamp (px)

```typescript
import { rClampPx } from 'responsive-size-js';

const fontSize = rClampPx(16, 24, 375, 1440);
// → CSS で使用可能な clamp() 文字列を返します

```

---

### Responsive clamp (rem)

```typescript
import { rClampRem } from 'responsive-size-js';

const fontSize = rClampRem(16, 24, 375, 1440, {
  baseFontSize: 16,
});
// → rem + vw を用いた clamp() 文字列を返します

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

## 特徴

- CSS でそのまま使える文字列を返す API
- `clamp()` を使ったレスポンシブサイズ生成
- px 基準の思考のまま rem / em / vw に変換
- 計算ロジックと CSS 出力を分離した設計


## インストール

```bash
npm install responsive-size-js
```

## API

### rClampPx

px ベースの値を元に、CSS で利用可能な `clamp()` 形式の文字列を返します。

options:
- allowReverse
- precision

---

### rClampRem

px ベースの値を rem に正規化し、CSS で利用可能な `clamp()` 形式の文字列を返します。

options:
- allowReverse
- precision
- baseFontSize

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

CSS 出力に含まれる数値表現の小数点以下桁数を指定します

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

通常は**公開 API（css レイヤー）**の利用を推奨します<br>
（raw / utils レイヤーは内部実装向けです）。

---

## Breaking Change Policy

このライブラリでは、**公開 API（css レイヤー）**については、
既存の使用例が突然壊れるような変更を原則として行いません。

以下に該当する変更は **Breaking Change** と見なされます。

- 同一の引数に対して、異なる意味・異なる結果を返す変更
- デフォルト挙動の変更
- 公開 API において、これまで通っていた入力がエラーになる変更

これらを含む変更を行う場合は、
**メジャーバージョンの更新**としてリリースします。

一方、以下は Breaking Change とは見なしません。

- 内部実装（raw / utils レイヤー）の変更
- 新しいオプションの追加（既存挙動に影響しない場合）
- 出力される数値表現の微調整（意味が変わらない範囲）

README に記載された使用例はテストで検証されており、
将来のバージョンでも継続して動作することを目指しています。


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
