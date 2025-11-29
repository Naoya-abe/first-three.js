'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Box(props: any) {
  // Three.jsのMesh型を明示
  const meshRef = useRef<THREE.Mesh>(null!)

  // インタラクション用のState
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // 毎フレームのアニメーション
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 1 * delta
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
