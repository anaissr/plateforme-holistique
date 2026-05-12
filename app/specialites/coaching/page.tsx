import { Metadata } from 'next'
import CoachingClient from './CoachingClient'

export const metadata: Metadata = {
  title: 'Coaching de vie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Atteignez vos objectifs et révélez votre potentiel grâce à un accompagnement sur-mesure. Trouvez un coach de vie vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Coaching de vie : praticiens vérifiés et consultation en ligne',
    description: "Objectifs personnels ou professionnels, confiance en soi, reconversion — trouvez un coach de vie vérifié disponible en visio.",
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Coaching ',
      },
    ],
  },
}

export default function CoachingPage() {
  return <CoachingClient />
}
