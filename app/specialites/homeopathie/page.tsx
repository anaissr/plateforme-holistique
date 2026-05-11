import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Homéopathie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un homéopathe vérifié pour une approche globale de votre santé, le traitement du terrain, allergies, troubles fonctionnels et accompagnement des enfants.',
}

export default function HomeopathiePage() {
  const specialite = {
    nom: 'Homéopathie',
    emoji: '💊',
    photo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Traiter le terrain et non le symptôme pour retrouver un équilibre de santé durable et naturel.',
    description_longue: `L homéopathie est une médecine fondée par Samuel Hahnemann au XVIIIe siècle, basée sur le principe de similitude : une substance qui provoque des symptômes chez une personne saine peut guérir ces mêmes symptômes chez une personne malade si elle est utilisée à très haute dilution. Ces dilutions homéopathiques, appelées remèdes, sont personnalisées en fonction du profil global du patient.

L approche homéopathique est fondamentalement individualiste. Deux personnes présentant les mêmes symptômes (par exemple une grippe) peuvent se voir prescrire des remèdes différents, car l homéopathe prend en compte l ensemble de la personne — ses caractéristiques physiques, son tempérament, ses modalités d aggravation et d amélioration, ses antécédents familiaux. Cette personnalisation est ce qui distingue l homéopathie d une approche symptomatique standard.

Bien que le mécanisme d action de l homéopathie reste scientifiquement débattu, de nombreux patients rapportent des améliorations significatives de leur état de santé général, de leur immunité, de leur sommeil et de leur bien-être. L homéopathie est particulièrement appréciée pour son innocuité, son absence d effets secondaires et son adaptabilité aux nourrissons, enfants, femmes enceintes et personnes âgées qui ne tolèrent pas certains médicaments conventionnels.`,
    pour_qui: [
      { label: 'Nourrissons et enfants', emoji: '👶' },
      { label: 'Femmes enceintes', emoji: '🤰' },
      { label: 'Personnes allergiques', emoji: '🤧' },
      { label: 'Personnes âgées', emoji: '👴' },
      { label: 'Troubles chroniques', emoji: '🔁' },
    ],
    problematiques: [
      { label: 'Allergies et terrain atopique', description: 'Rhinite allergique, asthme, eczéma, urticaire — l homéopathie travaille sur le terrain allergique de fond pour réduire l hypersensibilité et les crises.' },
      { label: 'Pathologies hivernales récurrentes', description: 'Rhumes, otites, angines, bronchites répétées chez l enfant — un traitement homéopathique de fond vise à renforcer le système immunitaire pour espacer et alléger les épisodes infectieux.' },
      { label: 'Troubles du sommeil et nervosité', description: 'Insomnie, agitation, hyperémotivité — l homéopathe identifie le remède correspondant au profil de la personne pour rétablir un sommeil naturel et apaiser le système nerveux.' },
      { label: 'Troubles digestifs fonctionnels', description: 'Colites, colopathie fonctionnelle, aérophagie, nausées — traitement du terrain digestif pour rééquilibrer la fonction intestinale sans les effets secondaires des traitements allopathiques.' },
      { label: 'Troubles hormonaux et gynécologiques', description: 'Syndrome prémenstruel, règles douloureuses, ménopause, fertilité — l homéopathie propose un accompagnement doux des cycles hormonaux et des transitions féminines.' },
      { label: 'Accompagnement émotionnel', description: 'Anxiété, choc émotionnel, deuil, burn-out — certains remèdes homéopathiques constituent un soutien précieux pour traverser les périodes de forte charge émotionnelle ou de crise.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Consultation homéopathique longue', description: 'La première consultation dure 45 à 90 minutes. L homéopathe explore votre histoire médicale, vos antécédents familiaux, vos caractéristiques physiques et psychiques, vos modalités de vie et vos symptômes dans le moindre détail pour trouver votre remède constitutionnel.' },
      { etape: '2', titre: 'Prescription personnalisée', description: 'L homéopathe prescrit des remèdes homéopathiques sous forme de granules, de globules ou de teintures mères, à des dilutions et à une fréquence adaptées à votre situation. Il peut aussi prescrire des remèdes de fond et des remèdes d urgence selon vos besoins.' },
      { etape: '3', titre: 'Suivi et ajustements', description: 'Des consultations de suivi (30 à 45 min) permettent d évaluer la réponse au traitement et d ajuster les remèdes. L homéopathie nécessite souvent plusieurs mois de suivi pour produire des effets durables sur le terrain.' },
    ],
    praticiens: 138,
    satisfaction: 4.7,
    tarif_depuis: '50€',
    tarif_jusqua: '100€',
    duree_seance: '30 à 60 min',
    nb_seances: '2 à 6 séances',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Dr. Martine Cordier',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris 6e — aussi en visio',
        note: '4.9',
        avis: 54,
        specialisation: 'Pédiatrie, ORL récurrents, allergies',
      },
      {
        nom: 'Jean-Pierre Gallois',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Grenoble — aussi en visio',
        note: '4.7',
        avis: 36,
        specialisation: 'Médecine générale homéopathique',
      },
      {
        nom: 'Dominique Perret',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        ville: 'Nantes — aussi en visio',
        note: '4.8',
        avis: 42,
        specialisation: 'Terrain, troubles hormonaux, ménopause',
      },
    ],
    faq: [
      { question: 'L homéopathie est-elle remboursée ?', reponse: 'Depuis 2021, l homéopathie n est plus remboursée par l Assurance Maladie française. Certaines mutuelles continuent de rembourser partiellement les consultations et les médicaments homéopathiques — vérifiez votre contrat.' },
      { question: 'L homéopathie est-elle compatible avec un traitement médical ?', reponse: 'Oui, l homéopathie ne remplace pas les traitements médicaux conventionnels et peut les compléter. En cas de traitement chronique, informez votre homéopathe et votre médecin traitant de vos traitements respectifs.' },
      { question: 'Combien de temps avant de voir des résultats ?', reponse: 'Pour des troubles aigus (rhume, grippe), les remèdes homéopathiques peuvent agir en quelques heures. Pour un traitement de fond d une condition chronique, les résultats se manifestent généralement après 1 à 3 mois de traitement régulier.' },
      { question: 'Les granules homéopathiques sont-ils sans danger pour les enfants ?', reponse: 'Oui, les remèdes homéopathiques sont très dilués et ne présentent pas de toxicité. Ils sont sans danger pour les nourrissons, enfants, femmes enceintes et personnes âgées. En cas de besoin, les granules peuvent être dissoutes dans l eau.' },
      { question: 'L homéopathie peut-elle se pratiquer en visio ?', reponse: 'Oui, la grande majorité des consultations homéopathiques se font très bien en visio. L homéopathe peut recueillir toutes les informations nécessaires par vidéoconférence et vous envoyer les ordonnances.' },
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Durée', value: specialite.duree_seance, emoji: '⏱' },
              { label: 'Nb séances', value: specialite.nb_seances, emoji: '📅' },
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
            Quand consulter un homéopathe ?
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
              Nos homéopathes vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} homéopathes
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
                  <p className="text-xs mt-0.5" style={{ color: '#a8a29e' }}>📍 {p.ville}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-xs">⭐</span>
                    <span className="text-xs font-medium" style={{ color: '#1c1917' }}>{p.note}</span>
                    <span className="text-xs" style={{ color: '#a8a29e' }}>({p.avis} avis)</span>
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
            Prêt à consulter un homéopathe ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} homéopathes vérifiés vous attendent — en cabinet ou en visio.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les homéopathes
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
