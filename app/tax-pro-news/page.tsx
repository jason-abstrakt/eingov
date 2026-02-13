import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Tax Professional News & Updates | EIN Gov',
  description:
    'Stay informed with the latest news and updates for tax professionals. Information about IRS guidance, tax law changes, and resources for tax practitioners.',
};

export default function TaxProNewsPage() {
  return (
    <InfoPageLayout
      title="Tax Pro News"
      subtitle="Latest updates and resources for tax professionals"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Staying Informed
        </h2>
        <p>
          Tax professionals play a critical role in the tax system, helping
          individuals and businesses comply with federal tax laws. Staying
          current with IRS guidance, tax law changes, and industry updates is
          essential for providing accurate and effective service to clients.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Resources for Tax Pros
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>IRS e-News for Tax Professionals:</strong> Weekly email newsletter with updates and reminders</li>
          <li><strong>Tax Professional Resource Center:</strong> Centralized hub for tax pro tools and information</li>
          <li><strong>IRS Tax Forums:</strong> Annual nationwide seminar series for tax professionals</li>
          <li><strong>Webinars and Virtual Events:</strong> Online training and continuing education opportunities</li>
          <li><strong>IRS Video Portal:</strong> Educational videos on tax topics and procedures</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Filing Season Updates
        </h2>
        <p>
          During each tax filing season, the IRS publishes important updates
          affecting tax professionals, including filing deadline changes, new
          form requirements, and software updates. Tax professionals should
          monitor these updates regularly to ensure accurate filings for their
          clients.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN Applications for Clients
        </h2>
        <p>
          Tax professionals frequently assist clients with obtaining Employer
          Identification Numbers (EINs) for new businesses, entities, and
          organizations. Our online application process makes it easy for tax
          professionals to help their clients apply for EINs efficiently and
          accurately.
        </p>
      </section>
    </InfoPageLayout>
  );
}
