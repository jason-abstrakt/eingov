'use client';

import { useEIN } from '@/context/EINContext';
import FormSection from '@/components/ui/FormSection';
import TextInput from '@/components/ui/TextInput';
import SelectInput from '@/components/ui/SelectInput';
import Checkbox from '@/components/ui/Checkbox';
import { MONTHS } from '@/lib/constants';
import { CreditCard, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const YEARS = Array.from({ length: 15 }, (_, i) => {
  const year = new Date().getFullYear() + i;
  return { value: year.toString(), label: year.toString() };
});

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
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Processing Option</h2>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>

      {/* Processing Options */}
      <div className="space-y-4">
        {/* Standard Processing */}
        <label
          className={`relative flex cursor-pointer rounded-lg border p-6 shadow-sm focus:outline-none ${
            state.processingOption === 'standard'
              ? 'border-blue-600 ring-2 ring-blue-600'
              : 'border-gray-300'
          }`}
        >
          <input
            type="radio"
            name="processing-option"
            className="sr-only"
            checked={state.processingOption === 'standard'}
            onChange={() => handleProcessingChange('standard')}
          />
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-lg font-bold text-gray-900">
                Standard Processing
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                Your Tax ID/EIN will be delivered in 1-2 business days
              </span>
            </span>
          </span>
          <span className="mt-0.5 flex flex-col text-right">
            <span className="text-xl font-bold text-gray-900">$279.00</span>
          </span>
          <span
            className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
              state.processingOption === 'standard' ? 'border-blue-600' : 'border-transparent'
            }`}
            aria-hidden="true"
          />
        </label>

        {/* Rush Processing */}
        <label
          className={`relative flex cursor-pointer rounded-lg border p-6 shadow-sm focus:outline-none ${
            state.processingOption === 'rush'
              ? 'border-blue-600 ring-2 ring-blue-600'
              : 'border-gray-300'
          }`}
        >
          <input
            type="radio"
            name="processing-option"
            className="sr-only"
            checked={state.processingOption === 'rush'}
            onChange={() => handleProcessingChange('rush')}
          />
          <span className="flex flex-1">
            <span className="flex flex-col">
              <span className="block text-lg font-bold text-gray-900">
                Rush Processing
              </span>
              <span className="mt-1 flex items-center text-sm text-gray-500">
                Your Tax ID/EIN will be delivered by the end of the business day
              </span>
            </span>
          </span>
          <span className="mt-0.5 flex flex-col text-right">
            <span className="text-xl font-bold text-gray-900">$319.00</span>
          </span>
          <span
            className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
              state.processingOption === 'rush' ? 'border-blue-600' : 'border-transparent'
            }`}
            aria-hidden="true"
          />
        </label>

        <p className="text-sm text-gray-500">
          Reminder, EIN Application Fees are 100% Tax Deductible
        </p>
        {errors.processingOption && (
          <p className="text-sm text-red-600 mt-1">{errors.processingOption}</p>
        )}
      </div>

      <div className="space-y-2 pt-8">
        <h2 className="text-2xl font-bold text-gray-900">Card Information</h2>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="grid gap-6">
          {/* Card Number */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Payment <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-1">
                 {/* Icons could be images or SVGs. For now using text/placeholder or lucide icons if appropriate, but standard card icons are specific.
                     The screenshot shows Visa, Mastercard, Discover, Amex.
                     I'll just put a placeholder or small text if I don't have the assets handy, or use a generic credit card icon.
                     Actually, I can try to use a generic row of icons or just leave it clean.
                  */}
                 <div className="flex gap-1">
                    <div className="w-8 h-5 bg-blue-900 text-white text-[8px] flex items-center justify-center rounded">VISA</div>
                    <div className="w-8 h-5 bg-red-600 text-white text-[8px] flex items-center justify-center rounded">MC</div>
                    <div className="w-8 h-5 bg-orange-500 text-white text-[8px] flex items-center justify-center rounded">DISC</div>
                    <div className="w-8 h-5 bg-blue-500 text-white text-[8px] flex items-center justify-center rounded">AMEX</div>
                 </div>
              </div>
            </div>
            <TextInput
              name="cardNumber"
              value={state.cardNumber}
              onChange={(e) => handleChange('cardNumber', e.target.value)}
              placeholder="Enter card number"
              error={errors.cardNumber}
              maxLength={19}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <SelectInput
              name="cardMonth"
              label="Month"
              value={state.cardMonth}
              onChange={(e) => handleChange('cardMonth', e.target.value)}
              options={MONTHS}
              error={errors.expiry} // expiry error usually covers both
            />
            <SelectInput
              name="cardYear"
              label="Year"
              value={state.cardYear}
              onChange={(e) => handleChange('cardYear', e.target.value)}
              options={YEARS}
              error={errors.expiry ? ' ' : undefined} // Avoid double error message
            />
            <TextInput
              name="cardCVC"
              label="CVC"
              value={state.cardCVC}
              onChange={(e) => handleChange('cardCVC', e.target.value)}
              placeholder="CVC"
              error={errors.cardCVC}
              maxLength={4}
            />
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="pt-4">
        <Checkbox
          checked={state.agreedToTerms}
          onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
          label={
            <span className="text-sm text-gray-600">
              By checking this box, I represent and warrant that all of the information provided above is accurate and complete. I agree that I have already read and accept the Terms & Privacy Policy
            </span>
          }
          error={errors.agreedToTerms}
        />
      </div>
    </div>
  );
}
