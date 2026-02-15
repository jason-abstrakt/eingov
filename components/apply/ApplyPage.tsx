'use client';

import { useState, useEffect, useCallback } from 'react';
import { useEIN } from '@/context/EINContext';
import { useStepValidation } from '@/components/apply/hooks/useStepValidation';
import { TOTAL_STEPS } from '@/lib/constants';
import ApplicationHeader from '@/components/layout/ApplicationHeader';
import ProgressBar from '@/components/apply/ProgressBar';
import StepNavigation from '@/components/apply/StepNavigation';
import EntityTypeStep from '@/components/apply/steps/EntityTypeStep';
import ResponsiblePartyStep from '@/components/apply/steps/ResponsiblePartyStep';
import AddressStep from '@/components/apply/steps/AddressStep';
import BusinessDetailsStep from '@/components/apply/steps/BusinessDetailsStep';
import ReviewStep from '@/components/apply/steps/ReviewStep';
import ConfirmationStep from '@/components/apply/steps/ConfirmationStep';
import PaymentStep from '@/components/apply/steps/PaymentStep';
import StripeProvider from '@/components/apply/StripeProvider';
import StripeBridge from '@/components/apply/StripeBridge';
import { useAnalytics } from '@/components/apply/hooks/useAnalytics';

export default function ApplyPage() {
  const { state } = useEIN();
  const { handleContinue, handleBack, handleGoToStep, handleSubmit, setStripe, submitting } = useStepValidation();
  useAnalytics();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const isPaymentStep = state.currentStep === TOTAL_STEPS;
  const isConfirmation = state.currentStep === 7;

  // Create a PaymentIntent when user arrives at the payment step
  const createPaymentIntent = useCallback(async (option: string) => {
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ processingOption: option }),
      });
      if (res.ok) {
        const { clientSecret: cs } = await res.json();
        setClientSecret(cs);
      }
    } catch (err) {
      console.error('Failed to create payment intent:', err);
    }
  }, []);

  // Track which processing option the current PaymentIntent was created for
  const [intentOption, setIntentOption] = useState<string | null>(null);

  // Create/recreate PaymentIntent when arriving at payment step or changing option
  useEffect(() => {
    if (isPaymentStep && state.processingOption && state.processingOption !== intentOption) {
      setClientSecret(null);
      setIntentOption(state.processingOption);
      createPaymentIntent(state.processingOption);
    }
  }, [isPaymentStep, state.processingOption, intentOption, createPaymentIntent]);

  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <EntityTypeStep />;
      case 2:
        return <ResponsiblePartyStep />;
      case 3:
        return <AddressStep />;
      case 4:
        return <BusinessDetailsStep />;
      case 5:
        return <ReviewStep onGoToStep={handleGoToStep} />;
      case 6:
        if (clientSecret) {
          return (
            <StripeProvider clientSecret={clientSecret}>
              <StripeBridge setStripe={setStripe} />
              <PaymentStep clientSecret={clientSecret} />
            </StripeProvider>
          );
        }
        return <PaymentStep clientSecret={null} />;
      case 7:
        return <ConfirmationStep />;
      default:
        return <EntityTypeStep />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ApplicationHeader />

      {!isConfirmation && (
        <ProgressBar
          currentStep={state.currentStep}
          furthestStep={state.furthestStep}
          onStepClick={handleGoToStep}
        />
      )}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 relative">
        {submitting && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-lg">
            <svg className="animate-spin h-10 w-10 text-[#234E76] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-lg font-semibold text-gray-900">Processing your payment...</p>
            <p className="text-sm text-gray-500 mt-1">Please do not close this page.</p>
          </div>
        )}

        {renderStep()}

        {state.errors.payment && (
          <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
            {state.errors.payment}
          </div>
        )}

        {!isConfirmation && (
          <StepNavigation
            currentStep={state.currentStep}
            totalSteps={TOTAL_STEPS}
            onBack={handleBack}
            onContinue={handleContinue}
            onSubmit={handleSubmit}
            isSubmitStep={isPaymentStep}
            submitting={submitting}
          />
        )}
      </main>
    </div>
  );
}
