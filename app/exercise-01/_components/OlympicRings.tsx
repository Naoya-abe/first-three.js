'use client'

import Ring from './Ring'

export default function OlympicRings() {
  const itemList: Array<{ color: string; position: [number, number, number] }> =
    [
      // 上の段 (左・中・右)
      { color: 'blue', position: [-2.0, 0, 0] },
      { color: 'black', position: [0, 0, 0] },
      { color: 'red', position: [2.0, 0, 0] },

      // 下の段 (左の間・右の間)
      // X座標は上の段の中間値 (1.8の半分 = 0.9) にする
      { color: 'yellow', position: [-1.0, -0.8, 0] },
      { color: 'green', position: [1.0, -0.8, 0] },
    ]

  return itemList.map((item) => (
    <Ring key={item.color} color={item.color} position={item.position} />
  ))
}
