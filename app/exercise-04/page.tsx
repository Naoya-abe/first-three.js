import Scene from '@/components/canvas/Scene'
import Particles from './_components/Particles'
import OverlayNavigation from '@/components/ui/OverlayNavigation'

export default function Exercise4() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-950 text-white">
      {/* --- ナビゲーション --- */}
      <OverlayNavigation prev="/exercise-03" next='/exercise-04' theme="dark" />
      {/* --- 情報オーバーレイ (UI) --- */}
      <div className="absolute top-20 left-6 z-10 max-w-sm pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 text-gray-200">
          <div className="mb-4">
            <p className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-1">
              Exercise 04
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white">
              Star Field & Matrix
            </h1>
            <p className="text-sm text-gray-400 mt-1 font-medium">
              データ指向な描画 (Points)
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-gray-300">
            <section>
              <h2 className="font-bold text-white mb-1 flex items-center gap-2">
                🌌 テーマ: BufferGeometry
              </h2>
              <p>
                Mesh（箱や球）を使わず、
                <strong className="text-white mx-1">
                  「座標データ（配列）」
                </strong>
                を直接GPUに渡すことで、数千〜数万の点を高速に描画する技術を学びます。LiDAR点群表示の基礎となります。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-white mb-1 flex items-center gap-2">
                🚀 ミッション & 応用
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-1 text-xs">
                <li>
                  <code className="bg-white/10 px-1 rounded font-mono">
                    Float32Array
                  </code>
                  によるバイナリデータ作成
                </li>
                <li>
                  <code className="bg-white/10 px-1 rounded font-mono">
                    &lt;points&gt;
                  </code>
                  によるパーティクル描画
                </li>
                <li>GPUメモリへの直接転送と最適化</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      {/* --- 3Dシーン描画エリア --- */}
      <Scene className="w-full h-screen bg-neutral-950">
        <Particles />
      </Scene>
    </main>
  )
}
