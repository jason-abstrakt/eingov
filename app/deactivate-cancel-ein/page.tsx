import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'How to Deactivate or Cancel an EIN | EIN Gov',
  description:
    'Learn how to deactivate or close your Employer Identification Number (EIN). Understand when and why you might need to cancel your EIN with the IRS.',
};

export default function DeactivateCancelEINPage() {
  return (
    <InfoPageLayout
      title="How to Deactivate or Cancel an EIN"
      subtitle="Steps to close your Employer Identification Number"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Can You Cancel an EIN?
        </h2>
        <p>
          Once an Employer Identification Number (EIN) has been assigned, it is a
          permanent number — it cannot be reassigned to another entity.
          However, if you no longer need your EIN, you can request that the IRS
          close your business account. This effectively deactivates the EIN so
          that it is no longer expected to file returns.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          When to Close Your EIN Account
        </h2>
        <p>You may want to close your EIN account if:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Your business has permanently closed</li>
          <li>You obtained the EIN in error or it was never used</li>
          <li>Your business structure has changed and a new EIN was assigned</li>
          <li>The entity (trust, estate, etc.) has been terminated</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Close Your Account
        </h2>
        <p>
          To close your business account, send a letter to the IRS that includes:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>The complete legal name of the entity</li>
          <li>The EIN</li>
          <li>The business address</li>
          <li>The reason you wish to close the account</li>
          <li>A copy of the EIN Assignment Notice (if available)</li>
        </ul>
        <p className="mt-3">
          Mail the letter to the IRS campus where you file your returns, or fax
          it to the appropriate IRS office. You should also file all required
          final tax returns and mark them as &quot;final&quot; before requesting closure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Important Considerations
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Closing your account does not eliminate any outstanding tax obligations</li>
          <li>You must file all required returns before the account can be closed</li>
          <li>The EIN itself is never reused or reassigned</li>
          <li>If you start a new business later, you will need a new EIN</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Need a New EIN Instead?
        </h2>
        <p>
          If your circumstances have changed and you need a new EIN rather than
          closing an old one, you can apply for a new number through our online
          application. Common reasons for needing a new EIN include a change in
          business structure, new ownership, or incorporating a sole
          proprietorship.
        </p>
      </section>
    </InfoPageLayout>
  );
}
