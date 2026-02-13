import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'View All IRS Forms & Instructions | EIN Gov',
  description:
    'Browse commonly used IRS tax forms and instructions. Find information about Form 1040, W-4, W-9, 1099-NEC, 941, and other essential tax forms.',
};

export default function ViewAllFormsPage() {
  return (
    <InfoPageLayout
      title="View All Forms & Instructions"
      subtitle="Commonly used IRS tax forms and their purposes"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Individual Tax Forms
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/forms/form-1040" className="text-blue-600 hover:underline font-semibold">Form 1040</Link>
            {' '}— U.S. Individual Income Tax Return. The standard form for filing your annual federal income tax return.
          </li>
          <li>
            <Link href="/forms/form-w4" className="text-blue-600 hover:underline font-semibold">Form W-4</Link>
            {' '}— Employee&apos;s Withholding Certificate. Tells your employer how much federal tax to withhold from your pay.
          </li>
          <li>
            <Link href="/forms/form-w9" className="text-blue-600 hover:underline font-semibold">Form W-9</Link>
            {' '}— Request for Taxpayer Identification Number and Certification. Provides your TIN to businesses that pay you.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Business & Employment Tax Forms
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/forms/form-941" className="text-blue-600 hover:underline font-semibold">Form 941</Link>
            {' '}— Employer&apos;s Quarterly Federal Tax Return. Reports withheld income tax and employment taxes.
          </li>
          <li>
            <Link href="/forms/form-1099-nec" className="text-blue-600 hover:underline font-semibold">Form 1099-NEC</Link>
            {' '}— Nonemployee Compensation. Reports payments to independent contractors and freelancers.
          </li>
          <li>
            <strong>Form SS-4</strong> — Application for Employer Identification Number. Used to apply for an EIN.
          </li>
          <li>
            <strong>Form 940</strong> — Employer&apos;s Annual Federal Unemployment (FUTA) Tax Return.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Other Common Forms
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Form W-2</strong> — Wage and Tax Statement. Employers provide this to employees showing wages and taxes withheld.
          </li>
          <li>
            <strong>Form 1099-MISC</strong> — Miscellaneous Information. Reports rents, royalties, prizes, and other income.
          </li>
          <li>
            <strong>Form 4868</strong> — Application for Automatic Extension of Time to File.
          </li>
          <li>
            <strong>Form 8822-B</strong> — Change of Address or Responsible Party — Business.
          </li>
          <li>
            <strong>Schedule C</strong> — Profit or Loss from Business (Sole Proprietorship).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Accessing IRS Forms
        </h2>
        <p>
          All IRS forms and instructions are available for free on the IRS
          website. Forms can be downloaded in PDF format, and many can be
          completed electronically through IRS-approved tax preparation
          software. If you need an EIN before filing any business tax forms,
          you can apply through our online application.
        </p>
      </section>
    </InfoPageLayout>
  );
}
