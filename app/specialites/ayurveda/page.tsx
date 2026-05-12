import { Metadata } from 'next'
import AyurvedaClient from './AyurvedaClient'

export const metadata: Metadata = {
  title: 'Ayurveda : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Retrouvez l'équilibre corps-esprit grâce à la médecine traditionnelle indienne. Trouvez un praticien Ayurveda vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Ayurveda : praticiens vérifiés et consultation en ligne',
    description: "Bilan dosha, alimentation, rituels, massages — trouvez un praticien Ayurveda vérifié disponible en cabinet ou en visio.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Ayurveda ',
      },
    ],
  },
}

export default function AyurvedaPage() {
  return <AyurvedaClient />
}
