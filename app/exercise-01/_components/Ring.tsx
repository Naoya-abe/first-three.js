import { memo } from 'react'

type RingColor = 'blue' | 'black' | 'red' | 'yellow' | 'green'
type Vector3 = readonly [number, number, number]

interface Props {
  color: RingColor
  position: Vector3
}

function Ring(props: Props) {
  const { color, position } = props

  return (
    <mesh position={position}>
      <torusGeometry args={[0.8, 0.1, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default memo(Ring)
