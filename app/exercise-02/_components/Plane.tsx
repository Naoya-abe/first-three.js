import { memo } from 'react'

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[2, 1]} />
      <meshStandardMaterial color="blue" side={2} />
    </mesh>
  )
}

export default memo(Plane)
