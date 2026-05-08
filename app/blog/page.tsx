'use client'

import Nav from '@/app/components/Nav'

const ARTICLES = [
  {
    slug: 'harcelement-scolaire',
    titre: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant',
    extrait: 'Le harcèlement scolaire laisse des traces profondes — anxiété, repli sur soi, troubles du sommeil. Sophrologie, EMDR, psychomotricité : ces thérapies complémentaires offrent des outils puissants pour aider les enfants à se reconstruire.',
    categorie: 'Enfants & adolescents',
    date: '2 mai 2026',
    lecture: '6 min',
    emoji: '🎒',
  },
  {
    slug: 'burn-out',
    titre: 'Burn-out : reconnaître les signaux et se reconstruire grâce aux médecines douces',
    extrait: "Épuisement total, perte de sens, corps qui lâche — le burn-out ne s'arrête pas à la fatigue. Naturopathie, sophrologie, hypnothérapie : comment ces approches holistiques accompagnent une vraie reconstruction.",
    categorie: 'Santé mentale & travail',
    date: '8 mai 2026',
    lecture: '7 min',
    emoji: '🔥',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          ✍️ Ressources & conseils
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Le Blog Holistia
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Des articles écrits avec nos praticiens experts pour mieux comprendre les médecines douces et prendre soin de vous.
        </p>
      </section>

      {/* ARTICLES */}
      <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-6">
        {ARTICLES.map((article) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="bg-white rounded-3xl p-8 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow"
            style={{ border: '1px solid #e7e5e4', textDecoration: 'none' }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ backgroundColor: '#f5f3ff' }}
            >
              {article.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                  {article.categorie}
                </span>
                <span className="text-xs" style={{ color: '#a8a29e' }}>{article.date} · {article.lecture} de lecture</span>
              </div>
              <h2 className="text-lg font-medium mb-2 leading-snug" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                {article.titre}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>
                {article.extrait}
              </p>
              <p className="text-sm font-medium mt-4" style={{ color: '#6b21a8' }}>Lire l'article →</p>
            </div>
          </a>
        ))}
      </section>

    </main>
  )
}
