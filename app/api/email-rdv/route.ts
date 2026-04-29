import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { type, praticien, prestation, date, heure, tarif, nomAcheteur, emailAcheteur, nomDestinataire, emailDestinataire, messageCadeauDestinataire, messageCadeauPraticien } = await request.json()

  try {
    if (type === 'bon_cadeau') {
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: emailAcheteur,
        subject: `🎁 Votre bon cadeau — consultation avec ${praticien}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
              <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
            </div>
            <div style="padding: 40px; background: #faf9f7; border-radius: 0 0 16px 16px;">
              <h2 style="color: #1c1917; font-weight: 400;">Votre demande de bon cadeau a bien été envoyée ! 🎁</h2>
              <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #ede9fe;">
                <p style="margin: 0; color: #6b21a8; font-weight: 500;">${praticien}</p>
                <p style="margin: 8px 0 0; color: #1c1917;">${prestation}</p>
                <p style="margin: 8px 0 0; color: #78716c;">💶 ${tarif}</p>
                <p style="margin: 16px 0 0; color: #1c1917; font-size: 14px;">Pour : <strong>${nomDestinataire}</strong> (${emailDestinataire})</p>
              </div>
              ${messageCadeauDestinataire ? `<p style="color: #57534e;"><em>Votre message : "${messageCadeauDestinataire}"</em></p>` : ''}
              <p style="color: #57534e;">${praticien} va vous contacter rapidement pour finaliser le paiement et confirmer le bon cadeau.</p>
              <p style="color: #57534e;">À bientôt,<br><strong>L'équipe Holistia</strong></p>
            </div>
          </div>
        `,
      })

      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: 'anais202@hotmail.com',
        subject: `🎁 Nouvelle demande de bon cadeau — ${praticien}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #faf9f7; border-radius: 16px;">
            <h2 style="color: #6b21a8;">Nouvelle demande de bon cadeau</h2>
            <p><strong>Praticien :</strong> ${praticien}</p>
            <p><strong>Prestation :</strong> ${prestation} — ${tarif}</p>
            <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 16px 0;" />
            <p><strong>Acheteur :</strong> ${nomAcheteur} (${emailAcheteur})</p>
            <p><strong>Destinataire :</strong> ${nomDestinataire} (${emailDestinataire})</p>
            ${messageCadeauDestinataire ? `<p><strong>Message destinataire :</strong> ${messageCadeauDestinataire}</p>` : ''}
            ${messageCadeauPraticien ? `<p><strong>Message praticien :</strong> ${messageCadeauPraticien}</p>` : ''}
          </div>
        `,
      })
    }

    if (type === 'confirmation_patient') {
      await resend.emails.send({
        from: 'Holistia <onboarding@resend.dev>',
        to: 'anais202@hotmail.com',
        subject: `✅ RDV confirmé — ${praticien} · ${date} à ${heure}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
              <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
            </div>
            <div style="padding: 40px; background: #faf9f7; border-radius: 0 0 16px 16px;">
              <h2 style="color: #1c1917; font-weight: 400;">Votre RDV est confirmé ! 🎉</h2>
              <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #ede9fe;">
                <p style="margin: 0; color: #6b21a8; font-weight: 500;">${praticien}</p>
                <p style="margin: 8px 0 0; color: #1c1917;">${prestation}</p>
                <p style="margin: 8px 0 0; color: #78716c;">📅 ${date} à ${heure}</p>
                <p style="margin: 8px 0 0; color: #78716c;">💶 ${tarif}</p>
              </div>
              <p style="color: #57534e;">Annulation gratuite jusqu'à 24h avant le RDV.</p>
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://plateforme-holistique.vercel.app/patient" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500;">
                  Voir mes RDV →
                </a>
              </div>
              <p style="color: #57534e;">À bientôt,<br><strong>L'équipe Holistia</strong></p>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}