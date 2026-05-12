import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Podologie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un podologue vérifié pour vos pieds, la fabrication de semelles orthopédiques, le soin des plaies ou le suivi podologique diabétique.',
}

export default function PodologiePage() {
  const specialite = {
    nom: 'Podologie',
    emoji: '🦶',
    photo: 'https://images.pexels.com/photos/6340559/pexels-photo-6340559.jpeg?auto=compress&cs=tinysrgb&w=1400',
    accroche: 'Prenez soin de vos pieds et retrouvez confort et mobilité grâce à un suivi podologique personnalisé.',
    description_longue: `La podologie est une discipline paramédicale consacrée à la santé des pieds. Le podologue, professionnel de santé diplômé d'État, prend en charge les affections médicales et biomécani­ques du pied : cors, durillons, ongles incarnés, verrues plantaires, hallux valgus, pieds plats ou creux. Il réalise aussi des soins de pédicurie médicale pour les patients à risque.

L une des missions essentielles du podologue est la réalisation de semelles orthopédiques sur mesure. Ces dispositifs médicaux corrigent les défauts d appui, soulagent les douleurs du pied, du genou et du dos liées à un mauvais alignement podal. Chaque semelle est fabriquée après une analyse complète de la marche (podoscopie) et de la morphologie du pied.

Le podologue joue un rôle crucial dans le suivi des patients diabétiques, pour qui les plaies et infections du pied peuvent avoir des conséquences graves. Il participe également à la prise en charge des sportifs (traumatismes du pied, prévention des blessures de course) et des personnes âgées (prévention des chutes par un meilleur appui podal).`,
    pour_qui: [
      { label: 'Sportifs', emoji: '🏃' },
      { label: 'Personnes diabétiques', emoji: '🩺' },
      { label: 'Personnes âgées', emoji: '👴' },
      { label: 'Enfants', emoji: '🧒' },
      { label: 'Travailleurs debout', emoji: '💼' },
    ],
    problematiques: [
      { label: 'Douleurs plantaires et talonnières', description: 'Fasciite plantaire, épine calcanéenne, métatarsalgies — le podologue identifie la cause biomécanique et soulage la douleur grâce à des semelles et des soins adaptés.' },
      { label: 'Ongles incarnés et mycoses', description: 'Traitement des ongles incarnés douloureux et des infections fongiques (mycoses) de l ongle et de la peau, avec des techniques douces et efficaces.' },
      { label: 'Cors, durillons et verrues plantaires', description: 'Élimination des hyperkératoses douloureuses et traitement des verrues plantaires récalcitrantes avec des protocoles adaptés à chaque patient.' },
      { label: 'Pieds diabétiques', description: 'Surveillance et soins préventifs des pieds chez les patients diabétiques pour éviter l ulcération et les infections. Un suivi régulier est essentiel pour préserver l intégrité du pied.' },
      { label: 'Semelles orthopédiques sur mesure', description: 'Analyse de la marche et fabrication de semelles personnalisées pour corriger les déséquilibres posturaux et soulager les douleurs du pied, du genou et du bas du dos.' },
      { label: 'Troubles de la marche chez l enfant', description: 'Pieds plats, marche en rotation interne ou externe, talons valgus — une prise en charge précoce permet de corriger les défauts d appui et de prévenir les complications futures.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Bilan podologique et analyse de la marche', description: 'Le podologue examine vos pieds, analyse votre marche sur podoscope et évalue votre posture globale. Ce bilan complet permet d identifier les déséquilibres et de définir un plan de traitement.' },
      { etape: '2', titre: 'Soins podologiques et/ou confection de semelles', description: 'Selon les besoins, le podologue réalise des soins directs (cors, ongles, verrues) et/ou prend les empreintes de vos pieds pour confectionner des semelles orthopédiques sur mesure.' },
      { etape: '3', titre: 'Suivi et ajustements', description: 'Un suivi régulier (1 à 4 fois par an selon les besoins) permet d évaluer l efficacité des traitements, d ajuster les semelles et de maintenir la santé de vos pieds sur le long terme.' },
    ],
    praticiens: 197,
    satisfaction: 4.7,
    tarif_depuis: '40€',
    tarif_jusqua: '80€',
    duree_seance: '30 à 45 min',
    nb_seances: '1 à 4 séances',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Céline Dupont',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 8e',
        note: '4.9',
        avis: 51,
        specialisation: 'Semelles sur mesure, sportifs',
      },
      {
        nom: 'Marc Lefevre',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon 3e',
        note: '4.8',
        avis: 37,
        specialisation: 'Pied diabétique, pédicurie médicale',
      },
      {
        nom: 'Nathalie Petit',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Rennes',
        note: '4.8',
        avis: 28,
        specialisation: 'Pédiatrie, pieds plats, scoliose',
      },
    ],
    faq: [
      { question: 'La podologie est-elle remboursée ?', reponse: 'Les soins de pédicurie médicale sont remboursés pour les patients diabétiques (bilan podologique et soins annuels). Les semelles orthopédiques sont partiellement remboursées sur prescription médicale. La pédicurie esthétique n est pas remboursée.' },
      { question: 'Faut-il une ordonnance pour consulter un podologue ?', reponse: 'Non, vous pouvez consulter un podologue directement sans prescription. Mais pour que les semelles orthopédiques soient remboursées, une ordonnance de votre médecin est nécessaire.' },
      { question: 'À quelle fréquence consulter un podologue ?', reponse: 'Pour une personne en bonne santé, un bilan annuel est conseillé. Les sportifs consulteront 2 à 3 fois par an. Les personnes diabétiques doivent avoir un suivi podologique au minimum une fois par an, et idéalement tous les 3 à 6 mois.' },
      { question: 'Les semelles orthopédiques sont-elles efficaces ?', reponse: 'Oui, les semelles orthopédiques sur mesure sont très efficaces pour corriger les troubles de la statique du pied et soulager de nombreuses douleurs. Elles sont adaptées à la morphologie unique de chaque pied et doivent être renouvelées tous les 1 à 2 ans.' },
      { question: 'Le podologue peut-il traiter le mal de dos ?', reponse: 'Indirectement oui. De nombreux maux de dos et douleurs de genoux ont une origine podale. Des semelles orthopédiques corrigeant un mauvais appui peuvent significativement améliorer des douleurs dorsales ou articulaires.' },
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
            Quand consulter un podologue ?
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
            Comment se déroule une consultation ?
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
              Nos podologues vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} podologues
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
            Prêt à consulter un podologue ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} podologues vérifiés vous attendent près de chez vous.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les podologues
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
