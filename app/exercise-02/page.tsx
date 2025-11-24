import Scene from '@/components/canvas/Scene'
import Sphere from './_components/Sphere'
import Plane from './_components/Plane'

export default function Exercise2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="absolute top-10 left-10 z-10 text-black pointer-events-none">
        <h1 className="text-4xl font-bold">WebGL Portfolio</h1>
        <p className="mt-2 text-lg opacity-80">Exercise02</p>
      </div>

      <Scene className="w-full h-screen bg-neutral-50">
        <group>
          <Sphere />
          <Plane />
        </group>
      </Scene>
    </main>
  )
}
