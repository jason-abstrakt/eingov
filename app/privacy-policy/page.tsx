import ApplicationHeader from '@/components/layout/ApplicationHeader';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const currentDate = 'February 13, 2026';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ApplicationHeader />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <div className="flex gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
            <p><strong>Effective Date:</strong> {currentDate}</p>
            <p><strong>Last Updated:</strong> {currentDate}</p>
          </div>

          <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy describes how Abstrakt Advisors, LLC ("we," "us," or "our") collects, uses, and protects your personal information when you use EINgov.com (the "Website") to obtain Employer Identification Number (EIN) application services.
              </p>
              <p>
                By using our Website and services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect the following types of information necessary to process your EIN application on your behalf:</p>
              
              <h3 className="font-bold text-gray-900 mb-2 mt-4">Personal Information</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Full legal name</li>
                <li>Social Security Number (SSN)</li>
                <li>Home address</li>
                <li>Phone number</li>
                <li>Email address</li>
              </ul>

              <h3 className="font-bold text-gray-900 mb-2">Business Information</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Business legal name</li>
                <li>Business address</li>
                <li>Business type and structure</li>
                <li>Reason for applying for an EIN</li>
                <li>Responsible party information</li>
                <li>Business formation details</li>
              </ul>

              <h3 className="font-bold text-gray-900 mb-2">Payment Information</h3>
              <p className="mb-4">
                Payment information (credit card details) is collected and processed by our third-party payment processor, Stripe. We do not directly collect, store, or have access to your complete payment card information.
              </p>

              <h3 className="font-bold text-gray-900 mb-2">Usage Information</h3>
              <p className="mb-2">We use Google Analytics to collect information about how you interact with our Website, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>EIN Application Processing:</strong> To prepare and submit your EIN application to the Internal Revenue Service (IRS) on your behalf</li>
                <li><strong>Service Delivery:</strong> To deliver your EIN to you via email once received from the IRS</li>
                <li><strong>Communication:</strong> To contact you regarding your application status, service updates, or customer support inquiries</li>
                <li><strong>Payment Processing:</strong> To process your service fee payment through our payment processor</li>
                <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our Website functionality and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We only share your information in the following limited circumstances:
              </p>

              <h3 className="font-bold text-gray-900 mb-2">With the IRS</h3>
              <p className="mb-4">We submit your information to the Internal Revenue Service solely for the purpose of obtaining your EIN.</p>

              <h3 className="font-bold text-gray-900 mb-2">With Service Providers</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li><strong>Stripe:</strong> Our payment processor handles all payment transactions. Stripe's use of your information is governed by their own privacy policy.</li>
                <li><strong>Google Analytics:</strong> We use Google Analytics to understand Website usage. Google's use of information is governed by their privacy policy.</li>
              </ul>

              <h3 className="font-bold text-gray-900 mb-2">Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for <strong>one (1) month</strong> following the completion of your EIN application service. After this period, all personal information is permanently deleted from our systems.
              </p>
              <p>
                Email communications containing your EIN will remain in your email inbox according to your own email retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
              <p className="mb-2">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information (subject to our legal obligations)</li>
                <li>The right to object to or restrict certain processing activities</li>
              </ul>
              <p>To exercise these rights, please contact us at <a href="mailto:support@eingov.com" className="text-blue-600 hover:underline">support@eingov.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies through Google Analytics to monitor activity on our Website and collect certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
              <p className="mb-2">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <p>
                <strong>Abstrakt Advisors, LLC</strong><br />
                Email: <a href="mailto:support@eingov.com" className="text-blue-600 hover:underline">support@eingov.com</a><br />
                Website: EINgov.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. California Privacy Rights</h2>
              <p>
                If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. International Users</h2>
              <p>
                Our services are operated in the United States. If you are accessing our Website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
