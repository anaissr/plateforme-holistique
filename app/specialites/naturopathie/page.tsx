'use client'

import Nav from '@/app/components/Nav'

export default function Naturopathie() {
  const specialite = {
    nom: 'Naturopathie',
    emoji: '🌿',
    accroche: 'Une approche globale de votre santé par l alimentation, les plantes et l hygiène de vie.',
    description_longue: `La naturopathie est une médecine naturelle qui considère l être humain dans sa globalité — corps, esprit et environnement. Elle s appuie sur la capacité innée du corps à s autoguérir et vise à identifier et traiter les causes profondes des déséquilibres plutôt que leurs symptômes.

Le naturopathe dispose d un large éventail d outils : nutrition et micronutrition, phytothérapie, aromathérapie, gestion du stress, exercice physique adapté et hygiène de vie. Chaque protocole est entièrement personnalisé en fonction de votre bilan de vitalité.

La naturopathie est particulièrement efficace pour les troubles chroniques que la médecine conventionnelle peine à résoudre — troubles digestifs, fatigue chronique, déséquilibres hormonaux ou accompagnement en PMA. Elle peut s utiliser seule ou en complément d un traitement médical.`,
    pour_qui: [
      { label: 'Adultes', emoji: '🧑' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'PMA et fertilité', emoji: '🌱' },
      { label: 'Enfants', emoji: '👶' },
      { label: 'Seniors', emoji: '👴' },
    ],
    problematiques: [
      { label: 'Troubles digestifs', description: 'Ballonnements, intestin irritable, SIBO, reflux — la naturopathie identifie les causes et rééquilibre le microbiote.' },
      { label: 'Fatigue chronique', description: 'Bilan de vitalité complet pour identifier les carences, les toxines accumulées et restaurer l énergie naturelle.' },
      { label: 'Déséquilibres hormonaux', description: 'Syndrome prémenstruel, ménopause, thyroïde — une approche naturelle pour retrouver l équilibre hormonal.' },
      { label: 'PMA et fertilité', description: 'Préparation du terrain avant une FIV ou une grossesse naturelle — alimentation, compléments, gestion du stress.' },
      { label: 'Rééquilibrage alimentaire', description: 'Pas de régime, mais une alimentation adaptée à votre constitution, vos besoins et votre mode de vie.' },
      { label: 'Immunité et prévention', description: 'Renforcement des défenses naturelles, accompagnement des changements de saison et prévention des maladies chroniques.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Le bilan de vitalité', description: 'Une première consultation longue (1h30) pour faire le point sur votre histoire, vos habitudes, vos symptômes et vos objectifs. Le naturopathe évalue votre terrain et vos déficiences.' },
      { etape: '2', titre: 'Le protocole personnalisé', description: 'Le naturopathe vous remet un protocole détaillé — alimentation, compléments naturels, plantes, conseils d hygiène de vie. Tout est adapté à votre quotidien et à vos contraintes.' },
      { etape: '3', titre: 'Le suivi et les ajustements', description: 'Des consultations de suivi régulières (45 min) pour évaluer les progrès, ajuster le protocole et répondre à vos questions. L objectif est une autonomie progressive.' },
    ],
    praticiens: 156,
    satisfaction: 4.8,
    tarif_depuis: '65€',
    tarif_jusqua: '120€',
    duree_seance: '45 min à 1h30',
    nb_seances: '3 à 6 séances en moyenne',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Sophie Laurent',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 47,
        specialisation: 'Troubles digestifs, PMA, hormones',
      },
      {
        nom: 'Lucie Bernard',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 38,
        specialisation: 'Fatigue chronique, immunité',
      },
      {
        nom: 'Emma Rousseau',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Visio uniquement',
        note: '4.9',
        avis: 52,
        specialisation: 'Alimentation, microbiote, enfants',
      },
    ],
    faq: [
      { question: 'La naturopathie est-elle remboursée ?', reponse: 'La naturopathie n est pas remboursée par la Sécurité sociale. Certaines mutuelles proposent un remboursement partiel — renseignez-vous auprès de la vôtre.' },
      { question: 'Peut-on combiner naturopathie et traitement médical ?', reponse: 'Oui, la naturopathie est complémentaire à la médecine conventionnelle. Le naturopathe travaille en coordination avec votre médecin et ne substitue jamais à un traitement prescrit.' },
      { question: 'Combien de temps avant de voir des résultats ?', reponse: 'Les premiers effets se font généralement sentir après 3 à 4 semaines de suivi du protocole. Pour des troubles chroniques, un accompagnement de 3 à 6 mois est souvent nécessaire.' },
      { question: 'La naturopathie fonctionne-t-elle en visio ?', reponse: 'Oui, la grande majorité des consultations se font très bien en visio. Le bilan et le protocole sont tout aussi complets qu en cabinet.' },
      { question: 'Faut-il arrêter ses médicaments ?', reponse: 'Non, jamais sans avis médical. Le naturopathe adapte son protocole à vos traitements en cours et vous accompagne en parallèle.' },
    ],
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

      {/* HERO */}
      <section
        className="px-6 py-16 text-center relative"
        style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}
      >
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ marginBottom: '-1px' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', height: '60px', width: '100%' }}>
            <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#faf9f7" />
          </svg>
        </div>
        <div className="text-6xl mb-4">{specialite.emoji}</div>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          {specialite.nom}
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#d8b4fe' }}>
          {specialite.accroche}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span style={{ color: '#e9d5ff' }}>👩‍⚕️ {specialite.praticiens} praticiens vérifiés</span>
          <span style={{ color: '#e9d5ff' }}>⭐ {specialite.satisfaction}/5 de satisfaction</span>
          <span style={{ color: '#e9d5ff' }}>À partir de {specialite.tarif_depuis}</span>
          {specialite.visio && <span style={{ color: '#e9d5ff' }}>🖥 Disponible en visio</span>}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* QU'EST-CE QUE C'EST */}
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
              { label: 'Format', value: specialite.visio ? 'Cabinet et visio' : 'Cabinet uniquement', emoji: '🖥' },
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
            Quand consulter un naturopathe ?
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
            Comment se déroule un accompagnement ?
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
              Nos naturopathes vérifiés
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
            Prêt à consulter un naturopathe ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} naturopathes vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
              onClick={() => { window.location.href = '/recherche' }}
            >
              Voir les naturopathes
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