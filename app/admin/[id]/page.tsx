'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import {
  getApplicationById,
  updateApplicationStatus,
  type StoredApplication,
} from '@/lib/applications';
import { isAuthenticated, signOut } from '@/lib/auth';
import {
  getEntityLabel,
  getSubTypeLabel,
  getReasonLabel,
  getStateLabel,
  getActivityLabel,
  getMonthLabel,
  getSuffixLabel,
  maskSSN,
  formatAddress,
} from '@/lib/utils';
import { ROLE_OPTIONS } from '@/lib/constants';

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <h2 className="bg-gray-50 px-4 py-3 text-sm font-bold text-gray-900 border-b border-gray-200">
        {title}
      </h2>
      <dl className="px-4 py-3 divide-y divide-gray-100">{children}</dl>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | null | undefined }) {
  const v = value ?? '—';
  return (
    <div className="py-2 first:pt-0 flex justify-between gap-4">
      <dt className="text-sm text-gray-500">{label}</dt>
      <dd className="text-sm text-gray-900 text-right">{v}</dd>
    </div>
  );
}

export default function AdminApplicationDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [app, setApp] = useState<StoredApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function init() {
      const authed = await isAuthenticated();
      if (!authed) {
        router.replace('/sign-in');
        return;
      }
      const a = await getApplicationById(id);
      if (!cancelled) {
        setApp(a ?? null);
        setLoading(false);
      }
    }
    init();
    return () => { cancelled = true; };
  }, [id, router]);

  const handleMarkEINSent = useCallback(async () => {
    if (!app) return;
    await updateApplicationStatus(app.id, 'ein_sent');
    setApp({ ...app, status: 'ein_sent' });
    setSaved(true);
  }, [app]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    router.push('/sign-in');
    router.refresh();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  if (app === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Application not found.</p>
          <Link href="/admin" className="mt-4 inline-block text-[#005ea2] hover:underline">
            Back to dashboard
          </Link>
        </div>
      </div>
    );
  }

  const d = app.data;
  const roleLabels = d.entityType ? ROLE_OPTIONS[d.entityType] : null;
  const roleText =
    d.applicantRole === 'self'
      ? roleLabels?.self ?? 'Self'
      : d.applicantRole === 'third_party'
      ? roleLabels?.thirdParty ?? 'Third Party'
      : '—';
  const fullName =
    [d.firstName, d.middleName, d.lastName].filter(Boolean).join(' ') +
    (d.suffix ? `, ${getSuffixLabel(d.suffix)}` : '');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#234E76] text-white border-b border-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-slate-200 hover:text-white text-sm">
              ← Dashboard
            </Link>
            <span className="text-slate-400">|</span>
            <span className="font-serif font-bold text-lg">Application</span>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-sm text-slate-200 hover:text-white"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">
              Submitted {new Date(app.createdAt).toLocaleString()}
            </p>
            <p className="text-lg font-bold text-gray-900">
              {app.assignedEIN ? `EIN ${app.assignedEIN}` : 'No EIN assigned'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                app.status === 'ein_sent'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {app.status === 'ein_sent' ? 'EIN Sent' : 'New'}
            </span>
            {app.status === 'new' && (
              <button
                type="button"
                onClick={handleMarkEINSent}
                className="px-4 py-2 bg-[#005ea2] text-white text-sm font-medium rounded-md hover:bg-[#1a4480]"
              >
                {saved ? 'Marked as EIN sent' : 'Mark as EIN sent'}
              </button>
            )}
          </div>
        </div>

        <DetailSection title="Entity Type">
          <DetailRow label="Entity Type" value={getEntityLabel(d.entityType)} />
          {d.entityType === 'llc' && (
            <>
              <DetailRow label="Number of Members" value={d.llcMemberCount} />
              <DetailRow label="State of Organization" value={getStateLabel(d.llcState)} />
            </>
          )}
          {d.entitySubType && (
            <DetailRow
              label="Sub-Type"
              value={getSubTypeLabel(d.entityType, d.entitySubType)}
            />
          )}
          {d.entityType !== 'estate' && (
            <DetailRow
              label="Reason for Applying"
              value={getReasonLabel(d.reasonForApplying)}
            />
          )}
        </DetailSection>

        <DetailSection title="Responsible Party">
          <DetailRow label="SSN / ITIN" value={maskSSN(d.ssn)} />
          <DetailRow label="Name" value={fullName} />
          <DetailRow label="Email" value={d.email} />
          <DetailRow label="Role" value={roleText} />
          {d.applicantRole === 'third_party' && (
            <>
              <DetailRow label="Designee Name" value={d.thirdPartyDesignee.name} />
              <DetailRow label="Designee Phone" value={d.thirdPartyDesignee.phone} />
              {d.thirdPartyDesignee.fax && (
                <DetailRow label="Designee Fax" value={d.thirdPartyDesignee.fax} />
              )}
              <DetailRow
                label="Designee Address"
                value={formatAddress(d.thirdPartyDesignee.address)}
              />
            </>
          )}
        </DetailSection>

        <DetailSection title="Addresses">
          <DetailRow label="Mailing Address" value={formatAddress(d.mailingAddress)} />
          <DetailRow
            label="Physical Location"
            value={
              d.physicalSameAsMailing
                ? 'Same as mailing address'
                : formatAddress(d.physicalAddress)
            }
          />
        </DetailSection>

        <DetailSection title="Business Details">
          {d.entityType === 'estate' ? (
            <>
              <DetailRow label="Decedent SSN" value={maskSSN(d.decedentSSN)} />
              <DetailRow
                label="Decedent Name"
                value={`${d.decedentFirstName} ${d.decedentLastName}`}
              />
              <DetailRow label="Date of Death" value={d.dateOfDeath} />
              <DetailRow label="State of Residence" value={getStateLabel(d.decedentState)} />
            </>
          ) : d.entityType === 'trust' ? (
            <>
              <DetailRow label="Trust Name" value={d.trustName} />
              <DetailRow label="Date Funded" value={d.dateFunded} />
            </>
          ) : (
            <>
              <DetailRow label="Legal Name" value={d.legalName} />
              {d.tradeName && (
                <DetailRow label="Trade Name / DBA" value={d.tradeName} />
              )}
              {d.entityType === 'corporation' && (
                <DetailRow
                  label="State of Incorporation"
                  value={getStateLabel(d.stateOfIncorporation)}
                />
              )}
              {d.entityType === 'partnership' && (
                <DetailRow label="Number of Partners" value={d.numberOfPartners} />
              )}
              <DetailRow label="Start Date" value={d.startDate} />
              <DetailRow label="Closing Month" value={getMonthLabel(d.closingMonth)} />
              <DetailRow
                label="Business Activity"
                value={getActivityLabel(d.businessActivity)}
              />
              <DetailRow label="Products / Services" value={d.specificProducts} />
              <DetailRow
                label="Previous EIN"
                value={d.hasPreviousEIN ? d.previousEIN : 'No'}
              />
            </>
          )}
        </DetailSection>

        <DetailSection title="Payment">
          <DetailRow
            label="Processing"
            value={d.processingOption === 'rush' ? 'Rush' : 'Standard'}
          />
        </DetailSection>
      </main>
    </div>
  );
}
