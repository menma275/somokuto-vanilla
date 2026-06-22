# 草木塔 / Somokuto

種田山頭火の自由律俳句集『草木塔』を縦書きで切り替え表示する、シンプルなバニラJavaScriptのウェブアプリケーション。

A simple vanilla JavaScript web application that displays free-verse haikus from Santoka Taneda's collection _Somokuto_ (草木塔) in beautiful, vertically aligned animated transitions.

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

URLのクエリパラメータ（`sec`）を設定することで、俳句が切り替わる速度をカスタマイズできる（デフォルトは5秒）。

_例:_

- 3秒間隔で切り替える: `index.html?sec=3`

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

You can customize the speed at which the haikus switch by setting the URL query parameter (`sec`) (default is 5 seconds).

_Example:_

- Switch at a 3-second interval: `index.html?sec=3`
