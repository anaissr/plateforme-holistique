import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Toutes les spécialités",
  description: "Découvrez toutes les spécialités de médecine alternative disponibles sur Holistia — sophrologie, naturopathie, ostéopathie, hypnothérapie, acupuncture, kinésiologie et plus.",
  openGraph: {
    title: "Toutes les spécialités | Holistia",
    description: "Sophrologie, naturopathie, ostéopathie, hypnothérapie, acupuncture, kinésiologie — découvrez toutes les spécialités disponibles.",
    url: "https://plateforme-holistique.vercel.app/specialites",
  },
  twitter: {
    card: "summary",
    title: "Toutes les spécialités | Holistia",
    description: "Sophrologie, naturopathie, ostéopathie, hypnothérapie et plus.",
  },
}

export default function SpecialitesLayout({ children }: { children: React.ReactNode }) {
  return children
}
