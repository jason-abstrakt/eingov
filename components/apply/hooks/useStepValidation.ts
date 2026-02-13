'use client';

import { useCallback, useRef } from 'react';
import { useEIN } from '@/context/EINContext';
import { validateStep, getFieldsForStep } from '@/lib/validation';
import { saveApplication } from '@/lib/applications';
import type { Stripe, StripeElements } from '@stripe/stripe-js';

export function useStepValidation() {
  const { state, dispatch } = useEIN();
  const stripeRef = useRef<Stripe | null>(null);
  const elementsRef = useRef<StripeElements | null>(null);

  const setStripe = useCallback((stripe: Stripe | null, elements: StripeElements | null) => {
    stripeRef.current = stripe;
    elementsRef.current = elements;
  }, []);

  const validate = useCallback(
    (step: number): boolean => {
      const fields = getFieldsForStep(step, state);
      fields.forEach((field) => {
        dispatch({ type: 'TOUCH_FIELD', field });
      });
      const errors = validateStep(step, state);
      dispatch({ type: 'SET_ERRORS', errors });
      return Object.keys(errors).length === 0;
    },
    [state, dispatch]
  );

  const handleContinue = useCallback(() => {
    if (validate(state.currentStep)) {
      dispatch({ type: 'NEXT_STEP' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [validate, state.currentStep, dispatch]);

  const handleBack = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch]);

  const handleGoToStep = useCallback(
    (step: number) => {
      dispatch({ type: 'GO_TO_STEP', step });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(async () => {
    // 1. Validate processing option + terms
    if (!validate(state.currentStep)) return;

    const stripe = stripeRef.current;
    const elements = elementsRef.current;

    if (!stripe || !elements) {
      console.error('Stripe not loaded');
      dispatch({ type: 'SET_ERRORS', errors: { payment: 'Payment system not ready. Please try again.' } });
      return;
    }

    try {
      // 2. Validate card details with Stripe
      const { error: submitError } = await elements.submit();
      if (submitError) {
        dispatch({ type: 'SET_ERRORS', errors: { payment: submitError.message || 'Payment validation failed.' } });
        return;
      }

      // 3. Confirm payment (uses clientSecret already set on Elements provider)
      const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      });

      if (confirmError) {
        dispatch({ type: 'SET_ERRORS', errors: { payment: confirmError.message || 'Payment failed. Please try again.' } });
        return;
      }

      if (!paymentIntent || paymentIntent.status !== 'succeeded') {
        dispatch({ type: 'SET_ERRORS', errors: { payment: 'Payment was not completed. Please try again.' } });
        return;
      }

      // 4. Save application with verified payment
      const { errors: _e, touchedFields: _t, currentStep: _c, furthestStep: _f, ...data } = state;
      const result = await saveApplication({
        ...data,
        paymentIntentId: paymentIntent.id,
      } as typeof data);

      dispatch({ type: 'SUBMIT_APPLICATION', assignedEIN: result.assignedEIN });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Failed to submit application:', err);
      dispatch({ type: 'SET_ERRORS', errors: { payment: 'Something went wrong. Please try again.' } });
    }
  }, [state, dispatch, validate]);

  return {
    validate,
    handleContinue,
    handleBack,
    handleGoToStep,
    handleSubmit,
    setStripe,
    errors: state.errors,
  };
}
