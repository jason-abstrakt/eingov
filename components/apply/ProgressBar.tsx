'use client';

import { Check } from 'lucide-react';
import { STEP_LABELS, TOTAL_STEPS } from '@/lib/constants';

interface ProgressBarProps {
  currentStep: number;
  furthestStep: number;
  onStepClick: (step: number) => void;
}

export default function ProgressBar({ currentStep, furthestStep, onStepClick }: ProgressBarProps) {
  const percent = Math.round(((currentStep - 1) / (TOTAL_STEPS - 1)) * 100);

  return (
    <div className="bg-white border-b border-gray-200 py-6 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Step circles */}
        <div className="flex items-center justify-between mb-4">
          {STEP_LABELS.map((label, idx) => {
            const step = idx + 1;
            const isCompleted = step < currentStep;
            const isCurrent = step === currentStep;
            const isAccessible = step <= furthestStep;

            return (
              <div key={step} className="flex flex-col items-center relative" style={{ flex: 1 }}>
                {/* Connecting line */}
                {idx < STEP_LABELS.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-0.5 ${
                      step < currentStep ? 'bg-us-blue' : 'bg-gray-200'
                    }`}
                    style={{ zIndex: 0 }}
                  />
                )}
                {/* Circle */}
                <button
                  type="button"
                  onClick={() => isAccessible && onStepClick(step)}
                  disabled={!isAccessible}
                  className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    isCompleted
                      ? 'bg-us-blue text-white cursor-pointer'
                      : isCurrent
                      ? 'bg-us-blue text-white ring-4 ring-us-blue/20'
                      : isAccessible
                      ? 'bg-white border-2 border-us-blue text-us-blue cursor-pointer'
                      : 'bg-white border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : step}
                </button>
                {/* Label */}
                <span
                  className={`text-xs mt-1.5 text-center hidden sm:block ${
                    isCurrent ? 'font-semibold text-us-blue' : 'text-gray-500'
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-us-blue h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Step text */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">
            Step {currentStep} of {TOTAL_STEPS} — <span className="font-medium">{STEP_LABELS[currentStep - 1]}</span>
          </span>
          <span className="text-sm font-semibold text-us-blue">{percent}%</span>
        </div>
      </div>
    </div>
  );
}
