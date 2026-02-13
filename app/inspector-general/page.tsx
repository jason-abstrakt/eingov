import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Treasury Inspector General for Tax Administration (TIGTA) | EIN Gov',
  description:
    'Learn about TIGTA, the office that provides independent oversight of IRS activities. Understand how to report fraud, waste, and abuse in tax administration.',
};

export default function InspectorGeneralPage() {
  return (
    <InfoPageLayout
      title="Inspector General for Tax Administration"
      subtitle="Independent oversight of IRS operations"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is TIGTA?
        </h2>
        <p>
          The Treasury Inspector General for Tax Administration (TIGTA) provides
          independent oversight of IRS activities. TIGTA was established in 1999
          to promote economy, efficiency, and effectiveness in the
          administration of the internal revenue laws. TIGTA also works to
          prevent and detect fraud, waste, and abuse within IRS programs and
          operations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          TIGTA&apos;s Responsibilities
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Conducting audits and investigations of IRS programs and operations</li>
          <li>Protecting the IRS against external attempts to corrupt tax administration</li>
          <li>Investigating criminal violations related to IRS employees and operations</li>
          <li>Ensuring taxpayer information is safeguarded</li>
          <li>Reporting findings and recommendations to Congress</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Reporting Fraud, Waste, or Abuse
        </h2>
        <p>
          If you suspect fraud, waste, or abuse involving IRS employees or
          programs, you can report it to TIGTA. You can file a complaint
          through TIGTA&apos;s online complaint form, by calling TIGTA&apos;s toll-free
          hotline at 1-800-366-4484, or by mail. Complaints can be made
          anonymously.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          TIGTA Reports
        </h2>
        <p>
          TIGTA publishes audit reports and semiannual reports to Congress that
          detail its findings and recommendations. These reports cover a wide
          range of topics, including IRS cybersecurity, taxpayer service,
          enforcement activities, and the management of IRS resources. Reports
          are available to the public through the TIGTA website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Employee Misconduct
        </h2>
        <p>
          TIGTA investigates allegations of misconduct by IRS employees,
          including unauthorized access to taxpayer information, bribery,
          extortion, and other criminal activities. If you have information
          about IRS employee misconduct, you can report it directly to TIGTA.
        </p>
      </section>
    </InfoPageLayout>
  );
}
