'use client'

import { useState } from 'react'

export default function Nav() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  const liens = [
    { label: 'Trouver un praticien', href: '/recherche' },
    { label: 'Je ne sais pas par où commencer', href: '/orientation' },
    { label: 'Les spécialités', href: '/specialites' },
    { label: 'Blog', href: '#' },
  ]

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm relative z-50">
      <button
        onClick={() => { window.location.href = '/' }}
        className="text-2xl font-semibold flex-shrink-0"
        style={{ color: '#6b21a8' }}
      >
        🌿 Holistia
      </button>

      <div className="hidden md:flex gap-6 text-sm" style={{ color: '#78716c' }}>
        {liens.map((lien) => (
          <button
            key={lien.label}
            onClick={() => { window.location.href = lien.href }}
            className="hover:opacity-70 transition"
          >
            {lien.label}
          </button>
        ))}
      </div>

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

      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOuvert(!menuOuvert)}
      >
        <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#6b21a8', transform: menuOuvert ? 'rotate(45deg) translateY(8px)' : 'none' }} />
        <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#6b21a8', opacity: menuOuvert ? 0 : 1 }} />
        <div className="w-6 h-0.5 transition-all" style={{ backgroundColor: '#6b21a8', transform: menuOuvert ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
      </button>

      {menuOuvert && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-8 flex flex-col gap-3 md:hidden"
          style={{ borderTop: '1px solid #e7e5e4' }}
        >
          {liens.map((lien) => (
            <button
              key={lien.label}
              onClick={() => { window.location.href = lien.href; setMenuOuvert(false) }}
              className="text-sm text-left py-2 hover:opacity-70 transition"
              style={{ color: '#78716c' }}
            >
              {lien.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2" style={{ borderTop: '1px solid #e7e5e4' }}>
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