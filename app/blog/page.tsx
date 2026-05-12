import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Holistia — Ressources sur les médecines douces et le bien-être',
  description: 'Articles écrits avec nos praticiens experts pour mieux comprendre les médecines douces, prendre soin de vous et de votre famille.',
}

const ARTICLES = [
  {
    slug: 'comment-choisir-son-naturopathe',
    titre: 'Comment choisir son naturopathe — et éviter les pièges',
    extrait: "Avec la prolifération des praticiens aux formations très disparates, choisir son naturopathe n'est pas anodin. Voici ce que vous devez vraiment savoir avant de prendre rendez-vous.",
    categorie: 'Naturopathie',
    date: '12 mai 2026',
    lecture: '5 min',
    photo: 'https://images.unsplash.com/photo-1666858619985-701e36b3bc57?w=200&auto=format&fit=crop&q=60',
  },
  {
    slug: 'fasciatherapie-tout-comprendre',
    titre: 'La fasciathérapie : la pratique dont tout le monde parle sans savoir ce que c\'est vraiment',
    extrait: "Les sportifs en parlent, les praticiens en médecines douces aussi. Mais qu'est-ce que la fasciathérapie vraiment — et pour quels problèmes consulter ?",
    categorie: 'Fasciathérapie',
    date: '12 mai 2026',
    lecture: '5 min',
    photo: 'https://images.pexels.com/photos/10893346/pexels-photo-10893346.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    slug: 'psychomotricien-enfant',
    titre: 'Psychomotricien pour enfant : pour quels troubles, à quel âge, et comment ça se passe vraiment',
    extrait: "\"On m'a conseillé de consulter un psychomotricien pour mon enfant.\" Beaucoup de parents entendent cette phrase sans vraiment savoir ce que ça implique. Voici tout ce qu'il faut savoir.",
    categorie: 'Psychomotricité',
    date: '12 mai 2026',
    lecture: '6 min',
    photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&q=75',
  },
  {
    slug: 'osteopathe-ou-kinesitherapeute',
    titre: 'Ostéopathe ou kinésithérapeute : lequel consulter en premier ?',
    extrait: "Ils traitent souvent les mêmes symptômes, mais leur approche est fondamentalement différente. Voici comment choisir — et pourquoi la vraie réponse dépend de ce que vous traversez maintenant.",
    categorie: 'Ostéopathie',
    date: '12 mai 2026',
    lecture: '5 min',
    photo: 'https://images.unsplash.com/photo-1699523229208-be1e1dd9252d?w=200&auto=format&fit=crop&q=60',
  },
  {
    slug: 'sophrologie-et-anxiete',
    titre: 'Sophrologie et anxiété : ce que la science dit vraiment (et ce qu\'elle ne dit pas encore)',
    extrait: "La sophrologie est devenue l'une des approches les plus prescrites par les médecins français pour l'anxiété. Mais qu'est-ce que la science dit vraiment — et pour qui ça fonctionne le mieux ?",
    categorie: 'Sophrologie',
    date: '12 mai 2026',
    lecture: '6 min',
    photo: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&q=75',
  },
  {
    slug: 'harcelement-scolaire',
    titre: 'Harcèlement scolaire : comment les approches holistiques peuvent aider votre enfant',
    extrait: "Le harcèlement scolaire laisse des traces profondes — anxiété, repli sur soi, troubles du sommeil. Approche systémique, EMDR, psychomotricité : ces thérapies complémentaires offrent des outils puissants pour aider les enfants à se reconstruire.",
    categorie: 'Enfants & adolescents',
    date: '2 mai 2026',
    lecture: '6 min',
    photo: 'https://plus.unsplash.com/premium_photo-1661373604896-48e3fa2ff3ef?w=200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'burn-out',
    titre: 'Burn-out : reconnaître les signaux et se reconstruire grâce aux médecines douces',
    extrait: "Épuisement total, perte de sens, corps qui lâche — le burn-out touche autant la vie personnelle que professionnelle. Naturopathie, hypnothérapie, psychothérapie : comment se reconstruire en profondeur.",
    categorie: 'Santé mentale',
    date: '8 mai 2026',
    lecture: '7 min',
    photo: 'https://plus.unsplash.com/premium_photo-1678980766534-c8be07e3c92a?w=200&auto=format&fit=crop&q=80',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      {/* HERO */}
      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <span className="inline-block text-xs px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e9d5ff' }}>
          ✍️ Ressources & conseils
        </span>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Le Blog Holistia
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#d8b4fe' }}>
          Des articles écrits avec nos praticiens experts pour mieux comprendre les différentes spécialités et pratiques — et comment elles peuvent s'intégrer dans un parcours de soin holistique.
        </p>
      </section>

      {/* ARTICLES */}
      <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-6">
        {ARTICLES.map((article) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="bg-white rounded-3xl p-8 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow"
            style={{ border: '1px solid #e7e5e4', textDecoration: 'none' }}
          >
            <img
              src={article.photo}
              alt={article.titre}
              className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#f5f3ff', color: '#6b21a8' }}>
                  {article.categorie}
                </span>
                <span className="text-xs" style={{ color: '#78716c' }}>{article.date} · {article.lecture} de lecture</span>
              </div>
              <h2 className="text-lg font-medium mb-2 leading-snug" style={{ color: '#1c1917', fontFamily: 'var(--font-lora)' }}>
                {article.titre}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>
                {article.extrait}
              </p>
              <p className="text-sm font-medium mt-4" style={{ color: '#6b21a8' }}>Lire l'article →</p>
            </div>
          </a>
        ))}
      </section>

    </main>
  )
}
