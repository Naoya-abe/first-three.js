'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const AMPLITUDE = 0.5 // 振幅 (バウンドの中心からの最大の高さ)
const ANGULAR_SPEED = (2 * Math.PI) / 2 // 角速度 (動きの速さ/周期)

export default function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, _delta) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = AMPLITUDE * Math.sin(ANGULAR_SPEED * time) + 1
  })

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <sphereGeometry args={[0.5, 32, 16]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}
