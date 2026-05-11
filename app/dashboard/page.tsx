'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type RendezVous = {
  id: string
  patient_id: string
  date: string
  heure: string
  duree: string
  mode: string
  statut: string
  prestation: string
  tarif: number
  notes_praticien: string
  patient_prenom?: string
  patient_email?: string
}

const STATUT_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  en_attente: { label: 'En attente',  color: '#92400e', bg: '#fef3c7' },
  confirme:   { label: 'Confirmé',    color: '#166534', bg: '#dcfce7' },
  annule:     { label: 'Annulé',      color: '#991b1b', bg: '#fee2e2' },
  termine:    { label: 'Terminé',     color: '#44403c', bg: '#f5f5f4' },
}

export default function Dashboard() {
  const [onglet, setOnglet] = useState<string | null>(null)
  const [profilValide, setProfilValide] = useState(false)
  const [chargement, setChargement] = useState(true)
  const [chargementProfil, setChargementProfil] = useState(false)
  const [erreurProfil, setErreurProfil] = useState('')
  const [succesProfil, setSuccesProfil] = useState('')
  const [recherchePat, setRecherchePat] = useState('')
  const [lienVisio, setLienVisio] = useState('')
  const [indicatif, setIndicatif] = useState('+33')
  const [indicatifCustom, setIndicatifCustom] = useState('')
  const [notes, setNotes] = useState<Record<string, { ponctualite: number, fiabilite: number }>>({})
  const [photoUrl, setPhotoUrl] = useState('')
  const [uploadEnCours, setUploadEnCours] = useState(false)
  const [erreurPhoto, setErreurPhoto] = useState('')
  const [rendezVous, setRendezVous] = useState<RendezVous[]>([])
  const [dossierSoumis, setDossierSoumis] = useState(false)
  const [soumissionEnCours, setSoumissionEnCours] = useState(false)
  const [praticienId, setPraticienId] = useState<number | null>(null)
  const [actionEnCours, setActionEnCours] = useState<string | null>(null)
  const [disponibilites, setDisponibilites] = useState<Record<string, string[]>>({})
  const [sauvDispoEnCours, setSauvDispoEnCours] = useState(false)
  const [succesDispo, setSuccesDispo] = useState('')

  const [profil, setProfil] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    specialite: '',
    bio: '',
    assurance: '',
    assureur: '',
    visio: false,
    cabinet: false,
  })

  const [diplomes, setDiplomes] = useState([{ ecole: '', annee: '', titre: '' }])
  const [tarifs, setTarifs] = useState([
    { label: 'Bilan initial', duree: '1h30', prix: '' },
    { label: 'Consultation suivi', duree: '45 min', prix: '' },
  ])

  useEffect(() => {
    const charger = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/connexion'; return }

      const { data } = await supabase
        .from('praticiens')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (data) {
        const estValide = data.valide === true
        setProfilValide(estValide)
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
          assurance: data.assurance || '',
          assureur: data.assureur || '',
          visio: data.visio || false,
          cabinet: data.cabinet || false,
        })
        setLienVisio(data.lien_visio || '')
        if (data.photo) setPhotoUrl(data.photo)
        if (data.diplomes) setDiplomes(data.diplomes)
        if (data.tarifs) setTarifs(data.tarifs)
        if (data.disponibilites) setDisponibilites(data.disponibilites)
        setPraticienId(data.id)
        setOnglet(estValide ? 'apercu' : 'monprofil')

        // Charge les RDV du praticien
        const { data: rdvData } = await supabase
          .from('rendez-vous')
          .select('*')
          .eq('praticien_id', data.id)
          .order('date', { ascending: false })
        setRendezVous((rdvData as RendezVous[]) || [])
      } else {
        setOnglet('apercu')
      }
      setChargement(false)
    }
    charger()
  }, [])

  const sauvegarderProfil = async () => {
    setChargementProfil(true)
    setErreurProfil('')
    setSuccesProfil('')
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const telComplet = `${indicatif === '+autre' ? indicatifCustom : indicatif} ${profil.telephone}`

    const { error } = await supabase.from('praticiens').update({
      nom: `${profil.prenom} ${profil.nom}`,
      telephone: telComplet,
      ville: profil.ville,
      pays: profil.pays,
      specialite: profil.specialite,
      bio: profil.bio,
      assurance: profil.assurance,
      assureur: profil.assureur,
      visio: profil.visio,
      cabinet: profil.cabinet,
      lien_visio: lienVisio,
      diplomes: diplomes,
      tarifs: tarifs,
    }).eq('user_id', user.id)

    if (error) {
      setErreurProfil(error.message)
    } else {
      const toutComplet =
        profil.prenom && profil.nom && profil.ville && profil.pays &&
        profil.specialite && profil.assurance && profil.assureur &&
        (profil.visio || profil.cabinet) &&
        diplomes.some(d => d.titre && d.ecole && d.annee) &&
        tarifs.some(t => t.label && t.prix)
      setSuccesProfil(toutComplet
        ? 'Profil sauvegardé ! Notre équipe va vérifier vos informations sous 72h.'
        : 'Profil sauvegardé ! Complétez les champs obligatoires (*) pour déclencher la validation.')
    }
    setChargementProfil(false)
  }

  const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
  const CRENEAUX_DISPO = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00']

  const toggleCreneau = (jour: string, heure: string) => {
    setDisponibilites(prev => {
      const actuel = prev[jour] || []
      const nouveau = actuel.includes(heure) ? actuel.filter(h => h !== heure) : [...actuel, heure].sort()
      return { ...prev, [jour]: nouveau }
    })
    setSuccesDispo('')
  }

  const sauvegarderDisponibilites = async () => {
    setSauvDispoEnCours(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('praticiens').update({ disponibilites }).eq('user_id', user.id)
    setSuccesDispo('Disponibilités sauvegardées !')
    setSauvDispoEnCours(false)
  }

  const soumettreValidation = async () => {
    setSoumissionEnCours(true)
    await fetch('/api/email-validation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'soumission_dossier',
        nom: `${profil.prenom} ${profil.nom}`,
        email: profil.email,
        specialite: profil.specialite,
        ville: profil.ville,
        pays: profil.pays,
      }),
    })
    setDossierSoumis(true)
    setSoumissionEnCours(false)
  }

  const changerStatutRdv = async (id: string, statut: string) => {
    setActionEnCours(id)
    await supabase.from('rendez-vous').update({ statut }).eq('id', id)
    setRendezVous(prev => prev.map(r => r.id === id ? { ...r, statut } : r))
    if (statut === 'confirme') {
      const rdv = rendezVous.find(r => r.id === id)
      if (rdv?.patient_email) {
        await fetch('/api/email-rdv', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'confirmation_patient',
            praticien: `${profil.prenom} ${profil.nom}`,
            prestation: rdv.prestation,
            date: rdv.date,
            heure: rdv.heure,
            tarif: rdv.tarif,
            emailPatient: rdv.patient_email,
          }),
        })
      }
    }
    setActionEnCours(null)
  }


  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fichier = e.target.files?.[0]
    if (!fichier) return

    setUploadEnCours(true)
    setErreurPhoto('')

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setUploadEnCours(false); return }

    if (fichier.size > 5 * 1024 * 1024) {
      setErreurPhoto('La photo dépasse 5 Mo. Veuillez choisir un fichier plus léger.')
      setUploadEnCours(false)
      return
    }

    const ext = fichier.name.split('.').pop()
    const chemin = `${user.id}/profil.${ext}`

    const { error: erreurUpload } = await supabase.storage
      .from('photos-praticiens')
      .upload(chemin, fichier, { upsert: true })

    if (erreurUpload) {
      setErreurPhoto(`Erreur upload (${erreurUpload.message}). Vérifiez les policies RLS du bucket dans Supabase Storage.`)
      setUploadEnCours(false)
      return
    }

    const { data: urlData } = supabase.storage.from('photos-praticiens').getPublicUrl(chemin)
    const publicUrl = urlData.publicUrl

    await supabase.from('praticiens').update({ photo: publicUrl }).eq('user_id', user.id)

    setPhotoUrl(publicUrl)
    setUploadEnCours(false)
  }

  const ajouterDiplome = () => setDiplomes(prev => [...prev, { ecole: '', annee: '', titre: '' }])
  const supprimerDiplome = (i: number) => setDiplomes(prev => prev.filter((_, idx) => idx !== i))
  const majDiplome = (i: number, champ: string, val: string) => setDiplomes(prev => prev.map((d, idx) => idx === i ? { ...d, [champ]: val } : d))
  const ajouterTarif = () => setTarifs(prev => [...prev, { label: '', duree: '', prix: '' }])
  const supprimerTarif = (i: number) => setTarifs(prev => prev.filter((_, idx) => idx !== i))
  const majTarif = (i: number, champ: string, val: string) => setTarifs(prev => prev.map((t, idx) => idx === i ? { ...t, [champ]: val } : t))
  const setNote = (nom: string, type: 'ponctualite' | 'fiabilite', val: number) => {
    setNotes(prev => ({ ...prev, [nom]: { ...prev[nom], [type]: val } }))
  }

  const INDICATIFS = [
    { flag: '🇫🇷', code: '+33', pays: 'France' },
    { flag: '🇧🇪', code: '+32', pays: 'Belgique' },
    { flag: '🇨🇭', code: '+41', pays: 'Suisse' },
    { flag: '🇨🇦', code: '+1', pays: 'Canada' },
    { flag: '🇹🇭', code: '+66', pays: 'Thaïlande' },
    { flag: '🇸🇬', code: '+65', pays: 'Singapour' },
    { flag: '🇦🇪', code: '+971', pays: 'Émirats' },
    { flag: '🇬🇧', code: '+44', pays: 'Royaume-Uni' },
    { flag: '🇩🇪', code: '+49', pays: 'Allemagne' },
    { flag: '🇪🇸', code: '+34', pays: 'Espagne' },
    { flag: '🇮🇹', code: '+39', pays: 'Italie' },
    { flag: '🇵🇹', code: '+351', pays: 'Portugal' },
    { flag: '🇲🇦', code: '+212', pays: 'Maroc' },
    { flag: '🇻🇳', code: '+84', pays: 'Vietnam' },
    { flag: '🇵🇭', code: '+63', pays: 'Philippines' },
    { flag: '🇩🇰', code: '+45', pays: 'Danemark' },
    { flag: '🇳🇱', code: '+31', pays: 'Pays-Bas' },
    { flag: '🇲🇾', code: '+60', pays: 'Malaisie' },
    { flag: '🇮🇩', code: '+62', pays: 'Indonésie' },
    { flag: '🇯🇵', code: '+81', pays: 'Japon' },
    { flag: '🇰🇷', code: '+82', pays: 'Corée du Sud' },
    { flag: '🇨🇳', code: '+86', pays: 'Chine' },
    { flag: '🇭🇰', code: '+852', pays: 'Hong Kong' },
    { flag: '🇦🇺', code: '+61', pays: 'Australie' },
    { flag: '🇿🇦', code: '+27', pays: 'Afrique du Sud' },
    { flag: '🇧🇷', code: '+55', pays: 'Brésil' },
    { flag: '🇲🇽', code: '+52', pays: 'Mexique' },
    { flag: '🇦🇷', code: '+54', pays: 'Argentine' },
  ]

  if (chargement || onglet === null) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#faf9f7' }}>
        <div className="text-center">
          <p className="text-4xl mb-4">🌿</p>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Chargement...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />
      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Bonjour {profil.prenom} 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>Voici votre tableau de bord</p>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            {profilValide && (
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
                {lienVisio && <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>✓</span>}
              </div>
            )}
            <button
              className="text-sm px-4 py-3 rounded-2xl font-medium"
              style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}
              onClick={async () => { await supabase.auth.signOut(); window.location.href = '/connexion' }}
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 mb-8 border-b overflow-x-auto" style={{ borderColor: '#e7e5e4' }}>
          {[
            ...(profilValide ? [
              { id: 'apercu', label: 'Aperçu' },
              { id: 'agenda', label: 'Mon agenda' },
              { id: 'disponibilites', label: 'Mes disponibilités' },
              { id: 'patients', label: 'Mes patients' },
              { id: 'stats', label: 'Statistiques' },
              { id: 'avis', label: 'Mes avis' },
            ] : []),
            { id: 'monprofil', label: profilValide ? '⚡ Mon profil' : '📝 Compléter mon profil' },
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
        {onglet === 'apercu' && profilValide && (() => {
          const moisCourant = new Date().toISOString().slice(0, 7)
          const rdvCeMois = rendezVous.filter(r => r.date?.startsWith(moisCourant))
          const enAttente = rendezVous.filter(r => r.statut === 'en_attente').length
          const revenusMois = rdvCeMois.filter(r => r.statut === 'termine').reduce((s, r) => s + (r.tarif || 0), 0)
          const patientsUniques = new Set(rendezVous.map(r => r.patient_id)).size
          return (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'RDV ce mois', value: rdvCeMois.length || '—', emoji: '📅', color: '#6b21a8' },
                { label: 'En attente', value: enAttente || '—', emoji: '⏳', color: '#f59e0b' },
                { label: 'Revenus du mois', value: revenusMois ? `${revenusMois}€` : '—', emoji: '💶', color: '#10b981' },
                { label: 'Patients au total', value: patientsUniques || '—', emoji: '🌱', color: '#3b82f6' },
                { label: 'Avis reçus', value: rendezVous.filter(r => r.statut === 'termine').length || '—', emoji: '⭐', color: '#6b21a8' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                  <p className="text-xl mb-1">{stat.emoji}</p>
                  <p className="text-2xl font-light mb-1" style={{ color: stat.color, fontFamily: 'var(--font-lora)' }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <p className="text-sm font-medium mb-1" style={{ color: '#6b21a8' }}>🎉 Profil validé — bienvenue sur Holistia !</p>
              <p className="text-xs" style={{ color: '#7c3aed' }}>Votre profil est visible par les patients. Les statistiques et RDV apparaîtront ici au fur et à mesure.</p>
            </div>
          </div>
          )
        })()}

        {onglet === 'agenda' && profilValide && (
          <div className="flex flex-col gap-6">
            {rendezVous.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
                <p className="text-4xl mb-4">📅</p>
                <p className="text-sm" style={{ color: '#a8a29e' }}>Aucun rendez-vous pour le moment.</p>
              </div>
            ) : (
              <>
                {/* En attente */}
                {rendezVous.filter(r => r.statut === 'en_attente').length > 0 && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: '#92400e' }}>⏳ En attente de confirmation</p>
                    <div className="flex flex-col gap-3">
                      {rendezVous.filter(r => r.statut === 'en_attente').map(rdv => (
                        <div key={rdv.id} className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-3" style={{ border: '2px solid #fde68a' }}>
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <p className="font-medium text-sm" style={{ color: '#1c1917' }}>{rdv.prestation}</p>
                              <p className="text-xs mt-1" style={{ color: '#78716c' }}>📅 {rdv.date} à {rdv.heure} · {rdv.duree} · {rdv.mode}</p>
                              {rdv.tarif > 0 && <p className="text-xs" style={{ color: '#6b21a8' }}>💶 {rdv.tarif}€</p>}
                              {rdv.notes_praticien && <p className="text-xs mt-1 italic" style={{ color: '#78716c' }}>"{rdv.notes_praticien}"</p>}
                            </div>
                            <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ color: STATUT_CONFIG.en_attente.color, backgroundColor: STATUT_CONFIG.en_attente.bg }}>
                              En attente
                            </span>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <button
                              onClick={() => changerStatutRdv(rdv.id, 'confirme')}
                              disabled={actionEnCours === rdv.id}
                              className="text-sm px-4 py-2 rounded-xl font-medium text-white"
                              style={{ backgroundColor: '#16a34a' }}
                            >
                              {actionEnCours === rdv.id ? '...' : '✓ Confirmer'}
                            </button>
                            <button
                              onClick={() => changerStatutRdv(rdv.id, 'annule')}
                              disabled={actionEnCours === rdv.id}
                              className="text-sm px-4 py-2 rounded-xl"
                              style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}
                            >
                              ✕ Refuser
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Confirmés */}
                {rendezVous.filter(r => r.statut === 'confirme').length > 0 && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: '#166534' }}>✅ Confirmés</p>
                    <div className="flex flex-col gap-3">
                      {rendezVous.filter(r => r.statut === 'confirme').map(rdv => (
                        <div key={rdv.id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between gap-3 flex-wrap" style={{ border: '1px solid #bbf7d0' }}>
                          <div>
                            <p className="font-medium text-sm" style={{ color: '#1c1917' }}>{rdv.prestation}</p>
                            <p className="text-xs mt-1" style={{ color: '#78716c' }}>📅 {rdv.date} à {rdv.heure} · {rdv.duree} · {rdv.mode}</p>
                            {rdv.tarif > 0 && <p className="text-xs" style={{ color: '#6b21a8' }}>💶 {rdv.tarif}€</p>}
                          </div>
                          <button
                            onClick={() => changerStatutRdv(rdv.id, 'termine')}
                            disabled={actionEnCours === rdv.id}
                            className="text-sm px-4 py-2 rounded-xl flex-shrink-0"
                            style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                          >
                            {actionEnCours === rdv.id ? '...' : 'Marquer terminé'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Historique */}
                {rendezVous.filter(r => r.statut === 'termine' || r.statut === 'annule').length > 0 && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide mb-3" style={{ color: '#a8a29e' }}>Historique</p>
                    <div className="flex flex-col gap-2">
                      {rendezVous.filter(r => r.statut === 'termine' || r.statut === 'annule').map(rdv => (
                        <div key={rdv.id} className="bg-white rounded-2xl p-4 flex items-center justify-between gap-3 flex-wrap opacity-70" style={{ border: '1px solid #e7e5e4' }}>
                          <div>
                            <p className="text-sm" style={{ color: '#1c1917' }}>{rdv.prestation}</p>
                            <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📅 {rdv.date} à {rdv.heure}</p>
                          </div>
                          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ color: STATUT_CONFIG[rdv.statut]?.color, backgroundColor: STATUT_CONFIG[rdv.statut]?.bg }}>
                            {STATUT_CONFIG[rdv.statut]?.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {onglet === 'disponibilites' && profilValide && (
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-4" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <p className="text-sm" style={{ color: '#6b21a8' }}>
                Cochez les créneaux où vous êtes disponible. Ils seront affichés sur votre fiche pour que les patients puissent réserver.
              </p>
            </div>

            {JOURS.map(jour => (
              <div key={jour} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{jour}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>
                    {(disponibilites[jour] || []).length} créneau{(disponibilites[jour] || []).length !== 1 ? 'x' : ''} sélectionné{(disponibilites[jour] || []).length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {CRENEAUX_DISPO.map(heure => {
                    const actif = (disponibilites[jour] || []).includes(heure)
                    return (
                      <button
                        key={heure}
                        onClick={() => toggleCreneau(jour, heure)}
                        className="text-xs px-3 py-1.5 rounded-lg transition"
                        style={{
                          backgroundColor: actif ? '#6b21a8' : '#faf9f7',
                          color: actif ? '#ffffff' : '#78716c',
                          border: actif ? 'none' : '1px solid #e7e5e4',
                        }}
                      >
                        {heure}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}

            {succesDispo && (
              <div className="p-4 rounded-2xl text-sm text-center" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                ✅ {succesDispo}
              </div>
            )}

            <button
              onClick={sauvegarderDisponibilites}
              disabled={sauvDispoEnCours}
              className="w-full text-white py-4 rounded-2xl font-medium text-sm"
              style={{ backgroundColor: sauvDispoEnCours ? '#a855f7' : '#6b21a8' }}
            >
              {sauvDispoEnCours ? 'Sauvegarde...' : '💾 Sauvegarder mes disponibilités'}
            </button>
          </div>
        )}

        {onglet === 'patients' && profilValide && (
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3" style={{ border: '1px solid #e7e5e4' }}>
              <span className="text-lg">🔍</span>
              <input type="text" value={recherchePat} onChange={(e) => setRecherchePat(e.target.value)} placeholder="Rechercher un patient..." className="flex-1 text-sm outline-none bg-transparent" style={{ color: '#1c1917' }} />
            </div>
            {rendezVous.length === 0 ? (
              <p className="text-sm text-center py-8" style={{ color: '#a8a29e' }}>Vos patients apparaîtront ici une fois les premiers RDV pris.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {Array.from(new Map(rendezVous.map(r => [r.patient_id, r])).values())
                  .filter(r => !recherchePat || r.patient_email?.toLowerCase().includes(recherchePat.toLowerCase()))
                  .map(rdv => {
                    const rdvPatient = rendezVous.filter(r => r.patient_id === rdv.patient_id)
                    return (
                      <div key={rdv.patient_id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between gap-3 flex-wrap" style={{ border: '1px solid #e7e5e4' }}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: '#f5f3ff' }}>🌿</div>
                          <div>
                            <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{rdv.patient_prenom || 'Patient'}</p>
                            <p className="text-xs" style={{ color: '#a8a29e' }}>{rdvPatient.length} RDV · dernier : {rdvPatient[0]?.date}</p>
                          </div>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                          {rdvPatient.filter(r => r.statut === 'confirme' || r.statut === 'termine').length} consultation(s)
                        </span>
                      </div>
                    )
                  })}
              </div>
            )}
          </div>
        )}

        {onglet === 'stats' && profilValide && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
            <p className="text-4xl mb-4">📊</p>
            <p className="text-sm" style={{ color: '#a8a29e' }}>Vos statistiques apparaîtront après vos premières consultations.</p>
          </div>
        )}

        {onglet === 'avis' && profilValide && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
            <p className="text-4xl mb-4">⭐</p>
            <p className="text-sm" style={{ color: '#a8a29e' }}>Vos avis patients apparaîtront après vos premières consultations.</p>
          </div>
        )}

        {/* MON PROFIL */}
        {onglet === 'monprofil' && (
          <div className="flex flex-col gap-6">

            <div className="rounded-2xl p-4 flex gap-3 items-center" style={{
              backgroundColor: profilValide ? '#f0fdf4' : '#fef9c3',
              border: profilValide ? '1px solid #bbf7d0' : '1px solid #fde047'
            }}>
              <span className="text-xl">{profilValide ? '✅' : '⏳'}</span>
              <div>
                <p className="text-sm font-medium" style={{ color: profilValide ? '#16a34a' : '#854d0e' }}>
                  {profilValide ? 'Profil validé — visible par les patients' : "Profil en attente d'être complété"}
                </p>
                <p className="text-xs" style={{ color: profilValide ? '#15803d' : '#92400e' }}>
                  {profilValide
                    ? 'Vous pouvez continuer à mettre à jour vos informations à tout moment.'
                    : 'Complétez les champs obligatoires (*) pour déclencher la validation. Notre équipe vous répond sous 72h.'}
                </p>
              </div>
            </div>

            {erreurProfil && <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>⚠️ {erreurProfil}</div>}
            {succesProfil && <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>✅ {succesProfil}</div>}

            {/* INFOS PERSONNELLES */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Informations personnelles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {[
                  { label: 'Prénom', champ: 'prenom', obligatoire: true },
                  { label: 'Nom', champ: 'nom', obligatoire: true },
                  { label: 'Ville', champ: 'ville', obligatoire: true },
                  { label: 'Pays', champ: 'pays', obligatoire: true },
                ].map((f) => (
                  <div key={f.champ}>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>
                      {f.label} {f.obligatoire && <span style={{ color: '#dc2626' }}>*</span>}
                    </label>
                    <input
                      type="text"
                      value={profil[f.champ as keyof typeof profil] as string}
                      onChange={(e) => setProfil(prev => ({ ...prev, [f.champ]: e.target.value }))}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                ))}

                {/* Téléphone */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Téléphone</label>
                  <div className="flex gap-2">
                    <select
                      value={indicatif}
                      onChange={(e) => setIndicatif(e.target.value)}
                      className="text-sm rounded-xl px-3 py-3 outline-none flex-shrink-0"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917', width: '150px' }}
                    >
                      {INDICATIFS.map((ind) => (
                        <option key={ind.code} value={ind.code}>{ind.flag} {ind.pays} {ind.code}</option>
                      ))}
                      <option value="+autre">Autre pays</option>
                    </select>
                    {indicatif === '+autre' && (
                      <input
                        type="text"
                        value={indicatifCustom}
                        onChange={(e) => setIndicatifCustom(e.target.value)}
                        placeholder="+XX"
                        className="text-sm rounded-xl px-3 py-3 outline-none"
                        style={{ border: '1px solid #e7e5e4', color: '#1c1917', width: '70px' }}
                      />
                    )}
                    <input
                      type="tel"
                      value={profil.telephone}
                      onChange={(e) => setProfil(prev => ({ ...prev, telephone: e.target.value }))}
                      placeholder="6 12 34 56 78"
                      className="flex-1 text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                </div>

                {/* Spécialité */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>
                    Spécialité <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <select
                    value={profil.specialite}
                    onChange={(e) => setProfil(prev => ({ ...prev, specialite: e.target.value }))}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  >
                    <option value="">Choisissez votre spécialité</option>
                    <optgroup label="Corps & Toucher">
                      <option>Acupuncture</option>
                      <option>Chiropractie</option>
                      <option>Ergothérapie</option>
                      <option>Fasciathérapie</option>
                      <option>Kinésithérapie</option>
                      <option>Kinésiologie</option>
                      <option>Ostéopathie</option>
                      <option>Pilates thérapeutique</option>
                      <option>Podologie</option>
                      <option>Psychomotricité</option>
                      <option>Réflexologie</option>
                      <option>Yoga thérapeutique</option>
                    </optgroup>
                    <optgroup label="Parole & Émotion">
                      <option>Approche systémique</option>
                      <option>Coaching</option>
                      <option>EFT</option>
                      <option>EMDR</option>
                      <option>Hypnothérapie</option>
                      <option>Kinésiologie</option>
                      <option>Orthophonie</option>
                      <option>Psychomotricité</option>
                      <option>Psychopraticien</option>
                      <option>Sexologie</option>
                      <option>Sophrologie</option>
                      <option>Thérapie de couple</option>
                      <option>Thérapies brèves</option>
                    </optgroup>
                    <optgroup label="Énergie & Tradition">
                      <option>Acupuncture</option>
                      <option>Ayurveda</option>
                      <option>Homéopathie</option>
                      <option>Médecine traditionnelle chinoise</option>
                      <option>Reiki</option>
                    </optgroup>
                    <optgroup label="Alimentation & Plantes">
                      <option>Aromathérapie</option>
                      <option>Ayurveda</option>
                      <option>Diététique-Nutrition</option>
                      <option>Médecine traditionnelle chinoise</option>
                      <option>Naturopathie</option>
                      <option>Phytothérapie</option>
                    </optgroup>
                    <option>Autre</option>
                  </select>
                </div>

                {/* Mode de consultation */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>
                    Mode de consultation <span style={{ color: '#dc2626' }}>*</span>
                  </label>
                  <div className="flex gap-3">
                    {[
                      { label: '🏥 En cabinet', champ: 'cabinet' },
                      { label: '🖥 En visio', champ: 'visio' },
                    ].map((mode) => (
                      <button
                        key={mode.champ}
                        onClick={() => setProfil(prev => ({ ...prev, [mode.champ]: !prev[mode.champ as keyof typeof prev] }))}
                        className="flex-1 py-3 rounded-xl text-sm font-medium transition"
                        style={{
                          backgroundColor: profil[mode.champ as keyof typeof profil] ? '#f5f3ff' : '#faf9f7',
                          color: profil[mode.champ as keyof typeof profil] ? '#6b21a8' : '#a8a29e',
                          border: profil[mode.champ as keyof typeof profil] ? '2px solid #6b21a8' : '1px solid #e7e5e4',
                        }}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PHOTO */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Photo de profil</h2>
              <div className="rounded-xl p-3 mb-5" style={{ backgroundColor: '#f5f3ff' }}>
                <p className="text-xs" style={{ color: '#7c3aed' }}>
                  <span style={{ color: '#dc2626' }}>*</span> <strong>Obligatoire</strong> — photo nette de votre visage, bien éclairée, fond neutre de préférence. Les patients doivent pouvoir vous reconnaître clairement.
                </p>
              </div>
              {erreurPhoto && (
                <div className="mb-4 p-3 rounded-xl text-xs" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>{erreurPhoto}</div>
              )}
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#f5f3ff', border: '2px dashed #a855f7' }}>
                  {photoUrl ? (
                    <img src={photoUrl} alt="Photo de profil" className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="text-3xl">📷</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm px-5 py-3 rounded-xl cursor-pointer font-medium inline-flex items-center gap-2"
                    style={{ backgroundColor: uploadEnCours ? '#f5f3ff' : '#6b21a8', color: uploadEnCours ? '#a855f7' : '#ffffff' }}
                  >
                    {uploadEnCours ? (
                      <>
                        <span className="inline-block w-3 h-3 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                        Upload en cours...
                      </>
                    ) : (
                      photoUrl ? '🔄 Changer la photo' : '📷 Choisir une photo'
                    )}
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      disabled={uploadEnCours}
                      onChange={uploadPhoto}
                    />
                  </label>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>JPG, PNG ou WebP · 5 Mo max</p>
                  {photoUrl && (
                    <p className="text-xs" style={{ color: '#16a34a' }}>✓ Photo enregistrée</p>
                  )}
                </div>
              </div>
            </div>

            {/* BIO */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Présentation</h2>
              <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>Optionnel — mais fortement recommandé pour rassurer les patients.</p>
              <textarea
                value={profil.bio}
                onChange={(e) => setProfil(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Décrivez votre approche, votre parcours et ce qui vous anime..."
                className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '140px' }}
              />
            </div>

            {/* DIPLÔMES */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Formations et diplômes <span style={{ color: '#dc2626' }}>*</span>
              </h2>
              <p className="text-xs mb-6" style={{ color: '#a8a29e' }}>Obligatoire — ces informations permettent à notre équipe de vérifier votre formation auprès de l'école.</p>
              <div className="flex flex-col gap-4">
                {diplomes.map((diplome, index) => (
                  <div key={index} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>Diplôme {index + 1}</p>
                      {diplomes.length > 1 && <button onClick={() => supprimerDiplome(index)} className="text-xs" style={{ color: '#dc2626' }}>Supprimer</button>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Intitulé du diplôme</label>
                        <input type="text" value={diplome.titre} onChange={(e) => majDiplome(index, 'titre', e.target.value)} placeholder="Ex: Diplôme de Naturopathie" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                      </div>
                      <div>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>École / Organisme</label>
                        <input type="text" value={diplome.ecole} onChange={(e) => majDiplome(index, 'ecole', e.target.value)} placeholder="Ex: ISUPNAT, A180°..." className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                      </div>
                      <div>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Année</label>
                        <input type="text" value={diplome.annee} onChange={(e) => majDiplome(index, 'annee', e.target.value)} placeholder="Ex: 2019" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={ajouterDiplome} className="text-sm px-4 py-3 rounded-xl text-left" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px dashed #a855f7' }}>
                  + Ajouter un diplôme
                </button>
              </div>

              {/* Assurance RC Pro */}
              <div className="mt-6 p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                <p className="text-xs font-medium mb-1" style={{ color: '#6b21a8' }}>
                  Assurance RC Pro <span style={{ color: '#dc2626' }}>*</span>
                </p>
                <p className="text-xs mb-3" style={{ color: '#a8a29e' }}>
                  Obligatoire pour exercer. La RC Pro (Responsabilité Civile Professionnelle) vous couvre en cas de litige avec un patient. Renseignez votre assureur et votre numéro de police.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Nom de l'assureur</label>
                    <input type="text" value={profil.assureur} onChange={(e) => setProfil(prev => ({ ...prev, assureur: e.target.value }))} placeholder="Ex: MAIF, AXA, APRIL..." className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Numéro de police</label>
                    <input type="text" value={profil.assurance} onChange={(e) => setProfil(prev => ({ ...prev, assurance: e.target.value }))} placeholder="Numéro de votre contrat" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* TARIFS */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Prestations et tarifs <span style={{ color: '#dc2626' }}>*</span>
              </h2>
              <p className="text-xs mb-6" style={{ color: '#a8a29e' }}>Obligatoire — au moins une prestation. Les prix sont affichés en euros (€).</p>
              <div className="flex flex-col gap-4">
                {tarifs.map((tarif, index) => (
                  <div key={index} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: '#6b21a8' }}>Prestation {index + 1}</p>
                      {tarifs.length > 1 && <button onClick={() => supprimerTarif(index)} className="text-xs" style={{ color: '#dc2626' }}>Supprimer</button>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Nom de la prestation</label>
                        <input type="text" value={tarif.label} onChange={(e) => majTarif(index, 'label', e.target.value)} placeholder="Ex: Bilan initial" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                      </div>
                      <div>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Durée</label>
                        <select value={tarif.duree} onChange={(e) => majTarif(index, 'duree', e.target.value)} className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}>
                          <option value="">Choisir</option>
                          <option>30 min</option>
                          <option>45 min</option>
                          <option>1h</option>
                          <option>1h15</option>
                          <option>1h30</option>
                          <option>2h</option>
                          <option>2h30</option>
                          <option>3h</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prix (€)</label>
                        <div className="flex items-center rounded-xl overflow-hidden" style={{ border: '1px solid #e7e5e4' }}>
                          <input type="number" value={tarif.prix} onChange={(e) => majTarif(index, 'prix', e.target.value)} placeholder="90" className="flex-1 text-sm px-4 py-3 outline-none" style={{ color: '#1c1917' }} />
                          <span className="px-3 text-sm font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={ajouterTarif} className="text-sm px-4 py-3 rounded-xl text-left" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px dashed #a855f7' }}>
                  + Ajouter une prestation
                </button>
              </div>
            </div>

            <button
              onClick={sauvegarderProfil}
              disabled={chargementProfil}
              className="w-full text-white py-4 rounded-2xl font-medium text-sm"
              style={{ backgroundColor: chargementProfil ? '#a855f7' : '#6b21a8' }}
            >
              {chargementProfil ? 'Sauvegarde en cours...' : '💾 Sauvegarder mon profil'}
            </button>

            {/* Bouton de soumission — visible uniquement si profil complet et pas encore validé */}
            {!profilValide && profil.prenom && profil.nom && profil.specialite && profil.assurance && diplomes.some(d => d.titre) && tarifs.some(t => t.prix) && (
              dossierSoumis ? (
                <div className="p-4 rounded-2xl text-sm text-center" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                  ✅ Dossier soumis — notre équipe reviendra vers vous sous 72h.
                </div>
              ) : (
                <button
                  onClick={soumettreValidation}
                  disabled={soumissionEnCours}
                  className="w-full py-4 rounded-2xl font-medium text-sm"
                  style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '2px solid #6b21a8' }}
                >
                  {soumissionEnCours ? 'Envoi en cours...' : '🚀 Soumettre mon dossier pour validation'}
                </button>
              )
            )}

          </div>
        )}

      </div>
    </main>
  )
}