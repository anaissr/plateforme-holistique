'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

const praticiens = [
  {
    nom: 'Sophie Laurent',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
    specialite: 'Naturopathe',
    ville: 'Paris — aussi en visio',
    note: '4.9',
    avis: 47,
    tarif_depuis: '70€',
    dispo: 'Demain à 14h',
    badge: 'Très demandée',
    description: 'Spécialisée en troubles digestifs, fatigue chronique et rééquilibrage hormonal. Approche globale intégrant nutrition, phytothérapie et hygiène de vie.',
    public: ['Adultes', 'Femmes enceintes', 'PMA'],
    problematiques: ['Troubles digestifs', 'Fatigue chronique', 'Déséquilibres hormonaux'],
    prestations: [
      { nom: 'Bilan initial', duree: '1h30', tarif: '110€' },
      { nom: 'Suivi', duree: '45min', tarif: '70€' },
    ],
  },
  {
    nom: 'Marc Dubois',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    specialite: 'Ostéopathe',
    ville: 'Lyon — aussi en visio',
    note: '4.8',
    avis: 63,
    tarif_depuis: '80€',
    dispo: 'Jeudi à 10h',
    badge: '',
    description: 'Ostéopathe structurel et fonctionnel, spécialisé dans les douleurs chroniques, les troubles posturaux et la récupération sportive.',
    public: ['Adultes', 'Enfants', 'Sportifs'],
    problematiques: ['Douleurs chroniques', 'Troubles posturaux', 'Récupération sportive'],
    prestations: [
      { nom: 'Consultation adulte', duree: '45min', tarif: '80€' },
      { nom: 'Consultation enfant', duree: '30min', tarif: '60€' },
    ],
  },
  {
    nom: 'Amélie Chen',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face',
    specialite: 'Sophrologue',
    ville: 'Visio uniquement',
    note: '5.0',
    avis: 31,
    tarif_depuis: '65€',
    dispo: "Aujourd'hui à 17h",
    badge: 'Nouveau',
    description: 'Accompagnement en gestion du stress, anxiété, troubles du sommeil et préparation mentale. Séances disponibles en français depuis Bangkok.',
    public: ['Adultes', 'Adolescents', 'Couples'],
    problematiques: ['Stress et anxiété', 'Troubles du sommeil', 'Burn-out'],
    prestations: [
      { nom: 'Séance individuelle', duree: '1h', tarif: '65€' },
      { nom: 'Séance couple', duree: '1h30', tarif: '95€' },
    ],
  },
  {
    nom: 'Pierre Martin',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
    specialite: 'Hypnothérapeute',
    ville: 'Bordeaux — aussi en visio',
    note: '4.7',
    avis: 89,
    tarif_depuis: '90€',
    dispo: 'Vendredi à 15h',
    badge: '',
    description: 'Hypnose ericksonienne et EMDR. Phobies, traumatismes, addictions, confiance en soi. Plus de 500 patients accompagnés.',
    public: ['Adultes', 'Adolescents'],
    problematiques: ['Phobies', 'Traumatismes', 'Addictions'],
    prestations: [
      { nom: 'Séance hypnose', duree: '1h15', tarif: '90€' },
      { nom: 'Séance EMDR', duree: '1h30', tarif: '110€' },
    ],
  },
]

const problematiques = [
  { emoji: '😰', label: 'Stress et anxiété' },
  { emoji: '😴', label: 'Troubles du sommeil' },
  { emoji: '🦴', label: 'Douleurs chroniques' },
  { emoji: '🤢', label: 'Troubles digestifs' },
  { emoji: '🌸', label: 'Fertilité et PMA' },
  { emoji: '🔋', label: 'Fatigue chronique' },
  { emoji: '💔', label: 'Traumatismes' },
  { emoji: '🔥', label: 'Burn-out' },
  { emoji: '😨', label: 'Phobies' },
  { emoji: '🌸', label: 'Déséquilibres hormonaux' },
  { emoji: '🧍', label: 'Troubles posturaux' },
  { emoji: '⚡', label: 'Récupération sportive' },
]

export default function Recherche() {
  const [problematiquesSelectionnees, setProblematiquesSelectionnees] = useState<string[]>([])
  const [specialite, setSpecialite] = useState('')
  const [pourQui, setPourQui] = useState('')
  const [mode, setMode] = useState('')
  const [disponibilite, setDisponibilite] = useState('')
  const [budget, setBudget] = useState('')
  const [afficherTroubles, setAfficherTroubles] = useState(false)

  const toggleProblematique = (label: string) => {
    setProblematiquesSelectionnees((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    )
  }

  const praticiensFiltres = praticiens.filter((p) => {
    if (problematiquesSelectionnees.length === 0) return true
    return problematiquesSelectionnees.some((prob) =>
      p.problematiques.some((pp) => pp.toLowerCase().includes(prob.toLowerCase()) || prob.toLowerCase().includes(pp.toLowerCase()))
    )
  })

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* BARRE DE RECHERCHE */}
      <section className="px-6 py-10" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-light text-white mb-6 text-center" style={{ fontFamily: 'var(--font-lora)' }}>
            Trouvez votre praticien
          </h1>
          <div className="bg-white rounded-2xl p-4 flex flex-wrap gap-3 items-end shadow-lg">
            <div className="flex-1 min-w-36">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Spécialité</label>
              <select value={specialite} onChange={(e) => setSpecialite(e.target.value)} className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Toutes les spécialités</option>
                <option>Sophrologie</option>
                <option>Naturopathie</option>
                <option>Ostéopathie</option>
                <option>Hypnothérapie</option>
                <option>Kinésiologie</option>
                <option>Acupuncture</option>
                <option>Réflexologie</option>
                <option>Thérapies brèves</option>
                <option>Médecine traditionnelle chinoise</option>
                <option>Fasciathérapie</option>
                <option>Ayurveda</option>
                <option>Coaching holistique</option>
                <option>Psychopraticien</option>
              </select>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />
            <div className="flex-1 min-w-36">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Pour qui ?</label>
              <select value={pourQui} onChange={(e) => setPourQui(e.target.value)} className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Tout public</option>
                <option>Adultes</option>
                <option>Enfants</option>
                <option>Adolescents</option>
                <option>Bébés</option>
                <option>Couples</option>
                <option>Femmes enceintes</option>
                <option>PMA et fertilité</option>
                <option>Sportifs</option>
              </select>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />
            <div className="flex-1 min-w-32">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Mode</label>
              <select value={mode} onChange={(e) => setMode(e.target.value)} className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Cabinet ou visio</option>
                <option>En cabinet</option>
                <option>En visio</option>
              </select>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />
            <div className="flex-1 min-w-32">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Disponibilité</label>
              <select value={disponibilite} onChange={(e) => setDisponibilite(e.target.value)} className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">N'importe quand</option>
                <option>Aujourd'hui</option>
                <option>Cette semaine</option>
                <option>Le samedi</option>
                <option>Ce mois-ci</option>
              </select>
            </div>
            <div className="w-px h-8" style={{ backgroundColor: '#e7e5e4' }} />
            <div className="flex-1 min-w-32">
              <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>Budget max</label>
              <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full text-sm border-none outline-none bg-transparent" style={{ color: '#44403c' }}>
                <option value="">Tous budgets</option>
                <option>Moins de 50€</option>
                <option>50€ - 80€</option>
                <option>80€ - 120€</option>
                <option>Plus de 120€</option>
              </select>
            </div>
            <button className="text-white px-6 py-3 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
              Rechercher
            </button>
          </div>

          {/* FILTRE PROBLÉMATIQUES */}
          <div className="mt-4">
            <button
              onClick={() => setAfficherTroubles(!afficherTroubles)}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition"
              style={{ backgroundColor: problematiquesSelectionnees.length > 0 ? '#ffffff' : 'rgba(255,255,255,0.15)', color: problematiquesSelectionnees.length > 0 ? '#6b21a8' : '#ffffff' }}
            >
              {problematiquesSelectionnees.length > 0 ? `✓ ${problematiquesSelectionnees.length} trouble${problematiquesSelectionnees.length > 1 ? 's' : ''} sélectionné${problematiquesSelectionnees.length > 1 ? 's' : ''}` : '+ Filtrer par problématique'}
              <span style={{ fontSize: '10px' }}>{afficherTroubles ? '▲' : '▼'}</span>
            </button>

            {afficherTroubles && (
              <div className="mt-3 flex flex-wrap gap-2">
                {problematiques.map((pb) => (
                  <button
                    key={pb.label}
                    onClick={() => toggleProblematique(pb.label)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition"
                    style={{
                      backgroundColor: problematiquesSelectionnees.includes(pb.label) ? '#ffffff' : 'rgba(255,255,255,0.15)',
                      color: problematiquesSelectionnees.includes(pb.label) ? '#6b21a8' : '#ffffff',
                      border: problematiquesSelectionnees.includes(pb.label) ? 'none' : '1px solid rgba(255,255,255,0.3)',
                    }}
                  >
                    <span>{pb.emoji}</span>
                    <span>{pb.label}</span>
                    {problematiquesSelectionnees.includes(pb.label) && <span>✓</span>}
                  </button>
                ))}
                {problematiquesSelectionnees.length > 0 && (
                  <button
                    onClick={() => setProblematiquesSelectionnees([])}
                    className="px-3 py-1.5 rounded-full text-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#e9d5ff' }}
                  >
                    Effacer les filtres
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div>
            <p className="text-sm" style={{ color: '#78716c' }}>
              <span className="font-medium" style={{ color: '#44403c' }}>{praticiensFiltres.length} praticien{praticiensFiltres.length > 1 ? 's' : ''}</span> correspondent à votre recherche
            </p>
            {problematiquesSelectionnees.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-2">
                {problematiquesSelectionnees.map((p) => (
                  <span
                    key={p}
                    className="text-xs px-3 py-1 rounded-full flex items-center gap-1"
                    style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                  >
                    {p}
                    <button onClick={() => toggleProblematique(p)} style={{ color: '#a855f7' }}>✕</button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <select className="text-sm border rounded-lg px-3 py-2" style={{ borderColor: '#e7e5e4', color: '#44403c' }}>
            <option>Trier par : Pertinence</option>
            <option>Trier par : Note</option>
            <option>Trier par : Tarif croissant</option>
            <option>Trier par : Disponibilité</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          {praticiensFiltres.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <p className="font-medium mb-2" style={{ color: '#1c1917' }}>Aucun praticien trouvé</p>
              <p className="text-sm mb-6" style={{ color: '#a8a29e' }}>Essayez de modifier vos filtres de problématique</p>
              <button
                onClick={() => setProblematiquesSelectionnees([])}
                className="text-white px-6 py-3 rounded-2xl text-sm font-medium"
                style={{ backgroundColor: '#6b21a8' }}
              >
                Effacer les filtres
              </button>
            </div>
          ) : (
            praticiensFiltres.map((praticien) => (
              <div
                key={praticien.nom}
                className="bg-white rounded-2xl p-6 flex gap-6 items-start hover:shadow-md transition"
                style={{ border: '1px solid #e7e5e4' }}
              >
                <img
                  src={praticien.photo}
                  alt={praticien.nom}
                  className="w-24 h-24 rounded-2xl flex-shrink-0 object-cover object-top cursor-pointer"
                  onClick={() => { window.location.href = '/praticien' }}
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2
                          className="font-medium cursor-pointer hover:underline"
                          style={{ color: '#1c1917' }}
                          onClick={() => { window.location.href = '/praticien' }}
                        >
                          {praticien.nom}
                        </h2>
                        {praticien.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                            {praticien.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm" style={{ color: '#6b21a8' }}>{praticien.specialite}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📍 {praticien.ville}</p>
                      <div className="flex gap-1 flex-wrap mt-2">
                        {praticien.public.map((p) => (
                          <span key={p} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#faf9f7', color: '#78716c', border: '1px solid #e7e5e4' }}>
                            {p}
                          </span>
                        ))}
                      </div>
                      {/* PROBLÉMATIQUES */}
                      <div className="flex gap-1 flex-wrap mt-1">
                        {praticien.problematiques.map((pb) => (
                          <span
                            key={pb}
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: problematiquesSelectionnees.includes(pb) ? '#f5f3ff' : '#faf9f7',
                              color: problematiquesSelectionnees.includes(pb) ? '#6b21a8' : '#a8a29e',
                              border: problematiquesSelectionnees.includes(pb) ? '1px solid #6b21a8' : '1px solid #e7e5e4',
                              fontWeight: problematiquesSelectionnees.includes(pb) ? '600' : '400',
                            }}
                          >
                            {pb}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="flex items-center gap-1 justify-end">
                        <span className="text-sm">⭐</span>
                        <span className="font-medium text-sm" style={{ color: '#1c1917' }}>{praticien.note}</span>
                        <span className="text-xs" style={{ color: '#a8a29e' }}>({praticien.avis})</span>
                      </div>
                      <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>À partir de</p>
                      <p className="text-sm font-medium" style={{ color: '#44403c' }}>{praticien.tarif_depuis}</p>
                    </div>
                  </div>

                  <p className="text-sm mt-2 leading-relaxed" style={{ color: '#78716c' }}>
                    {praticien.description}
                  </p>

                  <div className="flex gap-2 flex-wrap mt-3">
                    {praticien.prestations.map((p) => (
                      <span key={p.nom} className="text-xs px-3 py-1 rounded-lg" style={{ backgroundColor: '#faf9f7', color: '#57534e', border: '1px solid #e7e5e4' }}>
                        {p.nom} · {p.duree} · {p.tarif}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                      🟢 Prochain RDV : {praticien.dispo}
                    </span>
                    <div className="flex gap-2">
                      <button
                        className="text-sm px-4 py-2 rounded-xl border transition"
                        style={{ borderColor: '#6b21a8', color: '#6b21a8', backgroundColor: 'white' }}
                        onClick={() => { window.location.href = '/praticien' }}
                      >
                        💬 Contacter
                      </button>
                      <button
                        className="text-sm px-4 py-2 rounded-xl transition"
                        style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                        onClick={() => { window.location.href = '/praticien' }}
                      >
                        Voir le profil
                      </button>
                      <button
                        className="text-white text-sm px-5 py-2 rounded-xl transition"
                        style={{ backgroundColor: '#6b21a8' }}
                        onClick={() => { window.location.href = '/praticien' }}
                      >
                        Prendre RDV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {praticiensFiltres.length > 0 && (
          <div className="flex justify-center gap-2 mt-10">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className="w-9 h-9 rounded-xl text-sm font-medium"
                style={{
                  backgroundColor: n === 1 ? '#6b21a8' : '#ffffff',
                  color: n === 1 ? '#ffffff' : '#44403c',
                  border: '1px solid #e7e5e4',
                }}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}