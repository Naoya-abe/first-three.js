import Scene from '@/components/canvas/Scene'
import SolarSystem from './_components/SolarSystem'

export default function Exercise3() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="absolute top-10 left-10 z-10 text-black pointer-events-none">
        <h1 className="text-4xl font-bold">WebGL Portfolio</h1>
        <p className="mt-2 text-lg opacity-80">Exercise03</p>
      </div>
      <Scene className="w-full h-screen">
        <SolarSystem />
      </Scene>
    </main>
  )
}
