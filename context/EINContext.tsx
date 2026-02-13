'use client';

import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { EINApplicationState, EINAction, Address, NameSuffix } from '@/lib/types';
import { generateMockEIN } from '@/lib/utils';

const emptyAddress: Address = { street1: '', street2: '', city: '', state: '', zip: '' };

const initialState: EINApplicationState = {
  currentStep: 1,
  furthestStep: 1,
  entityType: null,
  entitySubType: null,
  llcMemberCount: '',
  llcState: '',
  reasonForApplying: null,
  ssn: '',
  ssnVisible: true,
  firstName: '',
  middleName: '',
  lastName: '',
  suffix: '' as NameSuffix,
  email: '',
  applicantRole: null,
  thirdPartyDesignee: { name: '', phone: '', address: { ...emptyAddress }, fax: '' },
  mailingAddress: { ...emptyAddress },
  physicalSameAsMailing: null,
  physicalAddress: { ...emptyAddress },
  legalName: '',
  tradeName: '',
  startDate: '',
  closingMonth: 'December',
  businessActivity: null,
  specificProducts: '',
  employeeInfo: {
    agriculturalCount: '',
    householdCount: '',
    otherCount: '',
    dateFirstWages: '',
    expectLowLiability: null,
  },
  hasPreviousEIN: null,
  previousEIN: '',
  stateOfIncorporation: '',
  numberOfPartners: '',
  decedentSSN: '',
  decedentFirstName: '',
  decedentLastName: '',
  dateOfDeath: '',
  decedentState: '',
  trustName: '',
  dateFunded: '',
  errors: {},
  touchedFields: new Set(),
  assignedEIN: null,
};

function einReducer(state: EINApplicationState, action: EINAction): EINApplicationState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };

    case 'SET_ENTITY_TYPE': {
      // Changing entity type clears all dependent state
      return {
        ...state,
        entityType: action.entityType,
        entitySubType: null,
        reasonForApplying: null,
        llcMemberCount: '',
        llcState: '',
        // Clear entity-specific step 4 fields
        stateOfIncorporation: '',
        numberOfPartners: '',
        decedentSSN: '',
        decedentFirstName: '',
        decedentLastName: '',
        dateOfDeath: '',
        decedentState: '',
        trustName: '',
        dateFunded: '',
        legalName: '',
        tradeName: '',
        startDate: '',
        closingMonth: 'December',
        businessActivity: null,
        specificProducts: '',
        hasPreviousEIN: null,
        previousEIN: '',
        employeeInfo: {
          agriculturalCount: '',
          householdCount: '',
          otherCount: '',
          dateFirstWages: '',
          expectLowLiability: null,
        },
        errors: {},
      };
    }

    case 'SET_ENTITY_SUB_TYPE':
      return { ...state, entitySubType: action.subType };

    case 'SET_REASON':
      return { ...state, reasonForApplying: action.reason };

    case 'SET_ROLE':
      return {
        ...state,
        applicantRole: action.role,
        // Clear TPD fields when switching away from third_party
        ...(action.role === 'self'
          ? { thirdPartyDesignee: { name: '', phone: '', address: { ...emptyAddress }, fax: '' } }
          : {}),
      };

    case 'SET_ADDRESS_FIELD':
      return {
        ...state,
        [action.addressType === 'mailing' ? 'mailingAddress' : 'physicalAddress']: {
          ...(action.addressType === 'mailing' ? state.mailingAddress : state.physicalAddress),
          [action.field]: action.value,
        },
      };

    case 'SET_TPD_FIELD':
      return {
        ...state,
        thirdPartyDesignee: {
          ...state.thirdPartyDesignee,
          [action.field]: action.value,
        },
      };

    case 'SET_TPD_ADDRESS_FIELD':
      return {
        ...state,
        thirdPartyDesignee: {
          ...state.thirdPartyDesignee,
          address: {
            ...state.thirdPartyDesignee.address,
            [action.field]: action.value,
          },
        },
      };

    case 'SET_EMPLOYEE_FIELD':
      return {
        ...state,
        employeeInfo: {
          ...state.employeeInfo,
          [action.field]: action.value,
        },
      };

    case 'NEXT_STEP': {
      const next = state.currentStep + 1;
      return {
        ...state,
        currentStep: next,
        furthestStep: Math.max(state.furthestStep, next),
        errors: {},
      };
    }

    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1),
        errors: {},
      };

    case 'GO_TO_STEP':
      if (action.step < 1 || action.step > state.furthestStep) return state;
      return { ...state, currentStep: action.step, errors: {} };

    case 'SET_ERRORS':
      return { ...state, errors: action.errors };

    case 'TOUCH_FIELD':
      return {
        ...state,
        touchedFields: new Set(Array.from(state.touchedFields).concat(action.field)),
      };

    case 'SUBMIT_APPLICATION':
      return {
        ...state,
        assignedEIN: generateMockEIN(),
        currentStep: 6,
      };

    case 'RESET':
      return { ...initialState, touchedFields: new Set<string>() };

    default:
      return state;
  }
}

interface EINContextValue {
  state: EINApplicationState;
  dispatch: React.Dispatch<EINAction>;
}

const EINContext = createContext<EINContextValue | null>(null);

export function EINProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(einReducer, { ...initialState, touchedFields: new Set<string>() });
  return <EINContext.Provider value={{ state, dispatch }}>{children}</EINContext.Provider>;
}

export function useEIN(): EINContextValue {
  const ctx = useContext(EINContext);
  if (!ctx) throw new Error('useEIN must be used within an EINProvider');
  return ctx;
}
