'use client'

import Nav from '@/app/components/Nav'
import { useState, useEffect } from 'react'

const specialitesRotatives = [
  'sophrologue',
  'naturopathe',
  'ostéopathe',
  'hypnothérapeute',
  'kinésiologue',
  'acupuncteur',
  'réflexologue',
  'praticien Palo Alto',
  'fasciathérapeute',
]

const photosRotatives = [
  {
    url: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&h=900&fit=crop&crop=center',
    label: 'Consultation naturopathie',
  },
  {
    url: 'https://images.unsplash.com/photo-1714976694810-85add1a29c96?w=900&h=900&fit=crop&crop=center',
    label: 'Thérapie brève',
  },
  {
    url: 'https://images.unsplash.com/photo-1699523229257-76f576d27eed?w=900&h=900&fit=crop&crop=center',
    label: 'Soin thérapeutique',
  },
  {
    url: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&h=900&fit=crop&crop=center',
    label: 'Ostéopathie',
  },
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [photoVisible, setPhotoVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % specialitesRotatives.length)
        setVisible(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoVisible(false)
      setTimeout(() => {
        setPhotoIndex((prev) => (prev + 1) % photosRotatives.length)
        setPhotoVisible(true)
      }, 600)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      {/* HERO */}
      <section className="w-full flex flex-col lg:flex-row" style={{ minHeight: '580px' }}>

        {/* Colonne texte */}
        <div
          className="flex flex-col justify-center items-center text-center px-6 sm:px-12 py-14 sm:py-20 relative w-full lg:w-auto"
          style={{
            background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)',
            flex: '0 0 55%',
          }}
        >
          {/* Courbe HAUT */}
          <div className="absolute top-0 left-0 w-full overflow-hidden z-10" style={{ marginTop: '-1px' }}>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
              <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
            </svg>
          </div>
          {/* Courbe BAS */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10" style={{ marginBottom: '-1px' }}>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
              <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
            </svg>
          </div>

          <p className="text-xs font-medium mb-3 uppercase tracking-widest" style={{ color: '#c4b5fd' }}>
            Prenez rendez-vous avec un
          </p>

          <h1 className="font-light text-white leading-tight mb-2" style={{ fontFamily: 'var(--font-lora)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <span style={{
              color: '#e9d5ff',
              display: 'inline-block',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(-8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}>
              {specialitesRotatives[index]}
            </span>
          </h1>

          <div className="w-16 h-0.5 my-5 mx-auto" style={{ backgroundColor: '#a855f7' }} />

          <p className="font-bold mb-2" style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}>
            <span style={{ color: '#ffffff' }}>Votre </span>
            <span style={{ color: '#f0abfc' }}>allié</span>
            <span style={{ color: '#ffffff' }}> pour trouver le bon </span>
            <span style={{ color: '#f0abfc' }}>accompagnement</span>
          </p>

          <p className="font-bold mb-8 max-w-sm" style={{ color: '#e9d5ff', fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)' }}>
            un praticien, ou plusieurs, qui travaillent ensemble pour vous.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md">
            <button
              className="px-6 py-3 rounded-2xl text-sm font-medium text-white transition shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              🔍 Je cherche un praticien
            </button>
            <button
              className="px-6 py-3 rounded-2xl text-sm font-medium transition shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
              onClick={() => { window.location.href = '/orientation' }}
            >
              💬 Je ne sais pas par où commencer
            </button>
          </div>
        </div>

        {/* Colonne photo rotative — cachée sur mobile */}
        <div className="relative hidden lg:block overflow-hidden" style={{ flex: '0 0 45%', minHeight: '580px' }}>
          {/* Courbe HAUT photo */}
          <div className="absolute top-0 left-0 w-full overflow-hidden z-10" style={{ marginTop: '-1px' }}>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
              <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
            </svg>
          </div>
          {/* Courbe BAS photo */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10" style={{ marginBottom: '-1px' }}>
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
              <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
            </svg>
          </div>

          {photosRotatives.map((photo, i) => (
            <img
              key={photo.url}
              src={photo.url}
              alt={photo.label}
              className="w-full h-full object-cover absolute inset-0"
              style={{
                opacity: i === photoIndex ? (photoVisible ? 1 : 0) : 0,
                transition: 'opacity 0.6s ease',
                minHeight: '580px',
              }}
            />
          ))}

          <div className="absolute bottom-16 left-8 bg-white rounded-2xl px-5 py-4 shadow-xl z-20" style={{ border: '1px solid #ede9fe' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ backgroundColor: '#f5f3ff' }}>✓</div>
              <div>
                <p className="text-sm font-medium" style={{ color: '#1c1917' }}>Praticien vérifié</p>
                <p className="text-xs" style={{ color: '#a8a29e' }}>Diplômes et assurance contrôlés</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-8 flex gap-2 z-20">
            {photosRotatives.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-all cursor-pointer"
                style={{ backgroundColor: i === photoIndex ? '#6b21a8' : 'rgba(107,33,168,0.3)' }}
                onClick={() => setPhotoIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12 px-6 shadow-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '1 200+', label: 'praticiens vérifiés' },
            { value: '12+', label: 'spécialités référencées' },
            { value: '0%', label: 'de commission' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-light mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: '#a8a29e' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI NOUS FAIRE CONFIANCE */}
      <section className="py-20 px-6 relative" style={{ backgroundColor: '#faf9f7' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto pt-8">
          <h2 className="text-2xl font-light text-center mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: '#a8a29e' }}>
            Chaque praticien est soigneusement sélectionné pour vous garantir un accompagnement de qualité
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: '🔍', titre: 'Praticiens vérifiés', desc: 'Diplômes, assurance professionnelle et parcours de formation contrôlés par notre équipe.' },
              { emoji: '⭐', titre: 'Avis authentiques', desc: 'Seuls les patients ayant réellement consulté peuvent laisser un avis. Écoute, ponctualité, clarté.' },
              { emoji: '🤝', titre: 'Praticiens collaboratifs', desc: 'Vos praticiens peuvent échanger entre eux sur votre dossier pour mieux vous accompagner, avec votre accord.' },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-3xl p-8 text-center shadow-sm" style={{ border: '1px solid #ede9fe' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4" style={{ backgroundColor: '#f5f3ff' }}>
                  {item.emoji}
                </div>
                <h3 className="font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{item.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPÉCIALITÉS */}
      <section className="py-20 px-6 relative bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto pt-8">
          <h2 className="text-2xl font-light text-center mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Les spécialités les plus recherchées
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: '#a8a29e' }}>
            En cabinet ou en visio — où que vous soyez
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { emoji: '🧘', label: 'Sophrologie' },
              { emoji: '🌿', label: 'Naturopathie' },
              { emoji: '🤲', label: 'Ostéopathie' },
              { emoji: '🧠', label: 'Hypnothérapie' },
              { emoji: '⚡', label: 'Kinésiologie' },
              { emoji: '🌸', label: 'Acupuncture' },
              { emoji: '💆', label: 'Réflexologie' },
              { emoji: '🗣️', label: 'Thérapies brèves' },
            ].map((spec) => (
              <button
                key={spec.label}
                className="bg-white rounded-2xl py-6 flex flex-col items-center gap-3 transition hover:shadow-md"
                style={{ border: '1px solid #e7e5e4' }}
                onClick={() => { window.location.href = '/recherche' }}
              >
                <span className="text-3xl">{spec.emoji}</span>
                <span className="text-base font-medium" style={{ color: '#57534e' }}>{spec.label}</span>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              className="text-white px-8 py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/specialites' }}
            >
              Voir toutes les spécialités
            </button>
          </div>
        </div>
      </section>

      {/* PAR PROBLÉMATIQUE */}
      <section className="py-20 px-6 relative" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,60 C480,0 960,60 1440,0 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto pt-8">
          <h2 className="text-2xl font-light text-center mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: '#78716c' }}>
            Décrivez votre situation — on vous oriente vers les bons praticiens
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { emoji: '😰', label: 'Stress et anxiété' },
              { emoji: '😴', label: 'Troubles du sommeil' },
              { emoji: '🦴', label: 'Douleurs chroniques' },
              { emoji: '🤢', label: 'Troubles digestifs' },
              { emoji: '🌸', label: 'Fertilité et PMA' },
              { emoji: '🔋', label: 'Fatigue chronique' },
            ].map((pb) => (
              <button
                key={pb.label}
                className="bg-white rounded-2xl py-6 px-4 flex items-center gap-3 transition hover:shadow-md"
                style={{ border: '1px solid #ede9fe' }}
onClick={() => { window.location.href = `/orientation?probleme=${encodeURIComponent(pb.label)}` }}
              >
                <span className="text-2xl">{pb.emoji}</span>
                <span className="text-base font-medium" style={{ color: '#57534e' }}>{pb.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRATICIENS EN VEDETTE */}
      <section className="py-20 px-6 relative bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#f5f3ff" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto pt-8">
          <h2 className="text-2xl font-light text-center mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Des praticiens de confiance, partout dans le monde
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: '#a8a29e' }}>
            En visio ou en cabinet — trouvez celui qui vous correspond
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face', nom: 'Sophie L.', specialite: 'Naturopathe', ville: 'Paris', note: '4.9' },
              { photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face', nom: 'Amélie C.', specialite: 'Sophrologue', ville: 'Bangkok', note: '5.0' },
              { photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face', nom: 'Marc D.', specialite: 'Ostéopathe', ville: 'Montréal', note: '4.8' },
              { photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face', nom: 'Pierre M.', specialite: 'Hypnothérapeute', ville: 'Lyon', note: '4.7' },
            ].map((p) => (
              <div
                key={p.nom}
                className="bg-white rounded-2xl overflow-hidden transition hover:shadow-md cursor-pointer"
                style={{ border: '1px solid #e7e5e4' }}
                onClick={() => { window.location.href = '/praticien' }}
              >
                <img src={p.photo} alt={p.nom} className="w-full h-40 object-cover object-top" />
                <div className="p-4">
                  <p className="font-medium text-sm" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{p.nom}</p>
                  <p className="text-xs" style={{ color: '#6b21a8' }}>{p.specialite}</p>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>📍 {p.ville}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs">⭐</span>
                    <span className="text-xs font-medium" style={{ color: '#1c1917' }}>{p.note}</span>
                    <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>Vérifié</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              className="text-white px-8 py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Voir tous les praticiens
            </button>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-20 px-6 relative" style={{ backgroundColor: '#faf9f7' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,60 C480,0 960,60 1440,0 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto pt-8 text-center">
          <h2 className="text-2xl font-light mb-10" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Ils ont trouvé leur accompagnement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                text: 'En 3 questions, Holistia m\'a orientée vers une naturopathe en visio. Je n\'aurais jamais trouvé seule ce qu\'il me fallait vraiment.',
                name: 'Sophie M.',
                role: 'Patiente, consultée en visio',
                photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
              },
              {
                text: 'Je me concentre enfin sur mes patients. Holistia s\'occupe de me faire connaître — mon agenda est plein en 2 mois.',
                name: 'Claire D.',
                role: 'Sophrologue, praticienne Holistia',
                photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-8 text-left shadow-sm" style={{ border: '1px solid #ede9fe' }}>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#57534e', fontFamily: 'var(--font-lora)', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-sm" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: '#a8a29e' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PRATICIEN */}
      <section className="py-20 px-6 relative bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto pt-8 text-center">
          <h2 className="text-2xl font-light mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Vous êtes praticien ?
          </h2>
          <p className="text-sm mb-12" style={{ color: '#78716c' }}>
            Concentrez-vous sur vos patients. On s'occupe de vous faire connaître.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {[
              { emoji: '📅', titre: 'Agenda en ligne', desc: 'Gérez vos RDV simplement, synchronisé avec Google Agenda' },
              { emoji: '🌍', titre: 'Visibilité mondiale', desc: 'Accédez à une clientèle francophone partout dans le monde' },
              { emoji: '🤝', titre: 'Réseau de pairs', desc: 'Échangez avec d\'autres praticiens pour mieux accompagner vos patients' },
              { emoji: '0%', titre: 'Zéro commission', desc: 'Gardez 100% de vos honoraires — on ne prend rien sur vos RDV' },
            ].map((b) => (
              <div key={b.titre} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                  {b.emoji}
                </div>
                <h3 className="font-medium text-sm" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{b.titre}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#a8a29e' }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <button
            className="text-white px-10 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#6b21a8' }}
            onClick={() => { window.location.href = '/inscription' }}
          >
            Créer mon profil gratuitement
          </button>
          <p className="text-xs mt-3" style={{ color: '#a8a29e' }}>
            Gratuit pendant 12 mois · Aucun engagement · Profil en ligne sous 48h
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 text-sm relative" style={{ backgroundColor: '#1c1917', color: '#a8a29e' }}>
        <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '40px', width: '100%' }}>
            <path d="M0,20 C480,40 960,0 1440,20 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto flex justify-between items-center pt-4">
          <div className="text-white font-medium" style={{ fontFamily: 'var(--font-lora)' }}>🌿 Holistia</div>
          <div className="flex gap-6">
            {['À propos', 'Charte qualité', 'Blog', 'Contact', 'CGU'].map((link) => (
              <button key={link} className="hover:text-white transition">{link}</button>
            ))}
          </div>
        </div>
      </footer>

    </main>
  )
}