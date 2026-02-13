import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Tax Fraud Victim Assistance | EIN Gov',
  description:
    'Get help if you are a victim of tax fraud or identity theft. Learn about IRS victim assistance resources, how to recover your identity, and protect your tax account.',
};

export default function VictimAssistancePage() {
  return (
    <InfoPageLayout
      title="Victim Assistance"
      subtitle="Help for victims of tax fraud and identity theft"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Are You a Victim?
        </h2>
        <p>
          If you have been a victim of tax-related identity theft or fraud, the
          IRS provides resources to help you recover and protect your tax
          account. Acting quickly is important to minimize the impact and begin
          the resolution process.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Immediate Steps to Take
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>File an Identity Theft Affidavit:</strong> Complete IRS
            Form 14039 and submit it to the IRS to alert them that your
            identity has been compromised.
          </li>
          <li>
            <strong>Respond to IRS notices:</strong> If you received a notice
            from the IRS about suspicious activity, follow the instructions
            provided promptly.
          </li>
          <li>
            <strong>File a police report:</strong> Contact your local law
            enforcement to file a report about the identity theft.
          </li>
          <li>
            <strong>Contact credit bureaus:</strong> Place a fraud alert or
            credit freeze with the three major credit bureaus (Equifax,
            Experian, TransUnion).
          </li>
          <li>
            <strong>Report to the FTC:</strong> File a report with the Federal
            Trade Commission at IdentityTheft.gov.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Resources for Victims
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Identity Protection Specialized Unit:</strong> Call 1-800-908-4490 for assistance</li>
          <li><strong>Identity Protection PIN (IP PIN):</strong> Request a unique PIN to verify your identity on future tax returns</li>
          <li><strong>Taxpayer Advocate Service:</strong> Contact TAS if you are experiencing hardship due to identity theft</li>
          <li><strong>IRS.gov/identitytheft:</strong> Central resource page for identity theft information</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Recovery Timeline
        </h2>
        <p>
          Resolving tax-related identity theft can take time. The IRS typically
          resolves identity theft cases within 120 to 180 days, though complex
          cases may take longer. During this time, the IRS will work to correct
          your tax account and issue any refund you are owed. You will receive
          written notification when your case is resolved.
        </p>
      </section>
    </InfoPageLayout>
  );
}
