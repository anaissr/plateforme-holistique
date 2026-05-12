import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Thérapie de couple : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un thérapeute de couple vérifié pour améliorer votre communication, résoudre vos conflits et reconnecter avec votre partenaire. Consultation confidentielle.',
}

export default function TherapieDeCouplePage() {
  const specialite = {
    nom: 'Thérapie de couple',
    emoji: '💑',
    photo: 'https://plus.unsplash.com/premium_photo-1661277699407-5608da8dabd2?w=1400&h=500&fit=crop&q=75&fm=webp',
    accroche: 'Retrouver la connexion, la confiance et la communication pour construire ensemble une relation plus épanouissante.',
    description_longue: `La thérapie de couple est un espace thérapeutique sécurisé où deux partenaires peuvent explorer leurs difficultés relationnelles avec l aide d un professionnel formé à la psychologie des relations. Le thérapeute ne prend pas parti pour l un ou l autre, mais facilite un dialogue constructif et aide le couple à comprendre ses dynamiques dysfonctionnelles pour en sortir.

La thérapie de couple est utile à différents stades d une relation : en prévention pour renforcer les bases d un couple solide, en temps de crise (infidélité, perte de confiance, conflit majeur), lors de transitions importantes (arrivée d un enfant, retraite, déménagement) ou en préparation à une séparation consciente. Elle n est pas réservée aux couples en grande difficulté — même des couples qui vont bien peuvent en bénéficier pour approfondir leur connexion.

Les approches thérapeutiques les plus utilisées en thérapie de couple incluent la Thérapie Focalisée sur les Émotions (EFT couple de Susan Johnson), l approche systémique, les thérapies cognitivo-comportementales de couple (TCCC) et l approche Gottman (basée sur des décennies de recherche sur ce qui fait durer les couples). Chaque thérapeute développe une approche intégrative adaptée à chaque couple.`,
    pour_qui: [
      { label: 'Couples en crise', emoji: '💔' },
      { label: 'Jeunes couples', emoji: '💑' },
      { label: 'Couples avec enfants', emoji: '👨‍👩‍👧' },
      { label: 'Couples recomposés', emoji: '🏠' },
      { label: 'Avant ou après séparation', emoji: '🕊️' },
    ],
    problematiques: [
      { label: 'Communication conflictuelle', description: 'Disputes répétitives, escalades émotionnelles, sentiment de ne pas être entendu — le thérapeute aide à développer une communication non-violente et à sortir des patterns de réponse défensifs.' },
      { label: 'Perte d intimité et de connexion', description: 'Sentiment de vivre comme des colocataires, manque de complicité et d intimité émotionnelle ou physique — renouer le fil de la relation et retrouver ce qui unit le couple.' },
      { label: 'Infidélité et rupture de confiance', description: 'Traverser la crise de la trahison, comprendre ce qui s est passé, décider de l avenir de la relation avec lucidité — un travail difficile mais possible avec un accompagnement adapté.' },
      { label: 'Désaccords sur les grands choix de vie', description: 'Enfants, argent, lieu de vie, valeurs, projet de vie — ces sujets sont souvent source de conflits profonds. La thérapie offre un espace pour les aborder sereinement.' },
      { label: 'Impact d un événement traumatique', description: 'Deuil, maladie grave, perte d emploi, accident — les crises extérieures fragilisent souvent le couple. La thérapie aide à traverser l épreuve ensemble plutôt qu en s éloignant.' },
      { label: 'Préparation à la parentalité ou à la séparation', description: 'Construire ensemble une co-parentalité consciente avant ou après l arrivée d un enfant, ou préparer une séparation respectueuse et apaisée pour les deux partenaires et les enfants.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Première consultation et anamnèse', description: 'Le thérapeute accueille les deux partenaires, recueille leur histoire commune, leurs attentes et leurs points de blocage. Il peut aussi proposer une ou deux séances individuelles pour rencontrer chaque partenaire séparément avant de commencer le travail commun.' },
      { etape: '2', titre: 'Séances de thérapie conjointes', description: 'Les séances durent 60 à 90 minutes. Le thérapeute facilite les échanges, aide à exprimer les besoins et les émotions, propose des exercices de communication et des outils à pratiquer à la maison entre les séances.' },
      { etape: '3', titre: 'Bilan et perspectives', description: 'Après 6 à 8 séances, un bilan est réalisé pour évaluer les progrès et ajuster les objectifs. La thérapie peut se conclure lorsque le couple dispose des outils pour gérer ses difficultés de manière autonome, ou se poursuivre pour des objectifs plus profonds.' },
    ],
    praticiens: 112,
    satisfaction: 4.8,
    tarif_depuis: '80€',
    tarif_jusqua: '140€',
    duree_seance: '60 à 90 min',
    nb_seances: '6 à 15 séances',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Anne-Sophie Delorme',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 46,
        specialisation: 'EFT couple, infidélité, communication',
      },
      {
        nom: 'Frédéric Blanc',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Marseille — aussi en visio',
        note: '4.8',
        avis: 33,
        specialisation: 'Méthode Gottman, crise de couple',
      },
      {
        nom: 'Stéphanie Roux',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Bordeaux — aussi en visio',
        note: '4.9',
        avis: 51,
        specialisation: 'Divorce conscient, co-parentalité',
      },
    ],
    faq: [
      { question: 'La thérapie de couple est-elle remboursée ?', reponse: 'Non, la thérapie de couple n est généralement pas remboursée par l Assurance Maladie. Certaines mutuelles proposent un remboursement partiel des séances de psychothérapie ou de thérapie de couple.' },
      { question: 'Les deux partenaires doivent-ils être volontaires ?', reponse: 'Idéalement oui, mais même si un partenaire est réticent, l autre peut commencer seul. Souvent, voir l évolution positive de leur partenaire motive le second à rejoindre le processus. Un travail individuel peut aussi avoir des effets positifs sur le couple.' },
      { question: 'La thérapie de couple débouche-t-elle toujours sur une réconciliation ?', reponse: 'Non, et ce n est pas son seul objectif. Pour certains couples, la thérapie aide à se séparer de façon apaisée et respectueuse, notamment quand des enfants sont concernés. L objectif est le bien-être de chacun, quelle que soit l issue.' },
      { question: 'Faut-il être en crise grave pour consulter ?', reponse: 'Non, de nombreux couples consultent en prévention ou pour approfondir leur relation. La thérapie de couple est aussi utile pour les couples qui vont bien mais souhaitent renforcer leurs bases relationnelles.' },
      { question: 'Les séances en visio fonctionnent-elles pour deux personnes ?', reponse: 'Oui, les séances en visio peuvent se faire avec les deux partenaires depuis le même endroit ou depuis deux endroits différents (utile en cas de séparation géographique temporaire). Le thérapeute gère techniquement ce format.' },
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
            Qu est-ce que la {specialite.nom} ?
          </h2>
          {specialite.description_longue.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>{para}</p>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-6">
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
            Quand consulter un thérapeute de couple ?
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
              Nos thérapeutes de couple vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} thérapeutes
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
            Prêt à consulter un thérapeute de couple ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} thérapeutes vérifiés vous attendent — en cabinet ou en visio, en toute confidentialité.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les thérapeutes
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
