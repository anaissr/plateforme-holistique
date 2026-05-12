import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sophrologie et anxiété : ce que la science dit vraiment | Holistia',
  description: "La sophrologie est devenue l'une des approches les plus prescrites par les médecins français pour l'anxiété. Mais qu'est-ce que la science dit vraiment — et pour qui ça fonctionne le mieux ?",
  openGraph: {
    title: 'Sophrologie et anxiété : ce que la science dit vraiment (et ce qu\'elle ne dit pas encore)',
    description: "La sophrologie est devenue l'une des approches les plus prescrites par les médecins français pour l'anxiété. Mais qu'est-ce que la science dit vraiment — et pour qui ça fonctionne le mieux ?",
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sophrologie et anxiété',
      },
    ],
  },
}

export default function ArticleSophrologie() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🧘 Sophrologie
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          Sophrologie et anxiété : ce que la science dit vraiment (et ce qu&apos;elle ne dit pas encore)
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>12 mai 2026 · 6 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=75"
          alt="Sophrologie et anxiété — méditation et bien-être"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          La sophrologie est devenue l&apos;une des approches les plus prescrites par les médecins
          français pour l&apos;anxiété. Mais qu&apos;est-ce que la science dit vraiment — et pour qui
          ça fonctionne le mieux ?
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce que la sophrologie est vraiment
        </h2>
        <p className="leading-relaxed mb-4">
          Créée dans les années 1960 par le neuropsychiatre Alfonso Caycedo, la sophrologie combine
          des techniques issues du yoga, de la phénoménologie et du training autogène. Elle agit sur
          deux leviers : la respiration et la conscience corporelle. L&apos;idée centrale : en
          apprenant à modifier consciemment son état corporel, on peut influencer son état mental.
          Ce n&apos;est pas de la magie. C&apos;est de la physiologie.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce que la recherche montre
        </h2>
        <p className="leading-relaxed mb-4">
          Les études sur la sophrologie restent limitées — la recherche sur les thérapies
          complémentaires est structurellement sous-financée. Mais les résultats disponibles sont
          encourageants : effets positifs sur l&apos;anxiété généralisée, la qualité du sommeil,
          et la gestion du stress chronique.
        </p>
        <p className="leading-relaxed mb-4">
          Point clé : les effets dépendent beaucoup de la pratique régulière. Une séance hebdomadaire
          avec 10 à 15 minutes de pratique quotidienne à domicile donne des résultats
          incomparablement meilleurs qu&apos;une séance isolée.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce que la sophrologie ne peut pas faire
        </h2>
        <p className="leading-relaxed mb-4">
          La sophrologie n&apos;est pas une psychothérapie. Elle ne traite pas les traumatismes
          profonds, les troubles dissociatifs, ni les pathologies psychiatriques sévères. Un
          sophrologue éthique vous le dira lui-même.
        </p>
        <p className="leading-relaxed mb-4">
          Posez-lui la question : <em>&laquo;&nbsp;Avec quel type de difficulté estimez-vous que vous
          n&apos;êtes pas la bonne personne ?&nbsp;&raquo;</em> La qualité de la réponse vous dira
          beaucoup.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Pour qui ça fonctionne le mieux
        </h2>
        <div className="flex flex-col gap-3 my-6">
          {[
            "L'anxiété « ordinaire » — stress professionnel, angoisses nocturnes, pression de performance",
            "Les personnes qui vivent dans leur tête et ont besoin d'outils concrets et reproductibles",
            "La préparation à des événements anxiogènes ponctuels : accouchement, examen, compétition sportive",
          ].map((cas) => (
            <div key={cas} className="flex items-start gap-3 p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-base flex-shrink-0">✓</span>
              <p className="text-sm leading-relaxed" style={{ color: '#44403c' }}>{cas}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce qu&apos;on attend vraiment d&apos;une séance
        </h2>
        <p className="leading-relaxed mb-4">
          Un bon sophrologue ne fait pas de séances identiques. Il adapte les techniques à ce que
          vous traversez. Et il vous enseigne progressivement à être votre propre sophrologue —
          l&apos;autonomie est une marque de qualité.
        </p>
        <p className="leading-relaxed mb-4">
          Méfiez-vous des praticiens qui vous rendent trop dépendant sans jamais vous transmettre
          d&apos;outils pratiques.
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Des sophrologues vérifiés, en cabinet ou en visio
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            Sur Holistia, les sophrologues référencés justifient de leur formation et de leur
            assurance professionnelle. Parce qu&apos;en matière de santé mentale, la confiance
            n&apos;est pas négociable.
          </p>
          <a
            href="/recherche"
            className="inline-block text-white text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Trouver un sophrologue →
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
            headline: "Sophrologie et anxiété : ce que la science dit vraiment (et ce qu'elle ne dit pas encore)",
            description: "La sophrologie est devenue l'une des approches les plus prescrites par les médecins français pour l'anxiété. Mais qu'est-ce que la science dit vraiment — et pour qui ça fonctionne le mieux ?",
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
            datePublished: '2026-05-12',
            dateModified: '2026-05-12',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/sophrologie-et-anxiete',
          }),
        }}
      />

    </main>
  )
}
