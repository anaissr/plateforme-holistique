'use client'

import Nav from '@/app/components/Nav'

export default function Coaching() {
  const praticiens = [
    {
      nom: 'Alexandre Martin',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.7',
      avis: 58,
      tarif: '70€',
      visio: true,
    },
    {
      nom: 'Camille Rousseau',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      ville: 'Visio',
      note: '4.8',
      avis: 44,
      tarif: '75€',
      visio: true,
    },
    {
      nom: 'Nicolas Bernard',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      ville: 'Lyon',
      note: '4.6',
      avis: 32,
      tarif: '70€',
      visio: true,
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="relative" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=600&fit=crop&crop=center"
          alt="Coaching holistique"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.88) 0%, rgba(107,33,168,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
            112 praticiens vérifiés · À partir de 70€
          </span>
          <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Coaching holistique
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
            Atteignez vos objectifs et révélez votre potentiel grâce à un accompagnement sur-mesure qui intègre toutes les dimensions de votre vie.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver un coach holistique
          </button>
        </div>
      </section>

      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '112', label: 'praticiens vérifiés' },
            { value: '4.6/5', label: 'satisfaction moyenne' },
            { value: '70€', label: 'tarif moyen' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-light mb-1" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: '#a8a29e' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu'est-ce que le coaching holistique ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Le coaching holistique va au-delà du coaching traditionnel orienté performance. Il prend en compte toutes les dimensions de la personne — professionnelle, personnelle, physique, émotionnelle et spirituelle — pour un accompagnement qui fait vraiment sens.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Le coach holistique ne donne pas de réponses — il aide le client à trouver les siennes. À travers des questions puissantes, des outils de développement personnel et une posture bienveillante, il accompagne vers plus de clarté, d'alignement et d'épanouissement.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Pour qui ?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '🔄', label: 'Reconversion professionnelle' },
              { emoji: '💪', label: 'Confiance en soi' },
              { emoji: '⚖️', label: 'Équilibre vie pro-perso' },
              { emoji: '🎯', label: 'Clarté sur ses objectifs' },
              { emoji: '🌱', label: 'Développement personnel' },
              { emoji: '👑', label: 'Leadership et management' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#57534e' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Comment se déroule un accompagnement ?</h2>
          <div className="flex flex-col gap-4">
            {[
              { etape: '1', titre: 'Séance de découverte', desc: 'Un premier échange gratuit pour définir vos objectifs, vérifier l\'adéquation avec le coach et poser les bases de la relation d\'accompagnement.' },
              { etape: '2', titre: 'Définition du programme', desc: 'Ensemble, vous définissez un programme sur mesure — nombre de séances, fréquence, outils utilisés — en fonction de vos objectifs.' },
              { etape: '3', titre: 'Séances de coaching', desc: 'Chaque séance (1h en général) alterne écoute active, questions puissantes, exercices pratiques et prises de conscience.' },
              { etape: '4', titre: 'Actions et bilans', desc: 'Entre les séances, vous mettez en pratique. Les bilans réguliers permettent d\'ajuster le cap et de mesurer les progrès.' },
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

        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Coachs holistiques disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {praticiens.map((p) => (
              <div key={p.nom} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer" style={{ border: '1px solid #e7e5e4' }} onClick={() => { window.location.href = '/praticien' }}>
                <img src={p.photo} alt={p.nom} className="w-full h-40 object-cover object-top" />
                <div className="p-4">
                  <p className="font-medium text-sm mb-0.5" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{p.nom}</p>
                  <p className="text-xs mb-1" style={{ color: '#a8a29e' }}>📍 {p.ville}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#1c1917' }}>⭐ {p.note} ({p.avis})</span>
                    <span className="text-xs font-medium" style={{ color: '#6b21a8' }}>À partir de {p.tarif}</span>
                  </div>
                  {p.visio && <span className="text-xs px-2 py-0.5 rounded-full mt-2 inline-block" style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>🖥 Visio</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="text-white px-8 py-3 rounded-2xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }} onClick={() => { window.location.href = '/recherche' }}>
              Voir tous les coachs holistiques →
            </button>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Questions fréquentes</h2>
          <div className="flex flex-col gap-4">
            {[
              { q: 'Quelle est la différence entre coaching et thérapie ?', r: 'La thérapie travaille sur le passé et les blessures. Le coaching est orienté vers le futur et l\'action. Les deux sont complémentaires — certaines personnes font les deux en parallèle.' },
              { q: 'Combien de séances sont nécessaires ?', r: 'Un programme de coaching dure en général 3 à 6 mois, à raison d\'une séance bimensuelle ou mensuelle. Des accompagnements courts de 3 à 5 séances existent pour des objectifs précis.' },
              { q: 'Comment choisir un bon coach ?', r: 'Vérifiez sa formation (certification ICF ou équivalent), son expérience et demandez une séance découverte. Le feeling est primordial — vous devez vous sentir à l\'aise pour vous livrer.' },
            ].map((faq) => (
              <div key={faq.q} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                <p className="font-medium mb-2 text-sm" style={{ color: '#1c1917' }}>{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>Prêt à révéler votre potentiel ?</h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>Trouvez un coach holistique vérifié près de chez vous ou en visio.</p>
          <button className="px-8 py-3 rounded-2xl font-medium" style={{ backgroundColor: '#ffffff', color: '#6b21a8' }} onClick={() => { window.location.href = '/recherche' }}>
            Trouver mon coach →
          </button>
        </section>

      </div>
    </main>
  )
}