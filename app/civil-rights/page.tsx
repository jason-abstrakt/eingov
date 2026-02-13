import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Civil Rights at the IRS | EIN Gov',
  description:
    'Learn about civil rights protections in IRS programs and activities. The IRS ensures equal access to services regardless of race, color, national origin, or disability.',
};

export default function CivilRightsPage() {
  return (
    <InfoPageLayout
      title="Civil Rights at the IRS"
      subtitle="Equal access and nondiscrimination in tax administration"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Civil Rights Office
        </h2>
        <p>
          The IRS Office of Equity, Diversity, and Inclusion is responsible for
          ensuring that the IRS provides equal access to its programs and
          activities for all taxpayers. The office works to prevent
          discrimination based on race, color, national origin, disability, age,
          sex, or reprisal in IRS programs and services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Your Rights as a Taxpayer
        </h2>
        <p>
          All taxpayers have the right to receive equal treatment from the IRS
          regardless of their background. This includes:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Equal access to IRS services and assistance</li>
          <li>Reasonable accommodations for individuals with disabilities</li>
          <li>Language assistance for taxpayers with limited English proficiency</li>
          <li>Protection from discrimination in all IRS programs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Language Access Services
        </h2>
        <p>
          The IRS provides language assistance services to taxpayers who have
          limited English proficiency. These services include translated forms
          and publications, over-the-phone interpretation services, and
          in-person interpreter services at Taxpayer Assistance Centers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Filing a Complaint
        </h2>
        <p>
          If you believe you have been discriminated against in an IRS program
          or activity, you can file a complaint with the IRS Office of Equity,
          Diversity, and Inclusion. Complaints should be filed within 180 days
          of the alleged discriminatory action and can be submitted in writing
          to the IRS.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Applicable Laws
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Title VI of the Civil Rights Act of 1964</li>
          <li>Section 504 of the Rehabilitation Act of 1973</li>
          <li>Age Discrimination Act of 1975</li>
          <li>Americans with Disabilities Act (ADA)</li>
          <li>Executive Order 13166 (Limited English Proficiency)</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
