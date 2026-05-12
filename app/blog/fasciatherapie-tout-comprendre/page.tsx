import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La fasciathérapie : ce que c\'est vraiment | Holistia',
  description: "Les sportifs en parlent, les praticiens en médecines douces aussi. Mais qu'est-ce que la fasciathérapie vraiment — et pour quels problèmes consulter ?",
  openGraph: {
    title: 'La fasciathérapie : la pratique dont tout le monde parle sans savoir ce que c\'est vraiment',
    description: "Les sportifs en parlent, les praticiens en médecines douces aussi. Mais qu'est-ce que la fasciathérapie vraiment — et pour quels problèmes consulter ?",
    type: 'article',
    images: [
      {
        url: 'https://images.pexels.com/photos/10893346/pexels-photo-10893346.jpeg?w=1200',
        width: 1200,
        height: 630,
        alt: 'Fasciathérapie — soin des fascias',
      },
    ],
  },
}

export default function ArticleFasciatherapie() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🤲 Fasciathérapie
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          La fasciathérapie : la pratique dont tout le monde parle sans savoir ce que c&apos;est vraiment
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>12 mai 2026 · 5 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://images.pexels.com/photos/10893346/pexels-photo-10893346.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Fasciathérapie — soin du tissu conjonctif"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          Les sportifs en parlent, les praticiens en médecines douces aussi. Mais qu&apos;est-ce que
          la fasciathérapie vraiment — et pour quels problèmes consulter ?
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Les fascias : l&apos;oublié de l&apos;anatomie
        </h2>
        <p className="leading-relaxed mb-4">
          Les fascias sont des membranes de tissu conjonctif qui enveloppent, séparent et relient
          l&apos;ensemble des structures de votre corps. Imaginez un filet tridimensionnel ultra-dense
          qui court de la tête aux pieds sans interruption. Longtemps ignorés par la recherche médicale,
          on sait aujourd&apos;hui qu&apos;ils sont richement innervés, jouent un rôle dans la
          proprioception, et peuvent se trouver dans des états de tension qui impactent la mobilité
          et la douleur.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce que fait un fasciathérapeute
        </h2>
        <p className="leading-relaxed mb-4">
          La fasciathérapie est une approche manuelle douce qui vise à repérer et libérer les tensions
          dans ce tissu conjonctif. Le praticien utilise des pressions légères, des mouvements lents
          et précis. Les pressions sont si légères qu&apos;on se demande si quelque chose se passe
          vraiment — et pourtant, beaucoup de patients rapportent des sensations profondes et des
          effets durables sur leurs douleurs chroniques.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Pour quels problèmes consulter
        </h2>
        <div className="flex flex-col gap-3 my-6">
          {[
            "Douleurs chroniques résistantes aux approches classiques (lombalgies, cervicalgies, fibromyalgie)",
            "Récupération sportive après blessure ou effort intense",
            "Stress et tensions chroniques accumulées",
            "Accompagnement post-traumatique",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-base flex-shrink-0 mt-0.5">→</span>
              <p className="text-sm leading-relaxed" style={{ color: '#44403c' }}>{item}</p>
            </div>
          ))}
        </div>
        <p className="leading-relaxed mb-4">
          La fasciathérapie est particulièrement indiquée quand la douleur est diffuse, ancienne,
          et n&apos;a pas trouvé de réponse satisfaisante ailleurs.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce qu&apos;on ne sait pas encore
        </h2>
        <p className="leading-relaxed mb-4">
          La recherche sur la fasciathérapie est encore jeune. Les études cliniques rigoureuses sont
          peu nombreuses. On sait que ça fonctionne pour beaucoup de gens — les témoignages sont
          nombreux et concordants — mais la science n&apos;a pas encore pleinement documenté pourquoi.
        </p>
        <p className="leading-relaxed mb-4">
          Ce qui est certain : si vous consultez un fasciathérapeute sérieux, vous ne prenez aucun
          risque. C&apos;est une pratique douce, non-invasive.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Comment choisir son fasciathérapeute
        </h2>
        <p className="leading-relaxed mb-4">
          La fasciathérapie n&apos;est pas réglementée en France. Les formations les plus reconnues
          sont celles de l&apos;École Supérieure de Fasciathérapie et du Pôle Universitaire Européen
          de Fasciathérapie. Beaucoup de fasciathérapeutes sont des ostéopathes ou kinésithérapeutes
          qui ont complété leur formation — souvent une garantie de sérieux supplémentaire.
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Des fasciathérapeutes avec formation vérifiée
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            La fasciathérapie rejoint Holistia parce que les corps complexes méritent des regards
            complexes. Tous nos fasciathérapeutes justifient d&apos;une formation reconnue.
          </p>
          <a
            href="/recherche"
            className="inline-block text-white text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Trouver un fasciathérapeute →
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
            headline: "La fasciathérapie : la pratique dont tout le monde parle sans savoir ce que c'est vraiment",
            description: "Les sportifs en parlent, les praticiens en médecines douces aussi. Mais qu'est-ce que la fasciathérapie vraiment — et pour quels problèmes consulter ?",
            image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1200&q=80',
            datePublished: '2026-05-12',
            dateModified: '2026-05-12',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/fasciatherapie-tout-comprendre',
          }),
        }}
      />

    </main>
  )
}
