import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Rejoindre Holistia — Inscription praticien",
  description: "Créez votre profil de praticien en médecine alternative sur Holistia. Gratuit 12 mois, zéro commission, agenda en ligne et visibilité internationale.",
  openGraph: {
    title: "Rejoindre Holistia — Inscription praticien",
    description: "Créez votre profil gratuitement. Zéro commission, agenda en ligne, visibilité internationale dans le monde francophone.",
    url: "https://plateforme-holistique.vercel.app/inscription",
  },
  twitter: {
    card: "summary",
    title: "Rejoindre Holistia — Inscription praticien",
    description: "Créez votre profil gratuitement. Zéro commission, agenda en ligne.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InscriptionLayout({ children }: { children: React.ReactNode }) {
  return children
}
