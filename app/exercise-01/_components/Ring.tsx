'use client'

import { useRef } from 'react'
import * as THREE from 'three'

interface Props {
  color: string
  position: [number, number, number]
}

export default function Ring(props: Props) {
  const { color, position } = props
  const meshRef = useRef<THREE.Mesh>(null!)

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.8, 0.1, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
