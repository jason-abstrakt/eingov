'use client';

import { useEIN } from '@/context/EINContext';
import { getEntityLabel } from '@/lib/utils';
import { FileText, Download, Printer } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ConfirmationLetter() {
  const { state } = useEIN();

  const fullName = [state.firstName, state.middleName, state.lastName]
    .filter(Boolean)
    .join(' ');

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white border-2 border-gray-300 rounded-xl p-8 shadow-md max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
        <div className="flex justify-center mb-3">
          <div className="bg-us-dark-blue p-3 rounded-full">
            <FileText className="h-8 w-8 text-us-gold" />
          </div>
        </div>
        <h2 className="text-lg font-bold text-us-dark-blue uppercase tracking-wide">
          Department of the Treasury
        </h2>
        <p className="text-sm text-gray-600">Internal Revenue Service</p>
        <p className="text-xs text-gray-400 mt-1">Notice CP 575 (Mock)</p>
      </div>

      {/* Body */}
      <div className="space-y-4 text-sm text-gray-700">
        <p className="text-right text-xs text-gray-500">{today}</p>

        <p>{fullName}</p>
        <p>
          {state.mailingAddress.street1}
          {state.mailingAddress.street2 ? `, ${state.mailingAddress.street2}` : ''}
        </p>
        <p>
          {state.mailingAddress.city}, {state.mailingAddress.state} {state.mailingAddress.zip}
        </p>

        <div className="my-6 p-4 bg-us-light-blue border border-us-blue/20 rounded-lg text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Your Employer Identification Number
          </p>
          <p className="text-3xl font-bold text-us-dark-blue tracking-wider">
            {state.assignedEIN}
          </p>
        </div>

        <p>Dear {state.firstName},</p>
        <p>
          We assigned you an Employer Identification Number (EIN). This EIN is for{' '}
          <span className="font-semibold">
            {state.entityType === 'estate'
              ? 'the estate'
              : state.entityType === 'trust'
              ? state.trustName || 'your trust'
              : state.legalName || 'your entity'}
          </span>{' '}
          ({getEntityLabel(state.entityType)}).
        </p>
        <p>
          Use this EIN on tax returns, statements, and other IRS documents. Keep this notice in your
          permanent records. If you have questions, call the IRS Business &amp; Specialty Tax Line at
          1-800-829-4933.
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3 mt-8 pt-6 border-t border-gray-200">
        <Button
          variant="secondary"
          onClick={() => window.print()}
        >
          <span className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Print
          </span>
        </Button>
      </div>

      <p className="text-xs text-center text-gray-400 mt-4">
        This is a mock confirmation for demonstration purposes only.
        This is NOT a real EIN and cannot be used for any official purpose.
      </p>
    </div>
  );
}
