import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Acupuncture : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un acupuncteur vérifié pour soulager la douleur, gérer le stress, améliorer la fertilité et rééquilibrer votre énergie selon la médecine traditionnelle chinoise.',
}

export default function AcupuncturePage() {
  const specialite = {
    nom: 'Acupuncture',
    emoji: '🪡',
    photo: 'https://images.unsplash.com/photo-1598555763574-dca77e10427e?w=1400&h=500&fit=crop&q=75&fm=webp',
    accroche: 'Rééquilibrer l énergie vitale du corps par la stimulation de points précis pour soulager et prévenir.',
    description_longue: `L acupuncture est une pratique thérapeutique millénaire issue de la médecine traditionnelle chinoise (MTC). Elle repose sur la théorie des méridiens — des voies d énergie (le Qi) qui parcourent le corps. En stimulant des points précis le long de ces méridiens à l aide de fines aiguilles, l acupuncteur vise à rééquilibrer la circulation de l énergie et à restaurer l harmonie du corps et de l esprit.

Reconnue par l OMS comme médecine complémentaire efficace pour plus de 40 pathologies, l acupuncture a fait l objet de nombreuses études cliniques démontrant son efficacité dans la gestion de la douleur, la réduction du stress, l amélioration de la fertilité et le traitement de diverses pathologies chroniques. Les aiguilles utilisées sont stériles, à usage unique et leur insertion est généralement indolore.

En France, l acupuncture peut être pratiquée par des médecins, sages-femmes et dentistes ayant une formation spécifique, mais aussi par des praticiens non-médecins formés à la MTC. Un praticien qualifié réalise d abord un bilan énergétique complet avant toute séance. L acupuncture peut être utilisée seule ou en complément d un traitement médical conventionnel.`,
    pour_qui: [
      { label: 'Personnes douloureuses', emoji: '😣' },
      { label: 'Personnes stressées', emoji: '😰' },
      { label: 'Femmes en PMA', emoji: '🌱' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'Personnes en arrêt tabac', emoji: '🚭' },
    ],
    problematiques: [
      { label: 'Douleurs chroniques et aiguës', description: 'Mal de dos, migraines, arthrose, douleurs neuropathiques — l acupuncture libère des endorphines et module la perception de la douleur pour un soulagement souvent durable.' },
      { label: 'Stress, anxiété et troubles du sommeil', description: 'En régulant le système nerveux autonome, l acupuncture réduit l hyperactivation du système sympathique et favorise un état de relaxation profonde et un sommeil réparateur.' },
      { label: 'Fertilité et PMA', description: 'Amélioration de la qualité ovocytaire et spermatique, préparation à la FIV, soutien de l implantation embryonnaire — un accompagnement reconnu dans les protocoles de PMA.' },
      { label: 'Nausées et vomissements', description: 'Très efficace contre les nausées de grossesse et les nausées induites par la chimiothérapie. Le point P6 (Nei Guan) est l un des points les plus étudiés en acupuncture.' },
      { label: 'Troubles digestifs fonctionnels', description: 'Intestin irritable, constipation, diarrhée chronique, reflux gastro-œsophagien — la MTC considère ces troubles comme des déséquilibres énergétiques pouvant être traités efficacement.' },
      { label: 'Sevrage tabagique et addictions', description: 'L auriculothérapie (acupuncture de l oreille) est utilisée en soutien au sevrage tabagique et alcoolique pour réduire les envies et gérer l irritabilité liée au manque.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan énergétique initial', description: 'La première consultation dure environ 1h. L acupuncteur prend votre pouls selon la MTC (6 positions), examine votre langue, écoute vos symptômes et votre histoire. Il établit un diagnostic énergétique complet avant toute séance.' },
      { etape: '2', titre: 'La séance d acupuncture', description: 'Vous êtes allongé(e) confortablement. L acupuncteur pose 5 à 20 aiguilles sur les points choisis, qui restent en place 20 à 30 minutes. Vous ressentez parfois une légère sensation de chaleur, de picotement ou de lourdeur autour des aiguilles — c est le signe que le Qi est activé.' },
      { etape: '3', titre: 'Protocole de suivi', description: 'Pour une pathologie aiguë, 3 à 5 séances suffisent souvent. Pour une condition chronique, un programme de 6 à 10 séances est recommandé, puis des séances d entretien saisonnières pour maintenir l équilibre énergétique.' },
    ],
    praticiens: 178,
    satisfaction: 4.7,
    tarif_depuis: '60€',
    tarif_jusqua: '100€',
    duree_seance: '45 à 60 min',
    nb_seances: '4 à 8 séances',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Dr. Françoise Nguyen',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 5e',
        note: '4.9',
        avis: 67,
        specialisation: 'PMA, fertilité, douleurs chroniques',
      },
      {
        nom: 'Laurent Beaumont',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon 2e',
        note: '4.8',
        avis: 44,
        specialisation: 'MTC, acupuncture classique, migraines',
      },
      {
        nom: 'Mei Lin Zhao',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 13e',
        note: '4.9',
        avis: 58,
        specialisation: 'Médecine chinoise, stress, grossesse',
      },
    ],
    faq: [
      { question: 'L acupuncture est-elle douloureuse ?', reponse: 'Les aiguilles d acupuncture sont extrêmement fines (0,2 mm de diamètre), bien plus fines qu une aiguille de vaccination. La plupart des patients ne ressentent qu une légère sensation à l insertion. Certains points sont plus sensibles que d autres.' },
      { question: 'L acupuncture est-elle remboursée ?', reponse: 'L acupuncture pratiquée par un médecin acupuncteur est remboursée par l Assurance Maladie. Pratiquée par un praticien non-médecin, elle ne l est pas, mais certaines mutuelles la remboursent partiellement.' },
      { question: 'Y a-t-il des contre-indications ?', reponse: 'L acupuncture est contre-indiquée en cas de troubles de la coagulation ou de traitement anticoagulant (certains points), pendant le premier trimestre de grossesse pour certains points stimulants, et en cas d infection cutanée au niveau des points à piquer.' },
      { question: 'Combien de temps avant de voir des résultats ?', reponse: 'Certains patients ressentent un soulagement dès la première séance. Pour la plupart, les effets deviennent notables après 3 à 4 séances. Les conditions chroniques nécessitent généralement 6 à 10 séances pour un résultat durable.' },
      { question: 'Peut-on combiner acupuncture et médecine conventionnelle ?', reponse: 'Oui, l acupuncture est une médecine complémentaire qui s intègre parfaitement aux traitements conventionnels. Informez votre médecin de votre suivi en acupuncture pour une prise en charge globale optimale.' },
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
          <span style={{ color: '#57534e' }}>📍 <strong style={{ color: '#6b21a8' }}>En cabinet</strong></span>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Durée', value: specialite.duree_seance, emoji: '⏱' },
              { label: 'Nb séances', value: specialite.nb_seances, emoji: '📅' },
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
            Quand consulter un acupuncteur ?
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
              Nos acupuncteurs vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} acupuncteurs
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
            Prêt à consulter un acupuncteur ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} acupuncteurs vérifiés vous attendent près de chez vous.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les acupuncteurs
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
