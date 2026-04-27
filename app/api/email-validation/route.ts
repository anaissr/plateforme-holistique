import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nom, email, accepte, motif } = await request.json()

  try {
    await resend.emails.send({
      from: 'Holistia <onboarding@resend.dev>',
      to: email,
      subject: accepte
        ? '🎉 Votre profil Holistia est validé — bienvenue !'
        : '📋 Votre dossier Holistia — informations complémentaires requises',
      html: accepte ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
          </div>
          <div style="padding: 40px; background: #faf9f7; border-radius: 0 0 16px 16px;">
            <h2 style="color: #1c1917; font-weight: 400;">Félicitations ${nom} ! 🎉</h2>
            <p style="color: #57534e; line-height: 1.6;">
              Votre profil Holistia a été vérifié et validé par notre équipe. Vous êtes maintenant visible par les patients !
            </p>
            <div style="background: #f0fdf4; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #bbf7d0;">
              <p style="margin: 0; color: #16a34a; font-weight: 500;">✅ Profil validé et actif</p>
              <p style="margin: 8px 0 0; color: #15803d; font-size: 14px;">Les patients peuvent maintenant vous trouver et prendre rendez-vous.</p>
            </div>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://plateforme-holistique.vercel.app/dashboard" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px;">
                Accéder à mon dashboard →
              </a>
            </div>
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia</strong></p>
          </div>
        </div>
      ` : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
          </div>
          <div style="padding: 40px; background: #faf9f7; border-radius: 0 0 16px 16px;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${nom},</h2>
            <p style="color: #57534e; line-height: 1.6;">
              Nous avons examiné votre dossier et nous ne pouvons pas valider votre profil pour le moment.
            </p>
            <div style="background: #fef9c3; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #fde047;">
              <p style="margin: 0; color: #854d0e; font-weight: 500;">📋 Motif :</p>
              <p style="margin: 8px 0 0; color: #92400e;">${motif}</p>
            </div>
            <p style="color: #57534e; line-height: 1.6;">
              Vous pouvez corriger ces informations depuis votre dashboard et nous recontacter.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://plateforme-holistique.vercel.app/dashboard?onglet=monprofil" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px;">
                Corriger mon dossier →
              </a>
            </div>
            <p style="color: #57534e;">L'équipe Holistia reste disponible pour toute question.<br><strong>L'équipe Holistia</strong></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}