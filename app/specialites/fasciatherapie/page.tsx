import { Metadata } from 'next'
import FasciatherapieClient from './FasciatherapieClient'

export const metadata: Metadata = {
  title: 'Fasciathérapie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Libérez les tensions profondes du corps grâce au travail sur les fascias. Trouvez un fasciathérapeute vérifié près de chez vous sur Holistia.",
  openGraph: {
    title: 'Fasciathérapie : praticiens vérifiés et consultation en ligne',
    description: "Douleurs chroniques, tensions profondes, récupération — trouvez un fasciathérapeute vérifié disponible en cabinet.",
    type: 'website',
  },
}

export default function FasciatherapiePage() {
  return <FasciatherapieClient />
}
