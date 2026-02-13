import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: "Form 941 — Employer's Quarterly Federal Tax Return | EIN Gov",
  description:
    "Learn about IRS Form 941, the Employer's Quarterly Federal Tax Return. Understand who must file, what it reports, and important quarterly filing deadlines.",
};

export default function Form941Page() {
  return (
    <InfoPageLayout
      title="Form 941"
      subtitle="Employer's Quarterly Federal Tax Return"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Form 941?
        </h2>
        <p>
          IRS Form 941 is the Employer&apos;s Quarterly Federal Tax Return. Most
          employers who pay wages are required to file Form 941 each quarter to
          report income taxes, Social Security tax, and Medicare tax withheld
          from employees&apos; paychecks, as well as the employer&apos;s share of Social
          Security and Medicare taxes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Who Must File Form 941?
        </h2>
        <p>
          Generally, any employer who pays wages subject to federal income tax
          withholding or Social Security and Medicare taxes must file Form 941
          quarterly. Exceptions include:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Seasonal employers (who don&apos;t pay wages every quarter)</li>
          <li>Employers who file Form 944 (annual filers with small payrolls)</li>
          <li>Household employers (who file Schedule H)</li>
          <li>Agricultural employers (who file Form 943)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Quarterly Filing Deadlines
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Q1 (Jan–Mar):</strong> Due April 30</li>
          <li><strong>Q2 (Apr–Jun):</strong> Due July 31</li>
          <li><strong>Q3 (Jul–Sep):</strong> Due October 31</li>
          <li><strong>Q4 (Oct–Dec):</strong> Due January 31 of the following year</li>
        </ul>
        <p className="mt-3">
          If the due date falls on a weekend or legal holiday, the return is
          due the next business day.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What Form 941 Reports
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Number of employees who received wages during the quarter</li>
          <li>Total wages paid</li>
          <li>Federal income tax withheld</li>
          <li>Social Security and Medicare taxes (employee and employer shares)</li>
          <li>Tax deposits made during the quarter</li>
          <li>Any balance due or overpayment</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN Requirement
        </h2>
        <p>
          You must have an Employer Identification Number (EIN) to file Form
          941. Your EIN is used to identify your business on all employment tax
          returns and deposits. If you are a new employer, apply for your EIN
          before your first filing deadline.
        </p>
      </section>
    </InfoPageLayout>
  );
}
