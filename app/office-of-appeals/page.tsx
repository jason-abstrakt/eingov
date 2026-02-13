import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS Independent Office of Appeals | EIN Gov',
  description:
    'Learn about the IRS Independent Office of Appeals, where taxpayers can resolve tax disputes without going to court. Understand the appeals process and your rights.',
};

export default function OfficeOfAppealsPage() {
  return (
    <InfoPageLayout
      title="Independent Office of Appeals"
      subtitle="Resolving tax disputes without going to court"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is the Office of Appeals?
        </h2>
        <p>
          The IRS Independent Office of Appeals is an independent organization
          within the IRS that helps taxpayers resolve their tax disputes without
          going to court. Appeals officers and settlement officers are
          impartial — they do not represent either the taxpayer or the IRS
          examination division that made the original determination.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Types of Cases Handled
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Disagreements over income tax, employment tax, or excise tax</li>
          <li>Penalties assessed by the IRS</li>
          <li>Collection actions (levies, liens)</li>
          <li>Offers in compromise</li>
          <li>Trust fund recovery penalties</li>
          <li>Innocent spouse relief claims</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          The Appeals Process
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Request an appeal:</strong> After receiving an IRS
            determination you disagree with, file a written protest or request
            for appeal within the timeframe specified in your notice.
          </li>
          <li>
            <strong>Case review:</strong> An appeals officer will review your
            case, including any additional documentation you provide.
          </li>
          <li>
            <strong>Conference:</strong> You may participate in a conference
            (in person, by phone, or by correspondence) to discuss your case.
          </li>
          <li>
            <strong>Resolution:</strong> The appeals officer will work to reach
            a fair settlement based on the facts and applicable law.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Your Rights in Appeals
        </h2>
        <p>
          During the appeals process, you have the right to representation by
          an authorized tax professional, the right to present your case and
          supporting evidence, and the right to a fair and impartial review.
          If you cannot reach a resolution through Appeals, you retain the
          right to take your case to the U.S. Tax Court.
        </p>
      </section>
    </InfoPageLayout>
  );
}
