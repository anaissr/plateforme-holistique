import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant | Holistia',
  description: 'Sophrologie, EMDR, psychomotricité — ces thérapies complémentaires offrent des outils puissants pour aider les enfants victimes de harcèlement scolaire à se reconstruire.',
  openGraph: {
    title: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant',
    description: 'Sophrologie, EMDR, psychomotricité — des outils concrets pour aider les enfants à se reconstruire après un harcèlement scolaire.',
    type: 'article',
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
          La sophrologie : retrouver un espace de sécurité intérieure
        </h2>
        <p className="leading-relaxed mb-4">
          La sophrologie est particulièrement adaptée aux enfants dès 6 ans. À travers des exercices de respiration, de relaxation dynamique et de visualisation positive, le sophrologue aide l'enfant à reconnecter avec des sensations de calme et de confiance en lui. L'objectif n'est pas d'oublier ce qui s'est passé, mais de créer un espace intérieur sûr, depuis lequel il peut peu à peu retrouver une stabilité émotionnelle.
        </p>
        <p className="leading-relaxed mb-4">
          Les techniques apprises en séance sont réutilisables à la maison — avant d'aller à l'école, la nuit si l'angoisse se réveille, ou dans les moments de tension. Les parents peuvent d'ailleurs être intégrés à la démarche.
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

    </main>
  )
}
