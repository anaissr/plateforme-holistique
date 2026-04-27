'use client'

import Nav from '@/app/components/Nav'

export default function PaiementSuccess() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />
      <div className="text-center px-6 py-20">
        <p className="text-6xl mb-6">🎉</p>
        <h1 className="text-3xl font-light mb-4" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
          Paiement réussi !
        </h1>
        <p className="text-sm mb-2" style={{ color: '#57534e' }}>
          Votre bon cadeau a bien été enregistré.
        </p>
        <p className="text-sm mb-8" style={{ color: '#57534e' }}>
          Un email de confirmation vous a été envoyé avec tous les détails.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            className="text-white px-6 py-3 rounded-2xl text-sm font-medium"
            style={{ backgroundColor: '#6b21a8' }}
            onClick={() => { window.location.href = '/' }}
          >
            Retour à l'accueil
          </button>
          <button
            className="text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/patient' }}
          >
            Mon espace patient
          </button>
        </div>
      </div>
    </main>
  )
}