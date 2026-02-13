import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Report an Address Change to the IRS | EIN Gov',
  description:
    'Learn how to update your business address with the IRS. Keep your EIN account information current by reporting address changes promptly.',
};

export default function ReportAddressChangePage() {
  return (
    <InfoPageLayout
      title="Report an Address Change"
      subtitle="Keep your business information current with the IRS"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Why Update Your Address?
        </h2>
        <p>
          It is important to notify the IRS promptly when your business address
          changes. The IRS uses your address on file to send important
          correspondence, including tax notices, refund checks, and other
          communications. An outdated address can result in missed notices and
          potential compliance issues.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Report an Address Change
        </h2>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          Option 1: File Form 8822-B
        </h3>
        <p>
          The most direct method is to file IRS Form 8822-B (Change of Address
          or Responsible Party — Business). This form allows you to update your
          business mailing address and/or the responsible party associated with
          your EIN.
        </p>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          Option 2: Include on Your Tax Return
        </h3>
        <p>
          If you are filing a tax return soon, you can update your address by
          using the new address on your next filed return. The IRS will
          automatically update your records.
        </p>

        <h3 className="font-bold text-gray-900 mt-4 mb-2">
          Option 3: Written Notification
        </h3>
        <p>
          You can also send a written notification to the IRS service center
          where you file your returns. The letter should include your EIN, old
          address, new address, and be signed by an authorized person.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Changing Your Responsible Party
        </h2>
        <p>
          If the responsible party for your EIN has changed (for example, due to
          a change in ownership), you are required to notify the IRS within 60
          days using Form 8822-B. The responsible party is the individual who
          controls, manages, or directs the entity and its funds.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Important Reminders
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Update your address with both the IRS and your state tax agency</li>
          <li>Notify your bank and other financial institutions of the change</li>
          <li>Update your address with the U.S. Postal Service to forward mail</li>
          <li>Keep records of when and how you reported the change</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
