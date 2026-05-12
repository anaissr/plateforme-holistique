import { Metadata } from 'next'
import TherapiesBrevesClient from './TherapiesBrevesClient'

export const metadata: Metadata = {
  title: 'Thérapies brèves : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Des résultats concrets en peu de séances grâce aux approches Palo Alto, TCC et EMDR. Trouvez un thérapeute bref vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Thérapies brèves : praticiens vérifiés et consultation en ligne',
    description: "Phobies, anxiété, blocages, relations — des solutions concrètes en peu de séances avec des thérapeutes vérifiés.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Thérapies brèves ',
      },
    ],
  },
}

export default function TherapiesBrevesPage() {
  return <TherapiesBrevesClient />
}
