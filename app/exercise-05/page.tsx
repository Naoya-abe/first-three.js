import Scene from "@/components/canvas/Scene"
import OverlayNavigation from "@/components/ui/OverlayNavigation"

export default function Exercise5() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative bg-neutral-950 text-white">
            {/* --- ナビゲーション --- */}
          <OverlayNavigation prev="/exercise-04" theme="dark" />
          <Scene><></></Scene>
        </main>
        )
}
