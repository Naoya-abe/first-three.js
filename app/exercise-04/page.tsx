'use client'

import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// --------------------------------------------------------
// 3D Component: Particles (Exercise4のロジック)
// --------------------------------------------------------
const COUNT = 5000

const generatePositions = (count: number) => {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }
  return positions
}

function Particles() {
  const positions = useMemo(() => generatePositions(COUNT), [])
  const pointsRef = useRef<THREE.Points>(null!)

  useFrame(() => {
    if (!pointsRef.current) return

    // 1. ref経由で position 属性にアクセス
    // pointsRef.current.geometry.attributes.position.array でもアクセス可能
    const positions = pointsRef.current.geometry.attributes.position.array

    // 2. 全ての点をループ処理 (直接配列を書き換える)
    for (let i = 0; i < COUNT; i++) {
      const positionIndex = i * 3 // x, y, z の先頭インデックス

      // Y座標を少し減らす（落下）
      positions[positionIndex + 1] -= 0.05

      // 画面外（下）に出たら上に戻す
      if (positions[positionIndex + 1] < -5) {
        positions[positionIndex + 1] = 5
        positions[positionIndex] = (Math.random() - 0.5) * 10 // X座標もリセット
        positions[positionIndex + 2] = (Math.random() - 0.5) * 10 // Z座標もリセット
      }
    }

    // 3. 重要: Three.jsに「データが変わった」と伝えるフラグ
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00ffff" sizeAttenuation={true} />
    </points>
  )
}

// --------------------------------------------------------
// Page Component: Exercise4 (UIレイアウト)
// --------------------------------------------------------
export default function Exercise4() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-950 text-white">
      {/* --- ナビゲーション (Header) --- */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
        <Link
          href="/"
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10"
        >
          ← Home
        </Link>
      </div>

      {/* --- 情報オーバーレイ (UI) --- */}
      <div className="absolute top-20 left-6 z-10 max-w-sm pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 text-gray-200">
          <div className="mb-4">
            <p className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-1">
              Exercise 04
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white">
              Star Field & Matrix
            </h1>
            <p className="text-sm text-gray-400 mt-1 font-medium">
              データ指向な描画 (Points)
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-gray-300">
            <section>
              <h2 className="font-bold text-white mb-1 flex items-center gap-2">
                🌌 テーマ: BufferGeometry
              </h2>
              <p>
                Mesh（箱や球）を使わず、
                <strong className="text-white mx-1">
                  「座標データ（配列）」
                </strong>
                を直接GPUに渡すことで、数千〜数万の点を高速に描画する技術を学びます。LiDAR点群表示の基礎となります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-white mb-1 flex items-center gap-2">
                🚀 ミッション & 応用
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-1 text-xs">
                <li>
                  <code className="bg-white/10 px-1 rounded font-mono">
                    Float32Array
                  </code>
                  によるバイナリデータ作成
                </li>
                <li>
                  <code className="bg-white/10 px-1 rounded font-mono">
                    &lt;points&gt;
                  </code>
                  によるパーティクル描画
                </li>
                <li>GPUメモリへの直接転送と最適化</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* --- ナビゲーション (Footer) --- */}
      <div className="absolute bottom-6 w-full px-6 flex justify-between z-20 pointer-events-none">
        <Link
          href="/exercise-03"
          className="pointer-events-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-6 py-3 rounded-full font-bold transition-all border border-white/10"
        >
          <span className="text-sm opacity-60">←</span>
          Prev
        </Link>

        {/* 次の演習ができたらここにNextを追加 */}
        {/* <Link
          href="/exercise-05"
          className="pointer-events-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-6 py-3 rounded-full font-bold transition-all border border-white/10"
        >
          Next
          <span className="text-sm opacity-60">→</span>
        </Link>
        */}
      </div>

      {/* --- 3Dシーン描画エリア --- */}
      <Scene className="w-full h-screen bg-neutral-950">
        <Particles />
      </Scene>
    </main>
  )
}
