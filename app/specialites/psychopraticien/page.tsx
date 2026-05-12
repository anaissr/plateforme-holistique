import { Metadata } from 'next'
import PsychopraticienClient from './PsychopraticienClient'

export const metadata: Metadata = {
  title: 'Psychopraticien : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Un accompagnement bienveillant pour traverser les difficultés émotionnelles et relationnelles. Trouvez un psychopraticien vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Psychopraticien : praticiens vérifiés et consultation en ligne',
    description: "Mal-être, difficultés relationnelles, anxiété, deuil — trouvez un psychopraticien vérifié disponible en cabinet ou en visio.",
    type: 'website',
    images: [
      {
        url: 'https://plus.unsplash.com/premium_photo-1672292536640-20103a871b7e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Psychopraticien ',
      },
    ],
  },
}

export default function PsychopraticienPage() {
  return <PsychopraticienClient />
}
