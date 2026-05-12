import { Metadata } from 'next'
import NaturopathieClient from './NaturopathieClient'

export const metadata: Metadata = {
  title: 'Naturopathie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Une approche globale de votre santé par l'alimentation, les plantes et l'hygiène de vie. Trouvez un naturopathe vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Naturopathie : praticiens vérifiés et consultation en ligne',
    description: "Trouvez un naturopathe vérifié pour un accompagnement personnalisé — alimentation, phytothérapie, rééquilibrage hormonal, fatigue chronique.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Naturopathie ',
      },
    ],
  },
}

export default function NaturopathiePage() {
  return <NaturopathieClient />
}
