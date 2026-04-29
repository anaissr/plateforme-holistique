'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type Prestation = {
  nom: string
  duree: string
  tarif: string
  tarif_num: number
  description: string
}

type AvisClient = {
  prenom: string
  date: string
  note: number
  ponctualite: number
  ecoute: number
  clarte: number
  texte: string
}

type Praticien = {
  id: number
  nom: string
  photo: string
  specialite: string
  ville: string
  visio: boolean
  note: number
  avis: number
  description: string
  prestations: Prestation[]
  public: string[]
  specialites: string[]
  formations: { titre: string; ecole: string; annee: string }[]
  agenda: Record<string, string[]>
  avisClients: AvisClient[]
}

export default function FichePraticien() {
  const params = useParams<{ id: string }>()

  const [praticien, setPraticien] = useState<Praticien | null>(null)
  const [chargement, setChargement] = useState(true)
  const [introuvable, setIntrouvable] = useState(false)

  const [jourSelectionne, setJourSelectionne] = useState('')
  const [creneauSelectionne, setCreneauSelectionne] = useState('')
  const [prestationSelectionnee, setPrestationSelectionnee] = useState(0)
  const [modePaiement, setModePaiement] = useState<'rdv' | 'cadeau'>('rdv')
  const [montantCadeau, setMontantCadeau] = useState(0)
  const [chargementRdv, setChargementRdv] = useState(false)
  const [succesRdv, setSuccesRdv] = useState('')
  const [erreurRdv, setErreurRdv] = useState('')
  const [messagePatient, setMessagePatient] = useState('')
  const [messageContact, setMessageContact] = useState('')
  const [modaleCadeauOuverte, setModaleCadeauOuverte] = useState(false)
  const [succesEnvoiCadeau, setSuccesEnvoiCadeau] = useState(false)
  const [chargementCadeau, setChargementCadeau] = useState(false)
  const [nomAcheteur, setNomAcheteur] = useState('')
  const [emailAcheteur, setEmailAcheteur] = useState('')
  const [nomDestinataire, setNomDestinataire] = useState('')
  const [emailDestinataire, setEmailDestinataire] = useState('')
  const [messageCadeauDestinataire, setMessageCadeauDestinataire] = useState('')
  const [messageCadeauPraticien, setMessageCadeauPraticien] = useState('')

  useEffect(() => {
    const charger = async () => {
      const { data, error } = await supabase
        .from('praticiens')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error || !data) {
        setIntrouvable(true)
        setChargement(false)
        return
      }

      const { data: avisData } = await supabase
        .from('avis')
        .select('*')
        .eq('praticien_id', params.id)

      const avisClients: AvisClient[] = (avisData || []).map((a: Record<string, unknown>) => ({
        prenom: (a.prenom as string) || '',
        date: (a.date as string) || '',
        note: (a.note as number) || 0,
        ponctualite: (a.ponctualite as number) || 0,
        ecoute: (a.ecoute as number) || 0,
        clarte: (a.clarte as number) || 0,
        texte: (a.texte as string) || '',
      }))

      const noteMoyenne =
        avisClients.length > 0
          ? Math.round((avisClients.reduce((sum, a) => sum + a.note, 0) / avisClients.length) * 10) / 10
          : 0

      const prestations: Prestation[] = ((data.tarifs as { label: string; duree: string; prix: string }[]) || []).map(
        (t) => {
          const prixNum = parseFloat(String(t.prix).replace(/[^0-9.]/g, '')) || 0
          return {
            nom: t.label,
            duree: t.duree,
            tarif: prixNum > 0 ? `${prixNum}€` : 'Sur devis',
            tarif_num: prixNum,
            description: '',
          }
        }
      )

      const agenda = (data.disponibilites as Record<string, string[]>) || {}
      const premierJour = Object.keys(agenda)[0] || ''

      setPraticien({
        id: data.id as number,
        nom: (data.nom as string) || '',
        photo: (data.photo as string) || '',
        specialite: (data.specialite as string) || '',
        ville: (data.ville as string) || '',
        visio: (data.visio as boolean) || false,
        note: noteMoyenne,
        avis: avisClients.length,
        description: (data.bio as string) || '',
        prestations,
        public: (data.public_cible as string[]) || [],
        specialites: (data.specialites as string[]) || [],
        formations: (data.diplomes as { titre: string; ecole: string; annee: string }[]) || [],
        agenda,
        avisClients,
      })

      setJourSelectionne(premierJour)
      setMontantCadeau(prestations[0]?.tarif_num || 0)
      setChargement(false)
    }

    if (params.id) charger()
  }, [params.id])

  const creneauxDuJour = praticien?.agenda[jourSelectionne] || []
  const prestation = praticien?.prestations[prestationSelectionnee]

  const prendreRdv = async () => {
    if (!creneauSelectionne || !praticien || !prestation) return
    setChargementRdv(true)
    setErreurRdv('')

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setErreurRdv('Vous devez être connecté pour prendre un rendez-vous.')
      setChargementRdv(false)
      return
    }

    const { error } = await supabase
      .from('rendez-vous')
      .insert({
        praticien_id: praticien.id,
        patient_id: user.id,
        date: jourSelectionne,
        heure: creneauSelectionne,
        duree: prestation.duree,
        mode: prestation.nom.toLowerCase().includes('visio') ? 'Visio' : 'Cabinet',
        statut: 'en_attente',
        prestation: prestation.nom,
        tarif: prestation.tarif_num,
        notes_praticien: messagePatient,
      })

    if (error) {
      setErreurRdv(`Erreur : ${error.message}`)
      setChargementRdv(false)
      return
    }

    await fetch('/api/email-rdv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'confirmation_patient',
        praticien: praticien.nom,
        prestation: prestation.nom,
        date: jourSelectionne,
        heure: creneauSelectionne,
        tarif: prestation.tarif,
      }),
    })

    setSuccesRdv(`RDV confirmé — ${jourSelectionne} à ${creneauSelectionne} avec ${praticien.nom}`)
    setChargementRdv(false)
  }

  const prestatoinCadeau = praticien?.prestations.find(p => p.tarif_num === montantCadeau) ?? praticien?.prestations[0]

  const envoyerCadeau = async () => {
    if (!nomAcheteur || !emailAcheteur || !nomDestinataire || !emailDestinataire || !praticien) return
    setChargementCadeau(true)
    await fetch('/api/email-rdv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'bon_cadeau',
        praticien: praticien.nom,
        prestation: prestatoinCadeau?.nom ?? '',
        tarif: prestatoinCadeau?.tarif ?? '',
        nomAcheteur,
        emailAcheteur,
        nomDestinataire,
        emailDestinataire,
        messageCadeauDestinataire,
        messageCadeauPraticien,
      }),
    })
    setSuccesEnvoiCadeau(true)
    setChargementCadeau(false)
  }

  const reinitialiserCadeau = () => {
    setModaleCadeauOuverte(false)
    setSuccesEnvoiCadeau(false)
    setNomAcheteur('')
    setEmailAcheteur('')
    setNomDestinataire('')
    setEmailDestinataire('')
    setMessageCadeauDestinataire('')
    setMessageCadeauPraticien('')
  }

  if (chargement) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
        <Nav />
        <div className="flex items-center justify-center h-96">
          <p className="text-sm" style={{ color: '#a8a29e' }}>Chargement du profil...</p>
        </div>
      </main>
    )
  }

  if (introuvable || !praticien) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
        <Nav />
        <div className="flex flex-col items-center justify-center h-96 gap-3">
          <p className="text-lg font-medium" style={{ color: '#1c1917' }}>Profil introuvable</p>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Ce praticien n&apos;existe pas ou n&apos;est plus disponible.</p>
          <button
            className="mt-2 text-sm px-5 py-2 rounded-xl"
            style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Retour à la recherche
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* MODALE BON CADEAU */}
      {modaleCadeauOuverte && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => { if (!succesEnvoiCadeau) reinitialiserCadeau() }}
        >
          <div
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl overflow-y-auto"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {succesEnvoiCadeau ? (
              <div className="text-center py-4">
                <p className="text-4xl mb-4">🎁</p>
                <p className="text-lg font-medium mb-2" style={{ color: '#16a34a', fontFamily: 'var(--font-lora)' }}>Demande envoyée !</p>
                <p className="text-sm mb-2" style={{ color: '#57534e' }}>
                  Un récapitulatif vous a été envoyé par email. {praticien.nom} va vous contacter rapidement pour finaliser le paiement.
                </p>
                <button
                  onClick={reinitialiserCadeau}
                  className="mt-4 text-sm px-6 py-2.5 rounded-xl"
                  style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-4xl mb-3">🎁</p>
                  <h2 className="text-xl font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>Offrir une consultation</h2>
                  <p className="text-sm" style={{ color: '#a8a29e' }}>avec {praticien.nom}</p>
                </div>

                {prestatoinCadeau && (
                  <div className="rounded-2xl p-4 mb-5" style={{ backgroundColor: '#f5f3ff' }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{prestatoinCadeau.nom}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#78716c' }}>{prestatoinCadeau.duree}</p>
                      </div>
                      <p className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{prestatoinCadeau.tarif}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-4 mb-6">
                  <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>Vos informations</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre prénom et nom *</label>
                      <input type="text" value={nomAcheteur} onChange={(e) => setNomAcheteur(e.target.value)} placeholder="Jean Martin" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre email *</label>
                      <input type="email" value={emailAcheteur} onChange={(e) => setEmailAcheteur(e.target.value)} placeholder="jean@email.com" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                  </div>

                  <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>Informations du destinataire</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prénom et nom *</label>
                      <input type="text" value={nomDestinataire} onChange={(e) => setNomDestinataire(e.target.value)} placeholder="Marie Dupont" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email *</label>
                      <input type="email" value={emailDestinataire} onChange={(e) => setEmailDestinataire(e.target.value)} placeholder="marie@email.com" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre message pour {nomDestinataire || 'le destinataire'} (optionnel)</label>
                    <textarea value={messageCadeauDestinataire} onChange={(e) => setMessageCadeauDestinataire(e.target.value)} placeholder="Je pense que cette consultation te ferait du bien..." className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '70px' }} />
                  </div>

                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Message pour {praticien.nom.split(' ')[0]} (optionnel)</label>
                    <textarea value={messageCadeauPraticien} onChange={(e) => setMessageCadeauPraticien(e.target.value)} placeholder="Bonjour, je souhaite offrir une consultation à..." className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '70px' }} />
                  </div>
                </div>

                <button
                  onClick={envoyerCadeau}
                  disabled={!nomAcheteur || !emailAcheteur || !nomDestinataire || !emailDestinataire || chargementCadeau}
                  className="w-full text-white py-3 rounded-2xl text-sm font-medium mb-3"
                  style={{ backgroundColor: nomAcheteur && emailAcheteur && nomDestinataire && emailDestinataire ? '#6b21a8' : '#d8b4fe' }}
                >
                  {chargementCadeau ? 'Envoi en cours...' : `Envoyer ma demande — ${prestatoinCadeau?.tarif ?? '—'}`}
                </button>
                <p className="text-xs text-center mb-4" style={{ color: '#a8a29e' }}>
                  {praticien.nom} vous contactera rapidement pour finaliser le paiement.
                </p>
                <button onClick={reinitialiserCadeau} className="w-full py-2 text-sm" style={{ color: '#a8a29e' }}>
                  Annuler
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="w-full px-12 py-12" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="max-w-7xl mx-auto flex gap-10 items-center">
          {praticien.photo ? (
            <img src={praticien.photo} alt={praticien.nom} className="w-40 h-40 rounded-3xl object-cover object-top flex-shrink-0 shadow-xl" />
          ) : (
            <div className="w-40 h-40 rounded-3xl flex-shrink-0 shadow-xl flex items-center justify-center text-5xl" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
              🌿
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h1 className="text-3xl font-medium text-white" style={{ fontFamily: 'var(--font-lora)' }}>{praticien.nom}</h1>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>✓ Profil vérifié</span>
            </div>
            <p className="text-lg mb-2" style={{ color: '#e9d5ff' }}>{praticien.specialite}</p>
            <p className="text-sm mb-4" style={{ color: '#c4b5fd' }}>📍 {praticien.ville} {praticien.visio && '· 🖥 Visio disponible'}</p>
            <div className="flex items-center gap-6 flex-wrap">
              {praticien.avis > 0 && (
                <div className="flex items-center gap-2">
                  <span>⭐</span>
                  <span className="font-medium text-white">{praticien.note}/5</span>
                  <span className="text-sm" style={{ color: '#c4b5fd' }}>({praticien.avis} avis)</span>
                </div>
              )}
              {praticien.public.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {praticien.public.map((p) => (
                    <span key={p} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>{p}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button className="px-8 py-3 rounded-2xl font-medium text-sm" style={{ backgroundColor: '#ffffff', color: '#6b21a8' }} onClick={() => setModePaiement('rdv')}>
              Prendre RDV
            </button>
            <button className="px-8 py-3 rounded-2xl font-medium text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}>
              💬 Contacter
            </button>
            <button className="px-8 py-3 rounded-2xl font-medium text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => setModePaiement('cadeau')}>
              🎁 Offrir en bon cadeau
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* COLONNE GAUCHE */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {praticien.description && (
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>À propos</h2>
              {praticien.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: '#57534e' }}>{para}</p>
              ))}
            </div>
          )}

          {praticien.prestations.length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Prestations et tarifs</h2>
              <div className="flex flex-col gap-3">
                {praticien.prestations.map((p, i) => (
                  <div
                    key={p.nom}
                    className="flex items-center justify-between p-4 rounded-2xl cursor-pointer transition"
                    style={{
                      backgroundColor: prestationSelectionnee === i ? '#f5f3ff' : '#faf9f7',
                      border: prestationSelectionnee === i ? '1px solid #6b21a8' : '1px solid #e7e5e4',
                    }}
                    onClick={() => setPrestationSelectionnee(i)}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{p.nom}</p>
                      {p.description && <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>{p.description}</p>}
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>{p.tarif}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{p.duree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {praticien.specialites.length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Spécialités</h2>
              <div className="flex flex-wrap gap-2">
                {praticien.specialites.map((s) => (
                  <span key={s} className="text-sm px-4 py-2 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {praticien.formations.length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="text-lg font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Formations et diplômes vérifiés</h2>
              <div className="flex flex-col gap-4">
                {praticien.formations.map((f) => (
                  <div key={f.titre} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ backgroundColor: '#f5f3ff' }}>🎓</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{f.titre}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{f.ecole} · {f.annee}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>✓ Vérifié</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Avis patients</h2>
              {praticien.avis > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-light" style={{ color: '#6b21a8' }}>{praticien.note}</span>
                  <div>
                    <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => <span key={i} className="text-sm">{i <= Math.round(praticien.note) ? '⭐' : '☆'}</span>)}</div>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>{praticien.avis} avis vérifiés</p>
                  </div>
                </div>
              )}
            </div>
            {praticien.avisClients.length === 0 ? (
              <p className="text-sm" style={{ color: '#a8a29e' }}>Aucun avis pour le moment.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {praticien.avisClients.map((avis, i) => (
                  <div key={i} className="pb-6" style={{ borderBottom: '1px solid #f5f5f4' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-sm font-medium" style={{ color: '#1c1917' }}>{avis.prenom}</span>
                        <span className="text-xs ml-2" style={{ color: '#a8a29e' }}>{avis.date}</span>
                      </div>
                      <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => <span key={i} className="text-xs">{i <= avis.note ? '⭐' : '☆'}</span>)}</div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{avis.texte}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* COLONNE DROITE */}
        <div className="flex flex-col gap-4">

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden" style={{ border: '1px solid #e7e5e4' }}>

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
                {succesRdv ? (
                  <div className="text-center py-4">
                    <p className="text-3xl mb-3">🎉</p>
                    <p className="text-sm font-medium mb-1" style={{ color: '#16a34a' }}>{succesRdv}</p>
                    <p className="text-xs" style={{ color: '#a8a29e' }}>Un email de confirmation vous a été envoyé</p>
                    <button
                      className="mt-4 text-sm px-4 py-2 rounded-xl"
                      style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                      onClick={() => { window.location.href = '/patient' }}
                    >
                      Voir mes RDV →
                    </button>
                  </div>
                ) : (
                  <>
                    {erreurRdv && <div className="mb-4 p-3 rounded-xl text-xs" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>{erreurRdv}</div>}

                    {prestation && (
                      <>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>1. Prestation sélectionnée</label>
                        <div className="p-3 rounded-xl mb-4" style={{ backgroundColor: '#f5f3ff' }}>
                          <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>{prestation.nom}</p>
                          <p className="text-xs" style={{ color: '#7c3aed' }}>{prestation.duree} · {prestation.tarif}</p>
                        </div>
                      </>
                    )}

                    {Object.keys(praticien.agenda).length === 0 ? (
                      <p className="text-sm mb-4" style={{ color: '#a8a29e' }}>Aucune disponibilité renseignée pour le moment.</p>
                    ) : (
                      <>
                        <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>2. Choisissez un jour</label>
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

                        <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>3. Choisissez un créneau</label>
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
                      </>
                    )}

                    <div className="mb-4">
                      <label className="text-xs font-medium block mb-1" style={{ color: '#a8a29e' }}>{Object.keys(praticien.agenda).length > 0 ? '4.' : '2.'} Message pour le praticien (optionnel)</label>
                      <textarea
                        value={messagePatient}
                        onChange={(e) => setMessagePatient(e.target.value)}
                        placeholder="Décrivez brièvement votre situation pour que le praticien puisse se préparer..."
                        className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none"
                        style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '80px' }}
                      />
                    </div>

                    <button
                      onClick={prendreRdv}
                      disabled={!creneauSelectionne || chargementRdv}
                      className="w-full text-white py-3 rounded-2xl text-sm font-medium transition"
                      style={{ backgroundColor: creneauSelectionne ? '#6b21a8' : '#d8b4fe' }}
                    >
                      {chargementRdv ? 'Confirmation...' : creneauSelectionne ? `Confirmer — ${jourSelectionne} à ${creneauSelectionne}` : 'Choisissez un créneau'}
                    </button>
                    <p className="text-xs text-center mt-2" style={{ color: '#a8a29e' }}>Annulation gratuite jusqu&apos;à 24h avant</p>
                  </>
                )}
              </div>
            )}

            {/* MODE BON CADEAU */}
            {modePaiement === 'cadeau' && (
              <div className="p-6">
                <div className="rounded-2xl p-4 mb-5 text-center" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', border: '1px solid #ede9fe' }}>
                  <p className="text-3xl mb-2">🎁</p>
                  <p className="text-sm font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Offrez une consultation avec {praticien.nom}</p>
                  <p className="text-xs" style={{ color: '#78716c' }}>Un bon cadeau envoyé par email, valable 1 an</p>
                </div>
                <label className="text-xs font-medium block mb-2" style={{ color: '#a8a29e' }}>Choisissez une prestation</label>
                <div className="flex flex-col gap-2 mb-4">
                  {praticien.prestations.map((p) => (
                    <button
                      key={p.nom}
                      onClick={() => setMontantCadeau(p.tarif_num)}
                      className="flex items-center justify-between p-3 rounded-xl text-left transition"
                      style={{
                        backgroundColor: montantCadeau === p.tarif_num ? '#f5f3ff' : '#faf9f7',
                        border: montantCadeau === p.tarif_num ? '1px solid #6b21a8' : '1px solid #e7e5e4',
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
                <button
                  className="w-full text-white py-3 rounded-2xl text-sm font-medium"
                  style={{ backgroundColor: '#6b21a8' }}
                  onClick={() => setModaleCadeauOuverte(true)}
                >
                  Offrir ce bon cadeau — {montantCadeau > 0 ? `${montantCadeau}€` : '—'}
                </button>
                <p className="text-xs text-center mt-2" style={{ color: '#a8a29e' }}>Envoyé par email · Valable 1 an · Remboursable si non utilisé</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-base font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Une question ?</h2>
            <p className="text-xs mb-3" style={{ color: '#a8a29e' }}>Échangez avec {praticien.nom.split(' ')[0]} avant de vous engager</p>
            <textarea
              value={messageContact}
              onChange={(e) => setMessageContact(e.target.value)}
              className="w-full text-sm rounded-xl p-3 resize-none outline-none"
              style={{ border: '1px solid #e7e5e4', color: '#44403c', height: '80px' }}
              placeholder={`Bonjour ${praticien.nom.split(' ')[0]}, je souffre de...`}
            />
            <button className="w-full py-3 rounded-2xl text-sm font-medium mt-3" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
              💬 Envoyer un message
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
