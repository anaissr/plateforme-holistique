import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) {
      return NextResponse.json({ error: 'Clé Stripe manquante' }, { status: 500 })
    }

    const stripe = new Stripe(key, { apiVersion: '2026-04-22.dahlia' })
    const { montant, description, email } = await request.json()
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: { name: description },
            unit_amount: montant * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/paiement-success`,
      cancel_url: `${baseUrl}/praticien`,
      customer_email: email || undefined,
    
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Stripe error:', error?.message)
    return NextResponse.json({ error: error?.message }, { status: 500 })
  }
