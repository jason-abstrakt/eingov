'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onContinue: () => void;
  onSubmit?: () => void;
  isSubmitStep?: boolean;
  submitting?: boolean;
}

export default function StepNavigation({
  currentStep,
  totalSteps,
  onBack,
  onContinue,
  onSubmit,
  isSubmitStep,
  submitting,
}: StepNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {currentStep > 1 ? (
        <Button variant="secondary" onClick={onBack} disabled={submitting}>
          <span className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </span>
        </Button>
      ) : (
        <div />
      )}

      {isSubmitStep ? (
        <Button variant="primary" onClick={onSubmit} disabled={submitting}>
          <span className="flex items-center gap-2">
            {submitting ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing Payment...
              </>
            ) : (
              <>
                Submit Application
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </span>
        </Button>
      ) : (
        <Button variant="primary" onClick={onContinue}>
          <span className="flex items-center gap-2">
            Continue
            <ArrowRight className="h-4 w-4" />
          </span>
        </Button>
      )}
    </div>
  );
}
