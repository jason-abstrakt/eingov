import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Act Statement & Paperwork Reduction Act | EIN Gov',
  description:
    'Understand the Privacy Act Statement and Paperwork Reduction Act as they relate to IRS Form SS-4 and EIN applications. Learn about your rights and data protections.',
};

export default function PrivacyActStatementPage() {
  return (
    <InfoPageLayout
      title="Privacy Act Statement & Paperwork Reduction Act"
      subtitle="Understanding your rights when applying for an EIN"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Privacy Act Statement
        </h2>
        <p>
          The Privacy Act of 1974 requires federal agencies to inform individuals
          about the authority, purpose, and uses of information collected from
          them. When you apply for an Employer Identification Number (EIN) using
          IRS Form SS-4, the IRS collects personal information under the
          authority of 26 U.S.C. 6011, which requires tax returns or statements
          to be filed with the IRS.
        </p>
        <p className="mt-3">
          The primary purpose for collecting this information is to establish
          your federal tax account and assign an EIN. The information may also be
          used to identify proper tax liability, for tax administration purposes,
          and for statistical analysis.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Paperwork Reduction Act Notice
        </h2>
        <p>
          The Paperwork Reduction Act of 1995 requires federal agencies to
          minimize the burden of information collection on the public. The IRS
          estimates the average time required to complete Form SS-4 varies
          depending on individual circumstances, including time spent
          record-keeping, learning about the form, and preparing and sending the
          form to the IRS.
        </p>
        <p className="mt-3">
          Our service helps reduce this burden by guiding you through the
          application process step by step, ensuring all required fields are
          completed correctly before submission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Your Data Protection Rights
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your information is used solely for the purpose of obtaining your EIN</li>
          <li>We do not sell or share your personal information with third parties</li>
          <li>All data transmissions are encrypted and secured</li>
          <li>Personal information is retained only as long as necessary to process your application</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Voluntary Disclosure
        </h2>
        <p>
          Providing information on Form SS-4 is voluntary; however, failure to
          provide this information may delay or prevent the processing of your
          EIN application. An EIN is required for businesses and certain other
          entities to comply with federal tax filing obligations.
        </p>
      </section>
    </InfoPageLayout>
  );
}
