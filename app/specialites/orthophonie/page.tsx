import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Orthophonie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un orthophoniste vérifié pour accompagner troubles du langage, dyslexie, bégaiement, déglutition et rééducation vocale chez l enfant et l adulte.',
  openGraph: {
    title: 'Orthophonie : praticiens vérifiés et consultation en ligne',
    description: "Langage, dyslexie, bégaiement — trouvez un orthophoniste diplômé d'État disponible sur Holistia.",
    type: 'website',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1661724579910-96f4dba073ac?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Orthophonie ',
      },
    ],
  },
}

export default function OrthophoniePage() {
  const specialite = {
    nom: 'Orthophonie',
    emoji: '🗨️',
    photo: 'https://plus.unsplash.com/premium_photo-1661724579910-96f4dba073ac?w=1400&h=500&fit=crop&q=75&fm=webp',
    accroche: 'Rééduquer et accompagner la communication, le langage, la parole et les apprentissages à tout âge.',
    description_longue: `L orthophonie est une profession de santé paramédicale consacrée à la prévention, l évaluation et la rééducation des troubles de la communication, du langage oral et écrit, de la parole, de la voix et des fonctions oro-myo-faciales (mastication, déglutition). L orthophoniste est un professionnel de santé diplômé d'État qui exerce sur prescription médicale.

Chez l enfant, l orthophoniste accompagne les troubles du développement du langage (retard de parole ou de langage), les difficultés d apprentissage scolaire (dyslexie, dysorthographie, dyscalculie), les troubles de la fluence (bégaiement), les troubles liés à l autisme (TSA) ou au TDAH, et les retards globaux de développement. L intervention précoce est souvent déterminante pour réduire l impact de ces difficultés sur la scolarité et la vie sociale de l enfant.

Chez l adulte, l orthophoniste prend en charge les séquelles de maladies neurologiques (aphasie post-AVC, maladie de Parkinson, sclérose en plaques), les troubles de la déglutition (dysphagie) après une chirurgie cervicale ou une maladie neurologique, les pathologies vocales (dysphonie), et les troubles cognitifs liés au vieillissement ou à des affections neurodégénératives.`,
    pour_qui: [
      { label: 'Enfants (dès 18 mois)', emoji: '👶' },
      { label: 'Élèves en difficulté scolaire', emoji: '📚' },
      { label: 'Adultes post-AVC', emoji: '🏥' },
      { label: 'Personnes âgées', emoji: '👴' },
      { label: 'Personnes bègues', emoji: '🗣️' },
    ],
    problematiques: [
      { label: 'Retard de parole et de langage', description: 'L enfant qui parle peu, qui est difficile à comprendre ou qui présente un vocabulaire limité pour son âge peut bénéficier d une prise en charge orthophonique précoce pour rattraper son développement langagier.' },
      { label: 'Dyslexie, dysorthographie et dyscalculie', description: 'Difficultés spécifiques dans l apprentissage de la lecture, de l orthographe ou des mathématiques — l orthophoniste évalue précisément le trouble et propose une rééducation adaptée pour faciliter les apprentissages.' },
      { label: 'Bégaiement', description: 'Troubles de la fluence de la parole — l orthophoniste utilise des techniques spécifiques (restructuration cognitive et vocale, fluidification) pour réduire le bégaiement et améliorer la communication.' },
      { label: 'Troubles de la déglutition', description: 'Difficultés à avaler solides ou liquides (fausses routes) — notamment après un AVC, une chirurgie ORL, une maladie neurologique ou chez le nourrisson avec des difficultés d allaitement.' },
      { label: 'Aphasie et séquelles neurologiques', description: 'Après un AVC ou une lésion cérébrale, l orthophoniste rééduque les troubles du langage et de la communication pour aider le patient à retrouver le maximum de ses capacités d expression.' },
      { label: 'Troubles cognitifs et mémoire', description: 'Stimulation cognitive chez les personnes atteintes de la maladie d Alzheimer ou d autres démences — exercices de mémoire, de compréhension et de communication pour maintenir les capacités le plus longtemps possible.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan orthophonique', description: 'La première consultation (1h à 1h30) est entièrement consacrée au bilan. L orthophoniste évalue précisément les capacités et les difficultés de la personne à l aide de tests standardisés. Ce bilan permet d établir un diagnostic orthophonique et de définir les objectifs de rééducation.' },
      { etape: '2', titre: 'Séances de rééducation', description: 'Les séances durent 30 à 45 minutes. L orthophoniste utilise des exercices ludiques et progressifs adaptés à l âge et aux difficultés. Pour les enfants, le travail est souvent présenté sous forme de jeux pour maintenir la motivation.' },
      { etape: '3', titre: 'Suivi et liaison avec l environnement', description: 'L orthophoniste maintient un lien régulier avec les parents (pour les enfants), les enseignants et les médecins. Il adapte continuellement le programme aux progrès de la personne et peut formuler des recommandations à l entourage pour soutenir la rééducation au quotidien.' },
    ],
    praticiens: 231,
    satisfaction: 4.8,
    tarif_depuis: '50€',
    tarif_jusqua: '80€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Marie Leblanc',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 14e — aussi en visio',
        note: '4.9',
        avis: 58,
        specialisation: 'Dyslexie, dyscalculie, enfants',
      },
      {
        nom: 'Sébastien Caron',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Strasbourg',
        note: '4.8',
        avis: 41,
        specialisation: 'Bégaiement, troubles de la voix',
      },
      {
        nom: 'Élise Muller',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.9',
        avis: 47,
        specialisation: 'Neurologie adulte, aphasie, Parkinson',
      },
    ],
    faq: [
      { question: 'L orthophonie est-elle remboursée ?', reponse: 'Oui, sur prescription médicale, les séances d orthophonie sont remboursées par l Assurance Maladie à hauteur de 60 % (acte AMO). Votre mutuelle peut prendre en charge le reste à charge.' },
      { question: 'Faut-il une ordonnance pour consulter ?', reponse: 'Oui, une prescription médicale est nécessaire pour bénéficier du remboursement. Elle est rédigée par votre médecin traitant, pédiatre ou spécialiste. Elle précise la pathologie et éventuellement le nombre de séances prescrites.' },
      { question: 'À quel âge peut-on consulter un orthophoniste ?', reponse: 'Dès les premiers mois de vie pour des difficultés de succion ou de déglutition chez le nourrisson. Pour les troubles du langage, une consultation peut être utile dès 18 mois si l enfant ne dit pas encore de mots. Il n y a pas de limite d âge maximale.' },
      { question: 'L orthophonie en visio est-elle efficace ?', reponse: 'Oui, de nombreuses prises en charge orthophoniques fonctionnent très bien en visio — notamment les bilans, le travail sur la dyslexie, les exercices de langage et la stimulation cognitive. Certains soins (troubles de la déglutition, exercices oro-faciaux) nécessitent le présentiel.' },
      { question: 'Peut-on consulter sans diagnostic préalable ?', reponse: 'Vous pouvez consulter directement un orthophoniste si vous avez des inquiétudes sur le langage de votre enfant ou sur vos propres capacités. L orthophoniste peut réaliser un bilan et si nécessaire orienter vers d autres spécialistes (neuropédiatre, psychologue).' },
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
            Qu est-ce que l {specialite.nom} ?
          </h2>
          {specialite.description_longue.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>{para}</p>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
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
            Quand consulter un orthophoniste ?
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
              Nos orthophonistes vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} orthophonistes
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
            Prêt à consulter un orthophoniste ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} orthophonistes vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les orthophonistes
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
