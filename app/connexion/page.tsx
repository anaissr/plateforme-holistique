'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Connexion() {
  const [type, setType] = useState<'patient' | 'praticien'>('patient')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')
  const [succes, setSucces] = useState('')

  const seConnecter = async () => {
    setChargement(true)
    setErreur('')
    setSucces('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: motDePasse,
    })

    if (error) {
      setErreur('Email ou mot de passe incorrect.')
      setChargement(false)
      return
    }

    setSucces('Connexion réussie ! Redirection...')
    setTimeout(() => {
      window.location.href = type === 'patient' ? '/patient' : '/dashboard'
    }, 1000)
  }

  const sInscrire = async () => {
    setChargement(true)
    setErreur('')

    const { data, error } = await supabase.auth.signUp({
      email,
      password: motDePasse,
    })

    if (error) {
setErreur(error.message)
      setChargement(false)
      return
    }

    setSucces('Compte créé ! Vérifiez votre email pour confirmer.')
    setChargement(false)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <div className="max-w-md mx-auto px-6 py-20">

        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🌿</div>
          <h1 className="text-3xl font-light mb-2" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            Connexion
          </h1>
          <p className="text-sm" style={{ color: '#a8a29e' }}>
            Bienvenue sur Holistia
          </p>
        </div>

        {/* TOGGLE PATIENT / PRATICIEN */}
        <div className="flex rounded-2xl p-1 mb-8" style={{ backgroundColor: '#f5f3ff' }}>
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
            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email</label>
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
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Mot de passe</label>
              <input
                type="password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              />
            </div>
            <div className="text-right">
              <button className="text-xs underline" style={{ color: '#6b21a8' }}>
                Mot de passe oublié ?
              </button>
            </div>
            <button
              onClick={seConnecter}
              disabled={chargement || !email || !motDePasse}
              className="w-full text-white py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: chargement ? '#a855f7' : '#6b21a8' }}
            >
              {chargement ? 'Connexion...' : 'Se connecter'}
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ backgroundColor: '#e7e5e4' }} />
            <span className="text-xs" style={{ color: '#a8a29e' }}>ou</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#e7e5e4' }} />
          </div>

          <button
            onClick={sInscrire}
            disabled={chargement || !email || !motDePasse}
            className="w-full py-3 rounded-2xl text-sm font-medium"
            style={{ backgroundColor: '#faf9f7', color: '#6b21a8', border: '1px solid #e7e5e4' }}
          >
            Créer un compte avec cet email
          </button>
        </div>

        <div className="text-center mt-6">
          {type === 'patient' ? (
            <p className="text-sm" style={{ color: '#78716c' }}>
              Pas encore de compte ?{' '}
              <button className="underline font-medium" style={{ color: '#6b21a8' }}>
                Créer un compte patient
              </button>
            </p>
          ) : (
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