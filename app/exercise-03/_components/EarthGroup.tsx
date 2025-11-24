'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import Earth from './Earth'
import Moon from './Moon'
import { useFrame } from '@react-three/fiber'

const ANGULAR_SPEED = (2 * Math.PI) / 4 // 角速度 (動きの速さ/周期)

export default function EarthGroup() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((_state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y += ANGULAR_SPEED * delta
  })

  return (
    <group ref={groupRef} position={[3, 0, 0]}>
      <Earth />
      <Moon />
    </group>
  )
}
