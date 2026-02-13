import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Tax Statistics & Data | EIN Gov',
  description:
    'Explore tax statistics and data published by the IRS. Understand trends in tax filing, revenue collection, and business formations in the United States.',
};

export default function TaxStatisticsPage() {
  return (
    <InfoPageLayout
      title="Tax Statistics & Data"
      subtitle="Understanding IRS data and tax filing trends"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          About IRS Tax Statistics
        </h2>
        <p>
          The IRS publishes a wide range of statistical data about tax filing,
          revenue collection, and the U.S. tax system. This data is used by
          researchers, policymakers, businesses, and the general public to
          understand trends and make informed decisions. The Statistics of
          Income (SOI) division of the IRS is primarily responsible for
          compiling and publishing this information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Types of Tax Data Available
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Individual Income Tax:</strong> Data on individual tax returns, income, deductions, and credits</li>
          <li><strong>Corporate Income Tax:</strong> Data on corporate returns, profits, and tax liabilities</li>
          <li><strong>Partnership and S Corporation:</strong> Data on pass-through entity filings</li>
          <li><strong>Tax-Exempt Organizations:</strong> Data on nonprofit and tax-exempt entities</li>
          <li><strong>Estate and Gift Tax:</strong> Statistics on estate and gift tax returns</li>
          <li><strong>Employment Tax:</strong> Data on payroll taxes and employment figures</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          EIN Issuance Trends
        </h2>
        <p>
          The IRS issues millions of Employer Identification Numbers (EINs)
          each year, reflecting the ongoing formation of new businesses and
          organizations across the country. The number of EIN applications is
          often used as an indicator of entrepreneurial activity and economic
          health.
        </p>
        <p className="mt-3">
          Online applications have become the most popular method for obtaining
          an EIN, with the majority of new EINs now issued through the online
          application process.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Accessing Tax Data
        </h2>
        <p>
          IRS tax statistics are available to the public through the IRS
          website&apos;s Statistics of Income section. Data is published in various
          formats, including reports, tables, and downloadable datasets.
          Researchers can also request custom tabulations for academic and
          policy research purposes.
        </p>
      </section>
    </InfoPageLayout>
  );
}
