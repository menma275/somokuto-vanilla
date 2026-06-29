# 草木塔 / Somokuto

種田山頭火の自由律俳句集『草木塔』を縦書きで切り替え表示する、シンプルなバニラJavaScriptのウェブアプリケーション。

デプロイ先: https://menma275.github.io/somokuto-vanilla/

A simple vanilla JavaScript web application that displays free-verse haikus from Santoka Taneda's collection _Somokuto_ (草木塔) in beautiful, vertically aligned animated transitions.

Demo: https://menma275.github.io/somokuto-vanilla/

---

### ファイル構成

```text
.
├── index.html   # メインのHTML構造と日英メタ情報
├── style.css    # 縦書きレイアウトとアニメーションのスタイル
├── script.js    # シャッフルロジックと時間制御の制御スクリプト
├── data.js      # 山頭火の俳句データ（配列形式）
└── README.md    # プロジェクト説明書（本作）
```

### 使い方

`index.html` をブラウザで直接開くか、ローカルのWebサーバーで起動する。

#### 表示速度（インターバル）の変更

デフォルト（クエリパラメータを指定しない場合）では自動遷移せず、ランダムに選ばれた最初の1句が表示され続けます。
URLのクエリパラメータ（`sec`）を指定することで、自動切り替えを有効にし、その表示速度をカスタマイズできます。

_例:_

- 3秒間隔で切り替える: `index.html?sec=3`

#### 表示開始位置の指定

URLのクエリパラメータに `index` または `idx` を指定することで、シャッフル後の配列における指定した位置の俳句から表示を開始できます。
配列の長さ以上の数値を指定した場合は、配列サイズでの剰余（`%`）を用いて範囲内に丸められた位置の俳句が表示されます。

_例:_

- シャッフル後の配列の3番目（4つ目）の俳句を表示する: `index.html?index=3`
- 指定インデックスから開始して3秒間隔で切り替える: `index.html?index=3&sec=3`

#### カラーテーマの反転

URLのクエリパラメータに `theme=reverse` または `invert` などを指定することで、カラーテーマを反転させ、白背景に黒文字で表示できます。
指定しない場合のデフォルトは、黒背景に白文字（現状のスタイル）です。

_例:_

- カラーテーマを反転させて表示する: `index.html?theme=reverse` または `index.html?invert`

#### スクリーンショットモード

URLのクエリパラメータに `screenshot` を指定することで、フェードインやぼかしなどのトランジションアニメーションを完全に無効化し、俳句を最初から即座に表示させることができます。

_例:_

- アニメーションを無効化して表示する: `index.html?screenshot`

---

## English

### Project Structure

```text
.
├── index.html   # Main HTML structure with bilingual metadata
├── style.css    # Styles for vertical layout and transition animations
├── script.js    # Control script for shuffle logic and timing
├── data.js      # Haiku dataset of Santoka Taneda (array format)
└── README.md    # Project documentation (this file)
```

### How to Use

Open `index.html` directly in your browser, or launch it with a local web server.

#### Changing the Display Speed (Interval)

By default (without query parameters), automatic transitions are disabled, and the first randomly selected haiku will remain on screen.
You can enable automatic switching and customize the duration by setting the URL query parameter (`sec`).

_Example:_

- Switch at a 3-second interval: `index.html?sec=3`

#### Specifying the Starting Index

You can set the starting position within the shuffled haiku list by adding the `index` or `idx` URL query parameter.
If the specified index is greater than or equal to the array length, it will automatically wrap around using the modulo (`%`) operator.

_Example:_

- Start from the 3rd index (4th item) of the shuffled list: `index.html?index=3`
- Start from the 3rd index and switch at a 3-second interval: `index.html?index=3&sec=3`

#### Inverting the Color Theme

You can invert the color theme (white background with black text) by specifying `theme=reverse` or `invert` as a URL query parameter.
By default, without these parameters, the theme remains a black background with white text.

_Example:_

- Display with inverted colors: `index.html?theme=reverse` or `index.html?invert`

#### Screenshot Mode

You can disable all transition animations (such as fade-in and blur effects) and show the haiku immediately by specifying `screenshot` as a URL query parameter.

_Example:_

- Display with animations disabled: `index.html?screenshot`

