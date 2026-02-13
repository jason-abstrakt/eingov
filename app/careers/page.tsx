import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Careers at the IRS — Employment Information | EIN Gov',
  description:
    'Learn about career opportunities at the Internal Revenue Service (IRS). Information about IRS jobs, how to apply, and working for the federal government.',
};

export default function CareersPage() {
  return (
    <InfoPageLayout
      title="Careers at the IRS"
      subtitle="Information about employment with the Internal Revenue Service"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Working for the IRS
        </h2>
        <p>
          The Internal Revenue Service (IRS) is one of the largest employers
          within the federal government, with positions across the United States.
          The IRS employs professionals in a wide range of fields, from tax
          examination and collection to information technology, law, and
          administration.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Types of Positions
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Revenue Agents:</strong> Conduct audits and examinations of tax returns</li>
          <li><strong>Revenue Officers:</strong> Work with taxpayers to resolve unpaid tax liabilities</li>
          <li><strong>Tax Examiners:</strong> Review and process tax returns</li>
          <li><strong>IT Specialists:</strong> Maintain and develop IRS technology systems</li>
          <li><strong>Customer Service Representatives:</strong> Assist taxpayers with questions and issues</li>
          <li><strong>Special Agents:</strong> Investigate potential criminal violations of tax law</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Apply
        </h2>
        <p>
          IRS positions are federal government jobs and are posted on USAJOBS
          (usajobs.gov), the official employment site of the United States
          federal government. Applications are submitted through the USAJOBS
          portal, where you can search for openings by keyword, location, and
          job series.
        </p>
        <p className="mt-3">
          Federal job applications typically require a detailed resume,
          responses to assessment questionnaires, and may require transcripts or
          other supporting documentation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Benefits of Federal Employment
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Competitive salary with regular step increases</li>
          <li>Comprehensive health insurance options</li>
          <li>Federal Employees Retirement System (FERS)</li>
          <li>Thrift Savings Plan (TSP) — similar to a 401(k)</li>
          <li>Paid annual leave and sick leave</li>
          <li>Federal holidays</li>
          <li>Student loan repayment programs (select positions)</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
