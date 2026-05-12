import { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Sexologie : praticiens vérifiés, tarifs, prise de RDV | Holistia',
  description: 'Trouvez un sexologue vérifié pour accompagner votre santé sexuelle, épanouissement intime, questions d identité et difficultés de couple. Consultation confidentielle.',
  openGraph: {
    title: 'Sexologie : praticiens vérifiés et consultation en ligne',
    description: "Intimité, libido, troubles sexuels — trouvez un sexologue diplômé disponible en cabinet ou en visio.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Sexologie ',
      },
    ],
  },
}

export default function SexologiePage() {
  const specialite = {
    nom: 'Sexologie',
    emoji: '💜',
    photo: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1400&h=500&fit=crop&crop=center',
    accroche: 'Un espace bienveillant et confidentiel pour explorer, comprendre et épanouir votre vie sexuelle et intime.',
    description_longue: `La sexologie est la discipline médicale et psychologique qui étudie la sexualité humaine dans toutes ses dimensions — biologiques, psychologiques, relationnelles et culturelles. Le sexologue accompagne les personnes et les couples qui rencontrent des difficultés dans leur vie sexuelle ou qui souhaitent mieux comprendre leur sexualité pour s épanouir davantage.

Les problèmes sexuels sont extrêmement fréquents et touchent toutes les tranches d âge : troubles de l érection ou de l éjaculation chez l homme, vaginisme, dyspareunie ou troubles de l orgasme chez la femme, baisse du désir dans les deux sexes, difficultés liées aux transitions hormonales (ménopause, andropause). Ces difficultés ont souvent une composante à la fois physique et psychologique, et le sexologue adopte une approche globale pour les traiter.

La sexologie traite également les questions d identité de genre et d orientation sexuelle, accompagnant les personnes en questionnement dans un cadre bienveillant et non-jugeant. Le sexologue travaille aussi avec les couples pour améliorer la communication intime et reconnecter les partenaires. Toutes les orientations sexuelles et identités de genre sont accueillies avec respect et dans la plus stricte confidentialité.`,
    pour_qui: [
      { label: 'Personnes seules', emoji: '🧑' },
      { label: 'Couples', emoji: '💑' },
      { label: 'Personnes LGBTQIA+', emoji: '🏳️‍🌈' },
      { label: 'Personnes en questionnement', emoji: '❓' },
      { label: 'Femmes post-partum', emoji: '🤱' },
    ],
    problematiques: [
      { label: 'Troubles du désir et de l excitation', description: 'Baisse ou absence de désir sexuel, difficultés d excitation — exploration des causes psychologiques, hormonales et relationnelles pour retrouver une vie intime épanouie.' },
      { label: 'Troubles érectiles et éjaculatoires', description: 'Dysfonction érectile, éjaculation prématurée ou retardée — approche intégrant la rééducation sexologique, la thérapie cognitive et les éventuelles causes organiques à adresser avec le médecin.' },
      { label: 'Vaginisme et dyspareunie', description: 'Contraction involontaire du vagin rendant les rapports douloureux voire impossibles, ou douleurs pendant les rapports — une prise en charge progressive et bienveillante permet souvent une résolution complète.' },
      { label: 'Questions d identité et d orientation', description: 'Accompagnement non-jugeant des personnes en questionnement sur leur orientation sexuelle ou leur identité de genre, dans un espace sécurisant et confidentiel.' },
      { label: 'Sexualité après un trauma ou une maladie', description: 'Reconstruction d une vie intime après une agression sexuelle, un cancer, une chirurgie ou une maladie chronique — retrouver confiance et plaisir dans le respect de son corps.' },
      { label: 'Épanouissement et communication intime', description: 'Sans pathologie particulière, le sexologue peut accompagner vers une meilleure connaissance de soi, une communication plus fluide avec son partenaire et un épanouissement sexuel plus complet.' },
    ],
    deroulement: [
      { etape: '1', titre: 'Consultation initiale confidentielle', description: 'Dans un cadre bienveillant et sans jugement, le sexologue recueille votre histoire, vos préoccupations et vos objectifs. Cette première consultation permet de poser un diagnostic et de définir une approche thérapeutique adaptée.' },
      { etape: '2', titre: 'Thérapie sexologique', description: 'Selon votre situation, la thérapie combine des entretiens psychothérapeutiques, des exercices de sensorialité et de communication (à pratiquer seul ou en couple à la maison) et des techniques de pleine conscience appliquées à la sexualité.' },
      { etape: '3', titre: 'Suivi et bilan', description: 'Des séances de suivi permettent d évaluer l évolution, d ajuster le travail thérapeutique et de progresser à votre rythme. Le sexologue peut vous orienter vers d autres spécialistes si une composante organique est identifiée.' },
    ],
    praticiens: 89,
    satisfaction: 4.9,
    tarif_depuis: '70€',
    tarif_jusqua: '120€',
    visio: true,
    praticiens_vedette: [
      {
        nom: 'Dr. Isabelle Chartier',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.9',
        avis: 36,
        specialisation: 'Vaginisme, dyspareunie, désir',
      },
      {
        nom: 'Grégoire Tessier',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        ville: 'Lyon — aussi en visio',
        note: '4.9',
        avis: 29,
        specialisation: 'Troubles érectiles, éjaculation, couple',
      },
      {
        nom: 'Manon Forestier',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        ville: 'Paris — aussi en visio',
        note: '4.8',
        avis: 41,
        specialisation: 'Identité de genre, LGBTQIA+, trauma',
      },
    ],
    faq: [
      { question: 'La sexologie est-elle remboursée ?', reponse: 'Les consultations de sexologie médicale remboursées sont rares. Certains médecins sexologues peuvent facturer une consultation médicale. En libéral, la sexologie n est généralement pas remboursée, mais certaines mutuelles participent.' },
      { question: 'Peut-on consulter un sexologue en visio ?', reponse: 'Oui, les consultations de sexologie fonctionnent très bien en visio. Elles offrent souvent un confort supplémentaire pour aborder des sujets intimes depuis chez soi, dans un espace connu et sécurisant.' },
      { question: 'Les couples peuvent-ils consulter ensemble ?', reponse: 'Oui, les consultations de couple sont proposées par de nombreux sexologues. Le sexologue anime la rencontre de manière équitable et bienveillante pour les deux partenaires. Des séances individuelles peuvent aussi être combinées.' },
      { question: 'Le sexologue est-il soumis au secret professionnel ?', reponse: 'Oui, absolument. Comme tout professionnel de santé ou psychothérapeute, le sexologue est soumis au secret professionnel. Tout ce qui est partagé en consultation reste strictement confidentiel.' },
      { question: 'Faut-il avoir un problème grave pour consulter un sexologue ?', reponse: 'Non. Vous pouvez consulter un sexologue par simple curiosité, pour mieux vous connaître, améliorer votre communication intime ou explorer de nouvelles dimensions de votre sexualité. La sexologie n est pas réservée aux pathologies.' },
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
            Quand consulter un sexologue ?
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
              Nos sexologues vérifiés
            </h2>
            <div className="flex gap-3">
              <a href="/recherche" className="text-white px-5 py-2 rounded-xl text-sm font-medium" style={{ backgroundColor: '#6b21a8' }}>
                Voir les {specialite.praticiens} sexologues
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
            Prêt à consulter un sexologue ?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#d8b4fe' }}>
            {specialite.praticiens} sexologues vérifiés vous attendent — en cabinet ou en visio, en toute confidentialité.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/recherche" className="text-white px-8 py-4 rounded-2xl font-medium shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
              Voir les sexologues
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
