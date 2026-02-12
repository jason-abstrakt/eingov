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
}

export default function StepNavigation({
  currentStep,
  totalSteps,
  onBack,
  onContinue,
  onSubmit,
  isSubmitStep,
}: StepNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {currentStep > 1 ? (
        <Button variant="secondary" onClick={onBack}>
          <span className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </span>
        </Button>
      ) : (
        <div />
      )}

      {isSubmitStep ? (
        <Button variant="primary" onClick={onSubmit}>
          <span className="flex items-center gap-2">
            Submit Application
            <ArrowRight className="h-4 w-4" />
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
