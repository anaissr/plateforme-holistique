'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Connexion() {
  const [type, setType] = useState<'patient' | 'praticien'>('patient')
  const [mode, setMode] = useState<'connexion' | 'inscription'>('connexion')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')
  const [succes, setSucces] = useState('')

  const seConnecter = async () => {
    setChargement(true)
    setErreur('')

    const { error } = await supabase.auth.signInWithPassword({ email, password: motDePasse })

    if (error) {
      setErreur('Email ou mot de passe incorrect.')
      setChargement(false)
      return
    }

    window.location.href = type === 'patient' ? '/patient' : '/dashboard'
  }

  const sInscrire = async () => {
    if (!prenom || !nom || !email || !motDePasse) {
      setErreur('Veuillez remplir tous les champs.')
      return
    }
    setChargement(true)
    setErreur('')

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password: motDePasse,
    })

    if (authError) {
      setErreur(authError.message)
      setChargement(false)
      return
    }

    // Créer le profil patient en base
    const { error: dbError } = await supabase
      .from('patients')
      .insert({
        user_id: authData.user?.id,
        prenom,
        nom,
        email,
      })

    if (dbError) {
      setErreur(dbError.message)
      setChargement(false)
      return
    }

    setSucces('Compte créé ! Bienvenue sur Holistia 🌿')
    setTimeout(() => { window.location.href = '/patient' }, 1500)
    setChargement(false)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <div className="max-w-md mx-auto px-6 py-20">

        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🌿</div>
          <h1 className="text-3xl font-light mb-2" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            {mode === 'connexion' ? 'Connexion' : 'Créer un compte'}
          </h1>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Bienvenue sur Holistia</p>
        </div>

        {/* TOGGLE PATIENT / PRATICIEN */}
        <div className="flex rounded-2xl p-1 mb-6" style={{ backgroundColor: '#f5f3ff' }}>
          <button
            onClick={() => setType('patient')}
            className="flex-1 py-3 rounded-xl text-sm font-medium transition"
            style={{
              backgroundColor: type === 'patient' ? '#6b21a8' : 'transparent',
              color: type === 'patient' ? '#ffffff' : '#6b21a8',
            }}
          >
            Je suis patient
          </button>
          <button
            onClick={() => setType('praticien')}
            className="flex-1 py-3 rounded-xl text-sm font-medium transition"
            style={{
              backgroundColor: type === 'praticien' ? '#6b21a8' : 'transparent',
              color: type === 'praticien' ? '#ffffff' : '#6b21a8',
            }}
          >
            Je suis praticien
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>

          {erreur && (
            <div className="mb-4 p-3 rounded-xl text-sm" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
              {erreur}
            </div>
          )}
          {succes && (
            <div className="mb-4 p-3 rounded-xl text-sm" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
              {succes}
            </div>
          )}

          <div className="flex flex-col gap-4">

            {/* Champs inscription patient */}
            {mode === 'inscription' && type === 'patient' && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prénom *</label>
                  <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Marie"
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Nom *</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Laurent"
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
            </div>

            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Mot de passe *</label>
              <input
                type="password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
            </div>

            {mode === 'connexion' && (
              <div className="text-right">
                <button className="text-xs underline" style={{ color: '#6b21a8' }}>
                  Mot de passe oublié ?
                </button>
              </div>
            )}

            <button
              onClick={mode === 'connexion' ? seConnecter : sInscrire}
              disabled={chargement || !!succes}
              className="w-full text-white py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: chargement ? '#a855f7' : '#6b21a8' }}
            >
              {chargement ? 'Chargement...' : mode === 'connexion' ? 'Se connecter' : 'Créer mon compte'}
            </button>
          </div>
        </div>

        {/* SWITCH CONNEXION / INSCRIPTION */}
        <div className="text-center mt-6">
          {type === 'patient' && (
            mode === 'connexion' ? (
              <p className="text-sm" style={{ color: '#78716c' }}>
                Pas encore de compte ?{' '}
                <button
                  className="underline font-medium"
                  style={{ color: '#6b21a8' }}
                  onClick={() => { setMode('inscription'); setErreur('') }}
                >
                  Créer un compte patient
                </button>
              </p>
            ) : (
              <p className="text-sm" style={{ color: '#78716c' }}>
                Déjà un compte ?{' '}
                <button
                  className="underline font-medium"
                  style={{ color: '#6b21a8' }}
                  onClick={() => { setMode('connexion'); setErreur('') }}
                >
                  Se connecter
                </button>
              </p>
            )
          )}
          {type === 'praticien' && (
            <p className="text-sm" style={{ color: '#78716c' }}>
              Pas encore inscrit ?{' '}
              <button
                className="underline font-medium"
                style={{ color: '#6b21a8' }}
                onClick={() => { window.location.href = '/inscription' }}
              >
                Créer mon profil praticien
              </button>
            </p>
          )}
        </div>

      </div>
    </main>
  )
}