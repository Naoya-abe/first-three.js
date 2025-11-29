'use client'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 5000

const generatePositions = (count: number) => {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }
  return positions
}

export default function Particles() {
  const positions = useMemo(() => generatePositions(COUNT), [])
  const pointsRef = useRef<THREE.Points>(null!)

  useFrame(() => {
    if (!pointsRef.current) return

    // 1. ref経由で position 属性にアクセス
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
