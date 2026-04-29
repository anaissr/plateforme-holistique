import type { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const { data } = await supabase
    .from('praticiens')
    .select('nom, specialite, bio, photo, ville')
    .eq('id', id)
    .single()

  if (!data) {
    return { title: "Praticien introuvable" }
  }

  const titre = `${data.nom} — ${data.specialite}`
  const description = data.bio
    ? data.bio.slice(0, 160)
    : `Consultez le profil de ${data.nom}, ${data.specialite}${data.ville ? ` à ${data.ville}` : ''}, sur Holistia.`

  return {
    title: titre,
    description,
    openGraph: {
      title: `${titre} | Holistia`,
      description,
      url: `https://plateforme-holistique.vercel.app/praticien/${id}`,
      ...(data.photo ? { images: [{ url: data.photo, width: 400, height: 400, alt: data.nom }] } : {}),
    },
    twitter: {
      title: `${titre} | Holistia`,
      description,
      ...(data.photo ? { images: [data.photo] } : {}),
    },
  }
}

export default function PraticienLayout({ children }: { children: React.ReactNode }) {
  return children
}
