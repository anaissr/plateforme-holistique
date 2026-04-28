import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN = 'anais202@hotmail.com'

const styleBase = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
      <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
      <p style="color: #e9d5ff; margin: 8px 0 0; font-size: 14px;">Votre allié pour trouver le bon accompagnement</p>
    </div>
`

const styleFin = `
    <div style="padding: 24px 40px; background: #f5f3ff; border-radius: 0 0 16px 16px; text-align: center;">
      <p style="color: #7c3aed; font-size: 12px; margin: 0;">Holistia · Votre allié bien-être · <a href="https://plateforme-holistique.vercel.app" style="color: #7c3aed;">holistia.fr</a></p>
    </div>
  </div>
`

const bouton = (url: string, texte: string) => `
  <div style="text-align: center; margin: 28px 0;">
    <a href="${url}" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px; display: inline-block;">
      ${texte}
    </a>
  </div>
`

const carteAtelier = (atelier: string, praticien: string, date: string, heure: string, format: string, tarif?: string) => `
  <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #6b21a8;">
    <p style="margin: 0; color: #6b21a8; font-weight: 600; font-size: 16px;">${atelier}</p>
    <p style="margin: 8px 0 0; color: #57534e;">avec <strong>${praticien}</strong></p>
    <p style="margin: 8px 0 0; color: #57534e;">📅 ${date} · ${heure}</p>
    <p style="margin: 8px 0 0; color: #57534e;">📍 ${format}</p>
    ${tarif ? `<p style="margin: 8px 0 0; color: #6b21a8; font-weight: 500;">💶 ${tarif}</p>` : ''}
  </div>
`

export async function POST(request: Request) {
  const body = await request.json()

  try {

    // ═══════════════════════════════════════
    // RÉSERVATION ATELIER
    // ═══════════════════════════════════════
    if (body.type === 'reservation') {

      // Email de confirmation au patient
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `✅ Votre demande de réservation — ${body.atelier}`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.nomPatient} 👋</h2>
            <p style="color: #57534e; line-height: 1.7;">
              Votre demande de réservation a bien été transmise à <strong>${body.praticien}</strong>. 
              Il ou elle vous contactera pour confirmer votre place et organiser le paiement.
            </p>
            ${carteAtelier(body.atelier, body.praticien, body.date, body.heure, body.format)}
            ${bouton('https://plateforme-holistique.vercel.app/praticien', `Voir la fiche de ${body.praticien} →`)}
            ${bouton('https://plateforme-holistique.vercel.app/ateliers', 'Voir tous les ateliers →')}
            <p style="color: #a8a29e; font-size: 13px; line-height: 1.6;">
              Une question ? Répondez simplement à cet email, notre équipe est là pour vous aider.
            </p>
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })

      // Email au praticien
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `🌿 Nouvelle demande de réservation de ${body.nomPatient} — ${body.atelier}`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.praticien} 👋</h2>
            <p style="color: #57534e; line-height: 1.7;">
              <strong>${body.nomPatient}</strong> souhaite réserver une place à votre atelier. 
              Contactez-le ou la rapidement pour confirmer sa place et organiser le paiement.
            </p>
            ${carteAtelier(body.atelier, body.praticien, body.date, body.heure, body.format, body.tarif)}
            ${body.message ? `
              <div style="background: white; border-radius: 12px; padding: 16px; margin: 16px 0; border: 1px solid #e7e5e4;">
                <p style="margin: 0; color: #78716c; font-size: 13px; font-style: italic;">"${body.message}"</p>
                <p style="margin: 8px 0 0; color: #a8a29e; font-size: 12px;">— ${body.nomPatient}</p>
              </div>
            ` : ''}
            ${bouton(`mailto:${body.emailPatient}?subject=Votre réservation — ${body.atelier}&body=Bonjour ${body.nomPatient},%0D%0A%0D%0AJ'ai bien reçu votre demande de réservation pour l'atelier "${body.atelier}".%0D%0A%0D%0A`, `Répondre à ${body.nomPatient} →`)}
            <div style="background: #fef9c3; border-radius: 12px; padding: 16px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #854d0e; font-size: 14px;">
                ⚡ <strong>Important :</strong> Une fois le paiement reçu, connectez-vous à votre dashboard Holistia et cliquez sur "Confirmer le paiement" — nous nous occupons d'envoyer la confirmation à ${body.nomPatient} à votre place.
              </p>
            </div>
            <p style="color: #57534e;">Belle journée,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })
    }

    // ═══════════════════════════════════════
    // BON CADEAU ATELIER
    // ═══════════════════════════════════════
    if (body.type === 'bon_cadeau') {

      // Email récap à l'acheteur
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `🎁 Votre bon cadeau pour ${body.nomDestinataire} — ${body.atelier}`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.nomAcheteur} 👋</h2>
            <p style="color: #57534e; line-height: 1.7;">
              Votre demande de bon cadeau pour <strong>${body.nomDestinataire}</strong> a bien été transmise à <strong>${body.praticien}</strong>. 
              Le praticien va vous contacter rapidement pour finaliser le paiement.
            </p>
            ${carteAtelier(body.atelier, body.praticien, body.date, body.heure, body.format, body.tarif)}
            <div style="background: white; border-radius: 12px; padding: 16px; margin: 16px 0; border: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #6b21a8; font-size: 13px; font-weight: 500;">Destinataire du cadeau</p>
              <p style="margin: 6px 0 0; color: #57534e;">${body.nomDestinataire}</p>
              ${body.message ? `<p style="margin: 8px 0 0; color: #78716c; font-style: italic;">"${body.message}"</p>` : ''}
            </div>
            ${bouton('https://plateforme-holistique.vercel.app/ateliers', 'Voir tous nos ateliers →')}
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })

      // Email au destinataire du cadeau
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `🎁 ${body.nomAcheteur} vous offre un atelier bien-être !`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.nomDestinataire} 🌿</h2>
            <p style="color: #57534e; line-height: 1.7;">
              <strong>${body.nomAcheteur}</strong> vous offre un moment de bien-être avec un praticien certifié Holistia. 
              Quel beau cadeau !
            </p>
            ${body.message ? `
              <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #6b21a8;">
                <p style="margin: 0; color: #6b21a8; font-size: 13px; font-weight: 500;">Un message de ${body.nomAcheteur} :</p>
                <p style="margin: 8px 0 0; color: #57534e; font-style: italic; font-size: 15px;">"${body.message}"</p>
              </div>
            ` : ''}
            <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #6b21a8; font-weight: 600; font-size: 16px;">${body.atelier}</p>
              <p style="margin: 8px 0 0; color: #57534e;">avec <strong>${body.praticien}</strong></p>
              <p style="margin: 8px 0 0; color: #57534e;">📅 ${body.date} · ${body.heure}</p>
              <p style="margin: 8px 0 0; color: #57534e;">📍 ${body.format}</p>
            </div>
            <p style="color: #57534e; line-height: 1.7;">
              Vous recevrez très bientôt un email de confirmation de <strong>${body.praticien}</strong> avec tous les détails pratiques pour participer.
            </p>
            ${bouton('https://plateforme-holistique.vercel.app/inscription', 'Créer mon compte Holistia — c\'est gratuit 🌿')}
            <p style="color: #a8a29e; font-size: 13px; line-height: 1.6;">
              Rejoindre Holistia vous permet de retrouver facilement vos praticiens, gérer vos RDV et découvrir d'autres ateliers bien-être.
            </p>
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })

      // Email au praticien
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `🎁 Nouveau bon cadeau de ${body.nomAcheteur} pour ${body.nomDestinataire} — ${body.atelier}`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.praticien} 👋</h2>
            <p style="color: #57534e; line-height: 1.7;">
              <strong>${body.nomAcheteur}</strong> souhaite offrir votre atelier à <strong>${body.nomDestinataire}</strong>. 
              Contactez ${body.nomAcheteur} rapidement pour organiser le paiement.
            </p>
            ${carteAtelier(body.atelier, body.praticien, body.date, body.heure, body.format, body.tarif)}
            <div style="background: white; border-radius: 12px; padding: 16px; margin: 16px 0; border: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #6b21a8; font-size: 13px; font-weight: 500;">🎁 Bon cadeau offert par ${body.nomAcheteur}</p>
              <p style="margin: 6px 0 0; color: #57534e;"><strong>Destinataire :</strong> ${body.nomDestinataire} (${body.emailDestinataire})</p>
              ${body.messagePraticien ? `<p style="margin: 8px 0 0; color: #78716c; font-style: italic;">"${body.messagePraticien}"</p>` : ''}
            </div>
            ${bouton(`mailto:${body.emailAcheteur}?subject=Votre bon cadeau — ${body.atelier}&body=Bonjour ${body.nomAcheteur},%0D%0A%0D%0AJ'ai bien reçu votre demande de bon cadeau pour ${body.nomDestinataire}.%0D%0A%0D%0A`, `Contacter ${body.nomAcheteur} pour le paiement →`)}
            <div style="background: #fef9c3; border-radius: 12px; padding: 16px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #854d0e; font-size: 14px;">
                ⚡ <strong>Important :</strong> Une fois le paiement reçu, connectez-vous à votre dashboard Holistia et cliquez sur "Confirmer le paiement reçu" — nous nous chargeons d'envoyer automatiquement les confirmations à ${body.nomAcheteur} et ${body.nomDestinataire}.
              </p>
            </div>
            <p style="color: #57534e;">Belle journée,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })
    }

    // ═══════════════════════════════════════
    // CONFIRMATION PAIEMENT (depuis dashboard praticien)
    // ═══════════════════════════════════════
    if (body.type === 'confirmation_paiement') {

      // Email à l'acheteur
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `✅ Paiement confirmé — ${body.atelier}`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.nomAcheteur} 👋</h2>
            <p style="color: #57534e; line-height: 1.7;">
              Bonne nouvelle ! <strong>${body.praticien}</strong> a bien confirmé la réception de votre paiement. 
              Votre bon cadeau pour <strong>${body.nomDestinataire}</strong> est officiel 🎉
            </p>
            ${carteAtelier(body.atelier, body.praticien, body.date, body.heure, body.format)}
            ${bouton('https://plateforme-holistique.vercel.app/praticien', `Voir la fiche de ${body.praticien} →`)}
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })

      // Email au destinataire
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: ADMIN,
        subject: `🎁 Votre cadeau est confirmé — ${body.atelier}`,
        html: `
          ${styleBase}
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${body.nomDestinataire} 🌿</h2>
            <p style="color: #57534e; line-height: 1.7;">
              Votre cadeau offert par <strong>${body.nomAcheteur}</strong> est confirmé ! 
              <strong>${body.praticien}</strong> vous attend avec impatience.
            </p>
            ${carteAtelier(body.atelier, body.praticien, body.date, body.heure, body.format)}
            <div style="background: #f0fdf4; border-radius: 12px; padding: 16px; margin: 16px 0; border-left: 4px solid #16a34a;">
              <p style="margin: 0; color: #15803d; font-size: 14px;">
                ✅ Votre place est réservée. ${body.praticien} vous enverra les informations pratiques de connexion ou d'accès très prochainement.
              </p>
            </div>
            ${bouton('https://plateforme-holistique.vercel.app/inscription', 'Créer mon compte Holistia — c\'est gratuit 🌿')}
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia 🌿</strong></p>
          </div>
          ${styleFin}
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}