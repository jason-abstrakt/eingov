import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Identity Theft Protection — Tax-Related ID Theft | EIN Gov',
  description:
    'Learn how to protect yourself from tax-related identity theft. Understand warning signs, prevention steps, and what to do if your identity has been compromised.',
};

export default function IdentityTheftProtectionPage() {
  return (
    <InfoPageLayout
      title="Identity Theft Protection"
      subtitle="Protecting yourself from tax-related identity theft"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Tax-Related Identity Theft?
        </h2>
        <p>
          Tax-related identity theft occurs when someone uses your stolen
          personal information, such as your Social Security Number (SSN) or
          EIN, to file a fraudulent tax return and claim a refund. It can also
          occur when someone uses your SSN or EIN to get a job, which results
          in unreported income being associated with your account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Warning Signs
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>You receive a notice that more than one tax return was filed using your SSN</li>
          <li>You owe additional tax, have a refund offset, or have collection actions taken against you for a year you did not file a return</li>
          <li>IRS records indicate you received wages from an employer you did not work for</li>
          <li>You receive a notice that an online account has been created in your name without your knowledge</li>
          <li>You receive a notice that your existing online account has been accessed or disabled</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Prevention Steps
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Protect your SSN, EIN, and other sensitive information</li>
          <li>Use strong, unique passwords for financial accounts</li>
          <li>Be cautious of phishing emails and suspicious communications</li>
          <li>File your tax return as early as possible each year</li>
          <li>Monitor your IRS account and credit reports regularly</li>
          <li>Use an Identity Protection PIN (IP PIN) if offered by the IRS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What to Do if You&apos;re a Victim
        </h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>File IRS Form 14039 (Identity Theft Affidavit)</li>
          <li>Respond to any IRS notices immediately</li>
          <li>Contact the IRS Identity Protection Specialized Unit</li>
          <li>File a report with the Federal Trade Commission (FTC)</li>
          <li>Consider placing a fraud alert or credit freeze with credit bureaus</li>
          <li>File a report with local law enforcement</li>
        </ol>
      </section>
    </InfoPageLayout>
  );
}
