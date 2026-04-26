
'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

const ateliers = [
  {
    id: 1,
    titre: 'Atelier sophrologie — Gérer le stress au quotidien',
    praticien: 'Amélie Chen',
    specialite: 'Sophrologie',
    photo: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&crop=center',
    photoPraticien: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face',
    date: 'Samedi 10 mai 2026',
    heure: '10h00 — 12h00',
    format: 'Visio',
    lieu: '',
    places: 15,
    placesRestantes: 4,
    tarif: '35€',
    tarifsNum: 35,
    categorie: 'parole',
    niveau: 'Débutant',
    description: 'Un atelier pratique pour découvrir les outils de la sophrologie et repartir avec des techniques concrètes pour mieux gérer le stress au quotidien.',
    programme: ['Respiration abdominale et cohérence cardiaque', 'Relaxation dynamique', 'Visualisation positive', 'Exercices à pratiquer seul'],
  },
  {
    id: 2,
    titre: 'Introduction à l\'Ayurveda — Connaître votre constitution',
    praticien: 'Priya Sharma',
    specialite: 'Ayurveda',
    photo: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop&crop=center',
    photoPraticien: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face',
    date: 'Dimanche 11 mai 2026',
    heure: '14h00 — 16h30',
    format: 'Visio',
    lieu: '',
    places: 15,
    placesRestantes: 9,
    tarif: '40€',
    tarifsNum: 40,
    categorie: 'energie',
    niveau: 'Débutant',
    description: 'Découvrez les bases de l\'Ayurveda, identifiez votre dosha dominant et repartez avec un programme alimentaire et des rituels adaptés à votre constitution.',
    programme: ['Les 3 doshas : Vata, Pitta, Kapha', 'Identifier sa constitution', 'Alimentation selon son dosha', 'Rituels quotidiens Dinacharya'],
  },
  {
    id: 3,
    titre: 'Atelier naturopathie — Santé digestive et microbiote',
    praticien: 'Sophie Laurent',
    specialite: 'Naturopathie',
    photo: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop&crop=center',
    photoPraticien: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
    date: 'Samedi 17 mai 2026',
    heure: '9h30 — 12h00',
    format: 'Visio',
    lieu: '',
    places: 15,
    placesRestantes: 12,
    tarif: '45€',
    tarifsNum: 45,
    categorie: 'plantes',
    niveau: 'Tous niveaux',
    description: 'Comprendre le microbiote intestinal et apprendre à le chouchouter au quotidien grâce à l\'alimentation, les probiotiques et les plantes.',
    programme: ['Le microbiote : rôle et importance', 'Aliments pro et prébiotiques', 'Plantes pour la digestion', 'Protocole anti-ballonnements'],
  },
  {
    id: 4,
    titre: 'Cercle de méditation — Pleine conscience et lâcher-prise',
    praticien: 'Marc Dubois',
    specialite: 'Sophrologie',
    photo: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&crop=center',
    photoPraticien: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
    date: 'Mercredi 21 mai 2026',
    heure: '19h00 — 20h30',
    format: 'Visio',
    lieu: '',
    places: 15,
    placesRestantes: 11,
    tarif: '25€',
    tarifsNum: 25,
    categorie: 'parole',
    niveau: 'Tous niveaux',
    description: 'Un espace bienveillant pour pratiquer ensemble la méditation de pleine conscience et explorer le lâcher-prise à travers des exercices guidés.',
    programme: ['Méditation guidée body scan', 'Exercices de pleine conscience', 'Partage en groupe', 'Pratique autonome'],
  },
  {
    id: 5,
    titre: 'Atelier kinésiologie — Libérer les blocages émotionnels',
    praticien: 'Isabelle Morel',
    specialite: 'Kinésiologie',
    photo: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&crop=center',
    photoPraticien: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face',
    date: 'Samedi 24 mai 2026',
    heure: '10h00 — 13h00',
    format: 'Présentiel',
    lieu: 'Lyon 6ème — Espace Lumière, 12 rue de la Paix',
    places: 8,
    placesRestantes: 2,
    tarif: '65€',
    tarifsNum: 65,
    categorie: 'corps',
    niveau: 'Tous niveaux',
    description: 'Un atelier en petit groupe pour découvrir la kinésiologie et expérimenter des techniques de libération émotionnelle par le corps.',
    programme: ['Introduction au test musculaire', 'Points de digipuncture émotionnelle', 'Exercices de libération', 'Intégration et ancrage'],
  },
  {
    id: 6,
    titre: 'Atelier thérapies brèves — Phobies et peurs limitantes',
    praticien: 'Sophie Mercier',
    specialite: 'Thérapies brèves',
    photo: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&h=400&fit=crop&crop=center',
    photoPraticien: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
    date: 'Dimanche 1 juin 2026',
    heure: '14h00 — 17h00',
    format: 'Présentiel',
    lieu: 'Paris 11ème — Cabinet Sophie Mercier, 8 rue Oberkampf',
    places: 10,
    placesRestantes: 6,
    tarif: '55€',
    tarifsNum: 55,
    categorie: 'parole',
    niveau: 'Tous niveaux',
    description: 'Comprendre le mécanisme des phobies et peurs limitantes selon l\'approche Palo Alto et repartir avec des outils concrets pour s\'en libérer.',
    programme: ['Comment se construit une phobie', 'Le modèle de Palo Alto', 'Exercices de désensibilisation', 'Stratégies d\'exposition progressive'],
  },
]

const categories = [
  { label: 'Tous les ateliers', valeur: 'tous' },
  { label: 'Corps et toucher', valeur: 'corps' },
  { label: 'Parole et émotion', valeur: 'parole' },
  { label: 'Alimentation et plantes', valeur: 'plantes' },
  { label: 'Énergie et tradition', valeur: 'energie' },
]

const formats = [
  { label: 'Tous formats', valeur: 'tous' },
  { label: 'Visio', valeur: 'Visio' },
  { label: 'Présentiel', valeur: 'Présentiel' },
]

export default function Ateliers() {
  const [categorieActive, setCategorieActive] = useState('tous')
  const [formatActif, setFormatActif] = useState('tous')
  const [atelierOuvert, setAtelierOuvert] = useState<number | null>(null)
  const [modaleCadeau, setModaleCadeau] = useState<typeof ateliers[0] | null>(null)
  const [messagesCadeau, setMessageCadeau] = useState('')
  const [emailDestinataire, setEmailDestinataire] = useState('')

  const ateliersFiltres = ateliers.filter((a) => {
    const matchCategorie = categorieActive === 'tous' || a.categorie === categorieActive
    const matchFormat = formatActif === 'tous' || a.format === formatActif
    return matchCategorie && matchFormat
  })

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* MODALE BON CADEAU */}
      {modaleCadeau && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setModaleCadeau(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <p className="text-4xl mb-3">🎁</p>
              <h2 className="text-xl font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                Offrir cet atelier
              </h2>
              <p className="text-sm" style={{ color: '#a8a29e' }}>
                {modaleCadeau.titre}
              </p>
            </div>

            <div className="rounded-2xl p-4 mb-5" style={{ backgroundColor: '#f5f3ff' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{modaleCadeau.specialite}</p>
                  <p className="text-xs" style={{ color: '#78716c' }}>avec {modaleCadeau.praticien}</p>
                  <p className="text-xs" style={{ color: '#78716c' }}>📅 {modaleCadeau.date} · {modaleCadeau.heure}</p>
                </div>
                <p className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                  {modaleCadeau.tarif}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>
                  Email du destinataire
                </label>
                <input
                  type="email"
                  value={emailDestinataire}
                  onChange={(e) => setEmailDestinataire(e.target.value)}
                  placeholder="prenom@email.com"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>
                  Message personnalisé (optionnel)
                </label>
                <textarea
                  value={messagesCadeau}
                  onChange={(e) => setMessageCadeau(e.target.value)}
                  placeholder="Je pense que cet atelier te ferait du bien..."
                  className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '80px' }}
                />
              </div>
            </div>

            <button
              className="w-full text-white py-3 rounded-2xl text-sm font-medium mb-3"
              style={{ backgroundColor: '#6b21a8' }}
            >
              Offrir cet atelier — {modaleCadeau.tarif}
            </button>
            <p className="text-xs text-center mb-4" style={{ color: '#a8a29e' }}>
              Le bon cadeau est envoyé par email · Valable 1 an
            </p>
            <button
              onClick={() => setModaleCadeau(null)}
              className="w-full py-2 text-sm"
              style={{ color: '#a8a29e' }}
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 py-16 text-center relative" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          ✨ Ateliers collectifs avec des praticiens vérifiés
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Ateliers et formations
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: '#d8b4fe' }}>
          Explorez les médecines alternatives en groupe — une façon douce et accessible de découvrir une approche avant de consulter individuellement.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <span className="text-sm text-white">👥 Petits groupes (max 15 personnes)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <span className="text-sm text-white">🖥 Visio ou présentiel</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <span className="text-sm text-white">💶 À partir de 25€</span>
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="py-6 px-6 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-5xl mx-auto flex flex-col gap-3">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat.valeur}
                onClick={() => setCategorieActive(cat.valeur)}
                className="text-sm px-4 py-2 rounded-full transition"
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
          <div className="flex gap-2 justify-center">
            {formats.map((f) => (
              <button
                key={f.valeur}
                onClick={() => setFormatActif(f.valeur)}
                className="text-xs px-4 py-1.5 rounded-full transition"
                style={{
                  backgroundColor: formatActif === f.valeur ? '#f5f3ff' : '#faf9f7',
                  color: formatActif === f.valeur ? '#6b21a8' : '#a8a29e',
                  border: formatActif === f.valeur ? '1px solid #6b21a8' : '1px solid #e7e5e4',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <p className="text-center text-xs mt-3" style={{ color: '#a8a29e' }}>
          {ateliersFiltres.length} atelier{ateliersFiltres.length > 1 ? 's' : ''} disponible{ateliersFiltres.length > 1 ? 's' : ''}
        </p>
      </section>

      {/* LISTE ATELIERS */}
      <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-6">
        {ateliersFiltres.map((atelier) => (
          <div
            key={atelier.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
            style={{ border: '1px solid #e7e5e4' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">

              {/* PHOTO */}
              <div className="relative" style={{ minHeight: '200px' }}>
                <img
                  src={atelier.photo}
                  alt={atelier.titre}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ minHeight: '200px' }}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {atelier.placesRestantes <= 3 && (
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
                      🔥 Plus que {atelier.placesRestantes} places
                    </span>
                  )}
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: atelier.format === 'Visio' ? '#eff6ff' : '#f0fdf4',
                      color: atelier.format === 'Visio' ? '#3b82f6' : '#16a34a',
                    }}
                  >
                    {atelier.format === 'Visio' ? '🖥 Visio' : '📍 Présentiel'}
                  </span>
                </div>
              </div>

              {/* CONTENU */}
              <div className="lg:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: '#6b21a8' }}>{atelier.specialite} · {atelier.niveau}</p>
                      <h2 className="text-lg font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                        {atelier.titre}
                      </h2>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{atelier.tarif}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>par personne</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <img src={atelier.photoPraticien} alt={atelier.praticien} className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-sm" style={{ color: '#57534e' }}>avec <strong>{atelier.praticien}</strong></span>
                  </div>

                  <div className="flex gap-4 flex-wrap mb-3">
                    <span className="text-xs flex items-center gap-1" style={{ color: '#78716c' }}>
                      📅 {atelier.date}
                    </span>
                    {atelier.format === 'Présentiel' && atelier.lieu ? (
                      <span className="text-xs flex items-center gap-1" style={{ color: '#78716c' }}>
                        📍 {atelier.lieu}
                      </span>
                    ) : (
                      <span className="text-xs flex items-center gap-1" style={{ color: '#78716c' }}>
                        🖥 Visio
                      </span>
                    )}
                    <span className="text-xs flex items-center gap-1" style={{ color: '#78716c' }}>
                      🕐 {atelier.heure}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: '#78716c' }}>
                      👥 {atelier.placesRestantes}/{atelier.places} places restantes
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#78716c' }}>
                    {atelier.description}
                  </p>

                  {atelierOuvert === atelier.id && (
                    <div className="mb-4 p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                      <p className="text-xs font-medium mb-2" style={{ color: '#6b21a8' }}>Au programme :</p>
                      <div className="flex flex-col gap-1.5">
                        {atelier.programme.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-xs" style={{ color: '#6b21a8' }}>✓</span>
                            <span className="text-xs" style={{ color: '#57534e' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 flex-wrap items-center">
                  <button
                    className="text-white px-6 py-2.5 rounded-xl text-sm font-medium"
                    style={{ backgroundColor: '#6b21a8' }}
                  >
                    Réserver ma place
                  </button>
                  <button
                    onClick={() => setAtelierOuvert(atelierOuvert === atelier.id ? null : atelier.id)}
                    className="text-sm px-4 py-2.5 rounded-xl"
                    style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                  >
                    {atelierOuvert === atelier.id ? 'Masquer le programme' : 'Voir le programme'}
                  </button>
                  <button
                    onClick={() => setModaleCadeau(atelier)}
                    className="text-sm px-4 py-2.5 rounded-xl"
                    style={{ backgroundColor: '#faf9f7', color: '#78716c', border: '1px solid #e7e5e4' }}
                  >
                    🎁 Offrir en bon cadeau
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA PRATICIEN */}
      <section className="py-16 px-6 relative" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,0 960,60 1440,30 L1440,0 L0,0 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto text-center pt-4">
          <h2 className="text-2xl font-light mb-3" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            Vous êtes praticien ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#78716c' }}>
            Proposez vos ateliers sur Holistia et touchez une audience déjà sensibilisée aux médecines alternatives.
          </p>
          <button
            className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#6b21a8' }}
            onClick={() => { window.location.href = '/inscription' }}
          >
            Proposer un atelier
          </button>
        </div>
      </section>

    </main>
  )
}