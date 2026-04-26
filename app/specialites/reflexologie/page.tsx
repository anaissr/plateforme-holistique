'use client'

import Nav from '@/app/components/Nav'

export default function Reflexologie() {
  const praticiens = [
    {
      nom: 'Claire Dupont',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.7',
      avis: 28,
      tarif: '55€',
      visio: false,
    },
    {
      nom: 'Sophie Bernard',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
      ville: 'Nantes',
      note: '4.5',
      avis: 19,
      tarif: '60€',
      visio: false,
    },
    {
      nom: 'Émilie Rousseau',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      ville: 'Toulouse',
      note: '4.8',
      avis: 41,
      tarif: '58€',
      visio: false,
    },
  ]

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
        <div className="text-6xl mb-4">💆</div>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          65 praticiens vérifiés · À partir de 55€
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Réflexologie
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
          Stimulez les zones réflexes de vos pieds pour agir sur l'ensemble de votre corps. Une approche douce et profondément relaxante.
        </p>
        <button
          className="px-8 py-4 rounded-2xl font-medium shadow-lg"
          style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
          onClick={() => { window.location.href = '/recherche' }}
        >
          Trouver un réflexologue près de moi
        </button>
      </section>

      {/* STATS */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '65', label: 'praticiens vérifiés' },
            { value: '4.5/5', label: 'satisfaction moyenne' },
            { value: '55€', label: 'tarif moyen' },
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
            Qu'est-ce que la réflexologie ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            La réflexologie est une thérapie manuelle qui repose sur le principe que chaque zone du pied correspond à un organe, une glande ou une partie du corps. En stimulant ces zones réflexes par des pressions précises, le praticien favorise la détente et le rééquilibrage de l'organisme.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Pratiquée depuis des millénaires en Chine et en Égypte, la réflexologie moderne a été codifiée au début du XXe siècle par Eunice Ingham. Elle existe aujourd'hui en plusieurs formes — plantaire, palmaire, auriculaire ou faciale — toutes basées sur le même principe de correspondance corporelle.
          </p>
        </section>

        {/* POUR QUI */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Pour qui ?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '😰', label: 'Stress et tensions' },
              { emoji: '🩸', label: 'Troubles circulatoires' },
              { emoji: '🔋', label: 'Fatigue chronique' },
              { emoji: '🦴', label: 'Douleurs chroniques' },
              { emoji: '🛡', label: 'Soutien immunitaire' },
              { emoji: '🤰', label: 'Femmes enceintes' },
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
              { etape: '1', titre: 'Bilan initial', desc: 'Le praticien recueille vos antécédents de santé, vos symptômes actuels et vos objectifs pour personnaliser la séance.' },
              { etape: '2', titre: 'Installation', desc: 'Vous êtes allongé confortablement, chaussures et chaussettes retirées. Le praticien nettoie vos pieds et commence par une détente globale.' },
              { etape: '3', titre: 'Stimulation des zones réflexes', desc: 'Des pressions précises et rhythmées sont appliquées sur l\'ensemble du pied, avec une attention particulière aux zones sensibles.' },
              { etape: '4', titre: 'Retour et conseils', desc: 'En fin de séance, le praticien partage ses observations et peut recommander des exercices ou des ajustements de mode de vie.' },
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
            Réflexologues disponibles
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
              Voir tous les réflexologues →
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
              { q: 'La réflexologie est-elle douloureuse ?', r: 'Certaines zones sensibles peuvent provoquer une légère gêne, signe que la zone correspondante mérite attention. C\'est en général agréable et profondément relaxant.' },
              { q: 'Combien de séances sont nécessaires ?', r: 'Une séance peut déjà apporter un soulagement notable. Pour des problématiques chroniques, un cycle de 4 à 6 séances espacées de 1 à 2 semaines est souvent recommandé.' },
              { q: 'Y a-t-il des contre-indications ?', r: 'La réflexologie est déconseillée en cas de phlébite, plaies ouvertes sur les pieds, ou fièvre. Informez toujours votre praticien de votre état de santé.' },
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
            Prêt à essayer la réflexologie ?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>
            Trouvez un réflexologue vérifié près de chez vous.
          </p>
          <button
            className="px-8 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver mon réflexologue →
          </button>
        </section>

      </div>
    </main>
  )
}