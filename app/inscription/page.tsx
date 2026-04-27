'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Inscription() {
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')
  const [succes, setSucces] = useState('')

  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    specialite: '',
    motDePasse: '',
    visio: false,
    cabinet: false,
  })

  const update = (champ: string, valeur: string | boolean) => {
    setForm(prev => ({ ...prev, [champ]: valeur }))
  }

  const soumettre = async () => {
    if (!form.email || !form.motDePasse || !form.prenom || !form.nom) {
      setErreur('Veuillez remplir au moins votre prénom, nom, email et mot de passe.')
      return
    }
    setChargement(true)
    setErreur('')

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.motDePasse,
    })

    if (authError) {
      setErreur(authError.message)
      setChargement(false)
      return
    }

    const { error: dbError } = await supabase
      .from('praticiens')
.insert({
        user_id: authData.user?.id,
        nom: `${form.prenom} ${form.nom}`,
        email: form.email,
        telephone: form.telephone,
        ville: form.ville,
        pays: form.pays,
        specialite: form.specialite,
        visio: form.visio,
        valide: false,
        actif: false,
      })

if (dbError) {
      setErreur('DB Error: ' + dbError.message + ' | Code: ' + dbError.code + ' | Details: ' + dbError.details)
      setChargement(false)
      return
    }

    setSucces('Votre dossier a bien été soumis ! Nous revenons vers vous sous 48h.')
    setChargement(false)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center relative" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Rejoignez Holistia
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: '#d8b4fe' }}>
          Créez votre profil en 2 minutes — complétez les détails plus tard
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {['✓ Gratuit pendant 12 mois', '✓ 0% de commission', '✓ Visio incluse'].map((item) => (
            <span key={item} className="text-sm px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="max-w-xl mx-auto px-6 py-12 flex flex-col gap-6">

        {erreur && (
          <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
            {erreur}
          </div>
        )}
        {succes && (
          <div className="p-4 rounded-2xl text-sm" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
            🎉 {succes}
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Informations essentielles
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prénom *</label>
                <input
                  type="text"
                  value={form.prenom}
                  onChange={(e) => update('prenom', e.target.value)}
                  placeholder="Sophie"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Nom *</label>
                <input
                  type="text"
                  value={form.nom}
                  onChange={(e) => update('nom', e.target.value)}
                  placeholder="Laurent"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email professionnel *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="sophie@email.com"
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
            </div>

            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Mot de passe *</label>
              <input
                type="password"
                value={form.motDePasse}
                onChange={(e) => update('motDePasse', e.target.value)}
                placeholder="Minimum 6 caractères"
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
            </div>

            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Spécialité principale *</label>
              <select
                value={form.specialite}
                onChange={(e) => update('specialite', e.target.value)}
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              >
                <option value="">Choisissez votre spécialité</option>
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
                <option>Autre</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Ville</label>
                <input
                  type="text"
                  value={form.ville}
                  onChange={(e) => update('ville', e.target.value)}
                  placeholder="Paris"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Pays</label>
                <input
                  type="text"
                  value={form.pays}
                  onChange={(e) => update('pays', e.target.value)}
                  placeholder="France"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>Mode de consultation</label>
              <div className="flex gap-3">
                {[
                  { label: '🏥 En cabinet', champ: 'cabinet' },
                  { label: '🖥 En visio', champ: 'visio' },
                ].map((mode) => (
                  <button
                    key={mode.champ}
                    onClick={() => update(mode.champ, !form[mode.champ as keyof typeof form])}
                    className="flex-1 py-3 rounded-xl text-sm font-medium transition"
                    style={{
                      backgroundColor: form[mode.champ as keyof typeof form] ? '#f5f3ff' : '#faf9f7',
                      color: form[mode.champ as keyof typeof form] ? '#6b21a8' : '#a8a29e',
                      border: form[mode.champ as keyof typeof form] ? '2px solid #6b21a8' : '1px solid #e7e5e4',
                    }}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <div className="flex flex-col gap-3 mb-6">
            {[
              "J'accepte la charte qualité Holistia",
              "J'accepte les CGU et la politique de confidentialité",
              "Je certifie que mes diplômes et assurance sont valides",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" style={{ accentColor: '#6b21a8' }} />
                <span className="text-sm" style={{ color: '#57534e' }}>{item}</span>
              </div>
            ))}
          </div>
          <button
            onClick={soumettre}
            disabled={chargement || !!succes}
            className="w-full text-white py-4 rounded-2xl font-medium text-sm"
            style={{ backgroundColor: chargement ? '#a855f7' : '#6b21a8' }}
          >
            {chargement ? 'Envoi en cours...' : 'Créer mon profil gratuitement'}
          </button>
          <p className="text-xs text-center mt-3" style={{ color: '#a8a29e' }}>
            Profil en ligne sous 48h · Vous pourrez compléter les détails depuis votre dashboard
          </p>
        </div>

      </div>
    </main>
  )
}