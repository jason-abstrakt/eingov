import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Treasury Inspector General for Tax Administration | EIN Gov',
  description:
    'Learn about the Treasury Inspector General for Tax Administration (TIGTA), the independent oversight body for the IRS. Report fraud, waste, and abuse.',
};

export default function TreasuryInspectorGeneralPage() {
  return (
    <InfoPageLayout
      title="Treasury Inspector General for Tax Administration"
      subtitle="Independent oversight of the Internal Revenue Service"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Overview
        </h2>
        <p>
          The Treasury Inspector General for Tax Administration (TIGTA) is an
          independent office established by Congress in 1998 to provide
          oversight of IRS activities. TIGTA promotes the economy, efficiency,
          and effectiveness of tax administration while also protecting the
          IRS and its employees against external threats.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Mission and Functions
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Conducting independent audits of IRS programs and operations</li>
          <li>Investigating allegations of criminal activity by IRS employees</li>
          <li>Protecting the IRS from external threats, including attempts to corrupt or threaten IRS employees</li>
          <li>Providing recommendations to improve IRS operations and efficiency</li>
          <li>Reporting to Congress on the status of IRS programs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Reporting Concerns
        </h2>
        <p>
          TIGTA accepts complaints from the public regarding IRS employee
          misconduct, waste, fraud, and abuse within IRS programs. You can
          report concerns through:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>TIGTA Hotline: 1-800-366-4484</li>
          <li>TIGTA online complaint form</li>
          <li>Written correspondence to TIGTA offices</li>
        </ul>
        <p className="mt-3">
          Complaints can be made anonymously. TIGTA protects the
          confidentiality of complainants to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Focus Areas
        </h2>
        <p>
          TIGTA regularly examines critical areas of IRS operations, including
          cybersecurity and data protection, tax filing season readiness,
          taxpayer service quality, enforcement activities and compliance
          programs, and the implementation of new tax legislation.
        </p>
      </section>
    </InfoPageLayout>
  );
}
