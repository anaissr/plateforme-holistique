import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Orientation — Trouvez le bon accompagnement",
  description: "Décrivez votre situation et Holistia vous oriente vers les praticiens les plus adaptés à vos besoins — stress, douleurs, sommeil, burn-out et plus.",
  openGraph: {
    title: "Orientation — Trouvez le bon accompagnement | Holistia",
    description: "Décrivez votre situation, on vous oriente vers les bons praticiens en médecine alternative.",
    url: "https://plateforme-holistique.vercel.app/orientation",
  },
  twitter: {
    card: "summary",
    title: "Orientation — Trouvez le bon accompagnement | Holistia",
    description: "Décrivez votre situation, on vous oriente vers les bons praticiens.",
  },
}

export default function OrientationLayout({ children }: { children: React.ReactNode }) {
  return children
}
