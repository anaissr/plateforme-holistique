import { Metadata } from 'next'
import NaturopathieClient from './NaturopathieClient'

export const metadata: Metadata = {
  title: 'Naturopathie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Une approche globale de votre santé par l'alimentation, les plantes et l'hygiène de vie. Trouvez un naturopathe vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Naturopathie : praticiens vérifiés et consultation en ligne',
    description: "Trouvez un naturopathe vérifié pour un accompagnement personnalisé — alimentation, phytothérapie, rééquilibrage hormonal, fatigue chronique.",
    type: 'website',
  },
}

export default function NaturopathiePage() {
  return <NaturopathieClient />
}
