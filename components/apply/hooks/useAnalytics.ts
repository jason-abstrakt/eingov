'use client';

import { useEffect, useRef } from 'react';
import { useEIN } from '@/context/EINContext';
import { trackEvent } from '@/lib/analytics';

export function useAnalytics() {
  const { state } = useEIN();
  const prevStepRef = useRef(state.currentStep);
  const funnelStartedRef = useRef(false);
  const hasFiredAbandonRef = useRef(false);

  // Track funnel_start once per session on mount
  useEffect(() => {
    if (!funnelStartedRef.current) {
      funnelStartedRef.current = true;
      trackEvent({ eventType: 'funnel_start', stepNumber: 1 });
    }
  }, []);

  // Track step transitions
  useEffect(() => {
    const prev = prevStepRef.current;
    const curr = state.currentStep;

    if (curr !== prev && curr > prev && curr >= 2 && curr <= 7) {
      // Reset abandon flag when user advances
      hasFiredAbandonRef.current = false;

      trackEvent({
        eventType: curr === 7 ? 'payment_success' : 'step_advance',
        stepNumber: curr,
        metadata: curr === 7
          ? { processingOption: state.processingOption, amount: state.processingOption === 'rush' ? 319 : 279 }
          : { from: prev },
      });
    }

    prevStepRef.current = curr;
  }, [state.currentStep, state.processingOption]);

  // Track payment errors (when payment error appears in state)
  useEffect(() => {
    if (state.errors.payment && state.currentStep === 6) {
      trackEvent({
        eventType: 'payment_failed',
        stepNumber: 6,
        metadata: {
          processingOption: state.processingOption,
          errorMessage: state.errors.payment,
        },
      });
    }
  }, [state.errors.payment, state.currentStep, state.processingOption]);

  // Track abandonment on page unload / visibility change
  useEffect(() => {
    const currentStep = state.currentStep;
    const hasPaymentError = !!state.errors.payment;
    const agreedToTerms = state.agreedToTerms;
    const processingOption = state.processingOption;

    const handleAbandon = () => {
      // Don't fire if user completed payment (step 7 = confirmation)
      if (currentStep === 7) return;
      // Only fire once per "leave" action
      if (hasFiredAbandonRef.current) return;
      hasFiredAbandonRef.current = true;

      const metadata: Record<string, unknown> = {};
      if (currentStep === 6) {
        if (hasPaymentError) {
          metadata.abandonReason = 'error_then_abandoned';
        } else if (agreedToTerms && processingOption) {
          metadata.abandonReason = 'after_terms_before_submit';
        } else if (processingOption) {
          metadata.abandonReason = 'no_action';
        } else {
          metadata.abandonReason = 'no_action';
        }
      }

      trackEvent({
        eventType: currentStep === 6 ? 'payment_abandoned' : 'step_abandon',
        stepNumber: currentStep,
        metadata,
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        handleAbandon();
      } else {
        // Reset flag when user comes back
        hasFiredAbandonRef.current = false;
      }
    };

    window.addEventListener('beforeunload', handleAbandon);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleAbandon);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [state.currentStep, state.errors.payment, state.agreedToTerms, state.processingOption]);
}
