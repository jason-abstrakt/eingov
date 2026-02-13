import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'National Taxpayer Advocate | EIN Gov',
  description:
    'Learn about the National Taxpayer Advocate, who leads the Taxpayer Advocate Service and reports to Congress on taxpayer issues and IRS systemic problems.',
};

export default function TaxpayerAdvocatePage() {
  return (
    <InfoPageLayout
      title="National Taxpayer Advocate"
      subtitle="Your voice within the IRS"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Role of the National Taxpayer Advocate
        </h2>
        <p>
          The National Taxpayer Advocate is an independent position within the
          IRS that leads the Taxpayer Advocate Service (TAS). The Advocate
          serves as the voice of the taxpayer within the IRS and is responsible
          for identifying systemic issues that cause problems for taxpayers
          and recommending solutions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Responsibilities
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Leading the Taxpayer Advocate Service across all 50 states</li>
          <li>Submitting annual reports to Congress identifying the most serious problems facing taxpayers</li>
          <li>Recommending administrative and legislative changes to improve the tax system</li>
          <li>Ensuring taxpayer rights are protected in IRS operations</li>
          <li>Overseeing Low Income Taxpayer Clinic grants</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Annual Report to Congress
        </h2>
        <p>
          Each year, the National Taxpayer Advocate submits two reports to
          Congress. The annual report identifies the most serious problems
          encountered by taxpayers and includes legislative recommendations. A
          mid-year report provides objectives for the upcoming fiscal year.
          These reports are available to the public and provide insight into
          the challenges facing the tax system.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Getting Help from TAS
        </h2>
        <p>
          If you are experiencing a tax problem that you have been unable to
          resolve through normal IRS channels, the Taxpayer Advocate Service
          can help. TAS provides free assistance and can be reached at
          1-877-777-4778. Every state has at least one local TAS office where
          you can receive in-person assistance.
        </p>
      </section>
    </InfoPageLayout>
  );
}
