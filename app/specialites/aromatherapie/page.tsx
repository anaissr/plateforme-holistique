import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Aromathérapie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un aromathérapeute vérifié pour utiliser les huiles essentielles en toute sécurité. Stress, sommeil, immunité, douleurs — une approche naturelle et efficace.',
}

export default function AromatherapiePage() {
  const specialite = {
    nom: 'Aromathérapie',
    emoji: '🌸',
    photo: 'https://images.pexels.com/photos/6694187/pexels-photo-6694187.jpeg?auto=compress&cs=tinysrgb&w=1400',
    accroche: 'Exploiter les propriétés thérapeutiques des huiles essentielles pour prendre soin de votre santé naturellement.',
    description_longue: `L aromathérapie est l utilisation thérapeutique des huiles essentielles (HE) — des extraits concentrés de plantes aromatiques obtenus par distillation ou expression à froid. Chaque huile essentielle contient des centaines de molécules actives (terpènes, alcools, cétones, esters...) qui agissent sur le système nerveux, l immunité, le système hormonal et les agents infectieux.

L aromathérapie moderne, distingue l aromathérapie familiale (usage préventif et des troubles bénins), l aromathérapie scientifique (basée sur des données biochimiques et des études cliniques) et l aromathérapie médicale, pratiquée par des médecins formés. Un aromathérapeute qualifié connaît la composition biochimique des huiles essentielles, leurs propriétés, leurs synergies possibles et leurs précautions d emploi — car certaines HE peuvent être irritantes, photosensibilisantes ou contre-indiquées pendant la grossesse ou en cas de certaines pathologies.

Les voies d utilisation sont multiples : olfactive (diffusion, inhalation), cutanée (diluée dans une huile végétale pour massage ou application locale), ou ingestion (avec précautions et avis professionnel). L aromathérapie agit rapidement et peut être très efficace pour les troubles courants : stress, insomnie, infections hivernales, douleurs musculaires, troubles digestifs, maux de tête. Un accompagnement professionnel permet d utiliser ces huiles en toute sécurité et d en maximiser les bénéfices.`,
    pour_qui: [
      { label: 'Personnes stressées', emoji: '😰' },
      { label: 'Troubles du sommeil', emoji: '😴' },
      { label: 'Adultes et seniors', emoji: '🧑' },
      { label: 'Sportifs', emoji: '🏃' },
      { label: 'Familles (usage sécurisé)', emoji: '👨‍👩‍👧' },
    ],
    problematiques: [
      { label: 'Stress et anxiété', description: 'Lavande vraie, petit grain bigarade, bergamote, mandarine — des huiles essentielles à effet anxiolytique prouvé qui agissent sur le système nerveux central par voie olfactive.' },
      { label: 'Troubles du sommeil', description: 'Diffusion de lavande, camomille romaine ou mandarine le soir, ou application diluée sur les poignets et la plante des pieds pour favoriser l endormissement et améliorer la qualité du sommeil.' },
      { label: 'Infections hivernales', description: 'Ravintsara, tea tree (arbre à thé), eucalyptus radié, thym — des HE aux propriétés antivirales et immunostimulantes pour prévenir et traiter les infections ORL saisonnières.' },
      { label: 'Douleurs musculaires et articulaires', description: 'Gaulthérie couchée, helichryse italienne, poivre noir, gingembre — en massage dilué pour soulager les courbatures, les douleurs articulaires et les contractures musculaires.' },
      { label: 'Troubles digestifs', description: 'Menthe poivrée (nausées, maux de tête), estragon (spasmes digestifs), carvi (ballonnements) — des HE efficaces pour les troubles fonctionnels digestifs courants.' },
      { label: 'Soin de la peau', description: 'Hélichryse, rose de Damas, carotte, lavande — des huiles essentielles aux propriétés régénérantes, anti-âge et cicatrisantes pour le soin du visage et du corps en usage cosmétique.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Consultation et anamnèse', description: 'L aromathérapeute recueille votre histoire de santé, vos traitements en cours, vos éventuelles allergies et vos objectifs. Cette étape est essentielle pour identifier les huiles essentielles adaptées et écarter les contre-indications.' },
      { etape: '2', titre: 'Prescription aromatique personnalisée', description: 'Le praticien vous propose un protocole sur mesure : quelles huiles essentielles utiliser, sous quelle forme (diffusion, massage, inhalation, voie interne si médicalement indiqué), à quelle fréquence et pour quelle durée.' },
      { etape: '3', titre: 'Formation et autonomisation', description: 'L aromathérapeute vous transmet les règles d utilisation sécurisée des HE, les précautions essentielles et vous forme à créer vos propres synergies. L objectif est que vous puissiez utiliser les huiles essentielles de manière autonome et sécurisée au quotidien.' },
    ],
    praticiens: 127,
    satisfaction: 4.7,
    tarif_depuis: '50€',
    tarif_jusqua: '80€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Catherine Bonnet',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 56,
        specialisation: 'Aromathérapie scientifique, stress, immunité',
      },
      {
        nom: 'Olivier Mallet',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Angers — aussi en visio',
        note: '4.7',
        avis: 33,
        specialisation: 'Aromathérapie médicale, infections, sport',
      },
      {
        nom: 'Isabelle Gautier',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Nice — aussi en visio',
        note: '4.8',
        avis: 41,
        specialisation: 'Soin de la peau, cosmétique naturelle',
      },
    ],
    faq: [
      { question: 'L aromathérapie est-elle remboursée ?', reponse: 'Non, les consultations d aromathérapie ne sont pas remboursées par l Assurance Maladie. Certaines mutuelles proposant des remboursements pour les médecines douces peuvent couvrir partiellement les séances.' },
      { question: 'Les huiles essentielles sont-elles dangereuses ?', reponse: 'Les HE sont des substances très concentrées et actives qui nécessitent d être utilisées avec précaution. Ne jamais appliquer pures sur la peau (sauf exceptions), tenir hors de portée des enfants, vérifier les contre-indications pendant la grossesse. Un professionnel vous guidera en toute sécurité.' },
      { question: 'Peut-on utiliser les huiles essentielles pendant la grossesse ?', reponse: 'Certaines HE sont contre-indiquées pendant toute la grossesse ou au premier trimestre. D autres sont utilisables avec prudence à partir du 2e trimestre. Ne jamais utiliser les HE pendant la grossesse sans avis d un professionnel formé.' },
      { question: 'Comment choisir la qualité de ses huiles essentielles ?', reponse: 'Privilégiez les HE certifiées biologiques, HEBBD (Huile Essentielle Botaniquement et Biochimiquement Définie) ou équivalent, avec le nom botanique latin sur l étiquette. Évitez les HE trop peu chères qui peuvent être de mauvaise qualité ou adultérées.' },
      { question: 'L aromathérapie fonctionne-t-elle en visio ?', reponse: 'Oui, les consultations d aromathérapie se déroulent très bien en visio. Le praticien peut vous prescrire des protocoles que vous vous procurez ensuite dans une pharmacie ou boutique spécialisée. Les conseils d utilisation sont aussi bien transmis à distance.' },
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
            Quand consulter un aromathérapeute ?
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
              Nos aromathérapeutes vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} aromathérapeutes
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
            Prêt à découvrir l aromathérapie ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} aromathérapeutes vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les aromathérapeutes
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
