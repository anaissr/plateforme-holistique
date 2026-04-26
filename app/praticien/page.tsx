'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

export default function FichePraticien() {
  const [jourSelectionne, setJourSelectionne] = useState('Lun 28')
  const [creneauSelectionne, setCreneauSelectionne] = useState('')
  const [modePaiement, setModePaiement] = useState<'rdv' | 'cadeau'>('rdv')
  const [montantCadeau, setMontantCadeau] = useState(70)

  const praticien = {
    nom: 'Sophie Laurent',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face',
    specialite: 'Naturopathe',
    ville: 'Paris 11ème',
    visio: true,
    note: 4.9,
    avis: 47,
    description: `Naturopathe certifiée depuis 8 ans, je vous accompagne vers un mieux-être durable grâce à une approche globale et personnalisée. Mon travail s'appuie sur la nutrition, la phytothérapie, l'aromathérapie et l'hygiène de vie.

Je suis spécialisée dans les troubles digestifs (ballonnements, intestin irritable, SIBO), la fatigue chronique, les déséquilibres hormonaux et la préparation à la grossesse.

Chaque accompagnement commence par un bilan complet d'1h30 pour comprendre votre histoire, vos habitudes et vos objectifs. Nous construisons ensemble un protocole sur-mesure, progressif et réaliste.`,
    prestations: [
      { nom: 'Bilan initial', duree: '1h30', tarif: '110€', description: 'Premier rendez-vous complet — anamnèse, bilan de vitalité, protocole personnalisé' },
      { nom: 'Consultation de suivi', duree: '45min', tarif: '70€', description: 'Ajustement du protocole, bilan d étape, nouvelles recommandations' },
      { nom: 'Consultation visio', duree: '45min', tarif: '65€', description: 'Consultation de suivi à distance, même qualité d accompagnement' },
      { nom: 'Bilan enfant / adolescent', duree: '1h', tarif: '85€', description: 'Consultation adaptée aux moins de 18 ans, en présence d un parent' },
    ],
    public: ['Adultes', 'Adolescents', 'Femmes enceintes', 'PMA et fertilité', 'Seniors'],
    specialites: ['Troubles digestifs', 'Fatigue chronique', 'Déséquilibres hormonaux', 'PMA et fertilité', 'Rééquilibrage alimentaire', 'Stress et anxiété'],
    formations: [
      { titre: 'Diplôme de Naturopathie', ecole: 'ISUPNAT Paris', annee: '2016' },
      { titre: 'Formation en Micronutrition', ecole: 'IEDM', annee: '2018' },
      { titre: 'Certification Phytothérapie', ecole: 'ELPM Lyon', annee: '2020' },
    ],
    medias: [
      { type: 'video', titre: 'Présentation de ma pratique' },
      { type: 'photo', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop', titre: 'Mon cabinet' },
      { type: 'photo', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop', titre: 'Espace de consultation' },
    ],
    agenda: {
      'Lun 28': ['9h00', '11h00', '14h00', '15h00', '17h00'],
      'Mar 29': ['10h00', '15h00', '17h00'],
      'Mer 30': [],
      'Jeu 31': ['9h00', '13h00', '14h00', '16h00'],
      'Ven 1': ['11h00', '14h00', '16h00'],
    },
    avisClients: [
      {
        prenom: 'Marie L.',
        date: 'Mars 2026',
        note: 5,
        ponctualite: 5,
        ecoute: 5,
        clarte: 5,
        texte: "Sophie a transformé mon rapport à l alimentation. Après des années de troubles digestifs sans solution, j ai enfin trouvé ce qui me convient.",
      },
      {
        prenom: 'Julie R.',
        date: 'Février 2026',
        note: 5,
        ponctualite: 5,
        ecoute: 5,
        clarte: 4,
        texte: 'Consultation en visio depuis Singapour, très facile à mettre en place. Sophie est à l écoute, bienveillante et ses conseils sont concrets.',
      },
      {
        prenom: 'Thomas B.',
        date: 'Janvier 2026',
        note: 4,
        ponctualite: 4,
        ecoute: 5,
        clarte: 5,
        texte: 'Très bonne expérience. Le bilan initial est vraiment complet et le protocole proposé est progressif. Premiers résultats visibles après 3 semaines.',
      },
    ],
  }

  const creneauxDuJour = praticien.agenda[jourSelectionne as keyof typeof praticien.agenda] || []

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      {/* HERO PRATICIEN */}
      <section className="w-full px-12 py-12" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="max-w-7xl mx-auto flex gap-10 items-center">
          <img src={praticien.photo} alt={praticien.nom} className="w-40 h-40 rounded-3xl object-cover object-top flex-shrink-0 shadow-xl" />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h1 className="text-3xl font-medium text-white" style={{ fontFamily: 'var(--font-lora)' }}>
                {praticien.nom}
              </h1>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
                ✓ Profil vérifié
              </span>
            </div>
            <p className="text-lg mb-2" style={{ color: '#e9d5ff' }}>{praticien.specialite}</p>
            <p className="text-sm mb-4" style={{ color: '#c4b5fd' }}>
              📍 {praticien.ville} {praticien.visio && '· 🖥 Visio disponible'}
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span className="font-medium text-white">{praticien.note}/5</span>
                <span className="text-sm" style={{ color: '#c4b5fd' }}>({praticien.avis} avis)</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {praticien.public.map((p) => (
                  <span key={p} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button className="px-8 py-3 rounded-2xl font-medium text-sm transition shadow-lg" style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}>
              Prendre RDV
            </button>
            <button className="px-8 py-3 rounded-2xl font-medium text-sm transition" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}>
              💬 Contacter
            </button>
            <button className="px-8 py-3 rounded-2xl font-medium text-sm transition" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}>
              🎁 Offrir en bon cadeau
            </button>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* COLONNE GAUCHE */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* À PROPOS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>À propos</h2>
            {praticien.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: '#57534e' }}>{para}</p>
            ))}
          </div>

          {/* PRESTATIONS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Prestations et tarifs</h2>
            <div className="flex flex-col gap-3">
              {praticien.prestations.map((p) => (
                <div key={p.nom} className="flex items-center justify-between p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{p.nom}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>{p.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>{p.tarif}</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>{p.duree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SPÉCIALITÉS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Spécialités</h2>
            <div className="flex flex-wrap gap-2">
              {praticien.specialites.map((s) => (
                <span key={s} className="text-sm px-4 py-2 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* FORMATIONS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Formations et diplômes vérifiés</h2>
            <div className="flex flex-col gap-4">
              {praticien.formations.map((f) => (
                <div key={f.titre} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: '#f5f3ff' }}>
                    🎓
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{f.titre}</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>{f.ecole} · {f.annee}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                    ✓ Vérifié
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MÉDIAS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Photos et vidéos</h2>
            <div className="grid grid-cols-3 gap-3">
              {praticien.medias.map((m) => (
                <div key={m.titre} className="rounded-2xl overflow-hidden aspect-video bg-gray-100 relative">
                  {m.type === 'video' ? (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#f5f3ff', minHeight: '80px' }}>
                      <span className="text-3xl">▶️</span>
                    </div>
                  ) : (
                    <img src={m.url} alt={m.titre} className="w-full h-full object-cover" />
                  )}
                  <p className="text-xs p-2 text-center" style={{ color: '#78716c' }}>{m.titre}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AVIS */}
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Avis patients</h2>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-light" style={{ color: '#6b21a8' }}>{praticien.note}</span>
                <div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((i) => (
                      <span key={i} className="text-sm">{i <= Math.round(praticien.note) ? '⭐' : '☆'}</span>
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{praticien.avis} avis vérifiés</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {praticien.avisClients.map((avis) => (
                <div key={avis.prenom} className="pb-6" style={{ borderBottom: '1px solid #f5f5f4' }}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-medium" style={{ color: '#1c1917' }}>{avis.prenom}</span>
                      <span className="text-xs ml-2" style={{ color: '#a8a29e' }}>{avis.date}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((i) => (
                        <span key={i} className="text-xs">{i <= avis.note ? '⭐' : '☆'}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mb-3 flex-wrap">
                    {[
                      { label: 'Ponctualité', val: avis.ponctualite },
                      { label: 'Écoute', val: avis.ecoute },
                      { label: 'Clarté', val: avis.clarte },
                    ].map((c) => (
                      <div key={c.label} className="flex items-center gap-1">
                        <span className="text-xs" style={{ color: '#a8a29e' }}>{c.label}</span>
                        <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>{c.val}/5</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{avis.texte}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* COLONNE DROITE */}
        <div className="flex flex-col gap-4">

          {/* ONGLETS RDV / BON CADEAU */}
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden" style={{ border: '1px solid #e7e5e4' }}>

            {/* TABS */}
            <div className="flex border-b" style={{ borderColor: '#e7e5e4' }}>
              <button
                onClick={() => setModePaiement('rdv')}
                className="flex-1 py-3 text-sm font-medium transition"
                style={{
                  color: modePaiement === 'rdv' ? '#6b21a8' : '#a8a29e',
                  borderBottom: modePaiement === 'rdv' ? '2px solid #6b21a8' : '2px solid transparent',
                }}
              >
                📅 Prendre RDV
              </button>
              <button
                onClick={() => setModePaiement('cadeau')}
                className="flex-1 py-3 text-sm font-medium transition"
                style={{
                  color: modePaiement === 'cadeau' ? '#6b21a8' : '#a8a29e',
                  borderBottom: modePaiement === 'cadeau' ? '2px solid #6b21a8' : '2px solid transparent',
                }}
              >
                🎁 Bon cadeau
              </button>
            </div>

            {/* MODE RDV */}
            {modePaiement === 'rdv' && (
              <div className="p-6">
                <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>
                  1. Choisissez une prestation
                </label>
                <select className="w-full text-sm rounded-xl p-3 mb-4 outline-none" style={{ border: '1px solid #e7e5e4', color: '#44403c', backgroundColor: '#faf9f7' }}>
                  {praticien.prestations.map((p) => (
                    <option key={p.nom}>{p.nom} — {p.duree} — {p.tarif}</option>
                  ))}
                </select>

                <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>
                  2. Choisissez un jour
                </label>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                  {Object.keys(praticien.agenda).map((jour) => (
                    <button
                      key={jour}
                      onClick={() => { setJourSelectionne(jour); setCreneauSelectionne('') }}
                      className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-medium transition"
                      style={{
                        backgroundColor: jour === jourSelectionne ? '#6b21a8' : '#faf9f7',
                        color: jour === jourSelectionne ? '#ffffff' : '#44403c',
                        border: '1px solid #e7e5e4',
                      }}
                    >
                      {jour}
                    </button>
                  ))}
                </div>

                <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>
                  3. Choisissez un créneau
                </label>
                {creneauxDuJour.length === 0 ? (
                  <p className="text-xs mb-4" style={{ color: '#d6d3d1' }}>Aucun créneau disponible ce jour</p>
                ) : (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {creneauxDuJour.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCreneauSelectionne(c)}
                        className="text-xs px-3 py-2 rounded-xl border transition"
                        style={{
                          borderColor: c === creneauSelectionne ? '#6b21a8' : '#e7e5e4',
                          color: c === creneauSelectionne ? '#6b21a8' : '#44403c',
                          backgroundColor: c === creneauSelectionne ? '#f5f3ff' : 'white',
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  className="w-full text-white py-3 rounded-2xl text-sm font-medium transition"
                  style={{ backgroundColor: creneauSelectionne ? '#6b21a8' : '#d8b4fe' }}
                >
                  {creneauSelectionne ? `Confirmer — ${jourSelectionne} à ${creneauSelectionne}` : 'Choisissez un créneau'}
                </button>
                <p className="text-xs text-center mt-2" style={{ color: '#a8a29e' }}>
                  Annulation gratuite jusqu'à 24h avant
                </p>
              </div>
            )}

            {/* MODE BON CADEAU */}
            {modePaiement === 'cadeau' && (
              <div className="p-6">
                <div className="rounded-2xl p-4 mb-5 text-center" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', border: '1px solid #ede9fe' }}>
                  <p className="text-3xl mb-2">🎁</p>
                  <p className="text-sm font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                    Offrez une consultation avec {praticien.nom}
                  </p>
                  <p className="text-xs" style={{ color: '#78716c' }}>
                    Un bon cadeau envoyé par email, valable 1 an
                  </p>
                </div>

                <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>
                  Choisissez une prestation à offrir
                </label>
                <div className="flex flex-col gap-2 mb-4">
                  {praticien.prestations.map((p) => (
                    <button
                      key={p.nom}
                      onClick={() => setMontantCadeau(parseInt(p.tarif))}
                      className="flex items-center justify-between p-3 rounded-xl text-left transition"
                      style={{
                        backgroundColor: montantCadeau === parseInt(p.tarif) ? '#f5f3ff' : '#faf9f7',
                        border: montantCadeau === parseInt(p.tarif) ? '1px solid #6b21a8' : '1px solid #e7e5e4',
                      }}
                    >
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{p.nom}</p>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>{p.duree}</p>
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#6b21a8' }}>{p.tarif}</span>
                    </button>
                  ))}
                </div>

                <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>
                  Message personnalisé (optionnel)
                </label>
                <textarea
                  placeholder="Écrivez un message pour accompagner votre cadeau..."
                  className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none mb-4"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '80px' }}
                />

                <button
                  className="w-full text-white py-3 rounded-2xl text-sm font-medium"
                  style={{ backgroundColor: '#6b21a8' }}
                >
                  Offrir ce bon cadeau — {montantCadeau}€
                </button>
                <p className="text-xs text-center mt-2" style={{ color: '#a8a29e' }}>
                  Envoyé par email · Valable 1 an · Remboursable si non utilisé
                </p>
              </div>
            )}
          </div>

          {/* CONTACTER */}
          <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-base font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
              Une question ?
            </h2>
            <p className="text-xs mb-3" style={{ color: '#a8a29e' }}>
              Échangez avec Sophie avant de vous engager
            </p>
            <textarea
              className="w-full text-sm rounded-xl p-3 resize-none outline-none"
              style={{ border: '1px solid #e7e5e4', color: '#44403c', height: '80px' }}
              placeholder="Bonjour Sophie, je souffre de..."
            />
            <button
              className="w-full py-3 rounded-2xl text-sm font-medium mt-3"
              style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
            >
              💬 Envoyer un message
            </button>
          </div>

        </div>
      </div>

    </main>
  )
}