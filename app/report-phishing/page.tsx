import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Report Phishing — IRS Scam Awareness | EIN Gov',
  description:
    'Learn how to identify and report IRS-related phishing scams. Protect yourself from fraudulent emails, phone calls, and text messages impersonating the IRS.',
};

export default function ReportPhishingPage() {
  return (
    <InfoPageLayout
      title="Report Phishing"
      subtitle="Identifying and reporting IRS-related scams"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Phishing and Scams
        </h2>
        <p>
          Phishing is a type of fraud where criminals attempt to steal your
          personal information by impersonating trusted organizations, including
          the IRS. These scams typically come in the form of emails, phone
          calls, text messages, or social media contacts that appear to be from
          the IRS but are actually fraudulent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Identify IRS Scams
        </h2>
        <p>Remember that the IRS will <strong>never</strong>:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Initiate contact with taxpayers by email, text, or social media to request personal or financial information</li>
          <li>Threaten to bring in local police or law enforcement to have you arrested</li>
          <li>Demand immediate payment using gift cards, prepaid debit cards, or wire transfers</li>
          <li>Call to demand payment without first sending a bill by mail</li>
          <li>Threaten to revoke your driver&apos;s license, business license, or immigration status</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Report Phishing
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Phishing emails:</strong> Forward the email to{' '}
            <span className="font-mono text-sm">phishing@irs.gov</span>, then
            delete it
          </li>
          <li>
            <strong>Phone scams:</strong> Report to the Treasury Inspector
            General for Tax Administration (TIGTA) or call 1-800-366-4484
          </li>
          <li>
            <strong>IRS impersonation:</strong> Report to the Federal Trade
            Commission at ReportFraud.ftc.gov
          </li>
          <li>
            <strong>Text messages:</strong> Forward the text to 202-552-1226,
            then delete it
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Protect Yourself
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Never click links in unsolicited emails claiming to be from the IRS</li>
          <li>Do not open attachments from unknown senders</li>
          <li>Verify any communication by contacting the IRS directly at 1-800-829-1040</li>
          <li>Keep your computer security software up to date</li>
          <li>Use strong passwords and multi-factor authentication on tax accounts</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
