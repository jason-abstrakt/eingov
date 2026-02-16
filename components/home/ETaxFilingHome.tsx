'use client';

import Link from 'next/link';
import LexoraLogo from '@/components/ui/LexoraLogo';
import {
  ClipboardCheck,
  BadgeCheck,
  FileEdit,
  Shield,
  FileText,
  Calculator,
  Banknote,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Seamless Application',
    description: 'Step-by-step guidance so you complete your tax forms correctly the first time.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Completion',
    description: 'We validate your information and confirm acceptance with the IRS.',
  },
  {
    icon: FileEdit,
    title: 'Effortless Filing',
    description: 'Submit returns and amendments online—no paper, no hassle.',
  },
];

const services = [
  {
    icon: FileText,
    title: 'Tax-ID filing',
    description: 'Apply for an Employer Identification Number (EIN) or retrieve an existing one. Required for businesses, trusts, estates, and many nonprofits.',
  },
  {
    icon: FileEdit,
    title: 'Tax return e-filing',
    description: 'File individual and business tax returns electronically. Faster processing, instant confirmation, and fewer errors than paper filing.',
  },
  {
    icon: Calculator,
    title: 'Tax preparation support',
    description: 'Guided preparation for common forms and schedules. We help you report income, deductions, and credits accurately.',
  },
  {
    icon: Banknote,
    title: 'Amendments and prior-year filing',
    description: 'Correct a filed return with an amendment or file returns for prior years when you’re ready.',
  },
];

const whoItsFor = [
  'Small businesses and self-employed individuals',
  'Sole proprietors, LLCs, and corporations',
  'Estates and trusts that need an EIN or tax filing',
  'Nonprofits and charities',
  'Anyone who prefers online filing over paper',
];

const howItWorks = [
  { step: 1, title: 'Create an account', detail: 'Sign up in minutes. Your data is stored securely.' },
  { step: 2, title: 'Choose your service', detail: 'EIN application, e-file a return, or amend a prior year.' },
  { step: 3, title: 'Complete the forms', detail: 'Answer questions in plain language. We map your answers to the right IRS forms.' },
  { step: 4, title: 'Review and submit', detail: 'Review your information, pay any service fee, and submit. We’ll confirm when the IRS accepts your filing.' },
];

const faqs = [
  {
    q: 'Is it safe to file my taxes online with you?',
    a: 'Yes. We use encryption and secure connections. We never sell your data and only use it to complete the services you request. Our systems are designed to meet industry standards for handling sensitive tax information.',
  },
  {
    q: 'How long until I get my EIN?',
    a: 'Most EIN applications are processed immediately. You’ll receive your EIN and confirmation letter by email once the IRS approves your application. In rare cases, the IRS may request additional information.',
  },
  {
    q: 'Can I e-file my business return here?',
    a: 'We support e-filing for many common business and individual situations. Select your service on our site to see what’s available. Complex returns may require a tax professional.',
  },
  {
    q: 'What if I made a mistake on a return I already filed?',
    a: 'You can file an amended return through our amendment service. We’ll guide you through the corrections and submit the amendment to the IRS electronically where supported.',
  },
];

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-[480px] aspect-[4/3] flex-shrink-0 perspective-1000">
      {/* Abstract background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />
      
      {/* Main Card: Dashboard View */}
      <div className="absolute inset-x-4 inset-y-4 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform hover:rotate-0 duration-700 ease-out">
        {/* Fake Browser Header */}
        <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-4 h-2 w-32 bg-slate-200 rounded-full" />
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="h-4 w-24 bg-slate-900 rounded mb-2" />
              <div className="h-2 w-32 bg-slate-200 rounded" />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Shield className="w-5 h-5" />
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-700 text-sm">Filing Accepted</span>
              </div>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Completed</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500 rounded-full" />
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Submission</span>
                <span>IRS Receipt</span>
                <span>Approval</span>
              </div>
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-slate-200 rounded mb-1.5" />
                  <div className="h-1.5 w-12 bg-slate-100 rounded" />
                </div>
                <div className="h-2 w-8 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Card: EIN Assigned */}
      <div className="absolute -right-4 bottom-12 bg-white rounded-xl shadow-xl border border-slate-100 p-4 w-48 animate-float">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-0.5">EIN Assigned</p>
            <p className="text-sm font-bold text-slate-900">12-3456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ETaxFilingHome() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-5 py-4 flex justify-between items-center">
          <LexoraLogo href="/" />
          <Link
            href="/sign-in"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto px-5 pt-14 pb-16 lg:pt-20 lg:pb-24">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
              <div className="flex-1 max-w-xl">
                <h1 className="text-4xl sm:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-5">
                  Online Tax E-Filing
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-1">
                  Tax-ID filing, tax preparation, and tax return e-filing.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Professional tax filing services for small businesses.
                </p>
                <div className="mt-8">
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide py-3.5 px-6 rounded-lg transition-colors shadow-sm"
                  >
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <HeroIllustration />
            </div>

            {/* CTA card */}
            <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/80 shadow-sm max-w-md">
              <p className="text-slate-900 font-semibold text-lg mb-4">Ready to file your taxes?</p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-3 px-5 rounded-lg transition-colors"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="py-14 sm:py-16 border-t border-slate-100 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid sm:grid-cols-3 gap-10 sm:gap-14">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-700 mb-4">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h2 className="font-semibold text-slate-900 text-base mb-2">{f.title}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services we offer */}
        <section className="py-14 sm:py-16 bg-slate-50/80">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Services we offer</h2>
            <p className="text-slate-600 mb-10 max-w-xl">
              From tax-ID applications to e-filing returns and amendments—we help you meet federal tax obligations online.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="bg-white rounded-xl border border-slate-200/80 p-6 flex gap-4 shadow-sm">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 mb-1.5">{s.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Who it's for</h2>
            <p className="text-slate-600 mb-8 max-w-xl">
              E-filing for individuals and businesses who want a straightforward way to meet their tax obligations online.
            </p>
            <ul className="space-y-3 max-w-xl">
              {whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 sm:py-16 bg-slate-50/80">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">How it works</h2>
            <p className="text-slate-600 mb-10 max-w-xl">
              A simple, guided process from start to finish.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {howItWorks.map((h) => (
                <div key={h.step} className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-sm">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white font-semibold text-sm mb-4">
                    {h.step}
                  </span>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{h.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{h.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & accuracy */}
        <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <Shield className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Security & accuracy</h2>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-3">
                  We use encryption and secure connections for all submissions. Your information is used only to complete the services you request and is never sold. We validate data before sending to the IRS to reduce errors and rejections.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                  Our Accurate Filing Guarantee: we’ll correct any filing that’s rejected or incorrect due to our error at no extra cost to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-14 sm:py-16 bg-slate-50/80 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-5">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <Headphones className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Support when you need it</h2>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xl mb-4">
                  Questions about e-filing? Our support team can help. Use the FAQ, help center, or contact us for your application or return.
                </p>
                <Link href="#" className="text-slate-900 font-medium text-sm hover:underline inline-flex items-center gap-1">
                  Contact support
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8">Frequently asked questions</h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-slate-200 pb-6 last:border-0">
                  <dt className="font-medium text-slate-900 mb-2">{faq.q}</dt>
                  <dd className="text-slate-600 text-sm leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 sm:py-16 bg-slate-900">
          <div className="max-w-5xl mx-auto px-5 text-center">
            <h2 className="text-2xl font-semibold text-white mb-3">Start your e-filing today</h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
              Get your tax ID, e-file your return, or amend a prior year—all in one place.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold text-sm py-3 px-6 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <LexoraLogo href="/" variant="light" size="compact" />
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-5 mt-6 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EIN Gov. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
