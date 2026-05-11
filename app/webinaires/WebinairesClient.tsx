'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

export default function Webinaires() {
  const [modaleOuverte, setModaleOuverte] = useState(false)
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [specialite, setSpecialite] = useState('')
  const [dejaPraticien, setDejaPraticien] = useState(false)
  const [message, setMessage] = useState('')
  const [chargement, setChargement] = useState(false)
  const [succes, setSucces] = useState(false)

  const reinitialiser = () => {
    setNom(''); setEmail(''); setSpecialite(''); setDejaPraticien(false); setMessage('')
    setSucces(false); setModaleOuverte(false)
  }

  const envoyer = async () => {
    if (!nom || !email || !specialite || !message) return
    setChargement(true)
    await fetch('/api/email-webinaire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, specialite, dejaPraticien, message }),
    })
    setChargement(false)
    setSucces(true)
  }

  const formulaireValide = nom && email && specialite && message

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* MODALE PROPOSITION */}
      {modaleOuverte && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => { if (!succes) setModaleOuverte(false) }}
        >
          <div
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl overflow-y-auto"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {succes ? (
              <div className="text-center py-6">
                <p className="text-4xl mb-4">🎙️</p>
                <h2 className="text-xl font-medium mb-3" style={{ color: '#16a34a', fontFamily: 'var(--font-lora)' }}>
                  Proposition envoyée !
                </h2>
                <p className="text-sm mb-6" style={{ color: '#57534e' }}>
                  Merci pour votre intérêt. Notre équipe reviendra vers vous sous 72h pour discuter de votre proposition de webinaire.
                </p>
                <button
                  onClick={reinitialiser}
                  className="px-6 py-2.5 rounded-xl text-sm font-medium"
                  style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <p className="text-4xl mb-3">🎙️</p>
                  <h2 className="text-xl font-medium mb-1" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                    Proposer un webinaire
                  </h2>
                  <p className="text-sm" style={{ color: '#a8a29e' }}>
                    Notre équipe vous recontactera sous 72h.
                  </p>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prénom et nom *</label>
                    <input
                      type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Sophie Martin"
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sophie@email.com"
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre spécialité *</label>
                    <input
                      type="text"
                      value={specialite}
                      onChange={(e) => setSpecialite(e.target.value)}
                      placeholder="Sophrologie, naturopathie, ostéopathie..."
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dejaPraticien}
                      onChange={(e) => setDejaPraticien(e.target.checked)}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: '#6b21a8' }}
                    />
                    <span className="text-sm" style={{ color: '#57534e' }}>Je suis déjà praticien inscrit sur Holistia</span>
                  </label>

                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Votre proposition de webinaire *</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez le sujet que vous souhaitez présenter, le public visé, et la durée approximative..."
                      rows={5}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none resize-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                </div>

                <button
                  onClick={envoyer}
                  disabled={!formulaireValide || chargement}
                  className="w-full py-3 rounded-2xl text-sm font-medium text-white mb-3 transition"
                  style={{ backgroundColor: formulaireValide ? '#6b21a8' : '#d8b4fe' }}
                >
                  {chargement ? 'Envoi en cours...' : 'Envoyer ma proposition'}
                </button>
                <button onClick={() => setModaleOuverte(false)} className="w-full py-2 text-sm" style={{ color: '#a8a29e' }}>
                  Annuler
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 py-16 text-center relative" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🎙️ Rencontres en ligne avec nos praticiens experts
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Webinaires Holistia
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Pour mieux comprendre les médecines douces et leurs interactions, et comment elles peuvent contribuer à une meilleure santé globale.
        </p>
      </section>

      {/* PROCHAINS WEBINAIRES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-light mb-8" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
          Prochains webinaires
        </h2>
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <p className="text-4xl mb-4">📅</p>
          <p className="font-medium mb-2" style={{ color: '#1c1917' }}>Aucun webinaire programmé pour le moment</p>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Revenez bientôt — de nouveaux webinaires sont en cours de préparation.</p>
        </div>
      </section>

      {/* WEBINAIRES PASSÉS */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-light mb-8" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
          Webinaires passés
        </h2>
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <p className="text-4xl mb-4">🎙️</p>
          <p className="text-sm" style={{ color: '#a8a29e' }}>Les replays apparaîtront ici après chaque webinaire.</p>
        </div>
      </section>

      {/* CTA PRATICIEN */}
      <section className="py-16 px-6 relative" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,0 960,60 1440,30 L1440,0 L0,0 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="max-w-2xl mx-auto text-center pt-4">
          <h2 className="text-2xl font-light mb-3" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            Vous êtes praticien ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#78716c' }}>
            Partagez votre expertise avec la communauté Holistia en animant un webinaire. Nous nous occupons de la diffusion et de la promotion.
          </p>
          <button
            onClick={() => setModaleOuverte(true)}
            className="inline-block text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Je veux proposer un webinaire
          </button>
        </div>
      </section>

    </main>
  )
}
