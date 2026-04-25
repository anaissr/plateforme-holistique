'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

export default function EspacePatient() {
  const [onglet, setOnglet] = useState('rdv')

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

  const notesCarnet = [
    {
      date: '20 avril 2026',
      titre: 'Résumé consultation Claude — troubles digestifs',
      contenu: 'Après analyse de mes symptômes, plusieurs pistes explorées : SIBO possible, intolérance au gluten à tester, manque de fibres solubles. Recommandations : probiotiques, réduction sucres raffinés, consultation naturopathe spécialisée.',
      type: 'ia',
    },
    {
      date: '15 avril 2026',
      titre: 'Notes après ostéo avec Marc',
      contenu: 'Séance très bien. Marc a travaillé sur le bassin et la zone lombaire droite. Me dit de faire des étirements psoas matin et soir. Prochain RDV dans 6 semaines.',
      type: 'note',
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

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Bonjour Marie 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>Votre espace personnel Holistia</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Sélecteur profils */}
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
            { id: 'favoris', label: 'Mes praticiens' },
            { id: 'carnet', label: 'Mon carnet de bord' },
            { id: 'profil', label: 'Mon profil' },
          ].map((o) => (
            <button
              key={o.id}
              onClick={() => setOnglet(o.id)}
              className="px-4 py-3 text-sm font-medium transition border-b-2 -mb-px"
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
                          <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>
                            📅 {rdv.date} à {rdv.heure} · {rdv.duree}
                          </p>
                          <p className="text-xs" style={{ color: '#a8a29e' }}>
                            {rdv.mode === 'Visio' ? '🖥 Visio' : `🏥 ${rdv.adresse}`}
                          </p>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                          Confirmé
                        </span>
                      </div>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {rdv.mode === 'Visio' && (
                          <button className="text-white text-xs px-4 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}>
                            Rejoindre la visio
                          </button>
                        )}
                        <button className="text-xs px-4 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>
                          Annuler
                        </button>
                        <button className="text-xs px-4 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>
                          Reporter
                        </button>
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
                  <div key={rdv.date} className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm" style={{ border: '1px solid #e7e5e4', opacity: 0.8 }}>
                    <img src={rdv.photo} alt={rdv.praticien} className="w-14 h-14 rounded-2xl object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium" style={{ color: '#1c1917' }}>{rdv.praticien}</p>
                      <p className="text-sm" style={{ color: '#6b21a8' }}>{rdv.specialite}</p>
                      <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>📅 {rdv.date} à {rdv.heure} · {rdv.duree}</p>
                      <div className="mt-3">
                        {rdv.avisLaisse ? (
                          <span className="text-xs" style={{ color: '#a8a29e' }}>✓ Avis laissé</span>
                        ) : (
                          <button className="text-xs px-4 py-2 rounded-xl" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                            Laisser un avis
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ONGLET FAVORIS */}
        {onglet === 'favoris' && (
          <div className="flex flex-col gap-4">
            <p className="text-sm" style={{ color: '#a8a29e' }}>
              Vos praticiens sauvegardés — retrouvez-les facilement pour reprendre RDV
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {praticiensFavoris.map((p) => (
                <div
                  key={p.nom}
                  className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition cursor-pointer"
                  style={{ border: '1px solid #e7e5e4' }}
                >
                  <img src={p.photo} alt={p.nom} className="w-16 h-16 rounded-2xl object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium" style={{ color: '#1c1917' }}>{p.nom}</p>
                    <p className="text-sm" style={{ color: '#6b21a8' }}>{p.specialite}</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>📍 {p.ville} · ⭐ {p.note}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      className="text-white text-xs px-4 py-2 rounded-xl"
                      style={{ backgroundColor: '#6b21a8' }}
                      onClick={() => { window.location.href = '/praticien' }}
                    >
                      Prendre RDV
                    </button>
                    <button className="text-xs px-4 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>
                      Retirer
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="text-white px-6 py-3 rounded-2xl text-sm font-medium mt-2 self-start"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Trouver de nouveaux praticiens
            </button>
          </div>
        )}

        {/* ONGLET CARNET */}
        {onglet === 'carnet' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-sm" style={{ color: '#a8a29e' }}>
                Vos notes et résumés — tout au même endroit pour suivre votre parcours de soin
              </p>
              <button className="text-white text-sm px-4 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}>
                + Ajouter une note
              </button>
            </div>

            <div className="rounded-2xl p-4 flex gap-3" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-lg">💡</span>
              <div>
                <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>Comment utiliser le carnet de bord ?</p>
                <p className="text-xs mt-0.5" style={{ color: '#7c3aed' }}>
                  Copiez-collez vos résumés de recherches IA (Claude, ChatGPT...), notez vos ressentis après chaque consultation, ou ajoutez des informations utiles pour vos praticiens.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {notesCarnet.map((note) => (
                <div key={note.titre} className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: note.type === 'ia' ? '#eff6ff' : '#f0fdf4',
                          color: note.type === 'ia' ? '#3b82f6' : '#16a34a',
                        }}
                      >
                        {note.type === 'ia' ? '🤖 Résumé IA' : '✍️ Ma note'}
                      </span>
                      <span className="text-xs" style={{ color: '#a8a29e' }}>{note.date}</span>
                    </div>
                    <button className="text-xs underline" style={{ color: '#a8a29e' }}>Modifier</button>
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
                placeholder="Titre de votre note..."
                className="w-full text-sm rounded-xl px-4 py-3 mb-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
              <textarea
                placeholder="Collez votre résumé IA ou écrivez vos notes ici..."
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

            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Préférences de notifications</h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Rappel de RDV 48h avant', actif: true },
                  { label: 'Rappel de RDV 2h avant', actif: true },
                  { label: 'Nouveaux messages d un praticien', actif: true },
                  { label: 'Demande d avis après consultation', actif: false },
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