import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mon espace patient",
  description: "Gérez vos rendez-vous et consultez votre historique sur Holistia.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return children
}
