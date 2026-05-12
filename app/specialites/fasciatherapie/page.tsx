import { Metadata } from 'next'
import FasciatherapieClient from './FasciatherapieClient'

export const metadata: Metadata = {
  title: 'Fasciathérapie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Libérez les tensions profondes du corps grâce au travail sur les fascias. Trouvez un fasciathérapeute vérifié près de chez vous sur Holistia.",
  openGraph: {
    title: 'Fasciathérapie : praticiens vérifiés et consultation en ligne',
    description: "Douleurs chroniques, tensions profondes, récupération — trouvez un fasciathérapeute vérifié disponible en cabinet.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Fasciathérapie ',
      },
    ],
  },
}

export default function FasciatherapiePage() {
  return <FasciatherapieClient />
}
