import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Reiki : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un praticien Reiki vérifié pour rééquilibrer votre énergie vitale, réduire le stress et soutenir votre bien-être global. Séances en cabinet ou en visio.',
  openGraph: {
    title: 'Reiki : praticiens vérifiés et consultation en ligne',
    description: "Énergie, bien-être, équilibre — trouvez un praticien reiki certifié disponible en cabinet ou en visio.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Reiki ',
      },
    ],
  },
}

export default function ReikiPage() {
  const specialite = {
    nom: 'Reiki',
    emoji: '🙌',
    photo: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Rééquilibrer l énergie vitale du corps et de l esprit pour retrouver sérénité, vitalité et harmonie intérieure.',
    description_longue: `Le Reiki est une pratique de soin énergétique d origine japonaise, développée au début du XXe siècle par Mikao Usui. Le mot Reiki signifie "énergie vitale universelle" (Rei = universel, Ki = énergie vitale). La pratique repose sur le principe que le praticien peut canaliser et transmettre cette énergie au receveur par l imposition des mains, favorisant ainsi l autoguérison du corps et l équilibre énergétique.

Lors d une séance, le praticien place ses mains sur ou au-dessus de différentes zones du corps du receveur, en suivant des positions spécifiques correspondant aux principaux centres énergétiques (chakras) et organes. La plupart des personnes décrivent une sensation de chaleur, de fourmillements ou de profonde détente. Le Reiki ne se substitue pas à la médecine conventionnelle mais constitue un soutien complémentaire précieux.

Le Reiki est utilisé dans de nombreux contextes : accompagnement du stress et de l anxiété, soutien pendant un traitement médical (chimiothérapie, post-opératoire), aide à la gestion de la douleur chronique, accompagnement du deuil ou de transitions de vie difficiles. De nombreux hôpitaux et hospices intègrent désormais le Reiki dans leurs soins de support. Des études préliminaires suggèrent des effets positifs sur la réduction du stress et de l anxiété, l amélioration du sommeil et la qualité de vie globale.`,
    pour_qui: [
      { label: 'Personnes stressées', emoji: '😰' },
      { label: 'Patients en traitement médical', emoji: '🏥' },
      { label: 'Personnes en deuil', emoji: '🕊️' },
      { label: 'Quête de sens et spiritualité', emoji: '✨' },
      { label: 'Tout public', emoji: '🧘' },
    ],
    problematiques: [
      { label: 'Stress, anxiété et épuisement', description: 'Le Reiki active le système nerveux parasympathique (état de repos et digestion), induisant une relaxation profonde qui contrebalance les effets du stress chronique sur le corps et l esprit.' },
      { label: 'Accompagnement des traitements médicaux', description: 'Soutien pendant une chimiothérapie, une radiothérapie ou une récupération post-chirurgicale — réduction des effets secondaires, gestion de la douleur et amélioration du bien-être général.' },
      { label: 'Troubles du sommeil', description: 'La relaxation profonde induite par le Reiki régularise les cycles circadiens et favorise un sommeil plus profond et plus réparateur.' },
      { label: 'Douleurs chroniques', description: 'En rééquilibrant l énergie autour des zones douloureuses, le Reiki peut contribuer à réduire l intensité de certaines douleurs chroniques et améliorer la qualité de vie.' },
      { label: 'Accompagnement du deuil et des transitions', description: 'Le Reiki offre un espace de douceur et de soutien énergétique pendant les périodes de perte, de rupture ou de changements de vie importants.' },
      { label: 'Bien-être général et prévention', description: 'En entretien régulier, le Reiki maintient l équilibre énergétique, renforce la vitalité et peut contribuer à prévenir l accumulation de tensions et de blocages énergétiques.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Accueil et mise en intention', description: 'Le praticien vous accueille et s enquiert de votre état du moment, de vos éventuelles douleurs ou tensions. Vous vous allongez habillé(e) sur une table de soin dans un environnement calme et apaisant. Le praticien établit l intention de soin.' },
      { etape: '2', titre: 'Imposition des mains', description: 'Pendant 45 à 60 minutes, le praticien pose doucement ses mains sur ou légèrement au-dessus de différentes parties de votre corps, en suivant un protocole de positions prédéfinies. Vous pouvez ressentir chaleur, fourmillements, picotements ou profonde détente.' },
      { etape: '3', titre: 'Clôture et intégration', description: 'La séance se termine par un temps d intégration. Le praticien partage ses observations énergétiques et répond à vos questions. Il est conseillé de bien s hydrater après une séance et de prendre le temps de laisser le corps intégrer les changements.' },
    ],
    praticiens: 147,
    satisfaction: 4.7,
    tarif_depuis: '50€',
    tarif_jusqua: '90€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Pascale Germain',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 62,
        specialisation: 'Reiki Usui, accompagnement cancer',
      },
      {
        nom: 'Yann Lefebvre',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Nantes',
        note: '4.7',
        avis: 38,
        specialisation: 'Reiki Tibétain, deuil, transitions',
      },
      {
        nom: 'Florence Barbier',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 44,
        specialisation: 'Stress, chakras, équilibre énergétique',
      },
    ],
    faq: [
      { question: 'Le Reiki est-il remboursé ?', reponse: 'Non, le Reiki n est pas remboursé par l Assurance Maladie. Certaines mutuelles proposant des remboursements pour les médecines douces peuvent couvrir partiellement les séances.' },
      { question: 'Doit-on croire au Reiki pour que cela fonctionne ?', reponse: 'Non, vous n avez pas besoin de croire à l énergie ou au Reiki. La relaxation profonde que procure la séance est bénéfique en elle-même, indépendamment de votre système de croyances. De nombreuses personnes sceptiques constatent des effets positifs.' },
      { question: 'Le Reiki à distance fonctionne-t-il ?', reponse: 'Selon les praticiens de Reiki, l énergie peut être transmise à distance. Les séances en visio ou à distance sont proposées par de nombreux praticiens. Si vous êtes sceptique sur ce point, optez pour une séance en présentiel pour commencer.' },
      { question: 'Le Reiki est-il compatible avec un traitement médical ?', reponse: 'Oui, le Reiki est une approche complémentaire non-invasive et sans effets secondaires qui peut accompagner n importe quel traitement médical. Informez votre médecin de votre pratique.' },
      { question: 'Combien de séances sont recommandées ?', reponse: 'Pour une première expérience, 3 séances rapprochées (une par semaine) permettent d évaluer les effets. Pour une problématique spécifique, 4 à 6 séances sont généralement recommandées. Un entretien mensuel peut être bénéfique en prévention.' },
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
            Quand consulter un praticien Reiki ?
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
            Comment se déroule une séance de Reiki ?
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
              Nos praticiens Reiki vérifiés
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
            Prêt à découvrir le Reiki ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} praticiens vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les praticiens Reiki
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
