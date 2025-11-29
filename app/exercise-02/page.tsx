import Scene from '@/components/canvas/Scene'
import Sphere from './_components/Sphere'
import Plane from './_components/Plane'
import OverlayNavigation from '@/components/ui/OverlayNavigation'

export default function Exercise2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-100">
      {/* --- ナビゲーション --- */}
      <OverlayNavigation
        prev="/exercise-01"
        next="/exercise-03"
        theme="light"
      />

      {/* --- 情報オーバーレイ --- */}
      <div className="absolute top-20 left-6 z-10 max-w-sm pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 text-neutral-800">
          <div className="mb-4">
            <p className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1">
              Exercise 02
            </p>
            <h1 className="text-3xl font-extrabold leading-tight">
              Animation Basics
            </h1>
            <p className="text-sm text-neutral-500 mt-1 font-medium">
              永遠にバウンドするボール
            </p>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
            <section>
              <h2 className="font-bold text-neutral-900 mb-1 flex items-center gap-2">
                🌊 テーマ: useFrameと数学
              </h2>
              <p>
                R3Fのアニメーションループである
                <code className="bg-neutral-100 px-1 py-0.5 rounded text-xs font-mono mx-1">
                  useFrame
                </code>
                フックと、数学関数
                <code className="bg-neutral-100 px-1 py-0.5 rounded text-xs font-mono mx-1">
                  Math.sin
                </code>
                を連携させます。静的な配置から一歩進み、時間経過に基づいた滑らかな動きを実装します。
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* --- 3Dシーン --- */}
      <Scene className="w-full h-screen bg-neutral-50">
        <group>
          <Sphere />
          <Plane />
        </group>
      </Scene>
    </main>
  )
}
