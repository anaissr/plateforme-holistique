import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Diététique-Nutrition : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un diététicien-nutritionniste vérifié pour un rééquilibrage alimentaire personnalisé, la gestion du poids, les maladies chroniques et la nutrition sportive.',
  openGraph: {
    title: 'Diététique et nutrition : praticiens vérifiés',
    description: "Poids, alimentation, microbiote — trouvez un diététicien ou nutritionniste vérifié sur Holistia.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Diététique et nutrition ',
      },
    ],
  },
}

export default function DietetiqueNutritionPage() {
  const specialite = {
    nom: 'Diététique-Nutrition',
    emoji: '🥗',
    photo: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Une alimentation adaptée à vos besoins, votre mode de vie et votre santé pour un bien-être durable.',
    description_longue: `La diététique-nutrition est la science de l alimentation appliquée à la santé. Le diététicien-nutritionniste est un professionnel de santé diplômé d'État qui conseille sur l alimentation pour prévenir et traiter des problèmes de santé liés à la nutrition. Son rôle est d aider les personnes à adopter une alimentation saine, équilibrée et adaptée à leurs besoins spécifiques — sans régimes restrictifs ni privations durables.

Le diététicien-nutritionniste travaille à la fois sur le plan scientifique (besoins caloriques et nutritionnels, macronutriments et micronutriments) et comportemental (relation à l alimentation, gestion émotionnelle, habitudes alimentaires). Il prend en compte votre mode de vie, vos préférences, vos contraintes pratiques et votre histoire alimentaire pour construire avec vous un programme personnalisé et réaliste.

Les domaines d intervention sont très variés : prise en charge du surpoids et de l obésité, nutrition thérapeutique en cas de diabète, de maladies cardiovasculaires, de troubles digestifs ou de maladie cœliaque, alimentation végétarienne et végane, nutrition sportive, troubles alimentaires (en complément d un suivi psychologique), nutrition en pédiatrie, gériatrie et en oncologie. Le diététicien peut exercer en libéral, en hôpital ou dans les établissements de santé.`,
    pour_qui: [
      { label: 'Personnes en surpoids', emoji: '⚖️' },
      { label: 'Sportifs', emoji: '🏃' },
      { label: 'Diabétiques', emoji: '🩺' },
      { label: 'Végétariens et végans', emoji: '🌱' },
      { label: 'Femmes enceintes', emoji: '🤰' },
    ],
    problematiques: [
      { label: 'Rééquilibrage alimentaire et poids', description: 'Sans régime restrictif, le diététicien vous aide à construire une alimentation équilibrée adaptée à votre mode de vie pour atteindre et maintenir un poids de forme dans le long terme.' },
      { label: 'Diabète et maladies métaboliques', description: 'Contrôle de la glycémie par l alimentation, choix des glucides adaptés, index glycémique — une éducation nutritionnelle essentielle pour les personnes atteintes de diabète de type 1 ou 2.' },
      { label: 'Troubles digestifs et maladies du côlon', description: 'Syndrome du côlon irritable, maladie de Crohn, rectocolite, intolérance au lactose ou au gluten — élaboration d un régime adapté pour réduire les symptômes tout en maintenant l équilibre nutritionnel.' },
      { label: 'Nutrition sportive', description: 'Optimisation de la performance et de la récupération par l alimentation — timing nutritionnel, apports en protéines, glucides et lipides adaptés à l intensité et au type d entraînement.' },
      { label: 'Alimentation végétarienne et végane', description: 'Prévention des carences (vitamine B12, fer, zinc, oméga-3, calcium) et construction d une alimentation végétale équilibrée et savoureuse pour toute la famille.' },
      { label: 'Nutrition pédiatrique', description: 'Introduction des solides chez le bébé (diversification), alimentation de l enfant sélectif, prévention des carences et du surpoids infantile — un suivi bienveillant pour toute la famille.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan nutritionnel initial', description: 'La première consultation (45-60 min) comprend un recueil détaillé de vos habitudes alimentaires (journal alimentaire, fréquences de consommation), de votre mode de vie, de vos objectifs et de vos contraintes. Le diététicien analyse votre bilan biologique si disponible.' },
      { etape: '2', titre: 'Programme alimentaire personnalisé', description: 'Le diététicien vous remet un programme alimentaire sur mesure — pas de régimes strictement imposés, mais des conseils concrets et applicables qui s intègrent à votre mode de vie. Des recettes et menus pratiques vous sont souvent proposés.' },
      { etape: '3', titre: 'Suivi et ajustements réguliers', description: 'Des consultations de suivi (30-45 min) permettent d évaluer les progrès, d ajuster le programme, de résoudre les difficultés rencontrées et d approfondir l éducation nutritionnelle pour une autonomie alimentaire progressive.' },
    ],
    praticiens: 187,
    satisfaction: 4.8,
    tarif_depuis: '50€',
    tarif_jusqua: '90€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Julie Fontaine',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 61,
        specialisation: 'Rééquilibrage, troubles alimentaires',
      },
      {
        nom: 'Pierre Dumont',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 43,
        specialisation: 'Nutrition sportive, diabète',
      },
      {
        nom: 'Clara Renaud',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Montpellier — aussi en visio',
        note: '4.8',
        avis: 37,
        specialisation: 'Alimentation végane, grossesse, enfants',
      },
    ],
    faq: [
      { question: 'La consultation diététique est-elle remboursée ?', reponse: 'Les consultations diététiques ne sont pas remboursées par l Assurance Maladie en libéral pour la majorité des situations. Certaines mutuelles les remboursent partiellement. En cas de diabète, d obésité sévère ou de maladie chronique, des consultations peuvent être intégrées à un parcours de soin remboursé.' },
      { question: 'Quelle différence entre un diététicien et un nutritionniste ?', reponse: 'En France, "diététicien" est un titre protégé par un diplôme d État. "Nutritionniste" n est pas un titre réglementé — cela peut désigner un médecin spécialisé en nutrition ou toute personne se réclamant de la nutrition. Assurez-vous de consulter un professionnel qualifié.' },
      { question: 'Le diététicien va-t-il m imposer un régime strict ?', reponse: 'Un bon diététicien ne prescrit pas de régimes restrictifs et privants. L approche moderne de la diététique est centrée sur la flexibilité, le plaisir alimentaire et la construction d habitudes durables sans interdits alimentaires.' },
      { question: 'Peut-on consulter un diététicien en visio ?', reponse: 'Oui, les consultations en visio sont très efficaces en diététique. Le praticien peut analyser vos habitudes alimentaires, vous proposer des plans de repas et répondre à toutes vos questions par vidéoconférence.' },
      { question: 'Combien de temps avant de voir des résultats ?', reponse: 'Les premières améliorations (énergie, digestion, sommeil) se ressentent souvent dans les 2 à 4 premières semaines. Pour des objectifs de poids, un rythme de perte de 0,5 à 1 kg par semaine est sain et durable. Les résultats dépendent aussi de votre implication.' },
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
            Quand consulter un diététicien-nutritionniste ?
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
              Nos diététiciens-nutritionnistes vérifiés
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
            Prêt à consulter un diététicien-nutritionniste ?
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
