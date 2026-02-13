import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Form 1040 — U.S. Individual Income Tax Return | EIN Gov',
  description:
    'Learn about IRS Form 1040, the standard federal income tax form for individuals. Understand who must file, key sections, and important filing deadlines.',
};

export default function Form1040Page() {
  return (
    <InfoPageLayout
      title="Form 1040"
      subtitle="U.S. Individual Income Tax Return"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Form 1040?
        </h2>
        <p>
          IRS Form 1040 is the standard federal income tax form used by
          individuals to file their annual income tax returns with the Internal
          Revenue Service. Nearly every U.S. citizen or resident alien who meets
          the income threshold is required to file a Form 1040 each year. The
          form reports all sources of income, claims deductions and credits,
          and calculates the amount of tax owed or the refund due.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Sections of Form 1040
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Filing status:</strong> Single, married filing jointly, married filing separately, head of household, or qualifying surviving spouse</li>
          <li><strong>Income:</strong> Wages, salaries, interest, dividends, capital gains, business income, and other sources</li>
          <li><strong>Adjustments:</strong> Above-the-line deductions that reduce adjusted gross income</li>
          <li><strong>Deductions:</strong> Standard deduction or itemized deductions (Schedule A)</li>
          <li><strong>Tax and credits:</strong> Tax computation, credits that reduce tax liability</li>
          <li><strong>Payments:</strong> Taxes already paid through withholding or estimated payments</li>
          <li><strong>Refund or amount owed:</strong> The final calculation of your tax position</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Filing Deadlines
        </h2>
        <p>
          Form 1040 is generally due on April 15th of each year for the
          preceding tax year. If April 15th falls on a weekend or holiday, the
          deadline is extended to the next business day. Taxpayers can request
          an automatic six-month extension by filing Form 4868, though this
          extends only the filing deadline — not the payment deadline.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN and Form 1040
        </h2>
        <p>
          If you are a sole proprietor or have self-employment income, you may
          need an Employer Identification Number (EIN) in addition to your
          Social Security Number. Your EIN is used on business-related
          schedules (such as Schedule C) and employment tax forms.
        </p>
      </section>
    </InfoPageLayout>
  );
}
