'use client';

import Link from 'next/link';
import LexoraLogo from '@/components/ui/LexoraLogo';
import {
  Search,
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
    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-[420px] flex-shrink-0">
      <svg viewBox="0 0 320 240" className="w-full h-auto" aria-hidden>
        <defs>
          <linearGradient id="docGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        {/* Clipboard / document */}
        <rect x="40" y="20" width="120" height="140" rx="6" fill="url(#docGrad)" opacity="0.95" />
        <rect x="48" y="28" width="104" height="8" rx="2" fill="white" opacity="0.9" />
        <rect x="48" y="44" width="80" height="4" rx="1" fill="white" opacity="0.5" />
        <rect x="48" y="54" width="90" height="4" rx="1" fill="white" opacity="0.5" />
        <rect x="48" y="64" width="70" height="4" rx="1" fill="white" opacity="0.5" />
        <text x="95" y="38" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">TAX</text>
        {/* Calculator */}
        <rect x="160" y="80" width="100" height="120" rx="8" fill="#1e40af" />
        <rect x="170" y="92" width="80" height="40" rx="4" fill="#e5e7eb" />
        <rect x="170" y="142" width="36" height="24" rx="4" fill="#fbbf24" />
        <rect x="214" y="142" width="36" height="24" rx="4" fill="#fbbf24" />
        <rect x="170" y="172" width="36" height="24" rx="4" fill="#fbbf24" />
        <rect x="214" y="172" width="36" height="24" rx="4" fill="#fbbf24" />
        {/* Coins */}
        <circle cx="260" cy="50" r="22" fill="url(#coinGrad)" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="280" cy="75" r="20" fill="url(#coinGrad)" stroke="#f59e0b" strokeWidth="2" opacity="0.9" />
        <circle cx="250" cy="85" r="18" fill="url(#coinGrad)" stroke="#f59e0b" strokeWidth="2" opacity="0.85" />
        {/* Dollar stack */}
        <rect x="55" y="160" width="90" height="55" rx="4" fill="#1e40af" opacity="0.8" />
        <rect x="60" y="165" width="80" height="45" rx="2" fill="#dbeafe" />
        <line x1="70" y1="185" x2="130" y2="185" stroke="#1e40af" strokeWidth="1" opacity="0.6" />
        <line x1="70" y1="195" x2="120" y2="195" stroke="#1e40af" strokeWidth="1" opacity="0.4" />
        {/* Magnifying glass accent */}
        <circle cx="270" cy="160" r="28" fill="none" stroke="#dc2626" strokeWidth="4" opacity="0.8" />
        <line x1="288" y1="178" x2="310" y2="200" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  );
}

export default function ETaxFilingHome() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#fafafa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <LexoraLogo href="/" />
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">E-Filing</Link>
            <Link href="/apply" className="hover:text-gray-900">EIN</Link>
            <Link href="#" className="hover:text-gray-900">Forms</Link>
            <Link href="#" className="hover:text-gray-900">Support</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" className="p-2 text-gray-500 hover:text-gray-900" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/sign-in" className="bg-[#1e40af] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#1e3a8a] transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                  Online Tax E-Filing
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Tax-ID Filing, Tax Preparation, Tax Return e-Filing.
                </p>
                <p className="text-lg text-gray-600">
                  Tax filing services for small businesses.
                </p>
              </div>
              <HeroIllustration />
            </div>

            {/* CTA box */}
            <div className="mt-10 lg:mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 max-w-xl">
              <p className="text-xl font-semibold text-gray-900 mb-4">Ready to file your taxes?</p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                GET STARTED
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Feature strip */}
        <section className="bg-white border-b border-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-[#1e40af] mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h2 className="font-bold text-gray-900 mb-2">{f.title}</h2>
                    <p className="text-sm text-gray-600">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services we offer */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Services we offer</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              From EIN applications to e-filing returns and amendments, we help you handle your federal tax obligations online.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-[#1e40af]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-600">{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Who it's for</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Our e-filing services are designed for individuals and businesses who want a straightforward way to meet their tax obligations online.
            </p>
            <ul className="space-y-3 max-w-2xl">
              {whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How it works</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              A simple, guided process from start to finish.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((h) => (
                <div key={h.step} className="bg-white rounded-xl border border-gray-200 p-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1e40af] text-white font-bold text-lg mb-4">
                    {h.step}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-600">{h.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & accuracy */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-[#1e40af]">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Security & accuracy</h2>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  We use encryption and secure connections for all submissions. Your information is used only to complete the services you request and is never sold. We validate data before sending to the IRS to reduce errors and rejections.
                </p>
                <p className="text-gray-600 max-w-2xl">
                  Our Accurate Filing Guarantee means we’ll correct any filing that’s rejected or incorrect due to our error—at no extra cost to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-[#1e40af]">
                <Headphones className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Support when you need it</h2>
                <p className="text-gray-600 max-w-2xl mb-4">
                  Have questions about e-filing or your EIN? Our support team is here to help. Check our FAQ, help center, or contact us for assistance with your application or return.
                </p>
                <Link href="#" className="text-[#1e40af] font-medium hover:underline inline-flex items-center gap-1">
                  Contact support
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-200 pb-6">
                  <dt className="font-semibold text-gray-900 mb-2">{faq.q}</dt>
                  <dd className="text-gray-600 text-sm leading-relaxed">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#1e40af]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Start your e-filing today</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Get your EIN, e-file your return, or amend a prior year—all in one place.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-white text-[#1e40af] font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              GET STARTED
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <LexoraLogo href="/" variant="light" size="compact" />
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EIN Gov. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
