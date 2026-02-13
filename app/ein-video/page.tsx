import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'EIN Video & Resources | EIN Gov',
  description:
    'Access educational videos and resources about Employer Identification Numbers (EINs). Learn about the EIN application process, requirements, and common questions.',
};

export default function EINVideoPage() {
  return (
    <InfoPageLayout
      title="EIN Video & Resources"
      subtitle="Educational materials about Employer Identification Numbers"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Understanding the EIN Application Process
        </h2>
        <p>
          Applying for an Employer Identification Number (EIN) is a
          straightforward process, but understanding each step can help ensure
          your application is completed correctly the first time. Below, we
          provide educational resources to guide you through the process.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Steps in the EIN Application
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Determine eligibility:</strong> You must have a valid Social
            Security Number (SSN) or Individual Taxpayer Identification Number
            (ITIN) to apply online.
          </li>
          <li>
            <strong>Identify your entity type:</strong> Select the type of
            business entity you are forming — sole proprietorship, LLC,
            corporation, partnership, or other.
          </li>
          <li>
            <strong>Provide responsible party information:</strong> The
            responsible party is the individual who controls or manages the
            entity and its funds.
          </li>
          <li>
            <strong>Complete business details:</strong> Including your business
            name, address, and the reason you are applying.
          </li>
          <li>
            <strong>Receive your EIN:</strong> Upon successful submission, your
            EIN is assigned and delivered to you.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-900">How long does it take to get an EIN?</h3>
            <p className="mt-1">
              When applying online, you can receive your EIN promptly after
              completing the application. Mail and fax applications may take
              several weeks.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Is there a cost to obtain an EIN?</h3>
            <p className="mt-1">
              The IRS does not charge a fee for issuing an EIN. Our service
              charges a processing fee for the convenience of guided application
              assistance and expedited delivery.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Can I apply for an EIN if I&apos;m not a U.S. citizen?</h3>
            <p className="mt-1">
              Yes. International applicants without an SSN can apply by phone or
              by designating an authorized third-party to apply on their behalf.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Additional Resources
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>IRS Publication 1635 — Understanding Your EIN</li>
          <li>IRS Publication 15 — Employer&apos;s Tax Guide</li>
          <li>IRS Publication 583 — Starting a Business and Keeping Records</li>
          <li>Form SS-4 Instructions — Application for EIN</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
