import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Charte qualité | Holistia',
  description: 'Découvrez comment Holistia sélectionne et vérifie ses praticiens : diplômes, assurance professionnelle, avis authentiques.',
}

export default function CharteQualite() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Charte qualité
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Tout ce qui nous engage envers vous — et envers les praticiens référencés sur Holistia.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Comment nous sélectionnons les praticiens
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { num: '1', titre: 'Vérification des diplômes', desc: 'Chaque praticien doit fournir une copie de ses diplômes de formation. Nous vérifions leur authenticité et la durée de la formation suivie.' },
              { num: '2', titre: 'Assurance responsabilité civile professionnelle', desc: 'Obligatoire pour être référencé sur Holistia. Une attestation d\'assurance à jour est exigée lors de l\'inscription et vérifiée annuellement.' },
              { num: '3', titre: 'Validation du profil', desc: 'Notre équipe examine chaque profil avant mise en ligne. Les informations erronées, les promesses thérapeutiques abusives ou les descriptions trompeuses sont refusées.' },
              { num: '4', titre: 'Suivi en continu', desc: 'Les avis des patients permettent de détecter les problèmes. Tout praticien ayant recueilli des signalements sérieux fait l\'objet d\'une enquête et peut être suspendu.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 text-white" style={{ backgroundColor: '#6b21a8' }}>
                  {step.num}
                </div>
                <div>
                  <p className="font-medium mb-1 text-sm" style={{ color: '#1c1917' }}>{step.titre}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Les avis : notre engagement d&apos;authenticité
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Seuls les patients ayant pris rendez-vous via Holistia peuvent laisser un avis. Les avis anonymes, les avis non vérifiés et les avis d&apos;entourage sont exclus par construction.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Holistia ne supprime pas les avis négatifs. Un praticien peut répondre publiquement à un avis, mais ne peut pas le faire retirer sauf en cas de contenu illicite.
          </p>
        </section>

        <section className="bg-white rounded-3xl p-8 shadow-sm" style={{ border: '1px solid #e7e5e4' }}>
          <h2 className="text-xl font-light mb-6" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Ce que nous n&apos;acceptons pas
          </h2>
          <div className="flex flex-col gap-3">
            {[
              "Les praticiens qui promettent de guérir des maladies graves (cancers, maladies auto-immunes, etc.)",
              "Les praticiens qui déconseillent à leurs patients de suivre un traitement médical prescrit",
              "Les formations de moins d'une semaine présentées comme suffisantes pour exercer",
              "Les profils sans assurance RC pro valide",
              "La vente de produits maison non réglementés comme condition du suivi",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
                <span className="flex-shrink-0">🚫</span>
                <p className="text-sm leading-relaxed" style={{ color: '#44403c' }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <p className="text-sm text-white mb-4">
            Vous avez un signalement à faire concernant un praticien ?
          </p>
          <a
            href="mailto:qualite@holistia.fr"
            className="inline-block text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
          >
            Nous contacter →
          </a>
        </section>

      </div>
    </main>
  )
}
