import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS Software Developers Program | EIN Gov',
  description:
    'Information about the IRS software developer program for tax preparation software. Learn about e-file specifications, testing, and developer resources.',
};

export default function SoftwareDevelopersPage() {
  return (
    <InfoPageLayout
      title="Software Developers"
      subtitle="IRS resources for tax software developers"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Software Developer Program
        </h2>
        <p>
          The IRS works with software developers to ensure tax preparation and
          filing software meets IRS requirements for electronic filing. The
          program provides specifications, testing resources, and support to
          help developers create software that accurately processes tax returns
          and transmits them to the IRS.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          E-File Specifications
        </h2>
        <p>
          The IRS publishes technical specifications that software developers
          must follow to participate in the e-file program. These specifications
          cover:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>XML schema requirements for tax return data</li>
          <li>Transmission protocols and security requirements</li>
          <li>Business rules and validation requirements</li>
          <li>Acknowledgment processing procedures</li>
          <li>Error handling and rejection codes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Testing and Certification
        </h2>
        <p>
          Before software can be used to transmit returns to the IRS, it must
          pass the Assurance Testing System (ATS) process. This testing ensures
          that the software correctly formats, validates, and transmits tax
          return data according to IRS specifications.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Developer Resources
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>IRS e-File Publication 3112 — IRS e-file Application and Participation</li>
          <li>Modernized e-File (MeF) program documentation</li>
          <li>Automated Information Submission (AIS) guidelines</li>
          <li>Development and testing environments</li>
          <li>Technical support and developer forums</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
