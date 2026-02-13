import { NextRequest, NextResponse } from 'next/server';
import { getStripe, AMOUNTS } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { processingOption } = await req.json();

    if (processingOption !== 'standard' && processingOption !== 'rush') {
      return NextResponse.json(
        { error: 'Invalid processing option' },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const amount = AMOUNTS[processingOption as keyof typeof AMOUNTS];

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: {
        processingOption,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error('Failed to create payment intent:', err);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
