'use client'

import Nav from '@/app/components/Nav'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function ConnexionContent() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect')

  const [type, setType] = useState<'patient' | 'praticien'>('patient')
  const [mode, setMode] = useState<'connexion' | 'inscription'>('connexion')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')
  const [succes, setSucces] = useState('')
  const [motDePasseOublie, setMotDePasseOublie] = useState(false)
  const [voirMdp, setVoirMdp] = useState(false)

  const reinitialiserMotDePasse = async () => {
    if (!email) { setErreur('Entrez votre email pour recevoir un lien de réinitialisation.'); return }
    setChargement(true)
    setErreur('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/connexion`,
    })
    if (error) { setErreur(error.message); setChargement(false); return }
    setSucces('Email envoyé ! Vérifiez votre boîte mail.')
    setChargement(false)
  }

  const seConnecter = async () => {
    setChargement(true)
    setErreur('')

    const { error } = await supabase.auth.signInWithPassword({ email, password: motDePasse })

    if (error) {
      setErreur('Email ou mot de passe incorrect.')
      setChargement(false)
      return
    }

    window.location.href = redirectUrl || (type === 'patient' ? '/patient' : '/dashboard')
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
    setTimeout(() => { window.location.href = redirectUrl || '/patient' }, 1500)
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
          <p className="text-sm" style={{ color: '#78716c' }}>Bienvenue sur Holistia</p>
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
              <div className="relative">
                <input
                  type={voirMdp ? 'text' : 'password'}
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none pr-11"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
                <button
                  type="button"
                  onClick={() => setVoirMdp(!voirMdp)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: '#78716c' }}
                >
                  {voirMdp ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            {mode === 'connexion' && !motDePasseOublie && (
              <div className="text-right">
                <button
                  className="text-xs underline"
                  style={{ color: '#6b21a8' }}
                  onClick={() => setMotDePasseOublie(true)}
                >
                  Mot de passe oublié ?
                </button>
              </div>
            )}
            {motDePasseOublie && (
              <div className="p-3 rounded-xl text-sm" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                Entrez votre email ci-dessus puis cliquez sur "Envoyer le lien".
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={reinitialiserMotDePasse}
                    disabled={chargement}
                    className="text-xs px-3 py-1.5 rounded-lg text-white"
                    style={{ backgroundColor: '#6b21a8' }}
                  >
                    Envoyer le lien
                  </button>
                  <button
                    onClick={() => setMotDePasseOublie(false)}
                    className="text-xs px-3 py-1.5 rounded-lg"
                    style={{ border: '1px solid #6b21a8', color: '#6b21a8' }}
                  >
                    Annuler
                  </button>
                </div>
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

export default function Connexion() {
  return (
    <Suspense>
      <ConnexionContent />
    </Suspense>
  )
}