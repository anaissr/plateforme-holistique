'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

const specialites = [
  {
    slug: 'sophrologie',
    emoji: '🧘',
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
    slug: 'naturopathie',
    emoji: '🌿',
    nom: 'Naturopathie',
    categorie: 'plantes',
    accroche: 'Une approche globale de votre santé par l alimentation, les plantes et l hygiène de vie.',
    problematiques: ['Troubles digestifs', 'Fatigue chronique', 'Déséquilibres hormonaux', 'PMA et fertilité', 'Rééquilibrage alimentaire'],
    praticiens: 156,
    satisfaction: 4.8,
    tarif_depuis: '65€',
    visio: true,
  },
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
    slug: 'kinesiologie',
    emoji: '⚡',
    nom: 'Kinésiologie',
    categorie: 'corps',
    accroche: 'Libérez les blocages physiques et émotionnels grâce au test musculaire.',
    problematiques: ['Stress chronique', 'Troubles d apprentissage', 'Douleurs inexpliquées', 'Blocages émotionnels', 'Enfants et adolescents'],
    praticiens: 87,
    satisfaction: 4.6,
    tarif_depuis: '60€',
    visio: true,
  },
  {
    slug: 'acupuncture',
    emoji: '🌸',
    nom: 'Acupuncture',
    categorie: 'energie',
    accroche: 'Rééquilibrez votre énergie vitale grâce à la médecine traditionnelle chinoise.',
    problematiques: ['Douleurs chroniques', 'Troubles digestifs', 'Stress et anxiété', 'Fertilité', 'Troubles du sommeil'],
    praticiens: 76,
    satisfaction: 4.7,
    tarif_depuis: '65€',
    visio: false,
  },
  {
    slug: 'reflexologie',
    emoji: '💆',
    nom: 'Réflexologie',
    categorie: 'corps',
    accroche: 'Stimulez les zones réflexes de vos pieds pour agir sur l ensemble de votre corps.',
    problematiques: ['Stress et tension', 'Troubles circulatoires', 'Fatigue', 'Douleurs chroniques', 'Soutien immunitaire'],
    praticiens: 65,
    satisfaction: 4.5,
    tarif_depuis: '55€',
    visio: false,
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
    slug: 'fasciatherapie',
    emoji: '🌊',
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
    slug: 'ayurveda',
    emoji: '🪷',
    nom: 'Ayurveda',
    categorie: 'energie',
    accroche: 'Retrouvez l équilibre corps-esprit grâce à la médecine traditionnelle indienne.',
    problematiques: ['Fatigue chronique', 'Troubles digestifs', 'Stress', 'Déséquilibres hormonaux', 'Bien-être global'],
    praticiens: 32,
    satisfaction: 4.8,
    tarif_depuis: '70€',
    visio: true,
  },
  {
    slug: 'psychopraticien',
    emoji: '💙',
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
    nom: 'Coaching holistique',
    categorie: 'parole',
    accroche: 'Atteignez vos objectifs et révélez votre potentiel grâce à un accompagnement sur-mesure.',
    problematiques: ['Reconversion professionnelle', 'Confiance en soi', 'Gestion du temps', 'Leadership', 'Équilibre vie pro-perso'],
    praticiens: 112,
    satisfaction: 4.6,
    tarif_depuis: '70€',
    visio: true,
  },
]

const categories = [
  { label: 'Toutes', valeur: 'toutes' },
  { label: 'Corps et toucher', valeur: 'corps' },
  { label: 'Parole et émotion', valeur: 'parole' },
  { label: 'Alimentation et plantes', valeur: 'plantes' },
  { label: 'Énergie et tradition', valeur: 'energie' },
]

export default function Specialites() {
  const [categorieActive, setCategorieActive] = useState('toutes')

  const specialitesFiltrees = categorieActive === 'toutes'
    ? specialites
    : specialites.filter(s => s.categorie === categorieActive)

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
          Les médecines alternatives
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Découvrez toutes les approches disponibles sur Holistia — des praticiens vérifiés pour chaque spécialité, en cabinet ou en visio.
        </p>
      </section>

      {/* FILTRES */}
      <section className="py-6 px-6 bg-white shadow-sm sticky top-0 z-40">
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
        <p className="text-center text-xs mt-3" style={{ color: '#a8a29e' }}>
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
              {/* En-tête */}
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

              {/* Contenu */}
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {spec.problematiques.slice(0, 3).map((pb) => (
                    <span key={pb} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#faf9f7', color: '#78716c', border: '1px solid #e7e5e4' }}>
                      {pb}
                    </span>
                  ))}
                  {spec.problematiques.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#faf9f7', color: '#a8a29e', border: '1px solid #e7e5e4' }}>
                      +{spec.problematiques.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 text-xs" style={{ color: '#a8a29e' }}>
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
            Utiliser l orientation personnalisée
          </button>
        </div>
      </section>

    </main>
  )
}