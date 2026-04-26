'use client'

import Nav from '@/app/components/Nav'

export default function Acupuncture() {
  const praticiens = [
    {
      nom: 'Chen Mei',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face',
      ville: 'Paris',
      note: '4.9',
      avis: 52,
      tarif: '65€',
      visio: false,
    },
    {
      nom: 'François Petit',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      ville: 'Lyon',
      note: '4.7',
      avis: 34,
      tarif: '70€',
      visio: false,
    },
    {
      nom: 'Nathalie Simon',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      ville: 'Bordeaux',
      note: '4.8',
      avis: 41,
      tarif: '65€',
      visio: false,
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="relative" style={{ minHeight: '420px' }}>
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1600&h=600&fit=crop&crop=center"
          alt="Acupuncture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,7,100,0.88) 0%, rgba(107,33,168,0.75) 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="text-6xl mb-4">🌸</div>
          <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
            76 praticiens vérifiés · À partir de 65€
          </span>
          <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
            Acupuncture
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
            Rééquilibrez votre énergie vitale grâce à la pose d'aiguilles fines sur des points précis — une technique millénaire aux effets reconnus.
          </p>
          <button
            className="px-8 py-4 rounded-2xl font-medium shadow-lg"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            onClick={() => { window.location.href = '/recherche' }}
          >
            Trouver un acupuncteur près de moi
          </button>
        </div>
      </section>

      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '76', label: 'praticiens vérifiés' },
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

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu'est-ce que l'acupuncture ?
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            L'acupuncture est une technique thérapeutique issue de la médecine traditionnelle chinoise qui consiste à insérer de très fines aiguilles en des points précis du corps appelés points d'acupuncture. Ces points sont situés sur des méridiens — des voies de circulation de l'énergie vitale (le Qi).
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Reconnue par l'OMS pour traiter de nombreuses pathologies, l'acupuncture agit sur le système nerveux, endocrinien et immunitaire. Elle stimule la production d'endorphines et régule les fonctions organiques. Des études cliniques ont démontré son efficacité notamment sur la douleur, l'anxiété et les troubles fonctionnels.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Pour qui ?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: '🦴', label: 'Douleurs chroniques' },
              { emoji: '🤢', label: 'Troubles digestifs' },
              { emoji: '😰', label: 'Stress et anxiété' },
              { emoji: '🌸', label: 'Fertilité et PMA' },
              { emoji: '😴', label: 'Troubles du sommeil' },
              { emoji: '🤰', label: 'Grossesse et post-partum' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#57534e' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Comment se déroule une séance ?</h2>
          <div className="flex flex-col gap-4">
            {[
              { etape: '1', titre: 'Bilan énergétique', desc: 'Prise de pouls, observation de la langue et entretien complet pour établir votre bilan énergétique selon la MTC.' },
              { etape: '2', titre: 'Pose des aiguilles', desc: 'Allongé confortablement, le praticien pose entre 5 et 20 aiguilles stériles à usage unique sur des points spécifiques. La sensation est minime.' },
              { etape: '3', titre: 'Temps de repos', desc: 'Les aiguilles restent en place 20 à 30 minutes. C\'est un moment de détente profonde pendant lequel le corps intègre le traitement.' },
              { etape: '4', titre: 'Retrait et conseils', desc: 'Le praticien retire les aiguilles et vous donne des conseils diététiques ou de mode de vie pour prolonger les effets.' },
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
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Acupuncteurs disponibles</h2>
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
              Voir tous les acupuncteurs →
            </button>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Questions fréquentes</h2>
          <div className="flex flex-col gap-4">
            {[
              { q: 'Est-ce douloureux ?', r: 'Non. Les aiguilles d\'acupuncture sont extrêmement fines — beaucoup plus qu\'une aiguille médicale. On ressent parfois une légère sensation de chaleur ou de pression, mais c\'est rarement douloureux.' },
              { q: 'Les aiguilles sont-elles réutilisées ?', r: 'Non, toutes les aiguilles utilisées sur Holistia sont stériles et à usage unique. Elles sont jetées après chaque séance dans un container adapté.' },
              { q: 'Combien de séances sont nécessaires ?', r: 'Pour un problème aigu, 3 à 5 séances suffisent souvent. Pour des problèmes chroniques, un suivi régulier de plusieurs mois est recommandé. Les effets s\'accumulent au fil des séances.' },
            ].map((faq) => (
              <div key={faq.q} className="p-4 rounded-2xl" style={{ backgroundColor: '#faf9f7', border: '1px solid #e7e5e4' }}>
                <p className="font-medium mb-2 text-sm" style={{ color: '#1c1917' }}>{faq.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>Prêt à essayer l'acupuncture ?</h2>
          <p className="text-sm mb-6" style={{ color: '#e9d5ff' }}>Trouvez un acupuncteur vérifié près de chez vous.</p>
          <button className="px-8 py-3 rounded-2xl font-medium" style={{ backgroundColor: '#ffffff', color: '#6b21a8' }} onClick={() => { window.location.href = '/recherche' }}>
            Trouver mon acupuncteur →
          </button>
        </section>

      </div>
    </main>
  )
}