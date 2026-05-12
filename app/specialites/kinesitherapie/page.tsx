import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Kinésithérapie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un kinésithérapeute vérifié pour votre rééducation, vos douleurs chroniques ou votre récupération post-opératoire. Prise de RDV simple et rapide sur Holistia.',
}

export default function KinesitherapiePage() {
  const specialite = {
    nom: 'Kinésithérapie',
    emoji: '💪',
    photo: 'https://plus.unsplash.com/premium_photo-1683133816393-b04d94c65872?w=1400&h=500&fit=crop&q=75&fm=webp',
    accroche: 'Rééducation, soulagement des douleurs et récupération grâce au mouvement thérapeutique.',
    description_longue: `La kinésithérapie est une discipline paramédicale qui utilise le mouvement, la mobilisation manuelle et des techniques physiques pour traiter les affections musculo-squelettiques, neurologiques et respiratoires. Le kinésithérapeute, aussi appelé masseur-kinésithérapeute, est un professionnel de santé diplômé d'État qui intervient sur prescription médicale ou en accès direct selon les cas.

Son champ d'action est très vaste : rééducation après une opération, traitement des douleurs chroniques du dos ou des articulations, récupération sportive, rééducation neurologique après un AVC, kinésithérapie respiratoire chez le nourrisson ou le patient BPCO. Chaque séance est adaptée à votre état et à vos objectifs.

La kinésithérapie est reconnue et remboursée par l'Assurance Maladie sur prescription médicale. Elle repose sur des techniques validées scientifiquement : thérapie manuelle, exercices de rééducation, électrothérapie, ultrasonothérapie, balnéothérapie et bien d'autres. Le kinésithérapeute vous accompagne aussi dans l'apprentissage d'exercices à faire chez vous pour prolonger les bénéfices des séances.`,
    pour_qui: [
      { label: 'Post-opératoire', emoji: '🏥' },
      { label: 'Sportifs', emoji: '🏃' },
      { label: 'Personnes âgées', emoji: '👴' },
      { label: 'Nourrissons', emoji: '👶' },
      { label: 'Travailleurs sédentaires', emoji: '💼' },
    ],
    problematiques: [
      { label: 'Douleurs dorsales et lombalgies', description: 'Mal de dos, lumbago, hernie discale, sciatique — la kinésithérapie traite la cause et renforce les muscles stabilisateurs pour éviter les récidives.' },
      { label: 'Rééducation post-opératoire', description: 'Après une prothèse de genou ou de hanche, une chirurgie de l épaule ou du genou — retrouver force, amplitude et autonomie grâce à un protocole progressif.' },
      { label: 'Tendinites et entorses', description: 'Tendinite du coude, de l épaule, entorse de cheville — traitement de la douleur et rééducation fonctionnelle pour un retour à l activité sécurisé.' },
      { label: 'Kinésithérapie respiratoire', description: 'Désencombrement bronchique chez le nourrisson et l enfant, rééducation respiratoire en cas d asthme ou de BPCO chez l adulte.' },
      { label: 'Rééducation neurologique', description: 'Après un AVC, un traumatisme crânien ou en cas de maladie de Parkinson — récupération des fonctions motrices et amélioration de la qualité de vie.' },
      { label: 'Préparation physique et prévention', description: 'Renforcement musculaire préventif, correction de déséquilibres posturaux et préparation avant une opération programmée pour optimiser la récupération.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan kinésithérapique initial', description: 'La première séance est consacrée à un bilan complet de votre état : tests de mobilité, évaluation de la douleur, analyse de la posture et de la force musculaire. Le kiné définit avec vous les objectifs et le programme de rééducation.' },
      { etape: '2', titre: 'Séances de rééducation', description: 'Chaque séance de 30 à 45 minutes combine techniques manuelles (massage, mobilisation articulaire, étirements) et exercices actifs adaptés à votre progression. Le kiné ajuste constamment le programme en fonction de vos progrès.' },
      { etape: '3', titre: 'Autonomisation et prévention', description: 'En fin de prise en charge, le kinésithérapeute vous enseigne des exercices à pratiquer seul pour consolider les acquis, prévenir les récidives et maintenir votre condition physique sur le long terme.' },
    ],
    praticiens: 284,
    satisfaction: 4.8,
    tarif_depuis: '35€',
    tarif_jusqua: '80€',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Thomas Mercier',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 11e',
        note: '4.9',
        avis: 63,
        specialisation: 'Rééducation du genou, sport',
      },
      {
        nom: 'Claire Fontaine',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon 6e',
        note: '4.8',
        avis: 41,
        specialisation: 'Lombalgies, post-opératoire',
      },
      {
        nom: 'Antoine Garnier',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Bordeaux',
        note: '4.9',
        avis: 55,
        specialisation: 'Kiné respiratoire, pédiatrie',
      },
    ],
    faq: [
      { question: 'La kinésithérapie est-elle remboursée ?', reponse: 'Oui, sur prescription médicale, la kinésithérapie est remboursée par l Assurance Maladie à hauteur de 60 %. Votre mutuelle peut prendre en charge le reste à charge selon votre contrat.' },
      { question: 'Faut-il une ordonnance pour consulter ?', reponse: 'Dans la majorité des cas, une prescription médicale est requise pour bénéficier du remboursement. En accès direct (sans ordonnance), certaines consultations sont possibles mais non remboursées.' },
      { question: 'Combien de séances sont nécessaires ?', reponse: 'Cela dépend de la pathologie. Une entorse simple peut nécessiter 5 à 8 séances, une rééducation post-prothèse de 15 à 30 séances. Votre kinésithérapeute vous donnera une estimation dès le bilan initial.' },
      { question: 'La kinésithérapie fait-elle mal ?', reponse: 'Certaines techniques peuvent être inconfortables, notamment au début. Le kinésithérapeute adapte toujours l intensité à votre tolérance. Signaler la douleur permet d ajuster la technique en temps réel.' },
      { question: 'Peut-on faire de la kiné en cabinet et à domicile ?', reponse: 'Oui, de nombreux kinésithérapeutes se déplacent à domicile, notamment pour les personnes à mobilité réduite ou en post-opératoire. Les séances à domicile sont remboursées si médicalement justifiées.' },
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
          <span style={{ color: '#57534e' }}>📍 <strong style={{ color: '#6b21a8' }}>En cabinet uniquement</strong></span>
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
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { label: 'Tarif', value: `${specialite.tarif_depuis} — ${specialite.tarif_jusqua}`, emoji: '💶' },
              { label: 'Format', value: 'Cabinet et domicile', emoji: '🏥' },
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
            Quand consulter un kinésithérapeute ?
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
              Nos kinésithérapeutes vérifiés
            </h2>
            <div className="flex gap-3">
              <a
                href="/recherche"
                className="text-white px-5 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#6b21a8' }}
              >
                Voir les {specialite.praticiens} kinés
              </a>
              <a
                href="/recherche"
                className="px-5 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#f5f3ff', color: '#6b21a8', border: '1px solid #ede9fe' }}
              >
                📍 Près de chez moi
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {specialite.praticiens_vedette.map((p) => (
              <a
                key={p.nom}
                href="/recherche"
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                style={{ border: '1px solid #e7e5e4', display: 'block', textDecoration: 'none' }}
              >
                <img src={p.photo} alt={p.nom} className="w-full h-40 object-cover object-top" />
                <div className="p-4">
                  <p className="font-medium text-sm" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>{p.nom}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6b21a8' }}>{p.specialisation}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#78716c' }}>📍 {p.ville}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-xs">⭐</span>
                    <span className="text-xs font-medium" style={{ color: '#1c1917' }}>{p.note}</span>
                    <span className="text-xs" style={{ color: '#78716c' }}>({p.avis} avis)</span>
                    <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>Vérifié</span>
                  </div>
                </div>
              </a>
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
            Prêt à consulter un kinésithérapeute ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} kinésithérapeutes vérifiés vous attendent — en cabinet ou à domicile.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/recherche"
              className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Voir les kinésithérapeutes
            </a>
            <a
              href="/orientation"
              className="px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
            >
              Je ne sais pas par où commencer
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}
