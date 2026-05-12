import { Metadata } from 'next'
import ReflexologieClient from './ReflexologieClient'

export const metadata: Metadata = {
  title: 'Réflexologie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Stimulez les zones réflexes de vos pieds pour agir sur l'ensemble de votre corps. Trouvez un réflexologue vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Réflexologie : praticiens vérifiés et consultation en ligne',
    description: "Stress, troubles digestifs, fatigue, sommeil — trouvez un réflexologue vérifié disponible en cabinet ou en visio.",
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/19695971/pexels-photo-19695971.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Réflexologie ',
      },
    ],
  },
}

export default function ReflexologiePage() {
  return <ReflexologieClient />
}
