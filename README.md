# responsive-size-js

[![npm version](https://badge.fury.io/js/responsive-size-js.svg)](https://badge.fury.io/js/responsive-size-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/responsive-size-js)

Responsive size calculation utilities for CSS.<br>
Provides safe generation of CSS-ready strings such as clamp(), unit conversion (px/rem/em/pt), and fluid typography helpers.


CSS で利用できるレスポンシブなサイズ計算を、<br>
JavaScript / TypeScript から**安全に生成するためのユーティリティライブラリ**です。

`clamp()` を用いた可変サイズ指定や、
px / rem / em / pt などの単位変換を、CSS でそのまま使える文字列として提供します。

本ライブラリの公開 API（css レイヤー）は、**必ず単位付きの CSS 文字列（string）を返します。数値は返しません。**

---

## クイックスタート

This library is written in TypeScript and provides type definitions out of the box.

### Responsive clamp (px)

```typescript
import { rClampPx } from 'responsive-size-js';

const fontSize = rClampPx(16, 24, 375, 1440);
// → CSS で使用可能な clamp() 文字列(string)を返します

```

---

### Responsive clamp (rem)

```typescript
import { rClampRem } from 'responsive-size-js';

const fontSize = rClampRem(16, 24, 375, 1440, {
  baseFontSize: 16,
});
// → rem + vw を用いた clamp() 文字列(string)を返します

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

- minViewportDiff (Advanced)

---

### rClampRem

px ベースの値を rem に正規化し、CSS で利用可能な `clamp()` 形式の文字列を返します。

options:

- allowReverse

- precision

- baseFontSize

- minViewportDiff (Advanced)

---

## Optionについて

これらのオプションは、対応する API に対してのみ有効です。

※ options を指定する場合、minViewport / maxViewport を含む<br>
すべての前段引数を明示的に指定する必要があります。


### Common Options

#### allowReverse

- Type: boolean
- Default: false
- Applies to: rClampPx, rClampRem

サイズが縮小方向になる指定を許可します。

```typescript

rClampPx(24, 16, 375, 1440, { allowReverse: true });

```

デフォルトでは minSize < maxSize を強制します。

---

#### precision

- Type: number
- Default: 3
- Applies to: rClampPx, rClampRem

CSS 出力に含まれる数値表現の小数点以下桁数を指定します

```typescript

rClampPx(16, 24, 375, 1440, { precision: 2 });


```

---

### rClampRem Only

#### baseFontSize

- Type: number
- Default: 16
- Applies to: rClampRem

px → rem 変換時の基準フォントサイズです。

```typescript

rClampRem(16, 24, 375, 1440, {
  baseFontSize: 16,
});

```

デフォルトの設定は16です。

---

## Advanced Options

### minViewportDiff

- Type: number

- Default: 1

- Applies to: rClampPx, rClampRem

**Description**

`minViewport` と `maxViewport` の差分に対する最小許容値を指定します。
指定されたビューポート幅の差がこの値未満の場合、エラーがスローされます。

これは、ビューポート範囲が極端に狭い場合に以下の問題が発生するのを防ぐための安全装置です。

- vw 係数（傾き）が極端な値になる

- 意図しない急激なスケーリングが発生する

- 設計ミスを静かに通してしまう

```typescript

rClampPx(16, 24, 768, 769, {
  minViewportDiff: 10, // throws (viewport diff < 10)
});

```

通常はデフォルト値（1）のままで問題ありませんが、
より厳密な設計制約を設けたい場合に調整できます。

---

## エラーについて

このライブラリは **不正な入力を黙って補正しません。**

以下のような場合、Error を throw します。

- 数値として解釈できない値

- Infinity / NaN

- viewport 差分が不正（minViewport >= maxViewport）

- viewport 差分が minViewportDiff 未満

- reverse 指定が許可されていない状態での逆転指定

---

## Design Policy

- 数値計算と CSS 表現を分離

- 暗黙のデフォルトを極力排除

- 破綻しにくい API を優先

通常は**公開 API**（css レイヤー）の利用を推奨します<br>
（raw / utils レイヤーは内部実装向けです）。

rClamp 系 API が生成する clamp() 内の **具体的な数値（vw 係数や中間値）は保証されません。**<br>
意味（レスポンシブに補間されること）と CSS としての有効性のみを保証します。

Only the functions documented in this README are considered the **Public API**.<br>
Internal modules (e.g., `raw` layer) or undocumented exports are not covered by the Breaking Change Policy.

---

## Credits

本ライブラリは、しょーごさんによって考案・公開された  
`rClamp`（SCSS関数）のアイデアに着想を得ています。

本実装では、その基本的な考え方を踏まえつつ、
TypeScript / JavaScript 向けに再設計し、

- 型安全性の追加
- 入力バリデーション
- API 契約の明確化
- テストとバージョニングポリシー

などを行っています。

参考記事：[clamp()を使ってフォントサイズはレスポンシブで自動調整せよ【ジェネレーターとSass関数の使いかたも】](https://shogo-log.com/clamp-usage/)

---

## Breaking Change Policy

このライブラリでは、**公開 API**（css レイヤー）については、
既存の使用例が突然壊れるような変更を原則として行いません。

以下に該当する変更は **Breaking Change** と見なされます。

- 同一の引数に対して、異なる意味・異なる結果を返す変更
- デフォルト挙動の変更
- 公開 API において、これまで通っていた入力がエラーになる変更

これらを含む変更を行う場合は、
**メジャーバージョンの更新**としてリリースします。

一方、以下は Breaking Change とは見なしません。

- 新しいオプションの追加（既存挙動に影響しない場合）
- 出力される数値表現の微調整（意味が変わらない範囲）

README に記載された使用例はテストで検証されており、
将来のバージョンでも継続して動作することを目指しています。


---

## ライセンス

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 補足（重要）

- 例外として、emの性質上pxToEmとemToPxはデフォルト値を持ちません
- emはコンテキスト依存の単位であり、暗黙の基準値を持たせると誤用を助長するためです。

---

## viewport / DPI のデフォルト挙動について

本ライブラリでは、引数やオプションが省略された場合の挙動として、
一般的な Web 制作でよく用いられる値を採用しています。

- viewport 幅:
  - min: 375px
  - max: 1440px
- DPI:
  - web: 96
  - legacy (pt 換算用): 72

これらは **現在のデフォルト挙動を説明するための値**であり、
内部実装の定数や設定オブジェクトの公開を保証するものではありません。
また、これらの値に依存したロジックは、公開 API の契約には含まれません。

将来のバージョンで、内部実装や初期値が変更される可能性がありますが、
公開 API の挙動については Breaking Change Policy に基づいて管理されます。

必要に応じて、各 API の引数やオプションで明示的に指定してください。

---

## お問い合わせ

Issue や Pull Request は歓迎します。
