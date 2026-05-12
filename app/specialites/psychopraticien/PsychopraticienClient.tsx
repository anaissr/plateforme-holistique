'use client'

import Nav from '@/app/components/Nav'

export default function Psychopraticien() {
  const praticiens = [
    {
      nom: 'Marie Lecomte',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.9',
      avis: 54,
      tarif: '60€',
      visio: true,
    },
    {
      nom: 'Antoine Garnier',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      ville: 'Lyon',
      note: '4.8',
      avis: 38,
      tarif: '65€',
      visio: true,
    },
    {
      nom: 'Isabelle Noir',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
      ville: 'Bordeaux',
      note: '4.8',
      avis: 29,
      tarif: '60€',
      visio: true,
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="relative" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1600&h=600&fit=crop&crop=center"
          alt="Psychopraticien"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.88) 0%, rgba(107,33,168,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="text-6xl mb-4">💙</div>
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
            89 praticiens vérifiés · À partir de 60€
          </span>
          <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Psychopraticien
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
            Un accompagnement bienveillant pour traverser les difficultés émotionnelles et relationnelles — sans jugement, à votre rythme.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver un psychopraticien près de moi
          </button>
        </div>
      </section>

      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '89', label: 'praticiens vérifiés' },
            { value: '4.8/5', label: 'satisfaction moyenne' },
            { value: '60€', label: 'tarif moyen' },
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
            Qu'est-ce qu'un psychopraticien ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Le psychopraticien est un professionnel de l'accompagnement psychologique formé à une ou plusieurs approches thérapeutiques — humaniste, systémique, intégrative, Gestalt, analyse transactionnelle... Il accompagne les personnes traversant des difficultés émotionnelles, relationnelles ou existentielles sans nécessairement relever de la pathologie.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Distinct du psychologue clinicien (formation universitaire de 5 ans) et du psychiatre (médecin), le psychopraticien est formé dans des écoles spécialisées reconnues. Sur Holistia, tous nos psychopraticiens ont suivi une formation longue de minimum 3 ans avec supervision clinique.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Pour qui ?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '😰', label: 'Anxiété' },
              { emoji: '😔', label: 'Dépression légère' },
              { emoji: '💔', label: 'Deuil et séparation' },
              { emoji: '👫', label: 'Relations difficiles' },
              { emoji: '🌱', label: 'Développement personnel' },
              { emoji: '🔄', label: 'Transitions de vie' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#57534e' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Comment se déroule une séance ?
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { etape: '1', titre: 'Premier contact', desc: 'Une première séance d\'exploration pour que le praticien comprenne votre situation, vos attentes et que vous sentiez si le courant passe.' },
              { etape: '2', titre: 'Espace de parole libre', desc: 'Chaque séance est un espace sécurisé pour exprimer ce que vous ressentez, sans jugement. Le praticien écoute activement et relance avec bienveillance.' },
              { etape: '3', titre: 'Travail thérapeutique', desc: 'Selon l\'approche du praticien, des outils spécifiques peuvent être utilisés : visualisation, travail sur les croyances, jeu de rôles, exercices entre séances.' },
              { etape: '4', titre: 'Évaluation régulière', desc: 'Le praticien et vous évaluez régulièrement l\'avancement et ajustez le rythme et les objectifs ensemble.' },
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
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Psychopraticiens disponibles</h2>
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
              Voir tous les psychopraticiens →
            </button>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Questions fréquentes</h2>
          <div className="flex flex-col gap-4">
            {[
              { q: 'Quelle est la différence avec un psychologue ?', r: 'Le psychologue dispose d\'un titre protégé par la loi (Master en psychologie). Le psychopraticien est formé dans une école spécialisée. Les deux peuvent faire de l\'accompagnement thérapeutique de qualité — l\'important est la formation et la supervision.' },
              { q: 'Est-ce remboursé par la sécurité sociale ?', r: 'Non, les séances de psychopraticien ne sont pas remboursées par la sécurité sociale. Certaines mutuelles peuvent prendre en charge partiellement. Renseignez-vous auprès de la vôtre.' },
              { q: 'Comment choisir entre plusieurs praticiens ?', r: 'Le feeling est primordial en thérapie. N\'hésitez pas à faire une première séance avec 2 ou 3 praticiens pour trouver celui avec qui vous vous sentez le plus à l\'aise.' },
            ].map((faq) => (
              <div key={faq.q} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                <p className="font-medium mb-2 text-sm" style={{ color: '#1c1917' }}>{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>Prêt à commencer un accompagnement ?</h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>Trouvez un psychopraticien vérifié près de chez vous ou en visio.</p>
          <button className="px-8 py-3 rounded-2xl font-medium" style={{ backgroundColor: '#ffffff', color: '#6b21a8' }} onClick={() => { window.location.href = '/recherche' }}>
            Trouver mon psychopraticien →
          </button>
        </section>

      </div>
    </main>
  )
}