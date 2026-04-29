import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Trouver un praticien",
  description: "Recherchez parmi nos praticiens certifiés en médecine alternative — naturopathie, sophrologie, ostéopathie, hypnothérapie et plus. Consultation en cabinet ou en visio.",
  openGraph: {
    title: "Trouver un praticien | Holistia",
    description: "Recherchez parmi nos praticiens certifiés en médecine alternative. Consultation en cabinet ou en visio, partout dans le monde francophone.",
    url: "https://plateforme-holistique.vercel.app/recherche",
  },
  twitter: {
    title: "Trouver un praticien | Holistia",
    description: "Recherchez parmi nos praticiens certifiés en médecine alternative.",
  },
}

export default function RechercheLayout({ children }: { children: React.ReactNode }) {
  return children
}
