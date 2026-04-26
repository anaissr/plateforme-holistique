'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

export default function Connexion() {
  const [type, setType] = useState<'patient' | 'praticien'>('patient')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')

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

        {/* FORMULAIRE */}
        <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
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
              className="w-full text-white py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = type === 'patient' ? '/patient' : '/dashboard' }}
            >
              Se connecter
            </button>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ backgroundColor: '#e7e5e4' }} />
            <span className="text-xs" style={{ color: '#a8a29e' }}>ou</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#e7e5e4' }} />
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="w-full py-3 rounded-2xl text-sm font-medium flex items-center justify-center gap-3"
              style={{ backgroundColor: '#faf9f7', color: '#1c1917', border: '1px solid #e7e5e4' }}
            >
              <span>🔵</span> Continuer avec Google
            </button>
            <button
              className="w-full py-3 rounded-2xl text-sm font-medium flex items-center justify-center gap-3"
              style={{ backgroundColor: '#faf9f7', color: '#1c1917', border: '1px solid #e7e5e4' }}
            >
              <span>🍎</span> Continuer avec Apple
            </button>
          </div>
        </div>

        {/* CRÉER UN COMPTE */}
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