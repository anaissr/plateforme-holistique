import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burn-out : reconnaître les signaux et se reconstruire grâce aux médecines douces | Holistia',
  description: 'Naturopathie, sophrologie, hypnothérapie, coaching — comment les approches holistiques accompagnent une vraie reconstruction après un burn-out.',
  openGraph: {
    title: 'Burn-out : reconnaître les signaux et se reconstruire grâce aux médecines douces',
    description: 'Naturopathie, sophrologie, hypnothérapie, coaching — comment les approches holistiques accompagnent une vraie reconstruction après un burn-out.',
    type: 'article',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1678980766534-c8be07e3c92a?w=1200&auto=format&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Burn-out — reconstruction grâce aux médecines douces',
      },
    ],
  },
}

export default function ArticleBurnOut() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🔥 Santé mentale
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          Burn-out : reconnaître les signaux et se reconstruire grâce aux médecines douces
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>8 mai 2026 · 7 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1678980766534-c8be07e3c92a?w=900&auto=format&fit=crop&q=80"
          alt="Burn-out — épuisement professionnel, reconstruction grâce aux médecines douces"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          Le burn-out n'est pas une simple fatigue. C'est un épuisement total — physique, émotionnel et mental — qui s'installe progressivement après des mois, parfois des années, de sur-sollicitation. Il peut être lié au travail, à la vie personnelle — parentalité épuisante, aidance, relation toxique — ou à la combinaison des deux. En France, 2,5 millions de personnes seraient en état de burn-out sévère selon l'Observatoire de la vie au travail. Et pourtant, il reste souvent invisible jusqu'à ce que le corps s'arrête de lui-même.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Les 5 étapes vers le burn-out
        </h2>
        <p className="leading-relaxed mb-4">
          Le burn-out ne survient jamais du jour au lendemain. Il suit un chemin prévisible — ce qui veut dire qu'il peut être intercepté à chaque étape, à condition de savoir le reconnaître.
        </p>
        <div className="flex flex-col gap-4 my-6">
          {[
            { num: '1', titre: "L'enthousiasme idéaliste", texte: "Tout commence souvent par un engagement fort — dans un projet, une relation, un rôle. On donne beaucoup, on s'investit sans compter. L'énergie semble inépuisable." },
            { num: '2', titre: 'La stagnation', texte: "Les efforts ne suffisent plus à maintenir l'enthousiasme. On commence à sacrifier ses besoins personnels — sommeil, loisirs, liens sociaux — pour maintenir le rythme." },
            { num: '3', titre: 'La frustration', texte: "Le sentiment d'inefficacité s'installe. On s'irrite facilement, on remet en question son engagement. Les premiers symptômes physiques apparaissent : maux de tête, tensions, infections répétées." },
            { num: '4', titre: "L'apathie", texte: "La résignation s'installe. On fait le minimum pour survivre. Le cynisme et le détachement émotionnel protègent d'une douleur devenue trop grande. C'est le signal d'alarme le plus clair." },
            { num: '5', titre: "L'effondrement", texte: "Le corps dit stop. Incapacité à fonctionner, pleurs incontrôlables, impossibilité de se lever. L'arrêt n'est plus un choix, c'est une nécessité." },
          ].map(e => (
            <div key={e.num} className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 text-white" style={{ backgroundColor: '#6b21a8' }}>{e.num}</div>
              <div>
                <p className="font-medium mb-1" style={{ color: '#1c1917' }}>{e.titre}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{e.texte}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Les signaux d'alarme à ne pas ignorer
        </h2>
        <p className="leading-relaxed mb-4">
          Le burn-out se construit dans le silence. On continue, on s'adapte, on se dit que ça va aller. Et puis un matin, on ne peut plus se lever. Les signaux précurseurs sont souvent là depuis longtemps : irritabilité croissante, cynisme, sentiment d'inefficacité malgré les efforts, troubles du sommeil, infections à répétition, palpitations, maux de tête chroniques.
        </p>
        <p className="leading-relaxed mb-4">
          La différence avec la dépression ? Le burn-out est lié à un épuisement des ressources face à une sur-sollicitation chronique. Mais s'il n'est pas pris en charge, il peut évoluer vers un tableau dépressif complet. D'où l'importance d'agir tôt.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La naturopathie : reconstruire le terrain
        </h2>
        <p className="leading-relaxed mb-4">
          Lors d'un burn-out, le corps a souvent été vidé de ses ressources : le cortisol (hormone du stress) a été sur-sollicité, le sommeil est perturbé, le microbiote intestinal peut être déséquilibré, certaines vitamines et minéraux sont en carence (magnésium, vitamine D, B12, fer).
        </p>
        <p className="leading-relaxed mb-4">
          Le naturopathe établit un bilan global et propose un plan de reconstruction : alimentation anti-inflammatoire, compléments adaptés, plantes adaptogènes (ashwagandha, rhodiola, ginseng), drainage, hydrologie. L'objectif n'est pas de repartir vite — c'est de repartir solidement.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La sophrologie : réapprendre à s'arrêter
        </h2>
        <p className="leading-relaxed mb-4">
          Les personnes qui font un burn-out ont souvent une relation compliquée avec le repos — elles ne savent plus s'arrêter, ou culpabilisent de ne rien faire. La sophrologie travaille sur la relation au corps et à l'instant présent, à travers des techniques de détente profonde, de conscience corporelle et de reprogrammation mentale.
        </p>
        <p className="leading-relaxed mb-4">
          En quelques séances, les patients rapportent souvent une amélioration du sommeil, une diminution des ruminations et une capacité retrouvée à poser des limites. La sophrologie s'apprend — les exercices sont ensuite pratiqués seul, à son rythme.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          L'hypnothérapie : accéder aux ressources inconscientes
        </h2>
        <p className="leading-relaxed mb-4">
          Le burn-out s'accompagne souvent de croyances limitantes profondément ancrées : « je dois être parfait », « m'arrêter c'est échouer », « les autres comptent sur moi ». Ces schémas ont souvent des racines anciennes que la thérapie classique met du temps à dénouer.
        </p>
        <p className="leading-relaxed mb-4">
          L'hypnothérapie permet d'accéder à ces couches plus profondes et de les travailler autrement — par la métaphore, la suggestion, la visualisation. Elle est particulièrement efficace pour les personnes très intellectuelles qui tournent en rond avec leurs pensées et ont du mal à « lâcher prise » par la seule volonté.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          La psychothérapie : se prioriser
        </h2>
        <p className="leading-relaxed mb-4">
          Le burn-out révèle souvent quelque chose de plus profond : une difficulté à se mettre en premier, des croyances tenaces sur la valeur personnelle liée à la performance, une peur du vide ou du silence. La psychothérapie — qu'elle soit d'orientation analytique, humaniste, cognitive ou systémique — offre un espace pour explorer ces couches sans jugement et reconnecter avec ses besoins réels.
        </p>
        <p className="leading-relaxed mb-4">
          Se prioriser ne signifie pas abandonner ses responsabilités. Cela signifie apprendre à reconnaître ses limites, à dire non, à recevoir de l'aide, à exister autrement que par ce qu'on accomplit. C'est souvent le travail le plus difficile — et le plus transformateur — d'une reconstruction après un burn-out.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Combien de temps dure une reconstruction ?
        </h2>
        <p className="leading-relaxed mb-4">
          Il n'y a pas de réponse universelle — certaines personnes sortent d'un burn-out en 3 mois, d'autres en 18 mois ou plus. Ce qui est certain : vouloir aller vite est contre-productif. La reconstruction se fait en couches, non de façon linéaire. Il y a des bonnes journées et des rechutes, et c'est normal.
        </p>
        <p className="leading-relaxed mb-4">
          L'accompagnement par plusieurs praticiens en parallèle — naturopathe pour le corps, sophrologue ou hypnothérapeute pour le mental, médecin pour le suivi médical — offre les meilleures chances d'une reconstruction durable.
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Trouver un praticien pour vous accompagner
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            Naturopathie, sophrologie, hypnothérapie, coaching — tous nos praticiens sont vérifiés et disponibles en visio.
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
            headline: 'Burn-out : reconnaître les signaux et se reconstruire grâce aux médecines douces',
            description: 'Naturopathie, sophrologie, hypnothérapie, coaching — comment les approches holistiques accompagnent une vraie reconstruction après un burn-out.',
            image: 'https://plus.unsplash.com/premium_photo-1678980766534-c8be07e3c92a?w=1200&auto=format&fit=crop&q=80',
            datePublished: '2026-05-08',
            dateModified: '2026-05-08',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/burn-out',
          }),
        }}
      />

    </main>
  )
}
