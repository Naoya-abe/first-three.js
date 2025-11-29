import Scene from '@/components/canvas/Scene'
import OlympicRings from './_components/OlympicRings'
import OverlayNavigation from '@/components/ui/OverlayNavigation'

export default function Exercise1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-100">
      {/* --- ナビゲーション --- */}
      <OverlayNavigation next="/exercise-02" theme="light" />

      {/* --- 情報オーバーレイ (UI) --- */}
      <div className="absolute top-20 left-6 z-10 max-w-sm pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 text-neutral-800">
          <div className="mb-4">
            <p className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1">
              Exercise 01
            </p>
            <h1 className="text-3xl font-extrabold leading-tight">
              The Olympic Rings
            </h1>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
            <section>
              <h2 className="font-bold text-neutral-900 mb-1 flex items-center gap-2">
                🎯 目的: 座標感覚の養成
              </h2>
              <p>
                アニメーションやステートを使わず、
                <strong className="text-neutral-900 bg-yellow-100 px-1 rounded mx-0.5">
                  「思った通りの場所にモノを置く」
                </strong>
                という、3D開発で最も地味かつ重要な「静的な構成力」を鍛えるための演習です。
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* --- 3Dシーン --- */}
      <Scene className="w-full h-screen bg-neutral-50">
        <group position={[0, 0, 0]}>
          <OlympicRings />
        </group>
      </Scene>
    </main>
  )
}
