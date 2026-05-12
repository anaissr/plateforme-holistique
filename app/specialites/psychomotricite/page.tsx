import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Psychomotricité : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un psychomotricien vérifié pour accompagner les troubles du développement, de la coordination et de la régulation émotionnelle chez l enfant et l adulte.',
}

export default function PsychomotricitePage() {
  const specialite = {
    nom: 'Psychomotricité',
    emoji: '🤸',
    photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Explorer le lien entre le corps et le psychisme pour un développement harmonieux à tout âge.',
    description_longue: `La psychomotricité est une discipline thérapeutique qui explore les interactions entre les fonctions psychiques et motrices de l être humain. Le psychomotricien travaille sur le corps en mouvement pour agir sur les processus cognitifs, émotionnels et relationnels. Cette approche globale part du principe que le corps est le premier lieu d expression de notre vécu psychique.

En pédiatrie, la psychomotricité accompagne les enfants présentant des troubles du développement psychomoteur : retard de développement, dyspraxie, troubles de l attention, difficultés de coordination, troubles du schéma corporel ou de l orientation spatiale. Le thérapeute travaille à travers le jeu, le mouvement et des activités sensorimotrices adaptées à l âge et aux difficultés de l enfant.

Chez l adulte, la psychomotricité trouve aussi sa place dans la prise en charge des troubles anxieux, des troubles du comportement alimentaire, de la gestion du stress et de la rééducation neurologique. En gériatrie, elle intervient dans la prévention des chutes, la stimulation cognitive et le maintien de l autonomie. La psychomotricité est une thérapie par le corps qui ne nécessite pas de passer par la parole — ce qui en fait une approche précieuse pour de nombreux patients.`,
    pour_qui: [
      { label: 'Nourrissons et bébés', emoji: '👶' },
      { label: 'Enfants (3-16 ans)', emoji: '🧒' },
      { label: 'Adolescents', emoji: '🧑' },
      { label: 'Adultes', emoji: '👤' },
      { label: 'Personnes âgées', emoji: '👴' },
    ],
    problematiques: [
      { label: 'Troubles de la coordination (dyspraxie)', description: 'L enfant dyspraxique peine à automatiser les gestes du quotidien : écriture, découpage, habillage. La psychomotricité lui permet de mieux intégrer les séquences motrices et d améliorer sa confiance en lui.' },
      { label: 'TDA/H et troubles de l attention', description: 'Impulsivité, agitation, difficultés de concentration — la psychomotricité aide à canaliser l énergie, à développer le contrôle inhibiteur et à améliorer l organisation spatiale et temporelle.' },
      { label: 'Troubles du schéma corporel', description: 'Difficultés à percevoir et représenter son propre corps dans l espace — un travail sur la proprioception et la conscience corporelle permet de retrouver des repères solides.' },
      { label: 'Troubles toniques et posturaux', description: 'Hypotonie, hypertonie, mauvaise gestion du tonus musculaire — des exercices spécifiques aident à réguler le tonus et à améliorer la posture et la coordination globale.' },
      { label: 'Anxiété et gestion des émotions', description: 'La psychomotricité propose des techniques corporelles de relaxation et de régulation émotionnelle adaptées aux enfants et adultes qui peinent à gérer leur stress ou leurs émotions.' },
      { label: 'Prévention des chutes chez les seniors', description: 'Travail de l équilibre, de la proprioception et de la réactivité pour maintenir l autonomie et réduire le risque de chutes chez les personnes âgées.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan psychomoteur', description: 'La première séance comprend un bilan complet des compétences psychomotrices : motricité globale et fine, équilibre, coordination, schéma corporel, organisation spatiotemporelle. Ce bilan oriente le projet thérapeutique.' },
      { etape: '2', titre: 'Séances thérapeutiques individuelles', description: 'Chaque séance de 45 minutes utilise le jeu, le mouvement, le toucher thérapeutique et des activités sensorimotrices pour travailler les objectifs identifiés. L approche est toujours bienveillante et centrée sur les ressources de la personne.' },
      { etape: '3', titre: 'Accompagnement des parents et de l entourage', description: 'Le psychomotricien inclut régulièrement les parents dans le suivi des enfants, leur proposant des activités à pratiquer à la maison. Un lien avec l école peut aussi être établi pour favoriser la généralisation des acquis.' },
    ],
    praticiens: 118,
    satisfaction: 4.8,
    tarif_depuis: '50€',
    tarif_jusqua: '80€',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Camille Leroux',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 15e',
        note: '4.9',
        avis: 44,
        specialisation: 'Dyspraxie, TDA/H, enfants',
      },
      {
        nom: 'Nicolas Blanchard',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Marseille',
        note: '4.8',
        avis: 29,
        specialisation: 'Troubles du tonus, neurologie',
      },
      {
        nom: 'Audrey Simon',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Lille',
        note: '4.7',
        avis: 36,
        specialisation: 'Gériatrie, prévention des chutes',
      },
    ],
    faq: [
      { question: 'La psychomotricité est-elle remboursée ?', reponse: 'En libéral, la psychomotricité n est pas remboursée par l Assurance Maladie. Elle peut être prise en charge via la MDPH ou certaines mutuelles. En hôpital ou en CAMSP, elle est intégrée aux soins remboursés.' },
      { question: 'À partir de quel âge peut-on consulter ?', reponse: 'Dès la naissance pour certains troubles du tonus ou de la succion. La plupart des prises en charge démarrent entre 3 et 6 ans pour les troubles du développement. Il n y a pas d âge limite — adultes et seniors bénéficient aussi de la psychomotricité.' },
      { question: 'Combien de temps dure une prise en charge ?', reponse: 'Cela dépend des objectifs et de la nature des difficultés. Un accompagnement standard dure de 6 mois à 2 ans, avec des séances hebdomadaires ou bimensuelles. Des bilans réguliers permettent d évaluer les progrès.' },
      { question: 'Faut-il une ordonnance ?', reponse: 'Non, vous pouvez consulter directement un psychomotricien libéral sans ordonnance. Une prescription médicale peut cependant être demandée par certaines mutuelles pour un remboursement partiel.' },
      { question: 'Quelle est la différence avec un ergothérapeute ?', reponse: 'L ergothérapeute travaille principalement sur l autonomie dans les activités quotidiennes et l adaptation de l environnement. Le psychomotricien se concentre sur les liens entre psychisme et motricité, en travaillant sur la conscience corporelle, le tonus et les régulations émotionnelles.' },
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
          <span style={{ color: '#57534e' }}>📍 <strong style={{ color: '#6b21a8' }}>En cabinet uniquement</strong></span>
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
              { label: 'Tarif', value: `${specialite.tarif_depuis} — ${specialite.tarif_jusqua}`, emoji: '💶' },
              { label: 'Format', value: 'Cabinet', emoji: '🏥' },
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
            Quand consulter un psychomotricien ?
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
              Nos psychomotriciens vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} psychomotriciens
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
            Prêt à consulter un psychomotricien ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} psychomotriciens vérifiés vous attendent près de chez vous.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les psychomotriciens
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
