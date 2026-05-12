'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Nav() {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [utilisateur, setUtilisateur] = useState<{ role: 'praticien' | 'patient' | null }>({ role: null })

  useEffect(() => {
    const chargerSession = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data: prat } = await supabase.from('praticiens').select('id').eq('user_id', user.id).single()
      setUtilisateur({ role: prat ? 'praticien' : 'patient' })
    }
    chargerSession()
    const { data: listener } = supabase.auth.onAuthStateChange(() => chargerSession())
    return () => listener.subscription.unsubscribe()
  }, [])

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">

      {/* LOGO */}
      <button
        onClick={() => { window.location.href = '/' }}
        className="text-2xl font-semibold"
        style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}
        aria-label="Retour à l'accueil Holistia"
      >
        🌿 Holistia
      </button>

      {/* LIENS DESKTOP */}
      <div className="hidden md:flex gap-6 text-sm" style={{ color: '#78716c' }}>
        <button onClick={() => { window.location.href = '/recherche' }} className="hover:opacity-70 transition">
          Trouver un praticien
        </button>
        <button onClick={() => { window.location.href = '/orientation' }} className="hover:opacity-70 transition">
          Orientation
        </button>
        <button onClick={() => { window.location.href = '/specialites' }} className="hover:opacity-70 transition">
          Spécialités
        </button>
        <button onClick={() => { window.location.href = '/ateliers' }} className="hover:opacity-70 transition">
          Ateliers
        </button>
        <button onClick={() => { window.location.href = '/webinaires' }} className="hover:opacity-70 transition">
          Webinaires
        </button>
        <button onClick={() => { window.location.href = '/blog' }} className="hover:opacity-70 transition">
          Blog
        </button>
      </div>

      {/* BOUTONS DROITE */}
      <div className="hidden md:flex gap-3 items-center">
        {utilisateur.role ? (
          <>
            <button
              className="text-sm font-medium hover:underline"
              style={{ color: '#6b21a8' }}
              onClick={() => { window.location.href = utilisateur.role === 'praticien' ? '/dashboard' : '/patient' }}
            >
              Mon espace
            </button>
            <button
              className="text-white text-sm px-4 py-2 rounded-full transition"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={async () => { await supabase.auth.signOut(); window.location.href = '/' }}
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <button
              className="text-sm font-medium hover:underline"
              style={{ color: '#6b21a8' }}
              onClick={() => { window.location.href = '/connexion' }}
            >
              Connexion
            </button>
            <button
              className="text-white text-sm px-4 py-2 rounded-full transition"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/inscription' }}
            >
              Vous êtes praticien ?
            </button>
          </>
        )}
      </div>

      {/* BURGER MOBILE */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOuvert(!menuOuvert)}
        aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={menuOuvert}
      >
        <span className="w-6 h-0.5 block transition-all" style={{ backgroundColor: '#6b21a8', transform: menuOuvert ? 'rotate(45deg) translateY(8px)' : 'none' }} />
        <span className="w-6 h-0.5 block transition-all" style={{ backgroundColor: '#6b21a8', opacity: menuOuvert ? 0 : 1 }} />
        <span className="w-6 h-0.5 block transition-all" style={{ backgroundColor: '#6b21a8', transform: menuOuvert ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
      </button>

      {/* MENU MOBILE */}
      {menuOuvert && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col py-4 md:hidden" style={{ borderTop: '1px solid #e7e5e4' }}>
          {[
            { label: 'Trouver un praticien', href: '/recherche' },
            { label: 'Orientation', href: '/orientation' },
            { label: 'Spécialités', href: '/specialites' },
            { label: 'Ateliers', href: '/ateliers' },
            { label: 'Webinaires', href: '/webinaires' },
            { label: 'Blog', href: '/blog' },
          ].map((lien) => (
            <button
              key={lien.label}
              onClick={() => { window.location.href = lien.href; setMenuOuvert(false) }}
              className="text-left px-8 py-3 text-sm hover:opacity-70 transition"
              style={{ color: '#57534e' }}
            >
              {lien.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 px-8 pt-3 border-t mt-2" style={{ borderColor: '#e7e5e4' }}>
            {utilisateur.role ? (
              <>
                <button
                  className="text-sm font-medium text-left"
                  style={{ color: '#6b21a8' }}
                  onClick={() => { window.location.href = utilisateur.role === 'praticien' ? '/dashboard' : '/patient'; setMenuOuvert(false) }}
                >
                  Mon espace
                </button>
                <button
                  className="text-white text-sm px-4 py-2 rounded-full text-center"
                  style={{ backgroundColor: '#6b21a8' }}
                  onClick={async () => { await supabase.auth.signOut(); window.location.href = '/'; setMenuOuvert(false) }}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-sm font-medium text-left"
                  style={{ color: '#6b21a8' }}
                  onClick={() => { window.location.href = '/connexion'; setMenuOuvert(false) }}
                >
                  Connexion
                </button>
                <button
                  className="text-white text-sm px-4 py-2 rounded-full text-center"
                  style={{ backgroundColor: '#6b21a8' }}
                  onClick={() => { window.location.href = '/inscription'; setMenuOuvert(false) }}
                >
                  Vous êtes praticien ?
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </nav>
  )
}