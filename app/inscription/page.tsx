'use client'

import Nav from '@/app/components/Nav'
import { useState } from 'react'

export default function Inscription() {
  const [etape, setEtape] = useState(1)
  const [proposerAtelier, setProposerAtelier] = useState(false)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center relative" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Rejoignez Holistia
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: '#d8b4fe' }}>
          Créez votre profil praticien gratuitement — en ligne sous 48h
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {[
            '✓ Gratuit pendant 12 mois',
            '✓ 0% de commission',
            '✓ Visio incluse',
          ].map((item) => (
            <span key={item} className="text-sm px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ÉTAPES */}
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer"
                style={{
                  backgroundColor: etape >= n ? '#6b21a8' : '#e7e5e4',
                  color: etape >= n ? '#ffffff' : '#a8a29e',
                }}
                onClick={() => setEtape(n)}
              >
                {n}
              </div>
              {n < 4 && <div className="w-12 h-0.5" style={{ backgroundColor: etape > n ? '#6b21a8' : '#e7e5e4' }} />}
            </div>
          ))}
        </div>
        <p className="text-center text-xs mb-8" style={{ color: '#a8a29e' }}>
          {etape === 1 && 'Informations personnelles'}
          {etape === 2 && 'Votre pratique'}
          {etape === 3 && 'Tarifs et disponibilités'}
          {etape === 4 && 'Ateliers et extras'}
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16 flex flex-col gap-6">

        {/* ÉTAPE 1 — INFOS PERSONNELLES */}
        {etape === 1 && (
          <>
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Prénom', placeholder: 'Sophie' },
                  { label: 'Nom', placeholder: 'Laurent' },
                  { label: 'Email professionnel', placeholder: 'sophie@email.com' },
                  { label: 'Téléphone', placeholder: '+33 6 00 00 00 00' },
                  { label: 'Ville principale', placeholder: 'Paris' },
                  { label: 'Pays', placeholder: 'France' },
                ].map((champ) => (
                  <div key={champ.label}>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>{champ.label}</label>
                    <input
                      type="text"
                      placeholder={champ.placeholder}
                      className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                      style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Photo de profil
              </h2>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl" style={{ backgroundColor: '#f5f3ff', border: '2px dashed #e7e5e4' }}>
                  📷
                </div>
                <div>
                  <button className="text-white text-sm px-6 py-2 rounded-xl mb-2 block" style={{ backgroundColor: '#6b21a8' }}>
                    Choisir une photo
                  </button>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>JPG ou PNG · Max 5MB · Format carré recommandé</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ÉTAPE 2 — VOTRE PRATIQUE */}
        {etape === 2 && (
          <>
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Votre spécialité
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Spécialité principale</label>
                  <select className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}>
                    <option value="">Choisissez votre spécialité</option>
                    <option>Sophrologie</option>
                    <option>Naturopathie</option>
                    <option>Ostéopathie</option>
                    <option>Hypnothérapie</option>
                    <option>Kinésiologie</option>
                    <option>Acupuncture</option>
                    <option>Réflexologie</option>
                    <option>Thérapies brèves</option>
                    <option>Médecine traditionnelle chinoise</option>
                    <option>Fasciathérapie</option>
                    <option>Ayurveda</option>
                    <option>Coaching holistique</option>
                    <option>Psychopraticien</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>Public accompagné</label>
                  <div className="flex flex-wrap gap-2">
                    {['Adultes', 'Enfants', 'Adolescents', 'Bébés', 'Couples', 'Femmes enceintes', 'PMA', 'Sportifs'].map((p) => (
                      <button key={p} className="text-xs px-3 py-1.5 rounded-full transition" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px solid #ede9fe' }}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>Problématiques traitées</label>
                  <div className="flex flex-wrap gap-2">
                    {['Stress et anxiété', 'Troubles du sommeil', 'Douleurs chroniques', 'Troubles digestifs', 'Fatigue chronique', 'Fertilité et PMA', 'Traumatismes', 'Burn-out', 'Phobies', 'Déséquilibres hormonaux'].map((pb) => (
                      <button key={pb} className="text-xs px-3 py-1.5 rounded-full transition" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px solid #ede9fe' }}>
                        {pb}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Autre problématique non listée..."
                    className="w-full text-sm rounded-xl px-4 py-3 outline-none mt-3"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Expérience</label>
                  <select className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}>
                    <option>Moins de 2 ans</option>
                    <option>2 à 5 ans</option>
                    <option>5 à 10 ans</option>
                    <option>10 à 20 ans</option>
                    <option>Plus de 20 ans</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Présentation (bio)</label>
                  <textarea
                    placeholder="Décrivez votre approche, votre parcours et ce qui vous anime dans votre pratique..."
                    className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none"
                    style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '120px' }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Formations et diplômes
              </h2>
              <div className="flex flex-col gap-3">
                {[1, 2].map((i) => (
                  <div key={i} className="grid grid-cols-3 gap-3">
                    <input type="text" placeholder="Titre du diplôme" className="text-sm rounded-xl px-4 py-3 outline-none col-span-1" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    <input type="text" placeholder="École / Organisme" className="text-sm rounded-xl px-4 py-3 outline-none col-span-1" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    <input type="text" placeholder="Année" className="text-sm rounded-xl px-4 py-3 outline-none col-span-1" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                  </div>
                ))}
                <button className="text-sm text-left" style={{ color: '#6b21a8' }}>+ Ajouter une formation</button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Documents requis
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Assurance professionnelle (RC Pro)', required: true },
                  { label: 'Copie diplôme principal', required: true },
                  { label: 'Pièce d\'identité', required: true },
                  { label: 'Casier judiciaire (bulletin n°3)', required: false },
                ].map((doc) => (
                  <div key={doc.label} className="flex items-center justify-between p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{doc.label}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{doc.required ? 'Obligatoire' : 'Recommandé'}</p>
                    </div>
                    <button className="text-xs px-4 py-2 rounded-xl" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                      Téléverser
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ÉTAPE 3 — TARIFS ET DISPONIBILITÉS */}
        {etape === 3 && (
          <>
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Vos prestations et tarifs
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { nom: 'Bilan initial', duree: '1h30', tarif: '' },
                  { nom: 'Consultation de suivi', duree: '45min', tarif: '' },
                  { nom: 'Consultation visio', duree: '45min', tarif: '' },
                ].map((p, i) => (
                  <div key={i} className="grid grid-cols-3 gap-3">
                    <input type="text" defaultValue={p.nom} className="text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    <input type="text" defaultValue={p.duree} className="text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    <input type="text" placeholder="Tarif (ex: 70€)" className="text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                  </div>
                ))}
                <button className="text-sm text-left" style={{ color: '#6b21a8' }}>+ Ajouter une prestation</button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Mode de consultation
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'En cabinet', desc: 'Renseignez votre adresse' },
                  { label: 'En visio', desc: 'Zoom, Meet ou autre' },
                  { label: 'À domicile', desc: 'Déplacement chez le patient' },
                ].map((mode) => (
                  <div key={mode.label} className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                    <input type="checkbox" className="w-4 h-4" style={{ accentColor: '#6b21a8' }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{mode.label}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{mode.desc}</p>
                    </div>
                  </div>
                ))}
                <input type="text" placeholder="Adresse du cabinet (si applicable)" className="w-full text-sm rounded-xl px-4 py-3 outline-none mt-2" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Disponibilités habituelles
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((jour) => (
                  <div key={jour} className="p-3 rounded-xl text-center cursor-pointer" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
                    <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>{jour}</p>
                    <input type="text" placeholder="9h-18h" className="w-full text-xs text-center outline-none bg-transparent mt-1" style={{ color: '#78716c' }} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ÉTAPE 4 — ATELIERS ET EXTRAS */}
        {etape === 4 && (
          <>
            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-medium mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                    Proposer des ateliers collectifs
                  </h2>
                  <p className="text-xs" style={{ color: '#a8a29e' }}>
                    Diversifiez vos revenus en proposant des ateliers en groupe sur Holistia
                  </p>
                </div>
                <div
                  className="w-12 h-6 rounded-full flex items-center cursor-pointer transition flex-shrink-0"
                  style={{ backgroundColor: proposerAtelier ? '#6b21a8' : '#e7e5e4' }}
                  onClick={() => setProposerAtelier(!proposerAtelier)}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow transition-all" style={{ marginLeft: proposerAtelier ? '26px' : '2px' }} />
                </div>
              </div>

              {proposerAtelier && (
                <div className="flex flex-col gap-4 mt-6 pt-6" style={{ borderTop: '1px solid #f5f5f4' }}>
                  <div className="rounded-2xl p-4" style={{ backgroundColor: '#f5f3ff' }}>
                    <p className="text-xs font-medium mb-1" style={{ color: '#6b21a8' }}>💡 Comment ça marche</p>
                    <p className="text-xs" style={{ color: '#7c3aed' }}>
                      Renseignez ici votre premier atelier. Vous pourrez en ajouter d'autres depuis votre dashboard une fois votre profil validé. Holistia vous aide à cibler les participants selon leur profil et leurs problématiques.
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Titre de l'atelier</label>
                    <input type="text" placeholder="Ex: Atelier sophrologie — Gérer le stress au quotidien" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Date</label>
                      <input type="date" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Horaire</label>
                      <input type="text" placeholder="Ex: 10h00 — 12h00" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Format</label>
                      <select className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}>
                        <option>Visio</option>
                        <option>Présentiel</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Nombre de places max</label>
                      <input type="number" placeholder="15" max="15" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Tarif par personne</label>
                      <input type="text" placeholder="Ex: 35€" className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }} />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Niveau</label>
                      <select className="w-full text-sm rounded-xl px-4 py-3 outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}>
                        <option>Tous niveaux</option>
                        <option>Débutant</option>
                        <option>Intermédiaire</option>
                        <option>Avancé</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Description de l'atelier</label>
                    <textarea placeholder="Décrivez le contenu, les objectifs et ce que les participants vont apprendre..." className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '100px' }} />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Programme (une ligne par point)</label>
                    <textarea placeholder="Point 1&#10;Point 2&#10;Point 3" className="w-full text-sm rounded-xl px-4 py-3 resize-none outline-none" style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '80px' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Bons cadeaux
              </h2>
              <p className="text-xs mb-4" style={{ color: '#a8a29e' }}>
                Permettez à vos patients d'offrir vos consultations en bon cadeau — activé automatiquement sur votre profil.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <span className="text-2xl">🎁</span>
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>Bons cadeaux activés par défaut</p>
                  <p className="text-xs" style={{ color: '#7c3aed' }}>Vos patients pourront offrir n'importe quelle prestation de votre profil. Valables 1 an.</p>
                </div>
                <div className="w-12 h-6 rounded-full flex items-center cursor-pointer" style={{ backgroundColor: '#6b21a8' }}>
                  <div className="w-4 h-4 bg-white rounded-full shadow" style={{ marginLeft: '26px' }} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
              <h2 className="font-medium mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                Finaliser votre inscription
              </h2>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  'J\'accepte la charte qualité Holistia',
                  'J\'accepte les CGU et la politique de confidentialité',
                  'Je certifie que mes diplômes et assurance sont valides',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4" style={{ accentColor: '#6b21a8' }} />
                    <span className="text-sm" style={{ color: '#57534e' }}>{item}</span>
                  </div>
                ))}
              </div>
              <button
                className="w-full text-white py-4 rounded-2xl font-medium text-sm"
                style={{ backgroundColor: '#6b21a8' }}
              >
                Soumettre mon profil pour validation
              </button>
              <p className="text-xs text-center mt-3" style={{ color: '#a8a29e' }}>
                Votre profil sera en ligne sous 48h après validation par notre équipe
              </p>
            </div>
          </>
        )}

        {/* NAVIGATION ENTRE ÉTAPES */}
        <div className="flex justify-between mt-4">
          {etape > 1 ? (
            <button
              onClick={() => setEtape(etape - 1)}
              className="text-sm px-6 py-3 rounded-2xl"
              style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
            >
              ← Étape précédente
            </button>
          ) : <div />}
          {etape < 4 && (
            <button
              onClick={() => setEtape(etape + 1)}
              className="text-white text-sm px-6 py-3 rounded-2xl"
              style={{ backgroundColor: '#6b21a8' }}
            >
              Étape suivante →
            </button>
          )}
        </div>

      </div>
    </main>
  )
}