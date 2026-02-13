'use client';

import FormSection from '@/components/ui/FormSection';
import InfoBox from '@/components/ui/InfoBox';
import EntitySelector from '@/components/apply/sections/EntitySelector';
import SubTypeSelector from '@/components/apply/sections/SubTypeSelector';
import LLCFields from '@/components/apply/sections/LLCFields';
import ReasonSelector from '@/components/apply/sections/ReasonSelector';
import { useEIN } from '@/context/EINContext';

export default function EntityTypeStep() {
  const { state } = useEIN();

  // Determine if the Reason Selector should be visible
  const showReason = (() => {
    if (!state.entityType) return false;

    if (state.entityType === 'llc') {
      return !!(state.llcMemberCount && state.llcState);
    }

    if (state.entityType === 'estate') {
      return true; // Estates don't have subtypes
    }

    // For others, require sub-type
    return !!state.entitySubType;
  })();

  return (
    <div className="space-y-8">
      <FormSection
        title="Select Your Entity Type"
        description="Choose the legal structure that best describes your organization. This determines which IRS forms you'll file."
      >
        <EntitySelector />
        
        {/* These components handle their own internal null checks based on entityType */}
        <SubTypeSelector />
        <LLCFields />
      </FormSection>

      {showReason && (
        <FormSection
          title="Reason for Applying"
          description="Tell us why you need an Employer Identification Number."
        >
          {state.entityType === 'estate' ? (
            <InfoBox variant="info">
              Estates of deceased individuals don&apos;t need to select a reason. You&apos;ll provide decedent information in a later step.
            </InfoBox>
          ) : (
            <ReasonSelector />
          )}
        </FormSection>
      )}
    </div>
  );
}
