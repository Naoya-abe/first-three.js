'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import Sun from './Sun'
import EarthGroup from './EarthGroup'

const ANGULAR_SPEED = (2 * Math.PI) / 10 // 角速度 (動きの速さ/周期)

export default function SolarSystem() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((_state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y += ANGULAR_SPEED * delta
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Sun />
      <EarthGroup />
    </group>
  )
}
