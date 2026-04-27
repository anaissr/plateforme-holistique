'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
const [onglet, setOnglet] = useState('apercu')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ongletParam = params.get('onglet')
    if (ongletParam) setOnglet(ongletParam)
  }, [])
  const [recherchePat, setRecherchePat] = useState('')
  const [lienVisio, setLienVisio] = useState('')
  const [sauvegardeProfil, setSauvegardeProfil] = useState(false)
  const [notes, setNotes] = useState<Record<string, { ponctualite: number, fiabilite: number }>>({
    'Marie L.': { ponctualite: 5, fiabilite: 5 },
    'Julie R.': { ponctualite: 4, fiabilite: 5 },
    'Thomas B.': { ponctualite: 0, fiabilite: 0 },
    'Sophie M.': { ponctualite: 5, fiabilite: 4 },
    'Claire D.': { ponctualite: 5, fiabilite: 5 },
    'Emma P.': { ponctualite: 3, fiabilite: 4 },
    'Lucas M.': { ponctualite: 4, fiabilite: 3 },
  })

  const [profil, setProfil] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    specialite: '',
    bio: '',
    ecole: '',
    annee_diplome: '',
    assurance: '',
    tarif_bilan: '',
    tarif_suivi: '',
    tarif_visio: '',
    visio: false,
    cabinet: false,
  })

  const [chargementProfil, setChargementProfil] = useState(false)
  const [erreurProfil, setErreurProfil] = useState('')
  const [succesProfil, setSuccesProfil] = useState('')

  useEffect(() => {
    const chargerProfil = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('praticiens')
        .select('*')
        .eq('user_id', user.id)
        .single()
      if (data) {
        const nomParts = (data.nom || '').split(' ')
        setProfil({
          prenom: nomParts[0] || '',
          nom: nomParts.slice(1).join(' ') || '',
          email: data.email || '',
          telephone: data.telephone || '',
          ville: data.ville || '',
          pays: data.pays || '',
          specialite: data.specialite || '',
          bio: data.bio || '',
          ecole: data.ecole || '',
          annee_diplome: data.annee_diplome || '',
          assurance: data.assurance || '',
          tarif_bilan: data.tarif_bilan || '',
          tarif_suivi: data.tarif_suivi || '',
          tarif_visio: data.tarif_visio || '',
          visio: data.visio || false,
          cabinet: data.cabinet || false,
        })
        setLienVisio(data.lien_visio || '')
      }
    }
    chargerProfil()
  }, [])

  const sauvegarderProfil = async () => {
    setChargementProfil(true)
    setErreurProfil('')
    setSuccesProfil('')

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { error } = await supabase
      .from('praticiens')
      .update({
        nom: `${profil.prenom} ${profil.nom}`,
        telephone: profil.telephone,
        ville: profil.ville,
        pays: profil.pays,
        bio: profil.bio,
        ecole: profil.ecole,
        annee_diplome: profil.annee_diplome,
        assurance: profil.assurance,
        tarif_bilan: profil.tarif_bilan,
        tarif_suivi: profil.tarif_suivi,
        tarif_visio: profil.tarif_visio,
        visio: profil.visio,
        cabinet: profil.cabinet,
        lien_visio: lienVisio,
      })
      .eq('user_id', user.id)

    if (error) {
      setErreurProfil(error.message)
    } else {
      setSuccesProfil('Profil sauvegardé avec succès !')
      setSauvegardeProfil(true)
      setTimeout(() => setSauvegardeProfil(false), 3000)
    }
    setChargementProfil(false)
  }

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
    { patient: 'Marie L.', note: 5, date: "Aujourd'hui", texte: "Excellente consultation, très à l'écoute." },
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

  const tousPatients = [
    { nom: 'Marie L.', age: '38 ans', problematique: 'Troubles digestifs', dernierRdv: "Aujourd'hui", rdvTotal: 4, frequence: 'Mensuel', statut: 'Actif' },
    { nom: 'Julie R.', age: '42 ans', problematique: 'Fatigue chronique', dernierRdv: 'Il y a 2 semaines', rdvTotal: 7, frequence: 'Bimensuel', statut: 'Actif' },
    { nom: 'Thomas B.', age: '35 ans', problematique: 'Stress et anxiété', dernierRdv: 'Il y a 1 mois', rdvTotal: 2, frequence: 'Ponctuel', statut: 'Nouveau' },
    { nom: 'Sophie M.', age: '29 ans', problematique: 'PMA et fertilité', dernierRdv: "Aujourd'hui", rdvTotal: 3, frequence: 'Mensuel', statut: 'Actif' },
    { nom: 'Claire D.', age: '51 ans', problematique: 'Déséquilibres hormonaux', dernierRdv: 'Il y a 3 mois', rdvTotal: 12, frequence: 'Trimestriel', statut: 'Fidèle' },
    { nom: 'Emma P.', age: '33 ans', problematique: 'Troubles digestifs', dernierRdv: 'Il y a 3 semaines', rdvTotal: 5, frequence: 'Bimensuel', statut: 'Actif' },
    { nom: 'Lucas M.', age: '45 ans', problematique: 'Stress et anxiété', dernierRdv: 'Il y a 2 mois', rdvTotal: 3, frequence: 'Ponctuel', statut: 'Actif' },
  ]

  const frequenceData = [
    { label: 'Mensuel', nb: 12, pct: 48, color: '#6b21a8' },
    { label: 'Bimensuel', nb: 7, pct: 28, color: '#a855f7' },
    { label: 'Trimestriel', nb: 4, pct: 16, color: '#d8b4fe' },
    { label: 'Ponctuel', nb: 2, pct: 8, color: '#ede9fe' },
  ]

  const frequenceParProbleme = [
    { probleme: 'Troubles digestifs', mensuel: 60, bimensuel: 30, trimestriel: 10 },
    { probleme: 'Fatigue chronique', mensuel: 40, bimensuel: 45, trimestriel: 15 },
    { probleme: 'Stress et anxiété', mensuel: 30, bimensuel: 20, trimestriel: 50 },
    { probleme: 'Déséquilibres hormonaux', mensuel: 55, bimensuel: 35, trimestriel: 10 },
  ]

  const patientsFiltres = tousPatients.filter(p =>
    p.nom.toLowerCase().includes(recherchePat.toLowerCase()) ||
    p.problematique.toLowerCase().includes(recherchePat.toLowerCase())
  )

  const setNote = (nom: string, type: 'ponctualite' | 'fiabilite', val: number) => {
    setNotes(prev => ({
      ...prev,
      [nom]: { ...prev[nom], [type]: val }
    }))
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <div className="max-w-7xl mx-auto px-8 py-8">

        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Bonjour {profil.prenom || 'Sophie'} 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>
              Voici votre tableau de bord
            </p>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-sm">🖥</span>
              <input
                type="text"
                value={lienVisio}
                onChange={(e) => setLienVisio(e.target.value)}
                placeholder="Votre lien Zoom ou Meet..."
                className="text-sm outline-none bg-transparent"
                style={{ color: '#6b21a8', width: '200px' }}
              />
              {lienVisio && (
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>✓</span>
              )}
            </div>
            <button className="text-white px-5 py-3 rounded-2xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
              + Bloquer un créneau
            </button>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 mb-8 border-b overflow-x-auto" style={{ borderColor: '#e7e5e4' }}>
          {[
            { id: 'apercu', label: 'Aperçu' },
            { id: 'agenda', label: 'Mon agenda' },
            { id: 'patients', label: 'Mes patients' },
            { id: 'stats', label: 'Statistiques' },
            { id: 'avis', label: 'Mes avis' },
            { id: 'monprofil', label: '⚡ Mon profil' },
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

        {/* APERÇU */}
        {onglet === 'apercu' && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'RDV ce mois', value: stats.rdvCeMois, emoji: '📅', color: '#6b21a8' },
                { label: 'En attente', value: stats.rdvEnAttente, emoji: '⏳', color: '#f59e0b' },
                { label: 'Taux occupation', value: `${stats.tauxOccupation}%`, emoji: '📊', color: '#10b981' },
                { label: 'Revenus du mois', value: `${stats.revenus}€`, emoji: '💶', color: '#6b21a8' },
                { label: 'Vues du profil', value: stats.vuesProfil, emoji: '👁', color: '#3b82f6' },
                { label: 'Nouveaux patients', value: stats.nouveauxPatients, emoji: '🌱', color: '#10b981' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <p className="text-xl mb-1">{stat.emoji}</p>
                  <p className="text-2xl font-light mb-1" style={{ color: stat.color, fontFamily: 'var(--font-lora)' }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>RDV aujourd'hui</h2>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>{prochainRdv.length} RDV</span>
                </div>
                <div className="flex flex-col gap-3">
                  {prochainRdv.map((rdv) => (
                    <div key={rdv.heure} className="flex items-center gap-4 p-3 rounded-2xl" style={{ backgroundColor: '#faf9f7' }}>
                      <div className="text-sm font-medium w-12 flex-shrink-0" style={{ color: '#6b21a8' }}>{rdv.heure}</div>
                      <div className="flex-1">
                        <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{rdv.patient}</p>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>{rdv.type} · {rdv.duree}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full flex-shrink-0" style={{
                        backgroundColor: rdv.mode === 'Visio' ? '#eff6ff' : '#f0fdf4',
                        color: rdv.mode === 'Visio' ? '#3b82f6' : '#16a34a',
                      }}>
                        {rdv.mode === 'Visio' ? '🖥 Visio' : '🏥 Cabinet'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Activité de la semaine</h2>
                <div className="flex items-end gap-2 h-32">
                  {rdvSemaine.map((jour) => (
                    <div key={jour.jour} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col justify-end" style={{ height: '96px' }}>
                        <div className="w-full rounded-t-lg" style={{
                          height: jour.max > 0 ? `${(jour.rdv / jour.max) * 96}px` : '4px',
                          backgroundColor: jour.rdv > 0 ? '#6b21a8' : '#e7e5e4',
                          opacity: jour.jour === 'Jeu' ? 1 : 0.6,
                        }} />
                      </div>
                      <p className="text-xs" style={{ color: jour.jour === 'Jeu' ? '#6b21a8' : '#a8a29e' }}>{jour.jour}</p>
                      <p className="text-xs font-medium" style={{ color: '#1c1917' }}>{jour.rdv}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3 text-center" style={{ color: '#a8a29e' }}>20 RDV cette semaine · objectif 30</p>
              </div>
            </div>

            <div className="rounded-3xl p-6" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>💡</div>
                <div>
                  <p className="font-medium text-white mb-1">Conseil Holistia</p>
                  <p className="text-sm" style={{ color: '#e9d5ff' }}>
                    Complétez votre profil pour être visible par les patients — ajoutez votre photo, votre bio et vos diplômes.
                  </p>
                  <button
                    className="mt-3 text-xs px-4 py-2 rounded-xl font-medium"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
                    onClick={() => setOnglet('monprofil')}
                  >
                    Compléter mon profil →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AGENDA */}
        {onglet === 'agenda' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-medium" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Mon agenda — Avril 2026</h2>
              <button className="text-white text-sm px-4 py-2 rounded-xl" style={{ backgroundColor: '#6b21a8' }}>
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
                const aRdv = [1,3,4,7,8,10,11,14,15,17,18,21,22,24,25,28].includes(jour)
                const estAujourdhui = jour === 27
                return (
                  <div key={jour} className="aspect-square rounded-xl flex flex-col items-center justify-center cursor-pointer transition hover:shadow-sm"
                    style={{
                      backgroundColor: estAujourdhui ? '#6b21a8' : aRdv ? '#f5f3ff' : '#faf9f7',
                      border: `1px solid ${estAujourdhui ? '#6b21a8' : '#e7e5e4'}`,
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: estAujourdhui ? '#ffffff' : '#1c1917' }}>{jour}</span>
                    {aRdv && !estAujourdhui && <div className="w-1 h-1 rounded-full mt-0.5" style={{ backgroundColor: '#6b21a8' }} />}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* PATIENTS */}
        {onglet === 'patients' && (
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3" style={{ border: '1px solid #e7e5e4' }}>
              <span className="text-lg">🔍</span>
              <input
                type="text"
                value={recherchePat}
                onChange={(e) => setRecherchePat(e.target.value)}
                placeholder="Rechercher un patient par nom ou problématique..."
                className="flex-1 text-sm outline-none bg-transparent"
                style={{ color: '#1c1917' }}
              />
            </div>

            <div className="rounded-2xl p-4 flex gap-3" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span>💙</span>
              <p className="text-xs" style={{ color: '#7c3aed' }}>
                Notez vos patients sur leur ponctualité et fiabilité — ces notes sont publiques et encouragent le respect mutuel sur Holistia.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {patientsFiltres.map((patient) => (
                <div key={patient.nom} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                        {patient.nom[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{patient.nom}</p>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>{patient.age} · {patient.problematique}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>Dernier RDV : {patient.dernierRdv} · {patient.frequence}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 flex-wrap">
                      <div>
                        <p className="text-xs mb-1 text-center" style={{ color: '#a8a29e' }}>⏰ Ponctualité</p>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map((i) => (
                            <button key={i} onClick={() => setNote(patient.nom, 'ponctualite', i)} className="text-xl transition hover:scale-110" style={{ color: i <= (notes[patient.nom]?.ponctualite || 0) ? '#6b21a8' : '#e7e5e4' }}>★</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs mb-1 text-center" style={{ color: '#a8a29e' }}>📅 Fiabilité RDV</p>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map((i) => (
                            <button key={i} onClick={() => setNote(patient.nom, 'fiabilite', i)} className="text-xl transition hover:scale-110" style={{ color: i <= (notes[patient.nom]?.fiabilite || 0) ? '#6b21a8' : '#e7e5e4' }}>★</button>
                          ))}
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full" style={{
                        backgroundColor: patient.statut === 'Fidèle' ? '#f0fdf4' : patient.statut === 'Nouveau' ? '#eff6ff' : '#f5f3ff',
                        color: patient.statut === 'Fidèle' ? '#16a34a' : patient.statut === 'Nouveau' ? '#3b82f6' : '#6b21a8',
                      }}>
                        {patient.statut}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STATS */}
        {onglet === 'stats' && (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Revenus mensuels</h2>
                <div className="flex items-end gap-2 h-32">
                  {[
                    { mois: 'Nov', val: 980 }, { mois: 'Déc', val: 720 }, { mois: 'Jan', val: 1200 },
                    { mois: 'Fév', val: 1450 }, { mois: 'Mar', val: 1380 }, { mois: 'Avr', val: 1680 },
                  ].map((m) => (
                    <div key={m.mois} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col justify-end" style={{ height: '96px' }}>
                        <div className="w-full rounded-t-lg" style={{ height: `${(m.val / 1680) * 96}px`, backgroundColor: m.mois === 'Avr' ? '#6b21a8' : '#e9d5ff' }} />
                      </div>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{m.mois}</p>
                      <p className="text-xs font-medium" style={{ color: '#1c1917' }}>{m.val}€</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h2 className="font-medium mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Fréquence de consultation</h2>
                <div className="flex flex-col gap-3">
                  {frequenceData.map((f) => (
                    <div key={f.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs" style={{ color: '#57534e' }}>{f.label}</span>
                        <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>{f.nb} patients ({f.pct}%)</span>
                      </div>
                      <div className="w-full h-3 rounded-full" style={{ backgroundColor: '#f5f3ff' }}>
                        <div className="h-full rounded-full" style={{ width: `${f.pct}%`, backgroundColor: f.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AVIS */}
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
            </div>
            <div className="flex flex-col gap-4">
              {avisRecents.map((avis) => (
                <div key={avis.patient} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: '#1c1917' }}>{avis.patient}</span>
                    <span className="text-xs" style={{ color: '#a8a29e' }}>{avis.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{avis.texte}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MON PROFIL */}
        {onglet === 'monprofil' && (
          <div className="flex flex-col gap-6">

            {/* Bandeau statut */}
            <div className="rounded-2xl p-4 flex gap-3 items-center" style={{ backgroundColor: '#fef9c3', border: '1px solid #fde047' }}>
              <span className="text-xl">⏳</span>
              <div>
                <p className="text-sm font-medium" style={{ color: '#854d0e' }}>Profil en attente de validation</p>
                <p className="text-xs" style={{ color: '#92400e' }}>Complétez toutes les informations ci-dessous — notre équipe validera votre dossier sous 48h.</p>
              </div>
            </div>

            {erreurProfil && (
              <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
                ⚠️ {erreurProfil}
              </div>
            )}
            {succesProfil && (
              <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                ✅ {succesProfil}
              </div>
            )}

            {/* Infos de base */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Prénom', champ: 'prenom' },
                  { label: 'Nom', champ: 'nom' },
                  { label: 'Téléphone', champ: 'telephone' },
                  { label: 'Ville', champ: 'ville' },
                  { label: 'Pays', champ: 'pays' },
                ].map((f) => (
                  <div key={f.champ}>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>{f.label}</label>
                    <input
                      type="text"
                      value={profil[f.champ as keyof typeof profil] as string}
                      onChange={(e) => setProfil(prev => ({ ...prev, [f.champ]: e.target.value }))}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Présentation
              </h2>
              <textarea
                value={profil.bio}
                onChange={(e) => setProfil(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Décrivez votre approche, votre parcours et ce qui vous anime dans votre pratique..."
                className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '140px' }}
              />
            </div>

            {/* Formation */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Formation et diplôme
              </h2>
              <p className="text-xs mb-6" style={{ color: '#a8a29e' }}>
                Ces informations seront vérifiées par notre équipe avant validation de votre profil.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>École / Organisme de formation</label>
                  <input
                    type="text"
                    value={profil.ecole}
                    onChange={(e) => setProfil(prev => ({ ...prev, ecole: e.target.value }))}
                    placeholder="Ex: Sophronesis, ISUPNAT, A180°..."
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Année d'obtention du diplôme</label>
                  <input
                    type="text"
                    value={profil.annee_diplome}
                    onChange={(e) => setProfil(prev => ({ ...prev, annee_diplome: e.target.value }))}
                    placeholder="Ex: 2019"
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Numéro ou référence assurance RC Pro</label>
                  <input
                    type="text"
                    value={profil.assurance}
                    onChange={(e) => setProfil(prev => ({ ...prev, assurance: e.target.value }))}
                    placeholder="Numéro de police d'assurance"
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>
              </div>
            </div>

            {/* Tarifs */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Tarifs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Bilan initial', champ: 'tarif_bilan', placeholder: 'Ex: 110€' },
                  { label: 'Consultation suivi', champ: 'tarif_suivi', placeholder: 'Ex: 70€' },
                  { label: 'Consultation visio', champ: 'tarif_visio', placeholder: 'Ex: 65€' },
                ].map((f) => (
                  <div key={f.champ}>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>{f.label}</label>
                    <input
                      type="text"
                      value={profil[f.champ as keyof typeof profil] as string}
                      onChange={(e) => setProfil(prev => ({ ...prev, [f.champ]: e.target.value }))}
                      placeholder={f.placeholder}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton sauvegarde */}
            <button
              onClick={sauvegarderProfil}
              disabled={chargementProfil}
              className="w-full text-white py-4 rounded-2xl font-medium text-sm"
              style={{ backgroundColor: chargementProfil ? '#a855f7' : '#6b21a8' }}
            >
              {chargementProfil ? 'Sauvegarde en cours...' : '💾 Sauvegarder mon profil'}
            </button>

          </div>
        )}

      </div>
    </main>
  )
}