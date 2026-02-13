import { Metadata } from 'next';
import InfoPageLayout from '@/components/layout/InfoPageLayout';

export const metadata: Metadata = {
  title: 'No FEAR Act — Notification and Federal Employee Antidiscrimination | EIN Gov',
  description:
    'Learn about the No FEAR Act and how it protects federal employees from discrimination and retaliation. Understand your workplace rights within federal agencies.',
};

export default function NoFearActPage() {
  return (
    <InfoPageLayout
      title="No FEAR Act"
      subtitle="Notification and Federal Employee Antidiscrimination and Retaliation Act"
    >
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          What is the No FEAR Act?
        </h2>
        <p>
          The Notification and Federal Employee Antidiscrimination and
          Retaliation Act of 2002 (No FEAR Act) is a federal law designed to
          reduce discrimination and retaliation within federal agencies. The
          law requires federal agencies to be accountable for violations of
          antidiscrimination and whistleblower protection laws and to post
          statistical data relating to federal sector equal employment
          opportunity (EEO) complaints.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Key Provisions
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Federal agencies must reimburse the Judgment Fund for discrimination and whistleblower cases</li>
          <li>Agencies must post EEO complaint data on their public websites</li>
          <li>Annual reports to Congress on the status of EEO complaints</li>
          <li>Mandatory training for all federal employees on antidiscrimination laws</li>
          <li>Agencies must notify employees of their rights under antidiscrimination laws</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Employee Protections
        </h2>
        <p>
          The No FEAR Act works alongside other federal laws to protect
          employees from:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Discrimination based on race, color, religion, sex, national origin, age, or disability</li>
          <li>Retaliation for filing EEO complaints or participating in the EEO process</li>
          <li>Retaliation for whistleblowing activities</li>
          <li>Hostile work environments</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          IRS Compliance
        </h2>
        <p>
          As a federal agency, the IRS is required to comply with the No FEAR
          Act. The IRS publishes its EEO complaint data and provides annual
          training to employees on their rights and responsibilities under
          antidiscrimination and whistleblower protection laws.
        </p>
      </section>
    </InfoPageLayout>
  );
}
