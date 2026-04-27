'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function EspacePatient() {
  const [onglet, setOnglet] = useState<string | null>(null)
  const [chargement, setChargement] = useState(true)
  const [chargementProfil, setChargementProfil] = useState(false)
  const [succesProfil, setSuccesProfil] = useState('')
  const [erreurProfil, setErreurProfil] = useState('')
  const [indicatif, setIndicatif] = useState('+33')
  const [indicatifCustom, setIndicatifCustom] = useState('')

  const [profil, setProfil] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    age: '',
    situation: 'Célibataire',
    mode_preference: '',
    nb_enfants: "Pas d'enfant",
    profession: 'Salarié',
  })

  const [problematiques, setProblematiques] = useState<string[]>([])
  const [approchesDeja, setApprochesDeja] = useState<string[]>([])
  const [approchesInteresse, setApprochesInteresse] = useState<string[]>([])
  const [enfants, setEnfants] = useState<{ age: string, prenom: string }[]>([])

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
    { flag: '🇯🇵', code: '+81', pays: 'Japon' },
    { flag: '🇦🇺', code: '+61', pays: 'Australie' },
    { flag: '🇿🇦', code: '+27', pays: 'Afrique du Sud' },
    { flag: '🇧🇷', code: '+55', pays: 'Brésil' },
  ]

  useEffect(() => {
    const charger = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/connexion'; return }

      const { data } = await supabase
        .from('patients')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (data) {
        setProfil({
          prenom: data.prenom || '',
          nom: data.nom || '',
          email: data.email || '',
          telephone: data.telephone || '',
          ville: data.ville || '',
          pays: data.pays || '',
          age: data.age || '',
          situation: data.situation || 'Célibataire',
          mode_preference: data.mode_preference || '',
          nb_enfants: data.nb_enfants || "Pas d'enfant",
          profession: data.profession || 'Salarié',
        })
        if (data.problematiques) setProblematiques(data.problematiques)
        if (data.approches_deja) setApprochesDeja(data.approches_deja)
        if (data.approches_interesse) setApprochesInteresse(data.approches_interesse)
        if (data.enfants) setEnfants(data.enfants)
      }

      setOnglet('profil')
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

    const telComplet = profil.telephone
      ? `${indicatif === '+autre' ? indicatifCustom : indicatif} ${profil.telephone}`
      : ''

    const { error } = await supabase
      .from('patients')
      .update({
        prenom: profil.prenom,
        nom: profil.nom,
        telephone: telComplet,
        ville: profil.ville,
        pays: profil.pays,
        age: profil.age,
        situation: profil.situation,
        nb_enfants: profil.nb_enfants,
        profession: profil.profession,
        mode_preference: profil.mode_preference,
        problematiques,
        approches_deja: approchesDeja,
        approches_interesse: approchesInteresse,
        enfants,
      })
      .eq('user_id', user.id)

    if (error) setErreurProfil(error.message)
    else setSuccesProfil('Profil sauvegardé !')
    setChargementProfil(false)
  }

  const toggleItem = (list: string[], setList: (v: string[]) => void, item: string) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item])
  }

  const ajouterEnfant = () => setEnfants(prev => [...prev, { prenom: '', age: '' }])
  const supprimerEnfant = (i: number) => setEnfants(prev => prev.filter((_, idx) => idx !== i))
  const majEnfant = (i: number, champ: string, val: string) => setEnfants(prev => prev.map((e, idx) => idx === i ? { ...e, [champ]: val } : e))

  const PROBLEMATIQUES = [
    '😰 Stress et anxiété', '😴 Troubles du sommeil', '🦴 Douleurs chroniques',
    '🤢 Troubles digestifs', '🌸 Fertilité et PMA', '🔋 Fatigue chronique',
    '💔 Traumatismes', '🔥 Burn-out', '😨 Phobies', '🌸 Déséquilibres hormonaux',
    '🧍 Troubles posturaux', '⚡ Récupération sportive', '😔 Dépression légère',
    '👫 Relations difficiles', '🎯 Développement personnel',
  ]

  const SPECIALITES = [
    'Sophrologie', 'Naturopathie', 'Ostéopathie', 'Hypnothérapie',
    'Kinésiologie', 'Acupuncture', 'Réflexologie', 'Thérapies brèves',
    'Médecine traditionnelle chinoise', 'Fasciathérapie', 'Ayurveda',
    'Coaching holistique', 'Psychopraticien',
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

      <div className="max-w-5xl mx-auto px-8 py-8">

        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-light" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
              Bonjour {profil.prenom} 👋
            </h1>
            <p className="text-sm mt-1" style={{ color: '#a8a29e' }}>Votre espace personnel Holistia</p>
          </div>
          <div className="flex gap-3">
            <button
              className="text-white px-5 py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              + Prendre un RDV
            </button>
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
        <div className="flex gap-2 mb-8 border-b" style={{ borderColor: '#e7e5e4' }}>
          {[
            { id: 'rdv', label: 'Mes RDV' },
            { id: 'dossiers', label: 'Mes dossiers' },
            { id: 'favoris', label: 'Mes praticiens' },
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

        {/* RDV */}
        {onglet === 'rdv' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
            <p className="text-4xl mb-4">📅</p>
            <p className="font-medium mb-2" style={{ color: '#1c1917' }}>Aucun rendez-vous pour le moment</p>
            <p className="text-sm mb-6" style={{ color: '#a8a29e' }}>Trouvez un praticien et prenez votre premier rendez-vous</p>
            <button className="text-white px-6 py-3 rounded-2xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }} onClick={() => { window.location.href = '/recherche' }}>
              Trouver un praticien →
            </button>
          </div>
        )}

        {/* DOSSIERS */}
        {onglet === 'dossiers' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
            <p className="text-4xl mb-4">📁</p>
            <p className="font-medium mb-2" style={{ color: '#1c1917' }}>Aucun dossier pour le moment</p>
            <p className="text-sm" style={{ color: '#a8a29e' }}>Vos dossiers apparaîtront après vos premières consultations</p>
          </div>
        )}

        {/* FAVORIS */}
        {onglet === 'favoris' && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
            <p className="text-4xl mb-4">🩺</p>
            <p className="font-medium mb-2" style={{ color: '#1c1917' }}>Aucun praticien sauvegardé</p>
            <p className="text-sm mb-6" style={{ color: '#a8a29e' }}>Sauvegardez vos praticiens préférés pour les retrouver facilement</p>
            <button className="text-white px-6 py-3 rounded-2xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }} onClick={() => { window.location.href = '/recherche' }}>
              Trouver un praticien →
            </button>
          </div>
        )}

        {/* MON PROFIL */}
        {onglet === 'profil' && (
          <div className="flex flex-col gap-6">

            <div className="rounded-2xl p-5 flex gap-4" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-2xl">💙</span>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: '#6b21a8' }}>Ces informations sont là pour vous aider</p>
                <p className="text-xs leading-relaxed" style={{ color: '#7c3aed' }}>
                  Plus vous nous en dites sur vous, mieux nous pouvons vous orienter vers les praticiens qui correspondent vraiment à votre situation.
                </p>
              </div>
            </div>

            {erreurProfil && <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>⚠️ {erreurProfil}</div>}
            {succesProfil && <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>✅ {succesProfil}</div>}

            {/* INFOS DE BASE */}
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
                      value={profil[f.champ as keyof typeof profil]}
                      onChange={(e) => setProfil(prev => ({ ...prev, [f.champ]: e.target.value }))}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                ))}

              <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Âge</label>
                  <input
                    type="text"
                    value={profil.age}
                    onChange={(e) => setProfil(prev => ({ ...prev, age: e.target.value }))}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Situation professionnelle</label>
                  <select
                    value={profil.profession}
                    onChange={(e) => setProfil(prev => ({ ...prev, profession: e.target.value }))}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  >
                    <option>Salarié(e)</option>
                    <option>Indépendant(e) / Freelance</option>
                    <option>Manager / Cadre</option>
                    <option>Dirigeant(e) / Chef d'entreprise</option>
                    <option>Étudiant(e)</option>
                    <option>Sans emploi</option>
                    <option>Retraité(e)</option>
                    <option>Je préfère ne pas préciser</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Situation</label>
                  <select
                    value={profil.situation}
                    onChange={(e) => setProfil(prev => ({ ...prev, situation: e.target.value }))}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  >
                    <option>Célibataire</option>
                    <option>En couple</option>
                    <option>Je préfère ne pas préciser</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Enfants</label>
                  <select
                    value={profil.nb_enfants}
                    onChange={(e) => setProfil(prev => ({ ...prev, nb_enfants: e.target.value }))}
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  >
                    <option>Pas d'enfant</option>
                    <option>1 enfant</option>
                    <option>2 enfants</option>
                    <option>3 enfants</option>
                    <option>4 enfants et plus</option>
                    <option>Je préfère ne pas préciser</option>
                  </select>
                </div>
              </div>
            </div>

            {/* TÉLÉPHONE */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Téléphone</h2>
              <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>
                Optionnel — vous permettra de recevoir des rappels de RDV par SMS ou WhatsApp.
              </p>
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

            {/* PROBLÉMATIQUES */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Vos problématiques</h2>
              <p className="text-xs mb-5" style={{ color: '#a8a29e' }}>
                Qu'est-ce qui vous amène sur Holistia ? Sélectionnez tout ce qui vous correspond.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PROBLEMATIQUES.map((pb) => (
                  <button
                    key={pb}
                    onClick={() => toggleItem(problematiques, setProblematiques, pb)}
                    className="text-left px-3 py-2.5 rounded-xl text-xs transition"
                    style={{
                      backgroundColor: problematiques.includes(pb) ? '#f5f3ff' : '#faf9f7',
                      color: problematiques.includes(pb) ? '#6b21a8' : '#57534e',
                      border: problematiques.includes(pb) ? '1px solid #6b21a8' : '1px solid #e7e5e4',
                      fontWeight: problematiques.includes(pb) ? '600' : '400',
                    }}
                  >
                    {pb}
                  </button>
                ))}
              </div>
            </div>

            {/* PARCOURS BIEN-ÊTRE */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Votre parcours bien-être</h2>
              <p className="text-xs mb-5" style={{ color: '#a8a29e' }}>
                Avez-vous déjà essayé certaines approches ? Et lesquelles vous attirent ? Cela nous évite de vous orienter vers ce que vous avez déjà testé.
              </p>
              <p className="text-xs font-medium mb-3" style={{ color: '#57534e' }}>Approches déjà essayées :</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {SPECIALITES.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleItem(approchesDeja, setApprochesDeja, s)}
                    className="text-xs px-3 py-1.5 rounded-full transition"
                    style={{
                      backgroundColor: approchesDeja.includes(s) ? '#fef9c3' : '#faf9f7',
                      color: approchesDeja.includes(s) ? '#854d0e' : '#57534e',
                      border: approchesDeja.includes(s) ? '1px solid #fde047' : '1px solid #e7e5e4',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="text-xs font-medium mb-3" style={{ color: '#57534e' }}>Approches qui m'attirent :</p>
              <div className="flex flex-wrap gap-2">
                {SPECIALITES.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleItem(approchesInteresse, setApprochesInteresse, s)}
                    className="text-xs px-3 py-1.5 rounded-full transition"
                    style={{
                      backgroundColor: approchesInteresse.includes(s) ? '#f5f3ff' : '#faf9f7',
                      color: approchesInteresse.includes(s) ? '#6b21a8' : '#57534e',
                      border: approchesInteresse.includes(s) ? '1px solid #6b21a8' : '1px solid #e7e5e4',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* PRÉFÉRENCES */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-5" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Vos préférences</h2>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Mode de consultation préféré</label>
              <select
                value={profil.mode_preference}
                onChange={(e) => setProfil(prev => ({ ...prev, mode_preference: e.target.value }))}
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              >
                <option value="">Pas de préférence</option>
                <option>En cabinet uniquement</option>
                <option>En visio uniquement</option>
                <option>Les deux me conviennent</option>
              </select>
            </div>

            {/* ENFANTS */}
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Vos enfants</h2>
              <p className="text-xs mb-5" style={{ color: '#a8a29e' }}>
                Si vous cherchez aussi des praticiens pour vos enfants, indiquez leur prénom et âge pour qu'on vous oriente vers les spécialistes adaptés.
              </p>
              <div className="flex flex-col gap-3">
                {enfants.map((enfant, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <input
                      type="text"
                      value={enfant.prenom}
                      onChange={(e) => majEnfant(index, 'prenom', e.target.value)}
                      placeholder="Prénom"
                      className="flex-1 text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                    <input
                      type="text"
                      value={enfant.age}
                      onChange={(e) => majEnfant(index, 'age', e.target.value)}
                      placeholder="Âge"
                      className="text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917', width: '80px' }}
                    />
                    <button onClick={() => supprimerEnfant(index)} className="text-xs" style={{ color: '#dc2626' }}>✕</button>
                  </div>
                ))}
                <button
                  onClick={ajouterEnfant}
                  className="text-sm px-4 py-3 rounded-xl text-left"
                  style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px dashed #a855f7' }}
                >
                  + Ajouter un enfant
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

          </div>
        )}

      </div>
    </main>
  )
}