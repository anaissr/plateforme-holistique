import type { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

const BASE_URL = 'https://plateforme-holistique.vercel.app'

const PAGES_STATIQUES: MetadataRoute.Sitemap = [
  { url: BASE_URL,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
  { url: `${BASE_URL}/recherche`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
  { url: `${BASE_URL}/blog`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
  { url: `${BASE_URL}/ateliers`,                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
  { url: `${BASE_URL}/specialites`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/orientation`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/webinaires`,              lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
  { url: `${BASE_URL}/inscription`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE_URL}/qui-sommes-nous`,         lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE_URL}/charte-qualite`,          lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.5 },
  { url: `${BASE_URL}/mentions-legales`,        lastModified: new Date('2026-05-12'), changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/cgu`,                     lastModified: new Date('2026-05-12'), changeFrequency: 'yearly',  priority: 0.3 },
  { url: `${BASE_URL}/confidentialite`,         lastModified: new Date('2026-05-12'), changeFrequency: 'yearly',  priority: 0.3 },

  // Articles de blog
  { url: `${BASE_URL}/blog/harcelement-scolaire`,              lastModified: new Date('2026-05-02'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog/burn-out`,                          lastModified: new Date('2026-05-08'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog/comment-choisir-son-naturopathe`,  lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog/sophrologie-et-anxiete`,           lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog/osteopathe-ou-kinesitherapeute`,   lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog/fasciatherapie-tout-comprendre`,   lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog/psychomotricien-enfant`,           lastModified: new Date('2026-05-12'), changeFrequency: 'monthly', priority: 0.7 },

  // Pages spécialités
  ...([
    'osteopathie', 'fasciatherapie', 'kinesitherapie', 'kinesiologie', 'reflexologie',
    'ergotherapie', 'psychomotricite', 'podologie', 'chiropractie', 'yoga-therapeutique',
    'pilates-therapeutique', 'acupuncture', 'sophrologie', 'hypnotherapie', 'therapies-breves',
    'psychopraticien', 'coaching', 'emdr', 'eft', 'sexologie', 'approche-systemique',
    'therapie-de-couple', 'orthophonie', 'reiki', 'homeopathie', 'ayurveda',
    'medecine-chinoise', 'naturopathie', 'dietetique-nutrition', 'phytotherapie', 'aromatherapie',
  ].map((slug) => ({
    url: `${BASE_URL}/specialites/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))),
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let praticienUrls: MetadataRoute.Sitemap = []

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data, error } = await supabase
      .from('praticiens')
      .select('id, created_at')
      .eq('valide', true)
      .eq('actif', true)

    if (!error && data) {
      praticienUrls = data.map((p) => ({
        url: `${BASE_URL}/praticien/${p.id}`,
        lastModified: p.created_at ? new Date(p.created_at) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    }
  } catch {
    // Si Supabase est indisponible, on retourne quand même les pages statiques
  }

  return [...PAGES_STATIQUES, ...praticienUrls]
}
