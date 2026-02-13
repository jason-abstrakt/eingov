import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Tax Fraud Alert — Recognize and Report Tax Fraud | EIN Gov',
  description:
    'Learn how to recognize and report tax fraud. Understand common types of tax fraud, how they affect taxpayers, and how to report suspected fraud to the IRS.',
};

export default function TaxFraudAlertPage() {
  return (
    <InfoPageLayout
      title="Tax Fraud Alert"
      subtitle="Recognizing and reporting tax fraud"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Tax Fraud?
        </h2>
        <p>
          Tax fraud is the intentional wrongdoing on the part of a taxpayer
          with the purpose of evading a tax known or believed to be owed. Tax
          fraud can take many forms, from underreporting income to claiming
          false deductions to using fraudulent documents. It is a serious
          federal offense that can result in substantial penalties and criminal
          prosecution.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Common Types of Tax Fraud
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Underreporting income:</strong> Failing to report all taxable income</li>
          <li><strong>Overstating deductions:</strong> Claiming deductions you are not entitled to</li>
          <li><strong>Filing false returns:</strong> Submitting returns with fabricated information</li>
          <li><strong>Identity theft:</strong> Using another person&apos;s information to file a fraudulent return</li>
          <li><strong>Employment tax fraud:</strong> Failing to withhold or remit employment taxes</li>
          <li><strong>Abusive tax schemes:</strong> Participating in arrangements designed to evade taxes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Report Suspected Fraud
        </h2>
        <p>
          If you suspect someone is committing tax fraud, you can report it to
          the IRS using Form 3949-A (Information Referral). You can submit the
          form by mail or fax. You do not have to identify yourself when
          reporting fraud, though providing your contact information may help
          the IRS follow up if additional information is needed.
        </p>
        <p className="mt-3">
          For suspected fraud by a tax return preparer, use IRS Form 14157
          (Complaint: Tax Return Preparer).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Consequences of Tax Fraud
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Civil penalties up to 75% of the underpayment</li>
          <li>Criminal prosecution with potential imprisonment</li>
          <li>Substantial fines</li>
          <li>Interest on unpaid taxes</li>
          <li>Damage to personal and professional reputation</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
