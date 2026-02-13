import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Form W-9 — Request for Taxpayer Identification Number | EIN Gov',
  description:
    'Learn about IRS Form W-9, used to provide your taxpayer identification number (TIN) to businesses that pay you. Understand when and how to complete Form W-9.',
};

export default function FormW9Page() {
  return (
    <InfoPageLayout
      title="Form W-9"
      subtitle="Request for Taxpayer Identification Number and Certification"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Form W-9?
        </h2>
        <p>
          IRS Form W-9 is used to provide your correct Taxpayer Identification
          Number (TIN) to a person or entity who is required to file an
          information return with the IRS. The requesting party uses the
          information from your W-9 to prepare forms such as 1099-NEC,
          1099-MISC, or other information returns.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          When is a W-9 Required?
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>When you work as an independent contractor or freelancer</li>
          <li>When a business pays you $600 or more during the year</li>
          <li>When you open a new bank or investment account</li>
          <li>When you receive interest, dividends, or other reportable payments</li>
          <li>When you engage in real estate transactions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Information Required
        </h2>
        <p>Form W-9 asks for:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Your name (and business name, if different)</li>
          <li>Federal tax classification (individual, LLC, corporation, etc.)</li>
          <li>Address</li>
          <li>Taxpayer Identification Number (SSN or EIN)</li>
          <li>Certification and signature</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN vs. SSN on Form W-9
        </h2>
        <p>
          If you are completing a W-9 for your business, you should use your
          Employer Identification Number (EIN) rather than your personal Social
          Security Number. This helps keep your personal SSN private and
          separates your business identity from your personal identity. If you
          do not yet have an EIN, you can apply for one through our online
          application.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Important Notes
        </h2>
        <p>
          Form W-9 is not sent to the IRS — it is kept by the requesting party.
          Never send your W-9 to the IRS directly. Be cautious about who
          requests your W-9, as it contains sensitive information like your TIN.
          Only provide it to legitimate businesses that will be making payments
          to you.
        </p>
      </section>
    </InfoPageLayout>
  );
}
