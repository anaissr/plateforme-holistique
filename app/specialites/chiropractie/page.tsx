import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Chiropractie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un chiropracteur vérifié pour soulager vos douleurs de dos, de nuque et articulaires. Manipulation vertébrale douce et sécurisée sur Holistia.',
}

export default function ChiropractiePage() {
  const specialite = {
    nom: 'Chiropractie',
    emoji: '🦴',
    photo: 'https://images.unsplash.com/photo-1699523229208-be1e1dd9252d?w=1400&h=500&fit=crop&q=75&fm=webp',
    accroche: 'Retrouvez un dos en bonne santé grâce aux ajustements vertébraux et à la thérapie manuelle chiropractique.',
    description_longue: `La chiropractie est une profession de santé réglementée qui se spécialise dans le diagnostic, le traitement et la prévention des troubles neuro-musculo-squelettiques. Le chiropracteur utilise principalement la manipulation vertébrale (ou ajustement chiropractique) pour corriger les dysfonctions articulaires et soulager les douleurs associées.

Le principe fondamental de la chiropractie est que le bon fonctionnement du système nerveux, protégé par la colonne vertébrale, est essentiel à la santé globale. Lorsque des vertèbres sont mal alignées ou présentent une mobilité réduite, elles peuvent comprimer des nerfs et générer des douleurs locales ou référées. L ajustement chiropractique restaure la mobilité articulaire et soulage les tensions environnantes.

En France, les chiropracteurs sont reconnus par le ministère de la Santé depuis 2002. Ils traitent essentiellement les lombalgies, les cervicalgies, les névralgies cervico-brachiales, les maux de tête d origine cervicale et les troubles posturaux. La chiropractie peut aussi accompagner les femmes enceintes (douleurs pelviennes, sciatalgie) et les sportifs en prévention ou récupération.`,
    pour_qui: [
      { label: 'Personnes souffrant du dos', emoji: '🔙' },
      { label: 'Sportifs', emoji: '🏃' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'Travailleurs sédentaires', emoji: '💻' },
      { label: 'Personnes âgées', emoji: '👴' },
    ],
    problematiques: [
      { label: 'Lombalgie et mal de dos', description: 'Douleurs lombaires aiguës ou chroniques, lumbago, blocage du bas du dos — les ajustements chiropractiques restaurent rapidement la mobilité et soulagent la douleur.' },
      { label: 'Cervicalgie et douleurs de nuque', description: 'Raideur cervicale, torticolis, douleurs irradiant dans les épaules — la chiropractie libère les tensions cervicales et améliore la mobilité du cou.' },
      { label: 'Sciatique et hernie discale', description: 'Douleur irradiante dans le membre inférieur liée à une compression du nerf sciatique — la chiropractie peut réduire la pression discale et soulager la névralgie.' },
      { label: 'Maux de tête et migraines', description: 'De nombreux maux de tête ont une origine cervicale. Les ajustements ciblés des vertèbres cervicales soulagent les céphalées de tension et certaines migraines.' },
      { label: 'Douleurs d épaule et tendinites', description: 'Épaule douloureuse, syndrome de l épaule enraidie, tendinite de la coiffe des rotateurs — la chiropractie traite l articulation et les structures environnantes.' },
      { label: 'Posture et prévention', description: 'Correction des déséquilibres posturaux liés au travail sur écran, prévention des troubles musculosquelettiques et entretien de la santé vertébrale au long cours.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Consultation initiale et bilan', description: 'Le chiropracteur réalise un historique complet de vos douleurs, un examen orthopédique et neurologique ainsi qu une analyse posturale. Il peut demander des radios si nécessaire avant tout traitement.' },
      { etape: '2', titre: 'Ajustements chiropractiques', description: 'Les séances durent 30 à 45 minutes. Le chiropracteur réalise des manipulations vertébrales précises et des techniques de thérapie des tissus mous (massage, étirements). Les ajustements sont généralement indolores et procurent souvent un soulagement immédiat.' },
      { etape: '3', titre: 'Programme de suivi et conseils', description: 'Le chiropracteur établit un programme de soins adapté (fréquence et durée), vous conseille sur la posture, les exercices à faire à la maison et l ergonomie de votre poste de travail pour éviter les récidives.' },
    ],
    praticiens: 163,
    satisfaction: 4.8,
    tarif_depuis: '60€',
    tarif_jusqua: '100€',
    duree_seance: '30 à 45 min',
    nb_seances: '4 à 8 séances',
    visio: false,
    praticiens_vedette: [
      {
        nom: 'Alexandre Martin',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 17e',
        note: '4.9',
        avis: 72,
        specialisation: 'Lombalgie, hernie discale, sport',
      },
      {
        nom: 'Pauline Richard',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Bordeaux',
        note: '4.8',
        avis: 45,
        specialisation: 'Femmes enceintes, cervicalgies',
      },
      {
        nom: 'David Chevalier',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Strasbourg',
        note: '4.9',
        avis: 58,
        specialisation: 'Maux de tête, posture, prévention',
      },
    ],
    faq: [
      { question: 'La chiropractie est-elle remboursée ?', reponse: 'La chiropractie n est pas remboursée par l Assurance Maladie. Certaines mutuelles proposent un remboursement partiel des séances — vérifiez votre contrat. Des devis sont disponibles avant tout traitement.' },
      { question: 'Les manipulations chiropractiques sont-elles dangereuses ?', reponse: 'Entre les mains d un chiropracteur qualifié et diplômé (reconnu par le ministère de la Santé), les manipulations sont très sûres. Un bilan préalable élimine les contre-indications (ostéoporose sévère, tumeur, infection). Les effets indésirables graves sont rarissimes.' },
      { question: 'Combien de séances sont nécessaires ?', reponse: 'Une douleur aiguë récente peut se résoudre en 3 à 5 séances. Une douleur chronique installée depuis longtemps nécessitera généralement 6 à 12 séances. Des séances d entretien (1 fois par mois ou par trimestre) peuvent être bénéfiques.' },
      { question: 'Faut-il une ordonnance ?', reponse: 'Non, vous pouvez consulter un chiropracteur directement sans prescription médicale. Informez votre médecin traitant de votre suivi chiropractique pour une prise en charge globale optimale.' },
      { question: 'La chiropractie est-elle compatible avec la kinésithérapie ?', reponse: 'Oui, les deux approches sont complémentaires. La chiropractie traite l articulation et l alignement vertébral, tandis que la kinésithérapie renforce les muscles qui soutiennent la colonne. Beaucoup de patients bénéficient des deux en parallèle.' },
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
            Quand consulter un chiropracteur ?
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
              Nos chiropracteurs vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} chiropracteurs
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
            Prêt à consulter un chiropracteur ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} chiropracteurs vérifiés vous attendent près de chez vous.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les chiropracteurs
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
