import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant | Holistia',
  description: 'Sophrologie, EMDR, psychomotricité — ces thérapies complémentaires offrent des outils puissants pour aider les enfants victimes de harcèlement scolaire à se reconstruire.',
  openGraph: {
    title: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant',
    description: 'Sophrologie, EMDR, psychomotricité — des outils concrets pour aider les enfants à se reconstruire après un harcèlement scolaire.',
    type: 'article',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1661373604896-48e3fa2ff3ef?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Harcèlement scolaire — accompagnement holistique pour enfants',
      },
    ],
  },
}

export default function ArticleHarcelement() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🎒 Enfants & adolescents
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>2 mai 2026 · 6 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1661373604896-48e3fa2ff3ef?w=900&auto=format&fit=crop&q=80"
          alt="Harcèlement scolaire — enfant en souffrance, accompagnement holistique"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          Le harcèlement scolaire touche 1 enfant sur 10 en France. Derrière les mots — insultes, exclusion, cyberharcèlement — se cachent des blessures invisibles qui peuvent marquer durablement le développement psychologique et émotionnel d'un enfant. Anxiété chronique, troubles du sommeil, perte d'estime de soi, refus d'aller à l'école : les signaux sont là, mais les familles ne savent pas toujours vers qui se tourner.
        </p>

        <p className="text-sm leading-relaxed mb-6" style={{ color: '#a8a29e' }}>
          Cet article ne remplace pas l'accompagnement médical ou psychologique. Si votre enfant est en souffrance, consultez d'abord votre médecin traitant ou un psychologue clinicien.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Quand le corps parle à la place des mots
        </h2>
        <p className="leading-relaxed mb-4">
          Les enfants victimes de harcèlement n'ont pas toujours les mots pour décrire ce qu'ils vivent. Ce sont souvent le corps et le comportement qui parlent en premier : maux de ventre du dimanche soir, cauchemars récurrents, irritabilité, hypervigilance, ou au contraire un repli total sur soi. Ces manifestations ne sont pas « dans la tête » — elles sont le reflet d'un système nerveux en état d'alerte permanent.
        </p>
        <p className="leading-relaxed mb-4">
          C'est là où les approches holistiques peuvent intervenir en complément d'un suivi traditionnel : en travaillant directement sur le corps, les émotions et le système nerveux, elles offrent des outils concrets pour sortir de cet état de sidération.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          L'approche systémique : agir sur le système, pas seulement sur l'enfant
        </h2>
        <p className="leading-relaxed mb-4">
          Le harcèlement scolaire ne concerne jamais un enfant isolé — il prend racine dans un système : la classe, l'établissement, la famille, parfois les dynamiques numériques. C'est précisément ce que l'approche systémique prend en charge. Plutôt que de traiter l'enfant victime comme « le problème », le thérapeute systémique s'intéresse aux interactions entre tous les acteurs — enfant, parents, fratrie, école — pour identifier ce qui maintient la situation et ce qui peut la faire évoluer.
        </p>
        <p className="leading-relaxed mb-4">
          Cette approche est particulièrement efficace lorsque le harcèlement dure depuis longtemps et a commencé à modifier les équilibres familiaux : surprotection des parents, retrait scolaire progressif, tensions entre frères et sœurs. En quelques séances — souvent moins qu'une thérapie individuelle — l'approche systémique aide la famille à retrouver ses propres ressources et à créer un environnement qui soutient activement l'enfant plutôt que de le fragiliser davantage.
        </p>
        <p className="leading-relaxed mb-4">
          Certains praticiens formés à l'approche de Palo Alto proposent également des interventions directes sur le comportement — des stratégies concrètes pour que l'enfant change sa façon de réagir face aux harceleurs, cassant ainsi la répétition du schéma. Des résultats mesurables sont souvent visibles en 4 à 6 séances.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          L'EMDR : traiter les traumatismes à leur racine
        </h2>
        <p className="leading-relaxed mb-4">
          Le harcèlement prolongé peut laisser des traces traumatiques au sens clinique du terme. L'EMDR (Eye Movement Desensitization and Reprocessing) est une thérapie validée par l'OMS pour le traitement du stress post-traumatique, et elle est aujourd'hui utilisée avec succès chez les enfants et les adolescents.
        </p>
        <p className="leading-relaxed mb-4">
          Le principe : en stimulant alternativement les deux hémisphères du cerveau (via des mouvements oculaires ou des tapotements), le thérapeute aide le cerveau à « digérer » les souvenirs douloureux qui sont restés bloqués. Ces souvenirs perdent leur charge émotionnelle sans être effacés — l'enfant peut y repenser sans revivre la détresse associée.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La psychomotricité : réhabiter son corps
        </h2>
        <p className="leading-relaxed mb-4">
          Le harcèlement attaque souvent l'image corporelle — la façon dont l'enfant se perçoit physiquement, la honte, l'envie de disparaître. La psychomotricité travaille sur le tonus, l'espace, le schéma corporel et la relation à l'autre à travers le jeu et le mouvement. Pour les enfants qui ont du mal à verbaliser, c'est une porte d'entrée précieuse.
        </p>
        <p className="leading-relaxed mb-4">
          Le psychomotricien peut aussi travailler sur la confiance en soi, la posture, la coordination — autant d'éléments qui renforcent l'estime de soi et permettent à l'enfant de se sentir moins vulnérable dans son environnement.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Et les parents dans tout ça ?
        </h2>
        <p className="leading-relaxed mb-4">
          Accompagner un enfant harcelé est épuisant et déstabilisant. La culpabilité, l'impuissance, la colère — les parents traversent eux aussi une épreuve. Un suivi pour les parents (coaching parental, thérapie brève, sophrologie) peut être aussi utile que l'accompagnement de l'enfant lui-même. Parce qu'un parent apaisé transmet de l'apaisement.
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Trouver un praticien pour votre enfant
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            Sophrologie, EMDR, psychomotricité, psychopraticien — tous nos praticiens sont vérifiés et spécialisés.
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
        <a href="/blog" className="text-sm" style={{ color: '#a8a29e' }}>← Retour au blog</a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant',
            description: 'Sophrologie, EMDR, psychomotricité — ces thérapies complémentaires offrent des outils puissants pour aider les enfants victimes de harcèlement scolaire à se reconstruire.',
            image: 'https://plus.unsplash.com/premium_photo-1661373604896-48e3fa2ff3ef?w=1200&auto=format&fit=crop&q=80',
            datePublished: '2026-05-02',
            dateModified: '2026-05-02',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/harcelement-scolaire',
          }),
        }}
      />

    </main>
  )
}
