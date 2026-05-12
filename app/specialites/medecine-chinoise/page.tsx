import { Metadata } from 'next'
import MedecineChinoiseClient from './MedecineChinoiseClient'

export const metadata: Metadata = {
  title: 'Médecine traditionnelle chinoise : praticiens vérifiés, prise de RDV | Holistia',
  description: "Rééquilibrez votre énergie vitale grâce à 3000 ans de sagesse médicale chinoise. Trouvez un praticien en médecine chinoise vérifié près de chez vous sur Holistia.",
  openGraph: {
    title: 'Médecine traditionnelle chinoise : praticiens vérifiés',
    description: "Acupuncture, diététique chinoise, phytothérapie chinoise, tuina — trouvez un praticien vérifié disponible en cabinet.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Médecine traditionnelle chinoise ',
      },
    ],
  },
}

export default function MedecineChinoisePage() {
  return <MedecineChinoiseClient />
}
