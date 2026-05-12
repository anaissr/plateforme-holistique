import { Metadata } from 'next'
import PsychopraticienClient from './PsychopraticienClient'

export const metadata: Metadata = {
  title: 'Psychopraticien : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Un accompagnement bienveillant pour traverser les difficultés émotionnelles et relationnelles. Trouvez un psychopraticien vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Psychopraticien : praticiens vérifiés et consultation en ligne',
    description: "Mal-être, difficultés relationnelles, anxiété, deuil — trouvez un psychopraticien vérifié disponible en cabinet ou en visio.",
    type: 'website',
  },
}

export default function PsychopraticienPage() {
  return <PsychopraticienClient />
}
