'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

const specialites = [
  // ── CORPS & TOUCHER ──────────────────────────────────────────
  {
    slug: 'osteopathie',
    emoji: '🤲',
    nom: 'Ostéopathie',
    categorie: 'corps',
    accroche: 'Soulagez vos douleurs et retrouvez votre mobilité grâce au toucher thérapeutique.',
    problematiques: ['Douleurs de dos', 'Douleurs articulaires', 'Troubles posturaux', 'Récupération sportive', 'Nourrissons et bébés'],
    praticiens: 143,
    satisfaction: 4.7,
    tarif_depuis: '70€',
    visio: false,
  },
  {
    slug: 'fasciatherapie',
    emoji: '🫀',
    nom: 'Fasciathérapie',
    categorie: 'corps',
    accroche: 'Libérez les tensions profondes du corps grâce au travail sur les fascias.',
    problematiques: ['Douleurs chroniques', 'Stress', 'Troubles posturaux', 'Récupération post-opératoire', 'Fatigue profonde'],
    praticiens: 45,
    satisfaction: 4.7,
    tarif_depuis: '65€',
    visio: false,
  },
  {
    slug: 'kinesitherapie',
    emoji: '💪',
    nom: 'Kinésithérapie',
    categorie: 'corps',
    accroche: 'Rééduquez votre corps et retrouvez mobilité et force grâce à la kinésithérapie.',
    problematiques: ['Rééducation post-opératoire', 'Douleurs musculaires', 'Troubles respiratoires', 'Sport et prévention', 'Récupération'],
    praticiens: 210,
    satisfaction: 4.7,
    tarif_depuis: '50€',
    visio: false,
  },
  {
    slug: 'kinesiologie',
    emoji: '⚡',
    nom: 'Kinésiologie',
    categorie: 'corps',
    accroche: 'Libérez les blocages physiques et émotionnels grâce au test musculaire.',
    problematiques: ['Stress chronique', 'Troubles d\'apprentissage', 'Douleurs inexpliquées', 'Blocages émotionnels', 'Enfants et adolescents'],
    praticiens: 87,
    satisfaction: 4.6,
    tarif_depuis: '60€',
    visio: true,
  },
  {
    slug: 'reflexologie',
    emoji: '💆',
    nom: 'Réflexologie',
    categorie: 'corps',
    accroche: 'Stimulez les zones réflexes de vos pieds pour agir sur l\'ensemble de votre corps.',
    problematiques: ['Stress et tension', 'Troubles circulatoires', 'Fatigue', 'Douleurs chroniques', 'Soutien immunitaire'],
    praticiens: 65,
    satisfaction: 4.5,
    tarif_depuis: '55€',
    visio: false,
  },
  {
    slug: 'ergotherapie',
    emoji: '🖐️',
    nom: 'Ergothérapie',
    categorie: 'corps',
    accroche: 'Retrouvez votre autonomie dans les gestes du quotidien grâce à un accompagnement personnalisé.',
    problematiques: ['Handicap moteur', 'Troubles cognitifs', 'Rééducation', 'Enfants et développement', 'Personnes âgées'],
    praticiens: 38,
    satisfaction: 4.8,
    tarif_depuis: '60€',
    visio: true,
  },
  {
    slug: 'psychomotricite',
    emoji: '🤸',
    nom: 'Psychomotricité',
    categorie: ['corps', 'parole'],
    accroche: 'Harmonisez le corps et l\'esprit grâce à une approche qui unit mouvement et émotions.',
    problematiques: ['Troubles du tonus', 'Agitation et hyperactivité', 'Troubles de la coordination', 'Anxiété somatique', 'Enfants et adolescents'],
    praticiens: 52,
    satisfaction: 4.7,
    tarif_depuis: '55€',
    visio: false,
  },
  {
    slug: 'podologie',
    emoji: '🦶',
    nom: 'Podologie',
    categorie: 'corps',
    accroche: 'Prenez soin de vos pieds pour améliorer votre posture et votre bien-être global.',
    problematiques: ['Douleurs plantaires', 'Troubles posturaux', 'Cors et durillons', 'Diabète et pieds', 'Sport et prévention'],
    praticiens: 29,
    satisfaction: 4.6,
    tarif_depuis: '45€',
    visio: false,
  },
  {
    slug: 'chiropractie',
    emoji: '🦴',
    nom: 'Chiropractie',
    categorie: 'corps',
    accroche: 'Soulagez douleurs et tensions par des ajustements précis de la colonne vertébrale.',
    problematiques: ['Douleurs de dos', 'Sciatique', 'Cervicalgies', 'Migraines', 'Troubles posturaux'],
    praticiens: 41,
    satisfaction: 4.6,
    tarif_depuis: '65€',
    visio: false,
  },
  {
    slug: 'yoga-therapeutique',
    emoji: '🧘',
    nom: 'Yoga thérapeutique',
    categorie: 'corps',
    accroche: 'Utilisez le yoga comme outil de soin pour retrouver équilibre physique et mental.',
    problematiques: ['Douleurs chroniques', 'Stress et anxiété', 'Troubles du sommeil', 'Récupération', 'Grossesse et périnatalité'],
    praticiens: 63,
    satisfaction: 4.8,
    tarif_depuis: '50€',
    visio: true,
  },
  {
    slug: 'pilates-therapeutique',
    emoji: '🏋️',
    nom: 'Pilates thérapeutique',
    categorie: 'corps',
    accroche: 'Renforcez votre corps en profondeur et corrigez votre posture grâce au Pilates adapté.',
    problematiques: ['Douleurs de dos', 'Rééducation post-opératoire', 'Troubles posturaux', 'Sport et performance', 'Grossesse'],
    praticiens: 44,
    satisfaction: 4.7,
    tarif_depuis: '55€',
    visio: true,
  },
  {
    slug: 'acupuncture',
    emoji: '🪡',
    nom: 'Acupuncture',
    categorie: ['corps', 'energie'],
    accroche: 'Rééquilibrez votre énergie vitale grâce aux aiguilles et à la médecine traditionnelle chinoise.',
    problematiques: ['Douleurs chroniques', 'Troubles digestifs', 'Stress et anxiété', 'Fertilité', 'Troubles du sommeil'],
    praticiens: 76,
    satisfaction: 4.7,
    tarif_depuis: '65€',
    visio: false,
  },
  // ── PAROLE & ÉMOTION ─────────────────────────────────────────
  {
    slug: 'sophrologie',
    emoji: '🌬️',
    nom: 'Sophrologie',
    categorie: 'parole',
    accroche: 'Retrouvez calme, confiance et équilibre grâce à la respiration et la relaxation.',
    problematiques: ['Stress et anxiété', 'Troubles du sommeil', 'Confiance en soi', 'Burn-out', 'Préparation mentale'],
    praticiens: 187,
    satisfaction: 4.9,
    tarif_depuis: '55€',
    visio: true,
  },
  {
    slug: 'hypnotherapie',
    emoji: '🧠',
    nom: 'Hypnothérapie',
    categorie: 'parole',
    accroche: 'Accédez à vos ressources profondes pour transformer durablement vos comportements.',
    problematiques: ['Phobies', 'Traumatismes', 'Addictions', 'Confiance en soi', 'Gestion du stress'],
    praticiens: 98,
    satisfaction: 4.8,
    tarif_depuis: '80€',
    visio: true,
  },
  {
    slug: 'therapies-breves',
    emoji: '🗣️',
    nom: 'Thérapies brèves',
    categorie: 'parole',
    accroche: 'Des résultats concrets en peu de séances grâce aux approches Palo Alto, TCC et EMDR.',
    problematiques: ['Anxiété', 'Phobies', 'Burn-out', 'Traumatismes', 'Relations difficiles'],
    praticiens: 58,
    satisfaction: 4.9,
    tarif_depuis: '70€',
    visio: true,
  },
  {
    slug: 'psychopraticien',
    emoji: '💬',
    nom: 'Psychopraticien',
    categorie: 'parole',
    accroche: 'Un accompagnement bienveillant pour traverser les difficultés émotionnelles et relationnelles.',
    problematiques: ['Anxiété', 'Dépression légère', 'Deuil', 'Relations difficiles', 'Développement personnel'],
    praticiens: 89,
    satisfaction: 4.8,
    tarif_depuis: '60€',
    visio: true,
  },
  {
    slug: 'coaching',
    emoji: '🎯',
    nom: 'Coaching',
    categorie: 'parole',
    accroche: 'Atteignez vos objectifs et révélez votre potentiel grâce à un accompagnement sur-mesure.',
    problematiques: ['Reconversion professionnelle', 'Confiance en soi', 'Gestion du temps', 'Leadership', 'Équilibre vie pro-perso'],
    praticiens: 112,
    satisfaction: 4.6,
    tarif_depuis: '70€',
    visio: true,
  },
  {
    slug: 'emdr',
    emoji: '👁️',
    nom: 'EMDR',
    categorie: 'parole',
    accroche: 'Traitez les traumatismes et cicatrisez les blessures émotionnelles par les mouvements oculaires.',
    problematiques: ['Traumatismes', 'PTSD', 'Phobies', 'Deuil', 'Anxiété sévère'],
    praticiens: 67,
    satisfaction: 4.9,
    tarif_depuis: '80€',
    visio: true,
  },
  {
    slug: 'eft',
    emoji: '🫰',
    nom: 'EFT',
    categorie: 'parole',
    accroche: 'Libérez émotions et croyances limitantes grâce aux tapotements sur les points d\'acupressure.',
    problematiques: ['Stress et anxiété', 'Phobies', 'Traumatismes légers', 'Douleurs émotionnelles', 'Confiance en soi'],
    praticiens: 43,
    satisfaction: 4.7,
    tarif_depuis: '60€',
    visio: true,
  },
  {
    slug: 'sexologie',
    emoji: '💜',
    nom: 'Sexologie',
    categorie: 'parole',
    accroche: 'Un espace bienveillant pour aborder votre vie intime, votre identité et votre sexualité.',
    problematiques: ['Troubles du désir', 'Douleurs intimes', 'Dysfonctions sexuelles', 'Identité et genre', 'Couples'],
    praticiens: 34,
    satisfaction: 4.9,
    tarif_depuis: '80€',
    visio: true,
  },
  {
    slug: 'approche-systemique',
    emoji: '🔗',
    nom: 'Approche systémique',
    categorie: 'parole',
    accroche: 'Comprendre et transformer les dynamiques relationnelles et familiales grâce à la thérapie systémique.',
    problematiques: ['Relations difficiles', 'Conflits familiaux', 'Communication', 'Couples', 'Parentalité'],
    praticiens: 41,
    satisfaction: 4.8,
    tarif_depuis: '70€',
    visio: true,
  },
  {
    slug: 'therapie-de-couple',
    emoji: '💑',
    nom: 'Thérapie de couple',
    categorie: 'parole',
    accroche: 'Retrouvez le dialogue et renforcez votre lien avec un thérapeute spécialisé en relations.',
    problematiques: ['Conflits récurrents', 'Crise de couple', 'Infidélité', 'Communication difficile', 'Séparation'],
    praticiens: 51,
    satisfaction: 4.8,
    tarif_depuis: '90€',
    visio: true,
  },
  {
    slug: 'orthophonie',
    emoji: '🗨️',
    nom: 'Orthophonie',
    categorie: 'parole',
    accroche: 'Accompagnez langage, voix et communication chez l\'enfant comme chez l\'adulte.',
    problematiques: ['Troubles du langage', 'Bégaiement', 'Dyslexie', 'Troubles de la voix', 'Troubles de la déglutition'],
    praticiens: 28,
    satisfaction: 4.8,
    tarif_depuis: '55€',
    visio: true,
  },
  // ── ÉNERGIE & TRADITION ──────────────────────────────────────
  {
    slug: 'reiki',
    emoji: '🙌',
    nom: 'Reiki',
    categorie: 'energie',
    accroche: 'Rééquilibrez votre énergie et favorisez la guérison naturelle par imposition des mains.',
    problematiques: ['Stress et fatigue', 'Burn-out', 'Anxiété', 'Soutien en maladie', 'Bien-être global'],
    praticiens: 58,
    satisfaction: 4.7,
    tarif_depuis: '55€',
    visio: false,
  },
  {
    slug: 'homeopathie',
    emoji: '💊',
    nom: 'Homéopathie',
    categorie: 'plantes',
    accroche: 'Stimulez les capacités d\'autoguérison de votre organisme avec des remèdes ultra-dilués.',
    problematiques: ['Allergies', 'Troubles du sommeil', 'Infections ORL', 'Stress', 'Pédiatrie'],
    praticiens: 47,
    satisfaction: 4.5,
    tarif_depuis: '50€',
    visio: true,
  },
  {
    slug: 'ayurveda',
    emoji: '🪷',
    nom: 'Ayurveda',
    categorie: ['energie', 'plantes'],
    accroche: 'Retrouvez l\'équilibre corps-esprit grâce à la médecine traditionnelle indienne.',
    problematiques: ['Fatigue chronique', 'Troubles digestifs', 'Stress', 'Déséquilibres hormonaux', 'Bien-être global'],
    praticiens: 32,
    satisfaction: 4.8,
    tarif_depuis: '70€',
    visio: true,
  },
  {
    slug: 'medecine-chinoise',
    emoji: '☯️',
    nom: 'Médecine traditionnelle chinoise',
    categorie: ['energie', 'plantes'],
    accroche: 'Rééquilibrez votre énergie vitale grâce à 3000 ans de sagesse médicale chinoise.',
    problematiques: ['Douleurs chroniques', 'Troubles digestifs', 'Stress et anxiété', 'Fertilité', 'Troubles du sommeil'],
    praticiens: 76,
    satisfaction: 4.7,
    tarif_depuis: '65€',
    visio: false,
  },
  // ── ALIMENTATION & PLANTES ───────────────────────────────────
  {
    slug: 'naturopathie',
    emoji: '🌿',
    nom: 'Naturopathie',
    categorie: 'plantes',
    accroche: 'Une approche globale de votre santé par l\'alimentation, les plantes et l\'hygiène de vie.',
    problematiques: ['Troubles digestifs', 'Fatigue chronique', 'Déséquilibres hormonaux', 'PMA et fertilité', 'Rééquilibrage alimentaire'],
    praticiens: 156,
    satisfaction: 4.8,
    tarif_depuis: '65€',
    visio: true,
  },
  {
    slug: 'dietetique-nutrition',
    emoji: '🥗',
    nom: 'Diététique-Nutrition',
    categorie: 'plantes',
    accroche: 'Retrouvez un rapport sain à l\'alimentation grâce à un suivi personnalisé par un spécialiste.',
    problematiques: ['Perte de poids', 'Troubles alimentaires', 'Diabète', 'Cholestérol', 'Nutrition sportive'],
    praticiens: 72,
    satisfaction: 4.7,
    tarif_depuis: '55€',
    visio: true,
  },
  {
    slug: 'phytotherapie',
    emoji: '🌱',
    nom: 'Phytothérapie',
    categorie: 'plantes',
    accroche: 'Soignez et prévenez grâce aux vertus des plantes médicinales utilisées depuis des millénaires.',
    problematiques: ['Troubles du sommeil', 'Stress et anxiété', 'Immunité', 'Troubles digestifs', 'Ménopause'],
    praticiens: 39,
    satisfaction: 4.6,
    tarif_depuis: '60€',
    visio: true,
  },
  {
    slug: 'aromatherapie',
    emoji: '🫙',
    nom: 'Aromathérapie',
    categorie: 'plantes',
    accroche: 'Utilisez les huiles essentielles pour prendre soin de votre corps et de votre bien-être.',
    problematiques: ['Stress', 'Troubles du sommeil', 'Infections', 'Douleurs musculaires', 'Bien-être émotionnel'],
    praticiens: 31,
    satisfaction: 4.6,
    tarif_depuis: '50€',
    visio: true,
  },
]

const categories = [
  { label: 'Toutes', valeur: 'toutes' },
  { label: 'Corps & Toucher', valeur: 'corps' },
  { label: 'Parole & Émotion', valeur: 'parole' },
  { label: 'Alimentation & Plantes', valeur: 'plantes' },
  { label: 'Énergie & Tradition', valeur: 'energie' },
]

export default function Specialites() {
  const [categorieActive, setCategorieActive] = useState('toutes')

  const specialitesFiltrees = categorieActive === 'toutes'
    ? specialites
    : specialites.filter(s => Array.isArray(s.categorie) ? s.categorie.includes(categorieActive) : s.categorie === categorieActive)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      {/* HERO */}
      <section
        className="px-6 py-16 text-center relative"
        style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}
      >
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          {specialites.length} spécialités référencées
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Les spécialités
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Découvrez toutes les approches disponibles sur Holistia — des praticiens vérifiés pour chaque spécialité, en cabinet ou en visio.
        </p>
      </section>

      {/* FILTRES */}
      <section className="py-6 px-6 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-5xl mx-auto flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat.valeur}
              onClick={() => setCategorieActive(cat.valeur)}
              className="text-sm px-5 py-2 rounded-full transition"
              style={{
                backgroundColor: categorieActive === cat.valeur ? '#6b21a8' : '#faf9f7',
                color: categorieActive === cat.valeur ? '#ffffff' : '#57534e',
                border: categorieActive === cat.valeur ? 'none' : '1px solid #e7e5e4',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <p className="text-center text-xs mt-3" style={{ color: '#78716c' }}>
          {specialitesFiltrees.length} spécialité{specialitesFiltrees.length > 1 ? 's' : ''} affichée{specialitesFiltrees.length > 1 ? 's' : ''}
        </p>
      </section>

      {/* GRILLE SPÉCIALITÉS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialitesFiltrees.map((spec) => (
            <div
              key={spec.slug}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer group"
              style={{ border: '1px solid #e7e5e4' }}
              onClick={() => { window.location.href = `/specialites/${spec.slug}` }}
            >
              <div
                className="px-6 py-8 text-center"
                style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)' }}
              >
                <div className="text-5xl mb-3">{spec.emoji}</div>
                <h2 className="text-xl font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                  {spec.nom}
                </h2>
                <p className="text-xs" style={{ color: '#78716c' }}>{spec.accroche}</p>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {spec.problematiques.slice(0, 3).map((pb) => (
                    <span key={pb} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#faf9f7', color: '#78716c', border: '1px solid #e7e5e4' }}>
                      {pb}
                    </span>
                  ))}
                  {spec.problematiques.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#faf9f7', color: '#78716c', border: '1px solid #e7e5e4' }}>
                      +{spec.problematiques.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 text-xs" style={{ color: '#78716c' }}>
                  <span>👩‍⚕️ {spec.praticiens} praticiens</span>
                  <span>⭐ {spec.satisfaction}/5</span>
                  <span>À partir de {spec.tarif_depuis}</span>
                </div>

                {spec.visio && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                      🖥 Disponible en visio
                    </span>
                  </div>
                )}

                <button
                  className="w-full text-white py-2.5 rounded-xl text-sm font-medium transition group-hover:opacity-90"
style={{ backgroundColor: '#6b21a8' }}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = '/recherche'
                  }}
                >
                  Voir les praticiens →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAS */}
      <section className="py-16 px-6 relative" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,0 960,60 1440,30 L1440,0 L0,0 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto text-center pt-4">
          <h2 className="text-2xl font-light mb-3" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            Vous ne savez pas quelle spécialité choisir ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#78716c' }}>
            Répondez à quelques questions — on vous oriente vers les approches les plus adaptées à votre situation.
          </p>
          <button
            className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#6b21a8' }}
            onClick={() => { window.location.href = '/orientation' }}
          >
            Utiliser l'orientation personnalisée
          </button>
        </div>
      </section>

    </main>
  )
}