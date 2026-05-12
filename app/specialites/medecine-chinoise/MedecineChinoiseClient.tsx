'use client'

import Nav from '@/app/components/Nav'

export default function MedecineChinoise() {
  const specialite = {
    nom: 'Médecine traditionnelle chinoise',
    emoji: '☯️',
    photo: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Rééquilibrez votre énergie vitale grâce à 3000 ans de sagesse médicale chinoise.',
    description_longue: `La médecine traditionnelle chinoise (MTC) est un système médical complet développé en Chine depuis plus de 3000 ans. Elle repose sur le concept d énergie vitale — le Qi — qui circule dans le corps à travers des méridiens. Lorsque cette circulation est perturbée, des déséquilibres et des maladies apparaissent.

La MTC englobe plusieurs disciplines complémentaires : l acupuncture, la pharmacopée chinoise (plantes médicinales), le massage Tui Na, les exercices énergétiques (Qi Gong, Tai Chi) et la diététique chinoise. Le praticien choisit les outils les plus adaptés à votre situation et à votre constitution.

Contrairement à la médecine occidentale qui traite les symptômes, la MTC cherche à identifier et corriger le déséquilibre sous-jacent. Elle considère chaque patient comme unique et adapte son approche en conséquence — deux personnes avec les mêmes symptômes peuvent recevoir des traitements très différents.`,
    pour_qui: [
      { label: 'Adultes', emoji: '🧑' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'PMA et fertilité', emoji: '🌱' },
      { label: 'Seniors', emoji: '👴' },
      { label: 'Sportifs', emoji: '🏃' },
    ],
    problematiques: [
      { label: 'Douleurs chroniques', description: 'L acupuncture libère les blocages énergétiques et stimule la production d endorphines pour soulager durablement la douleur.' },
      { label: 'Troubles digestifs', description: 'La MTC régule le système digestif en rééquilibrant les organes responsables de la digestion selon la médecine chinoise.' },
      { label: 'Stress et anxiété', description: 'En agissant sur les méridiens liés au cœur et aux reins, la MTC apaise le système nerveux et favorise la sérénité.' },
      { label: 'Fertilité et PMA', description: 'La MTC prépare le terrain hormonal et énergétique pour favoriser la conception naturelle ou améliorer les résultats d une FIV.' },
      { label: 'Troubles du sommeil', description: 'Des points d acupuncture spécifiques régulent le cycle veille-sommeil et apaisent l agitation mentale nocturne.' },
      { label: 'Immunité et prévention', description: 'En renforçant l énergie défensive du corps, la MTC améliore la résistance aux infections et prévient les déséquilibres saisonniers.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Le diagnostic chinois', description: 'Le praticien réalise un bilan complet selon les 4 examens traditionnels : observation (teint, langue), auscultation, interrogatoire et palpation des pouls. Chaque pouls donne des informations précieuses sur l état des organes.' },
      { etape: '2', titre: 'Le traitement', description: 'En fonction du diagnostic, le praticien choisit ses outils : acupuncture, moxibustion (chaleur), ventouses, massage Tui Na ou prescription de plantes médicinales. Les séances durent généralement 45 min à 1h.' },
      { etape: '3', titre: 'Le suivi', description: 'La MTC agit progressivement. Un suivi régulier est recommandé, surtout pour les affections chroniques. Le praticien adapte le traitement à chaque séance selon l évolution de votre état.' },
    ],
    praticiens: 76,
    satisfaction: 4.7,
    tarif_depuis: '65€',
    tarif_jusqua: '110€',
    duree_seance: '45 min à 1h',
    nb_seances: '4 à 10 séances selon la problématique',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Li Wei Chen',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 13ème',
        note: '4.9',
        avis: 67,
        specialisation: 'Acupuncture, fertilité, douleurs',
      },
      {
        nom: 'Sophie Marchand',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 43,
        specialisation: 'MTC, plantes, troubles digestifs',
      },
      {
        nom: 'Marc Nguyen',
        photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
        ville: 'Bordeaux',
        note: '4.7',
        avis: 38,
        specialisation: 'Acupuncture, stress, sommeil',
      },
    ],
    faq: [
      { question: 'L acupuncture fait-elle mal ?', reponse: 'Les aiguilles d acupuncture sont très fines — bien plus que les aiguilles médicales. La plupart des patients ressentent une légère sensation de chaleur ou de picotement, mais pas de douleur. Beaucoup s endorment pendant la séance.' },
      { question: 'La MTC est-elle remboursée ?', reponse: 'En France, l acupuncture pratiquée par un médecin est partiellement remboursée. Pour les praticiens non médecins, certaines mutuelles proposent un remboursement partiel — vérifiez votre contrat.' },
      { question: 'Peut-on faire de la MTC pendant la grossesse ?', reponse: 'Oui, avec un praticien formé. Certains points sont contre-indiqués pendant la grossesse, mais la MTC est reconnue pour soulager les nausées, les douleurs et préparer l accouchement.' },
      { question: 'Combien de séances sont nécessaires ?', reponse: 'Pour une affection aiguë, 2 à 4 séances suffisent souvent. Pour les troubles chroniques, un suivi de 8 à 12 séances est généralement recommandé, puis des séances d entretien saisonnières.' },
      { question: 'Quelle est la différence entre MTC et acupuncture ?', reponse: 'L acupuncture est l une des techniques de la MTC. La MTC englobe aussi les plantes médicinales, le massage Tui Na, la diététique et les exercices énergétiques. Un praticien MTC peut combiner plusieurs approches.' },
    ],
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      {/* PHOTO EN HAUT */}
      <div className="w-full relative overflow-hidden" style={{ height: '320px' }}>
        <img src={specialite.photo} alt={specialite.nom} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(59,7,100,0.3) 0%, rgba(59,7,100,0.7) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="text-6xl mb-3">{specialite.emoji}</div>
          <h1 className="text-4xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>{specialite.nom}</h1>
          <p className="text-lg max-w-2xl" style={{ color: '#e9d5ff' }}>{specialite.accroche}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white py-6 px-6 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <span style={{ color: '#57534e' }}>👩‍⚕️ <strong style={{ color: '#6b21a8' }}>{specialite.praticiens}</strong> praticiens vérifiés</span>
          <span style={{ color: '#57534e' }}>⭐ <strong style={{ color: '#6b21a8' }}>{specialite.satisfaction}/5</strong> de satisfaction</span>
          <span style={{ color: '#57534e' }}>À partir de <strong style={{ color: '#6b21a8' }}>{specialite.tarif_depuis}</strong></span>
          <span style={{ color: '#57534e' }}>🏥 <strong style={{ color: '#6b21a8' }}>Cabinet uniquement</strong></span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* DESCRIPTION */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu est-ce que la {specialite.nom} ?
          </h2>
          {specialite.description_longue.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>{para}</p>
          ))}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Durée', value: specialite.duree_seance, emoji: '⏱' },
              { label: 'Nb séances', value: specialite.nb_seances, emoji: '📅' },
              { label: 'Tarif', value: `${specialite.tarif_depuis} — ${specialite.tarif_jusqua}`, emoji: '💶' },
              { label: 'Format', value: 'Cabinet uniquement', emoji: '🏥' },
            ].map((info) => (
              <div key={info.label} className="text-center p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <p className="text-xl mb-1">{info.emoji}</p>
                <p className="text-xs font-medium mb-0.5" style={{ color: '#6b21a8' }}>{info.label}</p>
                <p className="text-xs" style={{ color: '#57534e' }}>{info.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POUR QUI */}
        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Pour qui ?</h2>
          <div className="flex flex-wrap gap-3">
            {specialite.pour_qui.map((p) => (
              <div key={p.label} className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <span className="text-xl">{p.emoji}</span>
                <span className="text-sm font-medium" style={{ color: '#57534e' }}>{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLÉMATIQUES */}
        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Quand consulter un praticien en MTC ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialite.problematiques.map((pb) => (
              <div key={pb.label} className="bg-white rounded-2xl p-5 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h3 className="font-medium mb-2" style={{ color: '#1c1917' }}>{pb.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{pb.description}</p>
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
            {specialite.deroulement.map((etape) => (
              <div key={etape.etape} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 text-white" style={{ backgroundColor: '#6b21a8' }}>
                  {etape.etape}
                </div>
                <div>
                  <h3 className="font-medium mb-1" style={{ color: '#1c1917' }}>{etape.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRATICIENS */}
        <section>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <h2 className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
              Nos praticiens MTC vérifiés
            </h2>
            <div className="flex gap-3">
              <button
                className="text-white px-5 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#6b21a8' }}
                onClick={() => { window.location.href = '/recherche' }}
              >
                Voir les {specialite.praticiens} praticiens
              </button>
              <button
                className="px-5 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px solid #ede9fe' }}
                onClick={() => { window.location.href = '/recherche' }}
              >
                📍 Près de chez moi
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {specialite.praticiens_vedette.map((p) => (
              <div
                key={p.nom}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
                style={{ border: '1px solid #e7e5e4' }}
                onClick={() => { window.location.href = '/praticien' }}
              >
                <img src={p.photo} alt={p.nom} className="w-full h-40 object-cover object-top" />
                <div className="p-4">
                  <p className="font-medium text-sm" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{p.nom}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6b21a8' }}>{p.specialisation}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📍 {p.ville}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-xs">⭐</span>
                    <span className="text-xs font-medium" style={{ color: '#1c1917' }}>{p.note}</span>
                    <span className="text-xs" style={{ color: '#a8a29e' }}>({p.avis} avis)</span>
                    <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>Vérifié</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Questions fréquentes</h2>
          <div className="flex flex-col gap-3">
            {specialite.faq.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h3 className="font-medium mb-2" style={{ color: '#1c1917' }}>{item.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{item.reponse}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>
            Prêt à consulter un praticien en MTC ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} praticiens vérifiés vous attendent — près de chez vous.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Voir les praticiens MTC
            </button>
            <button
              className="px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
              onClick={() => { window.location.href = '/orientation' }}
            >
              Je ne sais pas par où commencer
            </button>
          </div>
        </section>

      </div>
    </main>
  )
}