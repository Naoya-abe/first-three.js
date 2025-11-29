// components/ui/OverlayNavigation.tsx
import { Route } from 'next'
import Link from 'next/link'

type Props = {
  prev?: Route
  next?: Route
  theme?: 'light' | 'dark'
}

export default function OverlayNavigation({
  prev,
  next,
  theme = 'light',
}: Props) {
  const isLight = theme === 'light'

  // テーマごとのスタイル定義
  const styles = {
    home: isLight
      ? 'bg-black/5 hover:bg-black/10 text-neutral-800 border-black/5'
      : 'bg-white/10 hover:bg-white/20 text-white border-white/10',

    prev: isLight
      ? 'bg-white/80 hover:bg-white text-neutral-700 border-neutral-200'
      : 'bg-white/10 hover:bg-white/20 text-white border-white/10',

    // LightモードのNextボタンだけ「青色」で強調する仕様を再現
    next: isLight
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'
      : 'bg-white/10 hover:bg-white/20 text-white border-white/10',
  }

  const baseBtn =
    'backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium transition-all border shadow-sm'
  const navBtn =
    'pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-lg border'

  return (
    <>
      {/* --- Header (Home Link) --- */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-4">
        <Link href="/" className={`${baseBtn} ${styles.home}`}>
          ← Home
        </Link>
      </div>

      {/* --- Footer (Prev / Next) --- */}
      <div className="absolute bottom-6 w-full px-6 flex justify-between z-20 pointer-events-none">
        {/* Prev Button */}
        <div>
          {prev && (
            <Link href={prev} className={`${navBtn} ${styles.prev}`}>
              <span className="text-sm opacity-60">←</span>
              Prev
            </Link>
          )}
        </div>

        {/* Next Button */}
        <div>
          {next && (
            <Link
              href={next}
              className={`${navBtn} ${styles.next} ${!isLight ? 'border-white/10' : 'border-transparent'}`}
            >
              Next
              <span className="text-sm opacity-80">→</span>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
