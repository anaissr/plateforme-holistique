'use client'

import { useState } from 'react'

const etapes = [
  { id: 1, titre: 'Informations' },
  { id: 2, titre: 'Pratique' },
  { id: 3, titre: 'Formations' },
  { id: 4, titre: 'Tarifs' },
  { id: 5, titre: 'Validation' },
]

export default function Inscription() {
  const [etape, setEtape] = useState(1)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <span className="text-2xl font-semibold" style={{ color: '#6b21a8' }}>
          🌿 Holistia
        </span>
        <p className="text-sm" style={{ color: '#a8a29e' }}>
          Inscription praticien — 100% gratuit
        </p>
      </nav>

      <section
        className="px-6 py-10 text-center"
        style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}
      >
        <span
          className="inline-block text-xs px-4 py-1.5 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}
        >
          Rejoignez 1 200+ praticiens
        </span>
        <h1
          className="text-3xl font-light text-white mb-3"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Créez votre profil gratuitement
        </h1>
        <p className="text-sm max-w-md mx-auto" style={{ color: '#d8b4fe' }}>
          Visibilité internationale, agenda en ligne, 0% de commission.
        </p>
      </section>

      <div className="bg-white border-b" style={{ borderColor: '#e7e5e4' }}>
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {etapes.map((e, i) => (
              <div key={e.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{
                      backgroundColor: etape >= e.id ? '#6b21a8' : '#e7e5e4',
                      color: etape >= e.id ? '#ffffff' : '#a8a29e',
                    }}
                  >
                    {etape > e.id ? '✓' : e.id}
                  </div>
                  <p
                    className="text-xs mt-1 hidden sm:block text-center"
                    style={{ color: etape >= e.id ? '#6b21a8' : '#a8a29e' }}
                  >
                    {e.titre}
                  </p>
                </div>
                {i < etapes.length - 1 && (
                  <div
                    className="h-0.5 w-8 sm:w-16 mx-1 sm:-mt-4"
                    style={{ backgroundColor: etape > e.id ? '#6b21a8' : '#e7e5e4' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {etape === 1 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-xl font-medium mb-6" style={{ color: '#1c1917' }}>
              Informations personnelles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Prénom</label>
                <input
                  type="text"
                  placeholder="Sophie"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Nom</label>
                <input
                  type="text"
                  placeholder="Laurent"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Email professionnel</label>
                <input
                  type="email"
                  placeholder="sophie@cabinet.fr"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Téléphone</label>
                <input
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Pays de résidence</label>
                <select
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                >
                  <option value="">Sélectionner...</option>
                  <option>France</option>
                  <option>Belgique</option>
                  <option>Suisse</option>
                  <option>Canada</option>
                  <option>Thaïlande</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Ville</label>
                <input
                  type="text"
                  placeholder="Paris"
                  className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>Mode de consultation</label>
              <div className="flex gap-3 flex-wrap">
                {['En cabinet uniquement', 'En visio uniquement', 'Cabinet et visio'].map((mode) => (
                  <button
                    key={mode}
                    className="text-sm px-4 py-2 rounded-xl border transition"
                    style={{ borderColor: '#e7e5e4', color: '#57534e', backgroundColor: 'white' }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>
                Photo de profil — visage bien visible, fond neutre
              </label>
              <div
                className="border-2 border-dashed rounded-2xl p-8 text-center"
                style={{ borderColor: '#e7e5e4' }}
              >
                <div className="text-3xl mb-2">📸</div>
                <p className="text-sm font-medium" style={{ color: '#57534e' }}>Glissez votre photo ici</p>
                <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>JPG ou PNG — minimum 400x400px</p>
                <button
                  className="mt-3 text-xs px-4 py-2 rounded-xl"
                  style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                >
                  Parcourir les fichiers
                </button>
              </div>
            </div>
          </div>
        )}

        {etape === 2 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-xl font-medium mb-6" style={{ color: '#1c1917' }}>Votre pratique</h2>

            <div className="mb-4">
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Spécialité principale</label>
              <select
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              >
                <option value="">Choisir...</option>
                <option>Sophrologie</option>
                <option>Naturopathie</option>
                <option>Ostéopathie</option>
                <option>Hypnothérapie</option>
                <option>Kinésiologie</option>
                <option>Acupuncture / MTC</option>
                <option>Réflexologie</option>
                <option>Thérapies brèves / Palo Alto</option>
                <option>Psychopraticien</option>
                <option>Coach de vie</option>
                <option>Fasciathérapie</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>Public accompagné</label>
              <div className="flex flex-wrap gap-2">
                {['Adultes', 'Adolescents', 'Enfants', 'Couples', 'Femmes enceintes', 'PMA et fertilité', 'Seniors', 'Sportifs'].map((p) => (
                  <button
                    key={p}
                    className="text-xs px-3 py-1.5 rounded-full border transition"
                    style={{ borderColor: '#e7e5e4', color: '#57534e', backgroundColor: 'white' }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>Problématiques traitées</label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Stress et anxiété', 'Troubles du sommeil', 'Douleurs chroniques',
                  'Troubles digestifs', 'Fatigue chronique', 'PMA et fertilité',
                  'Burn-out', 'Traumatismes', 'Deuil', 'Phobies',
                  'Développement personnel',
                ].map((pb) => (
                  <button
                    key={pb}
                    className="text-xs px-3 py-1.5 rounded-full border transition"
                    style={{ borderColor: '#e7e5e4', color: '#57534e', backgroundColor: 'white' }}
                  >
                    {pb}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>
                Présentation de votre pratique
              </label>
              <textarea
                placeholder="Décrivez votre approche, votre parcours..."
                className="w-full text-sm rounded-xl px-4 py-3 outline-none resize-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917', height: '150px' }}
              />
            </div>

            <div>
              <label className="text-xs font-medium block mb-2" style={{ color: '#78716c' }}>
                Médias optionnels — photos, vidéo de présentation
              </label>
              <div
                className="border-2 border-dashed rounded-2xl p-6 text-center"
                style={{ borderColor: '#e7e5e4' }}
              >
                <div className="text-2xl mb-2">🎥</div>
                <p className="text-sm" style={{ color: '#57534e' }}>Photos ou vidéo de présentation</p>
                <p className="text-xs mt-1" style={{ color: '#a8a29e' }}>Max 5 fichiers — JPG, PNG ou MP4</p>
                <button
                  className="mt-3 text-xs px-4 py-2 rounded-xl"
                  style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                >
                  Ajouter des médias
                </button>
              </div>
            </div>
          </div>
        )}

        {etape === 3 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-xl font-medium mb-2" style={{ color: '#1c1917' }}>Formations et certifications</h2>
            <p className="text-sm mb-6" style={{ color: '#a8a29e' }}>
              Documents vérifiés par notre équipe sous 48h.
            </p>

            <div
              className="rounded-2xl p-4 mb-6 flex gap-3"
              style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}
            >
              <span className="text-lg">🔒</span>
              <div>
                <p className="text-sm font-medium" style={{ color: '#6b21a8' }}>Vérification obligatoire</p>
                <p className="text-xs mt-0.5" style={{ color: '#7c3aed' }}>
                  SIRET, assurance professionnelle et diplôme requis pour apparaître sur la plateforme.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {[
                { label: 'SIRET ou numéro professionnel', desc: "Numéro d identification de votre activité", icon: '🏢' },
                { label: 'Assurance professionnelle', desc: 'Attestation en cours de validité', icon: '🛡' },
                { label: 'Diplôme de formation principal', desc: 'Votre formation principale', icon: '🎓' },
                { label: 'Certifications complémentaires', desc: 'Formations additionnelles (optionnel)', icon: '📜' },
              ].map((doc) => (
                <div
                  key={doc.label}
                  className="flex items-center justify-between p-4 rounded-2xl"
                  style={{ border: '1px solid #e7e5e4', backgroundColor: '#faf9f7' }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{doc.icon}</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#1c1917' }}>{doc.label}</p>
                      <p className="text-xs" style={{ color: '#a8a29e' }}>{doc.desc}</p>
                    </div>
                  </div>
                  <button
                    className="text-xs px-4 py-2 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}
                  >
                    Uploader
                  </button>
                </div>
              ))}
            </div>

            <div>
              <label className="text-xs font-medium block mb-1" style={{ color: '#78716c' }}>Années d expérience</label>
              <select
                className="w-full text-sm rounded-xl px-4 py-3 outline-none"
                style={{ border: '1px solid #e7e5e4', color: '#1c1917' }}
              >
                <option>Moins d un an</option>
                <option>1 à 3 ans</option>
                <option>3 à 5 ans</option>
                <option>5 à 10 ans</option>
                <option>Plus de 10 ans</option>
              </select>
            </div>
          </div>
        )}

        {etape === 4 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
            <h2 className="text-xl font-medium mb-2" style={{ color: '#1c1917' }}>Tarifs et disponibilités</h2>
            <p className="text-sm mb-6" style={{ color: '#a8a29e' }}>
              Modifiable à tout moment depuis votre tableau de bord.
            </p>

            <div className="mb-6">
              <label className="text-xs font-medium block mb-3" style={{ color: '#78716c' }}>Vos prestations</label>
              <div className="flex flex-col gap-3">
                {[
                  { nom: 'Bilan initial', duree: '1h30' },
                  { nom: 'Consultation de suivi', duree: '45min' },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 gap-3 p-4 rounded-2xl"
                    style={{ border: '1px solid #e7e5e4', backgroundColor: '#faf9f7' }}
                  >
                    <div>
                      <label className="text-xs block mb-1" style={{ color: '#a8a29e' }}>Nom</label>
                      <input
                        defaultValue={p.nom}
                        className="w-full text-sm rounded-lg px-3 py-2 outline-none"
                        style={{ border: '1px solid #e7e5e4', backgroundColor: 'white' }}
                      />
                    </div>
                    <div>
                      <label className="text-xs block mb-1" style={{ color: '#a8a29e' }}>Durée</label>
                      <select
                        className="w-full text-sm rounded-lg px-3 py-2 outline-none"
                        style={{ border: '1px solid #e7e5e4', backgroundColor: 'white' }}
                      >
                        <option>30min</option>
                        <option>45min</option>
                        <option>1h</option>
                        <option>1h30</option>
                        <option>2h</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs block mb-1" style={{ color: '#a8a29e' }}>Tarif (€)</label>
                      <input
                        placeholder="Ex: 80"
                        className="w-full text-sm rounded-lg px-3 py-2 outline-none"
                        style={{ border: '1px solid #e7e5e4', backgroundColor: 'white' }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  className="text-sm px-4 py-3 rounded-2xl border-2 border-dashed text-center"
                  style={{ borderColor: '#e7e5e4', color: '#6b21a8' }}
                >
                  + Ajouter une prestation
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium block mb-3" style={{ color: '#78716c' }}>Disponibilités générales</label>
              <div className="grid grid-cols-4 gap-2">
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((jour) => (
                  <button
                    key={jour}
                    className="text-sm px-3 py-2 rounded-xl border transition"
                    style={{ borderColor: '#e7e5e4', color: '#57534e', backgroundColor: 'white' }}
                  >
                    {jour}
                  </button>
                ))}
              </div>
              <p className="text-xs mt-2" style={{ color: '#a8a29e' }}>
                Vous connecterez votre Google Agenda depuis votre tableau de bord.
              </p>
            </div>
          </div>
        )}

        {etape === 5 && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center" style={{ border: '1px solid #e7e5e4' }}>
            <div className="text-5xl mb-4">🎉</div>
            <h2
              className="text-2xl font-medium mb-3"
              style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}
            >
              Votre profil est soumis !
            </h2>
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#78716c' }}>
              Notre équipe vérifie vos documents sous 48h. Vous recevrez un email dès que votre profil sera en ligne.
            </p>

            <div className="flex flex-col gap-3 max-w-sm mx-auto mb-8">
              {[
                { label: 'Vérification des documents', statut: 'En cours', emoji: '⏳' },
                { label: 'Activation du profil', statut: 'En attente', emoji: '🔒' },
                { label: 'Connexion agenda Google', statut: 'A faire', emoji: '📅' },
                { label: 'Premier RDV reçu', statut: 'Bientot !', emoji: '🌿' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.emoji}</span>
                    <span className="text-sm" style={{ color: '#57534e' }}>{item.label}</span>
                  </div>
                  <span className="text-xs" style={{ color: '#a8a29e' }}>{item.statut}</span>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-6 max-w-sm mx-auto"
              style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}
            >
              <p className="text-sm font-medium mb-1" style={{ color: '#6b21a8' }}>En attendant...</p>
              <p className="text-xs" style={{ color: '#7c3aed' }}>
                Préparez votre agenda Google et vos disponibilités.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          {etape > 1 ? (
            <button
              onClick={() => setEtape(etape - 1)}
              className="text-sm px-6 py-3 rounded-2xl border transition"
              style={{ borderColor: '#e7e5e4', color: '#57534e' }}
            >
              Etape précédente
            </button>
          ) : (
            <div />
          )}

          {etape < 5 ? (
            <button
              onClick={() => setEtape(etape + 1)}
              className="text-white text-sm px-8 py-3 rounded-2xl transition"
              style={{ backgroundColor: '#6b21a8' }}
            >
              {etape === 4 ? 'Soumettre mon profil' : 'Etape suivante'}
            </button>
          ) : (
            <button
              onClick={() => { window.location.href = '/' }}
              className="text-white text-sm px-8 py-3 rounded-2xl transition"
              style={{ backgroundColor: '#6b21a8' }}
            >
              Retour à l accueil
            </button>
          )}
        </div>

      </div>
    </main>
  )
}