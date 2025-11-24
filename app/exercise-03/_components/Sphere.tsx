'use client'

type Vector3 = readonly [number, number, number]

interface Props {
  color: string
  radius: number
  position: Vector3
}

export default function Sphere(props: Props) {
  const { color, radius, position } = props
  return (
    <mesh position={position}>
      <sphereGeometry args={[radius, 32, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
