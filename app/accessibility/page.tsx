import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'Accessibility | EIN Gov',
  description:
    'EIN Gov is committed to digital accessibility. Learn about our efforts to ensure our website and EIN application services are accessible to all users.',
};

export default function AccessibilityPage() {
  return (
    <InfoPageLayout
      title="Accessibility"
      subtitle="Our commitment to accessible services for all users"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Our Commitment
        </h2>
        <p>
          EIN Gov is committed to ensuring that our website and services are
          accessible to all individuals, including those with disabilities. We
          strive to meet or exceed applicable accessibility standards to
          provide an inclusive experience for every user.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Accessibility Standards
        </h2>
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG)
          2.1 Level AA standards. These guidelines provide a framework for
          making web content more accessible to people with a wide range of
          disabilities, including visual, auditory, physical, speech, cognitive,
          language, learning, and neurological disabilities.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Accessibility Features
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Semantic HTML structure for screen reader compatibility</li>
          <li>Keyboard navigation support throughout the application</li>
          <li>Sufficient color contrast ratios for text readability</li>
          <li>Alternative text for images and visual elements</li>
          <li>Clear and descriptive form labels and error messages</li>
          <li>Responsive design that works across devices and screen sizes</li>
          <li>Focus indicators for interactive elements</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Accessibility Resources
        </h2>
        <p>
          The IRS also provides accessibility resources for taxpayers with
          disabilities. These include alternative media formats for tax forms
          and publications (such as Braille and large print), sign language
          interpretation services, and accessible versions of online tools.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Feedback
        </h2>
        <p>
          We welcome feedback about the accessibility of our website. If you
          encounter any barriers or have suggestions for improvement, please
          contact us at{' '}
          <a
            href="mailto:support@eingov.com"
            className="text-blue-600 hover:underline"
          >
            support@eingov.com
          </a>
          . We will make reasonable efforts to address your concerns promptly.
        </p>
      </section>
    </InfoPageLayout>
  );
}
