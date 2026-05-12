import { Metadata } from 'next'
import OsteopathieClient from './OsteopathieClient'

export const metadata: Metadata = {
  title: 'Ostéopathie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Soulagez vos douleurs et retrouvez votre mobilité grâce au toucher thérapeutique. Trouvez un ostéopathe vérifié près de chez vous sur Holistia.",
  openGraph: {
    title: 'Ostéopathie : praticiens vérifiés et consultation en ligne',
    description: "Douleurs de dos, cervicalgies, troubles fonctionnels — trouvez un ostéopathe vérifié disponible rapidement près de chez vous.",
    type: 'website',
  },
}

export default function OsteopathiePage() {
  return <OsteopathieClient />
}
