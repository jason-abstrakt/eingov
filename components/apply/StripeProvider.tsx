'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface StripeProviderProps {
  children: React.ReactNode;
  clientSecret: string | null;
}

export default function StripeProvider({ children, clientSecret }: StripeProviderProps) {
  if (!clientSecret) {
    return <>{children}</>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#005ea2',
            borderRadius: '6px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
