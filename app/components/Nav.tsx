'use client'

import { useState } from 'react'

export default function Nav() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">

      {/* LOGO */}
      <button
        onClick={() => { window.location.href = '/' }}
        className="text-2xl font-semibold"
        style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}
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
        <button className="hover:opacity-70 transition">
          Blog
        </button>
      </div>

      {/* BOUTONS DROITE */}
      <div className="hidden md:flex gap-3 items-center">
        <button
          className="text-sm font-medium hover:underline"
          style={{ color: '#6b21a8' }}
          onClick={() => { window.location.href = '/patient' }}
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
      </div>

      {/* BURGER MOBILE */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOuvert(!menuOuvert)}
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
            { label: 'Blog', href: '#' },
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
            <button
              className="text-sm font-medium text-left"
              style={{ color: '#6b21a8' }}
              onClick={() => { window.location.href = '/patient' }}
            >
              Connexion
            </button>
            <button
              className="text-white text-sm px-4 py-2 rounded-full text-center"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/inscription' }}
            >
              Vous êtes praticien ?
            </button>
          </div>
        </div>
      )}

    </nav>
  )
}