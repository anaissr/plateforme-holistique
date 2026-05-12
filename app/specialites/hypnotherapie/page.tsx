import { Metadata } from 'next'
import HypnotherapieClient from './HypnotherapieClient'

export const metadata: Metadata = {
  title: 'Hypnothérapie : praticiens vérifiés, tarifs et prise de RDV en ligne | Holistia',
  description: "Accédez à vos ressources profondes pour transformer durablement vos comportements. Trouvez un hypnothérapeute vérifié près de chez vous ou en visio sur Holistia.",
  openGraph: {
    title: 'Hypnothérapie : praticiens vérifiés et consultation en ligne',
    description: "Phobies, addictions, confiance en soi, traumatismes — trouvez un hypnothérapeute vérifié disponible en cabinet ou en visio.",
    type: 'website',
  },
}

export default function HypnotherapiePage() {
  return <HypnotherapieClient />
}
