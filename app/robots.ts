import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/admin', '/patient', '/connexion', '/inscription'],
    },
    sitemap: 'https://plateforme-holistique.vercel.app/sitemap.xml',
  }
}
