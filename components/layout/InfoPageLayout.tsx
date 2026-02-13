import { ReactNode } from 'react';
import Link from 'next/link';
import ApplicationHeader from '@/components/layout/ApplicationHeader';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface InfoPageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function InfoPageLayout({ title, subtitle, children }: InfoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ApplicationHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 sm:p-12">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-500 mb-6">{subtitle}</p>
          )}

          {/* CTA Button — near the top */}
          <div className="mb-8 p-6 bg-us-light-blue border border-blue-200 rounded-lg text-center">
            <p className="text-gray-700 mb-4 text-lg">
              Ready to get your Employer Identification Number?
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-us-blue hover:bg-us-dark-blue text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg transition-colors"
            >
              Apply for EIN Online
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Non-affiliation notice */}
          <p className="text-xs text-gray-400 mb-8 text-center">
            EIN Gov is not affiliated with the Internal Revenue Service (IRS) or any government agency.
            This is an independent informational resource and application service.
          </p>

          {/* Page Content */}
          <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
            {children}
          </div>

          {/* Standard Disclaimer Block — bottom of every page */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-us-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-wide">
                    Authorized e-File Provider Service
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    We will generate a government-issued EIN for you. We are not
                    officially affiliated with the Internal Revenue Service (IRS) or
                    any government agency, but by going through this flow, we will get
                    you your EIN emailed to you promptly.
                  </p>
                  <p className="text-gray-500 text-xs">
                    This service is provided to assist in the efficient processing of
                    your application. All data is transmitted securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
