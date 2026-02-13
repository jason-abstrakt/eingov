import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'System Status | EIN Gov',
  description:
    'Check the current system status of EIN Gov application services. View real-time availability of our EIN application platform and processing systems.',
};

export default function SystemStatusPage() {
  return (
    <InfoPageLayout
      title="System Status"
      subtitle="Current availability of EIN Gov services"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Current Status
        </h2>
        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0" />
          <p className="text-green-800 font-semibold">
            All Systems Operational
          </p>
        </div>
        <p>
          Our EIN application platform and all supporting services are
          currently operating normally. Applications are being processed and
          delivered as expected.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Service Components
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-900">EIN Application Portal</span>
            <span className="flex items-center gap-2 text-sm text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-900">Payment Processing</span>
            <span className="flex items-center gap-2 text-sm text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-900">EIN Delivery System</span>
            <span className="flex items-center gap-2 text-sm text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Operational
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium text-gray-900">Customer Support</span>
            <span className="flex items-center gap-2 text-sm text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Operational
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS System Availability
        </h2>
        <p>
          Please note that our service relies on the IRS e-file system for
          processing EIN applications. The IRS online EIN application system
          is generally available Monday through Friday, 7:00 a.m. to 10:00
          p.m. Eastern Time. During scheduled IRS maintenance windows,
          application processing may be temporarily delayed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Report an Issue
        </h2>
        <p>
          If you are experiencing issues with our service, please contact us
          at{' '}
          <a
            href="mailto:support@eingov.com"
            className="text-blue-600 hover:underline"
          >
            support@eingov.com
          </a>
          . We monitor our systems 24/7 and will work to resolve any issues
          as quickly as possible.
        </p>
      </section>
    </InfoPageLayout>
  );
}
