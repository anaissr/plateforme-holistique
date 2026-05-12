import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comment choisir son naturopathe — et éviter les pièges | Holistia',
  description: "Avec la prolifération des praticiens aux formations très disparates, choisir son naturopathe n'est pas anodin. Voici ce que vous devez vraiment savoir avant de prendre rendez-vous.",
  openGraph: {
    title: 'Comment choisir son naturopathe — et éviter les pièges',
    description: "Avec la prolifération des praticiens aux formations très disparates, choisir son naturopathe n'est pas anodin. Voici ce que vous devez vraiment savoir avant de prendre rendez-vous.",
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Comment choisir son naturopathe',
      },
    ],
  },
}

export default function ArticleNaturopathe() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🌿 Naturopathie
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          Comment choisir son naturopathe — et éviter les pièges
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>12 mai 2026 · 5 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=75"
          alt="Choisir son naturopathe — plantes et bien-être naturel"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          Avec la prolifération des praticiens aux formations très disparates, choisir son naturopathe
          n&apos;est pas anodin. Voici ce que vous devez vraiment savoir avant de prendre rendez-vous.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La naturopathie, ce n&apos;est pas la même chose que les compléments alimentaires
        </h2>
        <p className="leading-relaxed mb-4">
          Un naturopathe sérieux ne va pas vous prescrire une liste de suppléments à acheter. Il va
          d&apos;abord vous observer — votre mode de vie, votre alimentation, votre niveau de stress,
          votre sommeil, votre histoire. Ce qui devrait vous alerter dès la première séance : un
          praticien qui arrive avec des réponses avant même d&apos;avoir posé des questions.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La formation : ce qui fait vraiment la différence
        </h2>
        <p className="leading-relaxed mb-4">
          En France, la naturopathie n&apos;est pas réglementée — n&apos;importe qui peut s&apos;en
          revendiquer. Les formations sérieuses durent entre 2 et 4 ans. Les écoles reconnues par la
          Fédération Française de Naturopathie (FÉNA) ou le Syndicat des Professionnels de la
          Naturopathie (SPN) sont une première garantie. Demandez directement où votre praticien a
          été formé — un professionnel sérieux répondra sans hésiter.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce que la naturopathie peut — et ne peut pas — faire
        </h2>
        <p className="leading-relaxed mb-4">
          La naturopathie n&apos;est pas une médecine de l&apos;urgence. Elle excelle dans
          l&apos;accompagnement des pathologies fonctionnelles : fatigue chronique, troubles digestifs,
          stress, troubles du sommeil, problèmes de peau. Sa vraie force : le temps. Là où une
          consultation médicale dure 15 minutes, une première consultation naturopathique dure souvent
          1h30 à 2h.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Les signaux qui doivent vous alerter
        </h2>
        <div className="flex flex-col gap-3 my-6">
          {[
            { signal: "Un praticien qui vous demande d'arrêter vos traitements médicaux — c'est une ligne rouge.", niveau: 'rouge' },
            { signal: "Des promesses de guérison — méfiez-vous.", niveau: 'rouge' },
            { signal: "L'absence de compte-rendu ou de suivi — un praticien sérieux documente.", niveau: 'orange' },
            { signal: "Des tarifs élevés pour des produits maison — vigilance.", niveau: 'orange' },
          ].map((item) => (
            <div key={item.signal} className="flex items-start gap-3 p-4 rounded-2xl" style={{ backgroundColor: item.niveau === 'rouge' ? '#fef2f2' : '#fff7ed', border: `1px solid ${item.niveau === 'rouge' ? '#fecaca' : '#fed7aa'}` }}>
              <span className="text-base flex-shrink-0">{item.niveau === 'rouge' ? '🚩' : '⚠️'}</span>
              <p className="text-sm leading-relaxed" style={{ color: '#44403c' }}>{item.signal}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Comment trouver le bon
        </h2>
        <p className="leading-relaxed mb-4">
          La meilleure recommandation reste le bouche-à-oreille. Vérifiez qu&apos;il est référencé
          auprès d&apos;une fédération professionnelle. Lisez les avis détaillés, pas seulement les
          étoiles. Et accordez une importance particulière au premier contact : est-ce que vous vous
          sentez écouté ?
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Des naturopathes vérifiés, près de chez vous
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            Sur Holistia, tous les naturopathes référencés ont été vérifiés — formation, assurance RC
            pro, et parcours. Parce que votre confiance mérite mieux que l&apos;aléatoire.
          </p>
          <a
            href="/recherche"
            className="inline-block text-white text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Trouver un naturopathe →
          </a>
        </div>

      </article>

      {/* RETOUR BLOG */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <a href="/blog" className="text-sm" style={{ color: '#78716c' }}>← Retour au blog</a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Comment choisir son naturopathe — et éviter les pièges',
            description: "Avec la prolifération des praticiens aux formations très disparates, choisir son naturopathe n'est pas anodin. Voici ce que vous devez vraiment savoir avant de prendre rendez-vous.",
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
            datePublished: '2026-05-12',
            dateModified: '2026-05-12',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/comment-choisir-son-naturopathe',
          }),
        }}
      />

    </main>
  )
}
