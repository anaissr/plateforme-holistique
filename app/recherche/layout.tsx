import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Trouver un praticien",
  description: "Recherchez parmi nos praticiens certifiés en médecine alternative — naturopathie, sophrologie, ostéopathie, hypnothérapie et plus. Consultation en cabinet ou en visio.",
  openGraph: {
    title: "Trouver un praticien | Holistia",
    description: "Recherchez parmi nos praticiens certifiés en médecine alternative. Consultation en cabinet ou en visio, partout dans le monde francophone.",
    url: "https://plateforme-holistique.vercel.app/recherche",
    images: [
      {
        url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Recherche de praticiens Holistia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trouver un praticien | Holistia",
    description: "Recherchez parmi nos praticiens certifiés en médecine alternative.",
    images: ["https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1200&h=630&fit=crop&crop=center"],
  },
}

export default function RechercheLayout({ children }: { children: React.ReactNode }) {
  return children
}
