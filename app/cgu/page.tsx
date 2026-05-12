import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation | Holistia',
  description: 'Conditions générales d\'utilisation de la plateforme Holistia pour les patients et les praticiens.',
}

export default function CGU() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>Dernière mise à jour : 12 mai 2026</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8" style={{ color: '#44403c' }}>

        {[
          {
            titre: '1. Objet',
            texte: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Holistia (ci-après « la Plateforme »), accessible à l'adresse holistia.fr, éditée par Holistia SAS. En accédant à la Plateforme, vous acceptez sans réserve les présentes CGU.",
          },
          {
            titre: '2. Description du service',
            texte: "Holistia est une plateforme de mise en relation entre des utilisateurs recherchant des soins complémentaires et holistiques (ci-après « Patients ») et des praticiens en médecines douces (ci-après « Praticiens »). Holistia ne fournit pas directement des soins de santé et n'est pas un prestataire médical.",
          },
          {
            titre: '3. Inscription et compte utilisateur',
            texte: "L'utilisation de certaines fonctionnalités de la Plateforme requiert la création d'un compte. Vous vous engagez à fournir des informations exactes et à maintenir la confidentialité de vos identifiants. Holistia se réserve le droit de suspendre ou supprimer tout compte dont les informations s'avèrent inexactes ou frauduleuses.",
          },
          {
            titre: '4. Obligations des Praticiens',
            texte: "Les Praticiens s'engagent à : (a) fournir des informations exactes sur leur formation et expérience ; (b) maintenir une assurance responsabilité civile professionnelle valide ; (c) respecter les règles déontologiques de leur profession ; (d) ne pas effectuer de promesses thérapeutiques abusives ; (e) ne pas déconseiller à leurs patients de suivre un traitement médical prescrit.",
          },
          {
            titre: '5. Responsabilité',
            texte: "Holistia agit en qualité d'intermédiaire et ne peut être tenue responsable de la qualité des prestations fournies par les Praticiens référencés, ni des préjudices résultant de l'utilisation de la Plateforme. Les Praticiens exercent sous leur propre responsabilité et sont seuls responsables des soins dispensés.",
          },
          {
            titre: '6. Données personnelles',
            texte: "Le traitement des données personnelles est régi par notre Politique de confidentialité, consultable sur la Plateforme. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données.",
          },
          {
            titre: '7. Propriété intellectuelle',
            texte: "Tous les éléments de la Plateforme (contenus, design, code, marques) sont protégés par le droit de la propriété intellectuelle et appartiennent à Holistia SAS ou font l'objet de licences accordées à Holistia. Toute reproduction non autorisée est interdite.",
          },
          {
            titre: '8. Modifications et résiliation',
            texte: "Holistia se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle par email. La poursuite de l'utilisation de la Plateforme après notification vaut acceptation des nouvelles CGU.",
          },
          {
            titre: '9. Droit applicable',
            texte: "Les présentes CGU sont régies par le droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable avant tout recours judiciaire. À défaut, les tribunaux français seront compétents.",
          },
        ].map((section) => (
          <section key={section.titre}>
            <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{section.titre}</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{section.texte}</p>
          </section>
        ))}

        <p className="text-xs mt-4" style={{ color: '#a8a29e' }}>
          Pour toute question : <a href="mailto:legal@holistia.fr" style={{ color: '#6b21a8' }}>legal@holistia.fr</a>
        </p>

      </div>
    </main>
  )
}
