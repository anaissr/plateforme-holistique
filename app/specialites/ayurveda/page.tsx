import { Metadata } from 'next'
import AyurvedaClient from './AyurvedaClient'

export const metadata: Metadata = {
  title: 'Ayurveda : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Retrouvez l'équilibre corps-esprit grâce à la médecine traditionnelle indienne. Trouvez un praticien Ayurveda vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Ayurveda : praticiens vérifiés et consultation en ligne',
    description: "Bilan dosha, alimentation, rituels, massages — trouvez un praticien Ayurveda vérifié disponible en cabinet ou en visio.",
    type: 'website',
  },
}

export default function AyurvedaPage() {
  return <AyurvedaClient />
}
