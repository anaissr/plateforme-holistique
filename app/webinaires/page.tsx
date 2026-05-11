import { Metadata } from 'next'
import WebinairesClient from './WebinairesClient'

export const metadata: Metadata = {
  title: 'Webinaires bien-être — rencontres en ligne avec des praticiens experts | Holistia',
  description: 'Participez à des webinaires animés par nos praticiens experts en médecines douces. Thèmes variés : stress, sommeil, alimentation, énergie. Gratuits ou accessibles à tous.',
  openGraph: {
    title: 'Webinaires bien-être — rencontres en ligne avec des praticiens experts',
    description: 'Des rencontres en ligne pour mieux comprendre les médecines douces et leurs interactions avec votre santé au quotidien.',
    type: 'website',
  },
}

export default function WebinairesPage() {
  return <WebinairesClient />
}
