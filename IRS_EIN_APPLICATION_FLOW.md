# IRS EIN Online Application - Complete Flow Documentation

> **Source**: https://sa.www4.irs.gov/applyein/
> **Last Verified**: February 2026
> **Purpose**: Document every step, field, and branching path in the IRS EIN online application to enable full UI reconstruction.

---

## Table of Contents

1. [Pre-Application Page](#pre-application-page)
2. [Application Overview (6-Step Flow)](#application-overview)
3. [Step 1: Legal Structure](#step-1-legal-structure)
4. [Step 2: Identity](#step-2-identity)
5. [Step 3: Addresses](#step-3-addresses)
6. [Step 4: Additional Details](#step-4-additional-details)
7. [Step 5: Review & Submit](#step-5-review--submit)
8. [Step 6: EIN Assignment](#step-6-ein-assignment)
9. [Validation Rules](#validation-rules)
10. [Session & Availability](#session--availability)

---

## Pre-Application Page

**URL**: `https://sa.www4.irs.gov/applyein/`

### Important Information Before You Begin
- Must complete application in one session (cannot save and return)
- Session expires after 15 minutes of inactivity
- EIN is received immediately upon verification
- Adobe Reader recommended for confirmation letter

### Restrictions
- Limited to **1 EIN per responsible party per day** (effective May 21, 2012)
- Third-party designee (TPD) must have taxpayer authorization
- Business location must be within the United States or U.S. territories
- Foreign filers without ITIN cannot use this assistant
- Entities incorporated outside U.S./territories cannot apply online (must call 267-941-1099)

### Who Can Use This Tool
- Principal place of business in U.S. or U.S. territories
- Must be the responsible party or authorized representative
- Must have responsible party's SSN or ITIN

### Availability (Eastern Time)
| Day | Hours |
|-----|-------|
| Mon-Fri | 6:00 AM - 1:00 AM (next day) |
| Saturday | 6:00 AM - 9:00 PM |
| Sunday | 6:00 PM - 12:00 AM |

### Action
- **[Begin Application Now]** button → navigates to Step 1

---

## Application Overview

The application consists of **6 steps** displayed in a progress stepper:

| Step | Name | Description |
|------|------|-------------|
| 1 | Legal Structure | Entity type, sub-type, and reason for applying |
| 2 | Identity | Responsible party information (SSN, name, role) |
| 3 | Addresses | Business mailing and physical addresses |
| 4 | Additional Details | Business name, start date, activity, employees, etc. |
| 5 | Review & Submit | Review all entered information and submit |
| 6 | EIN Assignment | Receive EIN and confirmation letter |

### Navigation
- **Continue** button advances to next step
- **Back** button returns to previous step
- **Cancel** link returns to the pre-application page (restarts session)

---

## Step 1: Legal Structure

**URL**: `/applyein/legalStructure`

Step 1 has **three layers of selection** (depending on entity type):
1. **Primary entity type** (always required)
2. **Sub-type** (required for some entity types)
3. **Reason for applying** (required for most entity types)

### 1A. Primary Entity Type Selection

**Question**: "What type of legal structure is applying for an EIN?"
**Field**: Radio buttons (required)

| # | Option | Description |
|---|--------|-------------|
| 1 | **Sole Proprietor** | Includes individuals who are in business for themselves and household employers |
| 2 | **Partnerships** | Includes partnerships and joint ventures |
| 3 | **Corporations** | Includes S corporations, personal service corporations, real estate investment trusts (REIT), regulated investment conduits (RIC), and settlement funds |
| 4 | **Limited Liability Company (LLC)** | A limited liability company (LLC) is a structure allowed by state statute and is formed by filing articles of organization with the state |
| 5 | **Estate** | An estate is a legal entity created as a result of a person's death |
| 6 | **Trusts** | All types of trusts including conservatorships, custodianships, guardianships, irrevocable trusts, revocable trusts, and receiverships |
| 7 | **View Additional Types, Including Tax-Exempt and Governmental Organizations** | If none of the above fit what you are establishing, there are several others to choose from |

---

### 1B. Sub-Type Selection (varies by entity type)

After selecting a primary type, a confirmation box appears with "What it is..." and "What it is not..." descriptions. Some types then require a sub-type selection.

---

#### Sole Proprietor Sub-Types

**Section Header**: "You have chosen Sole Proprietor"
**Question**: "Choose the type of legal structure"

| # | Sub-Type | Description |
|---|----------|-------------|
| 1 | **Sole Proprietor** | A sole proprietorship is a business that has only one owner and is not incorporated or registered with the state as a limited liability company (LLC). A sole proprietor can be a self-employed individual or an independent contractor. Sole proprietors (self-employed individuals) report all business income and expenses on their individual tax returns (Form 1040, U.S. Individual Income Tax Return, Schedule C, E, or F). A sole proprietor may or may not have employees. |
| 2 | **Household Employer** | You are a household employer if you have hired someone to do household work and that worker is your employee. Household employees include: babysitters, nannies, au pairs, cleaning people, housekeepers, maids, drivers, health aides, private nurses, caretakers, yard workers, and similar domestic workers. |

**Confirmation Box Notes**:
- IMPORTANT: A sole proprietor may have only one EIN, regardless of the number of businesses you own or operate
- Business cannot be incorporated or registered with the state as an LLC

---

#### Partnerships Sub-Types

**Section Header**: "You have chosen Partnerships"
**Question**: "Choose the type of legal structure"

| # | Sub-Type | Description |
|---|----------|-------------|
| 1 | **Partnership** | A partnership is a relationship existing between two or more persons or groups who join together to carry on a trade or business. Each partner contributes money, property, labor, or skill, and expects to share in the profits and losses of the business. |
| 2 | **Joint Venture** | A joint venture is a partnership formed between two or more business entities. These businesses share risk or expertise on a specific project or group of projects. |

---

#### Corporations Sub-Types

**Section Header**: "You have chosen Corporations"
**Question**: "Choose the type of legal structure"

| # | Sub-Type | Description |
|---|----------|-------------|
| 1 | **Corporation** | A corporation is a person or group of people who establish a legal entity by filing articles of incorporation with the state's secretary of state granting it certain legal powers, rights, privileges, and liabilities. |
| 2 | **S Corporation** | The income of an S corporation generally is taxed to the shareholders of the corporation rather than to the corporation itself. However, an S corporation may still owe tax on certain income. |
| 3 | **Personal Service Corporation** | A personal service corporation involves services in the fields of health, law, engineering, architecture, accounting, actuarial science, performing arts, or consulting. |
| 4 | **Real Estate Investment Trust (REIT)** | A REIT is an investment vehicle established for the benefit of a group of real estate investors. |
| 5 | **Regulated Investment Conduit (RIC)** | A RIC is a regulated investment company that applies to any domestic corporation that meets certain criteria. |
| 6 | **Settlement Fund (under IRC Sec 468B)** | A settlement fund is established for the principal purpose of settling and paying claims against the electing taxpayer under Internal Revenue Code (IRC) Section 468B. |

**Confirmation Box Notes**:
- A corporation is not a sole proprietor or partnership
- If incorporated outside of U.S. or territories, cannot apply online (call 267-941-1099)

---

#### Limited Liability Company (LLC) - No Sub-Type Selection

LLC does **NOT** have a sub-type radio selection. Instead, it has **two unique fields**:

**Section Header**: "Tell us more about the members of the Limited Liability Company (LLC)"

| # | Field | Type | Required | Details |
|---|-------|------|----------|---------|
| 1 | **How many member(s) are in the LLC?** | Text input (numeric) | Yes* | Determines single-member vs multi-member classification |
| 2 | **Please select the state/territory where the business is physically located** | Dropdown | Yes* | All 50 states + DC + territories + Armed Forces |

**Member Count Logic**:
- If **1 member**: Shows "Single Member Limited Liability Company (LLC)" confirmation
  - Initially classified as a "disregarded entity" for federal tax purposes
  - If only member is an individual → LLC income reported on Form 1040 (Schedule C, E, or F)
  - If only member is not an individual → LLC income reported on owner/member's tax return
  - Can file Form 8832 to elect corporate status, or Form 2553 for S corporation status
  - Single-member LLCs may NOT file a partnership return
- If **2+ members**: Shows "Multi-Member Limited Liability Company (LLC)" confirmation
  - Classified as a partnership for federal tax purposes

**State/Territory Dropdown Options**:

All 50 US states (AK through WY), plus:
- District of Columbia (DC)
- American Samoa (AS)
- Micronesia, Federated States (FM)
- Guam (GU)
- Marshall Islands (MH)
- Northern Mariana Island (MP)
- Puerto Rico (PR)
- Virgin Islands (US) (VI)
- Armed Forces Americas (AA)
- Armed Forces Pacific (AP)
- Armed Forces Others (AE)
- Armed Forces Africa (AE)
- Armed Forces Canada (AE)
- Armed Forces Europe (AE)
- Armed Forces Middle East (AE)

**Confirmation Box Notes**:
- An LLC is formed by filing articles of organization with the state's secretary of state office
- An LLC must be unique in its state
- For federal tax purposes, an LLC may be treated as a partnership or a corporation, or be disregarded as an entity separate from its owner
- Can have two or more members (multi-member) or one member (single-member)
- Can have an unlimited number of members
- Members may include individuals, corporations, other LLCs, or foreign entities
- LLCs are NOT incorporated and do NOT file articles of incorporation

---

#### Estate - No Sub-Type Selection

Estate has **NO sub-type selection** and **NO reason for applying** question.

It goes directly from the confirmation box to Continue.

**Confirmation Box Notes**:
- An estate (or decedent estate) is a legal entity created as a result of a person's death
- The estate consists of the real and/or personal property of the deceased person
- The estate pays any debts owed by the decedent and distributes the balance of the estate's assets to the beneficiaries of the estate
- An estate arises on a person's death whether the person died with or without a will

---

#### Trusts Sub-Types

**Section Header**: "Identify the type of Trust"
**Instruction**: "You must identify one Type of trust you are applying for. If you don't see your trust type, select 'Trust (All Others)'"
**Question**: "Choose the type of legal structure"

| # | Sub-Type |
|---|----------|
| 1 | Bankruptcy Estate (Individual) |
| 2 | Charitable Lead Annuity Trust |
| 3 | Charitable Lead Unitrust |
| 4 | Charitable Remainder Annuity Trust |
| 5 | Charitable Remainder Unitrust |
| 6 | Conservatorship |
| 7 | Custodianship |
| 8 | Escrow |
| 9 | FNMA (Fannie Mae) |
| 10 | GNMA (Ginnie Mae) |
| 11 | Guardianship |
| 12 | Irrevocable Trust |
| 13 | Pooled Income Fund |
| 14 | Qualified Funeral Trust |
| 15 | Receivership |
| 16 | Revocable Trust |
| 17 | Settlement Fund (under IRC Sec 468B) |
| 18 | Trust (All Others) |

---

#### Additional Types (Tax-Exempt & Governmental Organizations)

**Section Header**: "Additional Types"
**Instruction**: "In order to obtain an EIN from the IRS, you must know what type of structure or organization you are setting up. If you need additional assistance, consult an accountant or other tax professional before applying for your EIN, or call the IRS at 1-800-829-4933."
**Question**: "Choose the type of legal structure"

| # | Sub-Type |
|---|----------|
| 1 | Bankruptcy Estate (Individual) |
| 2 | Block/Tenant Association |
| 3 | Church |
| 4 | Church-Controlled Organization |
| 5 | Community or Volunteer Group |
| 6 | Employer/Fiscal Agent (under IRC Sec 3504) |
| 7 | Employer Plan (401K, Money Purchase Plan, etc.) |
| 8 | Farmer's Cooperative |
| 9 | Government, Federal/Military |
| 10 | Government, Indian Tribal Governments |
| 11 | Government, State/Local |
| 12 | Homeowners/Condo Association |
| 13 | Household Employer |
| 14 | IRA |
| 15 | Memorial or Scholarship Fund |
| 16 | Plan Administrator |
| 17 | Political Organization |
| 18 | PTA/PTO or School Organization |
| 19 | REMIC |
| 20 | Social or Savings Club |
| 21 | Sports Teams (community) |
| 22 | Withholding Agent |
| 23 | Other Non-Profit/Tax-Exempt Organizations |

---

### 1C. Reason for Applying

**Not shown for**: Estate (skips directly to Step 2)
**Shown for**: Sole Proprietor, Partnerships, Corporations, LLC, Trusts, and most Additional Types

**Question format**: "Why is the [Entity Type] requesting an EIN?"
**Instruction**: "If your main reason for applying is not on the list, please select the option you feel is closest to your main reason. If more than one reason applies to you, choose the best or main reason."

**For Corporations, additional note**: "Note: If you were incorporated outside of the United States or U.S. territories, you cannot apply for an EIN online. Please call us at 267-941-1099 (this is not a toll free number). Please exit the application by clicking 'Exit' above."

| # | Reason | Description |
|---|--------|-------------|
| 1 | **Started a new business** | If you are beginning a new business |
| 2 | **Hired employee(s)** | If you already have a business and need to hire employees |
| 3 | **Banking purposes** | If the reason for applying for the EIN is strictly to satisfy banking requirements or local law |
| 4 | **Changed type of organization** | If you are changing the type of organization you currently operate, such as changing from a sole proprietor to a partnership, changing from a partnership to a corporation, etc. |
| 5 | **Purchased active business** | If you are purchasing a business that is already in operation |

> **Note**: These 5 reasons are consistent across Sole Proprietor, Partnership, Corporation, and LLC entity types. Estate has no reason selection. Trust and Additional Types may have different/additional reason options.

---

## Step 2: Identity

**URL**: `/applyein/identityOfEntities`

### Section Header
- **For Sole Proprietor**: "Please tell us about the Sole Proprietor"
- **For LLC**: "Please tell us about the Responsible Party of the LLC"
- **For Corporation/Partnership**: "Please tell us about the Responsible Party of the [Entity Type]"
- **For Estate**: "Please tell us about the Executor, Personal Representative, or Administrator of the Estate"
- **For Trust**: "Please tell us about the Grantor, Creator, or Trustee of the Trust"

**Important note**: "Must match IRS records or this application cannot be processed."

### Fields

| # | Field | Type | Required | Validation/Notes |
|---|-------|------|----------|-----------------|
| 1 | **SSN/ITIN** | Text input (masked) | Yes* | Format: 123-45-6789. Has "Show SSN/ITIN" toggle link. Has help (?) tooltip. |
| 2 | **First name** | Text input | Yes* | Only special characters allowed: '-' and '&' |
| 3 | **Middle name/initial** | Text input | No | Only special characters allowed: '-' and '&' |
| 4 | **Last name** | Text input | Yes* | Only special characters allowed: '-' and '&' |
| 5 | **Suffix** | Dropdown | No | Options: (blank), DDS, MD, PHD, Jr, Sr, I, II, III, IV, V, VI |

### Your Role Section

**Question**: "Choose one" (required)

The role options vary by entity type:

#### Sole Proprietor Roles
| # | Option |
|---|--------|
| 1 | I am the sole proprietor. |
| 2 | I am a third party applying for an EIN on behalf of this sole proprietor. |

#### LLC Roles
| # | Option |
|---|--------|
| 1 | I am one of the owners, members, or the managing member of this LLC. |
| 2 | I am a third party applying for an EIN on behalf of this LLC. |

#### Corporation Roles
| # | Option |
|---|--------|
| 1 | I am an officer, director, or principal of this corporation. |
| 2 | I am a third party applying for an EIN on behalf of this corporation. |

#### Partnership Roles
| # | Option |
|---|--------|
| 1 | I am a general partner of this partnership. |
| 2 | I am a third party applying for an EIN on behalf of this partnership. |

#### Estate Roles
| # | Option |
|---|--------|
| 1 | I am the executor, personal representative, or administrator of this estate. |
| 2 | I am a third party applying for an EIN on behalf of this estate. |

#### Trust Roles
| # | Option |
|---|--------|
| 1 | I am the grantor, creator, or trustee of this trust. |
| 2 | I am a third party applying for an EIN on behalf of this trust. |

### Third Party Designee (TPD) Additional Fields

When "I am a third party..." is selected, **additional fields** appear:

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Third Party Designee name** | Text input | Yes* | Name of the person/firm applying on behalf |
| 2 | **Designee telephone number** | Text input | Yes* | Phone number of the designee |
| 3 | **Designee address** | Text inputs | Yes* | Street, city, state, ZIP |
| 4 | **Designee fax number** | Text input | No | Fax number of the designee |

---

## Step 3: Addresses

**URL**: `/applyein/addressOfEntities`

### Mailing Address

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Street address line 1** | Text input | Yes* | Cannot be a P.O. Box for physical location |
| 2 | **Street address line 2** | Text input | No | Suite, apartment, etc. |
| 3 | **City** | Text input | Yes* | |
| 4 | **State** | Dropdown | Yes* | All 50 states + DC + territories |
| 5 | **ZIP code** | Text input | Yes* | 5-digit or 9-digit (ZIP+4) format |
| 6 | **County** | Text input / Dropdown | Conditional | May appear depending on state |

### Physical Location (if different from mailing)

**Question**: "Is the physical location of this business the same as the mailing address?"
- Radio: **Yes** / **No**

If **No**, the following additional fields appear:

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Street address line 1** | Text input | Yes* | Must be a physical street address (no P.O. Box) |
| 2 | **Street address line 2** | Text input | No | |
| 3 | **City** | Text input | Yes* | |
| 4 | **State** | Dropdown | Yes* | |
| 5 | **ZIP code** | Text input | Yes* | |
| 6 | **County** | Text input / Dropdown | Conditional | |

---

## Step 4: Additional Details

**URL**: `/applyein/additionalDetailsOfEntities`

This step collects business-specific information. Fields vary by entity type.

### Common Fields (Most Entity Types)

| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Legal name of entity** | Text input | Yes* | For LLC/Corp/Partnership: the legal name as registered with the state. For Sole Prop: auto-populated from identity. |
| 2 | **Trade name / DBA** | Text input | No | "Doing Business As" name if different from legal name |
| 3 | **Start date / Date business started or acquired** | Date input (MM/DD/YYYY) | Yes* | When the business started or was acquired |
| 4 | **Closing month of accounting year** | Dropdown | Yes* | January through December (default: December) |

### Entity-Specific Fields

#### For Sole Proprietor / LLC (Single-Member)
| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Type of business activity** | Dropdown / Radio | Yes* | Categories of business activity |
| 2 | **Specific products or services** | Text input | Yes* | Describe what the business does |
| 3 | **Do you want to apply for payroll tax withholding?** | Yes/No radio | Conditional | If "Hired employees" was selected as reason |
| 4 | **Date first wages paid or will be paid** | Date input | Conditional | If applying for payroll |
| 5 | **Highest number of employees expected in next 12 months** | Text inputs | Conditional | Broken into: Agricultural, Household, Other |
| 6 | **Has the applicant entity (or previous owner) ever applied for and received an EIN?** | Yes/No radio | Yes* | If Yes: provide previous EIN |

#### For Corporation
| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **State or foreign country where incorporated** | Dropdown | Yes* | |
| 2 | **Type of business activity** | Dropdown / Radio | Yes* | |
| 3 | **Specific products or services** | Text input | Yes* | |
| 4 | **Number of employees expected** | Text inputs | Conditional | Agricultural, Household, Other |
| 5 | **Date first wages paid or will be paid** | Date input | Conditional | |
| 6 | **Has the applicant entity ever applied for and received an EIN?** | Yes/No radio | Yes* | |

#### For Partnership
| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Number of partners** | Text input | Yes* | |
| 2 | **Type of business activity** | Dropdown / Radio | Yes* | |
| 3 | **Specific products or services** | Text input | Yes* | |
| 4 | **Number of employees expected** | Text inputs | Conditional | |
| 5 | **Date first wages paid or will be paid** | Date input | Conditional | |
| 6 | **Has the applicant entity ever applied for and received an EIN?** | Yes/No radio | Yes* | |

#### For Estate
| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Decedent's SSN** | Text input | Yes* | SSN of the deceased person |
| 2 | **Decedent's first name** | Text input | Yes* | |
| 3 | **Decedent's last name** | Text input | Yes* | |
| 4 | **Date of death** | Date input | Yes* | |
| 5 | **State where decedent was domiciled** | Dropdown | Yes* | |

#### For Trust
| # | Field | Type | Required | Notes |
|---|-------|------|----------|-------|
| 1 | **Name of trust** | Text input | Yes* | |
| 2 | **Date trust was funded** | Date input | Yes* | |
| 3 | **Type of trust funding** | Radio/Dropdown | Conditional | |

### Business Activity Types

The "type of business activity" typically includes these categories:

| # | Activity Category |
|---|-------------------|
| 1 | Accommodation & Food Services |
| 2 | Construction |
| 3 | Finance & Insurance |
| 4 | Health Care & Social Assistance |
| 5 | Manufacturing |
| 6 | Other |
| 7 | Real Estate |
| 8 | Rental & Leasing |
| 9 | Retail Trade |
| 10 | Transportation & Warehousing |
| 11 | Wholesale Trade |

Each category may expand to show specific sub-activities.

### Employee-Related Fields (when applicable)

**Question**: "Does/will the business have employees in the next 12 months?"
or "Do you expect to have $1,000 or less in employment tax liability for the calendar year?"

| Field | Type | Notes |
|-------|------|-------|
| **Agricultural employees** | Number input | Expected in next 12 months |
| **Household employees** | Number input | Expected in next 12 months |
| **Other employees** | Number input | Expected in next 12 months |
| **Date first wages paid** | Date input (MM/DD/YYYY) | When first wages were/will be paid |
| **Employment tax liability** | Radio (Yes/No) | Whether expecting $1,000 or less |

### Previous EIN Question

**Question**: "Has the applicant entity (or previous owner) ever applied for and received an EIN?"

| Option | Follow-up |
|--------|-----------|
| **Yes** | Text input: "Previous EIN" (format: XX-XXXXXXX) |
| **No** | No additional fields |

---

## Step 5: Review & Submit

**URL**: `/applyein/reviewAndSubmit`

### Overview
This step displays a summary of ALL information entered in Steps 1-4 for review before submission.

### Sections Displayed
1. **Legal Structure Summary** - Shows selected entity type, sub-type, and reason
2. **Identity Summary** - Shows responsible party information
3. **Address Summary** - Shows mailing and physical addresses
4. **Additional Details Summary** - Shows all business details

### Actions
- **Edit** links next to each section allow going back to modify
- **Submit** button to submit the application
- **Back** button to return to Step 4
- **Cancel** link to abandon the application

### Privacy Act Statement
A Privacy Act and Paperwork Reduction Act notice is displayed.

### Important Notes
- Review all information carefully before submitting
- Once submitted, you cannot change the information
- Ensure SSN/name matches IRS records exactly

---

## Step 6: EIN Assignment

**URL**: `/applyein/einAssignment`

### Successful Assignment
Upon successful validation:
- **EIN is displayed** in format: XX-XXXXXXX
- **EIN Confirmation Letter** (CP 575) is available to save/print as PDF
- Instructional text about next steps

### Confirmation Letter (CP 575)
- Available as a PDF download
- Contains the assigned EIN
- Lists the entity name and address
- Indicates the type of tax return(s) expected to be filed
- Should be kept for records

### Important Next Steps Displayed
- Must file appropriate tax returns
- Report beneficial owners to FinCEN when required (BOI reporting)
- State-level registrations may be needed

### If Assignment Fails
- Error message displayed with reason
- May need to call IRS at 267-941-1099
- Common reasons: SSN/name mismatch, daily limit reached, system unavailable

---

## Validation Rules

### SSN/ITIN
- Format: XXX-XX-XXXX (9 digits with dashes)
- Must match IRS records exactly
- Cannot be all zeros
- Cannot be an EIN (must be SSN or ITIN)

### Name Fields
- Only special characters allowed: `-` (hyphen) and `&` (ampersand)
- No numbers allowed
- Cannot be blank (for required fields)
- Must match IRS records for the given SSN/ITIN

### Dates
- Format: MM/DD/YYYY
- Must be valid calendar dates
- Start date cannot be in the future (for some date fields)
- Date of death must be in the past (Estate)

### Address
- ZIP code must be 5 or 9 digits
- State must be selected from dropdown
- Physical address cannot be a P.O. Box

### LLC Members
- Must be a positive integer
- Determines single-member vs multi-member classification

### EIN Format
- XX-XXXXXXX (9 digits, dash after first 2)

---

## Session & Availability

### Session Management
- **Timeout**: 15 minutes of inactivity
- **Cannot save**: Must complete in one session
- **Daily limit**: 1 EIN per responsible party SSN per day
- **Session expired**: Must restart from beginning

### System Availability (Eastern Time)
| Day | Available | Unavailable |
|-----|-----------|-------------|
| Monday-Friday | 6:00 AM - 1:00 AM (next day) | 1:00 AM - 6:00 AM |
| Saturday | 6:00 AM - 9:00 PM | 9:00 PM - 6:00 AM (Sun) |
| Sunday | 6:00 PM - 12:00 AM | 12:00 AM - 6:00 PM |

---

## Complete Flow Diagram

```
START
  │
  ▼
[Pre-Application Page]
  │ Click "Begin Application Now"
  ▼
[STEP 1: Legal Structure]
  │
  ├─► Sole Proprietor
  │     ├─► Sole Proprietor (sub-type)
  │     │     └─► Reason (5 options)
  │     └─► Household Employer (sub-type)
  │           └─► Reason (5 options)
  │
  ├─► Partnerships
  │     ├─► Partnership (sub-type)
  │     │     └─► Reason (5 options)
  │     └─► Joint Venture (sub-type)
  │           └─► Reason (5 options)
  │
  ├─► Corporations
  │     ├─► Corporation (sub-type)
  │     ├─► S Corporation
  │     ├─► Personal Service Corporation
  │     ├─► REIT
  │     ├─► RIC
  │     └─► Settlement Fund (IRC 468B)
  │           └─► Each: Reason (5 options)
  │
  ├─► LLC
  │     ├─► Member count input
  │     ├─► State/Territory dropdown
  │     │     ├─► 1 member → Single-Member LLC confirmation
  │     │     └─► 2+ members → Multi-Member LLC confirmation
  │     └─► Reason (5 options)
  │
  ├─► Estate
  │     └─► (No sub-type, No reason) → Direct to Step 2
  │
  ├─► Trusts
  │     └─► 18 trust sub-types
  │           └─► (Reason varies)
  │
  └─► Additional Types
        └─► 23 additional sub-types
              └─► (Reason varies)
  │
  ▼
[STEP 2: Identity]
  │
  ├─► SSN/ITIN *
  ├─► First name *
  ├─► Middle name/initial
  ├─► Last name *
  ├─► Suffix (dropdown)
  └─► Role * (varies by entity type)
        ├─► "I am the [role]" → Continue
        └─► "I am a third party..." → TPD fields appear
  │
  ▼
[STEP 3: Addresses]
  │
  ├─► Mailing Address
  │     ├─► Street 1 *
  │     ├─► Street 2
  │     ├─► City *
  │     ├─► State *
  │     └─► ZIP *
  └─► Physical Location same as mailing?
        ├─► Yes → Continue
        └─► No → Separate physical address fields
  │
  ▼
[STEP 4: Additional Details]
  │ (Fields vary by entity type - see entity-specific sections above)
  │
  ▼
[STEP 5: Review & Submit]
  │
  ├─► Review all information
  ├─► Edit links for each section
  └─► Submit
  │
  ▼
[STEP 6: EIN Assignment]
  │
  ├─► EIN displayed (XX-XXXXXXX)
  └─► Confirmation letter (CP 575) available as PDF
```

---

## Reason Options Summary (5 Standard Reasons)

These 5 reasons appear for Sole Proprietor, Partnership, Corporation, and LLC:

| # | Reason | When to Select |
|---|--------|---------------|
| 1 | **Started a new business** | Beginning a new business |
| 2 | **Hired employee(s)** | Already have a business and need to hire employees |
| 3 | **Banking purposes** | Strictly to satisfy banking requirements or local law |
| 4 | **Changed type of organization** | Changing from one type to another (e.g., sole prop → partnership) |
| 5 | **Purchased active business** | Purchasing a business already in operation |

---

## Edge Cases & Important Notes

1. **Single vs Multi-Member LLC**: The member count dynamically changes the confirmation text and tax classification displayed
2. **Community Property States**: The state dropdown for LLC includes a help tooltip about community property state implications
3. **Estate has no reason**: Unlike all other entity types, Estate skips the "reason for applying" entirely
4. **Third Party Designee**: Selecting the TPD role adds an entirely new section of fields to Step 2
5. **Foreign incorporation**: Corporations incorporated outside the U.S. are explicitly told they cannot use this tool
6. **SSN matching**: The SSN/name MUST match IRS records exactly or the application will fail at submission
7. **One EIN per day**: Only 1 EIN per responsible party SSN per day - attempting more will be rejected
8. **Browser requirements**: Adobe Reader recommended for the confirmation letter PDF
9. **No save/resume**: The application cannot be saved - must complete in one session
10. **15-minute timeout**: Session expires after 15 minutes of inactivity
11. **Household Employer**: Can appear both as a Sole Proprietor sub-type AND as an Additional Type
12. **Bankruptcy Estate (Individual)**: Appears in both the Trusts sub-types AND the Additional Types list
13. **Settlement Fund (IRC 468B)**: Appears in both Corporations sub-types AND Trusts sub-types
