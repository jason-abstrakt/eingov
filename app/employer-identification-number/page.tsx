import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'What is an Employer Identification Number (EIN)? | EIN Gov',
  description:
    'Learn what an Employer Identification Number (EIN) is, who needs one, and how to apply. An EIN is a unique 9-digit number assigned by the IRS for tax purposes.',
};

export default function EmployerIdentificationNumberPage() {
  return (
    <InfoPageLayout
      title="What is an Employer Identification Number (EIN)?"
      subtitle="Understanding your federal tax identification number"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
        <p>
          An Employer Identification Number (EIN), also known as a Federal Tax
          Identification Number, is a unique nine-digit number assigned by the
          Internal Revenue Service (IRS) to business entities operating in the
          United States. Think of it as a Social Security Number for your
          business — it is used to identify your company for tax filing and
          reporting purposes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Who Needs an EIN?
        </h2>
        <p>You may need an EIN if you:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Operate a business with employees</li>
          <li>Operate as a corporation or partnership</li>
          <li>File employment, excise, or alcohol, tobacco, and firearms tax returns</li>
          <li>Withhold taxes on income paid to a non-resident alien</li>
          <li>Have a Keogh plan or are involved with certain trusts, estates, or nonprofits</li>
          <li>Are a sole proprietor who wants to separate personal and business finances</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How is an EIN Formatted?
        </h2>
        <p>
          An EIN is formatted as a nine-digit number in the pattern XX-XXXXXXX.
          The first two digits identify the IRS campus that issued the number.
          Once assigned, your EIN never expires and is never reissued to another
          entity.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          How to Apply for an EIN
        </h2>
        <p>
          You can apply for an EIN online, by fax, by mail, or by telephone
          (international applicants). The online application is the fastest
          method — you can receive your EIN immediately upon completing the
          process. Our service simplifies this process and helps ensure your
          application is completed accurately.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Common Uses for an EIN
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Opening a business bank account</li>
          <li>Filing federal and state tax returns</li>
          <li>Applying for business licenses and permits</li>
          <li>Hiring employees and processing payroll</li>
          <li>Establishing business credit</li>
          <li>Applying for business loans</li>
        </ul>
      </section>
    </InfoPageLayout>
  );
}
