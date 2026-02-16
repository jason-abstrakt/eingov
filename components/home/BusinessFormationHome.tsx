'use client';

import Link from 'next/link';
import { Building2, Search } from 'lucide-react';

const cards = [
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
    quote: 'The experience of setting up my own LLC was both smooth and reassuring. I felt guided every step of the way.',
    author: '— Satisfied customer',
  },
  {
    quote: 'Efficient and professional assistance in quickly forming our corporation. Highly recommend.',
    author: '— Business owner',
  },
  {
    quote: 'Wow! Being nervous and not knowing exactly which entity to choose, the team made it simple and fast.',
    author: '— New entrepreneur',
  },
];

export default function BusinessFormationHome() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f5f5]">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight">
            EIN GOV
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-900">Business</Link>
            <Link href="#" className="hover:text-gray-900">Personal</Link>
            <Link href="#" className="hover:text-gray-900">Forms</Link>
            <Link href="#" className="hover:text-gray-900">Support</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:8557871221" className="text-sm text-gray-600 hover:text-gray-900 hidden sm:inline">(855) 787-1221</a>
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

        {/* Formation cards */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
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

        {/* Value prop + testimonials */}
        <section className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Start a business that lasts
            </h2>
            <p className="text-lg text-gray-600 mb-14">
              Backed by 20+ years of experience and 4M+ formations.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#0d5c5c] text-white p-6 rounded-lg text-left flex flex-col"
                >
                  <p className="text-sm leading-relaxed flex-grow">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-xs text-white/80 mt-4">{t.author}</p>
                </div>
              ))}
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
              <span className="font-bold text-white block">EIN Gov</span>
              <span className="text-xs">Business formation & EIN services</span>
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
