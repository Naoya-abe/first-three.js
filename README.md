# Next.js R3F 3D Graphics Exercises

このプロジェクトは、Next.jsの**App Router**環境で、**React Three Fiber (@react-three/fiber)** を使ったインタラクティブな3Dグラフィックスを学ぶための演習用リポジトリです。

**🚀 デモサイト (Vercel):** [https://first-three-js-orcin.vercel.app/](https://first-three-js-orcin.vercel.app/)

## Getting Started

まず、開発サーバーを起動します。

```bash
npm run dev
```

### 🚀 演習の開始

ブラウザで以下のURLを開いてください。

| 演習 | 演習概要 | URL |
| :--- | :--- | :--- |
| **演習 1 (五輪)** | [`app/exercise-01/exercise1.md`](app/exercise-01/exercise1.md) | [http://localhost:3000/exercise-01](http://localhost:3000/exercise-01) |
| **演習 2 (ボール)** | [`app/exercise-02/exercise2.md`](app/exercise-02/exercise2.md) | [http://localhost:3000/exercise-02](http://localhost:3000/exercise-02) |
| **演習 3 (太陽系)** | [`app/exercise-03/exercise3.md`](app/exercise-03/exercise3.md) | [http://localhost:3000/exercise-03](http://localhost:3000/exercise-03) |

## プロジェクト構造と技術要素

このプロジェクトは、Next.jsのApp Routerのベストプラクティスに基づき、コンポーネント指向で3Dシーンを構築しています。

### 📁 フォルダ構成の原則

| フォルダ | 説明 |
| :--- | :--- |
| `app/exercise-XX/` | 各演習のページルート。`page.tsx`がエントリポイントです。 |
| `app/exercise-XX/_components/` | **演習固有のコンポーネント**（例: `<Ring />`）。ルーティング対象外とするための private folder (`_`) を利用しています。 |
| `components/canvas/` | アプリ全体で共有する3Dの基本設定（`<Scene />`など）。 |

### ✨ 使用技術

* **3D Framework**: React Three Fiber (`@react-three/fiber`)
* **3D Utility**: Drei (`@react-three/drei`) - `OrbitControls`, `Preload` などを利用
* **Frontend**: Next.js App Router (TypeScript)
* **Styling**: Tailwind CSS
* **Code Quality**: ESLint, Prettier