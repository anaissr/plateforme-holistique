import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Client avec anon key — les opérations respectent le RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  const { praticien_id, patient_id, rdv_id, prenom, note, ponctualite, ecoute, clarte, texte } = await request.json()

  if (!praticien_id || !patient_id || !note) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
  }

  const date = new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

  const { error: insertError } = await supabase.from('avis').insert({
    praticien_id,
    patient_id,
    rdv_id: rdv_id || null,
    prenom,
    date,
    note,
    ponctualite,
    ecoute,
    clarte,
    texte,
  })

  if (insertError) {
    if (insertError.code === '23505') {
      return NextResponse.json({ error: 'Vous avez déjà laissé un avis pour ce rendez-vous' }, { status: 409 })
    }
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // Recalcule note_moyenne et nb_avis via RPC Supabase
  // Requiert la fonction SQL : voir scripts/schema.sql (update_praticien_note)
  await supabase.rpc('update_praticien_note', { p_praticien_id: praticien_id })

  return NextResponse.json({ success: true })
}
