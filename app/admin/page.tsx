'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Admin() {
  const [onglet, setOnglet] = useState('dossiers')
  const [praticiens, setPraticiens] = useState<any[]>([])
  const [chargement, setChargement] = useState(true)
  const [dossierOuvert, setDossierOuvert] = useState<string | null>(null)
  const [motifRefus, setMotifRefus] = useState('')
  const [recherche, setRecherche] = useState('')

  useEffect(() => {
    chargerPraticiens()
  }, [])

  const chargerPraticiens = async () => {
    setChargement(true)
    const { data } = await supabase
      .from('praticiens')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setPraticiens(data)
    setChargement(false)
  }

  const validerPraticien = async (praticien: any) => {
    const { error } = await supabase
      .from('praticiens')
      .update({ valide: true, actif: true })
      .eq('id', praticien.id)

    if (!error) {
      // Email de validation au praticien
      await fetch('/api/email-validation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: praticien.nom,
          email: praticien.email,
          accepte: true,
          motif: '',
        }),
      })
      chargerPraticiens()
      setDossierOuvert(null)
    }
  }

  const refuserPraticien = async (praticien: any) => {
    if (!motifRefus) {
      alert('Veuillez indiquer un motif de refus.')
      return
    }
    const { error } = await supabase
      .from('praticiens')
      .update({ valide: false, actif: false })
      .eq('id', praticien.id)

    if (!error) {
      await fetch('/api/email-validation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: praticien.nom,
          email: praticien.email,
          accepte: false,
          motif: motifRefus,
        }),
      })
      chargerPraticiens()
      setDossierOuvert(null)
      setMotifRefus('')
    }
  }

  const praticiensFiltres = praticiens.filter(p =>
    p.nom?.toLowerCase().includes(recherche.toLowerCase()) ||
    p.specialite?.toLowerCase().includes(recherche.toLowerCase()) ||
    p.email?.toLowerCase().includes(recherche.toLowerCase())
  )

  const enAttente = praticiens.filter(p => p.valide === false || p.valide === null)
  const valides = praticiens.filter(p => p.valide === true)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <div className="max-w-6xl mx-auto px-8 py-8">

        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Dashboard Admin 🌿
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>
              {enAttente.length} dossier{enAttente.length > 1 ? 's' : ''} en attente · {valides.length} praticien{valides.length > 1 ? 's' : ''} validé{valides.length > 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={chargerPraticiens}
            className="text-sm px-4 py-2 rounded-xl"
            style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
          >
            🔄 Rafraîchir
          </button>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 mb-8 border-b" style={{ borderColor: '#e7e5e4' }}>
          {[
            { id: 'dossiers', label: `📋 En attente (${enAttente.length})` },
            { id: 'valides', label: `✅ Validés (${valides.length})` },
            { id: 'tous', label: `👥 Tous (${praticiens.length})` },
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

        {/* RECHERCHE */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 mb-6" style={{ border: '1px solid #e7e5e4' }}>
          <span>🔍</span>
          <input
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher par nom, spécialité ou email..."
            className="flex-1 text-sm outline-none bg-transparent"
            style={{ color: '#1c1917' }}
          />
        </div>

        {chargement ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🌿</p>
            <p className="text-sm" style={{ color: '#a8a29e' }}>Chargement...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {praticiensFiltres
              .filter(p => {
                if (onglet === 'dossiers') return p.valide === false || p.valide === null
                if (onglet === 'valides') return p.valide === true
                return true
              })
              .map((praticien) => (
                <div key={praticien.id} className="bg-white rounded-3xl shadow-sm overflow-hidden" style={{ border: '1px solid #e7e5e4' }}>

                  {/* EN-TÊTE PRATICIEN */}
                  <div
                    className="p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => setDossierOuvert(dossierOuvert === praticien.id ? null : praticien.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                        {praticien.nom?.[0] || '?'}
                      </div>
                      <div>
                        <p className="font-medium" style={{ color: '#1c1917' }}>{praticien.nom || '—'}</p>
                        <p className="text-sm" style={{ color: '#6b21a8' }}>{praticien.specialite || '—'}</p>
                        <p className="text-xs" style={{ color: '#a8a29e' }}>{praticien.email} · {praticien.ville}, {praticien.pays}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{
                        backgroundColor: praticien.valide === true ? '#f0fdf4' : '#fef9c3',
                        color: praticien.valide === true ? '#16a34a' : '#854d0e',
                      }}>
                        {praticien.valide === true ? '✅ Validé' : '⏳ En attente'}
                      </span>
                      <span style={{ color: '#a8a29e' }}>{dossierOuvert === praticien.id ? '▲' : '▼'}</span>
                    </div>
                  </div>

                  {/* DÉTAIL DOSSIER */}
                  {dossierOuvert === praticien.id && (
                    <div className="px-6 pb-6" style={{ borderTop: '1px solid #f5f5f4' }}>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">

                        {/* Infos générales */}
                        <div>
                          <p className="text-xs font-medium mb-3" style={{ color: '#6b21a8' }}>Informations</p>
                          <div className="flex flex-col gap-2">
                            {[
                              { label: 'Téléphone', value: praticien.telephone },
                              { label: 'Mode', value: `${praticien.cabinet ? '🏥 Cabinet' : ''} ${praticien.visio ? '🖥 Visio' : ''}` },
                              { label: 'Inscription', value: praticien.created_at ? new Date(praticien.created_at).toLocaleDateString('fr-FR') : '—' },
                            ].map((item) => (
                              <div key={item.label} className="flex gap-2">
                                <span className="text-xs font-medium w-24 flex-shrink-0" style={{ color: '#78716c' }}>{item.label} :</span>
                                <span className="text-xs" style={{ color: '#1c1917' }}>{item.value || '—'}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Assurance */}
                        <div>
                          <p className="text-xs font-medium mb-3" style={{ color: '#6b21a8' }}>Assurance RC Pro</p>
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                              <span className="text-xs font-medium w-24 flex-shrink-0" style={{ color: '#78716c' }}>Assureur :</span>
                              <span className="text-xs" style={{ color: praticien.assureur ? '#1c1917' : '#dc2626' }}>{praticien.assureur || '⚠️ Non renseigné'}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-xs font-medium w-24 flex-shrink-0" style={{ color: '#78716c' }}>N° police :</span>
                              <span className="text-xs" style={{ color: praticien.assurance ? '#1c1917' : '#dc2626' }}>{praticien.assurance || '⚠️ Non renseigné'}</span>
                            </div>
                          </div>
                        </div>

                        {/* Diplômes */}
                        <div className="sm:col-span-2">
                          <p className="text-xs font-medium mb-3" style={{ color: '#6b21a8' }}>Formations et diplômes</p>
                          {praticien.diplomes && praticien.diplomes.length > 0 ? (
                            <div className="flex flex-col gap-2">
                              {praticien.diplomes.map((d: any, i: number) => (
                                <div key={i} className="flex gap-4 p-3 rounded-xl" style={{ backgroundColor: '#faf9f7' }}>
                                  <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>#{i + 1}</span>
                                  <span className="text-xs" style={{ color: '#1c1917' }}>{d.titre} — {d.ecole} ({d.annee})</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs" style={{ color: '#dc2626' }}>⚠️ Aucun diplôme renseigné</p>
                          )}
                        </div>

                        {/* Tarifs */}
                        <div className="sm:col-span-2">
                          <p className="text-xs font-medium mb-3" style={{ color: '#6b21a8' }}>Prestations et tarifs</p>
                          {praticien.tarifs && praticien.tarifs.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {praticien.tarifs.map((t: any, i: number) => (
                                <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                                  {t.label} · {t.duree} · {t.prix}€
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p className="text-xs" style={{ color: '#dc2626' }}>⚠️ Aucun tarif renseigné</p>
                          )}
                        </div>

                        {/* Bio */}
                        {praticien.bio && (
                          <div className="sm:col-span-2">
                            <p className="text-xs font-medium mb-2" style={{ color: '#6b21a8' }}>Présentation</p>
                            <p className="text-xs leading-relaxed" style={{ color: '#57534e' }}>{praticien.bio}</p>
                          </div>
                        )}
                      </div>

                      {/* ACTIONS VALIDATION */}
                      {praticien.valide !== true && (
                        <div className="mt-6 pt-6" style={{ borderTop: '1px solid #f5f5f4' }}>
                          <p className="text-xs font-medium mb-4" style={{ color: '#6b21a8' }}>Décision de validation</p>
                          <div className="flex flex-col gap-3">
                            <button
                              onClick={() => validerPraticien(praticien)}
                              className="text-white px-6 py-3 rounded-2xl text-sm font-medium self-start"
                              style={{ backgroundColor: '#16a34a' }}
                            >
                              ✅ Valider ce praticien
                            </button>
                            <div className="flex gap-3 items-start">
                              <input
                                type="text"
                                value={motifRefus}
                                onChange={(e) => setMotifRefus(e.target.value)}
                                placeholder="Motif du refus (ex: diplôme non reconnu, assurance expirée...)"
                                className="flex-1 text-sm rounded-xl px-4 py-3 outline-none"
                                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                              />
                              <button
                                onClick={() => refuserPraticien(praticien)}
                                className="text-white px-6 py-3 rounded-2xl text-sm font-medium flex-shrink-0"
                                style={{ backgroundColor: '#dc2626' }}
                              >
                                ❌ Refuser
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {praticien.valide === true && (
                        <div className="mt-6 pt-6 flex gap-3" style={{ borderTop: '1px solid #f5f5f4' }}>
                          <button
                            onClick={async () => {
                              await supabase.from('praticiens').update({ valide: false, actif: false }).eq('id', praticien.id)
                              chargerPraticiens()
                            }}
                            className="text-sm px-4 py-2 rounded-xl"
                            style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}
                          >
                            Suspendre ce praticien
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

            {praticiensFiltres.filter(p => {
              if (onglet === 'dossiers') return p.valide === false || p.valide === null
              if (onglet === 'valides') return p.valide === true
              return true
            }).length === 0 && (
              <div className="text-center py-16">
                <p className="text-4xl mb-4">🌿</p>
                <p className="text-sm" style={{ color: '#a8a29e' }}>
                  {onglet === 'dossiers' ? 'Aucun dossier en attente' : 'Aucun praticien trouvé'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}