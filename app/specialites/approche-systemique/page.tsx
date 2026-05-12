import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Approche systémique : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un thérapeute systémique vérifié pour accompagner conflits familiaux, difficultés relationnelles et changements de vie grâce à une thérapie brève et efficace.',
}

export default function ApprocheSystemiquePage() {
  const specialite = {
    nom: 'Approche systémique',
    emoji: '🔗',
    photo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Comprendre les interactions et les dynamiques relationnelles pour transformer positivement vos liens et votre vie.',
    description_longue: `L approche systémique est une thérapie qui considère l individu non pas isolément, mais dans son contexte relationnel et familial. Plutôt que de chercher les causes dans le passé d un seul individu, le thérapeute systémique s intéresse aux patterns d interaction, aux rôles joués au sein des systèmes (famille, couple, travail), et aux répétitions transgénérationnelles qui influencent les comportements présents.

Issue des travaux de l École de Palo Alto (Gregory Bateson, Paul Watzlawick) et des thérapies familiales structurales (Salvador Minuchin), l approche systémique est une thérapie résolument orientée vers le changement. Elle se distingue par sa vision circulaire de la causalité — ce qui se passe n est pas la faute d une seule personne, mais résulte d interactions mutuelles entre tous les membres d un système.

La thérapie brève systémique (inspirée de la thérapie de Palo Alto) est particulièrement réputée pour sa capacité à provoquer des changements concrets en peu de séances — souvent 5 à 10 consultations suffisent. Elle utilise des recadrages, des injonctions paradoxales et des tâches entre les séances pour interrompre les cercles vicieux relationnels. L approche systémique peut se pratiquer en individuel, en couple, en famille ou avec des équipes professionnelles.`,
    pour_qui: [
      { label: 'Familles en difficulté', emoji: '👨‍👩‍👧' },
      { label: 'Couples en crise', emoji: '💑' },
      { label: 'Personnes en conflit', emoji: '😤' },
      { label: 'Adolescents et parents', emoji: '🧑' },
      { label: 'Professionnels en burn-out', emoji: '💼' },
    ],
    problematiques: [
      { label: 'Conflits familiaux répétitifs', description: 'Tensions récurrentes entre parents et enfants, rivalités fraternelles, conflits multigénérationnels — l approche systémique identifie les patterns relationnels et aide à les transformer.' },
      { label: 'Difficultés de communication', description: 'Incompréhensions chroniques, murs entre proches, communication paradoxale ou dysfonctionnelle — le thérapeute aide à développer de nouvelles façons d interagir.' },
      { label: 'Transitions et crises familiales', description: 'Séparation, recomposition familiale, deuil, maladie grave d un membre — l approche systémique aide la famille à traverser ces périodes de crise et à se réorganiser.' },
      { label: 'Symptôme d un enfant dans le système', description: 'Troubles du comportement, refus scolaire, symptômes somatiques chez l enfant peuvent être l expression d un déséquilibre dans le système familial — l approche systémique traite la famille comme un tout.' },
      { label: 'Burn-out et épuisement professionnel', description: 'L approche systémique dans le cadre professionnel explore les interactions dysfonctionnelles dans l équipe ou avec la hiérarchie pour identifier les leviers de changement.' },
      { label: 'Répétitions de schémas relationnels', description: 'Tendance à reproduire les mêmes types de relations amoureuses ou professionnelles problématiques — explorer les loyautés familiales et les mythes transmis pour s en libérer.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Consultation initiale et cartographie du système', description: 'Le thérapeute explore avec vous (et éventuellement d autres membres du système) les relations, les rôles, les règles implicites et les répétitions du système. Il utilise des outils comme le génogramme pour visualiser les dynamiques familiales multigénérationnelles.' },
      { etape: '2', titre: 'Intervention et recadrages', description: 'Le thérapeute propose des recadrages (nouvelles façons de voir une situation), des métaphores, des questions circulaires et parfois des tâches à réaliser entre les séances pour interrompre les cercles vicieux et introduire du changement.' },
      { etape: '3', titre: 'Consolidation des changements', description: 'L objectif est d amener des changements durables dans les interactions. Le thérapeute s assure que les nouveaux patterns relationnels s installent et accompagne la consolidation des acquis jusqu à ce que le système trouve un nouvel équilibre satisfaisant.' },
    ],
    praticiens: 96,
    satisfaction: 4.8,
    tarif_depuis: '70€',
    tarif_jusqua: '120€',
    duree_seance: '60 à 90 min',
    nb_seances: '6 à 12 séances',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Christine Bourgeois',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 34,
        specialisation: 'Thérapie familiale, adolescents',
      },
      {
        nom: 'Alain Faure',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Bordeaux — aussi en visio',
        note: '4.8',
        avis: 28,
        specialisation: 'Thérapie brève, Palo Alto, conflits',
      },
      {
        nom: 'Laure Vignon',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 32,
        specialisation: 'Couples, recomposition familiale, deuil',
      },
    ],
    faq: [
      { question: 'Toute la famille doit-elle venir en consultation ?', reponse: 'Pas nécessairement. L approche systémique peut se pratiquer en individuel — même seul, vous pouvez transformer le système dont vous faites partie en changeant votre façon d y interagir. Les séances de famille ou de couple sont une option, pas une obligation.' },
      { question: 'L approche systémique est-elle remboursée ?', reponse: 'Non, elle n est pas remboursée par l Assurance Maladie en libéral. Certaines mutuelles proposent un remboursement partiel des consultations de psychothérapie.' },
      { question: 'En quoi diffère-t-elle d une psychanalyse ?', reponse: 'La psychanalyse explore le passé individuel et l inconscient. L approche systémique se concentre sur le présent, les interactions et cherche des changements concrets rapidement. Elle est généralement plus courte et orientée solution.' },
      { question: 'Peut-on consulter en visio en approche systémique ?', reponse: 'Oui, les consultations en visio fonctionnent très bien, y compris pour des séances de famille (chaque membre peut être dans son lieu). Certains thérapeutes mixent présentiel et visio selon les besoins.' },
      { question: 'Combien de séances sont nécessaires ?', reponse: 'La thérapie brève systémique vise l efficacité en peu de séances — souvent 5 à 10 consultations suffisent pour des problématiques ciblées. Pour des situations plus complexes ou multigénérationnelles, un suivi plus long peut être proposé.' },
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
            Quand consulter en approche systémique ?
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
              Nos thérapeutes systémiques vérifiés
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
            Prêt à commencer une thérapie systémique ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} thérapeutes vérifiés vous attendent — en cabinet ou en visio.
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
