'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

export default function EspacePatient() {
  const [onglet, setOnglet] = useState('rdv')
  const [dossierActif, setDossierActif] = useState<string | null>(null)
  const [nouvellNote, setNouvelleNote] = useState({ titre: '', contenu: '' })
  const [rdvOuvert, setRdvOuvert] = useState<string | null>(null)

  const rdvAVenir = [
    {
      date: 'Lundi 28 avril 2026',
      heure: '14h00',
      praticien: 'Sophie Laurent',
      specialite: 'Naturopathe',
      type: 'Bilan initial',
      duree: '1h30',
      mode: 'Cabinet',
      adresse: 'Paris 11ème',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
      lienVisio: '',
    },
    {
      date: 'Jeudi 8 mai 2026',
      heure: '11h00',
      praticien: 'Amélie Chen',
      specialite: 'Sophrologue',
      type: 'Séance individuelle',
      duree: '1h',
      mode: 'Visio',
      adresse: 'En ligne',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face',
      lienVisio: 'https://meet.google.com/abc-defg-hij',
    },
  ]

  const rdvPasses = [
    {
      date: 'Mardi 15 avril 2026',
      heure: '10h00',
      praticien: 'Marc Dubois',
      specialite: 'Ostéopathe',
      type: 'Consultation adulte',
      duree: '45min',
      mode: 'Cabinet',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
      avisLaisse: false,
      notesPraticien: {
        resume: 'Tension dans la zone lombaire droite et bassin légèrement désaxé. Travail sur le psoas droit et les fascias lombaires.',
        exercices: ['Étirement psoas droit matin et soir — 3 x 30 secondes', 'Marche 20 min par jour', 'Éviter la position assise prolongée plus de 45 min'],
        prochainRdv: 'Dans 6 semaines',
      },
    },
    {
      date: 'Vendredi 4 avril 2026',
      heure: '16h00',
      praticien: 'Sophie Laurent',
      specialite: 'Naturopathe',
      type: 'Consultation de suivi',
      duree: '45min',
      mode: 'Visio',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
      avisLaisse: true,
      notesPraticien: {
        resume: 'Amélioration notable des ballonnements. Microbiote en voie de rééquilibrage. Continuer le protocole probiotiques 4 semaines supplémentaires.',
        exercices: ['Continuer probiotiques matin à jeun', 'Ajouter L-glutamine 5g le soir', 'Réduire les légumineuses encore 2 semaines'],
        prochainRdv: 'Dans 1 mois',
      },
    },
  ]

  const praticiensFavoris = [
    {
      nom: 'Sophie Laurent',
      specialite: 'Naturopathe',
      ville: 'Paris',
      note: '4.9',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face',
    },
    {
      nom: 'Amélie Chen',
      specialite: 'Sophrologue',
      ville: 'Visio',
      note: '5.0',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&crop=face',
    },
  ]

  const dossiers = [
    {
      id: 'ballonnements',
      titre: 'Ballonnements chroniques',
      emoji: '🫃',
      couleur: '#f5f3ff',
      bordure: '#ede9fe',
      dateCreation: 'Mars 2026',
      rdvLies: ['Vendredi 4 avril 2026 — Sophie Laurent', 'Mars 2026 — Sophie Laurent (bilan initial)'],
      notes: ['Résumé consultation Sophie — troubles digestifs', 'Notes protocole probiotiques'],
    },
    {
      id: 'dos',
      titre: 'Douleurs lombaires',
      emoji: '🦴',
      couleur: '#eff6ff',
      bordure: '#bfdbfe',
      dateCreation: 'Avril 2026',
      rdvLies: ['Mardi 15 avril 2026 — Marc Dubois'],
      notes: ['Notes après ostéo avec Marc'],
    },
  ]

  const notesCarnet = [
    {
      date: '20 avril 2026',
      titre: 'Résumé consultation Sophie — troubles digestifs',
      contenu: 'Après analyse de mes symptômes, plusieurs pistes explorées : SIBO possible, intolérance au gluten à tester, manque de fibres solubles. Recommandations : probiotiques, réduction sucres raffinés, consultation naturopathe spécialisée.',
      type: 'ia',
      dossier: 'ballonnements',
    },
    {
      date: '15 avril 2026',
      titre: 'Notes après ostéo avec Marc',
      contenu: 'Séance très bien. Marc a travaillé sur le bassin et la zone lombaire droite. Me dit de faire des étirements psoas matin et soir. Prochain RDV dans 6 semaines.',
      type: 'note',
      dossier: 'dos',
    },
  ]

  const profils = [
    { nom: 'Marie Laurent', relation: 'Moi', actif: true },
    { nom: 'Théo Laurent', relation: 'Mon fils (8 ans)', actif: false },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      <div className="max-w-5xl mx-auto px-8 py-8">

        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Bonjour Marie 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>Votre espace personnel Holistia</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              {profils.map((p) => (
                <button
                  key={p.nom}
                  className="text-xs px-3 py-1 rounded-lg transition font-medium"
                  style={{
                    backgroundColor: p.actif ? '#6b21a8' : 'transparent',
                    color: p.actif ? '#ffffff' : '#6b21a8',
                  }}
                >
                  {p.relation}
                </button>
              ))}
            </div>
            <button
              className="text-white px-5 py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              + Prendre un RDV
            </button>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 mb-8 border-b" style={{ borderColor: '#e7e5e4' }}>
          {[
            { id: 'rdv', label: 'Mes RDV' },
            { id: 'dossiers', label: 'Mes dossiers' },
            { id: 'favoris', label: 'Mes praticiens' },
            { id: 'carnet', label: 'Carnet de bord' },
            { id: 'profil', label: 'Mon profil' },
          ].map((o) => (
            <button
              key={o.id}
              onClick={() => setOnglet(o.id)}
              className="px-4 py-3 text-sm font-medium transition border-b-2 -mb-px whitespace-nowrap"
              style={{
                color: onglet === o.id ? '#6b21a8' : '#a8a29e',
                borderBottomColor: onglet === o.id ? '#6b21a8' : 'transparent',
              }}
            >
              {o.label}
            </button>
          ))}
        </div>

        {/* ONGLET RDV */}
        {onglet === 'rdv' && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>À venir</h2>
              <div className="flex flex-col gap-4">
                {rdvAVenir.map((rdv) => (
                  <div key={rdv.date} className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                    <img src={rdv.photo} alt={rdv.praticien} className="w-14 h-14 rounded-2xl object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <p className="font-medium" style={{ color: '#1c1917' }}>{rdv.praticien}</p>
                          <p className="text-sm" style={{ color: '#6b21a8' }}>{rdv.specialite}</p>
                          <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>📅 {rdv.date} à {rdv.heure} · {rdv.duree}</p>
                          <p className="text-xs" style={{ color: '#a8a29e' }}>
                            {rdv.mode === 'Visio' ? '🖥 Visio' : `🏥 ${rdv.adresse}`}
                          </p>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>Confirmé</span>
                      </div>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {rdv.mode === 'Visio' && rdv.lienVisio && (
                          <button
                            onClick={() => window.open(rdv.lienVisio, '_blank')}
                            className="text-white text-xs px-4 py-2 rounded-xl"
                            style={{ backgroundColor: '#6b21a8' }}
                          >
                            🖥 Rejoindre la visio
                          </button>
                        )}
                        <button className="text-xs px-4 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>Annuler</button>
                        <button className="text-xs px-4 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>Reporter</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Passés</h2>
              <div className="flex flex-col gap-4">
                {rdvPasses.map((rdv) => (
                  <div key={rdv.date} className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: '1px solid #e7e5e4' }}>
                    <div
                      className="p-6 flex gap-4 items-start cursor-pointer hover:bg-gray-50 transition"
                      onClick={() => setRdvOuvert(rdvOuvert === rdv.date ? null : rdv.date)}
                    >
                      <img src={rdv.photo} alt={rdv.praticien} className="w-14 h-14 rounded-2xl object-cover flex-shrink-0" style={{ opacity: 0.85 }} />
                      <div className="flex-1">
                        <p className="font-medium" style={{ color: '#1c1917' }}>{rdv.praticien}</p>
                        <p className="text-sm" style={{ color: '#6b21a8' }}>{rdv.specialite}</p>
                        <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>📅 {rdv.date} à {rdv.heure} · {rdv.duree}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {rdv.avisLaisse ? (
                          <span className="text-xs" style={{ color: '#a8a29e' }}>✓ Avis laissé</span>
                        ) : (
                          <button className="text-xs px-3 py-1.5 rounded-xl" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                            Laisser un avis
                          </button>
                        )}
                        <span className="text-sm" style={{ color: '#a8a29e' }}>
                          {rdvOuvert === rdv.date ? '▲' : '▼'}
                        </span>
                      </div>
                    </div>
                    {rdvOuvert === rdv.date && rdv.notesPraticien && (
                      <div className="px-6 pb-6 pt-0" style={{ borderTop: '1px solid #f5f5f4' }}>
                        <div className="rounded-2xl p-5 mt-4" style={{ backgroundColor: '#faf9f7' }}>
                          <p className="text-xs font-medium mb-3" style={{ color: '#6b21a8' }}>
                            📋 Notes de {rdv.praticien}
                          </p>
                          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
                            {rdv.notesPraticien.resume}
                          </p>
                          <div className="mb-3">
                            <p className="text-xs font-medium mb-2" style={{ color: '#1c1917' }}>Exercices et recommandations :</p>
                            <div className="flex flex-col gap-1.5">
                              {rdv.notesPraticien.exercices.map((ex, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-xs mt-0.5" style={{ color: '#6b21a8' }}>→</span>
                                  <span className="text-xs leading-relaxed" style={{ color: '#57534e' }}>{ex}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs" style={{ color: '#a8a29e' }}>
                            Prochain RDV suggéré : <strong style={{ color: '#6b21a8' }}>{rdv.notesPraticien.prochainRdv}</strong>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ONGLET DOSSIERS */}
        {onglet === 'dossiers' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-sm" style={{ color: '#a8a29e' }}>Organisez votre parcours de soin par problématique</p>
              <button className="text-white text-sm px-4 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}>
                + Nouveau dossier
              </button>
            </div>
            <div className="rounded-2xl p-4 flex gap-3" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-lg">💡</span>
              <p className="text-xs" style={{ color: '#7c3aed' }}>
                Créez un dossier par problématique et glissez-y vos RDV passés, notes et résumés.
              </p>
            </div>
            {dossierActif === null ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dossiers.map((d) => (
                  <div
                    key={d.id}
                    className="rounded-3xl p-6 cursor-pointer hover:shadow-md transition"
                    style={{ backgroundColor: d.couleur, border: `1px solid ${d.bordure}` }}
                    onClick={() => setDossierActif(d.id)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{d.emoji}</span>
                      <div>
                        <h3 className="font-medium" style={{ color: '#1c1917' }}>{d.titre}</h3>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>Créé en {d.dateCreation}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs" style={{ color: '#78716c' }}>
                      <span>📅 {d.rdvLies.length} RDV</span>
                      <span>📝 {d.notes.length} notes</span>
                    </div>
                  </div>
                ))}
                <div
                  className="rounded-3xl p-6 cursor-pointer hover:shadow-md transition flex items-center justify-center gap-3 border-2 border-dashed"
                  style={{ borderColor: '#e7e5e4', minHeight: '140px' }}
                >
                  <span className="text-2xl">+</span>
                  <p className="text-sm font-medium" style={{ color: '#a8a29e' }}>Nouveau dossier</p>
                </div>
              </div>
            ) : (
              <div>
                {dossiers.filter(d => d.id === dossierActif).map((d) => (
                  <div key={d.id}>
                    <button onClick={() => setDossierActif(null)} className="flex items-center gap-2 text-sm mb-6" style={{ color: '#6b21a8' }}>
                      ← Retour aux dossiers
                    </button>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{d.emoji}</span>
                      <h2 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{d.titre}</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                        <h3 className="font-medium mb-3" style={{ color: '#1c1917' }}>RDV liés</h3>
                        <div className="flex flex-col gap-2">
                          {d.rdvLies.map((rdv, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: '#faf9f7' }}>
                              <span className="text-sm">📅</span>
                              <span className="text-sm" style={{ color: '#57534e' }}>{rdv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                        <h3 className="font-medium mb-3" style={{ color: '#1c1917' }}>Notes liées</h3>
                        <div className="flex flex-col gap-2">
                          {d.notes.map((note, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: '#faf9f7' }}>
                              <span className="text-sm">📝</span>
                              <span className="text-sm" style={{ color: '#57534e' }}>{note}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ONGLET FAVORIS */}
        {onglet === 'favoris' && (
          <div className="flex flex-col gap-4">
            <p className="text-sm" style={{ color: '#a8a29e' }}>Vos praticiens sauvegardés</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {praticiensFavoris.map((p) => (
                <div key={p.nom} className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <img src={p.photo} alt={p.nom} className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium" style={{ color: '#1c1917' }}>{p.nom}</p>
                    <p className="text-sm" style={{ color: '#6b21a8' }}>{p.specialite}</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>📍 {p.ville} · ⭐ {p.note}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="text-white text-xs px-4 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}
                      onClick={() => { window.location.href = '/praticien' }}>
                      Prendre RDV
                    </button>
                    <button className="text-xs px-4 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>Retirer</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ONGLET CARNET */}
        {onglet === 'carnet' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-sm" style={{ color: '#a8a29e' }}>Vos notes et résumés</p>
              <button className="text-white text-sm px-4 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}>+ Ajouter une note</button>
            </div>
            <div className="flex flex-col gap-4">
              {notesCarnet.map((note) => (
                <div key={note.titre} className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 rounded-full" style={{
                        backgroundColor: note.type === 'ia' ? '#eff6ff' : '#f0fdf4',
                        color: note.type === 'ia' ? '#3b82f6' : '#16a34a',
                      }}>
                        {note.type === 'ia' ? '🤖 Résumé IA' : '✍️ Ma note'}
                      </span>
                      <span className="text-xs" style={{ color: '#a8a29e' }}>{note.date}</span>
                    </div>
                  </div>
                  <h3 className="font-medium mb-2" style={{ color: '#1c1917' }}>{note.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{note.contenu}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '2px dashed #e7e5e4' }}>
              <p className="text-sm font-medium mb-3" style={{ color: '#1c1917' }}>Ajouter une note rapide</p>
              <input
                type="text"
                value={nouvellNote.titre}
                onChange={(e) => setNouvelleNote({ ...nouvellNote, titre: e.target.value })}
                placeholder="Titre..."
                className="w-full text-sm rounded-xl px-4 py-3 mb-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
              <textarea
                value={nouvellNote.contenu}
                onChange={(e) => setNouvelleNote({ ...nouvellNote, contenu: e.target.value })}
                placeholder="Collez votre résumé IA ou écrivez vos notes..."
                className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '100px' }}
              />
              <button className="mt-3 text-white text-sm px-6 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}>
                Sauvegarder
              </button>
            </div>
          </div>
        )}

        {/* ONGLET PROFIL */}
        {onglet === 'profil' && (
          <div className="flex flex-col gap-6">

            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Mes profils</h2>
              <div className="flex flex-col gap-3">
                {profils.map((p) => (
                  <div key={p.nom} className="flex items-center justify-between p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                        {p.nom[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{p.nom}</p>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>{p.relation}</p>
                      </div>
                    </div>
                    <button className="text-xs underline" style={{ color: '#6b21a8' }}>Modifier</button>
                  </div>
                ))}
                <button className="text-sm px-4 py-3 rounded-2xl border-2 border-dashed text-center" style={{ borderColor: '#e7e5e4', color: '#6b21a8' }}>
                  + Ajouter un profil enfant
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Informations personnelles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Prénom', value: 'Marie' },
                  { label: 'Nom', value: 'Laurent' },
                  { label: 'Email', value: 'marie.laurent@email.com' },
                  { label: 'Téléphone', value: '+33 6 00 00 00 00' },
                  { label: 'Pays', value: 'France' },
                  { label: 'Ville', value: 'Paris' },
                ].map((champ) => (
                  <div key={champ.label}>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>{champ.label}</label>
                    <input defaultValue={champ.value} className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                  </div>
                ))}
              </div>
              <button className="mt-4 text-white text-sm px-6 py-3 rounded-2xl" style={{ backgroundColor: '#6b21a8' }}>
                Sauvegarder les modifications
              </button>
            </div>

            {/* MA RÉPUTATION HOLISTIA */}
            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Ma réputation Holistia
              </h2>
              <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>
                Notes laissées par vos praticiens — visibles publiquement pour encourager le respect mutuel
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { label: 'Ponctualité', emoji: '⏰', note: 4.8, avis: 6 },
                  { label: 'Fiabilité RDV', emoji: '📅', note: 4.5, avis: 6 },
                ].map((crit) => (
                  <div key={crit.label} className="p-4 rounded-2xl text-center" style={{ backgroundColor: '#f5f3ff' }}>
                    <p className="text-2xl mb-1">{crit.emoji}</p>
                    <p className="text-xs font-medium mb-1" style={{ color: '#1c1917' }}>{crit.label}</p>
                    <p className="text-2xl font-light mb-0.5" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{crit.note}/5</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>Sur {crit.avis} consultations</p>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                <p className="text-xs" style={{ color: '#78716c' }}>
                  💙 Ces notes reflètent votre fiabilité en tant que patient et encouragent un respect mutuel entre patients et praticiens sur Holistia.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Préférences de notifications</h2>
              <div className="rounded-2xl p-4 mb-4" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
                <p className="text-xs font-medium mb-1" style={{ color: '#6b21a8' }}>💡 Rappels intelligents</p>
                <p className="text-xs" style={{ color: '#7c3aed' }}>
                  Holistia peut vous rappeler de consulter si vous n avez pas pris RDV depuis un moment — sans jamais vous pousser à la consommation.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Rappel de RDV 48h avant', actif: true },
                  { label: 'Rappel de RDV 2h avant', actif: true },
                  { label: 'Nouveaux messages d un praticien', actif: true },
                  { label: 'Rappel de suivi bienveillant', actif: true },
                  { label: 'Me rappeler de laisser un avis après chaque RDV', actif: false },
                ].map((notif) => (
                  <div key={notif.label} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#faf9f7' }}>
                    <span className="text-sm" style={{ color: '#57534e' }}>{notif.label}</span>
                    <div className="w-10 h-6 rounded-full flex items-center cursor-pointer" style={{ backgroundColor: notif.actif ? '#6b21a8' : '#e7e5e4' }}>
                      <div className="w-4 h-4 bg-white rounded-full shadow" style={{ marginLeft: notif.actif ? '20px' : '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  )
}