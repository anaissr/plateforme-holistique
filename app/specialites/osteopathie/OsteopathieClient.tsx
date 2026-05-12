'use client'

import Nav from '@/app/components/Nav'

export default function Osteopathie() {
  const specialite = {
    nom: 'Ostéopathie',
    emoji: '🤲',
    photo: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Soulagez vos douleurs et retrouvez votre mobilité grâce au toucher thérapeutique.',
    description_longue: `L ostéopathie est une médecine manuelle qui considère le corps dans sa globalité. Elle repose sur le principe que la structure et la fonction du corps sont interdépendantes — lorsqu une zone perd sa mobilité, l ensemble de l organisme peut en être affecté.

L ostéopathe utilise ses mains pour diagnostiquer et traiter les restrictions de mobilité des os, des muscles, des ligaments et des organes. Ses manipulations sont douces, précises et adaptées à chaque patient — du nourrisson au senior.

Complémentaire à la médecine conventionnelle, l ostéopathie est particulièrement efficace pour les douleurs chroniques, les troubles posturaux et la récupération après un traumatisme ou une opération.`,
    pour_qui: [
      { label: 'Adultes', emoji: '🧑' },
      { label: 'Nourrissons et bébés', emoji: '🍼' },
      { label: 'Enfants', emoji: '👶' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'Sportifs', emoji: '🏃' },
      { label: 'Seniors', emoji: '👴' },
    ],
    problematiques: [
      { label: 'Douleurs de dos', description: 'Lombalgies, cervicalgies, sciatique — l ostéopathie libère les tensions et restaure la mobilité vertébrale.' },
      { label: 'Douleurs articulaires', description: 'Épaule, genou, cheville, hanche — traitement des restrictions et des compensations articulaires.' },
      { label: 'Troubles posturaux', description: 'Scoliose légère, déséquilibres posturaux, tensions musculaires chroniques liées à la position assise.' },
      { label: 'Nourrissons et bébés', description: 'Plagiocéphalie, reflux, coliques, difficultés d allaitement — des manipulations très douces adaptées aux bébés.' },
      { label: 'Récupération sportive', description: 'Prévention des blessures, récupération après effort intense, optimisation des performances.' },
      { label: 'Troubles fonctionnels', description: 'Maux de tête, troubles digestifs, sinusites chroniques — l ostéopathie viscérale agit sur les organes.' },
    ],
    deroulement: [
      { etape: '1', titre: 'L anamnèse', description: 'L ostéopathe commence par un entretien détaillé pour comprendre vos douleurs, votre histoire médicale et votre mode de vie. Il pose des questions précises pour orienter son examen.' },
      { etape: '2', titre: 'L examen ostéopathique', description: 'Debout et allongé, l ostéopathe palpe et teste la mobilité de vos articulations, muscles et tissus. Il identifie les zones de restriction qui perturbent votre équilibre.' },
      { etape: '3', titre: 'Le traitement', description: 'Par des techniques douces et précises — manipulations articulaires, techniques myofasciales, travail viscéral — l ostéopathe libère les restrictions trouvées.' },
      { etape: '4', titre: 'Les conseils', description: 'En fin de séance, l ostéopathe vous donne des conseils posturaux, des exercices à faire chez vous et des recommandations pour éviter la récidive.' },
    ],
    praticiens: 143,
    satisfaction: 4.7,
    tarif_depuis: '70€',
    tarif_jusqua: '100€',
    duree_seance: '45 min à 1h',
    nb_seances: '1 à 3 séances en moyenne',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Marc Dubois',
        photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon',
        note: '4.8',
        avis: 63,
        specialisation: 'Douleurs chroniques, sport',
      },
      {
        nom: 'Pierre Martin',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris',
        note: '4.9',
        avis: 41,
        specialisation: 'Nourrissons, femmes enceintes',
      },
      {
        nom: 'Thomas Leroy',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Bordeaux',
        note: '4.7',
        avis: 55,
        specialisation: 'Posture, troubles viscéraux',
      },
    ],
    faq: [
      { question: 'L ostéopathie est-elle remboursée ?', reponse: 'L ostéopathie n est pas remboursée par la Sécurité sociale. De nombreuses mutuelles proposent un remboursement partiel de 1 à 5 séances par an — vérifiez votre contrat.' },
      { question: 'Les manipulations font-elles mal ?', reponse: 'Les techniques ostéopathiques sont généralement indolores. Certaines manipulations peuvent provoquer une légère gêne passagère, mais l ostéopathe adapte toujours son approche à votre confort.' },
      { question: 'Peut-on consulter un ostéopathe pendant la grossesse ?', reponse: 'Oui, l ostéopathie est tout à fait adaptée à la grossesse. Des techniques spécifiques et très douces sont utilisées pour soulager les douleurs de dos, de bassin et préparer l accouchement.' },
      { question: 'À quel âge peut-on amener un bébé chez l ostéopathe ?', reponse: 'Dès la naissance. Une consultation dans les premières semaines de vie est recommandée, surtout après un accouchement difficile, pour traiter les tensions crâniennes et favoriser un bon développement.' },
      { question: 'L ostéopathie se fait-elle en visio ?', reponse: 'Non, l ostéopathie nécessite un contact physique et se pratique uniquement en cabinet. En revanche, des conseils posturaux et des exercices peuvent être donnés en visio en complément.' },
    ],
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      {/* PHOTO EN HAUT */}
      <div className="w-full relative overflow-hidden" style={{ height: '320px' }}>
        <img
          src={specialite.photo}
          alt={specialite.nom}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(59,7,100,0.3) 0%, rgba(59,7,100,0.7) 100%)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="text-6xl mb-3">{specialite.emoji}</div>
          <h1 className="text-4xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>
            {specialite.nom}
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: '#e9d5ff' }}>
            {specialite.accroche}
          </p>
        </div>
        {/* Vague bas */}
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

        {/* QU'EST-CE QUE C'EST */}
        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu est-ce que l {specialite.nom} ?
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
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Pour qui ?
          </h2>
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
            Quand consulter un ostéopathe ?
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
            Comment se déroule une séance ?
          </h2>
          <div className="flex flex-col gap-4">
            {specialite.deroulement.map((etape) => (
              <div key={etape.etape} className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 text-white"
                  style={{ backgroundColor: '#6b21a8' }}
                >
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

        {/* PRATICIENS EN VEDETTE */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
              Nos ostéopathes vérifiés
            </h2>
            <button
              className="text-white px-5 py-2 rounded-xl text-sm font-medium"
              style={{ backgroundColor: '#6b21a8' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Voir tous les {specialite.praticiens} praticiens
            </button>
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
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Questions fréquentes
          </h2>
          <div className="flex flex-col gap-3">
            {specialite.faq.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
                <h3 className="font-medium mb-2" style={{ color: '#1c1917' }}>{item.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{item.reponse}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          className="rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}
        >
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>
            Prêt à consulter un ostéopathe ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} ostéopathes vérifiés vous attendent — près de chez vous.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Voir les ostéopathes
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