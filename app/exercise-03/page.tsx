import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import SolarSystem from './_components/SolarSystem'

export default function Exercise3() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-950 text-white">
      {/* --- ナビゲーション (Header) --- */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
        <Link
          href="/"
          className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/10"
        >
          ← Home
        </Link>
      </div>

      {/* --- 情報オーバーレイ (UI) --- */}
      <div className="absolute top-20 left-6 z-10 max-w-sm pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 text-gray-200">
          <div className="mb-4">
            <p className="text-xs font-bold tracking-wider text-purple-400 uppercase mb-1">
              Exercise 03
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white">
              The Solar System
            </h1>
            <p className="text-sm text-gray-400 mt-1 font-medium">
              階層構造と親子関係
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-gray-300">
            <section>
              <h2 className="font-bold text-white mb-1 flex items-center gap-2">
                🌌 テーマ: Grouping
              </h2>
              <p>
                3Dシーンにおける重要概念
                <strong className="text-white mx-1">
                  「親が動けば子も動く」
                </strong>
                を学びます。座標計算ではなく、透明な箱（Group）を回すことで公転を表現しています。
              </p>
            </section>

            <section>
              <h2 className="font-bold text-white mb-1 flex items-center gap-2">
                🚀 ミッション & 応用
              </h2>
              <ul className="list-disc list-inside space-y-1 ml-1 text-xs">
                <li>
                  <code className="bg-white/10 px-1 rounded font-mono">
                    &lt;group&gt;
                  </code>
                  タグによるネスト構造
                </li>
                <li>太陽・地球・月の 3階層連動アニメーション</li>
                <li>ローカル座標とワールド座標の理解</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* --- ナビゲーション (Footer) --- */}
      <div className="absolute bottom-6 w-full px-6 flex justify-between z-20 pointer-events-none">
        <Link
          href="/exercise-02"
          className="pointer-events-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-6 py-3 rounded-full font-bold transition-all border border-white/10"
        >
          <span className="text-sm opacity-60">←</span>
          Prev
        </Link>

        {/* Nextボタンはないため、右側は空欄 */}
      </div>

      {/* --- 3Dシーン描画エリア --- */}
      <Scene className="w-full h-screen bg-neutral-950">
        <SolarSystem />
      </Scene>
    </main>
  )
}
