import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ateliers bien-être",
  description: "Participez à des ateliers en ligne animés par des praticiens certifiés — sophrologie, naturopathie, méditation, Ayurveda et plus. En visio, accessibles partout.",
  openGraph: {
    title: "Ateliers bien-être | Holistia",
    description: "Ateliers animés par des praticiens certifiés — sophrologie, naturopathie, méditation. En visio, accessibles partout dans le monde francophone.",
    url: "https://plateforme-holistique.vercel.app/ateliers",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Ateliers bien-être Holistia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateliers bien-être | Holistia",
    description: "Ateliers animés par des praticiens certifiés, en visio.",
    images: ["https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=630&fit=crop&crop=center"],
  },
}

export default function AteliersLayout({ children }: { children: React.ReactNode }) {
  return children
}
