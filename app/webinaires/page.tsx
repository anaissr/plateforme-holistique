'use client'

import Nav from '@/app/components/Nav'

export default function Webinaires() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center relative" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🎙️ Rencontres en ligne avec nos praticiens experts
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Webinaires Holistia
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Pour mieux comprendre les médecines douces et leurs interactions, et comment elles peuvent contribuer à une meilleure santé globale.
        </p>
      </section>

      {/* PROCHAINS WEBINAIRES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-light mb-8" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
          Prochains webinaires
        </h2>
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <p className="text-4xl mb-4">📅</p>
          <p className="font-medium mb-2" style={{ color: '#1c1917' }}>Aucun webinaire programmé pour le moment</p>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Revenez bientôt — de nouveaux webinaires sont en cours de préparation.</p>
        </div>
      </section>

      {/* WEBINAIRES PASSÉS */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-light mb-8" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
          Webinaires passés
        </h2>
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <p className="text-4xl mb-4">🎙️</p>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Les replays apparaîtront ici après chaque webinaire.</p>
        </div>
      </section>

      {/* CTA PRATICIEN */}
      <section className="py-16 px-6 relative" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,0 960,60 1440,30 L1440,0 L0,0 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto text-center pt-4">
          <h2 className="text-2xl font-light mb-3" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            Vous êtes praticien ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#78716c' }}>
            Partagez votre expertise avec la communauté Holistia en animant un webinaire. Nous nous occupons de la diffusion et de la promotion.
          </p>
          <a
            href="mailto:anais202@hotmail.com?subject=Proposition de webinaire Holistia"
            className="inline-block text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Je veux proposer un webinaire
          </a>
        </div>
      </section>

    </main>
  )
}
