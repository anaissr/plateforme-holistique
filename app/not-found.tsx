import Nav from '@/app/components/Nav'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page introuvable | Holistia',
}

export default function NotFound() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />
      <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="text-7xl mb-6">🌿</p>
        <h1 className="text-5xl font-light mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>404</h1>
        <p className="text-xl font-light mb-2" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
          Cette page n&apos;existe pas
        </p>
        <p className="text-sm mb-10 max-w-sm" style={{ color: '#78716c' }}>
          Elle a peut-être été déplacée ou supprimée. Vous pouvez revenir à l&apos;accueil ou chercher un praticien.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl text-sm font-medium text-white"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/recherche"
            className="px-6 py-3 rounded-2xl text-sm font-medium"
            style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px solid #ede9fe' }}
          >
            Trouver un praticien
          </Link>
        </div>
      </div>
    </main>
  )
}
