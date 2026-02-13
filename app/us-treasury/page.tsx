import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'U.S. Department of the Treasury | EIN Gov',
  description:
    'Learn about the U.S. Department of the Treasury, the federal department that oversees the IRS. Understand its role in economic policy and tax administration.',
};

export default function USTreasuryPage() {
  return (
    <InfoPageLayout
      title="U.S. Department of the Treasury"
      subtitle="The federal department overseeing tax administration"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          About the Treasury Department
        </h2>
        <p>
          The U.S. Department of the Treasury is an executive department of the
          federal government. Established in 1789, it is responsible for
          promoting economic prosperity and ensuring the financial security of
          the United States. The IRS operates as a bureau within the Treasury
          Department.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Responsibilities
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Managing federal finances and collecting revenue</li>
          <li>Producing currency and coinage</li>
          <li>Enforcing finance and tax laws</li>
          <li>Advising the President on economic and fiscal policy</li>
          <li>Managing government accounts and the public debt</li>
          <li>Supervising national banks and thrift institutions</li>
          <li>Implementing economic sanctions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Treasury Bureaus
        </h2>
        <p>
          The Treasury Department oversees several bureaus, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Internal Revenue Service (IRS):</strong> Collects federal taxes and enforces tax law</li>
          <li><strong>Bureau of the Fiscal Service:</strong> Manages federal payments, collections, and debt</li>
          <li><strong>U.S. Mint:</strong> Produces coins</li>
          <li><strong>Bureau of Engraving and Printing:</strong> Produces currency</li>
          <li><strong>Financial Crimes Enforcement Network (FinCEN):</strong> Combats financial crimes</li>
          <li><strong>Alcohol and Tobacco Tax and Trade Bureau (TTB):</strong> Collects excise taxes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Connection to EINs
        </h2>
        <p>
          Employer Identification Numbers are issued by the IRS, a bureau of
          the Treasury Department. The EIN system is part of the Treasury&apos;s
          broader mission of tax administration and revenue collection. When
          you apply for an EIN, your application is processed through IRS
          systems under the authority of the Treasury Department.
        </p>
      </section>
    </InfoPageLayout>
  );
}
