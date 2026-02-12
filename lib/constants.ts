import type { RadioOption, SelectOption } from './types';

// ===== STEP LABELS =====

export const STEP_LABELS = [
  'Entity Type',
  'Responsible Party',
  'Addresses',
  'Business Details',
  'Review & Submit',
];

export const TOTAL_STEPS = 5;

// ===== ENTITY TYPES =====
// primary: true = shown above the fold; false = behind "Show more"

export const ENTITY_TYPES: (RadioOption & { primary: boolean })[] = [
  {
    value: 'llc',
    label: 'Limited Liability Company (LLC)',
    description: 'Filed articles of organization with your state',
    primary: true,
  },
  {
    value: 'sole_proprietor',
    label: 'Sole Proprietor',
    description: 'Individual owner, not incorporated or registered as an LLC',
    primary: true,
  },
  {
    value: 'corporation',
    label: 'Corporation',
    description: 'Filed articles of incorporation with your state',
    primary: true,
  },
  {
    value: 'partnership',
    label: 'Partnership',
    description: 'Two or more people in business together',
    primary: true,
  },
  {
    value: 'estate',
    label: 'Estate',
    description: 'Legal entity created as a result of a person\'s death',
    primary: false,
  },
  {
    value: 'trust',
    label: 'Trust',
    description: 'Trusts, conservatorships, guardianships, and receiverships',
    primary: false,
  },
  {
    value: 'additional',
    label: 'Tax-Exempt / Government / Other',
    description: 'Nonprofits, churches, government agencies, and other organizations',
    primary: false,
  },
];

// ===== SUB-TYPES =====

export const SOLE_PROP_SUB_TYPES: RadioOption[] = [
  {
    value: 'sole_proprietor',
    label: 'Sole Proprietor',
    description: 'Self-employed individual or independent contractor. Reports income on Form 1040.',
  },
  {
    value: 'household_employer',
    label: 'Household Employer',
    description: 'You hired a nanny, housekeeper, gardener, or other domestic worker.',
  },
];

export const PARTNERSHIP_SUB_TYPES: RadioOption[] = [
  {
    value: 'partnership',
    label: 'Partnership',
    description: 'Two or more people sharing profits and losses of a business.',
  },
  {
    value: 'joint_venture',
    label: 'Joint Venture',
    description: 'Two or more businesses sharing risk on a specific project.',
  },
];

export const CORPORATION_SUB_TYPES: RadioOption[] = [
  {
    value: 'corporation',
    label: 'Corporation (C Corp)',
    description: 'Standard corporation taxed separately from its owners.',
  },
  {
    value: 's_corporation',
    label: 'S Corporation',
    description: 'Income passes through to shareholders\' personal tax returns.',
  },
  {
    value: 'personal_service_corp',
    label: 'Personal Service Corporation',
    description: 'Health, law, engineering, architecture, accounting, or consulting services.',
  },
  {
    value: 'reit',
    label: 'Real Estate Investment Trust (REIT)',
    description: 'Investment vehicle for a group of real estate investors.',
  },
  {
    value: 'ric',
    label: 'Regulated Investment Company (RIC)',
    description: 'Regulated investment company meeting certain domestic criteria.',
  },
  {
    value: 'settlement_fund',
    label: 'Settlement Fund (IRC Sec 468B)',
    description: 'Established to settle and pay claims under IRC Section 468B.',
  },
];

export const TRUST_SUB_TYPES: RadioOption[] = [
  // Primary (shown first)
  { value: 'irrevocable_trust', label: 'Irrevocable Trust', description: 'Cannot be modified or terminated without the beneficiary\'s permission.' },
  { value: 'revocable_trust', label: 'Revocable Trust', description: 'Can be altered or revoked by the grantor during their lifetime.' },
  { value: 'guardianship', label: 'Guardianship', description: 'Court-appointed guardian manages assets for a minor or incapacitated person.' },
  { value: 'conservatorship', label: 'Conservatorship', description: 'Court-appointed conservator manages financial affairs.' },
  { value: 'custodianship', label: 'Custodianship', description: 'Assets held by a custodian on behalf of a beneficiary.' },
  { value: 'escrow', label: 'Escrow', description: 'Funds held by a third party pending fulfillment of conditions.' },
  // Secondary (behind "Show more")
  { value: 'bankruptcy_estate_individual', label: 'Bankruptcy Estate (Individual)' },
  { value: 'charitable_lead_annuity', label: 'Charitable Lead Annuity Trust' },
  { value: 'charitable_lead_unitrust', label: 'Charitable Lead Unitrust' },
  { value: 'charitable_remainder_annuity', label: 'Charitable Remainder Annuity Trust' },
  { value: 'charitable_remainder_unitrust', label: 'Charitable Remainder Unitrust' },
  { value: 'fnma', label: 'FNMA (Fannie Mae)' },
  { value: 'gnma', label: 'GNMA (Ginnie Mae)' },
  { value: 'pooled_income_fund', label: 'Pooled Income Fund' },
  { value: 'qualified_funeral_trust', label: 'Qualified Funeral Trust' },
  { value: 'receivership', label: 'Receivership' },
  { value: 'settlement_fund_468b', label: 'Settlement Fund (IRC Sec 468B)' },
  { value: 'trust_all_others', label: 'Trust (All Others)', description: 'Select if your trust type isn\'t listed above.' },
];

export const TRUST_PRIMARY_COUNT = 6;

export const ADDITIONAL_SUB_TYPES: RadioOption[] = [
  // Primary (shown first)
  { value: 'church', label: 'Church', description: 'Religious organization recognized as a church.' },
  { value: 'other_nonprofit_tax_exempt', label: 'Other Non-Profit / Tax-Exempt', description: 'Charitable, educational, or other 501(c) organizations.' },
  { value: 'government_state_local', label: 'Government, State/Local', description: 'State or local government entity.' },
  { value: 'homeowners_condo_association', label: 'Homeowners / Condo Association', description: 'HOA or condominium owners association.' },
  { value: 'political_organization', label: 'Political Organization', description: 'Political party, committee, or campaign.' },
  { value: 'employer_plan_401k', label: 'Employer Plan (401K, etc.)', description: '401(k), money purchase plan, or other employer-sponsored plan.' },
  // Secondary (behind "Show more")
  { value: 'bankruptcy_estate_individual', label: 'Bankruptcy Estate (Individual)' },
  { value: 'block_tenant_association', label: 'Block/Tenant Association' },
  { value: 'church_controlled_org', label: 'Church-Controlled Organization' },
  { value: 'community_volunteer_group', label: 'Community or Volunteer Group' },
  { value: 'employer_fiscal_agent', label: 'Employer/Fiscal Agent (IRC Sec 3504)' },
  { value: 'farmers_cooperative', label: 'Farmer\'s Cooperative' },
  { value: 'government_federal_military', label: 'Government, Federal/Military' },
  { value: 'government_indian_tribal', label: 'Government, Indian Tribal' },
  { value: 'household_employer', label: 'Household Employer' },
  { value: 'ira', label: 'IRA' },
  { value: 'memorial_scholarship_fund', label: 'Memorial or Scholarship Fund' },
  { value: 'plan_administrator', label: 'Plan Administrator' },
  { value: 'pta_pto_school_org', label: 'PTA/PTO or School Organization' },
  { value: 'remic', label: 'REMIC' },
  { value: 'social_savings_club', label: 'Social or Savings Club' },
  { value: 'sports_teams_community', label: 'Sports Teams (Community)' },
  { value: 'withholding_agent', label: 'Withholding Agent' },
];

export const ADDITIONAL_PRIMARY_COUNT = 6;

// ===== REASONS FOR APPLYING =====

export const REASONS: RadioOption[] = [
  {
    value: 'started_new_business',
    label: 'Started a new business',
    description: 'You\'re beginning a brand new business.',
  },
  {
    value: 'hired_employees',
    label: 'Hired employee(s)',
    description: 'You already have a business and need to hire employees.',
  },
  {
    value: 'banking_purposes',
    label: 'Banking purposes',
    description: 'You need an EIN to open a bank account or satisfy a banking requirement.',
  },
  {
    value: 'changed_organization_type',
    label: 'Changed type of organization',
    description: 'You\'re changing your business structure (e.g., sole prop to LLC).',
  },
  {
    value: 'purchased_active_business',
    label: 'Purchased active business',
    description: 'You\'re buying a business that is already operating.',
  },
];

// ===== US STATES & TERRITORIES =====

export const US_STATES: SelectOption[] = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District of Columbia' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  // Territories
  { value: 'AS', label: 'American Samoa' },
  { value: 'GU', label: 'Guam' },
  { value: 'MH', label: 'Marshall Islands' },
  { value: 'FM', label: 'Micronesia' },
  { value: 'MP', label: 'Northern Mariana Islands' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'VI', label: 'U.S. Virgin Islands' },
];

// ===== SUFFIX OPTIONS =====

export const SUFFIX_OPTIONS: SelectOption[] = [
  { value: '', label: 'None' },
  { value: 'Jr', label: 'Jr' },
  { value: 'Sr', label: 'Sr' },
  { value: 'I', label: 'I' },
  { value: 'II', label: 'II' },
  { value: 'III', label: 'III' },
  { value: 'IV', label: 'IV' },
  { value: 'V', label: 'V' },
  { value: 'VI', label: 'VI' },
  { value: 'MD', label: 'MD' },
  { value: 'DDS', label: 'DDS' },
  { value: 'PHD', label: 'PhD' },
];

// ===== MONTHS =====

export const MONTHS: SelectOption[] = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
];

// ===== BUSINESS ACTIVITIES =====

export const BUSINESS_ACTIVITIES: SelectOption[] = [
  { value: 'accommodation_food', label: 'Accommodation & Food Services' },
  { value: 'construction', label: 'Construction' },
  { value: 'finance_insurance', label: 'Finance & Insurance' },
  { value: 'health_care', label: 'Health Care & Social Assistance' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'real_estate', label: 'Real Estate' },
  { value: 'rental_leasing', label: 'Rental & Leasing' },
  { value: 'retail_trade', label: 'Retail Trade' },
  { value: 'transportation_warehousing', label: 'Transportation & Warehousing' },
  { value: 'wholesale_trade', label: 'Wholesale Trade' },
  { value: 'other', label: 'Other' },
];

// ===== ROLE OPTIONS BY ENTITY TYPE =====

export const ROLE_OPTIONS: Record<string, { self: string; thirdParty: string }> = {
  sole_proprietor: {
    self: 'I am the sole proprietor',
    thirdParty: 'I am a third party applying on behalf of this sole proprietor',
  },
  partnership: {
    self: 'I am a general partner of this partnership',
    thirdParty: 'I am a third party applying on behalf of this partnership',
  },
  corporation: {
    self: 'I am an officer, director, or principal of this corporation',
    thirdParty: 'I am a third party applying on behalf of this corporation',
  },
  llc: {
    self: 'I am an owner, member, or managing member of this LLC',
    thirdParty: 'I am a third party applying on behalf of this LLC',
  },
  estate: {
    self: 'I am the executor, personal representative, or administrator of this estate',
    thirdParty: 'I am a third party applying on behalf of this estate',
  },
  trust: {
    self: 'I am the grantor, creator, or trustee of this trust',
    thirdParty: 'I am a third party applying on behalf of this trust',
  },
  additional: {
    self: 'I am an authorized representative of this organization',
    thirdParty: 'I am a third party applying on behalf of this organization',
  },
};

// ===== ENTITY DISPLAY NAMES =====

export const ENTITY_DISPLAY_NAMES: Record<string, string> = {
  sole_proprietor: 'Sole Proprietor',
  partnership: 'Partnership',
  corporation: 'Corporation',
  llc: 'LLC',
  estate: 'Estate',
  trust: 'Trust',
  additional: 'Organization',
};
