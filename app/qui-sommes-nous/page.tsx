import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qui sommes-nous | Holistia',
  description: 'Holistia est la première plateforme francophone dédiée aux médecines douces et au bien-être holistique. Notre mission : rendre les soins complémentaires accessibles, lisibles et de confiance.',
}

export default function QuiSommesNous() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Qui sommes-nous
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Une plateforme construite avec une conviction : les soins complémentaires méritent la même rigueur que la médecine conventionnelle.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-12">

        <section>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Notre histoire</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Holistia est née d&apos;un constat simple : quand on ne va pas bien — ou quand un proche ne va pas bien — on ne sait souvent pas vers qui se tourner. Vers quel médecin ? Vers quelle spécialité ? Un ostéopathe ou un kinésithérapeute ? Un sophrologue ou un psychothérapeute ? Il existe des dizaines de pratiques, des centaines de praticiens, et aucune boussole pour s&apos;y retrouver.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534e' }}>
            Les patients sont trop souvent laissés seuls face à leur désarroi. Ils cherchent, tâtonnent, abandonnent — ou trouvent quelqu&apos;un par hasard. Et les praticiens sérieux, ceux qui ont suivi des formations longues et rigoureuses, sont noyés dans un marché illisible.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>
            Nous avons construit Holistia pour changer ça : aider chaque personne à voir clair, à trouver le bon accompagnement — et à être bien accompagnée tout au long du chemin.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Notre mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: '🔍', titre: 'Rendre lisible', desc: 'Plus de 30 spécialités, des centaines de praticiens — Holistia vous aide à comprendre ce qui existe, ce qui correspond à votre situation, et pourquoi.' },
              { emoji: '🤝', titre: 'Rendre accessible', desc: 'En cabinet ou en visio, partout dans le monde francophone. Et si vous ne savez pas par où commencer, notre outil d\'orientation est là pour vous guider.' },
              { emoji: '🛡', titre: 'Rendre fiable', desc: 'Diplômes vérifiés, assurance RC pro contrôlée, avis authentiques uniquement. La confiance n\'est pas négociable.' },
            ].map((v) => (
              <div key={v.titre} className="bg-white rounded-3xl p-6 shadow-sm" style={{ border: '1px solid #ede9fe' }}>
                <div className="text-2xl mb-3">{v.emoji}</div>
                <h3 className="font-medium mb-2 text-sm" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{v.titre}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#78716c' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-light mb-4" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>Ce en quoi nous croyons</h2>
          <div className="flex flex-col gap-4">
            {[
              "Le corps et l'esprit forment un système — les soins qui les traitent ensemble ont leur place dans un parcours de santé.",
              "La collaboration entre praticiens démultiplie les résultats. Un ostéopathe et un sophrologue qui travaillent ensemble sur le même patient font souvent plus que chacun séparément. C'est pourquoi Holistia favorise les échanges entre praticiens — avec diplôme d'État ou non — dès lors que leur formation est sérieuse et leur pratique éthique.",
              "Un praticien éthique sait ce qu'il ne peut pas traiter et oriente vers quelqu'un d'autre quand c'est nécessaire. C'est une marque de professionnalisme, pas de faiblesse.",
              "Les médecines complémentaires ne remplacent pas la médecine conventionnelle — elles la complètent. Holistia n'est pas une alternative au médecin. C'est un espace pour tout ce qui vient en plus.",
              "Personne ne devrait rester seul face à ses maux ou à ceux de ses proches. Trouver de l'aide, c'est un droit — pas un luxe.",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
                <span style={{ color: '#6b21a8', flexShrink: 0 }}>✦</span>
                <p className="text-sm leading-relaxed" style={{ color: '#44403c' }}>{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
          <h2 className="text-xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-lora)' }}>Une question ? Un retour ?</h2>
          <p className="text-sm mb-5" style={{ color: '#e9d5ff' }}>Nous lisons tous les messages. Vraiment.</p>
          <a
            href="mailto:contact@holistia.fr"
            className="inline-block text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#ffffff', color: '#6b21a8' }}
          >
            Nous écrire →
          </a>
        </section>

      </div>
    </main>
  )
}
