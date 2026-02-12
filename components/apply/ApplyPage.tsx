'use client';

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

export default function ApplyPage() {
  const { state } = useEIN();
  const { handleContinue, handleBack, handleGoToStep, handleSubmit } = useStepValidation();

  const isConfirmation = state.currentStep === 6;

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

        {!isConfirmation && (
          <StepNavigation
            currentStep={state.currentStep}
            totalSteps={TOTAL_STEPS}
            onBack={handleBack}
            onContinue={handleContinue}
            onSubmit={handleSubmit}
            isSubmitStep={state.currentStep === TOTAL_STEPS}
          />
        )}
      </main>
    </div>
  );
}
