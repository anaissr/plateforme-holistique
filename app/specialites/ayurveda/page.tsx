'use client'

import Nav from '@/app/components/Nav'

export default function Ayurveda() {
  const praticiens = [
    {
      nom: 'Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.9',
      avis: 28,
      tarif: '70€',
      visio: true,
    },
    {
      nom: 'Laure Fontaine',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      ville: 'Lyon',
      note: '4.8',
      avis: 19,
      tarif: '75€',
      visio: true,
    },
    {
      nom: 'Marc Delacroix',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
      ville: 'Marseille',
      note: '4.7',
      avis: 14,
      tarif: '70€',
      visio: false,
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO AVEC PHOTO */}
      <section className="relative" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1600&h=600&fit=crop&crop=center"
          alt="Ayurveda"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.88) 0%, rgba(107,33,168,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="text-6xl mb-4">🪷</div>
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
            32 praticiens vérifiés · À partir de 70€
          </span>
          <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Ayurveda
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
            Retrouvez l'équilibre corps-esprit grâce à la médecine traditionnelle indienne — l'une des plus anciennes sciences de vie au monde.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver un praticien ayurvédique près de moi
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '32', label: 'praticiens vérifiés' },
            { value: '4.8/5', label: 'satisfaction moyenne' },
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
            Qu'est-ce que l'Ayurveda ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            L'Ayurveda — littéralement "science de la vie" en sanskrit — est un système médical traditionnel originaire d'Inde, vieux de plus de 5 000 ans. Il considère l'être humain comme un tout indissociable — corps, esprit et âme — et cherche à maintenir ou rétablir l'équilibre entre ces dimensions.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Au cœur de l'Ayurveda se trouve la notion de doshas — trois forces vitales (Vata, Pitta, Kapha) présentes en chaque individu dans des proportions variables. Votre constitution unique, appelée Prakriti, détermine votre physiologie, votre tempérament et vos vulnérabilités. Le praticien ayurvédique identifie votre constitution et vous propose un programme personnalisé.
          </p>
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { dosha: 'Vata', emoji: '💨', desc: 'Air et éther — légèreté, mobilité, créativité' },
              { dosha: 'Pitta', emoji: '🔥', desc: 'Feu et eau — transformation, intelligence, courage' },
              { dosha: 'Kapha', emoji: '🌊', desc: 'Terre et eau — stabilité, endurance, douceur' },
            ].map((d) => (
              <div key={d.dosha} className="p-4 rounded-2xl text-center" style={{ backgroundColor: '#f5f3ff' }}>
                <p className="text-2xl mb-1">{d.emoji}</p>
                <p className="font-medium text-sm mb-1" style={{ color: '#6b21a8' }}>{d.dosha}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#78716c' }}>{d.desc}</p>
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
              { emoji: '🔋', label: 'Fatigue chronique' },
              { emoji: '🤢', label: 'Troubles digestifs' },
              { emoji: '😰', label: 'Stress et anxiété' },
              { emoji: '🌸', label: 'Déséquilibres hormonaux' },
              { emoji: '✨', label: 'Bien-être global' },
              { emoji: '🧬', label: 'Prévention et longévité' },
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
            Comment se déroule une consultation ?
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { etape: '1', titre: 'Bilan de constitution', desc: 'Le praticien détermine votre Prakriti (constitution naturelle) et votre Vikriti (déséquilibre actuel) par un entretien approfondi et l\'observation de votre langue, pouls et aspect physique.' },
              { etape: '2', titre: 'Programme personnalisé', desc: 'Sur la base de ce bilan, il vous propose un plan incluant alimentation, plantes, soins et rituels quotidiens adaptés à votre constitution.' },
              { etape: '3', titre: 'Soins corporels (si proposés)', desc: 'Certains praticiens proposent des soins comme l\'Abhyanga (massage huileux), le Shirodhara (filet d\'huile sur le front) ou des bains de vapeur aux plantes.' },
              { etape: '4', titre: 'Suivi et ajustements', desc: 'L\'Ayurveda est une médecine de terrain — un suivi régulier permet d\'ajuster le programme selon l\'évolution de votre état.' },
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
            Praticiens ayurvédiques disponibles
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
              Voir tous les praticiens ayurvédiques →
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
              { q: 'L\'Ayurveda est-il compatible avec la médecine occidentale ?', r: 'Oui, l\'Ayurveda est une médecine complémentaire. Il est important d\'informer votre praticien ayurvédique de vos traitements médicaux en cours pour éviter toute interaction.' },
              { q: 'Faut-il changer toute son alimentation ?', r: 'Non, les changements sont progressifs et adaptés à votre mode de vie. Le praticien propose des ajustements réalistes et durables, pas une révolution du jour au lendemain.' },
              { q: 'Combien de consultations sont nécessaires ?', r: 'Un bilan initial complet (1h30 à 2h) est suivi de consultations de suivi tous les 1 à 3 mois selon les besoins. L\'Ayurveda est une démarche de fond, pas une solution rapide.' },
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
            Prêt à découvrir l'Ayurveda ?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>
            Trouvez un praticien ayurvédique vérifié près de chez vous ou en visio.
          </p>
          <button
            className="px-8 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver mon praticien ayurvédique →
          </button>
        </section>

      </div>
    </main>
  )
}