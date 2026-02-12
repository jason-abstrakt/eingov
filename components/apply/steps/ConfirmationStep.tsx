'use client';

import { useEIN } from '@/context/EINContext';
import InfoBox from '@/components/ui/InfoBox';
import Button from '@/components/ui/Button';
import ConfirmationLetter from '@/components/apply/sections/ConfirmationLetter';
import { RotateCcw, CheckCircle2 } from 'lucide-react';

export default function ConfirmationStep() {
  const { dispatch } = useEIN();

  return (
    <div>
      {/* Success banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center bg-emerald-100 rounded-full p-3 mb-4">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Application Complete!</h2>
        <p className="text-gray-600 mt-1">
          Your EIN has been assigned. Save the confirmation below for your records.
        </p>
      </div>

      <ConfirmationLetter />

      {/* Start over */}
      <div className="text-center mt-8">
        <Button
          variant="ghost"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          <span className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Start a New Application
          </span>
        </Button>
      </div>
    </div>
  );
}
