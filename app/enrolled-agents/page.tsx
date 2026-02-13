import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Enrolled Agents — Federally Licensed Tax Practitioners | EIN Gov',
  description:
    'Learn about Enrolled Agents (EAs), federally licensed tax practitioners who can represent taxpayers before the IRS. Understand EA qualifications and services.',
};

export default function EnrolledAgentsPage() {
  return (
    <InfoPageLayout
      title="Enrolled Agents"
      subtitle="Federally licensed tax practitioners"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is an Enrolled Agent?
        </h2>
        <p>
          An Enrolled Agent (EA) is a federally licensed tax practitioner who
          has earned the privilege of representing taxpayers before the Internal
          Revenue Service. Enrolled agents are the only federally licensed tax
          practitioners who specialize in taxation and have unlimited rights to
          represent taxpayers before the IRS.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Become an Enrolled Agent
        </h2>
        <p>
          There are two paths to becoming an enrolled agent:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>
            <strong>Special Enrollment Examination (SEE):</strong> Pass a
            comprehensive three-part exam covering individual taxation,
            business taxation, and representation, practice, and procedures
          </li>
          <li>
            <strong>IRS Experience:</strong> Have at least five consecutive
            years of IRS employment in a position that regularly interprets and
            applies the tax code
          </li>
        </ul>
        <p className="mt-3">
          All enrolled agent candidates must also pass a background check and
          meet continuing education requirements (72 hours every three years).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Services Provided by Enrolled Agents
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tax return preparation for individuals and businesses</li>
          <li>Representation during IRS audits and examinations</li>
          <li>Assistance with tax collections and payment plans</li>
          <li>Appeals representation before the IRS</li>
          <li>Tax planning and advisory services</li>
          <li>Assistance with EIN applications and business formation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Why Choose an Enrolled Agent?
        </h2>
        <p>
          Enrolled agents are tax specialists — their expertise is focused
          specifically on taxation. Unlike attorneys and CPAs, who may practice
          in various areas, enrolled agents specialize in tax matters and must
          maintain their knowledge through continuing education in taxation.
          Their federal license authorizes them to practice in all 50 states.
        </p>
      </section>
    </InfoPageLayout>
  );
}
