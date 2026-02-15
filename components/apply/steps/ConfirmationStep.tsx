'use client';

import { useEffect } from 'react';
import { useEIN } from '@/context/EINContext';
import Button from '@/components/ui/Button';
import { CheckCircle2, Mail, Clock, Printer, RotateCcw, CreditCard } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConfirmationStep() {
  const { state, dispatch } = useEIN();

  const isRush = state.processingOption === 'rush';
  const amountValue = isRush ? 319.0 : 279.0;
  const amount = isRush ? '$319.00' : '$279.00';
  const deliveryTime = isRush
    ? 'by end of business day today'
    : 'within 1\u20132 business days';

  // Fire Google Ads purchase conversion event on page load
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11484768851/8TsCCKe7l_kbENPUruQq',
        value: amountValue,
        currency: 'USD',
        transaction_id: state.assignedEIN || '',
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-w-2xl mx-auto">
      {/* Success banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center bg-emerald-100 rounded-full p-4 mb-4">
          <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
        <p className="text-gray-600 mt-2 text-base">
          Your EIN application has been submitted and is being processed.
        </p>
      </div>

      {/* Main info card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Delivery info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 p-2.5 rounded-lg flex-shrink-0">
              <Mail className="h-6 w-6 text-[#234E76]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base">Your EIN is on the way</h3>
              <p className="text-sm text-gray-600 mt-1">
                Your official EIN from the IRS will be delivered to{' '}
                <span className="font-medium text-gray-900">{state.email}</span>{' '}
                {deliveryTime}.
              </p>
            </div>
          </div>
        </div>

        {/* Timing info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start gap-4">
            <div className="bg-amber-50 p-2.5 rounded-lg flex-shrink-0">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base">
                {isRush ? 'Rush Processing' : 'Standard Processing'}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {isRush
                  ? 'Your EIN will be delivered by the end of business day today. Keep an eye on your inbox.'
                  : 'Your EIN will be delivered within 1\u20132 business days. We\u2019ll send it as soon as it\u2019s ready.'}
              </p>
            </div>
          </div>
        </div>

        {/* Email details */}
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">What to expect</h4>
          <ul className="space-y-2.5 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>
                Your EIN confirmation will be sent from{' '}
                <span className="font-medium text-gray-900">support@eingov.com</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>
                If you don&apos;t receive your EIN within the expected time window, please check your spam or junk folder
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span>
                Still haven&apos;t received it? Contact us at{' '}
                <span className="font-medium text-gray-900">support@eingov.com</span>{' '}
                and we&apos;ll help right away
              </span>
            </li>
          </ul>
        </div>

        {/* Billing info */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-2.5 rounded-lg flex-shrink-0">
              <CreditCard className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base">Billing Details</h3>
              <p className="text-sm text-gray-600 mt-1">
                A charge of <span className="font-medium text-gray-900">{amount}</span> will appear on your billing statement from{' '}
                <span className="font-medium text-gray-900">&quot;Abstrakt&quot;</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
        <Button
          variant="secondary"
          onClick={() => window.print()}
        >
          <span className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            Print This Page
          </span>
        </Button>
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
