'use client';

import { useEIN } from '@/context/EINContext';
import FormSection from '@/components/ui/FormSection';
import SSNInput from '@/components/ui/SSNInput';
import TextInput from '@/components/ui/TextInput';
import SelectInput from '@/components/ui/SelectInput';
import RadioCard from '@/components/ui/RadioCard';
import FieldError from '@/components/ui/FieldError';
import InfoBox from '@/components/ui/InfoBox';
import ThirdPartyFields from '@/components/apply/sections/ThirdPartyFields';
import { SUFFIX_OPTIONS, ROLE_OPTIONS } from '@/lib/constants';
import { formatSSN } from '@/lib/utils';
import type { ApplicantRole } from '@/lib/types';

export default function ResponsiblePartyStep() {
  const { state, dispatch } = useEIN();

  const handleBlur = (field: string) => {
    dispatch({ type: 'TOUCH_FIELD', field });
  };

  const roleLabels = state.entityType ? ROLE_OPTIONS[state.entityType] : null;

  return (
    <div>
      <FormSection
        title="Responsible Party"
        description="The IRS requires a responsible party — the individual who owns or controls the entity. This person's SSN/ITIN is used to verify identity."
      >
        <InfoBox variant="info">
          Your Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) is required by the IRS to verify your identity. It will not be shared.
        </InfoBox>

        <SSNInput
          label="SSN / ITIN"
          name="ssn"
          value={state.ssn}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'ssn', value: e.target.value })}
          onBlur={() => handleBlur('ssn')}
          visible={state.ssnVisible}
          onToggleVisibility={() => dispatch({ type: 'SET_FIELD', field: 'ssnVisible', value: !state.ssnVisible })}
          required
          error={state.errors.ssn}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <TextInput
            label="First Name"
            name="firstName"
            value={state.firstName}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'firstName', value: e.target.value })}
            onBlur={() => handleBlur('firstName')}
            required
            error={state.errors.firstName}
          />
          <TextInput
            label="Middle Name"
            name="middleName"
            value={state.middleName}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'middleName', value: e.target.value })}
            placeholder="(optional)"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'lastName', value: e.target.value })}
            onBlur={() => handleBlur('lastName')}
            required
            error={state.errors.lastName}
          />
        </div>

        <div className="mt-4 max-w-[200px]">
          <SelectInput
            label="Suffix"
            name="suffix"
            value={state.suffix}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'suffix', value: e.target.value })}
            options={SUFFIX_OPTIONS}
            placeholder="None"
          />
        </div>
      </FormSection>

      <FormSection
        title="Your Role"
        description="Are you applying on your own behalf or as a third party?"
      >
        {roleLabels ? (
          <div className="space-y-3">
            <RadioCard
              name="applicantRole"
              value="self"
              checked={state.applicantRole === 'self'}
              onChange={() => dispatch({ type: 'SET_ROLE', role: 'self' as ApplicantRole })}
              label={roleLabels.self}
            />
            <RadioCard
              name="applicantRole"
              value="third_party"
              checked={state.applicantRole === 'third_party'}
              onChange={() => dispatch({ type: 'SET_ROLE', role: 'third_party' as ApplicantRole })}
              label={roleLabels.thirdParty}
              description="If a third party prepared or will receive the EIN"
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500">Please select an entity type first.</p>
        )}
        <FieldError message={state.errors.applicantRole} />

        <ThirdPartyFields />
      </FormSection>
    </div>
  );
}
