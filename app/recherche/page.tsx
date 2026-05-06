'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type PraticienUI = {
  id: number
  nom: string
  photo: string
  specialite: string
  ville: string
  visio: boolean
  note: number
  avis: number
  tarif_depuis: string
  description: string
  public: string[]
  problematiques: string[]
  prestations: { nom: string; duree: string; tarif: string }[]
  ateliers: boolean
  creneaux: string[]
}

function formaterDuree(duree: string): string {
  if (/^\d+$/.test(duree.trim())) return `${duree.trim()} min`
  return duree
}

const JOURS_R = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const JOURS_COURTS_R = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const MOIS_R = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc']

function prochainsCréneaux(agenda: Record<string, string[]>, n: number): string[] {
  const result: string[] = []
  const auj = new Date()
  for (let i = 0; i < 14 && result.length < n; i++) {
    const d = new Date(auj)
    d.setDate(auj.getDate() + i)
    const slots = agenda[JOURS_R[d.getDay()]] || []
    for (const slot of slots) {
      if (result.length >= n) break
      result.push(`${JOURS_COURTS_R[d.getDay()]} ${d.getDate()} ${MOIS_R[d.getMonth()]} ${slot}`)
    }
  }
  return result
}

const problematiquesListe = [
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

function mapPraticien(p: Record<string, unknown>): PraticienUI {
  const tarifs = (p.tarifs as { label: string; duree: string; prix: string }[]) || []
  const prix = tarifs
    .map(t => parseFloat(String(t.prix).replace(/[^0-9.]/g, '')))
    .filter(n => n > 0)
  const tarifMin = prix.length > 0 ? Math.min(...prix) : 0

  const ville = (p.ville as string) || ''
  const pays = (p.pays as string) || ''
  const cabinet = (p.cabinet as boolean) || false
  const visio = (p.visio as boolean) || false
  const villeBase = [ville, pays].filter(Boolean).join(', ')
  const villeDisplay = !cabinet && visio
    ? 'Visio uniquement'
    : visio
    ? `${villeBase} — aussi en visio`
    : villeBase

  return {
    id: p.id as number,
    nom: (p.nom as string) || '',
    photo: (p.photo as string) || '',
    specialite: (p.specialite as string) || '',
    ville: villeDisplay,
    visio,
    note: (p.note_moyenne as number) || 0,
    avis: (p.nb_avis as number) || 0,
    tarif_depuis: tarifMin > 0 ? `${tarifMin}€` : '—',
    description: (p.bio as string) || '',
    public: (p.public_cible as string[]) || [],
    problematiques: (p.specialites as string[]) || [],
    prestations: tarifs.slice(0, 3).map(t => ({
      nom: t.label,
      duree: t.duree,
      tarif: parseFloat(String(t.prix)) > 0 ? `${t.prix}€` : 'Sur devis',
    })),
    ateliers: !!(p.propose_ateliers),
    creneaux: prochainsCréneaux((p.disponibilites as Record<string, string[]>) || {}, 1),
  }
}

export default function Recherche() {
  const [praticiens, setPraticiens] = useState<PraticienUI[]>([])
  const [chargement, setChargement] = useState(true)

  const [problematiquesSelectionnees, setProblematiquesSelectionnees] = useState<string[]>([])
  const [specialite, setSpecialite] = useState('')
  const [pourQui, setPourQui] = useState('')
  const [mode, setMode] = useState('')
  const [filtreAteliers, setFiltreAteliers] = useState(false)
  const [afficherTroubles, setAfficherTroubles] = useState(false)
  const [tri, setTri] = useState('')

  useEffect(() => {
    const charger = async () => {
      const { data } = await supabase
        .from('praticiens')
        .select('id, nom, photo, specialite, ville, pays, visio, cabinet, bio, tarifs, specialites, public_cible, note_moyenne, nb_avis, propose_ateliers, disponibilites')
        .eq('valide', true)
        .eq('actif', true)

      setPraticiens((data || []).map(p => mapPraticien(p as Record<string, unknown>)))
      setChargement(false)
    }
    charger()
  }, [])

  const toggleProblematique = (label: string) => {
    setProblematiquesSelectionnees(prev =>
      prev.includes(label) ? prev.filter(p => p !== label) : [...prev, label]
    )
  }

  const praticiensFiltres = praticiens.filter(p => {
    if (specialite && p.specialite !== specialite) return false
    if (pourQui && !p.public.some(pub => pub.toLowerCase().includes(pourQui.toLowerCase()))) return false
    if (mode === 'En visio' && !p.visio) return false
    if (mode === 'En cabinet' && p.ville === 'Visio uniquement') return false
    if (filtreAteliers && !p.ateliers) return false
    if (problematiquesSelectionnees.length > 0) {
      return problematiquesSelectionnees.some(prob =>
        p.problematiques.some(pp =>
          pp.toLowerCase().includes(prob.toLowerCase()) ||
          prob.toLowerCase().includes(pp.toLowerCase())
        )
      )
    }
    return true
  }).sort((a, b) => {
    if (tri === 'note') return b.note - a.note
    if (tri === 'tarif_asc') {
      const ta = parseFloat(a.tarif_depuis) || Infinity
      const tb = parseFloat(b.tarif_depuis) || Infinity
      return ta - tb
    }
    return 0
  })

  const allerVers = (id: number, ancre?: string) => {
    window.location.href = `/praticien/${id}${ancre ?? ''}`
  }

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
            <button className="text-white px-6 py-3 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
              Rechercher
            </button>
          </div>

          {/* FILTRES SECONDAIRES */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFiltreAteliers(!filtreAteliers)}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition"
                style={{
                  backgroundColor: filtreAteliers ? '#ffffff' : 'rgba(255,255,255,0.15)',
                  color: filtreAteliers ? '#6b21a8' : '#ffffff',
                  border: filtreAteliers ? 'none' : '1px solid rgba(255,255,255,0.3)',
                }}
              >
                {filtreAteliers && <span>✓</span>}🎓 Propose des ateliers
              </button>

              <button
                onClick={() => setAfficherTroubles(!afficherTroubles)}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full transition"
                style={{
                  backgroundColor: problematiquesSelectionnees.length > 0 ? '#ffffff' : 'rgba(255,255,255,0.15)',
                  color: problematiquesSelectionnees.length > 0 ? '#6b21a8' : '#ffffff',
                  border: problematiquesSelectionnees.length > 0 ? 'none' : '1px solid rgba(255,255,255,0.3)',
                }}
              >
                {problematiquesSelectionnees.length > 0
                  ? `✓ ${problematiquesSelectionnees.length} trouble${problematiquesSelectionnees.length > 1 ? 's' : ''} sélectionné${problematiquesSelectionnees.length > 1 ? 's' : ''}`
                  : '+ Filtrer par problématique'}
                <span style={{ fontSize: '10px' }}>{afficherTroubles ? '▲' : '▼'}</span>
              </button>
            </div>

            {afficherTroubles && (
              <div className="mt-3 flex flex-wrap gap-2">
                {problematiquesListe.map((pb) => (
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

        {chargement ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <p className="text-3xl">🌿</p>
            <p className="text-sm" style={{ color: '#a8a29e' }}>Chargement des praticiens...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <div>
                <p className="text-sm" style={{ color: '#78716c' }}>
                  <span className="font-medium" style={{ color: '#44403c' }}>
                    {praticiensFiltres.length} praticien{praticiensFiltres.length > 1 ? 's' : ''}
                  </span>{' '}
                  {praticiensFiltres.length > 0 ? 'correspondent à votre recherche' : 'trouvé'}
                </p>
                {problematiquesSelectionnees.length > 0 && (
                  <div className="flex gap-2 flex-wrap mt-2">
                    {problematiquesSelectionnees.map((p) => (
                      <span key={p} className="text-xs px-3 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                        {p}
                        <button onClick={() => toggleProblematique(p)} style={{ color: '#a855f7' }}>✕</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <select
                value={tri}
                onChange={(e) => setTri(e.target.value)}
                className="text-sm border rounded-lg px-3 py-2"
                style={{ borderColor: '#e7e5e4', color: '#44403c' }}
              >
                <option value="">Trier par : Pertinence</option>
                <option value="note">Trier par : Note</option>
                <option value="tarif_asc">Trier par : Tarif croissant</option>
              </select>
            </div>

            <div className="flex flex-col gap-4">
              {praticiensFiltres.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-4xl mb-4">🔍</p>
                  <p className="font-medium mb-2" style={{ color: '#1c1917' }}>
                    {praticiens.length === 0 ? 'Aucun praticien disponible pour le moment' : 'Aucun praticien trouvé'}
                  </p>
                  <p className="text-sm mb-6" style={{ color: '#a8a29e' }}>
                    {praticiens.length === 0 ? 'Les premiers praticiens arrivent bientôt !' : 'Essayez de modifier vos filtres'}
                  </p>
                  {praticiens.length > 0 && (
                    <button
                      onClick={() => { setProblematiquesSelectionnees([]); setSpecialite(''); setPourQui(''); setMode(''); setFiltreAteliers(false) }}
                      className="text-white px-6 py-3 rounded-2xl text-sm font-medium"
                      style={{ backgroundColor: '#6b21a8' }}
                    >
                      Effacer les filtres
                    </button>
                  )}
                </div>
              ) : (
                praticiensFiltres.map((praticien) => (
                  <div
                    key={praticien.id}
                    className="bg-white rounded-2xl p-6 flex gap-6 items-start hover:shadow-md transition"
                    style={{ border: '1px solid #e7e5e4' }}
                  >
                    {praticien.photo ? (
                      <img
                        src={praticien.photo}
                        alt={praticien.nom}
                        className="w-24 h-24 rounded-2xl flex-shrink-0 object-cover object-top cursor-pointer"
                        onClick={() => allerVers(praticien.id)}
                      />
                    ) : (
                      <div
                        className="w-24 h-24 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl cursor-pointer"
                        style={{ backgroundColor: '#f5f3ff' }}
                        onClick={() => allerVers(praticien.id)}
                      >
                        🌿
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h2
                              className="font-medium cursor-pointer hover:underline"
                              style={{ color: '#1c1917' }}
                              onClick={() => allerVers(praticien.id)}
                            >
                              {praticien.nom}
                            </h2>
                          </div>
                          <p className="text-sm" style={{ color: '#6b21a8' }}>{praticien.specialite}</p>
                          <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📍 {praticien.ville}</p>
                          {praticien.public.length > 0 && (
                            <div className="flex gap-1.5 flex-wrap mt-2 items-center">
                              <span className="text-xs" style={{ color: '#6b21a8' }}>👥</span>
                              {praticien.public.map((p) => (
                                <span key={p} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                                  {p}
                                </span>
                              ))}
                            </div>
                          )}
                          {praticien.problematiques.length > 0 && (
                            <div className="flex gap-1.5 flex-wrap mt-2 items-center">
                              <span className="text-xs" style={{ color: '#92400e' }}>🩺</span>
                              {praticien.problematiques.map((pb) => (
                                <span
                                  key={pb}
                                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                                  style={{
                                    backgroundColor: problematiquesSelectionnees.includes(pb) ? '#f5f3ff' : '#fef3c7',
                                    color: problematiquesSelectionnees.includes(pb) ? '#6b21a8' : '#78350f',
                                    border: problematiquesSelectionnees.includes(pb) ? '1px solid #6b21a8' : 'none',
                                  }}
                                >
                                  {pb}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                      </div>

                      {praticien.description && (
                        <p className="text-sm mt-2 leading-relaxed" style={{ color: '#78716c' }}>
                          {praticien.description}
                        </p>
                      )}

                      {praticien.prestations.length > 0 && (
                        <div className="flex gap-2 flex-wrap mt-3">
                          {praticien.prestations.map((p) => (
                            <button
                              key={p.nom}
                              className="text-xs px-3 py-1 rounded-lg transition hover:opacity-80"
                              style={{ backgroundColor: '#faf9f7', color: '#57534e', border: '1px solid #e7e5e4', cursor: 'pointer' }}
                              onClick={() => allerVers(praticien.id, `?prestation=${encodeURIComponent(p.nom)}`)}
                            >
                              {p.nom} · {formaterDuree(p.duree)} · {p.tarif}
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                        <div>
                          {praticien.creneaux.length > 0 ? (
                            <p className="text-xs font-medium" style={{ color: '#15803d' }}>
                              🟢 Prochaine dispo : {praticien.creneaux[0].replace(/(\d{1,2}):(\d{2})$/, (_, h, m) => `à ${parseInt(h)}h${m === '00' ? '' : m}`)}
                            </p>
                          ) : (
                            <p className="text-xs" style={{ color: '#a8a29e' }}>Sur appel</p>
                          )}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <button
                            className="text-sm px-4 py-2 rounded-xl border transition"
                            style={{ borderColor: '#6b21a8', color: '#6b21a8', backgroundColor: 'white' }}
                            onClick={() => allerVers(praticien.id, '#contact')}
                          >
                            💬 Contacter
                          </button>
                          {praticien.ateliers && (
                            <button
                              className="text-sm px-4 py-2 rounded-xl transition"
                              style={{ backgroundColor: '#fef3c7', color: '#92400e', border: '1px solid #fde68a' }}
                              onClick={() => { window.location.href = `/ateliers?praticien=${praticien.id}` }}
                            >
                              🎓 Voir les ateliers
                            </button>
                          )}
                          <button
                            className="text-sm px-4 py-2 rounded-xl transition"
                            style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                            onClick={() => allerVers(praticien.id)}
                          >
                            Voir le profil
                          </button>
                          <button
                            className="text-white text-sm px-5 py-2 rounded-xl transition"
                            style={{ backgroundColor: '#6b21a8' }}
                            onClick={() => allerVers(praticien.id)}
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
          </>
        )}
      </section>
    </main>
  )
}
