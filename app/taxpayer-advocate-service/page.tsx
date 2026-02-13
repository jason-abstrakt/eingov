import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Taxpayer Advocate Service (TAS) | EIN Gov',
  description:
    'Learn about the Taxpayer Advocate Service, an independent organization within the IRS that helps taxpayers resolve problems and protects taxpayer rights.',
};

export default function TaxpayerAdvocateServicePage() {
  return (
    <InfoPageLayout
      title="Taxpayer Advocate Service (TAS)"
      subtitle="Independent assistance for resolving IRS issues"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is the Taxpayer Advocate Service?
        </h2>
        <p>
          The Taxpayer Advocate Service (TAS) is an independent organization
          within the IRS that helps taxpayers who are experiencing financial
          difficulties, who have tried to resolve their tax issues through
          normal IRS channels but have not been able to, or who believe that an
          IRS system or procedure is not working as it should.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          When to Contact TAS
        </h2>
        <p>
          You may be eligible for TAS assistance if:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>You are experiencing economic harm or are about to suffer economic harm</li>
          <li>You face an immediate threat of adverse action from the IRS</li>
          <li>You have tried repeatedly to contact the IRS but no one has responded</li>
          <li>You believe an IRS system or procedure is not working as intended</li>
          <li>You have experienced a significant delay in resolving your tax issue (more than 30 days)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Services Provided
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Assistance resolving tax problems that have not been resolved through normal channels</li>
          <li>Help understanding taxpayer rights</li>
          <li>Identifying systemic issues affecting taxpayers</li>
          <li>Proposing changes to IRS practices through the National Taxpayer Advocate&apos;s annual report</li>
          <li>Low Income Taxpayer Clinic referrals for qualifying individuals</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Reach TAS
        </h2>
        <p>
          TAS has offices in every state, the District of Columbia, and Puerto
          Rico. You can reach TAS by calling their toll-free number at
          1-877-777-4778, or by filing IRS Form 911 (Request for Taxpayer
          Advocate Service Assistance). There is no cost for TAS services.
        </p>
      </section>
    </InfoPageLayout>
  );
}
