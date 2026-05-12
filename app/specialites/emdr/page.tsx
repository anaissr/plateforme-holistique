import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'EMDR : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un thérapeute EMDR vérifié pour traiter les traumatismes, le PTSD, les phobies et l anxiété grâce à une approche psychothérapeutique validée scientifiquement.',
}

export default function EmdrPage() {
  const specialite = {
    nom: 'EMDR',
    emoji: '👁️',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Libérer les traumatismes et cicatriser les blessures émotionnelles par le traitement adaptatif de l information.',
    description_longue: `L EMDR (Eye Movement Desensitization and Reprocessing, ou Désensibilisation et retraitement par les mouvements oculaires) est une psychothérapie structurée, validée par l OMS et la Haute Autorité de Santé, pour le traitement du syndrome de stress post-traumatique (PTSD) et d autres troubles psychologiques liés aux expériences traumatiques.

Développée par la psychologue américaine Francine Shapiro en 1987, l EMDR repose sur le modèle du Traitement Adaptatif de l Information (TAI). Ce modèle postule que les traumatismes non traités restent « figés » dans le cerveau sous forme de mémoires dysfonctionnelles, avec leurs émotions, sensations corporelles et croyances négatives associées. La thérapie EMDR aide le cerveau à « digérer » ces mémoires en activant son système naturel de traitement de l information.

Les stimulations bilatérales alternées (mouvements oculaires, tapping sur les genoux ou sons alternés) activent les deux hémisphères cérébraux simultanément, un processus analogue à ce qui se passe durant le sommeil paradoxal (REM). Cela permet au cerveau de retraiter les mémoires traumatiques et de les intégrer de manière adaptée. L EMDR est efficace non seulement pour les traumatismes complexes et le PTSD, mais aussi pour les phobies, les attaques de panique, les deuils pathologiques et les croyances limitantes profondes.`,
    pour_qui: [
      { label: 'Victimes de traumatismes', emoji: '💔' },
      { label: 'PTSD et stress post-traumatique', emoji: '🛡️' },
      { label: 'Personnes phobiques', emoji: '😨' },
      { label: 'Anxiété et attaques de panique', emoji: '😰' },
      { label: 'Deuils et pertes', emoji: '🕊️' },
    ],
    problematiques: [
      { label: 'PTSD et stress post-traumatique', description: 'L EMDR est le traitement de référence recommandé par l OMS pour le PTSD. Il permet de traiter les flashbacks, les cauchemars, l hypervigilance et l évitement liés à un événement traumatique.' },
      { label: 'Traumatismes de l enfance', description: 'Négligences, abus physiques ou émotionnels, situations d abandon — l EMDR permet de retraiter ces blessures précoces qui impactent la vie adulte et les relations.' },
      { label: 'Phobies et peurs spécifiques', description: 'Phobie des araignées, de l avion, des espaces clos — l EMDR traite l événement déclencheur initial de la phobie et désensibilise la réponse de peur associée.' },
      { label: 'Anxiété et attaques de panique', description: 'En identifiant et retraitant les mémoires à l origine de l anxiété chronique, l EMDR s attaque aux racines profondes des troubles anxieux plutôt qu à leurs symptômes.' },
      { label: 'Deuils et pertes', description: 'Accompagnement des deuils compliqués, des pertes traumatiques (accidents, suicides) ou des ruptures amoureuses douloureuses pour faciliter le processus naturel de deuil.' },
      { label: 'Croyances limitantes et estime de soi', description: 'L EMDR peut aussi traiter des croyances négatives profondes comme "je ne suis pas capable", "je ne mérite pas d être aimé(e)" issues d expériences passées douloureuses.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Évaluation et préparation', description: 'Les 2-3 premières séances sont consacrées à l évaluation de votre histoire, à l identification des traumatismes à traiter et à l apprentissage de techniques de stabilisation émotionnelle. La sécurité et la préparation sont essentielles avant de démarrer le travail de retraitement.' },
      { etape: '2', titre: 'Phases de désensibilisation et retraitement', description: 'Le thérapeute guide votre attention vers une mémoire cible tout en induisant des stimulations bilatérales (mouvements oculaires en suivant les doigts du thérapeute, tapotements alternés). Le cerveau retraite naturellement la mémoire au fil des sets de stimulation.' },
      { etape: '3', titre: 'Installation et clôture', description: 'Chaque séance se termine par une phase d installation d une croyance positive et une clôture pour s assurer que vous repartez dans un état stable. Le thérapeute suit l évolution entre les séances et adapte le protocole selon votre progression.' },
    ],
    praticiens: 124,
    satisfaction: 4.9,
    tarif_depuis: '80€',
    tarif_jusqua: '130€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Dr. Claire Morin',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 43,
        specialisation: 'PTSD, traumatismes complexes, dissociation',
      },
      {
        nom: 'Philippe Leconte',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Nantes — aussi en visio',
        note: '4.9',
        avis: 38,
        specialisation: 'Phobies, anxiété, trauma de l enfance',
      },
      {
        nom: 'Valérie Arnaud',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.8',
        avis: 51,
        specialisation: 'Deuil, burnout, croyances limitantes',
      },
    ],
    faq: [
      { question: 'L EMDR est-il remboursé ?', reponse: 'L EMDR pratiqué par un médecin psychiatre peut être remboursé par l Assurance Maladie. Pratiqué par un psychologue ou un psychothérapeute non-médecin, il ne l est généralement pas, mais certaines mutuelles le prennent en charge partiellement.' },
      { question: 'L EMDR est-il efficace en visio ?', reponse: 'Oui, l EMDR en visio est tout aussi efficace qu en présentiel selon les études récentes. Le thérapeute peut utiliser un stimulus visuel via l écran ou des stimulations auditives alternées pour la désensibilisation bilatérale.' },
      { question: 'Faut-il revivre son traumatisme pendant les séances ?', reponse: 'L EMDR ne demande pas de narrer en détail l événement traumatique. Vous accédez à la mémoire douloureuse de façon distancée, comme si vous la regardiez de loin. Le thérapeute vous accompagne pour maintenir une fenêtre de tolérance émotionnelle.' },
      { question: 'L EMDR convient-il aux enfants ?', reponse: 'Oui, des protocoles EMDR adaptés aux enfants existent et sont très efficaces. Les thérapeutes formés à la pédiatrie utilisent des outils ludiques (marionnettes, dessins) pour les jeunes enfants.' },
      { question: 'Combien de séances sont nécessaires pour un résultat ?', reponse: 'Pour un traumatisme unique récent (accidentel, agression), 3 à 5 séances peuvent suffire. Pour des traumatismes complexes ou une histoire d adversité infantile, un accompagnement de 10 à 20 séances est souvent nécessaire. Votre thérapeute vous guidera.' },
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
            Quand consulter un thérapeute EMDR ?
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
            Comment se déroule un accompagnement EMDR ?
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
              Nos thérapeutes EMDR vérifiés
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
            Prêt à commencer un accompagnement EMDR ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} thérapeutes vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les thérapeutes EMDR
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
