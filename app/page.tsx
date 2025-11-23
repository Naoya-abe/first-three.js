import Scene from '@/components/canvas/Scene'
import { Box } from '@/components/canvas/Box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="absolute top-10 left-10 z-10 text-white pointer-events-none">
        <h1 className="text-4xl font-bold">WebGL Portfolio</h1>
        <p className="mt-2 text-lg opacity-80">Next.js App Router + R3F</p>
      </div>

      {/* 3Dシーン描画エリア */}
      {/* w-full h-screen で画面いっぱいに広げます */}
      <Scene className="w-full h-screen bg-neutral-50">
        {/* Sceneの中に配置したいオブジェクトを並べる */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Scene>
    </main>
  )
}
