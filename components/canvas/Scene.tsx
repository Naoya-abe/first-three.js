'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Scene({ children, className }: Props) {
  return (
    <div className={className}>
      <Canvas
        // カメラの初期位置設定 (fov: 視野角, position: [x, y, z])
        camera={{ position: [0, 0, 15], fov: 50 }}
      >
        {/* 照明設定 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* ここにBoxなどの3Dオブジェクトが挿入されます */}
        {children}

        {/* マウス操作用コントロール */}
        <OrbitControls makeDefault />

        {/* アセットの事前ロード（パフォーマンス向上用） */}
        <Preload all />
      </Canvas>
    </div>
  )
}
