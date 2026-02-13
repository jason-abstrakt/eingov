// ===== PRIMARY ENTITY TYPES =====

export type PrimaryEntityType =
  | 'sole_proprietor'
  | 'partnership'
  | 'corporation'
  | 'llc'
  | 'estate'
  | 'trust'
  | 'additional';

// ===== SUB-TYPES BY ENTITY =====

export type SoleProprietorSubType = 'sole_proprietor' | 'household_employer';

export type PartnershipSubType = 'partnership' | 'joint_venture';

export type CorporationSubType =
  | 'corporation'
  | 's_corporation'
  | 'personal_service_corp'
  | 'reit'
  | 'ric'
  | 'settlement_fund';

export type TrustSubType =
  | 'bankruptcy_estate_individual'
  | 'charitable_lead_annuity'
  | 'charitable_lead_unitrust'
  | 'charitable_remainder_annuity'
  | 'charitable_remainder_unitrust'
  | 'conservatorship'
  | 'custodianship'
  | 'escrow'
  | 'fnma'
  | 'gnma'
  | 'guardianship'
  | 'irrevocable_trust'
  | 'pooled_income_fund'
  | 'qualified_funeral_trust'
  | 'receivership'
  | 'revocable_trust'
  | 'settlement_fund_468b'
  | 'trust_all_others';

export type AdditionalSubType =
  | 'bankruptcy_estate_individual'
  | 'block_tenant_association'
  | 'church'
  | 'church_controlled_org'
  | 'community_volunteer_group'
  | 'employer_fiscal_agent'
  | 'employer_plan_401k'
  | 'farmers_cooperative'
  | 'government_federal_military'
  | 'government_indian_tribal'
  | 'government_state_local'
  | 'homeowners_condo_association'
  | 'household_employer'
  | 'ira'
  | 'memorial_scholarship_fund'
  | 'plan_administrator'
  | 'political_organization'
  | 'pta_pto_school_org'
  | 'remic'
  | 'social_savings_club'
  | 'sports_teams_community'
  | 'withholding_agent'
  | 'other_nonprofit_tax_exempt';

export type EntitySubType =
  | SoleProprietorSubType
  | PartnershipSubType
  | CorporationSubType
  | TrustSubType
  | AdditionalSubType
  | null;

// ===== REASON FOR APPLYING =====

export type ReasonForApplying =
  | 'started_new_business'
  | 'hired_employees'
  | 'banking_purposes'
  | 'changed_organization_type'
  | 'purchased_active_business';

// ===== ROLE =====

export type ApplicantRole = 'self' | 'third_party';

// ===== NAME SUFFIX =====

export type NameSuffix =
  | '' | 'DDS' | 'MD' | 'PHD' | 'Jr' | 'Sr'
  | 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI';

// ===== ADDRESS =====

export interface Address {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
}

// ===== THIRD PARTY DESIGNEE =====

export interface ThirdPartyDesignee {
  name: string;
  phone: string;
  address: Address;
  fax: string;
}

// ===== EMPLOYEE INFO =====

export interface EmployeeInfo {
  agriculturalCount: string;
  householdCount: string;
  otherCount: string;
  dateFirstWages: string;
  expectLowLiability: boolean | null;
}

// ===== BUSINESS ACTIVITY =====

export type BusinessActivityCategory =
  | 'accommodation_food'
  | 'construction'
  | 'finance_insurance'
  | 'health_care'
  | 'manufacturing'
  | 'real_estate'
  | 'rental_leasing'
  | 'retail_trade'
  | 'transportation_warehousing'
  | 'wholesale_trade'
  | 'other';

// ===== OPTION TYPES FOR UI =====

export interface SelectOption {
  value: string;
  label: string;
}

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

// ===== MAIN APPLICATION STATE =====

export interface EINApplicationState {
  // Navigation
  currentStep: number;
  furthestStep: number;

  // Step 1: Entity Type
  entityType: PrimaryEntityType | null;
  entitySubType: EntitySubType;
  llcMemberCount: string;
  llcState: string;
  reasonForApplying: ReasonForApplying | null;

  // Step 2: Responsible Party
  ssn: string;
  ssnVisible: boolean;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: NameSuffix;
  email: string;
  applicantRole: ApplicantRole | null;
  thirdPartyDesignee: ThirdPartyDesignee;

  // Step 3: Addresses
  mailingAddress: Address;
  physicalSameAsMailing: boolean | null;
  physicalAddress: Address;

  // Step 4: Business Details (common)
  legalName: string;
  tradeName: string;
  startDate: string;
  closingMonth: string;
  businessActivity: BusinessActivityCategory | null;
  specificProducts: string;
  employeeInfo: EmployeeInfo;
  hasPreviousEIN: boolean | null;
  previousEIN: string;

  // Step 4: Corporation-specific
  stateOfIncorporation: string;

  // Step 4: Partnership-specific
  numberOfPartners: string;

  // Step 4: Estate-specific
  decedentSSN: string;
  decedentFirstName: string;
  decedentLastName: string;
  dateOfDeath: string;
  decedentState: string;

  // Step 4: Trust-specific
  trustName: string;
  dateFunded: string;

  // Payment
  processingOption: 'standard' | 'rush';
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCVC: string;
  agreedToTerms: boolean;

  // Validation
  errors: Record<string, string>;
  touchedFields: Set<string>;

  // Result
  assignedEIN: string | null;

  // General Questions (Step 4)
  ownsHighwayVehicle: boolean;
  involvesGambling: boolean;
  paysExciseTax: boolean;
  sellsAlcoholTobaccoFirearms: boolean;
  hasEmployees: boolean;
}

// ===== REDUCER ACTIONS =====

export type EINAction =
  | { type: 'SET_FIELD'; field: string; value: unknown }
  | { type: 'SET_ENTITY_TYPE'; entityType: PrimaryEntityType }
  | { type: 'SET_ENTITY_SUB_TYPE'; subType: EntitySubType }
  | { type: 'SET_REASON'; reason: ReasonForApplying }
  | { type: 'SET_ROLE'; role: ApplicantRole }
  | { type: 'SET_ADDRESS_FIELD'; addressType: 'mailing' | 'physical'; field: keyof Address; value: string }
  | { type: 'SET_TPD_FIELD'; field: string; value: string }
  | { type: 'SET_TPD_ADDRESS_FIELD'; field: keyof Address; value: string }
  | { type: 'SET_EMPLOYEE_FIELD'; field: keyof EmployeeInfo; value: unknown }
  | { type: 'SET_PAYMENT_FIELD'; field: string; value: unknown }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_TO_STEP'; step: number }
  | { type: 'SET_ERRORS'; errors: Record<string, string> }
  | { type: 'TOUCH_FIELD'; field: string }
  | { type: 'SET_PAYMENT_FIELD'; field: string; value: unknown }
  | { type: 'SUBMIT_APPLICATION' }
  | { type: 'RESET' };
