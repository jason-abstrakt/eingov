'use client';

import { useEIN } from '@/context/EINContext';
import ReviewSection, { ReviewRow } from '@/components/apply/sections/ReviewSection';
import InfoBox from '@/components/ui/InfoBox';
import {
  getEntityLabel,
  getSubTypeLabel,
  getReasonLabel,
  getStateLabel,
  getActivityLabel,
  getMonthLabel,
  getSuffixLabel,
  maskSSN,
  formatAddress,
} from '@/lib/utils';
import { ROLE_OPTIONS } from '@/lib/constants';

interface ReviewStepProps {
  onGoToStep: (step: number) => void;
}

export default function ReviewStep({ onGoToStep }: ReviewStepProps) {
  const { state } = useEIN();

  const roleLabels = state.entityType ? ROLE_OPTIONS[state.entityType] : null;
  const roleText =
    state.applicantRole === 'self'
      ? roleLabels?.self ?? 'Self'
      : state.applicantRole === 'third_party'
      ? roleLabels?.thirdParty ?? 'Third Party'
      : '—';

  const fullName = [state.firstName, state.middleName, state.lastName]
    .filter(Boolean)
    .join(' ') + (state.suffix ? `, ${getSuffixLabel(state.suffix)}` : '');

  return (
    <div>
      <InfoBox variant="info">
        Please review all information below before submitting. Click &quot;Edit&quot; on any section to make changes.
      </InfoBox>

      {/* Step 1: Entity Type */}
      <ReviewSection title="Entity Type" onEdit={() => onGoToStep(1)}>
        <ReviewRow label="Entity Type" value={getEntityLabel(state.entityType)} />
        {state.entityType === 'llc' && (
          <>
            <ReviewRow label="Number of Members" value={state.llcMemberCount} />
            <ReviewRow label="State of Organization" value={getStateLabel(state.llcState)} />
          </>
        )}
        {state.entitySubType && (
          <ReviewRow label="Sub-Type" value={getSubTypeLabel(state.entityType, state.entitySubType)} />
        )}
        {state.entityType !== 'estate' && (
          <ReviewRow label="Reason for Applying" value={getReasonLabel(state.reasonForApplying)} />
        )}
      </ReviewSection>

      {/* Step 2: Responsible Party */}
      <ReviewSection title="Responsible Party" onEdit={() => onGoToStep(2)}>
        <ReviewRow label="SSN / ITIN" value={maskSSN(state.ssn)} />
        <ReviewRow label="Name" value={fullName} />
        <ReviewRow label="Role" value={roleText} />
        {state.applicantRole === 'third_party' && (
          <>
            <ReviewRow label="Designee Name" value={state.thirdPartyDesignee.name} />
            <ReviewRow label="Designee Phone" value={state.thirdPartyDesignee.phone} />
            {state.thirdPartyDesignee.fax && (
              <ReviewRow label="Designee Fax" value={state.thirdPartyDesignee.fax} />
            )}
            <ReviewRow
              label="Designee Address"
              value={formatAddress(state.thirdPartyDesignee.address)}
            />
          </>
        )}
      </ReviewSection>

      {/* Step 3: Addresses */}
      <ReviewSection title="Addresses" onEdit={() => onGoToStep(3)}>
        <ReviewRow label="Mailing Address" value={formatAddress(state.mailingAddress)} />
        <ReviewRow
          label="Physical Location"
          value={
            state.physicalSameAsMailing
              ? 'Same as mailing address'
              : formatAddress(state.physicalAddress)
          }
        />
      </ReviewSection>

      {/* Step 4: Business Details */}
      <ReviewSection title="Business Details" onEdit={() => onGoToStep(4)}>
        {state.entityType === 'estate' ? (
          <>
            <ReviewRow label="Decedent SSN" value={maskSSN(state.decedentSSN)} />
            <ReviewRow label="Decedent Name" value={`${state.decedentFirstName} ${state.decedentLastName}`} />
            <ReviewRow label="Date of Death" value={state.dateOfDeath} />
            <ReviewRow label="State of Residence" value={getStateLabel(state.decedentState)} />
          </>
        ) : state.entityType === 'trust' ? (
          <>
            <ReviewRow label="Trust Name" value={state.trustName} />
            <ReviewRow label="Date Funded" value={state.dateFunded} />
          </>
        ) : (
          <>
            <ReviewRow label="Legal Name" value={state.legalName} />
            {state.tradeName && <ReviewRow label="Trade Name / DBA" value={state.tradeName} />}
            {state.entityType === 'corporation' && (
              <ReviewRow
                label="State of Incorporation"
                value={getStateLabel(state.stateOfIncorporation)}
              />
            )}
            {state.entityType === 'partnership' && (
              <ReviewRow label="Number of Partners" value={state.numberOfPartners} />
            )}
            <ReviewRow label="Start Date" value={state.startDate} />
            <ReviewRow label="Closing Month" value={getMonthLabel(state.closingMonth)} />
            <ReviewRow label="Business Activity" value={getActivityLabel(state.businessActivity)} />
            <ReviewRow label="Products / Services" value={state.specificProducts} />
            <ReviewRow
              label="Previous EIN"
              value={state.hasPreviousEIN ? state.previousEIN : 'No'}
            />
          </>
        )}
      </ReviewSection>
    </div>
  );
}
