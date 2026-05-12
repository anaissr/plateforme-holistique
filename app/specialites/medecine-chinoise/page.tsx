import { Metadata } from 'next'
import MedecineChinoiseClient from './MedecineChinoiseClient'

export const metadata: Metadata = {
  title: 'Médecine traditionnelle chinoise : praticiens vérifiés, prise de RDV | Holistia',
  description: "Rééquilibrez votre énergie vitale grâce à 3000 ans de sagesse médicale chinoise. Trouvez un praticien en médecine chinoise vérifié près de chez vous sur Holistia.",
  openGraph: {
    title: 'Médecine traditionnelle chinoise : praticiens vérifiés',
    description: "Acupuncture, diététique chinoise, phytothérapie chinoise, tuina — trouvez un praticien vérifié disponible en cabinet.",
    type: 'website',
  },
}

export default function MedecineChinoisePage() {
  return <MedecineChinoiseClient />
}
