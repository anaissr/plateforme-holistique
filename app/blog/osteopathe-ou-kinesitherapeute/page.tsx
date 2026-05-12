import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ostéopathe ou kinésithérapeute : lequel consulter en premier ? | Holistia',
  description: "Ils traitent souvent les mêmes symptômes, mais leur approche est fondamentalement différente. Voici comment choisir — et pourquoi la vraie réponse dépend de ce que vous traversez maintenant.",
  openGraph: {
    title: 'Ostéopathe ou kinésithérapeute : lequel consulter en premier ?',
    description: "Ils traitent souvent les mêmes symptômes, mais leur approche est fondamentalement différente. Voici comment choisir — et pourquoi la vraie réponse dépend de ce que vous traversez maintenant.",
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1699523229208-be1e1dd9252d?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Ostéopathe ou kinésithérapeute',
      },
    ],
  },
}

export default function ArticleOsteoKine() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🦴 Ostéopathie
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          Ostéopathe ou kinésithérapeute : lequel consulter en premier ?
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>12 mai 2026 · 5 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://images.unsplash.com/photo-1699523229208-be1e1dd9252d?w=900&auto=format&fit=crop&q=60"
          alt="Ostéopathie et kinésithérapie — soin du corps"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          Ils traitent souvent les mêmes symptômes, mais leur approche est fondamentalement différente.
          Voici comment choisir — et pourquoi la vraie réponse dépend de ce que vous traversez
          maintenant.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Deux philosophies de soin différentes
        </h2>
        <p className="leading-relaxed mb-4">
          Le kinésithérapeute travaille dans la rééducation fonctionnelle : il remobilise, renforce,
          rééduque. C&apos;est le professionnel vers lequel on se tourne après une chirurgie, une
          entorse, une fracture. L&apos;ostéopathe a une approche plus holistique : il part du
          principe que le corps forme un système global et que la douleur ressentie à un endroit peut
          avoir son origine ailleurs. Une douleur lombaire chronique peut être liée à une tension
          diaphragmatique ou une compensation posturale ancienne.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce que ça veut dire concrètement
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <p className="font-medium mb-3 text-sm" style={{ color: '#1d4ed8' }}>Kinésithérapeute en premier</p>
            <ul className="flex flex-col gap-2">
              {[
                "Sortie d'opération du genou ou de l'épaule",
                "Entorse récente",
                "Rééducation post-accident",
                "Faiblesse musculaire identifiée",
              ].map((item) => (
                <li key={item} className="text-sm flex items-start gap-2" style={{ color: '#44403c' }}>
                  <span className="flex-shrink-0 mt-0.5">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-2xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
            <p className="font-medium mb-3 text-sm" style={{ color: '#6b21a8' }}>Ostéopathe en premier</p>
            <ul className="flex flex-col gap-2">
              {[
                "Douleurs chroniques sans cause identifiée",
                "Migraines récurrentes",
                "Troubles digestifs fonctionnels",
                "Tensions persistantes malgré le repos",
              ].map((item) => (
                <li key={item} className="text-sm flex items-start gap-2" style={{ color: '#44403c' }}>
                  <span className="flex-shrink-0 mt-0.5">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Le cas particulier du dos
        </h2>
        <p className="leading-relaxed mb-4">
          Une lombalgie aiguë récente répond souvent très bien à l&apos;ostéopathie : 2 à 3 séances
          peuvent suffire. Une lombalgie chronique avec faiblesse musculaire sera mieux prise en
          charge par la kinésithérapie. Dans les cas complexes, les deux approches se complètent
          parfaitement — un ostéopathe qui libère les restrictions de mobilité avant que le
          kinésithérapeute travaille le renforcement : une combinaison que beaucoup de praticiens
          recommandent eux-mêmes.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce qu&apos;on ne vous dit pas toujours
        </h2>
        <p className="leading-relaxed mb-4">
          L&apos;ostéopathie est réglementée depuis 2002 en France — le titre est protégé, la
          formation dure minimum 5 ans. La kinésithérapie est remboursée par la Sécu sur prescription.
          L&apos;ostéopathe n&apos;est pas remboursé directement, mais de nombreuses mutuelles
          prennent en charge une partie des séances.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La règle des 3 séances
        </h2>
        <p className="leading-relaxed mb-4">
          Si vous ne ressentez aucune amélioration après 3 séances, il faut réévaluer. Un bon
          praticien vous le dira lui-même plutôt que de continuer à vous faire venir. Testez-le
          dès le premier rendez-vous : <em>&laquo;&nbsp;À partir de quand estimez-vous qu&apos;on
          devrait réévaluer ?&nbsp;&raquo;</em> La réponse vous dira beaucoup.
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Ostéopathes et kinésithérapeutes vérifiés sur Holistia
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            Sur Holistia, les deux spécialités coexistent parce que votre corps mérite une vision
            d&apos;ensemble. Et parce que le meilleur soin, c&apos;est parfois celui qui sait vous
            orienter vers quelqu&apos;un d&apos;autre.
          </p>
          <a
            href="/recherche"
            className="inline-block text-white text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Trouver un praticien →
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
            headline: 'Ostéopathe ou kinésithérapeute : lequel consulter en premier ?',
            description: "Ils traitent souvent les mêmes symptômes, mais leur approche est fondamentalement différente. Voici comment choisir — et pourquoi la vraie réponse dépend de ce que vous traversez maintenant.",
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
            datePublished: '2026-05-12',
            dateModified: '2026-05-12',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/osteopathe-ou-kinesitherapeute',
          }),
        }}
      />

    </main>
  )
}
