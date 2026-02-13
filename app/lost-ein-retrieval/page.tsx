import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Lost or Misplaced EIN Retrieval | EIN Gov',
  description:
    'Find out how to retrieve a lost or misplaced Employer Identification Number (EIN). Multiple methods to recover your EIN from the IRS and other sources.',
};

export default function LostEINRetrievalPage() {
  return (
    <InfoPageLayout
      title="Lost or Misplaced EIN Retrieval"
      subtitle="How to recover your Employer Identification Number"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Lost Your EIN?
        </h2>
        <p>
          If you have lost or misplaced your Employer Identification Number
          (EIN), there are several ways to retrieve it. Your EIN is a permanent
          number — it does not expire and remains assigned to your entity
          indefinitely. You just need to locate your records or contact the
          appropriate parties.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Methods to Retrieve Your EIN
        </h2>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          1. Check Your Original Confirmation
        </h3>
        <p>
          When your EIN was assigned, you should have received a confirmation
          notice (CP 575) from the IRS. Check your email, files, or records for
          this document.
        </p>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          2. Review Previous Tax Returns
        </h3>
        <p>
          Your EIN appears on all previously filed tax returns. Check copies of
          your business tax returns for the number.
        </p>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          3. Contact Your Bank
        </h3>
        <p>
          If you used your EIN to open a business bank account, your bank will
          have your EIN on file and can provide it to authorized account holders.
        </p>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          4. Call the IRS Business & Specialty Tax Line
        </h3>
        <p>
          You can call the IRS Business & Specialty Tax Line at 1-800-829-4933.
          The line is available Monday through Friday, 7:00 a.m. to 7:00 p.m.
          local time. You will need to verify your identity as an authorized
          individual for the entity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Tips for Keeping Your EIN Safe
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Store your EIN confirmation notice in a secure location</li>
          <li>Keep digital and physical copies of the assignment notice</li>
          <li>Include your EIN in your business records and filing system</li>
          <li>Share your EIN only with authorized parties and institutions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Need a New EIN?
        </h2>
        <p>
          If you are unable to retrieve your existing EIN or if your business
          circumstances have changed (such as a change in ownership or
          structure), you may need to apply for a new EIN. Note that a new EIN is
          a completely separate number and does not replace your old one.
        </p>
      </section>
    </InfoPageLayout>
  );
}
