import Ring from './Ring'

const OLYMPIC_RINGS_DATA = [
  // 上の段 (左・中・右)
  { color: 'blue', position: [-2.0, 0, 0] },
  { color: 'black', position: [0, 0, 0] },
  { color: 'red', position: [2.0, 0, 0] },
  // 下の段 (左の間・右の間)
  { color: 'yellow', position: [-1.0, -1.0, 0] },
  { color: 'green', position: [1.0, -1.0, 0] },
] as const

export default function OlympicRings() {
  return (
    <group>
      {OLYMPIC_RINGS_DATA.map((item) => (
        <Ring key={item.color} color={item.color} position={item.position} />
      ))}
    </group>
  )
}
