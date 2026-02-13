'use client';

import { useCallback } from 'react';
import { useEIN } from '@/context/EINContext';
import { validateStep, getFieldsForStep } from '@/lib/validation';
import { generateMockEIN } from '@/lib/utils';
import { saveApplication } from '@/lib/applications';

export function useStepValidation() {
  const { state, dispatch } = useEIN();

  const validate = useCallback(
    (step: number): boolean => {
      // Touch all fields for this step
      const fields = getFieldsForStep(step, state);
      fields.forEach((field) => {
        dispatch({ type: 'TOUCH_FIELD', field });
      });

      // Run validation
      const errors = validateStep(step, state);
      dispatch({ type: 'SET_ERRORS', errors });

      return Object.keys(errors).length === 0;
    },
    [state, dispatch]
  );

  const handleContinue = useCallback(() => {
    if (validate(state.currentStep)) {
      dispatch({ type: 'NEXT_STEP' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [validate, state.currentStep, dispatch]);

  const handleBack = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch]);

  const handleGoToStep = useCallback(
    (step: number) => {
      dispatch({ type: 'GO_TO_STEP', step });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    const { errors, touchedFields, currentStep, furthestStep, ...data } = state;
    const assignedEIN = generateMockEIN();
    saveApplication(data, assignedEIN);
    dispatch({ type: 'SUBMIT_APPLICATION', assignedEIN });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [state, dispatch]);

  return {
    validate,
    handleContinue,
    handleBack,
    handleGoToStep,
    handleSubmit,
    errors: state.errors,
  };
}
