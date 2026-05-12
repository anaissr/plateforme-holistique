'use client'

import Nav from '@/app/components/Nav'

export default function TherapiesBreves() {
  const praticiens = [
    {
      nom: 'Sophie Mercier',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.9',
      avis: 62,
      tarif: '70€',
      visio: true,
    },
    {
      nom: 'Julien Blanc',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      ville: 'Lyon',
      note: '4.8',
      avis: 41,
      tarif: '75€',
      visio: true,
    },
    {
      nom: 'Claire Aubert',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
      ville: 'Bordeaux',
      note: '4.9',
      avis: 38,
      tarif: '70€',
      visio: true,
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO AVEC PHOTO */}
      <section className="relative" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1600&h=600&fit=crop&crop=center"
          alt="Thérapies brèves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.88) 0%, rgba(107,33,168,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="text-6xl mb-4">🗣️</div>
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
            58 praticiens vérifiés · À partir de 70€
          </span>
          <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Thérapies brèves
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
            Des résultats concrets en peu de séances grâce aux approches Palo Alto, TCC et EMDR. Une thérapie orientée solutions, pas seulement sur le passé.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver un thérapeute bref près de moi
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '58', label: 'praticiens vérifiés' },
            { value: '4.9/5', label: 'satisfaction moyenne' },
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

        {/* QU'EST-CE QUE C'EST */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu'est-ce que les thérapies brèves ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Les thérapies brèves regroupent un ensemble d'approches psychothérapeutiques orientées vers le changement rapide et concret. Contrairement aux thérapies analytiques longues, elles se concentrent sur le présent et le futur plutôt que sur le passé, et visent des résultats en quelques séances seulement.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#57534e' }}>
            Nées à l'École de Palo Alto en Californie dans les années 1960, ces approches ont révolutionné la psychothérapie en montrant qu'un changement profond peut survenir rapidement lorsqu'on travaille sur les schémas de pensée et de comportement plutôt que sur leur origine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { nom: 'Approche Palo Alto', emoji: '🎯', desc: 'Travail sur les tentatives de solution qui maintiennent le problème. Très efficace sur les blocages et phobies.' },
              { nom: 'TCC', emoji: '🧩', desc: 'Thérapies Cognitivo-Comportementales — modifier les pensées automatiques et les comportements inadaptés.' },
              { nom: 'EMDR', emoji: '👁', desc: 'Désensibilisation par mouvements oculaires — particulièrement efficace sur les traumatismes et le stress post-traumatique.' },
            ].map((app) => (
              <div key={app.nom} className="p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <p className="text-2xl mb-2">{app.emoji}</p>
                <p className="font-medium text-sm mb-1" style={{ color: '#6b21a8' }}>{app.nom}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#78716c' }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POUR QUI */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Pour qui ?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '😰', label: 'Anxiété et phobies' },
              { emoji: '🔥', label: 'Burn-out' },
              { emoji: '💔', label: 'Traumatismes' },
              { emoji: '😔', label: 'Dépression légère' },
              { emoji: '👫', label: 'Relations difficiles' },
              { emoji: '🎯', label: 'Blocages professionnels' },
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
              { etape: '1', titre: 'Définition de l\'objectif', desc: 'Le thérapeute vous aide à formuler précisément ce que vous souhaitez changer — pas le problème en lui-même, mais ce que vous voulez à la place.' },
              { etape: '2', titre: 'Exploration du problème', desc: 'On analyse ensemble ce qui maintient le problème aujourd\'hui : vos tentatives de solution, vos croyances, vos comportements automatiques.' },
              { etape: '3', titre: 'Interventions ciblées', desc: 'Le thérapeute propose des exercices, des recadrages ou des techniques spécifiques (selon l\'approche) pour créer un changement concret.' },
              { etape: '4', titre: 'Tâches entre les séances', desc: 'Des exercices pratiques sont souvent proposés entre les séances pour ancrer le changement dans le quotidien.' },
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

        {/* ENCART PALO ALTO */}
        <section className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', border: '1px solid #ede9fe' }}>
          <div className="flex gap-4 items-start">
            <div className="text-4xl flex-shrink-0">🏫</div>
            <div>
              <h3 className="font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
                L'École de Palo Alto — une référence mondiale
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
                Fondée par Gregory Bateson et développée par Paul Watzlawick et Don Jackson, l'École de Palo Alto a révolutionné la vision de la communication et du changement. En France, des centres comme l'A180° d'Emmanuelle Piquet ou le LACT forment des praticiens de haut niveau à ces approches. Holistia référence uniquement des praticiens formés dans des centres reconnus.
              </p>
            </div>
          </div>
        </section>

        {/* PRATICIENS */}
        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Thérapeutes brefs disponibles
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
              Voir tous les thérapeutes brefs →
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
              { q: 'Combien de séances sont nécessaires ?', r: 'En moyenne 5 à 10 séances selon la problématique. Certains blocages simples se résolvent en 1 à 3 séances. C\'est beaucoup moins qu\'une thérapie analytique classique.' },
              { q: 'Quelle est la différence avec un psychologue ?', r: 'Un psychopraticien en thérapies brèves est orienté solution et changement rapide. Un psychologue clinicien peut travailler sur des problématiques plus profondes sur une durée plus longue. Les deux approches sont complémentaires.' },
              { q: 'Est-ce efficace pour les enfants ?', r: 'Oui, les thérapies brèves sont particulièrement adaptées aux enfants et adolescents. L\'approche Palo Alto notamment donne d\'excellents résultats sur le harcèlement, les phobies scolaires et les troubles du comportement.' },
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
            Prêt à essayer les thérapies brèves ?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>
            Trouvez un thérapeute bref vérifié près de chez vous ou en visio.
          </p>
          <button
            className="px-8 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver mon thérapeute →
          </button>
        </section>

      </div>
    </main>
  )
}