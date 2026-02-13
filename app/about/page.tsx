import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'About EIN Gov | EIN Gov',
  description:
    'Learn about EIN Gov, an independent service that helps businesses obtain their Employer Identification Number (EIN) quickly and accurately.',
};

export default function AboutPage() {
  return (
    <InfoPageLayout
      title="About EIN Gov"
      subtitle="Your trusted partner for EIN application services"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who We Are</h2>
        <p>
          EIN Gov is an independent service operated by Abstrakt Advisors, LLC.
          We specialize in helping individuals, businesses, and organizations
          obtain their Employer Identification Number (EIN) from the Internal
          Revenue Service (IRS) quickly, accurately, and with minimal hassle.
        </p>
        <p className="mt-3">
          We are <strong>not affiliated</strong> with the IRS or any government
          agency. Our service is designed to simplify the EIN application process
          by providing a guided, user-friendly experience that ensures your
          application is completed correctly.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
        <p>
          Our mission is to make the process of obtaining an EIN as simple and
          straightforward as possible. We understand that navigating government
          forms can be confusing, especially for first-time business owners. Our
          step-by-step application process guides you through every field,
          reducing errors and saving you time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What We Offer
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>A guided, step-by-step EIN application process</li>
          <li>Built-in validation to prevent common errors</li>
          <li>Prompt delivery of your EIN via email</li>
          <li>Secure handling of all personal and business information</li>
          <li>Customer support for application questions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Why Choose Our Service?
        </h2>
        <p>
          While you can apply for an EIN directly through the IRS at no cost, our
          service provides value through convenience, guidance, and speed. We
          help ensure your application is accurate, which can prevent delays
          caused by errors or incomplete information. Our platform is available
          24/7 and designed to be intuitive for users of all experience levels.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
        <p>
          If you have questions about our service or need assistance with your
          EIN application, please reach out to us at{' '}
          <a
            href="mailto:support@eingov.com"
            className="text-blue-600 hover:underline"
          >
            support@eingov.com
          </a>
          .
        </p>
      </section>
    </InfoPageLayout>
  );
}
