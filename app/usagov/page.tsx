import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'USA.gov — Official Guide to Government Services | EIN Gov',
  description:
    'Learn about USA.gov, the official web portal of the United States government. Find information about government services, agencies, and resources for businesses.',
};

export default function USAGovPage() {
  return (
    <InfoPageLayout
      title="USA.gov"
      subtitle="The official guide to government information and services"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is USA.gov?
        </h2>
        <p>
          USA.gov is the official web portal of the United States government.
          It provides a centralized source of information about government
          services, agencies, and programs. The site helps citizens,
          businesses, and visitors find the government resources they need,
          from applying for benefits to starting a business.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Resources for Businesses
        </h2>
        <p>
          USA.gov provides a wealth of resources for business owners, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Guides to starting and managing a business</li>
          <li>Information about business licenses and permits</li>
          <li>Federal and state tax information</li>
          <li>Small business loan and grant programs</li>
          <li>Export and trade resources</li>
          <li>Employment law and workplace regulations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Government Services
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Social Security and benefits information</li>
          <li>Immigration and citizenship services</li>
          <li>Consumer protection and complaints</li>
          <li>Health insurance and Medicare</li>
          <li>Education and student loans</li>
          <li>Veterans&apos; services and benefits</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Starting a Business
        </h2>
        <p>
          One of the first steps in starting a business is obtaining an
          Employer Identification Number (EIN) from the IRS. USA.gov provides
          guidance on the complete process of starting a business, including
          choosing a business structure, registering your business name,
          obtaining necessary licenses, and understanding your tax obligations.
        </p>
      </section>
    </InfoPageLayout>
  );
}
