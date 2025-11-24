import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import OlympicRings from './_components/OlympicRings'

export default function Exercise1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-100">
      {/* --- ナビゲーション (Header) --- */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
        <Link
          href="/"
          className="bg-black/5 hover:bg-black/10 text-neutral-800 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors border border-black/5"
        >
          ← Home
        </Link>
      </div>

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

      {/* --- ナビゲーション (Footer) --- */}
      <div className="absolute bottom-6 right-6 z-20">
        <Link
          href="/exercise-02"
          className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 px-6 py-3 rounded-full font-bold transition-all"
        >
          Next
          <span className="text-sm opacity-80 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
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
