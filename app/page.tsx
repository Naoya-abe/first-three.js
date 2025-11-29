import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import { Box } from '@/components/canvas/Box'
import { Route } from 'next'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <Scene className="w-full h-full">
          <Box position={[-2.5, 0, 0]} />
          <Box position={[2.5, 0, 0]} />
        </Scene>
      </div>

      <div className="z-10 w-full max-w-3xl p-6 md:p-12 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl mx-4">
        <section className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            WebGL Portfolio
          </h1>

          <div className="space-y-4 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p>
              このポートフォリオはモダンなWebフロントエンド技術である
              <strong className="text-white mx-1">Next.js (App Router)</strong>
              と<strong className="text-white mx-1">React Three Fiber</strong>
              の実践的な学習記録です。
            </p>
          </div>
        </section>

        <nav className="grid gap-4 md:grid-cols-1">
          <ExerciseLink
            href="/exercise-01"
            title="Exercise 01: The Olympic Rings"
            description="基本図形（Torus）の描画と、絶対配置によるレイアウト構築の練習。"
          />
          <ExerciseLink
            href="/exercise-02"
            title="Exercise 02: Animation Basics"
            description="useFrameフックを使用したアニメーションと、数式に基づいた動きの実装。"
          />
          <ExerciseLink
            href="/exercise-03"
            title="Exercise 03: The Solar System"
            description="コンポーネントの階層化、共通化、そして親子関係（Group）を利用した複合アニメーション。"
          />
        </nav>

        <footer className="mt-12 text-center text-xs text-gray-500">
          Created with Next.js 15 & R3F
        </footer>
      </div>
    </main>
  )
}

// --- サブコンポーネント: リンクカード ---
function ExerciseLink({
  href,
  title,
  description,
}: {
  href: Route
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group block w-full p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300">
            {description}
          </p>
        </div>
        <div className="ml-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}
