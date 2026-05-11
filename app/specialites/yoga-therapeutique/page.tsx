import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Yoga thérapeutique : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un professeur de yoga thérapeutique vérifié pour réduire votre stress, soulager les douleurs chroniques et retrouver équilibre corps-esprit.',
}

export default function YogaTherapeutiquePage() {
  const specialite = {
    nom: 'Yoga thérapeutique',
    emoji: '🧘',
    photo: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Utiliser le yoga comme outil de soin pour retrouver souplesse, calme intérieur et vitalité.',
    description_longue: `Le yoga thérapeutique est une adaptation personnalisée du yoga traditionnel à des fins thérapeutiques. Contrairement aux cours de yoga en groupe, il se pratique en séance individuelle ou en petit groupe, sous la guidance d un praticien formé qui adapte chaque posture, chaque exercice respiratoire et chaque technique de méditation à votre état de santé et à vos objectifs.

Reconnu par l OMS comme médecine complémentaire efficace, le yoga thérapeutique agit à la fois sur le corps et l esprit. Il combine des postures (asanas) pour améliorer la mobilité et la posture, des exercices de respiration (pranayama) pour réguler le système nerveux autonome, et des techniques de relaxation et de méditation pour réduire l anxiété et améliorer le sommeil.

Les indications du yoga thérapeutique sont nombreuses : douleurs chroniques du dos, troubles anxieux et dépressifs, maladies chroniques (diabète, hypertension, cancer en accompagnement), troubles du sommeil, accompagnement de la grossesse et ménopause. Sa douceur et son adaptabilité en font une pratique accessible à tous les âges et tous les niveaux, même aux personnes sédentaires ou fragilisées.`,
    pour_qui: [
      { label: 'Personnes stressées', emoji: '😰' },
      { label: 'Douleurs chroniques', emoji: '🔙' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'Seniors', emoji: '👴' },
      { label: 'Maladies chroniques', emoji: '🏥' },
    ],
    problematiques: [
      { label: 'Stress et anxiété chronique', description: 'Le yoga thérapeutique régule le système nerveux sympathique, réduit le cortisol et active la réponse de relaxation. Des effets notables sur l anxiété dès les premières séances.' },
      { label: 'Douleurs de dos et posture', description: 'Postures de renforcement du gainage, étirements ciblés et conscience corporelle pour soulager les douleurs dorsales chroniques et corriger une mauvaise posture.' },
      { label: 'Troubles du sommeil', description: 'Techniques de respiration et séquences apaisantes pratiquées en soirée pour faciliter l endormissement et améliorer la qualité du sommeil profond.' },
      { label: 'Accompagnement des maladies chroniques', description: 'En complément d un traitement médical : yoga adapté pour les personnes atteintes de cancer, de diabète, d hypertension ou de maladies auto-immunes.' },
      { label: 'Récupération après blessure', description: 'Reprise douce du mouvement après une blessure ou une opération, en respectant les limites du corps et en favorisant la régénération des tissus.' },
      { label: 'Ménopause et cycles hormonaux', description: 'Postures et exercices respiratoires spécifiques pour accompagner les transitions hormonales — syndrome prémenstruel, péri-ménopause, ménopause.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Entretien et bilan initial', description: 'Le praticien écoute votre histoire de santé, vos objectifs et vos contraintes physiques. Il évalue votre niveau de pratique et définit avec vous un programme adapté à votre situation.' },
      { etape: '2', titre: 'Séances individuelles ou en petit groupe', description: 'Chaque séance de 60 à 90 minutes comprend un échauffement, une séquence de postures adaptées, des exercices respiratoires et une relaxation finale. Le praticien guide chaque ajustement pour éviter les blessures.' },
      { etape: '3', titre: 'Pratique autonome et outils quotidiens', description: 'Le praticien vous transmet une séquence courte (10-15 min) à pratiquer chaque jour chez vous, ainsi que des techniques de respiration utilisables en situation de stress. L objectif est l autonomie progressive.' },
    ],
    praticiens: 134,
    satisfaction: 4.8,
    tarif_depuis: '50€',
    tarif_jusqua: '90€',
    duree_seance: '60 à 90 min',
    nb_seances: '8 à 12 séances',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Amélie Durand',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 48,
        specialisation: 'Stress, douleurs chroniques, grossesse',
      },
      {
        nom: 'Florent Marchand',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Toulouse — aussi en visio',
        note: '4.8',
        avis: 35,
        specialisation: 'Yoga Iyengar thérapeutique, dos',
      },
      {
        nom: 'Sandrine Collet',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Nice — aussi en visio',
        note: '4.9',
        avis: 42,
        specialisation: 'Seniors, maladies chroniques, cancer',
      },
    ],
    faq: [
      { question: 'Faut-il être souple pour faire du yoga thérapeutique ?', reponse: 'Absolument pas. Le yoga thérapeutique s adapte à votre corps tel qu il est aujourd hui. Les postures sont modifiées avec des accessoires (blocs, sangles, chaises) pour les rendre accessibles à tous.' },
      { question: 'Le yoga thérapeutique est-il remboursé ?', reponse: 'Non, il n est pas remboursé par l Assurance Maladie. Certaines mutuelles proposent des remboursements partiels pour les médecines douces — renseignez-vous auprès de la vôtre.' },
      { question: 'Quelle différence avec un cours de yoga classique ?', reponse: 'Un cours de yoga classique s adresse à un groupe et n est pas adapté à vos problèmes de santé spécifiques. Le yoga thérapeutique est individualisé, orienté vers des objectifs thérapeutiques précis, avec un suivi de votre progression.' },
      { question: 'Peut-on pratiquer le yoga thérapeutique en visio ?', reponse: 'Oui, la pratique en visio est très efficace pour le yoga thérapeutique. Le praticien peut observer vos postures, vous corriger en temps réel et adapter les séquences. C est une excellente option pour les personnes éloignées ou à mobilité réduite.' },
      { question: 'Le yoga thérapeutique est-il compatible avec un traitement médical ?', reponse: 'Oui, le yoga thérapeutique est une approche complémentaire et non substitutive à la médecine conventionnelle. Informez votre praticien de tous vos traitements et de vos contre-indications médicales.' },
    ],
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>

      <Nav />

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

      <section className="bg-white py-6 px-6 shadow-sm">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <span style={{ color: '#57534e' }}>👩‍⚕️ <strong style={{ color: '#6b21a8' }}>{specialite.praticiens}</strong> praticiens vérifiés</span>
          <span style={{ color: '#57534e' }}>⭐ <strong style={{ color: '#6b21a8' }}>{specialite.satisfaction}/5</strong> de satisfaction</span>
          <span style={{ color: '#57534e' }}>À partir de <strong style={{ color: '#6b21a8' }}>{specialite.tarif_depuis}</strong></span>
          <span style={{ color: '#57534e' }}>🖥 <strong style={{ color: '#6b21a8' }}>Visio disponible</strong></span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Qu est-ce que le {specialite.nom} ?
          </h2>
          {specialite.description_longue.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>{para}</p>
          ))}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Durée', value: specialite.duree_seance, emoji: '⏱' },
              { label: 'Nb séances', value: specialite.nb_seances, emoji: '📅' },
              { label: 'Tarif', value: `${specialite.tarif_depuis} — ${specialite.tarif_jusqua}`, emoji: '💶' },
              { label: 'Format', value: 'Cabinet et visio', emoji: '🖥' },
            ].map((info) => (
              <div key={info.label} className="text-center p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff' }}>
                <p className="text-xl mb-1">{info.emoji}</p>
                <p className="text-xs font-medium mb-0.5" style={{ color: '#6b21a8' }}>{info.label}</p>
                <p className="text-xs" style={{ color: '#57534e' }}>{info.value}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Quand consulter un praticien en yoga thérapeutique ?
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

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-2xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Comment se déroule un accompagnement ?
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

        <section>
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <h2 className="text-2xl font-light" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
              Nos praticiens en yoga thérapeutique vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} praticiens
              </a>
              <a href="/recherche" className="px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px solid #ede9fe' }}>
                📍 Près de chez moi
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {specialite.praticiens_vedette.map((p) => (
              <a key={p.nom} href="/recherche" className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition" style={{ border: '1px solid #e7e5e4', display: 'block', textDecoration: 'none' }}>
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
              </a>
            ))}
          </div>
        </section>

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

        <section className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-2xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>
            Prêt à commencer le yoga thérapeutique ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} praticiens vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les praticiens
            </a>
            <a href="/orientation" className="px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}>
              Je ne sais pas par où commencer
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
