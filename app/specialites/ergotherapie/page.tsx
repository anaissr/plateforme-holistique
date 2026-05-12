import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Ergothérapie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un ergothérapeute vérifié pour accompagner le handicap, développer l autonomie et adapter l environnement au quotidien. Enfants, adultes et seniors.',
}

export default function ErgotherapiePage() {
  const specialite = {
    nom: 'Ergothérapie',
    emoji: '🖐️',
    photo: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Retrouver l autonomie et adapter son environnement de vie grâce à une approche centrée sur l activité.',
    description_longue: `L ergothérapie est une profession de santé paramédicale qui vise à permettre à chaque personne de retrouver ou maintenir son autonomie dans les activités de la vie quotidienne, professionnelle et sociale. L ergothérapeute s intéresse à la personne dans son ensemble — ses capacités, ses difficultés, ses habitudes et son environnement.

Que ce soit après un accident, dans le cadre d un handicap moteur ou cognitif, ou lors d une perte d autonomie liée à l âge, l ergothérapeute propose des stratégies d adaptation, des exercices rééducatifs et des aménagements du quotidien. Il peut préconiser et adapter des aides techniques, conseiller sur l aménagement du domicile et former l entourage.

L ergothérapie intervient dans de nombreux contextes : pédiatrie (troubles du développement, dyspraxie, TDA/H), neurologie (AVC, traumatismes crâniens, maladies neurodégénératives), traumatologie (rééducation de la main, séquelles d accidents) et gériatrie (prévention des chutes, maintien à domicile). Chaque prise en charge est individualisée et orientée vers des objectifs concrets de vie.`,
    pour_qui: [
      { label: 'Enfants avec TDA/H ou dyspraxie', emoji: '🧒' },
      { label: 'Adultes en situation de handicap', emoji: '🧑' },
      { label: 'Personnes âgées', emoji: '👵' },
      { label: 'Patients post-AVC', emoji: '🏥' },
      { label: 'Personnes à mobilité réduite', emoji: '♿' },
    ],
    problematiques: [
      { label: 'Troubles du développement chez l enfant', description: 'Dyspraxie, TDA/H, troubles de l écriture — l ergothérapeute aide l enfant à développer les compétences motrices et cognitives nécessaires à sa vie quotidienne et scolaire.' },
      { label: 'Rééducation de la main', description: 'Après une fracture, une chirurgie tendineuse ou en cas de syndrome du canal carpien — retrouver finesse gestuelle, force et sensibilité pour les activités du quotidien.' },
      { label: 'Maintien à domicile des seniors', description: 'Évaluation du domicile, préconisation d aides techniques, prévention des chutes — permettre aux personnes âgées de rester chez elles en toute sécurité.' },
      { label: 'Séquelles neurologiques', description: 'Après un AVC, un traumatisme crânien ou en cas de sclérose en plaques — rééducation des fonctions cognitives et motrices, adaptation de l environnement.' },
      { label: 'Aménagement du poste de travail', description: 'Analyse ergonomique, prévention des troubles musculosquelettiques (TMS) liés à une mauvaise posture ou à des gestes répétitifs au travail.' },
      { label: 'Accompagnement en psychiatrie', description: 'Réhabilitation psychosociale, gestion des activités du quotidien, retour à l emploi pour les personnes souffrant de troubles psychiques.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan ergothérapique', description: 'L ergothérapeute évalue vos capacités fonctionnelles, vos activités quotidiennes et votre environnement. Ce bilan complet permet de définir des objectifs personnalisés et réalistes en collaboration avec vous et votre entourage.' },
      { etape: '2', titre: 'Programme de rééducation et d adaptation', description: 'Les séances combinent exercices de rééducation, apprentissage de stratégies compensatoires et adaptation de l environnement. L ergothérapeute peut aussi former les aidants aux bonnes pratiques.' },
      { etape: '3', titre: 'Suivi et ajustements', description: 'Des bilans réguliers permettent d évaluer les progrès et d ajuster le programme. L ergothérapeute vous accompagne jusqu à l atteinte de vos objectifs d autonomie et assure un suivi à long terme si nécessaire.' },
    ],
    praticiens: 142,
    satisfaction: 4.7,
    tarif_depuis: '50€',
    tarif_jusqua: '90€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Marie-Claire Dubois',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 38,
        specialisation: 'Pédiatrie, dyspraxie, TDA/H',
      },
      {
        nom: 'Julien Moreau',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Nantes',
        note: '4.8',
        avis: 27,
        specialisation: 'Rééducation de la main, neurologie',
      },
      {
        nom: 'Isabelle Renard',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Toulouse — aussi en visio',
        note: '4.8',
        avis: 33,
        specialisation: 'Gériatrie, maintien à domicile',
      },
    ],
    faq: [
      { question: 'L ergothérapie est-elle remboursée ?', reponse: 'L ergothérapie n est pas directement remboursée par l Assurance Maladie en libéral. Elle peut être prise en charge via la MDPH dans le cadre d un plan d accompagnement ou partiellement remboursée par certaines mutuelles.' },
      { question: 'Faut-il une ordonnance pour consulter un ergothérapeute ?', reponse: 'Non, vous pouvez consulter un ergothérapeute libéral sans prescription médicale. Cependant, une ordonnance peut être nécessaire pour certaines prises en charge institutionnelles ou mutualistes.' },
      { question: 'À quel âge peut-on commencer l ergothérapie ?', reponse: 'L ergothérapie s adresse à toutes les tranches d âge, de la petite enfance (dès 18 mois) aux personnes très âgées. Les objectifs et les techniques sont adaptés à chaque stade de vie.' },
      { question: 'L ergothérapeute se déplace-t-il à domicile ?', reponse: 'Oui, la visite à domicile est souvent indispensable en ergothérapie, notamment pour évaluer et aménager l environnement réel de vie. De nombreux ergothérapeutes proposent ces visites, parfois complétées par des séances en cabinet.' },
      { question: 'Quelle est la différence entre ergothérapie et kinésithérapie ?', reponse: 'La kinésithérapie se concentre sur la rééducation motrice et la réduction de la douleur. L ergothérapie vise l autonomie dans les activités quotidiennes et l adaptation de l environnement. Ces deux professions sont souvent complémentaires.' },
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
          <span style={{ color: '#57534e' }}>🖥 <strong style={{ color: '#6b21a8' }}>Visio disponible</strong></span>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-10">

        {/* DESCRIPTION */}
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
              { label: 'Format', value: 'Cabinet, domicile et visio', emoji: '🖥' },
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
            Quand consulter un ergothérapeute ?
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
              Nos ergothérapeutes vérifiés
            </h2>
            <div className="flex gap-3">
              <a
                href="/recherche"
                className="text-white px-5 py-2 rounded-xl text-sm font-medium"
                style={{ backgroundColor: '#6b21a8' }}
              >
                Voir les {specialite.praticiens} ergothérapeutes
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
            Prêt à consulter un ergothérapeute ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} ergothérapeutes vérifiés vous attendent — en cabinet, à domicile ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/recherche"
              className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Voir les ergothérapeutes
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
