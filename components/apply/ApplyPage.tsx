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

export default function ApplyPage() {
  const { state } = useEIN();
  const { handleContinue, handleBack, handleGoToStep, handleSubmit, setStripe } = useStepValidation();
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

  // Initialize PaymentIntent when arriving at payment step
  useEffect(() => {
    if (isPaymentStep && !clientSecret && state.processingOption) {
      createPaymentIntent(state.processingOption);
    }
  }, [isPaymentStep, clientSecret, state.processingOption, createPaymentIntent]);

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
        return (
          <StripeProvider clientSecret={clientSecret}>
            <StripeBridge setStripe={setStripe} />
            <PaymentStep />
          </StripeProvider>
        );
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
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
          />
        )}
      </main>
    </div>
  );
}
