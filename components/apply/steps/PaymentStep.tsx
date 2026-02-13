'use client';

import { useEIN } from '@/context/EINContext';
import Checkbox from '@/components/ui/Checkbox';
import { CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import Link from 'next/link';
import { PaymentElement } from '@stripe/react-stripe-js';

export default function PaymentStep() {
  const { state, dispatch } = useEIN();
  const { errors } = state;

  const handleProcessingChange = (value: 'standard' | 'rush') => {
    dispatch({ type: 'SET_PAYMENT_FIELD', field: 'processingOption', value });
  };

  const handleChange = (field: string, value: string | boolean) => {
    dispatch({ type: 'SET_PAYMENT_FIELD', field, value });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Main Payment Container */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-900">Secure Payment</h2>
          </div>
          <div className="flex gap-1.5 opacity-80">
             <div className="w-8 h-5 bg-[#1a1f71] text-white text-[8px] flex items-center justify-center rounded font-bold italic border border-gray-200">VISA</div>
             <div className="w-8 h-5 bg-[#eb001b] text-white text-[8px] flex items-center justify-center rounded font-bold border border-gray-200">MC</div>
             <div className="w-8 h-5 bg-[#ff6000] text-white text-[8px] flex items-center justify-center rounded font-bold border border-gray-200">DISC</div>
             <div className="w-8 h-5 bg-[#2e77bc] text-white text-[8px] flex items-center justify-center rounded font-bold border border-gray-200">AMEX</div>
          </div>
        </div>

        <div className="p-6 space-y-6">

          {/* Section 1: Processing Options */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide text-xs">Select Processing Speed</h3>
            <div className="grid gap-3">
              {/* Standard Option */}
              <div
                className={`
                  relative flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${state.processingOption === 'standard'
                    ? 'border-blue-600 bg-blue-50/50'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
                onClick={() => handleProcessingChange('standard')}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${state.processingOption === 'standard' ? 'border-blue-600' : 'border-gray-300'}
                  `}>
                    {state.processingOption === 'standard' && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900">Standard Processing</span>
                    <span className="block text-sm text-gray-600 mt-0.5">Delivered in 1-2 business days</span>
                  </div>
                </div>
                <div className="text-right">
                  {state.processingOption === 'standard' && (
                    <span className="block text-lg font-bold text-gray-900">$279.00</span>
                  )}
                </div>
              </div>

              {/* Rush Option */}
              <div
                className={`
                  relative flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${state.processingOption === 'rush'
                    ? 'border-blue-600 bg-blue-50/50'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
                onClick={() => handleProcessingChange('rush')}
              >
                <div className="flex items-start gap-3">
                  <div className={`
                    mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${state.processingOption === 'rush' ? 'border-blue-600' : 'border-gray-300'}
                  `}>
                    {state.processingOption === 'rush' && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                  </div>
                  <div>
                    <span className="block font-bold text-gray-900">Rush Processing</span>
                    <span className="block text-sm text-gray-600 mt-0.5">Delivered by end of business day</span>
                  </div>
                </div>
                <div className="text-right">
                  {state.processingOption === 'rush' && (
                    <span className="block text-lg font-bold text-gray-900">$319.00</span>
                  )}
                </div>
              </div>
            </div>
            {errors.processingOption && (
              <p className="text-sm text-red-600 mt-2">{errors.processingOption}</p>
            )}
            <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
              EIN Application Fees are 100% Tax Deductible
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2: Stripe Payment Element */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide text-xs">Payment Method</h3>
            <PaymentElement />
          </div>
        </div>

        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <Checkbox
              checked={state.agreedToTerms}
              onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
              label={
                <span className="text-xs text-gray-600 leading-relaxed block">
                  By submitting this application, I confirm that I have read and agree to the <Link href="/terms-of-service" className="text-blue-600 underline cursor-pointer hover:text-blue-800" target="_blank">Terms of Service</Link> and <Link href="/privacy-policy" className="text-blue-600 underline cursor-pointer hover:text-blue-800" target="_blank">Privacy Policy</Link>. I understand that the application fee is non-refundable once processing begins.
                </span>
              }
              error={errors.agreedToTerms}
            />
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-3 h-3" />
            <span>SSL Secure Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}
