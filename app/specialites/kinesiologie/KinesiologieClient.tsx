'use client'

import Nav from '@/app/components/Nav'

export default function Kinesiologie() {
  const praticiens = [
    {
      nom: 'Isabelle Morel',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
      ville: 'Lyon',
      note: '4.8',
      avis: 34,
      tarif: '65€',
      visio: true,
    },
    {
      nom: 'Laurent Petit',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.6',
      avis: 21,
      tarif: '60€',
      visio: false,
    },
    {
      nom: 'Marie Fontaine',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      ville: 'Bordeaux',
      note: '4.9',
      avis: 47,
      tarif: '70€',
      visio: true,
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
        <div className="text-6xl mb-4">⚡</div>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          87 praticiens vérifiés · À partir de 60€
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Kinésiologie
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
          Libérez les blocages physiques et émotionnels grâce au test musculaire. Une approche douce qui réconcilie le corps et l'esprit.
        </p>
        <button
          className="px-8 py-4 rounded-2xl font-medium shadow-lg"
          style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
          onClick={() => { window.location.href = '/recherche' }}
        >
          Trouver un kinésiologue près de moi
        </button>
      </section>

      {/* STATS */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '87', label: 'praticiens vérifiés' },
            { value: '4.6/5', label: 'satisfaction moyenne' },
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

        {/* QU'EST-CE QUE C'EST */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu'est-ce que la kinésiologie ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            La kinésiologie est une approche thérapeutique qui utilise le test musculaire pour identifier les déséquilibres physiques, émotionnels et énergétiques du corps. En testant la réponse des muscles à différents stimuli, le praticien peut localiser les blocages et y remédier.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Issue des travaux du Dr George Goodheart dans les années 1960, la kinésiologie s'appuie sur les connaissances de la médecine traditionnelle chinoise, de la chiropraxie et de la neurologie. Elle considère le corps comme un système intelligent capable d'indiquer ses propres déséquilibres.
          </p>
        </section>

        {/* POUR QUI */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Pour qui ?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '😰', label: 'Stress chronique' },
              { emoji: '📚', label: 'Troubles d\'apprentissage' },
              { emoji: '🦴', label: 'Douleurs inexpliquées' },
              { emoji: '💭', label: 'Blocages émotionnels' },
              { emoji: '🧒', label: 'Enfants et adolescents' },
              { emoji: '⚡', label: 'Fatigue persistante' },
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
              { etape: '1', titre: 'Entretien initial', desc: 'Le praticien échange avec vous sur vos objectifs, vos symptômes et votre histoire de vie pour orienter la séance.' },
              { etape: '2', titre: 'Test musculaire', desc: 'Allongé habillé sur une table, le kinésiologue teste la réponse de vos muscles à différents stimuli pour identifier les déséquilibres.' },
              { etape: '3', titre: 'Corrections', desc: 'Des techniques douces sont appliquées : massages de points réflexes, mouvements oculaires, visualisation, nutrition.' },
              { etape: '4', titre: 'Intégration', desc: 'La séance se termine par une phase de repos pour permettre au corps d\'intégrer les changements.' },
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
            Kinésiologues disponibles
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
              Voir tous les kinésiologues →
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
              { q: 'Combien de séances sont nécessaires ?', r: 'En général 3 à 5 séances suffisent pour observer des changements significatifs. Certaines problématiques chroniques peuvent nécessiter un suivi plus long.' },
              { q: 'Est-ce douloureux ?', r: 'Non, la kinésiologie est une approche totalement indolore. Les tests musculaires sont très doux et la séance se passe dans un état de détente.' },
              { q: 'Est-ce compatible avec un traitement médical ?', r: 'Oui, la kinésiologie est complémentaire à la médecine conventionnelle et ne s\'y substitue pas.' },
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
            Prêt à essayer la kinésiologie ?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>
            Trouvez un kinésiologue vérifié près de chez vous ou en visio.
          </p>
          <button
            className="px-8 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver mon kinésiologue →
          </button>
        </section>

      </div>
    </main>
  )
}