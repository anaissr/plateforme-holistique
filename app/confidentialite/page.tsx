import Nav from '@/app/components/Nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Holistia',
  description: 'Comment Holistia collecte, utilise et protège vos données personnelles. Conformité RGPD.',
}

export default function Confidentialite() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <Nav />

      <section className="px-6 py-16 text-center" style={{ background: 'linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)' }}>
        <h1 className="text-4xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-lora)' }}>
          Politique de confidentialité
        </h1>
        <p className="text-sm" style={{ color: '#c4b5fd' }}>Dernière mise à jour : 12 mai 2026</p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-8" style={{ color: '#44403c' }}>

        {[
          {
            titre: '1. Responsable du traitement',
            texte: "Holistia SAS est responsable du traitement de vos données personnelles au sens du Règlement Général sur la Protection des Données (RGPD). Contact DPO : privacy@holistia.fr",
          },
          {
            titre: '2. Données collectées',
            texte: "Nous collectons les données que vous nous fournissez directement : nom, prénom, adresse email, numéro de téléphone (optionnel), localisation (optionnelle), historique de rendez-vous. Nous collectons également des données de navigation via des cookies techniques nécessaires au fonctionnement de la Plateforme.",
          },
          {
            titre: '3. Finalités du traitement',
            texte: "Vos données sont utilisées pour : (a) la gestion de votre compte et de vos rendez-vous ; (b) la mise en relation avec les praticiens ; (c) l'envoi de confirmations et rappels de rendez-vous ; (d) l'amélioration de nos services ; (e) la prévention des fraudes. Nous n'utilisons pas vos données à des fins publicitaires tierces.",
          },
          {
            titre: '4. Base légale',
            texte: "Le traitement de vos données repose sur : (a) l'exécution du contrat de services pour la gestion de votre compte et vos rendez-vous ; (b) votre consentement pour les communications marketing optionnelles ; (c) notre intérêt légitime pour l'amélioration du service et la prévention des fraudes.",
          },
          {
            titre: '5. Données de santé',
            texte: "Les informations relatives à votre santé que vous partagez avec un praticien via la Plateforme constituent des données de santé au sens du RGPD. Leur traitement repose sur votre consentement explicite. Ces données ne sont accessibles qu'au praticien concerné et, avec votre accord, aux autres praticiens de votre équipe de soin.",
          },
          {
            titre: '6. Conservation des données',
            texte: "Vos données de compte sont conservées pendant la durée de votre relation avec Holistia et 3 ans après votre dernière activité. Les données de santé sont conservées 10 ans conformément aux obligations légales applicables aux dossiers médicaux.",
          },
          {
            titre: '7. Partage des données',
            texte: "Nous ne vendons jamais vos données. Nous pouvons partager vos données avec : (a) les praticiens que vous consultez ; (b) nos prestataires techniques (hébergement Vercel, base de données Supabase, paiement Stripe) dans le respect du RGPD ; (c) les autorités si la loi l'exige.",
          },
          {
            titre: '8. Vos droits',
            texte: "Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation du traitement, portabilité, opposition. Pour exercer vos droits : privacy@holistia.fr. Vous avez également le droit de déposer une plainte auprès de la CNIL (cnil.fr).",
          },
          {
            titre: '9. Cookies',
            texte: "Holistia utilise uniquement des cookies techniques nécessaires au fonctionnement de la Plateforme (authentification, préférences). Aucun cookie publicitaire ou de suivi tiers n'est utilisé sans votre consentement explicite.",
          },
          {
            titre: '10. Transferts hors UE',
            texte: "Certains de nos prestataires (Vercel, Supabase) peuvent traiter vos données hors de l'Union Européenne. Ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne.",
          },
        ].map((section) => (
          <section key={section.titre}>
            <h2 className="text-lg font-medium mb-3" style={{ color: '#6b21a8', fontFamily: 'var(--font-lora)' }}>{section.titre}</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#57534e' }}>{section.texte}</p>
          </section>
        ))}

        <p className="text-xs mt-4" style={{ color: '#a8a29e' }}>
          Pour toute question relative à vos données : <a href="mailto:privacy@holistia.fr" style={{ color: '#6b21a8' }}>privacy@holistia.fr</a>
        </p>

      </div>
    </main>
  )
}
