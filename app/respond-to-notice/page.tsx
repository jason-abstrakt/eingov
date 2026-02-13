import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'How to Respond to an IRS Notice | EIN Gov',
  description:
    'Learn how to respond to a notice or letter from the IRS. Understand common notice types, response deadlines, and what steps to take when you receive IRS correspondence.',
};

export default function RespondToNoticePage() {
  return (
    <InfoPageLayout
      title="Respond to a Notice"
      subtitle="What to do when you receive a letter from the IRS"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Received a Notice from the IRS?
        </h2>
        <p>
          The IRS sends notices and letters to taxpayers for a variety of
          reasons, including balance due reminders, refund information, identity
          verification requests, and questions about tax returns. Receiving a
          notice does not necessarily mean something is wrong — but it is
          important to respond promptly and appropriately.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Steps to Take
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Read the notice carefully.</strong> It will explain the
            reason for the correspondence and what action, if any, is required.
          </li>
          <li>
            <strong>Note the deadline.</strong> Many notices have a specific
            response deadline. Responding on time is important to protect your
            rights.
          </li>
          <li>
            <strong>Compare it with your records.</strong> Review the
            information in the notice against your tax records and filed
            returns.
          </li>
          <li>
            <strong>Respond if required.</strong> Follow the instructions in
            the notice. You can usually respond by mail or, in some cases,
            online or by phone.
          </li>
          <li>
            <strong>Keep a copy.</strong> Retain the notice and any
            correspondence for your records.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Common IRS Notices
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>CP14:</strong> Balance due on your account</li>
          <li><strong>CP501/CP503/CP504:</strong> Reminder notices for unpaid balances</li>
          <li><strong>CP2000:</strong> Proposed changes to your tax return based on information received from third parties</li>
          <li><strong>CP575:</strong> EIN assignment confirmation</li>
          <li><strong>Letter 5071C:</strong> Identity verification request</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          If You Disagree
        </h2>
        <p>
          If you disagree with a notice, you have the right to respond with
          your explanation and supporting documentation. You may also have the
          right to appeal through the IRS Independent Office of Appeals. The
          notice will include instructions on how to dispute the IRS&apos;s findings.
        </p>
      </section>
    </InfoPageLayout>
  );
}
