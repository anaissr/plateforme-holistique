import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psychomotricien pour enfant : pour quels troubles, à quel âge | Holistia',
  description: "Beaucoup de parents entendent \"consultez un psychomotricien\" sans vraiment savoir ce que ça implique. Voici tout ce qu'il faut savoir.",
  openGraph: {
    title: 'Psychomotricien pour enfant : pour quels troubles, à quel âge, et comment ça se passe vraiment',
    description: "Beaucoup de parents entendent \"consultez un psychomotricien\" sans vraiment savoir ce que ça implique. Voici tout ce qu'il faut savoir.",
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Psychomotricité enfant',
      },
    ],
  },
}

export default function ArticlePsychomotricien() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          🧒 Psychomotricité
        </span>
        <h1 className="text-3xl font-light text-white mb-4 max-w-3xl mx-auto leading-snug" style={{ fontFamily: 'var(--font-lora)' }}>
          Psychomotricien pour enfant : pour quels troubles, à quel âge, et comment ça se passe vraiment
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>12 mai 2026 · 6 min de lecture</p>
      </section>

      {/* PHOTO */}
      <div className="max-w-2xl mx-auto px-6 pt-10">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=75"
          alt="Enfant en séance de psychomotricité"
          className="w-full rounded-3xl object-cover"
          style={{ maxHeight: '340px' }}
          loading="lazy"
        />
      </div>

      {/* CONTENU */}
      <article className="max-w-2xl mx-auto px-6 py-14" style={{ color: '#44403c' }}>

        <p className="text-lg leading-relaxed mb-8" style={{ color: '#57534e' }}>
          &laquo;&nbsp;On m&apos;a conseillé de consulter un psychomotricien pour mon enfant.&nbsp;&raquo;
          Beaucoup de parents entendent cette phrase sans vraiment savoir ce que ça implique.
          Voici tout ce qu&apos;il faut savoir.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce qu&apos;est vraiment la psychomotricité
        </h2>
        <p className="leading-relaxed mb-4">
          La psychomotricité part d&apos;un constat simple : le corps et le psychisme ne sont pas
          deux entités séparées. Le développement de l&apos;enfant est d&apos;abord corporel —
          c&apos;est en bougeant, en touchant, en explorant l&apos;espace qu&apos;il construit sa
          relation au monde. Un psychomotricien est un professionnel de santé diplômé d&apos;État
          (3 ans après le bac) qui intervient quand ce développement rencontre des obstacles —
          à l&apos;intersection du corps, des émotions, et des apprentissages.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Les signes qui peuvent indiquer un bilan
        </h2>
        <div className="flex flex-col gap-3 my-6">
          {[
            { signe: "Troubles de la coordination (dyspraxie) : l'enfant est \"maladroit\", a du mal à s'habiller, tenir un crayon, faire du vélo.", label: "Coordination" },
            { signe: "Difficultés d'écriture (dysgraphie).", label: "Écriture" },
            { signe: "Troubles de l'attention (TDAH) : la psychomotricité propose des outils pour mieux habiter son corps et améliorer la capacité d'attention.", label: "Attention" },
            { signe: "Troubles du spectre autistique : elle fait partie intégrante des plans d'accompagnement.", label: "TSA" },
            { signe: "Anxiété et troubles du comportement : un enfant très anxieux peut trouver dans la psychomotricité un espace pour apprivoiser ses émotions par le corps.", label: "Anxiété" },
          ].map((item) => (
            <div key={item.signe} className="flex items-start gap-3 p-4 rounded-2xl" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: '#ede9fe', color: '#6b21a8' }}>{item.label}</span>
              <p className="text-sm leading-relaxed" style={{ color: '#44403c' }}>{item.signe}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce qui se passe concrètement en séance
        </h2>
        <p className="leading-relaxed mb-4">
          La première chose qui surprend : une séance de psychomotricité ressemble à du jeu.
          Intentionnellement. Pour l&apos;enfant, le jeu n&apos;est pas un prétexte — c&apos;est
          le médium. C&apos;est en jouant que le psychomotricien observe comment l&apos;enfant investit
          l&apos;espace, gère la frustration, communique.
        </p>
        <p className="leading-relaxed mb-4">
          Les parents ne sont généralement pas dans la salle — ce n&apos;est pas un manque de
          transparence, c&apos;est la condition pour que l&apos;enfant s&apos;exprime librement.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Le bilan psychomoteur : à quoi ça sert
        </h2>
        <p className="leading-relaxed mb-4">
          Avant un suivi, un bilan est souvent proposé — 2 à 3 séances d&apos;évaluation qui donnent
          lieu à un compte-rendu écrit partageable avec l&apos;équipe médicale et l&apos;école.
          Ce bilan est un outil, pas une étiquette. Il permet de mieux comprendre le fonctionnement
          de l&apos;enfant pour mieux l&apos;accompagner.
        </p>

        <h2 className="text-xl font-medium mt-10 mb-4" style={{ color: '#3b0764', fontFamily: 'var(--font-lora)' }}>
          Ce qu&apos;il faut savoir sur la prise en charge
        </h2>
        <p className="leading-relaxed mb-4">
          La psychomotricité est remboursée par la Sécu uniquement sur prescription médicale dans
          des cas spécifiques (60%, complété par la mutuelle). Les listes d&apos;attente sont souvent
          longues — plusieurs mois dans les grandes villes. N&apos;attendez pas d&apos;être face
          à une urgence pour chercher.
        </p>

        <div className="rounded-3xl p-8 mt-12" style={{ backgroundColor: '#f5f3ff', border: '1px solid #ede9fe' }}>
          <p className="text-base font-medium mb-2" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>
            Des psychomotriciens diplômés d&apos;État, en cabinet et en visio
          </p>
          <p className="text-sm mb-5" style={{ color: '#57534e' }}>
            Consulter un psychomotricien ne signifie pas que votre enfant &laquo;&nbsp;a un
            problème&nbsp;&raquo;. Cela signifie que vous prenez ses difficultés au sérieux.
            Sur Holistia, tous justifient de leur diplôme d&apos;État.
          </p>
          <a
            href="/recherche"
            className="inline-block text-white text-sm px-6 py-3 rounded-2xl font-medium"
            style={{ backgroundColor: '#6b21a8' }}
          >
            Trouver un psychomotricien →
          </a>
        </div>

      </article>

      {/* RETOUR BLOG */}
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <a href="/blog" className="text-sm" style={{ color: '#78716c' }}>← Retour au blog</a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Psychomotricien pour enfant : pour quels troubles, à quel âge, et comment ça se passe vraiment",
            description: "Beaucoup de parents entendent \"consultez un psychomotricien\" sans vraiment savoir ce que ça implique. Voici tout ce qu'il faut savoir.",
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80',
            datePublished: '2026-05-12',
            dateModified: '2026-05-12',
            author: { '@type': 'Organization', name: 'Holistia' },
            publisher: {
              '@type': 'Organization',
              name: 'Holistia',
              url: 'https://plateforme-holistique.vercel.app',
            },
            mainEntityOfPage: 'https://plateforme-holistique.vercel.app/blog/psychomotricien-enfant',
          }),
        }}
      />

    </main>
  )
}
