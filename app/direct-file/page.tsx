import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'IRS Direct File — Free Online Tax Filing | EIN Gov',
  description:
    'Learn about IRS Direct File, the free online tax filing service from the IRS. Understand eligibility, supported tax situations, and how it works.',
};

export default function DirectFilePage() {
  return (
    <InfoPageLayout
      title="IRS Direct File"
      subtitle="Free online tax filing directly with the IRS"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is Direct File?
        </h2>
        <p>
          IRS Direct File is a free online tool that allows eligible taxpayers
          to file their federal tax returns directly with the IRS at no cost.
          The program was launched as a pilot and is being expanded to more
          states and tax situations. Direct File is designed to provide a
          simple, guided experience for taxpayers with straightforward tax
          returns.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Who Can Use Direct File?
        </h2>
        <p>
          Direct File is available to taxpayers who meet certain eligibility
          criteria, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Filing in a participating state</li>
          <li>Having relatively simple tax situations (W-2 income, standard deduction)</li>
          <li>Claiming common credits like the Earned Income Tax Credit and Child Tax Credit</li>
          <li>Having income from limited sources</li>
        </ul>
        <p className="mt-3">
          Not all tax situations are currently supported. Taxpayers with
          self-employment income, itemized deductions, or complex tax
          situations may need to use other filing methods.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Benefits of Direct File
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Completely free — no hidden fees or upselling</li>
          <li>File directly with the IRS — no third-party involvement</li>
          <li>Guided, step-by-step process</li>
          <li>Built-in error checking and validation</li>
          <li>Available in English and Spanish</li>
          <li>Customer support available via live chat</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN and Business Filing
        </h2>
        <p>
          Direct File is currently designed for individual tax returns. If you
          need to file business tax returns or obtain an Employer
          Identification Number (EIN), you will need to use other IRS services.
          Our online application can help you obtain your EIN quickly and
          efficiently for your business needs.
        </p>
      </section>
    </InfoPageLayout>
  );
}
