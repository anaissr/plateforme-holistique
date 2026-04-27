import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nom, email, specialite, ville, pays } = await request.json()

  try {
    // Email au praticien
    await resend.emails.send({
      from: 'Holistia <onboarding@resend.dev>',
      to: email,
      subject: 'Bienvenue sur Holistia 🌿 — Votre dossier est en cours de validation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
          </div>
          <div style="padding: 40px; background: #faf9f7; border-radius: 0 0 16px 16px;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${nom},</h2>
            <p style="color: #57534e; line-height: 1.6;">
              Merci pour votre inscription sur Holistia ! Nous avons bien reçu votre dossier et notre équipe va le vérifier sous <strong>48h</strong>.
            </p>
            <div style="background: white; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #78716c; font-size: 14px;"><strong>Spécialité :</strong> ${specialite}</p>
              <p style="margin: 8px 0 0; color: #78716c; font-size: 14px;"><strong>Ville :</strong> ${ville}, ${pays}</p>
            </div>
            <p style="color: #57534e; line-height: 1.6;">
              Pour que nous puissions valider votre profil, nous aurons besoin de :
            </p>
            <ul style="color: #57534e; line-height: 2;">
              <li>Votre diplôme principal (nom de l'école, année d'obtention)</li>
              <li>Votre assurance RC Pro en cours de validité</li>
              <li>Une photo professionnelle</li>
              <li>Une courte biographie de présentation</li>
            </ul>
<p style="color: #57534e; line-height: 1.6;">
              Vous pouvez dès maintenant compléter votre profil en cliquant sur le bouton ci-dessous. Votre dossier sera vérifié et validé sous <strong>48h après réception de toutes vos informations</strong>.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://plateforme-holistique.vercel.app/dashboard" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px;">
                Compléter mon profil →
              </a>
            </div>
            <p style="color: #57534e;">À très bientôt,<br><strong>L'équipe Holistia</strong></p>
          </div>
        </div>
      `,
    })

    // Email de notification à toi
    await resend.emails.send({
      from: 'Holistia <onboarding@resend.dev>',
      to: 'anais202@hotmail.com',
      subject: `🌿 Nouveau praticien inscrit — ${nom} (${specialite})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px;">
          <h2 style="color: #6b21a8;">Nouveau dossier à valider</h2>
          <div style="background: #f5f3ff; border-radius: 12px; padding: 20px; border: 1px solid #ede9fe;">
            <p style="margin: 0; color: #1c1917;"><strong>Nom :</strong> ${nom}</p>
            <p style="margin: 8px 0 0; color: #1c1917;"><strong>Email :</strong> ${email}</p>
            <p style="margin: 8px 0 0; color: #1c1917;"><strong>Spécialité :</strong> ${specialite}</p>
            <p style="margin: 8px 0 0; color: #1c1917;"><strong>Ville :</strong> ${ville}, ${pays}</p>
          </div>
          <p style="color: #57534e; margin-top: 20px;">
            Connecte-toi au dashboard admin pour valider ce dossier.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}