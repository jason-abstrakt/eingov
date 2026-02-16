'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Search, Home, Building, Heart, MessageSquare, Shield, ChevronDown, ChevronUp, Check } from 'lucide-react';

const overviewCards = [
  {
    icon: Home,
    title: 'LLC',
    description: 'Going solo or teaming up? Make sure you\'re not personally on the hook for business liabilities with an LLC.',
  },
  {
    icon: Building,
    title: 'Corporation',
    description: 'Plan to issue shares, go public, or go global? Go further as a corporation.',
  },
  {
    icon: Heart,
    title: 'Nonprofit',
    description: 'Create an organization to give back and be eligible for tax breaks.',
  },
  {
    icon: MessageSquare,
    title: 'DBA',
    description: 'Get a business name for your sole prop without forming a legal entity, or add a new name to an existing entity.',
  },
];

const formationCards = [
  {
    title: 'Limited Liability Company (LLC)',
    price: 'Starts at $0 + state filing fees',
    description: 'The simplest, most flexible way to structure your business to protect personal assets.',
    cta: 'Start my LLC',
    href: '/apply',
  },
  {
    title: 'Corporation (S corp or C corp)',
    price: 'Starts at $149 + state filing fees',
    description: 'A more complex structure with the ability to issue shares, go public, or go global.',
    cta: 'Start my corporation',
    href: '/apply',
  },
  {
    title: 'Nonprofit (501c3)',
    price: 'Starts at $99 + state filing fees',
    description: 'A structure designed to support a public or social benefit that can be eligible for tax breaks.',
    cta: 'Start my nonprofit',
    href: '/apply',
  },
  {
    title: 'Doing Business As (DBA)',
    price: 'Starts at $99 + state filing fees',
    description: 'A way to use a business name that sidesteps the upkeep of LLCs or corporations.',
    cta: 'Start my DBA',
    href: '/apply',
  },
];

const testimonials = [
  {
    quote: 'AI Business Formation Services made everything 10 times easier for my business. Fast, easy, and very professional.',
    author: '— Luis C., LLC customer',
    stars: 5,
  },
  {
    quote: 'I am a repeat customer and wouldn\'t trust anyone else with my business details.',
    author: '— Felicia L., LLC customer',
    stars: 5,
  },
  {
    quote: 'Being nervous and not knowing exactly which entity to choose, the team made it simple and fast.',
    author: '— New entrepreneur',
    stars: 5,
  },
];

const faqs = [
  {
    q: 'What\'s the difference between an LLC and a corporation?',
    a: 'An LLC offers flexibility in management and taxation with no board of directors required, while a corporation can issue shares and is better suited for going public or operating globally. LLCs are generally simpler to run; corporations have more formalities but more options for growth and investment.',
  },
  {
    q: 'What\'s the difference between a C corporation and an S corporation?',
    a: 'C corporations are taxed separately from their owners and can have unlimited shareholders. S corporations pass income and losses through to shareholders for tax purposes and have restrictions (e.g., limit on number of shareholders, U.S. residents only). Both offer limited liability protection.',
  },
  {
    q: 'What\'s the main difference between a sole proprietorship and an LLC?',
    a: 'A sole proprietorship has no legal separation between you and the business—you\'re personally liable for business debts. An LLC separates your personal assets from business liabilities and can offer tax flexibility and credibility.',
  },
  {
    q: 'How are different business types taxed?',
    a: 'Sole props and single-member LLCs are typically pass-through (income on your personal return). Multi-member LLCs and partnerships also use pass-through taxation unless they elect otherwise. C corporations are taxed at the corporate level; S corporations pass income to shareholders. Nonprofits may be exempt under 501(c)(3).',
  },
  {
    q: 'Which business types give me personal liability protection?',
    a: 'LLCs and corporations (C and S) provide personal liability protection—business debts and claims generally don\'t reach your personal assets. Sole proprietorships and DBAs do not; you\'re personally on the hook for business obligations.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-5 py-4 flex items-center justify-between text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors"
          >
            <span>{faq.q}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function BusinessFormationHome() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f5f5]">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 tracking-tight leading-tight">
              AI Business Formation Services
            </span>
            <span className="text-xs text-gray-500 mt-0.5">By EINGov</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-900">Business</Link>
            <Link href="#" className="hover:text-gray-900">Personal</Link>
            <Link href="#" className="hover:text-gray-900">Forms</Link>
            <Link href="#" className="hover:text-gray-900">Support</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" className="p-2 text-gray-500 hover:text-gray-900" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/sign-in" className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-800">
              Sign in
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:text-gray-700">Business</Link>
          <span className="mx-2">|</span>
          <span className="text-gray-900 font-medium">Business formation</span>
        </div>
      </div>

      <main className="flex-grow">
        {/* Hero headline */}
        <section className="max-w-6xl mx-auto px-4 pt-12 pb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Kickstart your business in minutes
          </h1>
        </section>

        {/* 100% Accurate Filing Guarantee */}
        <section className="max-w-6xl mx-auto px-4 pb-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="font-bold text-gray-900 text-lg flex-shrink-0">100% Accurate Filing Guarantee</h2>
            <div className="sm:border-l sm:border-gray-200 sm:pl-5 text-sm text-gray-600">
              We&apos;re committed to the highest quality and accuracy. If your filing is rejected or incorrect due to our error, we&apos;ll correct it with the government agency at no additional cost to you.
            </div>
          </div>
        </section>

        {/* Formation cards */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formationCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h2>
                  <p className="text-sm font-medium text-orange-600 mb-3">{card.price}</p>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{card.description}</p>
                  <Link
                    href={card.href}
                    className="inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded transition-colors"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All business types at a glance */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">All business types at a glance</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {overviewCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                <Icon className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            );
          })}
          </div>

          {/* Detailed LLC card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <Home className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-bold text-gray-900">Limited Liability Company (LLC)</h3>
            </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-gray-900">How it&apos;s unique</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Best for max flexibility in how you manage and run your business; board of directors not required</li>
                  <li>Unlimited owners (aka &quot;members&quot;) allowed</li>
                </ul>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-5 h-5 text-orange-500" />
                  <h4 className="font-semibold text-gray-900">Protections & taxation</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>You&apos;re not personally on the hook for business liabilities</li>
                  <li>Taxed once or twice; you&apos;re free to choose which can help minimize taxes</li>
                </ul>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-0.5 bg-orange-500 block mt-2" />
                  <h4 className="font-semibold text-gray-900">Drawbacks to consider</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>Ongoing filings and fees to stay in compliance</li>
                  <li>LLCs can&apos;t go public</li>
                  <li>Not recognized globally; you may be taxed as a corporation in other countries</li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-bold text-gray-900">Ready to get your LLC?</p>
                <p className="text-sm text-gray-600">Starts at $0 + state filing fees</p>
              </div>
              <div className="flex gap-3">
                <Link href="#" className="text-orange-600 font-medium hover:underline">Learn more</Link>
                <Link href="/apply" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded transition-colors">
                  Start an LLC
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value prop + stats + testimonials */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3">
              Start a business that lasts
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Backed by 20+ years of experience and 4M+ formations.
            </p>

            <div className="grid gap-6 sm:grid-cols-3 mb-12">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[#f9f9f9] border border-gray-200 rounded-lg p-6 text-left">
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-xs text-gray-500 mt-4">{t.author}</p>
                  <div className="flex gap-0.5 mt-2 text-orange-500">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} aria-hidden>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-gray-900">4M+</p>
                <p className="text-sm text-gray-600">businesses formed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-sm text-gray-600">years of experience</p>
              </div>
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 bg-white">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900 text-sm">Accurate Filing Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-[#fafaf8] rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:gap-12">
              <div className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
                <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Frequently asked questions
                </h2>
              </div>
              <div className="flex-1 min-w-0">
                <FAQAccordion />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-white" />
            <div>
              <span className="font-bold text-white block">AI Business Formation Services</span>
              <span className="text-xs">By EINGov</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} EIN Gov. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
