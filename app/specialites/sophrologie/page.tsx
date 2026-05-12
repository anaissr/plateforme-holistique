import { Metadata } from 'next'
import SophrologieClient from './SophrologieClient'

export const metadata: Metadata = {
  title: 'Sophrologie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Retrouvez calme, confiance et équilibre grâce à la respiration et la relaxation. Trouvez un sophrologue vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Sophrologie : praticiens vérifiés et consultation en ligne',
    description: "Gestion du stress, confiance en soi, troubles du sommeil — trouvez un sophrologue vérifié disponible en cabinet ou en visio.",
    type: 'website',
  },
}

export default function SophrologiePage() {
  return <SophrologieClient />
}
