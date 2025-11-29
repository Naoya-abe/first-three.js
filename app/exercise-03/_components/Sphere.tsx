'use client'

import { Html, useCursor } from '@react-three/drei'
import { ThreeEvent } from '@react-three/fiber'
import { useState } from 'react'

type Vector3 = readonly [number, number, number]

interface Props {
  color: string
  radius: number
  position: Vector3
  name: string
}

export default function Sphere(props: Props) {
  const { color, radius, position, name } = props
  const [hovered, setHover] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)

  useCursor(hovered)

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    setClicked((prev) => !prev)
  }

  return (
    <mesh
      position={position}
      onClick={handleClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[radius, 32, 16]} />
      <meshStandardMaterial color={hovered ? 'red' : color} />

      {clicked && (
        <Html position={[0, radius + 0.5, 0]} center distanceFactor={10}>
          <div className="bg-white px-2 py-1 rounded text-xs font-bold text-black opacity-80 pointer-events-none">
            {name}
          </div>
        </Html>
      )}
    </mesh>
  )
}
