'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [onglet, setOnglet] = useState('apercu')

  const stats = {
    rdvCeMois: 24,
    rdvEnAttente: 3,
    tauxOccupation: 78,
    revenus: 1680,
    vuesProfil: 142,
    nouveauxPatients: 8,
  }

  const prochainRdv = [
    { heure: '9h00', patient: 'Marie L.', type: 'Bilan initial', duree: '1h30', mode: 'Cabinet' },
    { heure: '11h00', patient: 'Julie R.', type: 'Suivi', duree: '45min', mode: 'Visio' },
    { heure: '14h00', patient: 'Thomas B.', type: 'Bilan initial', duree: '1h30', mode: 'Cabinet' },
    { heure: '16h00', patient: 'Sophie M.', type: 'Suivi', duree: '45min', mode: 'Visio' },
  ]

  const avisRecents = [
    { patient: 'Marie L.', note: 5, date: 'Aujourd\'hui', texte: 'Excellente consultation, très à l\'écoute.' },
    { patient: 'Thomas B.', note: 4, date: 'Hier', texte: 'Très bon bilan, protocole clair et progressif.' },
    { patient: 'Julie R.', note: 5, date: 'Il y a 3 jours', texte: 'Sophie est bienveillante et professionnelle.' },
  ]

  const rdvSemaine = [
    { jour: 'Lun', rdv: 4, max: 8 },
    { jour: 'Mar', rdv: 6, max: 8 },
    { jour: 'Mer', rdv: 0, max: 8 },
    { jour: 'Jeu', rdv: 5, max: 8 },
    { jour: 'Ven', rdv: 3, max: 8 },
    { jour: 'Sam', rdv: 2, max: 4 },
    { jour: 'Dim', rdv: 0, max: 0 },
  ]

  const patientsProfil = [
    { label: 'Femmes 30-45 ans', pct: 45 },
    { label: 'Hommes 30-45 ans', pct: 20 },
    { label: 'Femmes 45-60 ans', pct: 18 },
    { label: 'Moins de 30 ans', pct: 12 },
    { label: 'Plus de 60 ans', pct: 5 },
  ]

  const problematiquesPrincipales = [
    { label: 'Troubles digestifs', pct: 38 },
    { label: 'Fatigue chronique', pct: 27 },
    { label: 'Stress et anxiété', pct: 19 },
    { label: 'Déséquilibres hormonaux', pct: 16 },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <button
          onClick={() => { window.location.href = '/' }}
          className="text-2xl font-semibold"
          style={{ color: '#6b21a8' }}
        >
          🌿 Holistia
        </button>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face"
              alt="Sophie Laurent"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium" style={{ color: '#1c1917' }}>Sophie Laurent</p>
              <p className="text-xs" style={{ color: '#a8a29e' }}>Naturopathe · Paris</p>
            </div>
          </div>
          <button
            className="text-white text-sm px-4 py-2 rounded-full"
            style={{ backgroundColor: '#6b21a8' }}
            onClick={() => { window.location.href = '/praticien' }}
          >
            Voir mon profil
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* EN-TÊTE */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Bonjour Sophie 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>
              Voici votre tableau de bord — jeudi 24 avril 2026
            </p>
          </div>
          <button
            className="text-white px-5 py-3 rounded-2xl text-sm font-medium"
            style={{ backgroundColor: '#6b21a8' }}
          >
            + Bloquer un créneau
          </button>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 mb-8 border-b" style={{ borderColor: '#e7e5e4' }}>
          {[
            { id: 'apercu', label: 'Aperçu' },
            { id: 'agenda', label: 'Mon agenda' },
            { id: 'patients', label: 'Mes patients' },
            { id: 'stats', label: 'Statistiques' },
            { id: 'avis', label: 'Mes avis' },
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

        {/* ONGLET APERÇU */}
        {onglet === 'apercu' && (
          <div className="flex flex-col gap-6">

            {/* STATS RAPIDES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'RDV ce mois', value: stats.rdvCeMois, emoji: '📅', color: '#6b21a8' },
                { label: 'En attente', value: stats.rdvEnAttente, emoji: '⏳', color: '#f59e0b' },
                { label: 'Taux occupation', value: `${stats.tauxOccupation}%`, emoji: '📊', color: '#10b981' },
                { label: 'Revenus du mois', value: `${stats.revenus}€`, emoji: '💶', color: '#6b21a8' },
                { label: 'Vues du profil', value: stats.vuesProfil, emoji: '👁', color: '#3b82f6' },
                { label: 'Nouveaux patients', value: stats.nouveauxPatients, emoji: '🌱', color: '#10b981' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-5 shadow-sm"
                  style={{ border: '1px solid #e7e5e4' }}
                >
                  <p className="text-xl mb-1">{stat.emoji}</p>
                  <p className="text-2xl font-light mb-1" style={{ color: stat.color, fontFamily: 'var(--font-lora)' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* RDV DU JOUR */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                    RDV aujourd'hui
                  </h2>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                  >
                    {prochainRdv.length} RDV
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {prochainRdv.map((rdv) => (
                    <div
                      key={rdv.heure}
                      className="flex items-center gap-4 p-3 rounded-2xl"
                      style={{ backgroundColor: '#faf9f7' }}
                    >
                      <div
                        className="text-sm font-medium w-12 flex-shrink-0"
                        style={{ color: '#6b21a8' }}
                      >
                        {rdv.heure}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{rdv.patient}</p>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>{rdv.type} · {rdv.duree}</p>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: rdv.mode === 'Visio' ? '#eff6ff' : '#f0fdf4',
                          color: rdv.mode === 'Visio' ? '#3b82f6' : '#16a34a',
                        }}
                      >
                        {rdv.mode === 'Visio' ? '🖥 Visio' : '🏥 Cabinet'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTIVITÉ DE LA SEMAINE */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                  Activité de la semaine
                </h2>
                <div className="flex items-end gap-2 h-32">
                  {rdvSemaine.map((jour) => (
                    <div key={jour.jour} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col justify-end" style={{ height: '96px' }}>
                        <div
                          className="w-full rounded-t-lg transition-all"
                          style={{
                            height: jour.max > 0 ? `${(jour.rdv / jour.max) * 96}px` : '4px',
                            backgroundColor: jour.rdv > 0 ? '#6b21a8' : '#e7e5e4',
                            opacity: jour.jour === 'Jeu' ? 1 : 0.6,
                          }}
                        />
                      </div>
                      <p className="text-xs" style={{ color: jour.jour === 'Jeu' ? '#6b21a8' : '#a8a29e' }}>
                        {jour.jour}
                      </p>
                      <p className="text-xs font-medium" style={{ color: '#1c1917' }}>{jour.rdv}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3 text-center" style={{ color: '#a8a29e' }}>
                  20 RDV cette semaine · objectif 30
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* PROFIL PATIENT TYPE */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                  Profil de votre patientèle
                </h2>
                <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>
                  Basé sur vos 3 derniers mois
                </p>
                <div className="flex flex-col gap-3">
                  {patientsProfil.map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs" style={{ color: '#57534e' }}>{p.label}</span>
                        <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>{p.pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${p.pct}%`, backgroundColor: '#6b21a8' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PROBLÉMATIQUES */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                  Problématiques les plus traitées
                </h2>
                <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>
                  Comparer avec la moyenne des naturopathes sur Holistia
                </p>
                <div className="flex flex-col gap-3">
                  {problematiquesPrincipales.map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs" style={{ color: '#57534e' }}>{p.label}</span>
                        <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>{p.pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${p.pct}%`, backgroundColor: '#a855f7' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* AVIS RÉCENTS */}
            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                  Avis récents
                </h2>
                <button
                  className="text-xs underline"
                  style={{ color: '#6b21a8' }}
                  onClick={() => setOnglet('avis')}
                >
                  Voir tous mes avis
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {avisRecents.map((avis) => (
                  <div
                    key={avis.patient}
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: '#1c1917' }}>{avis.patient}</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i} className="text-xs">{i <= avis.note ? '⭐' : '☆'}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed mb-2" style={{ color: '#78716c' }}>{avis.texte}</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>{avis.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONSEIL HOLISTIA */}
            <div
              className="rounded-3xl p-6"
              style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  💡
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Conseil Holistia</p>
                  <p className="text-sm" style={{ color: '#e9d5ff' }}>
                    Votre profil reçoit 142 vues ce mois — c'est 23% de plus que le mois dernier. 
                    Ajoutez une vidéo de présentation pour augmenter votre taux de conversion de 40% en moyenne.
                  </p>
                  <button
                    className="mt-3 text-xs px-4 py-2 rounded-xl font-medium"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
                  >
                    Compléter mon profil
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ONGLET AGENDA */}
        {onglet === 'agenda' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                Mon agenda — Avril 2026
              </h2>
              <button
                className="text-white text-sm px-4 py-2 rounded-xl"
                style={{ backgroundColor: '#6b21a8' }}
              >
                Synchroniser Google Agenda
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((j) => (
                <div key={j} className="text-xs font-medium py-2" style={{ color: '#a8a29e' }}>{j}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((jour) => {
                const aRdv = [1, 3, 4, 7, 8, 10, 11, 14, 15, 17, 18, 21, 22, 24, 25, 28].includes(jour)
                const estAujourdhui = jour === 24
                return (
                  <div
                    key={jour}
                    className="aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer transition hover:shadow-sm"
                    style={{
                      backgroundColor: estAujourdhui ? '#6b21a8' : aRdv ? '#f5f3ff' : '#faf9f7',
                      border: `1px solid ${estAujourdhui ? '#6b21a8' : '#e7e5e4'}`,
                    }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: estAujourdhui ? '#ffffff' : '#1c1917' }}
                    >
                      {jour}
                    </span>
                    {aRdv && !estAujourdhui && (
                      <div className="w-1 h-1 rounded-full mt-0.5" style={{ backgroundColor: '#6b21a8' }} />
                    )}
                  </div>
                )
              })}
            </div>
            <p className="text-xs mt-4 text-center" style={{ color: '#a8a29e' }}>
              Les jours en violet clair ont des RDV planifiés · Le violet foncé = aujourd'hui
            </p>
          </div>
        )}

        {/* ONGLET PATIENTS */}
        {onglet === 'patients' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="font-medium mb-6" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Mes patients
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { nom: 'Marie L.', age: '38 ans', problematique: 'Troubles digestifs', dernierRdv: 'Aujourd\'hui', rdvTotal: 4, statut: 'Actif' },
                { nom: 'Julie R.', age: '42 ans', problematique: 'Fatigue chronique', dernierRdv: 'Il y a 2 semaines', rdvTotal: 7, statut: 'Actif' },
                { nom: 'Thomas B.', age: '35 ans', problematique: 'Stress et anxiété', dernierRdv: 'Il y a 1 mois', rdvTotal: 2, statut: 'Nouveau' },
                { nom: 'Sophie M.', age: '29 ans', problematique: 'PMA et fertilité', dernierRdv: 'Aujourd\'hui', rdvTotal: 3, statut: 'Actif' },
                { nom: 'Claire D.', age: '51 ans', problematique: 'Déséquilibres hormonaux', dernierRdv: 'Il y a 3 mois', rdvTotal: 12, statut: 'Fidèle' },
              ].map((patient) => (
                <div
                  key={patient.nom}
                  className="flex items-center justify-between p-4 rounded-2xl hover:shadow-sm transition cursor-pointer"
                  style={{ border: '1px solid #e7e5e4', backgroundColor: '#faf9f7' }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                      style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                    >
                      {patient.nom[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{patient.nom}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{patient.age} · {patient.problematique}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs" style={{ color: '#a8a29e' }}>Dernier RDV</p>
                      <p className="text-sm" style={{ color: '#57534e' }}>{patient.dernierRdv}</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs" style={{ color: '#a8a29e' }}>Total RDV</p>
                      <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>{patient.rdvTotal}</p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: patient.statut === 'Fidèle' ? '#f0fdf4' : patient.statut === 'Nouveau' ? '#eff6ff' : '#f5f3ff',
                        color: patient.statut === 'Fidèle' ? '#16a34a' : patient.statut === 'Nouveau' ? '#3b82f6' : '#6b21a8',
                      }}
                    >
                      {patient.statut}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ONGLET STATS */}
        {onglet === 'stats' && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                  Revenus mensuels
                </h2>
                <div className="flex items-end gap-2 h-32">
                  {[
                    { mois: 'Nov', val: 980 },
                    { mois: 'Déc', val: 720 },
                    { mois: 'Jan', val: 1200 },
                    { mois: 'Fév', val: 1450 },
                    { mois: 'Mar', val: 1380 },
                    { mois: 'Avr', val: 1680 },
                  ].map((m) => (
                    <div key={m.mois} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col justify-end" style={{ height: '96px' }}>
                        <div
                          className="w-full rounded-t-lg"
                          style={{
                            height: `${(m.val / 1680) * 96}px`,
                            backgroundColor: m.mois === 'Avr' ? '#6b21a8' : '#e9d5ff',
                          }}
                        />
                      </div>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{m.mois}</p>
                      <p className="text-xs font-medium" style={{ color: '#1c1917' }}>{m.val}€</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                  Comparaison avec les naturopathes Holistia
                </h2>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Note moyenne', vous: '4.9', moyenne: '4.6', mieux: true },
                    { label: 'RDV par mois', vous: '24', moyenne: '18', mieux: true },
                    { label: 'Taux occupation', vous: '78%', moyenne: '65%', mieux: true },
                    { label: 'Vues du profil', vous: '142', moyenne: '98', mieux: true },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#faf9f7' }}>
                      <span className="text-xs" style={{ color: '#57534e' }}>{stat.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: '#a8a29e' }}>Moy: {stat.moyenne}</span>
                        <span
                          className="text-sm font-medium px-2 py-0.5 rounded-lg"
                          style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}
                        >
                          Vous: {stat.vous} ↑
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ONGLET AVIS */}
        {onglet === 'avis' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-5xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>4.9</p>
                <div className="flex gap-0.5 justify-center my-1">
                  {[1,2,3,4,5].map((i) => <span key={i} className="text-lg">⭐</span>)}
                </div>
                <p className="text-xs" style={{ color: '#a8a29e' }}>47 avis vérifiés</p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                {[
                  { label: 'Ponctualité', note: 4.8 },
                  { label: 'Écoute', note: 5.0 },
                  { label: 'Clarté', note: 4.9 },
                  { label: 'Résultat perçu', note: 4.7 },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-xs w-24" style={{ color: '#57534e' }}>{c.label}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
                      <div className="h-full rounded-full" style={{ width: `${(c.note / 5) * 100}%`, backgroundColor: '#6b21a8' }} />
                    </div>
                    <span className="text-xs font-medium w-8" style={{ color: '#6b21a8' }}>{c.note}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {avisRecents.map((avis) => (
                <div key={avis.patient} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: '#1c1917' }}>{avis.patient}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((i) => <span key={i} className="text-xs">{i <= avis.note ? '⭐' : '☆'}</span>)}
                      </div>
                      <span className="text-xs" style={{ color: '#a8a29e' }}>{avis.date}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{avis.texte}</p>
                  <button className="text-xs mt-2 underline" style={{ color: '#6b21a8' }}>Répondre</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}