import ApplicationHeader from '@/components/layout/ApplicationHeader';
import Link from 'next/link';

export default function TermsOfService() {
  const currentDate = 'February 13, 2026';

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ApplicationHeader />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <div className="flex gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
            <p><strong>Effective Date:</strong> {currentDate}</p>
            <p><strong>Last Updated:</strong> {currentDate}</p>
          </div>

          <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "Customer") and Abstrakt Advisors, LLC ("we," "us," "our," or "Company") concerning your use of the EINgov.com website (the "Website") and EIN application services (the "Services").
              </p>
              <p>
                By accessing the Website, submitting an application, or paying for our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Website or Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Services</h2>
              <p>
                EINgov.com provides EIN (Employer Identification Number) application preparation and submission services. We are an <strong>independent third-party service provider</strong> and are <strong>NOT affiliated with, endorsed by, or connected to the Internal Revenue Service (IRS) or any other United States government agency</strong>.
              </p>
              <p className="mb-2">Our Services include:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li><strong>Standard Delivery Service ($279):</strong> We prepare and submit your EIN application to the IRS, with delivery of your EIN within up to 2 business days following successful processing by the IRS.</li>
                <li><strong>Express Delivery Service ($319):</strong> We prepare and submit your EIN application to the IRS with expedited processing, targeting faster delivery.</li>
              </ul>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-1">Important Notice</h3>
                <p className="text-sm">
                  The IRS provides a free EIN application service directly at www.irs.gov. You are not required to use a third-party service to obtain an EIN. Our service fee is for the convenience of having us prepare and submit your application on your behalf.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Authorization and Consent</h2>
              <p className="mb-2">By using our Services and providing your information, you:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Authorize Abstrakt Advisors, LLC to act as your authorized representative to prepare and submit your EIN application to the IRS on your behalf</li>
                <li>Certify that all information you provide is true, accurate, and complete</li>
                <li>Acknowledge that you are legally authorized to apply for an EIN for the business entity specified</li>
                <li>Consent to our collection, use, and submission of your information to the IRS as described in our Privacy Policy</li>
                <li>Understand that we will communicate with you via the email address you provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Customer Responsibilities</h2>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Provide accurate, complete, and current information for your EIN application</li>
                <li>Have legal authority to apply for an EIN on behalf of the business entity</li>
                <li>Review all information for accuracy before submission</li>
                <li>Respond promptly to any requests for additional information or clarification</li>
                <li>Notify us immediately of any changes to your contact information</li>
                <li>Comply with all applicable federal, state, and local laws</li>
              </ul>
              <p>
                You acknowledge that providing false or misleading information may result in denial of your application and potential legal consequences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Service Fees and Payment</h2>
              <h3 className="font-bold text-gray-900 mb-2 mt-4">Pricing</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Standard Delivery: $279</li>
                <li>Express Delivery: $319</li>
              </ul>
              
              <h3 className="font-bold text-gray-900 mb-2">Payment Terms</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment is due in full at the time of service purchase</li>
                <li>All payments are processed securely through Stripe, our third-party payment processor</li>
                <li>Prices are in US Dollars (USD)</li>
                <li>All fees are non-refundable as specified in Section 6</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Refund Policy</h2>
              <p className="font-bold mb-2">NO REFUNDS AFTER SUBMISSION</p>
              <p className="mb-2">
                Once your EIN application has been submitted to the IRS, all fees are final and non-refundable. This includes situations where:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>The IRS denies or rejects your application</li>
                <li>You change your mind after submission</li>
                <li>You no longer need the EIN</li>
                <li>There are delays in IRS processing</li>
                <li>You provided incorrect information</li>
              </ul>

              <h3 className="font-bold text-gray-900 mb-2">Our Commitment</h3>
              <p className="mb-2">If your application is rejected by the IRS for any reason, while we do not provide refunds, we will:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact you to understand the reason for rejection</li>
                <li>Work with you to correct any issues</li>
                <li>Resubmit your application at no additional charge</li>
                <li>Make reasonable efforts to help you obtain a successful result</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Service Delivery and Timing</h2>
              <h3 className="font-bold text-gray-900 mb-2 mt-4">Delivery Timeframes</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li><strong>Standard Delivery:</strong> Up to 2 business days after successful IRS processing</li>
                <li><strong>Express Delivery:</strong> Expedited processing with faster delivery target</li>
              </ul>

              <h3 className="font-bold text-gray-900 mb-2">Important Disclaimers</h3>
              <p className="mb-2"><strong>We do not guarantee specific delivery times.</strong> Delivery timeframes are estimates and depend on:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>IRS processing times (which are outside our control)</li>
                <li>Accuracy and completeness of information provided</li>
                <li>IRS workload and availability</li>
                <li>Potential requests for additional information from the IRS</li>
              </ul>
              <p>Your EIN will be delivered to you via email once we receive it from the IRS.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. No Warranties or Guarantees</h2>
              <p className="uppercase mb-2">OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
              <p className="mb-2">We specifically disclaim any warranties, including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Guarantee of application approval</li>
                <li>Specific delivery timeframes</li>
                <li>Uninterrupted or error-free service</li>
                <li>Fitness for a particular purpose</li>
                <li>Accuracy, reliability, or completeness of results</li>
              </ul>
              <p className="mb-2">We do not guarantee that:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your EIN application will be approved by the IRS</li>
                <li>The IRS will process your application within any specific timeframe</li>
                <li>There will be no errors or delays in IRS processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
              <p className="uppercase mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ABSTRAKT ADVISORS, LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Your use or inability to use our Services</li>
                <li>Any unauthorized access to or use of your personal information</li>
                <li>Any errors or omissions in content or information provided through the Services</li>
                <li>Delays or failures in IRS processing or approval</li>
                <li>Any other matter relating to the Services</li>
              </ul>
              <p className="uppercase">
                OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Indemnification</h2>
              <p className="mb-2">
                You agree to indemnify, defend, and hold harmless Abstrakt Advisors, LLC, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any law or regulation</li>
                <li>Any false or misleading information you provide</li>
                <li>Any claim that your use of the Services infringes any third-party rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. IRS Relationship and Government Disclaimer</h2>
              <p className="mb-2"><strong>WE ARE NOT THE IRS.</strong> Abstrakt Advisors, LLC is an independent, private company. We are not affiliated with, endorsed by, or connected to the Internal Revenue Service or any United States government agency.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The IRS offers a free EIN application service at www.irs.gov</li>
                <li>You are not required to use our service to obtain an EIN</li>
                <li>Our service is for convenience and assistance only</li>
                <li>The IRS makes the final determination on all EIN applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Intellectual Property</h2>
              <p className="mb-2">
                All content on the Website, including text, graphics, logos, images, and software, is the property of Abstrakt Advisors, LLC or its licensors and is protected by United States and international copyright laws.
              </p>
              <p className="mb-2">You may not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Copy, modify, distribute, or reproduce any content without written permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Create derivative works based on our Website or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Privacy and Data Protection</h2>
              <p className="mb-2">
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="mb-2">Key points:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>We collect information necessary to process your EIN application</li>
                <li>Information is shared only with the IRS and necessary service providers</li>
                <li>Data is retained for 1 month, then permanently deleted</li>
                <li>We implement reasonable security measures to protect your information</li>
              </ul>
              <p>Please review our full <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> for complete details.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. User Conduct</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the Services for any unlawful purpose</li>
                <li>Provide false, inaccurate, or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Use any automated system to access the Services</li>
                <li>Impersonate any person or entity</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">15. Termination</h2>
              <p className="mb-2">
                We reserve the right to suspend or terminate your access to our Services at any time, with or without notice, for any reason, including violation of these Terms.
              </p>
              <p className="mb-2">Upon termination:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your right to use the Services will immediately cease</li>
                <li>We will not be liable for any consequences of termination</li>
                <li>Sections of these Terms that by their nature should survive termination will remain in effect</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">16. Modifications to Terms</h2>
              <p className="mb-2">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Posting the updated Terms on the Website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending notice to your email address (for active customers)</li>
              </ul>
              <p>Your continued use of the Services after changes constitutes acceptance of the modified Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">17. Dispute Resolution and Governing Law</h2>
              <h3 className="font-bold text-gray-900 mb-2 mt-4">Governing Law</h3>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Abstrakt Advisors, LLC is registered, without regard to conflict of law principles.
              </p>
              
              <h3 className="font-bold text-gray-900 mb-2">Dispute Resolution</h3>
              <p className="mb-2">Any dispute arising out of or relating to these Terms or our Services shall be resolved through:</p>
              <ol className="list-decimal pl-5 space-y-1 mb-4">
                <li><strong>Informal Negotiation:</strong> First, contact us at support@eingov.com to attempt resolution</li>
                <li><strong>Binding Arbitration:</strong> If informal resolution fails, disputes will be resolved through binding arbitration in accordance with the American Arbitration Association rules</li>
              </ol>
              <p>You waive your right to participate in class action lawsuits or class-wide arbitration.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">18. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">19. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Abstrakt Advisors, LLC regarding the Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">20. Contact Information</h2>
              <p className="mb-2">If you have any questions about these Terms, please contact us:</p>
              <p>
                <strong>Abstrakt Advisors, LLC</strong><br />
                Email: <a href="mailto:support@eingov.com" className="text-blue-600 hover:underline">support@eingov.com</a><br />
                Website: EINgov.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">21. Assignment</h2>
              <p>
                You may not assign or transfer these Terms or your rights and obligations under these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">22. Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">23. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">24. Electronic Communications</h2>
              <p>
                By using our Services, you consent to receive electronic communications from us. These communications may include notices about your account, application status, and other information concerning or related to our Services. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="font-semibold text-gray-900">
                By using EINgov.com and our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
