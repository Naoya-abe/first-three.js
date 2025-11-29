# Exercise 4: 「星の海とデジタルの雨」 (R3F Edition)

## テーマ: データ指向な描画（Points & BufferGeometry）

これまでの「形（Mesh）」を組み合わせるアプローチから卒業し、**「大量のデータ（座標配列）」** を直接GPUに流し込む手法を学びます。これは数百万点のLiDARデータを扱うための入り口となる重要なステップです。

### 📋 ミッション: 「満天の星空を作れ」

* **`THREE.Mesh`（球体など）は使用禁止です。**
* **`<points>`** と **`<bufferGeometry>`** を使い、5,000個以上の星（点）をランダムな位置に配置してください。
* 宇宙空間全体（Pointsオブジェクト）をゆっくり回転させ、星々が動いているように見せてください。

#### 構造のヒント: 「配列」と「宣言的UI」

R3Fでは `new THREE.BufferGeometry()` をする代わりに、JSXのタグとしてジオメトリを定義します。データ（座標配列）自体は計算コストが高いため、`useMemo` で作成します。

```jsx
const Particles = () => {
  // 1. データ（配列）だけを useMemo で作成
  // Reactのレンダリングサイクルから独立させるため
  const count = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3); // [x1, y1, z1, x2, y2, z2, ...]
    for(let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  return (
    <points>
      {/* 2. ジオメトリをタグとして定義 */}
      <bufferGeometry>
        {/* 3. その中に属性（Attribute）を配置 */}
        {/* attach="attributes-position" は geometry.attributes.position への代入を意味する */}
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00ffff" sizeAttenuation={true} />
    </points>
  );
};
```

#### 鍛えられるスキル
- `BufferGeometry` と `Float32Array` の理解（データ指向プログラミング）。
- R3Fにおける `attach` 属性の理解（親オブジェクトのプロパティへのマッピング）。
- 数千個のオブジェクトを1回の描画（ドローコール）で処理する高速化技術。

### 🚀 応用ミッション: 「降り注ぐデジタルの雨」
静止画の星空から一歩進んで、**「全ての点が毎フレーム動く」** アニメーション（マトリックス・レインのような表現）を実装してください。

#### 📋 追加ミッション
- 星空を「雨」に見立て、全ての点を毎フレーム下方向（Y軸マイナス）に移動させてください。
- **リサイクル処理:** 画面の下端を通り過ぎた点は、画面の上端に戻し、X/Z座標をランダムに再設定して再利用してください（無限に降らせるため）。

#### 💡 実装のヒント: `needsUpdate` フラグと `useRef`
R3Fでは `<points>` に `ref` を付けて、その中のジオメトリデータにアクセスします。

```jsx
const pointsRef = useRef();

useFrame(() => {
  if (!pointsRef.current) return;

  // 1. ref経由で position 属性にアクセス
  // pointsRef.current.geometry.attributes.position.array でもアクセス可能
  const positions = pointsRef.current.geometry.attributes.position.array;

  // 2. 全ての点をループ処理 (直接配列を書き換える)
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
  pointsRef.current.geometry.attributes.position.needsUpdate = true;
});

return (
  <points ref={pointsRef}>
    {/* ... (省略) ... */}
  </points>
)
```

#### 鍛えられるスキル
- useRef を使ったThree.jsインスタンスへの直接アクセス。
- 毎フレーム数千個のデータをCPUで計算し、GPUに転送するコスト感覚。
- パーティクルシステムのライフサイクル管理（発生→移動→消滅/再生）。