import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Businesses with Employees — EIN Requirements | EIN Gov',
  description:
    'Learn why businesses with employees need an EIN, federal employment tax obligations, and how to get started with your employer tax identification number.',
};

export default function BusinessesWithEmployeesPage() {
  return (
    <InfoPageLayout
      title="Businesses with Employees"
      subtitle="Understanding EIN requirements for employers"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Why Employers Need an EIN
        </h2>
        <p>
          If your business has employees, you are required by federal law to have
          an Employer Identification Number (EIN). This number is used to report
          employment taxes, including federal income tax withholding, Social
          Security and Medicare taxes (FICA), and federal unemployment tax
          (FUTA).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Employment Tax Responsibilities
        </h2>
        <p>As an employer, you are responsible for:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Withholding federal income tax from employee wages</li>
          <li>Withholding and matching Social Security and Medicare taxes</li>
          <li>Paying federal unemployment (FUTA) tax</li>
          <li>Filing quarterly employment tax returns (Form 941)</li>
          <li>Providing W-2 forms to employees annually</li>
          <li>Depositing employment taxes on time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          When to Apply for an EIN
        </h2>
        <p>
          You should apply for an EIN before you hire your first employee. The
          EIN must be included on all employment tax forms and deposits. Many
          businesses also need an EIN to open a business bank account or apply
          for business licenses, so it is advisable to obtain one early in the
          process of forming your business.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Employment Tax Forms
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Form 941:</strong> Employer&apos;s Quarterly Federal Tax Return</li>
          <li><strong>Form 940:</strong> Employer&apos;s Annual Federal Unemployment (FUTA) Tax Return</li>
          <li><strong>Form W-2:</strong> Wage and Tax Statement (provided to employees)</li>
          <li><strong>Form W-4:</strong> Employee&apos;s Withholding Certificate</li>
          <li><strong>Form I-9:</strong> Employment Eligibility Verification</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Getting Started
        </h2>
        <p>
          Applying for an EIN is the first step in meeting your federal
          employment tax obligations. Our online application process makes it
          easy to obtain your EIN quickly, so you can focus on growing your
          business and managing your team.
        </p>
      </section>
    </InfoPageLayout>
  );
}
