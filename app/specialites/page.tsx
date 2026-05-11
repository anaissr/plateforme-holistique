import { Metadata } from 'next'
import SpecialitesClient from './SpecialitesClient'

export const metadata: Metadata = {
  title: 'Toutes les spécialités holistiques — naturopathie, sophrologie, ostéopathie... | Holistia',
  description: 'Découvrez toutes les spécialités de médecines douces disponibles sur Holistia : naturopathie, sophrologie, ostéopathie, acupuncture, hypnothérapie, EMDR et bien d\'autres.',
  openGraph: {
    title: 'Toutes les spécialités holistiques — naturopathie, sophrologie, ostéopathie...',
    description: 'Plus de 15 spécialités de médecines douces avec des praticiens vérifiés disponibles en cabinet ou en visio.',
    type: 'website',
  },
}

export default function SpecialitesPage() {
  return <SpecialitesClient />
}
