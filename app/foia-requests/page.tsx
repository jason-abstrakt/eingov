import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'FOIA Requests — Freedom of Information Act | EIN Gov',
  description:
    'Learn how to submit a Freedom of Information Act (FOIA) request to the IRS. Understand what records are available and how the FOIA process works.',
};

export default function FOIARequestsPage() {
  return (
    <InfoPageLayout
      title="Freedom of Information Act (FOIA) Requests"
      subtitle="Accessing IRS records through public information requests"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is FOIA?
        </h2>
        <p>
          The Freedom of Information Act (FOIA) is a federal law that gives
          individuals the right to request access to records from federal
          agencies, including the IRS. FOIA applies to records created or
          obtained by federal agencies and generally provides that any person
          can request access to federal agency records unless they are protected
          from disclosure by specific exemptions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What Records Can You Request?
        </h2>
        <p>
          You can request a variety of IRS records through FOIA, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Internal Revenue Manuals and procedures</li>
          <li>Statistical data and reports</li>
          <li>Policy documents and guidance</li>
          <li>Organizational records</li>
        </ul>
        <p className="mt-3">
          <strong>Important:</strong> FOIA does not provide access to individual
          tax return information. Tax return data is protected under Section
          6103 of the Internal Revenue Code. To obtain copies of your own tax
          returns, you should use IRS Form 4506 or the IRS online transcript
          service.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Submit a FOIA Request
        </h2>
        <p>To submit a FOIA request to the IRS:</p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>Write a letter or use IRS Form 13750 describing the records you seek</li>
          <li>Be as specific as possible about the records you want</li>
          <li>Include your name, address, and contact information</li>
          <li>Mail or fax the request to the IRS FOIA office</li>
        </ol>
        <p className="mt-3">
          The IRS is required to respond to FOIA requests within 20 business
          days. Complex requests may take longer, and the IRS will notify you
          if additional time is needed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          FOIA Exemptions
        </h2>
        <p>
          Certain records are exempt from disclosure under FOIA. Common
          exemptions include classified information, trade secrets, personal
          privacy information, law enforcement records, and tax return
          information protected by statute.
        </p>
      </section>
    </InfoPageLayout>
  );
}
