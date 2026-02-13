'use client';

import { useEIN } from '@/context/EINContext';
import FormSection from '@/components/ui/FormSection';
import TextInput from '@/components/ui/TextInput';
import DateInput from '@/components/ui/DateInput';
import SelectInput from '@/components/ui/SelectInput';
import RadioCard from '@/components/ui/RadioCard';
import FieldError from '@/components/ui/FieldError';
import BusinessActivitySelector from '@/components/apply/sections/BusinessActivitySelector';
import EmployeeFields from '@/components/apply/sections/EmployeeFields';
import EstateFields from '@/components/apply/sections/EstateFields';
import TrustFields from '@/components/apply/sections/TrustFields';
import { US_STATES, MONTHS } from '@/lib/constants';
import { formatEIN } from '@/lib/utils';

import GeneralQuestions from '@/components/apply/sections/GeneralQuestions';

export default function BusinessDetailsStep() {
  const { state, dispatch } = useEIN();

  const handleBlur = (field: string) => {
    dispatch({ type: 'TOUCH_FIELD', field });
  };

  // Estate path — only decedent info
  if (state.entityType === 'estate') {
    return (
      <div className="space-y-8">
        <FormSection
          title="Estate Details"
          description="Provide information about the decedent whose estate you are administering."
        >
          <EstateFields />
        </FormSection>
        
        <FormSection
          title="General Questions"
          description="Please answer the following questions about the estate."
        >
          <GeneralQuestions />
        </FormSection>
      </div>
    );
  }

  // Trust path — only trust info
  if (state.entityType === 'trust') {
    return (
      <div className="space-y-8">
        <FormSection
          title="Trust Details"
          description="Provide the name and funding details of the trust."
        >
          <TrustFields />
        </FormSection>

        <FormSection
          title="General Questions"
          description="Please answer the following questions about the trust."
        >
          <GeneralQuestions />
        </FormSection>
      </div>
    );
  }

  // All other entities: full business details
  return (
    <div className="space-y-8">
      <FormSection
        title="Business Information"
        description="Provide the legal details of your business."
      >
        <div className="space-y-4">
          <TextInput
            label="Legal Name of Entity"
            name="legalName"
            value={state.legalName}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'legalName', value: e.target.value })}
            onBlur={() => handleBlur('legalName')}
            required
            error={state.errors.legalName}
            helpText="The exact legal name as registered with your state."
          />
          <TextInput
            label="Trade Name / DBA"
            name="tradeName"
            value={state.tradeName}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'tradeName', value: e.target.value })}
            placeholder="(optional — only if different from legal name)"
            helpText="The name your business uses publicly, if different from the legal name."
          />

          {state.entityType === 'corporation' && (
            <SelectInput
              label="State of Incorporation"
              name="stateOfIncorporation"
              value={state.stateOfIncorporation}
              onChange={(e) =>
                dispatch({ type: 'SET_FIELD', field: 'stateOfIncorporation', value: e.target.value })
              }
              onBlur={() => handleBlur('stateOfIncorporation')}
              options={US_STATES}
              required
              error={state.errors.stateOfIncorporation}
              placeholder="Select state..."
            />
          )}

          {state.entityType === 'partnership' && (
            <TextInput
              label="Number of Partners"
              name="numberOfPartners"
              value={state.numberOfPartners}
              onChange={(e) =>
                dispatch({
                  type: 'SET_FIELD',
                  field: 'numberOfPartners',
                  value: e.target.value.replace(/\D/g, ''),
                })
              }
              onBlur={() => handleBlur('numberOfPartners')}
              required
              error={state.errors.numberOfPartners}
              placeholder="2"
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DateInput
              label="Business Start Date"
              name="startDate"
              value={state.startDate}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'startDate', value: e.target.value })}
              onBlur={() => handleBlur('startDate')}
              required
              error={state.errors.startDate}
              helpText="When did or will the business begin operating?"
            />
            <SelectInput
              label="Accounting Year End (Closing Month)"
              name="closingMonth"
              value={state.closingMonth}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'closingMonth', value: e.target.value })}
              options={MONTHS}
              required
              error={state.errors.closingMonth}
              helpText="Most businesses use December."
            />
          </div>
        </div>
      </FormSection>

      <FormSection
        title="General Questions"
        description="Please answer the following additional questions."
      >
        <GeneralQuestions />
      </FormSection>

      <FormSection
        title="Business Activity"
        description="Help the IRS understand what your business does."
      >
        <BusinessActivitySelector />
      </FormSection>

      <FormSection
        title="Previous EIN"
        description="Have you previously obtained an EIN for this entity?"
      >
        <div className="space-y-3">
          <RadioCard
            name="hasPreviousEIN"
            value="false"
            checked={state.hasPreviousEIN === false}
            onChange={() => dispatch({ type: 'SET_FIELD', field: 'hasPreviousEIN', value: false })}
            label="No, this is a new entity"
            description="I have never obtained an EIN for this entity before."
          />
          <RadioCard
            name="hasPreviousEIN"
            value="true"
            checked={state.hasPreviousEIN === true}
            onChange={() => dispatch({ type: 'SET_FIELD', field: 'hasPreviousEIN', value: true })}
            label="Yes, I previously had an EIN"
            description="I was previously assigned an EIN for this entity."
          />
        </div>
        <FieldError message={state.errors.hasPreviousEIN} />

        {state.hasPreviousEIN === true && (
          <div className="mt-4">
            <TextInput
              label="Previous EIN"
              name="previousEIN"
              value={state.previousEIN}
              onChange={(e) =>
                dispatch({ type: 'SET_FIELD', field: 'previousEIN', value: formatEIN(e.target.value) })
              }
              onBlur={() => handleBlur('previousEIN')}
              required
              error={state.errors.previousEIN}
              placeholder="XX-XXXXXXX"
              maxLength={10}
            />
          </div>
        )}
      </FormSection>

    </div>
  );
}
