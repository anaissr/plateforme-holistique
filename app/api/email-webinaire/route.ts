import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN = 'anais202@hotmail.com'

export async function POST(request: Request) {
  const body = await request.json()
  const { nom, email, specialite, dejaPraticien, message } = body

  try {
    await resend.emails.send({
      from: 'Holistia <onboarding@resend.dev>',
      to: ADMIN,
      subject: `🎙️ Proposition de webinaire — ${nom} (${specialite})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
            <p style="color: #e9d5ff; margin: 8px 0 0; font-size: 14px;">Nouvelle proposition de webinaire</p>
          </div>
          <div style="padding: 40px; background: #faf9f7;">
            <h2 style="color: #1c1917; font-weight: 400;">🎙️ Proposition de webinaire</h2>
            <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #6b21a8;">
              <p style="margin: 0; color: #6b21a8; font-weight: 600;">${nom}</p>
              <p style="margin: 6px 0 0; color: #57534e;">📧 <a href="mailto:${email}" style="color: #6b21a8;">${email}</a></p>
              <p style="margin: 6px 0 0; color: #57534e;">🌿 Spécialité : <strong>${specialite}</strong></p>
              <p style="margin: 6px 0 0; color: #57534e;">✅ Déjà praticien sur Holistia : <strong>${dejaPraticien ? 'Oui' : 'Non'}</strong></p>
            </div>
            <div style="background: white; border-radius: 12px; padding: 20px; margin: 20px 0; border: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #6b21a8; font-size: 13px; font-weight: 500;">Sujet du webinaire proposé :</p>
              <p style="margin: 10px 0 0; color: #57534e; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="text-align: center; margin: 28px 0;">
              <a href="mailto:${email}?subject=Votre proposition de webinaire Holistia&body=Bonjour ${nom},%0D%0A%0D%0AMerci pour votre proposition de webinaire sur Holistia.%0D%0A%0D%0A"
                style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px; display: inline-block;">
                Répondre à ${nom} →
              </a>
            </div>
          </div>
          <div style="padding: 24px 40px; background: #f5f3ff; border-radius: 0 0 16px 16px; text-align: center;">
            <p style="color: #7c3aed; font-size: 12px; margin: 0;">Holistia · Votre allié bien-être</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}
