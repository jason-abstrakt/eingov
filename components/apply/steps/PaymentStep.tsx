'use client';

import { useEIN } from '@/context/EINContext';
import TextInput from '@/components/ui/TextInput';
import SelectInput from '@/components/ui/SelectInput';
import Checkbox from '@/components/ui/Checkbox';
import { MONTHS } from '@/lib/constants';

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
        <div className="h-1 w-full bg-gray-200 rounded">
           <div className="h-1 w-32 bg-blue-600 rounded"></div>
        </div>
      </div>

      {/* Processing Options - Condensed Layout */}
      <div className="space-y-1">
        <div className="space-y-4 border-b border-gray-200 pb-6">
          {/* Standard Processing */}
          <div className="flex items-start justify-between cursor-pointer" onClick={() => handleProcessingChange('standard')}>
            <div className="flex items-start">
              <input
                id="standard"
                type="radio"
                name="processing-option"
                checked={state.processingOption === 'standard'}
                onChange={() => handleProcessingChange('standard')}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="standard" className="ml-3 block cursor-pointer">
                <span className="block text-base font-bold text-gray-900">Standard Processing</span>
                <span className="block text-sm text-gray-600">Your Tax ID/EIN will be delivered in 1-2 business days</span>
              </label>
            </div>
            <span className="text-xl font-bold text-gray-700">$279.00</span>
          </div>

          {/* Rush Processing */}
          <div className="flex items-start justify-between cursor-pointer" onClick={() => handleProcessingChange('rush')}>
            <div className="flex items-start">
              <input
                id="rush"
                type="radio"
                name="processing-option"
                checked={state.processingOption === 'rush'}
                onChange={() => handleProcessingChange('rush')}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="rush" className="ml-3 block cursor-pointer">
                <span className="block text-base font-bold text-gray-900">Rush Processing</span>
                <span className="block text-sm text-gray-600">Your Tax ID/EIN will be delivered by the end of the business day</span>
              </label>
            </div>
            <span className="text-xl font-bold text-gray-700">$319.00</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 pt-2">
          Reminder, EIN Application Fees are 100% Tax Deductible
        </p>
        {errors.processingOption && (
          <p className="text-sm text-red-600 mt-1">{errors.processingOption}</p>
        )}
      </div>

      <div className="space-y-2 pt-4">
        <h2 className="text-2xl font-bold text-gray-900">Card Information</h2>
        <div className="h-1 w-full bg-gray-200 rounded">
           <div className="h-1 w-32 bg-blue-600 rounded"></div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
        <div className="grid gap-6">
          {/* Card Number */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Payment <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-1">
                 <div className="w-8 h-5 bg-[#1a1f71] text-white text-[8px] flex items-center justify-center rounded font-bold italic border border-gray-200">VISA</div>
                 <div className="w-8 h-5 bg-[#eb001b] text-white text-[8px] flex items-center justify-center rounded font-bold border border-gray-200">MC</div>
                 <div className="w-8 h-5 bg-[#ff6000] text-white text-[8px] flex items-center justify-center rounded font-bold border border-gray-200">DISC</div>
                 <div className="w-8 h-5 bg-[#2e77bc] text-white text-[8px] flex items-center justify-center rounded font-bold border border-gray-200">AMEX</div>
              </div>
            </div>
            <TextInput
              name="cardNumber"
              value={state.cardNumber}
              onChange={(e) => handleChange('cardNumber', e.target.value)}
              placeholder="Enter card number"
              error={errors.cardNumber}
              maxLength={19}
              className="bg-white"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <SelectInput
              name="cardMonth"
              label="Month" // Keep label but it might be hidden in some designs, assuming standard label here
              value={state.cardMonth}
              onChange={(e) => handleChange('cardMonth', e.target.value)}
              options={MONTHS}
              error={errors.expiry} 
              placeholder="Month"
            />
            <SelectInput
              name="cardYear"
              label="Year"
              value={state.cardYear}
              onChange={(e) => handleChange('cardYear', e.target.value)}
              options={YEARS}
              error={errors.expiry ? ' ' : undefined}
              placeholder="Year"
            />
            <TextInput
              name="cardCVC"
              label="CVC"
              value={state.cardCVC}
              onChange={(e) => handleChange('cardCVC', e.target.value)}
              placeholder="CVC"
              error={errors.cardCVC}
              maxLength={4}
              className="bg-white"
            />
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="pt-2">
        <Checkbox
          checked={state.agreedToTerms}
          onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
          label={
            <span className="text-xs text-gray-600 leading-tight block">
              By checking this box, I represent and warrant that all of the information provided above is accurate and complete. I agree that I have already read and accept the Terms & Privacy Policy
            </span>
          }
          error={errors.agreedToTerms}
        />
      </div>
    </div>
  );
}
