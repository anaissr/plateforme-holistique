import { Metadata } from 'next'
import OrientationClient from './OrientationClient'

export const metadata: Metadata = {
  title: 'Orientation personnalisée — trouver la bonne thérapie holistique | Holistia',
  description: 'Répondez à quelques questions et découvrez quelle approche holistique correspond à vos besoins : sophrologie, naturopathie, hypnothérapie, EMDR, psychomotricité...',
  openGraph: {
    title: 'Orientation personnalisée — trouver la bonne thérapie holistique',
    description: 'Un outil simple pour identifier quelle médecine douce correspond à votre situation en quelques clics.',
    type: 'website',
  },
}

export default function OrientationPage() {
  return <OrientationClient />
}
