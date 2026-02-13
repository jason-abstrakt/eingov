import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS Whistleblower Office | EIN Gov',
  description:
    'Learn about the IRS Whistleblower Office, which processes tips about tax fraud and underpayment. Understand how the whistleblower program works and award eligibility.',
};

export default function WhistleblowerOfficePage() {
  return (
    <InfoPageLayout
      title="IRS Whistleblower Office"
      subtitle="Reporting tax fraud and underpayment"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is the Whistleblower Office?
        </h2>
        <p>
          The IRS Whistleblower Office was established to process tips received
          from individuals who report suspected tax fraud or underpayment. The
          office evaluates submissions and, when appropriate, coordinates with
          IRS examination and collection divisions to take action on credible
          claims.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How the Program Works
        </h2>
        <p>
          Individuals who have information about tax noncompliance can submit a
          claim to the IRS Whistleblower Office. The program has two tracks:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Mandatory Awards (Section 7623(b)):</strong> For cases
            involving $2 million or more in dispute (including taxes, penalties,
            and interest). Awards range from 15% to 30% of collected proceeds.
          </li>
          <li>
            <strong>Discretionary Awards (Section 7623(a)):</strong> For cases
            below the $2 million threshold. Awards are up to 15% of collected
            proceeds, with a maximum of $10 million.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Filing a Claim
        </h2>
        <p>
          To file a whistleblower claim, individuals submit IRS Form 211
          (Application for Award for Original Information) along with supporting
          documentation. The submission should include specific and credible
          information about the alleged tax noncompliance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Protections for Whistleblowers
        </h2>
        <p>
          Federal law provides protections for individuals who report tax fraud
          to the IRS. The identity of whistleblowers is kept confidential to
          the extent permitted by law, and anti-retaliation provisions protect
          whistleblowers from adverse employment actions.
        </p>
      </section>
    </InfoPageLayout>
  );
}
