'use client'

import { useState } from 'react'

type OngletPrincipal = 'apercu' | 'praticiens' | 'patients' | 'rdv' | 'validation' | 'avis'

export default function Admin() {
  const [onglet, setOnglet] = useState<OngletPrincipal>('apercu')

  // -- DONNÉES FICTIVES REPRÉSENTATIVES --

  const kpiApercu = [
    { label: 'Praticiens actifs', value: '1 247', emoji: '👩‍⚕️', delta: '+12% ce mois', cible: 'praticiens' },
    { label: 'En attente validation', value: '8', emoji: '⏳', delta: '4 dossiers complets', cible: 'validation', alerte: true },
    { label: 'Patients inscrits', value: '4 832', emoji: '🙋', delta: '+18% ce mois', cible: 'patients' },
    { label: 'RDV ce mois', value: '2 341', emoji: '📅', delta: '+9% vs mois dernier', cible: 'rdv' },
    { label: 'Satisfaction patients', value: '4.8/5', emoji: '⭐', delta: 'Sur 1 243 avis', cible: 'avis' },
    { label: 'Satisfaction praticiens', value: '4.6/5', emoji: '🌟', delta: 'Sur 312 retours', cible: 'praticiens' },
  ]

  const praticiensenAttente = [
    { nom: 'Julie Moreau', specialite: 'Kinésiologue', ville: 'Lyon', date: 'Il y a 2h', documents: ['SIRET', 'Diplôme', 'Assurance'], status: 'complet' },
    { nom: 'Antoine Durand', specialite: 'Acupuncteur', ville: 'Bordeaux', date: 'Il y a 5h', documents: ['SIRET', 'Diplôme'], status: 'incomplet' },
    { nom: 'Claire Petit', specialite: 'Sophrologue', ville: 'Nantes', date: 'Hier', documents: ['SIRET', 'Diplôme', 'Assurance'], status: 'complet' },
    { nom: 'Marc Simon', specialite: 'Naturopathe', ville: 'Marseille', date: 'Hier', documents: ['SIRET'], status: 'incomplet' },
    { nom: 'Léa Bernard', specialite: 'Réflexologue', ville: 'Paris', date: 'Il y a 2 jours', documents: ['SIRET', 'Diplôme', 'Assurance'], status: 'complet' },
    { nom: 'Paul Martin', specialite: 'Ostéopathe', ville: 'Toulouse', date: 'Il y a 2 jours', documents: ['SIRET', 'Diplôme', 'Assurance'], status: 'complet' },
  ]

  const avisSignales = [
    { patient: 'Anonyme', praticien: 'Sophie Laurent', note: 1, texte: 'Contenu inapproprié signalé par le praticien...', date: 'Aujourd\'hui', raison: 'Contenu offensant' },
    { patient: 'Thomas B.', praticien: 'Marc Dubois', note: 2, texte: 'Avis qui semble faux ou non vérifié...', date: 'Hier', raison: 'Avis suspect' },
  ]

  const courbeInscrits = {
    praticiens: [42, 89, 156, 287, 445, 612, 789, 921, 1050, 1134, 1198, 1247],
    patients: [120, 310, 580, 980, 1420, 1890, 2340, 2980, 3540, 4020, 4430, 4832],
    mois: ['Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar', 'Avr'],
  }

  const repartitionGeo = [
    { pays: '🇫🇷 France', praticiens: 892, patients: 3241, pct: 72 },
    { pays: '🇧🇪 Belgique', praticiens: 124, patients: 456, pct: 10 },
    { pays: '🇨🇭 Suisse', praticiens: 98, patients: 387, pct: 8 },
    { pays: '🌍 Autres', praticiens: 133, patients: 748, pct: 10 },
  ]

  const repartitionSpecialite = [
    { label: 'Sophrologie', praticiens: 187, rdv: 423, satisfaction: 4.9 },
    { label: 'Naturopathie', praticiens: 156, rdv: 389, satisfaction: 4.8 },
    { label: 'Ostéopathie', praticiens: 143, rdv: 521, satisfaction: 4.7 },
    { label: 'Hypnothérapie', praticiens: 98, rdv: 234, satisfaction: 4.8 },
    { label: 'Kinésiologie', praticiens: 87, rdv: 198, satisfaction: 4.6 },
    { label: 'Acupuncture', praticiens: 76, rdv: 187, satisfaction: 4.7 },
    { label: 'Réflexologie', praticiens: 65, rdv: 145, satisfaction: 4.5 },
    { label: 'Thérapies brèves', praticiens: 58, rdv: 132, satisfaction: 4.9 },
  ]

  const repartitionPatients = [
    { label: 'Femmes 30-45 ans', pct: 38 },
    { label: 'Femmes 45-60 ans', pct: 19 },
    { label: 'Hommes 30-45 ans', pct: 17 },
    { label: 'Femmes -30 ans', pct: 11 },
    { label: 'Hommes -30 ans', pct: 8 },
    { label: 'Seniors +60 ans', pct: 7 },
  ]

  const entreePatients = [
    { label: 'Recherche directe praticien', pct: 58, emoji: '🔍' },
    { label: 'Outil orientation symptômes', pct: 32, emoji: '💬' },
    { label: 'Accès direct URL', pct: 10, emoji: '🔗' },
  ]

  const rdvParSemaine = [
    { semaine: 'S1', rdv: 489 },
    { semaine: 'S2', rdv: 612 },
    { semaine: 'S3', rdv: 534 },
    { semaine: 'S4', rdv: 706 },
  ]

  const rdvParSpecialite = [
    { label: 'Ostéopathie', rdv: 521, pct: 22 },
    { label: 'Sophrologie', rdv: 423, pct: 18 },
    { label: 'Naturopathie', rdv: 389, pct: 17 },
    { label: 'Hypnothérapie', rdv: 234, pct: 10 },
    { label: 'Kinésiologie', rdv: 198, pct: 8 },
    { label: 'Autres', rdv: 576, pct: 25 },
  ]

  const maxCourbe = Math.max(...courbeInscrits.patients)

  // -- COMPOSANTS RÉUTILISABLES --

  const Courbe = ({ data, color, max }: { data: number[], color: string, max: number }) => (
    <svg viewBox={`0 0 ${data.length * 60} 100`} className="w-full" style={{ height: '120px' }}>
      <polyline
        points={data.map((v, i) => `${i * 60 + 30},${100 - (v / max) * 90}`).join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {data.map((v, i) => (
        <circle
          key={i}
          cx={i * 60 + 30}
          cy={100 - (v / max) * 90}
          r="3"
          fill={color}
        />
      ))}
    </svg>
  )

  const BarreHorizontale = ({ label, value, max, color, extra }: { label: string, value: number, max: number, color: string, extra?: string }) => (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs" style={{ color: '#57534e' }}>{label}</span>
        <span className="text-xs font-medium" style={{ color }}>
          {value} {extra && <span style={{ color: '#a8a29e' }}>{extra}</span>}
        </span>
      </div>
      <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="h-full rounded-full transition-all" style={{ width: `${(value / max) * 100}%`, backgroundColor: color }} />
      </div>
    </div>
  )

  const OngletBtn = ({ id, label, alerte }: { id: OngletPrincipal, label: string, alerte?: boolean }) => (
    <button
      onClick={() => setOnglet(id)}
      className="px-4 py-3 text-sm font-medium transition border-b-2 -mb-px relative"
      style={{
        color: onglet === id ? '#6b21a8' : '#a8a29e',
        borderBottomColor: onglet === id ? '#6b21a8' : 'transparent',
      }}
    >
      {label}
      {alerte && (
        <span
          className="absolute top-2 right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#f59e0b' }}
        />
      )}
    </button>
  )

  const CardKpi = ({ label, value, emoji, delta, cible, alerte }: {
    label: string, value: string, emoji: string, delta: string, cible: OngletPrincipal, alerte?: boolean
  }) => (
    <button
      onClick={() => setOnglet(cible)}
      className="bg-white rounded-2xl p-5 shadow-sm text-left hover:shadow-md transition relative"
      style={{ border: `1px solid ${alerte ? '#fde68a' : '#e7e5e4'}` }}
    >
      {alerte && <div className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} />}
      <p className="text-xl mb-1">{emoji}</p>
      <p className="text-2xl font-light mb-0.5" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{value}</p>
      <p className="text-xs font-medium mb-1" style={{ color: '#1c1917' }}>{label}</p>
      <p className="text-xs" style={{ color: '#a8a29e' }}>{delta}</p>
    </button>
  )

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <button onClick={() => { window.location.href = '/' }} className="text-2xl font-semibold" style={{ color: '#6b21a8' }}>
          🌿 Holistia
        </button>
        <div className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
          Interface Admin
        </div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium text-white" style={{ backgroundColor: '#6b21a8' }}>A</div>
          <p className="text-sm font-medium" style={{ color: '#1c1917' }}>Anaïs</p>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-8">

        <div className="mb-8">
          <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Tableau de bord admin</h1>
          <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>Bienvenue Anaïs — jeudi 24 avril 2026</p>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-1 mb-8 border-b overflow-x-auto" style={{ borderColor: '#e7e5e4' }}>
          <OngletBtn id="apercu" label="Aperçu" />
          <OngletBtn id="praticiens" label="Praticiens" />
          <OngletBtn id="patients" label="Patients" />
          <OngletBtn id="rdv" label="RDV" />
          <OngletBtn id="validation" label={`Validation (${praticiensenAttente.length})`} alerte />
          <OngletBtn id="avis" label={`Avis signalés (${avisSignales.length})`} />
        </div>

        {/* ===== APERÇU ===== */}
        {onglet === 'apercu' && (
          <div className="flex flex-col gap-6">
            <p className="text-xs" style={{ color: '#a8a29e' }}>Cliquez sur une carte pour voir le détail</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {kpiApercu.map((k) => (
                <CardKpi key={k.label} label={k.label} value={k.value} emoji={k.emoji} delta={k.delta} cible={k.cible as OngletPrincipal} alerte={k.alerte} />
              ))}
            </div>

            {/* Courbes aperçu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Croissance praticiens</h2>
                <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>12 derniers mois</p>
                <Courbe data={courbeInscrits.praticiens} color="#6b21a8" max={Math.max(...courbeInscrits.praticiens)} />
                <div className="flex justify-between mt-1">
                  {courbeInscrits.mois.map((m) => (
                    <span key={m} className="text-xs" style={{ color: '#a8a29e' }}>{m}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Croissance patients</h2>
                <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>12 derniers mois</p>
                <Courbe data={courbeInscrits.patients} color="#a855f7" max={maxCourbe} />
                <div className="flex justify-between mt-1">
                  {courbeInscrits.mois.map((m) => (
                    <span key={m} className="text-xs" style={{ color: '#a8a29e' }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== PRATICIENS ===== */}
        {onglet === 'praticiens' && (
          <div className="flex flex-col gap-6">

            {/* KPIs praticiens */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Actifs', value: '1 247', emoji: '✅' },
                { label: 'Nouveaux ce mois', value: '+89', emoji: '🌱' },
                { label: 'En visio', value: '68%', emoji: '🖥' },
                { label: 'Satisfaction moy.', value: '4.6/5', emoji: '⭐' },
              ].map((k) => (
                <div key={k.label} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <p className="text-xl mb-1">{k.emoji}</p>
                  <p className="text-2xl font-light mb-0.5" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{k.value}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{k.label}</p>
                </div>
              ))}
            </div>

            {/* Courbe évolution + filtre */}
            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <div>
                  <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Évolution des inscriptions</h2>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>12 derniers mois</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['Toutes zones', 'France', 'Belgique', 'Suisse'].map((f) => (
                    <button
                      key={f}
                      className="text-xs px-3 py-1.5 rounded-xl border transition"
                      style={{ borderColor: f === 'Toutes zones' ? '#6b21a8' : '#e7e5e4', color: f === 'Toutes zones' ? '#6b21a8' : '#78716c', backgroundColor: f === 'Toutes zones' ? '#f5f3ff' : 'white' }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <Courbe data={courbeInscrits.praticiens} color="#6b21a8" max={Math.max(...courbeInscrits.praticiens)} />
              <div className="flex justify-between mt-1">
                {courbeInscrits.mois.map((m) => (
                  <span key={m} className="text-xs" style={{ color: '#a8a29e' }}>{m}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Répartition géo */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Répartition géographique</h2>
                <div className="flex flex-col gap-3">
                  {repartitionGeo.map((g) => (
                    <BarreHorizontale key={g.pays} label={g.pays} value={g.praticiens} max={892} color="#6b21a8" extra="praticiens" />
                  ))}
                </div>
              </div>

              {/* Répartition par spécialité */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Répartition par spécialité</h2>
                <div className="flex flex-col gap-3">
                  {repartitionSpecialite.map((s) => (
                    <BarreHorizontale key={s.label} label={s.label} value={s.praticiens} max={187} color="#a855f7" extra="praticiens" />
                  ))}
                </div>
              </div>

              {/* RDV par spécialité */}
              <div className="bg-white rounded-3xl p-6 shadow-sm lg:col-span-2" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>RDV et satisfaction par spécialité</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e7e5e4' }}>
                        {['Spécialité', 'Praticiens', 'RDV ce mois', 'RDV / praticien', 'Satisfaction'].map((h) => (
                          <th key={h} className="text-left py-3 px-2 text-xs font-medium" style={{ color: '#a8a29e' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {repartitionSpecialite.map((s) => (
                        <tr key={s.label} style={{ borderBottom: '1px solid #f5f5f4' }}>
                          <td className="py-3 px-2 font-medium" style={{ color: '#1c1917' }}>{s.label}</td>
                          <td className="py-3 px-2" style={{ color: '#57534e' }}>{s.praticiens}</td>
                          <td className="py-3 px-2" style={{ color: '#57534e' }}>{s.rdv}</td>
                          <td className="py-3 px-2" style={{ color: '#57534e' }}>{(s.rdv / s.praticiens).toFixed(1)}</td>
                          <td className="py-3 px-2">
                            <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                              ⭐ {s.satisfaction}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== PATIENTS ===== */}
        {onglet === 'patients' && (
          <div className="flex flex-col gap-6">

            {/* KPIs patients */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Inscrits', value: '4 832', emoji: '🙋' },
                { label: 'Nouveaux ce mois', value: '+423', emoji: '🌱' },
                { label: 'Utilisent orientation', value: '32%', emoji: '💬' },
                { label: 'Satisfaction moy.', value: '4.8/5', emoji: '⭐' },
              ].map((k) => (
                <div key={k.label} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <p className="text-xl mb-1">{k.emoji}</p>
                  <p className="text-2xl font-light mb-0.5" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{k.value}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{k.label}</p>
                </div>
              ))}
            </div>

            {/* Courbe évolution patients */}
            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <div>
                  <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Évolution des inscriptions</h2>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>12 derniers mois</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['Tous', 'France', 'Belgique', 'Suisse', 'Femmes', 'Hommes', '-30 ans', '30-45 ans', '+45 ans'].map((f) => (
                    <button
                      key={f}
                      className="text-xs px-3 py-1.5 rounded-xl border transition"
                      style={{ borderColor: f === 'Tous' ? '#6b21a8' : '#e7e5e4', color: f === 'Tous' ? '#6b21a8' : '#78716c', backgroundColor: f === 'Tous' ? '#f5f3ff' : 'white' }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <Courbe data={courbeInscrits.patients} color="#a855f7" max={maxCourbe} />
              <div className="flex justify-between mt-1">
                {courbeInscrits.mois.map((m) => (
                  <span key={m} className="text-xs" style={{ color: '#a8a29e' }}>{m}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Répartition géo */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Répartition géographique</h2>
                <div className="flex flex-col gap-3">
                  {repartitionGeo.map((g) => (
                    <BarreHorizontale key={g.pays} label={g.pays} value={g.patients} max={3241} color="#6b21a8" extra="patients" />
                  ))}
                </div>
              </div>

              {/* Profil patients */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Profil démographique</h2>
                <div className="flex flex-col gap-3">
                  {repartitionPatients.map((p) => (
                    <BarreHorizontale key={p.label} label={p.label} value={p.pct} max={100} color="#a855f7" extra="%" />
                  ))}
                </div>
              </div>

              {/* Entrée sur la plateforme */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Entrée sur la plateforme</h2>
                <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>Comment les patients arrivent</p>
                <div className="flex flex-col gap-4">
                  {entreePatients.map((e) => (
                    <div key={e.label}>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{e.emoji}</span>
                        <span className="text-xs" style={{ color: '#57534e' }}>{e.label}</span>
                        <span className="ml-auto text-sm font-medium" style={{ color: '#6b21a8' }}>{e.pct}%</span>
                      </div>
                      <div className="w-full h-3 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
                        <div className="h-full rounded-full" style={{ width: `${e.pct}%`, backgroundColor: '#6b21a8' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 p-3 rounded-xl"
                  style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}
                >
                  <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>
                    💡 32% utilisent l'orientation — objectif 50%
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ===== RDV ===== */}
        {onglet === 'rdv' && (
          <div className="flex flex-col gap-6">

            {/* KPIs RDV */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'RDV ce mois', value: '2 341', emoji: '📅' },
                { label: 'Taux annulation', value: '8%', emoji: '❌' },
                { label: 'En visio', value: '44%', emoji: '🖥' },
                { label: 'Délai moyen RDV', value: '3,2 jours', emoji: '⏱' },
              ].map((k) => (
                <div key={k.label} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <p className="text-xl mb-1">{k.emoji}</p>
                  <p className="text-2xl font-light mb-0.5" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{k.value}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{k.label}</p>
                </div>
              ))}
            </div>

            {/* RDV par semaine */}
            <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>RDV par semaine ce mois</h2>
              <div className="flex items-end gap-6 h-32 px-4">
                {rdvParSemaine.map((s) => (
                  <div key={s.semaine} className="flex-1 flex flex-col items-center gap-2">
                    <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>{s.rdv}</p>
                    <div className="w-full rounded-t-xl" style={{ height: `${(s.rdv / 706) * 96}px`, backgroundColor: '#6b21a8', opacity: s.semaine === 'S4' ? 1 : 0.5 }} />
                    <p className="text-xs" style={{ color: '#a8a29e' }}>{s.semaine}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* RDV par spécialité */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>RDV par spécialité</h2>
                <div className="flex flex-col gap-3">
                  {rdvParSpecialite.map((s) => (
                    <BarreHorizontale key={s.label} label={s.label} value={s.rdv} max={521} color="#6b21a8" extra={`(${s.pct}%)`} />
                  ))}
                </div>
              </div>

              {/* RDV par zone */}
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>RDV par zone géographique</h2>
                <div className="flex flex-col gap-3">
                  {repartitionGeo.map((g) => (
                    <div key={g.pays}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs" style={{ color: '#57534e' }}>{g.pays}</span>
                        <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>{g.pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
                        <div className="h-full rounded-full" style={{ width: `${g.pct}%`, backgroundColor: '#6b21a8' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid #e7e5e4' }}>
                  <div className="flex justify-between">
                    <span className="text-xs" style={{ color: '#a8a29e' }}>Cabinet vs Visio</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="flex-1 text-center p-3 rounded-xl" style={{ backgroundColor: '#faf9f7' }}>
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>56%</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>Cabinet</p>
                    </div>
                    <div className="flex-1 text-center p-3 rounded-xl" style={{ backgroundColor: '#f5f3ff' }}>
                      <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>44%</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>Visio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== VALIDATION ===== */}
        {onglet === 'validation' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-sm" style={{ color: '#a8a29e' }}>
                {praticiensenAttente.filter(p => p.status === 'complet').length} dossiers complets prêts à valider —{' '}
                {praticiensenAttente.filter(p => p.status === 'incomplet').length} dossiers incomplets
              </p>
            </div>
            {praticiensenAttente.map((p) => (
              <div
                key={p.nom}
                className="bg-white rounded-2xl p-6 shadow-sm"
                style={{ border: `1px solid ${p.status === 'complet' ? '#e7e5e4' : '#fde68a'}` }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium" style={{ color: '#1c1917' }}>{p.nom}</h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: p.status === 'complet' ? '#f0fdf4' : '#fffbeb', color: p.status === 'complet' ? '#16a34a' : '#92400e' }}
                      >
                        {p.status === 'complet' ? '✓ Dossier complet' : '⚠ Dossier incomplet'}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: '#6b21a8' }}>{p.specialite}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📍 {p.ville} · Inscrit {p.date}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {['SIRET', 'Diplôme', 'Assurance'].map((doc) => (
                        <span
                          key={doc}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{ backgroundColor: p.documents.includes(doc) ? '#f0fdf4' : '#fef2f2', color: p.documents.includes(doc) ? '#16a34a' : '#dc2626' }}
                        >
                          {p.documents.includes(doc) ? '✓' : '✗'} {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {p.status === 'complet' ? (
                      <>
                        <button className="text-white text-sm px-5 py-2 rounded-xl" style={{ backgroundColor: '#16a34a' }}>✓ Valider</button>
                        <button className="text-sm px-5 py-2 rounded-xl border" style={{ borderColor: '#dc2626', color: '#dc2626' }}>Refuser</button>
                      </>
                    ) : (
                      <button className="text-sm px-5 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>Relancer par email</button>
                    )}
                    <button className="text-sm px-5 py-2 rounded-xl" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>Voir le dossier</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== AVIS SIGNALÉS ===== */}
        {onglet === 'avis' && (
          <div className="flex flex-col gap-4">
            <p className="text-sm" style={{ color: '#a8a29e' }}>Avis signalés par des praticiens ou patients — à modérer</p>
            {avisSignales.map((avis) => (
              <div
                key={avis.patient + avis.date}
                className="bg-white rounded-2xl p-6 shadow-sm"
                style={{ border: '1px solid #fecaca' }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>🚩 {avis.raison}</span>
                      <span className="text-xs" style={{ color: '#a8a29e' }}>{avis.date}</span>
                    </div>
                    <p className="text-xs mb-1" style={{ color: '#a8a29e' }}>
                      Avis de <strong>{avis.patient}</strong> sur <strong>{avis.praticien}</strong>
                    </p>
                    <div className="flex gap-0.5 mb-2">
                      {[1,2,3,4,5].map((i) => <span key={i} className="text-xs">{i <= avis.note ? '⭐' : '☆'}</span>)}
                    </div>
                    <p className="text-sm" style={{ color: '#57534e' }}>{avis.texte}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="text-white text-sm px-5 py-2 rounded-xl" style={{ backgroundColor: '#dc2626' }}>Supprimer</button>
                    <button className="text-sm px-5 py-2 rounded-xl border" style={{ borderColor: '#e7e5e4', color: '#78716c' }}>Conserver</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}