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
      subject: 'Bienvenue sur Holistia 🌿 — Complétez votre profil pour être validé',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b0764, #6b21a8); padding: 40px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; font-size: 28px; font-weight: 300; margin: 0;">🌿 Holistia</h1>
          </div>
          <div style="padding: 40px; background: #faf9f7; border-radius: 0 0 16px 16px;">
            <h2 style="color: #1c1917; font-weight: 400;">Bonjour ${nom},</h2>
            <p style="color: #57534e; line-height: 1.6;">
              Votre inscription sur Holistia est bien enregistrée ! Pour que votre profil soit visible par les patients, vous devez maintenant le compléter.
            </p>
            <div style="background: white; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #78716c; font-size: 14px;"><strong>Spécialité :</strong> ${specialite}</p>
              <p style="margin: 8px 0 0; color: #78716c; font-size: 14px;"><strong>Ville :</strong> ${ville}, ${pays}</p>
            </div>
            <p style="color: #57534e; line-height: 1.6;">
              Cliquez sur le bouton ci-dessous pour compléter votre profil avec :
            </p>
            <ul style="color: #57534e; line-height: 2;">
              <li>Votre biographie et présentation</li>
              <li>Votre école de formation et année de diplôme</li>
              <li>Votre numéro d'assurance RC Pro</li>
              <li>Vos tarifs</li>
            </ul>
            <div style="text-align: center; margin: 32px 0;">
              <a href="https://plateforme-holistique.vercel.app/dashboard?onglet=monprofil" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px;">
                Compléter mon profil →
              </a>
            </div>
            <p style="color: #a8a29e; font-size: 13px; line-height: 1.6;">
              Une fois toutes vos informations renseignées, notre équipe vérifiera votre dossier et validera votre profil sous <strong>48h</strong>. Vous serez alors visible par les patients.
            </p>
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
            Connecte-toi au dashboard admin pour valider ce dossier une fois qu'il aura complété ses informations.
          </p>
          <div style="text-align: center; margin: 24px 0;">
            <a href="https://plateforme-holistique.vercel.app/admin" style="background: #6b21a8; color: white; padding: 14px 32px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 15px;">
              Voir le dashboard admin →
            </a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}