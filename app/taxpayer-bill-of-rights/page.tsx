import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Taxpayer Bill of Rights | EIN Gov',
  description:
    'Understand the Taxpayer Bill of Rights — 10 fundamental rights that every taxpayer has when dealing with the IRS. Know your protections under federal law.',
};

export default function TaxpayerBillOfRightsPage() {
  return (
    <InfoPageLayout
      title="Taxpayer Bill of Rights"
      subtitle="Your fundamental rights when dealing with the IRS"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Overview
        </h2>
        <p>
          The Taxpayer Bill of Rights groups existing rights in the tax code
          into ten fundamental rights, making them easier for taxpayers to
          understand. These rights apply to all interactions with the IRS and
          serve as the foundation of taxpayer protections under federal law.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          The 10 Taxpayer Rights
        </h2>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>The Right to Be Informed:</strong> Taxpayers have the right
            to know what they need to do to comply with the tax laws.
          </li>
          <li>
            <strong>The Right to Quality Service:</strong> Taxpayers have the
            right to receive prompt, courteous, and professional assistance.
          </li>
          <li>
            <strong>The Right to Pay No More Than the Correct Amount of Tax:</strong>{' '}
            Taxpayers have the right to pay only the amount of tax legally due.
          </li>
          <li>
            <strong>The Right to Challenge the IRS&apos;s Position and Be Heard:</strong>{' '}
            Taxpayers have the right to raise objections and provide additional
            documentation.
          </li>
          <li>
            <strong>The Right to Appeal an IRS Decision in an Independent Forum:</strong>{' '}
            Taxpayers are entitled to a fair and impartial administrative appeal.
          </li>
          <li>
            <strong>The Right to Finality:</strong> Taxpayers have the right to
            know the maximum amount of time they have to challenge the IRS&apos;s
            position.
          </li>
          <li>
            <strong>The Right to Privacy:</strong> Taxpayers have the right to
            expect that any IRS inquiry will be no more intrusive than necessary.
          </li>
          <li>
            <strong>The Right to Confidentiality:</strong> Taxpayers have the
            right to expect that information they provide will not be disclosed
            unless authorized.
          </li>
          <li>
            <strong>The Right to Retain Representation:</strong> Taxpayers have
            the right to retain an authorized representative of their choice.
          </li>
          <li>
            <strong>The Right to a Fair and Just Tax System:</strong> Taxpayers
            have the right to expect the tax system to consider facts and
            circumstances that might affect their underlying liabilities.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Protecting Your Rights
        </h2>
        <p>
          If you believe your rights as a taxpayer have been violated, you can
          contact the Taxpayer Advocate Service (TAS), an independent
          organization within the IRS that helps taxpayers resolve problems
          and ensures taxpayer rights are protected.
        </p>
      </section>
    </InfoPageLayout>
  );
}
