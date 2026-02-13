import Stripe from 'stripe';

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }
  return new Stripe(key);
}

// Price IDs for processing options
export const PRICE_IDS = {
  standard: 'price_1T0NnrLQJU5GlTwHhFK3I8w0', // $279
  rush: 'price_1T0NoqLQJU5GlTwHgq6m2Vzk',      // $319
} as const;

export const AMOUNTS = {
  standard: 27900, // cents
  rush: 31900,     // cents
} as const;
