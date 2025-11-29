# Exercise 4: 「星の海とデジタルの雨」

## テーマ: データ指向な描画（Points & BufferGeometry）

これまでの「形（Mesh）」を組み合わせるアプローチから卒業し、**「大量のデータ（座標配列）」** を直接GPUに流し込む手法を学びます。これは数百万点のLiDARデータを扱うための入り口となる重要なステップです。

### 📋 ミッション: 「満天の星空を作れ」

* **`THREE.Mesh`（球体など）は使用禁止です。**
* **`THREE.Points`** と **`THREE.BufferGeometry`** を使い、5,000個以上の星（点）をランダムな位置に配置してください。
* 宇宙空間全体（Pointsオブジェクト）をゆっくり回転させ、星々が動いているように見せてください。

#### 構造のヒント: 「配列」で考える

Meshの世界では「箱」や「球」を扱いましたが、Pointsの世界では「座標のリスト (`Float32Array`)」を扱います。

```typescript
// ジオメトリの作成（形ではなくデータの容器）
const geometry = new THREE.BufferGeometry();

// 座標データの作成 (星の数 x 3次元)
const count = 5000;
const positions = new Float32Array(count * 3); // [x1, y1, z1, x2, y2, z2, ...]

// ランダムに座標を埋める
for(let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10; // -5 ~ +5 の範囲
}

// ジオメトリに属性として登録
geometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3) // 1頂点につき3要素(x,y,z)を使う
);

// マテリアルは PointsMaterial を使う
const material = new THREE.PointsMaterial({
  size: 0.05,
  color: 0x00ffff,
});
```

### 鍛えられるスキル
- `BufferGeometry` と `Float32Array` の理解（データ指向プログラミング）。
- GPUメモリへの直接的なデータ転送の概念。
- 数千個のオブジェクトを1回の描画（ドローコール）で処理する高速化技術。

### 🚀 応用ミッション: 「降り注ぐデジタルの雨」
静止画の星空から一歩進んで、**「全ての点が毎フレーム動く」** アニメーション（マトリックス・レインのような表現）を実装してください。

#### 📋 追加ミッション
- 星空を「雨」に見立て、全ての点を毎フレーム下方向（Y軸マイナス）に移動させてください。
- **リサイクル処理:** 画面の下端を通り過ぎた点は、画面の上端に戻し、X/Z座標をランダムに再設定して再利用してください（無限に降らせるため）。

#### 💡 実装のヒント: `needsUpdate` フラグ
ReactのState更新ではなく、**配列の値を直接書き換えてGPUに通知する** のがポイントです。これがLiDARのリアルタイム描画と同じロジックになります。

```typescript
useFrame(() => {
  // 1. ジオメトリから位置データの配列を取得
  const positions = particlesRef.current.geometry.attributes.position.array;

  // 2. 全ての点をループ処理
  for(let i = 0; i < count; i++) {
    const i3 = i * 3; // x, y, z の先頭インデックス

    // Y座標を少し減らす（落下）
    positions[i3 + 1] -= 0.05;

    // 画面外（下）に出たら上に戻す
    if (positions[i3 + 1] < -5) {
      positions[i3 + 1] = 5;
      positions[i3] = (Math.random() - 0.5) * 10;     // X座標もリセット
      positions[i3 + 2] = (Math.random() - 0.5) * 10; // Z座標もリセット
    }
  }

  // 3. 重要: Three.jsに「データが変わった」と伝えるフラグ
  particlesRef.current.geometry.attributes.position.needsUpdate = true;
});
```

#### 鍛えられるスキル
- 毎フレーム数千個のデータをCPUで計算し、GPUに転送するコスト感覚。
- `needsUpdate` フラグによるGPUメモリ同期の手順。
- パーティクルシステムのライフサイクル管理（発生→移動→消滅/再生）。