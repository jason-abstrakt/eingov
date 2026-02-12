import type { EINApplicationState } from './types';

export function validateRequired(value: string | null | undefined, label: string): string | null {
  if (!value || !String(value).trim()) return `${label} is required`;
  return null;
}

export function validateSSN(value: string): string | null {
  if (!value) return 'SSN / ITIN is required';
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 9) return 'Must be 9 digits (e.g., 123-45-6789)';
  if (/^0{9}$/.test(digits)) return 'Invalid SSN';
  return null;
}

export function validateName(value: string, label: string): string | null {
  const req = validateRequired(value, label);
  if (req) return req;
  if (/[^a-zA-Z\s\-&']/.test(value)) return `${label} can only contain letters, hyphens, and ampersands`;
  return null;
}

export function validateZip(value: string): string | null {
  if (!value) return 'ZIP code is required';
  if (!/^\d{5}(-?\d{4})?$/.test(value)) return 'Enter a valid 5-digit or 9-digit ZIP code';
  return null;
}

export function validateDate(value: string, label: string): string | null {
  if (!value) return `${label} is required`;
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return 'Use MM/DD/YYYY format';
  const [, mm, dd, yyyy] = match;
  const month = parseInt(mm, 10);
  const day = parseInt(dd, 10);
  const year = parseInt(yyyy, 10);
  if (month < 1 || month > 12) return 'Invalid month';
  if (day < 1 || day > 31) return 'Invalid day';
  if (year < 1900 || year > 2100) return 'Invalid year';
  const d = new Date(year, month - 1, day);
  if (d.getMonth() !== month - 1 || d.getDate() !== day) return 'Invalid date';
  return null;
}

export function validateEIN(value: string): string | null {
  if (!value) return 'Previous EIN is required';
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 9) return 'EIN must be 9 digits (XX-XXXXXXX)';
  return null;
}

export function validatePositiveInteger(value: string, label: string): string | null {
  if (!value) return `${label} is required`;
  const num = parseInt(value, 10);
  if (isNaN(num) || num < 1) return `${label} must be at least 1`;
  if (!Number.isInteger(num)) return `${label} must be a whole number`;
  return null;
}

export function validatePhone(value: string): string | null {
  if (!value) return 'Phone number is required';
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 10) return 'Enter a valid 10-digit phone number';
  return null;
}

// ===== PER-STEP VALIDATION =====

export function validateStep(step: number, state: EINApplicationState): Record<string, string> {
  const errors: Record<string, string> = {};

  switch (step) {
    case 1:
      if (!state.entityType) errors.entityType = 'Select an entity type';
      if (state.entityType === 'llc') {
        const memberErr = validatePositiveInteger(state.llcMemberCount, 'Number of members');
        if (memberErr) errors.llcMemberCount = memberErr;
        if (!state.llcState) errors.llcState = 'Select a state';
      }
      if (
        state.entityType &&
        state.entityType !== 'estate' &&
        state.entityType !== 'llc' &&
        !state.entitySubType
      ) {
        errors.entitySubType = 'Select a sub-type';
      }
      if (state.entityType && state.entityType !== 'estate' && !state.reasonForApplying) {
        errors.reasonForApplying = 'Select a reason for applying';
      }
      break;

    case 2: {
      const ssnErr = validateSSN(state.ssn);
      if (ssnErr) errors.ssn = ssnErr;
      const fnErr = validateName(state.firstName, 'First name');
      if (fnErr) errors.firstName = fnErr;
      const lnErr = validateName(state.lastName, 'Last name');
      if (lnErr) errors.lastName = lnErr;
      if (!state.applicantRole) errors.applicantRole = 'Select your role';
      if (state.applicantRole === 'third_party') {
        if (!state.thirdPartyDesignee.name.trim()) errors['tpd.name'] = 'Designee name is required';
        const phoneErr = validatePhone(state.thirdPartyDesignee.phone);
        if (phoneErr) errors['tpd.phone'] = phoneErr;
        if (!state.thirdPartyDesignee.address.street1.trim()) errors['tpd.street1'] = 'Street address is required';
        if (!state.thirdPartyDesignee.address.city.trim()) errors['tpd.city'] = 'City is required';
        if (!state.thirdPartyDesignee.address.state) errors['tpd.state'] = 'State is required';
        const tpdZipErr = validateZip(state.thirdPartyDesignee.address.zip);
        if (tpdZipErr) errors['tpd.zip'] = tpdZipErr;
      }
      break;
    }

    case 3: {
      if (!state.mailingAddress.street1.trim()) errors['mailing.street1'] = 'Street address is required';
      if (!state.mailingAddress.city.trim()) errors['mailing.city'] = 'City is required';
      if (!state.mailingAddress.state) errors['mailing.state'] = 'State is required';
      const mailZipErr = validateZip(state.mailingAddress.zip);
      if (mailZipErr) errors['mailing.zip'] = mailZipErr;
      if (state.physicalSameAsMailing === null) errors.physicalSameAsMailing = 'Select whether physical location is the same';
      if (state.physicalSameAsMailing === false) {
        if (!state.physicalAddress.street1.trim()) errors['physical.street1'] = 'Street address is required';
        if (!state.physicalAddress.city.trim()) errors['physical.city'] = 'City is required';
        if (!state.physicalAddress.state) errors['physical.state'] = 'State is required';
        const physZipErr = validateZip(state.physicalAddress.zip);
        if (physZipErr) errors['physical.zip'] = physZipErr;
      }
      break;
    }

    case 4: {
      if (state.entityType === 'estate') {
        const dSSN = validateSSN(state.decedentSSN);
        if (dSSN) errors.decedentSSN = dSSN;
        const dFN = validateName(state.decedentFirstName, "Decedent's first name");
        if (dFN) errors.decedentFirstName = dFN;
        const dLN = validateName(state.decedentLastName, "Decedent's last name");
        if (dLN) errors.decedentLastName = dLN;
        const dDate = validateDate(state.dateOfDeath, 'Date of death');
        if (dDate) errors.dateOfDeath = dDate;
        if (!state.decedentState) errors.decedentState = 'Select a state';
      } else if (state.entityType === 'trust') {
        if (!state.trustName.trim()) errors.trustName = 'Trust name is required';
        const tfDate = validateDate(state.dateFunded, 'Date trust was funded');
        if (tfDate) errors.dateFunded = tfDate;
      } else {
        if (!state.legalName.trim()) errors.legalName = 'Legal name is required';
        const startErr = validateDate(state.startDate, 'Start date');
        if (startErr) errors.startDate = startErr;
        if (!state.closingMonth) errors.closingMonth = 'Select a closing month';
        if (!state.businessActivity) errors.businessActivity = 'Select a business activity';
        if (!state.specificProducts.trim()) errors.specificProducts = 'Describe your products or services';
        if (state.entityType === 'corporation' && !state.stateOfIncorporation) {
          errors.stateOfIncorporation = 'Select the state of incorporation';
        }
        if (state.entityType === 'partnership') {
          const pErr = validatePositiveInteger(state.numberOfPartners, 'Number of partners');
          if (pErr) errors.numberOfPartners = pErr;
        }
        if (state.hasPreviousEIN === null) errors.hasPreviousEIN = 'Select yes or no';
        if (state.hasPreviousEIN === true) {
          const einErr = validateEIN(state.previousEIN);
          if (einErr) errors.previousEIN = einErr;
        }
      }
      break;
    }

    default:
      break;
  }

  return errors;
}

// ===== GET FIELDS FOR STEP (for touch-all on Continue) =====

export function getFieldsForStep(step: number, state: EINApplicationState): string[] {
  switch (step) {
    case 1: {
      const fields = ['entityType'];
      if (state.entityType === 'llc') {
        fields.push('llcMemberCount', 'llcState');
      } else if (state.entityType && state.entityType !== 'estate') {
        fields.push('entitySubType');
      }
      if (state.entityType && state.entityType !== 'estate') {
        fields.push('reasonForApplying');
      }
      return fields;
    }
    case 2: {
      const fields = ['ssn', 'firstName', 'lastName', 'applicantRole'];
      if (state.applicantRole === 'third_party') {
        fields.push('tpd.name', 'tpd.phone', 'tpd.street1', 'tpd.city', 'tpd.state', 'tpd.zip');
      }
      return fields;
    }
    case 3: {
      const fields = ['mailing.street1', 'mailing.city', 'mailing.state', 'mailing.zip', 'physicalSameAsMailing'];
      if (state.physicalSameAsMailing === false) {
        fields.push('physical.street1', 'physical.city', 'physical.state', 'physical.zip');
      }
      return fields;
    }
    case 4: {
      if (state.entityType === 'estate') {
        return ['decedentSSN', 'decedentFirstName', 'decedentLastName', 'dateOfDeath', 'decedentState'];
      }
      if (state.entityType === 'trust') {
        return ['trustName', 'dateFunded'];
      }
      const fields = ['legalName', 'startDate', 'closingMonth', 'businessActivity', 'specificProducts', 'hasPreviousEIN'];
      if (state.entityType === 'corporation') fields.push('stateOfIncorporation');
      if (state.entityType === 'partnership') fields.push('numberOfPartners');
      if (state.hasPreviousEIN === true) fields.push('previousEIN');
      return fields;
    }
    default:
      return [];
  }
}
