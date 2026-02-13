import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: "Form W-4 — Employee's Withholding Certificate | EIN Gov",
  description:
    "Learn about IRS Form W-4, the Employee's Withholding Certificate. Understand how to fill it out, when to update it, and how it affects your tax withholding.",
};

export default function FormW4Page() {
  return (
    <InfoPageLayout
      title="Form W-4"
      subtitle="Employee's Withholding Certificate"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Form W-4?
        </h2>
        <p>
          IRS Form W-4 is the Employee&apos;s Withholding Certificate. Employees
          fill out this form to tell their employer how much federal income tax
          to withhold from their paycheck. The amount withheld depends on your
          filing status, number of dependents, additional income, and any
          deductions you expect to claim.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          When to Fill Out a W-4
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>When you start a new job</li>
          <li>When your personal or financial situation changes (marriage, divorce, new child)</li>
          <li>When you want to adjust your withholding amount</li>
          <li>When you consistently owe taxes or receive large refunds at filing time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Sections
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Step 1:</strong> Enter personal information and filing status</li>
          <li><strong>Step 2:</strong> Multiple jobs or spouse works (if applicable)</li>
          <li><strong>Step 3:</strong> Claim dependents and associated tax credits</li>
          <li><strong>Step 4:</strong> Other adjustments — additional income, deductions, extra withholding</li>
          <li><strong>Step 5:</strong> Sign and date</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Employer Responsibilities
        </h2>
        <p>
          Employers with an EIN are responsible for collecting Form W-4 from
          each employee and using the information to calculate the correct
          amount of federal income tax to withhold. Employers must begin using
          a new W-4 no later than the start of the first payroll period ending
          on or after the 30th day from when the form was received.
        </p>
      </section>
    </InfoPageLayout>
  );
}
