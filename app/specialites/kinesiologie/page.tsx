import { Metadata } from 'next'
import KinesiologieClient from './KinesiologieClient'

export const metadata: Metadata = {
  title: 'Kinésiologie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Libérez les blocages physiques et émotionnels grâce au test musculaire. Trouvez un kinésiologue vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Kinésiologie : praticiens vérifiés et consultation en ligne',
    description: "Blocages émotionnels, stress, apprentissage, douleurs — trouvez un kinésiologue vérifié disponible en cabinet ou en visio.",
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/5793809/pexels-photo-5793809.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Kinésiologie ',
      },
    ],
  },
}

export default function KinesiologiePage() {
  return <KinesiologieClient />
}
