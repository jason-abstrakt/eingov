'use client';

import FormSection from '@/components/ui/FormSection';
import InfoBox from '@/components/ui/InfoBox';
import EntitySelector from '@/components/apply/sections/EntitySelector';
import SubTypeSelector from '@/components/apply/sections/SubTypeSelector';
import LLCFields from '@/components/apply/sections/LLCFields';
import ReasonSelector from '@/components/apply/sections/ReasonSelector';
import { useEIN } from '@/context/EINContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function EntityTypeStep() {
  const { state } = useEIN();

  // Determine visibility for sub-sections
  const showSubType = !!(state.entityType && state.entityType !== 'llc' && state.entityType !== 'estate');
  const showLLC = state.entityType === 'llc';

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
    <div>
      <FormSection
        title="Select Your Entity Type"
        description="Choose the legal structure that best describes your organization. This determines which IRS forms you'll file."
        className="mb-8"
      >
        <EntitySelector />
        
        <AnimatePresence>
          {showSubType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <SubTypeSelector />
            </motion.div>
          )}
          
          {showLLC && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <LLCFields />
            </motion.div>
          )}
        </AnimatePresence>
      </FormSection>

      <AnimatePresence>
        {showReason && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Using padding-bottom to separate from footer if needed, but here we just need spacing from above */}
            <FormSection
              title="Reason for Applying"
              description="Tell us why you need an Employer Identification Number."
              className="!mb-0" // Override default margin since we handle spacing via animation
            >
              {state.entityType === 'estate' ? (
                <InfoBox variant="info">
                  Estates of deceased individuals don&apos;t need to select a reason. You&apos;ll provide decedent information in a later step.
                </InfoBox>
              ) : (
                <ReasonSelector />
              )}
            </FormSection>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
