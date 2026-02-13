import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS E-Services for Tax Professionals | EIN Gov',
  description:
    'Learn about IRS e-Services, a suite of online tools for tax professionals and authorized e-file providers. Access transcripts, TIN matching, and more.',
};

export default function EServicesPage() {
  return (
    <InfoPageLayout
      title="IRS E-Services"
      subtitle="Online tools for tax professionals"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What are E-Services?
        </h2>
        <p>
          IRS e-Services is a suite of web-based tools that allow tax
          professionals, reporting agents, mortgage industry participants, and
          payers to do business with the IRS electronically. These tools are
          designed to streamline interactions between practitioners and the IRS.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Available Tools
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Transcript Delivery System (TDS):</strong> Allows
            authorized tax professionals to view and receive client transcripts
            online
          </li>
          <li>
            <strong>TIN Matching:</strong> Enables payers and authorized agents
            to match Taxpayer Identification Numbers (TINs) with names before
            submitting information returns
          </li>
          <li>
            <strong>e-File Application:</strong> Submit and manage your e-file
            application online
          </li>
          <li>
            <strong>Disclosure Authorization (DA):</strong> Submit Form 2848
            (Power of Attorney) or Form 8821 (Tax Information Authorization)
            electronically
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Who Can Use E-Services?
        </h2>
        <p>
          E-Services are available to tax professionals who are approved IRS
          e-file providers. To access these tools, you must first register for
          an e-Services account and complete identity verification. Access is
          typically available to:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Enrolled Agents</li>
          <li>Certified Public Accountants (CPAs)</li>
          <li>Attorneys</li>
          <li>Authorized IRS e-file providers</li>
          <li>Reporting agents</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Registration and Access
        </h2>
        <p>
          To register for e-Services, tax professionals must create an IRS
          online account, complete identity verification, and be approved as an
          e-file provider. The registration process requires providing personal
          identification information and passing a suitability check.
        </p>
      </section>
    </InfoPageLayout>
  );
}
