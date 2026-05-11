import { Metadata } from 'next'
import { createClient } from '@supabase/supabase-js'
import FichePraticienClient from './FichePraticienClient'

const BASE_URL = 'https://plateforme-holistique.vercel.app'

async function getPraticienMeta(id: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data } = await supabase
    .from('praticiens')
    .select('nom, specialite, ville, bio, photo')
    .eq('id', id)
    .single()
  return data
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params
  const p = await getPraticienMeta(id)
  if (!p) return { title: 'Praticien — Holistia' }

  const description = p.bio
    ? p.bio.slice(0, 155)
    : `Consultez ${p.nom}, ${p.specialite} à ${p.ville}. Prise de RDV en ligne sur Holistia.`

  return {
    title: `${p.nom} — ${p.specialite} à ${p.ville} | Holistia`,
    description,
    openGraph: {
      title: `${p.nom} — ${p.specialite} à ${p.ville}`,
      description,
      type: 'profile',
      ...(p.photo && {
        images: [{ url: p.photo, width: 400, height: 400, alt: `${p.nom} — ${p.specialite} à ${p.ville}` }],
      }),
    },
  }
}

export default async function FichePraticienPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const p = await getPraticienMeta(id)

  const jsonLd = p
    ? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: p.nom,
        jobTitle: p.specialite,
        address: {
          '@type': 'PostalAddress',
          addressLocality: p.ville,
          addressCountry: 'FR',
        },
        url: `${BASE_URL}/praticien/${id}`,
        ...(p.photo && { image: p.photo }),
        ...(p.bio && { description: p.bio.slice(0, 300) }),
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <FichePraticienClient />
    </>
  )
}
