import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS Audit Techniques & Guides | EIN Gov',
  description:
    'Learn about IRS audit techniques and examination guidelines. Understand how the IRS conducts audits and what audit technique guides cover for different industries.',
};

export default function AuditTechniquesPage() {
  return (
    <InfoPageLayout
      title="Audit Techniques"
      subtitle="Understanding IRS examination methods and guidelines"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What are Audit Technique Guides?
        </h2>
        <p>
          Audit Technique Guides (ATGs) are IRS publications that provide
          guidance to IRS examiners for auditing specific industries or issues.
          While primarily designed for IRS staff, these guides are available to
          the public and can be valuable resources for tax professionals and
          taxpayers to understand how the IRS approaches audits in various
          industries.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Industries Covered
        </h2>
        <p>
          ATGs are available for a wide range of industries and tax topics,
          including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Construction</li>
          <li>Restaurants and food service</li>
          <li>Real estate</li>
          <li>Healthcare and medical professionals</li>
          <li>Retail and wholesale</li>
          <li>Agriculture and farming</li>
          <li>Professional services (attorneys, accountants)</li>
          <li>Manufacturing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How Audits Work
        </h2>
        <p>
          IRS audits (also called examinations) are reviews of an individual or
          organization&apos;s accounts and financial information to ensure
          information is reported correctly according to tax laws. Audits can
          be conducted by mail (correspondence audit) or in person (office or
          field audit).
        </p>
        <p className="mt-3">
          If you are selected for an audit, the IRS will notify you by mail.
          The IRS does not initiate audits by phone, email, or text message.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Preparing for an Audit
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Maintain organized and accurate business records</li>
          <li>Keep receipts and documentation for all claimed deductions</li>
          <li>Respond to IRS correspondence promptly</li>
          <li>Consider engaging a tax professional for representation</li>
          <li>Understand your rights as a taxpayer during the examination process</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
