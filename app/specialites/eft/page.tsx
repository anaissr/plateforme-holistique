import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'EFT : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un praticien EFT (Emotional Freedom Techniques) vérifié pour libérer stress, phobies, émotions bloquées et douleurs grâce aux tapotements.',
}

export default function EftPage() {
  const specialite = {
    nom: 'EFT',
    emoji: '🫰',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Libérer les émotions bloquées et soulager stress, phobies et douleurs grâce aux tapotements thérapeutiques.',
    description_longue: `L EFT (Emotional Freedom Techniques, ou Techniques de Libération Émotionnelle) est une approche thérapeutique qui combine la psychologie cognitive et les principes de l acupuncture. Elle consiste à tapoter doucement des points d acupression spécifiques du visage et du corps tout en se concentrant sur une problématique émotionnelle ou physique. Cette stimulation simultanée du système nerveux et de la mémoire émotionnelle permet de « désamorcer » la charge émotionnelle associée à une situation, une pensée ou une sensation.

Développée dans les années 1990 par Gary Craig sur la base des travaux de Roger Callahan (Thought Field Therapy), l EFT est aujourd hui utilisée par des milliers de thérapeutes dans le monde. De nombreuses études cliniques ont démontré son efficacité sur la réduction du stress et du cortisol, le traitement des phobies, l anxiété, le PTSD et même la gestion de certaines douleurs chroniques. L EFT clinique (ou EFT-T pour Tapping) se distingue de l EFT de base par son protocole structuré et son application thérapeutique supervisée.

L un des grands avantages de l EFT est qu une fois apprises, les techniques peuvent être pratiquées seul en auto-thérapie au quotidien. Le praticien vous enseigne les points de tapotement et le protocole pour que vous puissiez gérer vous-même vos émotions difficiles en dehors des séances. C est une approche rapidement accessible et applicable dans la vie quotidienne.`,
    pour_qui: [
      { label: 'Personnes stressées', emoji: '😰' },
      { label: 'Phobies et peurs', emoji: '😨' },
      { label: 'Douleurs chroniques', emoji: '😣' },
      { label: 'Gestion des émotions', emoji: '❤️' },
      { label: 'Confiance en soi', emoji: '💪' },
    ],
    problematiques: [
      { label: 'Stress et anxiété', description: 'L EFT réduit le niveau de cortisol (hormone du stress) de manière mesurable. Des études montrent une réduction de 24 % du cortisol salivaire après une seule séance d EFT clinique.' },
      { label: 'Phobies et peurs spécifiques', description: 'Phobie des araignées, des hauteurs, de la foule, des injections — l EFT désensibilise la réponse de peur en neutralisant la charge émotionnelle du stimulus phobique.' },
      { label: 'Traumatismes et PTSD', description: 'Protocoles spécifiques pour traiter les souvenirs traumatiques sans nécessiter leur récit détaillé. L EFT est recommandée comme approche complémentaire dans la prise en charge du PTSD.' },
      { label: 'Douleurs chroniques', description: 'En réduisant la composante émotionnelle et le stress qui amplifient la perception de la douleur, l EFT peut diminuer significativement l intensité de douleurs chroniques résistantes.' },
      { label: 'Alimentation émotionnelle et craving', description: 'L EFT sur les envies alimentaires (food cravings) réduit l intensité et la fréquence des compulsions alimentaires — un outil précieux dans l accompagnement des troubles alimentaires.' },
      { label: 'Confiance en soi et performance', description: 'Élimination des croyances limitantes, gestion du trac avant une prise de parole ou un examen, amélioration de la confiance en soi grâce à un travail sur les mémoires émotionnelles sous-jacentes.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Identification de la cible et cotation', description: 'Le praticien vous aide à identifier précisément ce que vous souhaitez traiter — une émotion, une douleur, un souvenir. Vous cotez l intensité de votre détresse de 0 à 10 (SUDs). Cela permet de mesurer la progression au fil de la séance.' },
      { etape: '2', titre: 'Séquence de tapotements EFT', description: 'Guidé(e) par le praticien, vous répétez des phrases d ancrage tout en tapotant doucement les points d acupression (sourcil, coin de l œil, sous l œil, philtrum, menton, clavicule, sous le bras, sommet du crâne). Les rondes de tapotements se répètent jusqu à la diminution du SUDs.' },
      { etape: '3', titre: 'Intégration et auto-EFT', description: 'En fin de séance, le praticien s assure de votre état de stabilité émotionnelle. Il vous apprend à pratiquer l EFT seul(e) pour les situations du quotidien et vous remet les points et protocoles pour votre pratique autonome.' },
    ],
    praticiens: 108,
    satisfaction: 4.7,
    tarif_depuis: '60€',
    tarif_jusqua: '100€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Nathalie Gosselin',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 39,
        specialisation: 'Traumatismes, phobies, stress',
      },
      {
        nom: 'Bertrand Lemaître',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Rennes — aussi en visio',
        note: '4.7',
        avis: 27,
        specialisation: 'Alimentation émotionnelle, craving',
      },
      {
        nom: 'Sophie Aubert',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Marseille — aussi en visio',
        note: '4.8',
        avis: 34,
        specialisation: 'Confiance en soi, performance, anxiété',
      },
    ],
    faq: [
      { question: 'L EFT est-il remboursé ?', reponse: 'Non, l EFT n est pas remboursé par l Assurance Maladie. Certaines mutuelles proposant des remboursements pour les médecines douces peuvent couvrir partiellement les séances — vérifiez votre contrat.' },
      { question: 'L EFT fonctionne-t-il en visio ?', reponse: 'Oui, l EFT se pratique très bien en visio. Vous tapotez vous-même les points sous la guidance du praticien. Cette modalité offre la même efficacité qu en présentiel pour la majorité des problématiques.' },
      { question: 'L EFT est-il dangereux ?', reponse: 'L EFT est considéré comme une approche très sûre. Il n y a pas d effets secondaires physiques. Pour les traumatismes complexes ou le PTSD sévère, il est recommandé de travailler avec un praticien cliniquement formé et non de pratiquer seul.' },
      { question: 'Combien de séances sont nécessaires ?', reponse: 'Pour une phobie simple ou un stress ponctuel, 1 à 3 séances peuvent suffire. Pour des problématiques plus complexes (traumatismes, croyances profondes), 6 à 10 séances sont généralement nécessaires.' },
      { question: 'Peut-on apprendre à se faire soi-même des séances d EFT ?', reponse: 'Oui, et c est même l un des grands avantages de l EFT. Votre praticien vous enseignera le protocole de base que vous pourrez pratiquer seul(e) pour gérer les émotions difficiles au quotidien.' },
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
            Quand consulter un praticien EFT ?
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
            Comment se déroule une séance EFT ?
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
              Nos praticiens EFT vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} praticiens EFT
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
            Prêt à essayer l EFT ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} praticiens vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les praticiens EFT
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
