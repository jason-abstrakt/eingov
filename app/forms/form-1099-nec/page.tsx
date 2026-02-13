import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Form 1099-NEC — Nonemployee Compensation | EIN Gov',
  description:
    'Learn about IRS Form 1099-NEC, used to report nonemployee compensation. Understand who must file, filing deadlines, and how it differs from Form 1099-MISC.',
};

export default function Form1099NECPage() {
  return (
    <InfoPageLayout
      title="Form 1099-NEC"
      subtitle="Nonemployee Compensation"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Form 1099-NEC?
        </h2>
        <p>
          IRS Form 1099-NEC (Nonemployee Compensation) is used by businesses
          to report payments of $600 or more made to nonemployees — such as
          independent contractors, freelancers, and self-employed individuals —
          during the tax year. The form was reintroduced in 2020 to replace the
          use of Box 7 on Form 1099-MISC for reporting nonemployee
          compensation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Who Must File?
        </h2>
        <p>
          You must file Form 1099-NEC if you meet all of the following
          conditions:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>You made a payment to someone who is not your employee</li>
          <li>You made the payment for services in the course of your trade or business</li>
          <li>You paid the individual or entity at least $600 during the year</li>
          <li>The payment was made to an individual, partnership, estate, or corporation (in some cases)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Filing Deadlines
        </h2>
        <p>
          Form 1099-NEC must be filed with the IRS and furnished to the
          recipient by January 31st of the year following the tax year in which
          the payments were made. There is no automatic extension for this
          deadline.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN Requirement
        </h2>
        <p>
          To file Form 1099-NEC, you need your business&apos;s Employer
          Identification Number (EIN). The EIN is included on the form as the
          payer&apos;s TIN. If you do not yet have an EIN for your business, you
          should apply for one before the filing deadline.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Penalties for Late Filing
        </h2>
        <p>
          Failing to file Form 1099-NEC on time can result in penalties
          ranging from $60 to $310 per form, depending on how late the filing
          is. Intentional disregard of the filing requirement can result in
          even higher penalties. It is important to file accurately and on time.
        </p>
      </section>
    </InfoPageLayout>
  );
}
