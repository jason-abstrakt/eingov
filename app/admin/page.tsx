'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  getApplications,
  updateApplicationStatus,
  type StoredApplication,
  type ApplicationStatus,
} from '@/lib/applications';
import { isAuthenticated, signOut } from '@/lib/auth';
import { ENTITY_DISPLAY_NAMES } from '@/lib/constants';
import type { PrimaryEntityType } from '@/lib/types';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getEntityDisplayName(type: string | null): string {
  if (!type) return '—';
  return ENTITY_DISPLAY_NAMES[type] ?? type;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [applications, setApplications] = useState<StoredApplication[]>([]);
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [entityFilter, setEntityFilter] = useState<string>('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/sign-in');
      return;
    }
    setApplications(getApplications());
  }, [router]);

  const entityTypes = useMemo(() => {
    const set = new Set(
      applications
        .map((a) => a.data.entityType)
        .filter((t): t is PrimaryEntityType => t != null)
    );
    return Array.from(set).sort();
  }, [applications]);

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      if (statusFilter !== 'all' && app.status !== statusFilter) return false;
      if (entityFilter !== 'all' && app.data.entityType !== entityFilter) return false;
      const created = new Date(app.createdAt).getTime();
      if (dateFrom && created < new Date(dateFrom).getTime()) return false;
      if (dateTo) {
        const toEnd = new Date(dateTo);
        toEnd.setHours(23, 59, 59, 999);
        if (created > toEnd.getTime()) return false;
      }
      return true;
    });
  }, [applications, statusFilter, entityFilter, dateFrom, dateTo]);

  const handleSignOut = () => {
    signOut();
    router.push('/sign-in');
    router.refresh();
  };

  if (applications.length === 0 && !isAuthenticated()) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#234E76] text-white border-b border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-serif font-bold text-xl">EIN Gov</Link>
            <span className="text-slate-300 text-sm">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-slate-200 hover:text-white">Home</Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="text-sm text-slate-200 hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Applications</h1>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Filters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as ApplicationStatus | 'all')}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="ein_sent">EIN Sent</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Entity Type</label>
              <select
                value={entityFilter}
                onChange={(e) => setEntityFilter(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="all">All</option>
                {entityTypes.map((t) => (
                  <option key={t} value={t}>
                    {getEntityDisplayName(t)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">From date</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">To date</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Legal Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Entity Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">EIN</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                      No applications match your filters.
                    </td>
                  </tr>
                ) : (
                  filtered.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                        {formatDate(app.createdAt)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {app.data.entityType === 'estate'
                          ? `${app.data.decedentFirstName} ${app.data.decedentLastName} (Estate)`
                          : app.data.entityType === 'trust'
                          ? app.data.trustName || '—'
                          : app.data.legalName || '—'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {getEntityDisplayName(app.data.entityType)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{app.data.email}</td>
                      <td className="px-4 py-3 text-sm font-mono text-gray-700">
                        {app.assignedEIN ?? '—'}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                            app.status === 'ein_sent'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {app.status === 'ein_sent' ? 'EIN Sent' : 'New'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/${app.id}`}
                          className="text-[#005ea2] hover:underline text-sm font-medium"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
