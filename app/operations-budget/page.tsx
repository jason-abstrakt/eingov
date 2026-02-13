import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS Operations & Budget Information | EIN Gov',
  description:
    'Learn about the Internal Revenue Service operations, budget, and how the agency manages tax administration for the United States federal government.',
};

export default function OperationsBudgetPage() {
  return (
    <InfoPageLayout
      title="IRS Operations & Budget"
      subtitle="How the Internal Revenue Service manages tax administration"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Overview
        </h2>
        <p>
          The Internal Revenue Service (IRS) is the revenue service of the
          United States federal government, responsible for collecting federal
          taxes and enforcing the Internal Revenue Code. Operating under the
          authority of the Department of the Treasury, the IRS processes
          hundreds of millions of tax returns annually and administers the
          nation&apos;s tax system.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Budget and Funding
        </h2>
        <p>
          The IRS budget is allocated by Congress through the annual
          appropriations process. The agency&apos;s funding covers several key
          areas:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Taxpayer Services:</strong> Providing assistance to taxpayers through various channels</li>
          <li><strong>Enforcement:</strong> Ensuring compliance with tax laws</li>
          <li><strong>Operations Support:</strong> Infrastructure, technology, and administrative functions</li>
          <li><strong>Business Systems Modernization:</strong> Updating and improving technology systems</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Operational Functions
        </h2>
        <p>The IRS performs several critical functions:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Processing individual and business tax returns</li>
          <li>Issuing refunds to eligible taxpayers</li>
          <li>Conducting audits and examinations</li>
          <li>Collecting delinquent taxes</li>
          <li>Issuing Employer Identification Numbers (EINs)</li>
          <li>Providing taxpayer education and assistance</li>
          <li>Investigating tax fraud and financial crimes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Modernization Efforts
        </h2>
        <p>
          The IRS has been undergoing significant modernization efforts to
          improve taxpayer services and operational efficiency. These include
          upgrades to online tools, improved phone service, and the development
          of digital filing options. These improvements aim to make it easier
          for taxpayers and businesses to meet their tax obligations.
        </p>
      </section>
    </InfoPageLayout>
  );
}
