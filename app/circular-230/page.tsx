import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Circular 230 — Regulations for Tax Practitioners | EIN Gov',
  description:
    'Understand Circular 230, the regulations governing practice before the IRS. Learn about ethical standards, duties, and penalties for tax practitioners.',
};

export default function Circular230Page() {
  return (
    <InfoPageLayout
      title="Circular 230"
      subtitle="Regulations governing practice before the IRS"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Circular 230?
        </h2>
        <p>
          Treasury Department Circular No. 230 sets forth the regulations
          governing the practice of attorneys, certified public accountants,
          enrolled agents, enrolled actuaries, and other persons before the
          Internal Revenue Service. It establishes the standards of conduct and
          ethical obligations for tax practitioners who represent taxpayers
          before the IRS.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Who is Subject to Circular 230?
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Attorneys:</strong> Licensed to practice law in any state</li>
          <li><strong>Certified Public Accountants (CPAs):</strong> Licensed to practice in any state</li>
          <li><strong>Enrolled Agents (EAs):</strong> Enrolled to practice before the IRS</li>
          <li><strong>Enrolled Actuaries:</strong> Enrolled by the Joint Board for the Enrollment of Actuaries</li>
          <li><strong>Enrolled Retirement Plan Agents:</strong> Enrolled to practice before the IRS in retirement plan matters</li>
          <li><strong>Registered Tax Return Preparers:</strong> Registered with the IRS to prepare tax returns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Provisions
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Duties and restrictions relating to practice before the IRS</li>
          <li>Standards for written tax advice</li>
          <li>Due diligence requirements</li>
          <li>Conflict of interest rules</li>
          <li>Fee restrictions and best practices</li>
          <li>Requirements for continuing education</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Disciplinary Proceedings
        </h2>
        <p>
          Practitioners who violate Circular 230 may be subject to disciplinary
          proceedings by the IRS Office of Professional Responsibility (OPR).
          Sanctions can include censure, suspension, or disbarment from
          practice before the IRS, as well as monetary penalties.
        </p>
      </section>
    </InfoPageLayout>
  );
}
