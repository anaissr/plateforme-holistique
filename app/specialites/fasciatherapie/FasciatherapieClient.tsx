'use client'

import Nav from '@/app/components/Nav'

export default function Fasciatherapie() {
  const praticiens = [
    {
      nom: 'Anne-Sophie Girard',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.8',
      avis: 31,
      tarif: '65€',
      visio: false,
    },
    {
      nom: 'Thomas Renaud',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      ville: 'Nantes',
      note: '4.7',
      avis: 22,
      tarif: '70€',
      visio: false,
    },
    {
      nom: 'Céline Moreau',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
      ville: 'Toulouse',
      note: '4.9',
      avis: 18,
      tarif: '65€',
      visio: false,
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO AVEC PHOTO */}
      <section className="relative" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&h=600&fit=crop&crop=center"
          alt="Fasciathérapie"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.88) 0%, rgba(107,33,168,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="text-6xl mb-4">🌊</div>
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
            45 praticiens vérifiés · À partir de 65€
          </span>
          <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Fasciathérapie
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
            Libérez les tensions profondes du corps grâce au travail sur les fascias — ces tissus conjonctifs qui enveloppent et relient l'ensemble de vos structures corporelles.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver un fasciathérapeute près de moi
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '45', label: 'praticiens vérifiés' },
            { value: '4.7/5', label: 'satisfaction moyenne' },
            { value: '65€', label: 'tarif moyen' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-light mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: '#a8a29e' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* QU'EST-CE QUE C'EST */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu'est-ce que la fasciathérapie ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            La fasciathérapie est une approche manuelle douce qui travaille sur les fascias — un réseau de tissu conjonctif qui enveloppe, soutient et relie tous les organes, muscles, os et nerfs du corps. Lorsque ces fascias se rigidifient suite à un choc, un stress ou une mauvaise posture, des douleurs et des blocages peuvent apparaître dans tout le corps.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Développée par le Dr Danis Bois dans les années 1980, la fasciathérapie MDB (Méthode Danis Bois) combine des touches manuelles très lentes et précises avec une dimension de relation d'aide. Elle s'adresse autant au corps qu'à la personne dans sa globalité, intégrant les dimensions physiques, émotionnelles et existentielles.
          </p>
        </section>

        {/* POUR QUI */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Pour qui ?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '🦴', label: 'Douleurs chroniques' },
              { emoji: '😰', label: 'Stress et tensions' },
              { emoji: '🧍', label: 'Troubles posturaux' },
              { emoji: '🏥', label: 'Récupération post-opératoire' },
              { emoji: '🔋', label: 'Fatigue profonde' },
              { emoji: '💔', label: 'Chocs émotionnels' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#57534e' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* DÉROULEMENT */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Comment se déroule une séance ?
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { etape: '1', titre: 'Entretien et bilan', desc: 'Le praticien écoute votre histoire, vos douleurs et vos objectifs. Cette phase d\'écoute est centrale dans la fasciathérapie.' },
              { etape: '2', titre: 'Travail manuel en position allongée', desc: 'Habillé, allongé sur une table, le praticien pose ses mains sur différentes zones du corps avec des touches très lentes et précises pour écouter et libérer les tensions fasciales.' },
              { etape: '3', titre: 'Mouvement et gestuelle', desc: 'Certaines séances incluent des mouvements doux debout ou assis — une gestuelle lente guidée par le praticien pour prolonger le travail manuel.' },
              { etape: '4', titre: 'Échange et conseils', desc: 'La séance se termine par un temps de parole pour intégrer ce qui s\'est passé et recevoir des conseils pour prolonger les effets au quotidien.' },
            ].map((step) => (
              <div key={step.etape} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 text-white" style={{ backgroundColor: '#6b21a8' }}>
                  {step.etape}
                </div>
                <div>
                  <p className="font-medium mb-1" style={{ color: '#1c1917' }}>{step.titre}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRATICIENS */}
        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Fasciathérapeutes disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {praticiens.map((p) => (
              <div
                key={p.nom}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                style={{ border: '1px solid #e7e5e4' }}
                onClick={() => { window.location.href = '/praticien' }}
              >
                <img src={p.photo} alt={p.nom} className="w-full h-40 object-cover object-top" />
                <div className="p-4">
                  <p className="font-medium text-sm mb-0.5" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{p.nom}</p>
                  <p className="text-xs mb-1" style={{ color: '#a8a29e' }}>📍 {p.ville}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#1c1917' }}>⭐ {p.note} ({p.avis})</span>
                    <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>À partir de {p.tarif}</span>
                  </div>
                  {p.visio && (
                    <span className="text-xs px-2 py-0.5 rounded-full mt-2 inline-block" style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>🖥 Visio</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="text-white px-8 py-3 rounded-2xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Voir tous les fasciathérapeutes →
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Questions fréquentes
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { q: 'La fasciathérapie est-elle douloureuse ?', r: 'Non, c\'est une approche très douce. Les touches sont lentes et légères. Vous pouvez ressentir des sensations de chaleur, de détente ou de légèreté pendant la séance.' },
              { q: 'Quelle est la différence avec l\'ostéopathie ?', r: 'L\'ostéopathie travaille principalement sur les structures (os, articulations, muscles) avec des techniques parfois plus directes. La fasciathérapie se concentre exclusivement sur les fascias avec des touches très lentes et une dimension d\'accompagnement de la personne.' },
              { q: 'Combien de séances sont nécessaires ?', r: 'En général 3 à 6 séances pour des problématiques chroniques. Les effets sont souvent perceptibles dès la première séance.' },
            ].map((faq) => (
              <div key={faq.q} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                <p className="font-medium mb-2 text-sm" style={{ color: '#1c1917' }}>{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>
            Prêt à découvrir la fasciathérapie ?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>
            Trouvez un fasciathérapeute vérifié près de chez vous.
          </p>
          <button
            className="px-8 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver mon fasciathérapeute →
          </button>
        </section>

      </div>
    </main>
  )
}