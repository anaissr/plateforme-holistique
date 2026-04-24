'use client'

import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: 'Quel est votre problème principal ?',
    sous_titre: 'Choisissez ce qui vous correspond le mieux',
    type: 'choix',
    options: [
      { label: 'Stress, anxiété ou burn-out', emoji: '😰' },
      { label: 'Douleurs physiques (dos, articulations...)', emoji: '🦴' },
      { label: 'Troubles digestifs', emoji: '🤢' },
      { label: 'Fatigue chronique', emoji: '🔋' },
      { label: 'Troubles du sommeil', emoji: '😴' },
      { label: 'Equilibre hormonal ou fertilité', emoji: '🌸' },
      { label: 'Soutien émotionnel ou traumatisme', emoji: '💙' },
      { label: 'Autre / Je ne sais pas', emoji: '🤷' },
    ],
  },
  {
    id: 2,
    question: 'Depuis combien de temps ?',
    sous_titre: 'Cela nous aide à comprendre ancienneté de votre situation',
    type: 'choix',
    options: [
      { label: 'Quelques jours', emoji: '🕐' },
      { label: 'Quelques semaines', emoji: '📅' },
      { label: 'Quelques mois', emoji: '🗓' },
      { label: 'Plusieurs années', emoji: '⏳' },
    ],
  },
  {
    id: 3,
    question: 'Avez-vous déjà essayé quelque chose ?',
    sous_titre: 'Pour éviter de vous orienter vers ce que vous avez déjà testé',
    type: 'multi',
    options: [
      { label: 'Médecin / traitement médical', emoji: '🩺' },
      { label: 'Kinésithérapie', emoji: '🤲' },
      { label: 'Ostéopathie', emoji: '🦴' },
      { label: 'Sophrologie ou méditation', emoji: '🧘' },
      { label: 'Naturopathie ou nutrition', emoji: '🌿' },
      { label: 'Psychothérapie', emoji: '🗣' },
      { label: 'Rien encore', emoji: '✨' },
    ],
  },
  {
    id: 4,
    question: 'C est plutôt d ordre...',
    sous_titre: 'Votre ressenti sur l origine du problème',
    type: 'choix',
    options: [
      { label: 'Physique avant tout', emoji: '💪' },
      { label: 'Emotionnel ou psychologique', emoji: '💭' },
      { label: 'Les deux sont liés', emoji: '🔄' },
      { label: 'Je ne sais pas vraiment', emoji: '🤔' },
    ],
  },
  {
    id: 5,
    question: 'Vous êtes...',
    sous_titre: 'Pour vous orienter vers les praticiens adaptés à votre profil',
    type: 'choix',
    options: [
      { label: 'Un adulte', emoji: '🧑' },
      { label: 'Un adolescent (ou pour un ado)', emoji: '🧒' },
      { label: 'Un enfant (ou pour un enfant)', emoji: '👶' },
      { label: 'En couple (cherche suivi à deux)', emoji: '👫' },
      { label: 'Femme enceinte', emoji: '🤰' },
      { label: 'En parcours PMA / fertilité', emoji: '🌱' },
      { label: 'Senior', emoji: '👴' },
    ],
  },
  {
    id: 6,
    question: 'Vous préférez consulter...',
    sous_titre: 'Peu importe où vous êtes dans le monde',
    type: 'choix',
    options: [
      { label: 'En cabinet, en présentiel', emoji: '🏥' },
      { label: 'En visio, à distance', emoji: '🖥' },
      { label: 'Les deux me conviennent', emoji: '✅' },
    ],
  },
  {
    id: 7,
    question: 'Votre approche préférée ?',
    sous_titre: 'Si vous avez une affinité particulière',
    type: 'choix',
    options: [
      { label: 'Par le corps et le toucher', emoji: '🤲' },
      { label: 'Par la parole et l echange', emoji: '💬' },
      { label: 'Par l alimentation et les plantes', emoji: '🌿' },
      { label: 'Par la relaxation et le souffle', emoji: '🧘' },
      { label: 'Pas de préférence', emoji: '🎯' },
    ],
  },
]

const resultats = [
  {
    probleme: 'Stress, anxiété ou burn-out',
    suggestions: [
      { specialite: 'Sophrologue', raison: 'La sophrologie agit directement sur le système nerveux et les tensions liées au stress.', emoji: '🧘' },
      { specialite: 'Hypnothérapeute', raison: 'L hypnose aide à reprogrammer les schémas de pensée anxieux en profondeur.', emoji: '🧠' },
      { specialite: 'Praticien Palo Alto', raison: 'Les thérapies brèves sont particulièrement efficaces sur le burn-out et les blocages.', emoji: '🗣' },
    ],
  },
  {
    probleme: 'Douleurs physiques (dos, articulations...)',
    suggestions: [
      { specialite: 'Ostéopathe', raison: 'L ostéopathie traite les causes mécaniques des douleurs chroniques.', emoji: '🤲' },
      { specialite: 'Kinésiologue', raison: 'La kinésiologie identifie les compensations corporelles.', emoji: '⚡' },
      { specialite: 'Acupuncteur', raison: 'L acupuncture réduit l inflammation et restaure la circulation.', emoji: '🌸' },
    ],
  },
  {
    probleme: 'Troubles digestifs',
    suggestions: [
      { specialite: 'Naturopathe', raison: 'La naturopathie traite les déséquilibres digestifs par l alimentation et les plantes.', emoji: '🌿' },
      { specialite: 'Acupuncteur', raison: 'La MTC régule le système digestif via des points spécifiques.', emoji: '🌸' },
      { specialite: 'Ostéopathe', raison: 'L ostéopathie viscérale agit directement sur les organes digestifs.', emoji: '🤲' },
    ],
  },
]

export default function Orientation() {
  const [etape, setEtape] = useState(0)
  const [reponses, setReponses] = useState<Record<number, string[]>>({})
  const [selectionMulti, setSelectionMulti] = useState<string[]>([])
  const [termine, setTermine] = useState(false)

  const question = questions[etape]
  const progression = (etape / questions.length) * 100

  const choisir = (label: string) => {
    if (question.type === 'multi') {
      setSelectionMulti((prev) =>
        prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
      )
    } else {
      const nouvelles = { ...reponses, [question.id]: [label] }
      setReponses(nouvelles)
      if (etape < questions.length - 1) {
        setTimeout(() => setEtape(etape + 1), 300)
      } else {
        setTimeout(() => setTermine(true), 300)
      }
    }
  }

  const validerMulti = () => {
    setReponses({ ...reponses, [question.id]: selectionMulti })
    setSelectionMulti([])
    if (etape < questions.length - 1) {
      setEtape(etape + 1)
    } else {
      setTermine(true)
    }
  }

  const probleme = reponses[1]?.[0] || 'Stress, anxiété ou burn-out'
  const resultat = resultats.find((r) => r.probleme === probleme) || resultats[0]

if (termine) {
    return (
      <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
        <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
          <button onClick={() => { window.location.href = '/' }} className="text-2xl font-semibold" style={{ color: '#6b21a8' }}>
            🌿 Holistia
          </button>
          <button onClick={() => { window.location.href = '/' }} className="text-sm" style={{ color: '#78716c' }}>
            Retour à l accueil
          </button>
        </nav>

        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <div className="text-4xl mb-4">✨</div>
          <h1 className="text-3xl font-light mb-3" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            Voici nos recommandations
          </h1>
          <p className="text-sm mb-10" style={{ color: '#78716c' }}>
            Basées sur vos réponses, voici les approches qui pourraient vous aider pour{' '}
            <strong>{probleme}</strong>
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {resultat.suggestions.map((s, i) => (
              <div
                key={s.specialite}
                className="bg-white rounded-3xl p-6 text-left flex gap-4 items-start shadow-sm"
                style={{ border: '1px solid #e7e5e4' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#f5f3ff' }}
                >
                  {s.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {i === 0 && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: '#6b21a8', color: 'white' }}
                      >
                        Recommandé
                      </span>
                    )}
                    <h3 className="font-medium" style={{ color: '#1c1917' }}>
                      {s.specialite}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
                    {s.raison}
                  </p>
                </div>
                
<button
  onClick={() => { window.location.href = '/recherche' }}
  className="text-white text-sm px-4 py-2 rounded-xl flex-shrink-0"
  style={{ backgroundColor: '#6b21a8' }}
>
  Voir praticiens
</button>
              </div>
            ))}
          </div>

          <button
            onClick={() => { setEtape(0); setReponses({}); setTermine(false) }}
            className="text-sm underline"
            style={{ color: '#6b21a8' }}
          >
            Recommencer le questionnaire
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
<nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <button onClick={() => { window.location.href = '/' }} className="text-2xl font-semibold" style={{ color: '#6b21a8' }}>
          🌿 Holistia
        </button>
        <button onClick={() => { window.location.href = '/' }} className="text-sm" style={{ color: '#78716c' }}>
          Retour à l accueil
        </button>
      </nav>

      <section
        className="px-6 py-12 text-center"
        style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}
      >
        <span
          className="inline-block text-xs px-4 py-1.5 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}
        >
          Orientation personnalisée
        </span>
        <h1 className="text-3xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>
          Quel praticien peut vous aider ?
        </h1>
        <p className="text-sm max-w-md mx-auto" style={{ color: '#d8b4fe' }}>
          Répondez à quelques questions simples — nous vous orientons vers les approches les plus adaptées.
        </p>
      </section>

      <div className="w-full h-1.5" style={{ backgroundColor: '#e7e5e4' }}>
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${progression}%`, backgroundColor: '#6b21a8' }}
        />
      </div>
      <div className="text-center py-2 text-xs" style={{ color: '#a8a29e' }}>
        Question {etape + 1} sur {questions.length}
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light mb-2" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
            {question.question}
          </h2>
          <p className="text-sm" style={{ color: '#a8a29e' }}>{question.sous_titre}</p>
          {question.type === 'multi' && (
            <p className="text-xs mt-1 font-medium" style={{ color: '#6b21a8' }}>
              Plusieurs choix possibles
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {question.options.map((option) => {
            const selectionne = question.type === 'multi'
              ? selectionMulti.includes(option.label)
              : reponses[question.id]?.[0] === option.label

            return (
              <button
                key={option.label}
                onClick={() => choisir(option.label)}
                className="flex items-center gap-4 p-4 rounded-2xl text-left transition"
                style={{
                  backgroundColor: selectionne ? '#f5f3ff' : '#ffffff',
                  border: selectionne ? '2px solid #6b21a8' : '1px solid #e7e5e4',
                  color: '#1c1917',
                }}
              >
                <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                <span className="text-sm font-medium">{option.label}</span>
                {selectionne && (
                  <span className="ml-auto text-sm" style={{ color: '#6b21a8' }}>✓</span>
                )}
              </button>
            )
          })}
        </div>

        {question.type === 'multi' && (
          <div className="text-center">
            <button
              onClick={validerMulti}
              disabled={selectionMulti.length === 0}
              className="px-8 py-3 rounded-2xl text-sm font-medium transition"
              style={{
                backgroundColor: selectionMulti.length > 0 ? '#6b21a8' : '#e7e5e4',
                color: selectionMulti.length > 0 ? '#ffffff' : '#a8a29e',
              }}
            >
              Continuer
            </button>
          </div>
        )}

        {etape > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setEtape(etape - 1)}
              className="text-sm underline"
              style={{ color: '#a8a29e' }}
            >
              Question précédente
            </button>
          </div>
        )}
      </div>
    </main>
  )
}