import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Pilates thérapeutique : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un praticien Pilates thérapeutique vérifié pour renforcer votre gainage, améliorer votre posture et vous rééduquer en douceur.',
  openGraph: {
    title: 'Pilates thérapeutique : praticiens vérifiés',
    description: "Posture, dos, renforcement doux — trouvez un enseignant de pilates thérapeutique vérifié sur Holistia.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Pilates thérapeutique ',
      },
    ],
  },
}

export default function PilatesTherapeutiquePage() {
  const specialite = {
    nom: 'Pilates thérapeutique',
    emoji: '🏋️',
    photo: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Renforcer le gainage profond, corriger la posture et rééduquer le corps avec précision et douceur.',
    description_longue: `Le Pilates thérapeutique est une méthode de mouvement qui se distingue du Pilates classique par son approche individualisée et son orientation rééducative. Pratiqué sous la supervision d un praticien qualifié — souvent kinésithérapeute, ostéopathe ou professeur certifié — il adapte les exercices aux besoins spécifiques de chaque patient, en tenant compte de ses pathologies, de sa douleur et de ses objectifs.

Développée à l origine par Joseph Pilates pour la rééducation des danseurs blessés, cette méthode travaille en priorité les muscles profonds — la sangle abdominale profonde, les muscles du plancher pelvien, les stabilisateurs de la colonne vertébrale — avant de solliciter les muscles superficiels. Cela permet une rééducation en profondeur qui ne surcharge pas les structures fragilisées.

Le Pilates thérapeutique est particulièrement indiqué pour les douleurs chroniques du dos, la rééducation post-chirurgicale, les déséquilibres posturaux, la rééducation du périnée après accouchement ou en cas d incontinence, et le renforcement des articulations fragilisées. Il peut se pratiquer au sol sur tapis ou sur des appareils spécifiques (Reformer, Cadillac, Barrel) qui permettent un travail plus précis et progressif.`,
    pour_qui: [
      { label: 'Douleurs chroniques', emoji: '🔙' },
      { label: 'Post-partum', emoji: '🤱' },
      { label: 'Post-opératoire', emoji: '🏥' },
      { label: 'Sportifs blessés', emoji: '🏃' },
      { label: 'Sédentaires', emoji: '💻' },
    ],
    problematiques: [
      { label: 'Lombalgie et douleurs vertébrales', description: 'Le renforcement des muscles stabilisateurs profonds de la colonne soulage les douleurs lombaires chroniques et prévient les récidives en améliorant le soutien actif de la colonne.' },
      { label: 'Rééducation périnéale', description: 'Exercices hypopressifs et de conscience du plancher pelvien pour la rééducation après accouchement, en cas d incontinence ou de prolapsus.' },
      { label: 'Scoliose et déséquilibres posturaux', description: 'Le Pilates thérapeutique aide à rééquilibrer les tensions musculaires asymétriques, à améliorer la conscience du corps dans l espace et à stabiliser une scoliose légère à modérée.' },
      { label: 'Rééducation post-chirurgicale', description: 'Reprise progressive du mouvement après une prothèse de hanche ou de genou, une chirurgie du dos ou une opération abdominale, en respectant les délais de cicatrisation.' },
      { label: 'Troubles de la posture liés au travail', description: 'Travail ciblé sur les déséquilibres musculaires créés par le travail sur écran : renforcement des muscles dorsaux, relâchement des pectoraux et des fléchisseurs de hanche.' },
      { label: 'Préparation et récupération sportive', description: 'Renforcement du gainage et de la stabilisation articulaire pour les sportifs souhaitant améliorer leurs performances et prévenir les blessures liées à des déséquilibres musculaires.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Évaluation posturale et fonctionnelle', description: 'Le praticien analyse votre posture, votre respiration, votre schéma de mouvement et identifie les déséquilibres musculaires. Il recueille votre historique de santé et définit vos objectifs.' },
      { etape: '2', titre: 'Programme Pilates personnalisé', description: 'Les séances de 45 à 60 minutes combinent exercices au sol et sur appareils Pilates (Reformer, Barrel). Chaque exercice est expliqué, démontré et corrigé en temps réel pour garantir la qualité d exécution.' },
      { etape: '3', titre: 'Progression et autonomisation', description: 'Le programme évolue en intensité et en complexité au fil des séances. Le praticien vous remet des exercices à pratiquer seul entre les séances pour accélérer les progrès et vous accompagne vers une pratique autonome.' },
    ],
    praticiens: 98,
    satisfaction: 4.8,
    tarif_depuis: '60€',
    tarif_jusqua: '100€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Vanessa Perrin',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 9e — aussi en visio',
        note: '4.9',
        avis: 53,
        specialisation: 'Rééducation périnéale, post-partum',
      },
      {
        nom: 'Étienne Gros',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 39,
        specialisation: 'Lombalgie, scoliose, posture',
      },
      {
        nom: 'Hélène Vidal',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Montpellier',
        note: '4.8',
        avis: 31,
        specialisation: 'Sport, post-chirurgical, rééducation',
      },
    ],
    faq: [
      { question: 'Le Pilates thérapeutique est-il remboursé ?', reponse: 'Les séances réalisées par un kinésithérapeute dans le cadre d une rééducation peuvent être remboursées sur ordonnance. En dehors de ce cadre, les séances de Pilates thérapeutique ne sont pas remboursées par la Sécurité sociale, mais certaines mutuelles participent.' },
      { question: 'Quelle différence avec le Pilates en cours collectif ?', reponse: 'Le Pilates thérapeutique est individualisé et adapté à vos pathologies et objectifs spécifiques. Les cours collectifs sont plus généraux et ne tiennent pas compte de vos contre-indications ou de vos douleurs particulières.' },
      { question: 'Peut-on faire du Pilates thérapeutique en cas de hernie discale ?', reponse: 'Oui, c est même l une des indications phares du Pilates thérapeutique. Les exercices sont précisément adaptés pour ne pas aggraver la hernie tout en renforçant les structures de soutien. Informez votre praticien de votre diagnostic.' },
      { question: 'Faut-il être en forme pour commencer ?', reponse: 'Aucun prérequis n est nécessaire. Le Pilates thérapeutique est conçu pour les personnes déconditionnées, blessées ou en douleur. Le praticien adapte chaque séance à votre niveau du moment.' },
      { question: 'Les résultats sont-ils durables ?', reponse: 'Oui, à condition de pratiquer régulièrement. Les bénéfices du Pilates — renforcement du gainage, amélioration de la posture, réduction des douleurs — se maintiennent dans le temps avec une pratique hebdomadaire, même en autonomie.' },
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
            Quand consulter un praticien en Pilates thérapeutique ?
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
              Nos praticiens Pilates vérifiés
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
            Prêt à commencer le Pilates thérapeutique ?
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
