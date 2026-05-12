import { Metadata } from 'next'
import OsteopathieClient from './OsteopathieClient'

export const metadata: Metadata = {
  title: 'Ostéopathie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Soulagez vos douleurs et retrouvez votre mobilité grâce au toucher thérapeutique. Trouvez un ostéopathe vérifié près de chez vous sur Holistia.",
  openGraph: {
    title: 'Ostéopathie : praticiens vérifiés et consultation en ligne',
    description: "Douleurs de dos, cervicalgies, troubles fonctionnels — trouvez un ostéopathe vérifié disponible rapidement près de chez vous.",
    type: 'website',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1663075848781-6ae8daf22936?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Ostéopathie ',
      },
    ],
  },
}

export default function OsteopathiePage() {
  return <OsteopathieClient />
}
