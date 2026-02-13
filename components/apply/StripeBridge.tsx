'use client';

import { useEffect } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import type { Stripe, StripeElements } from '@stripe/stripe-js';

interface StripeBridgeProps {
  setStripe: (stripe: Stripe | null, elements: StripeElements | null) => void;
}

/**
 * Invisible bridge component that syncs Stripe hooks
 * (which must be called inside <Elements>) with the
 * useStepValidation hook (which lives outside <Elements>).
 */
export default function StripeBridge({ setStripe }: StripeBridgeProps) {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    setStripe(stripe, elements);
  }, [stripe, elements, setStripe]);

  return null;
}
