import { Metadata } from 'next'
import AteliersClient from './AteliersClient'

export const metadata: Metadata = {
  title: 'Ateliers bien-être en ligne — sophrologie, naturopathie, méditation | Holistia',
  description: 'Participez à des ateliers bien-être animés par des praticiens vérifiés. Sophrologie, naturopathie, méditation, Ayurveda — en visio ou en présentiel, en petits groupes.',
  openGraph: {
    title: 'Ateliers bien-être en ligne — sophrologie, naturopathie, méditation',
    description: 'Des ateliers en petits groupes animés par des praticiens vérifiés pour découvrir les médecines douces à votre rythme.',
    type: 'website',
  },
}

export default function AteliersPage() {
  return <AteliersClient />
}
