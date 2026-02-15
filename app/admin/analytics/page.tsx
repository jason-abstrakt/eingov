'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, signOut } from '@/lib/auth';
import DateRangeFilter from '@/components/admin/analytics/DateRangeFilter';
import FunnelTab from '@/components/admin/analytics/FunnelTab';
import AnswerAnalyticsTab from '@/components/admin/analytics/AnswerAnalyticsTab';
import ROITab from '@/components/admin/analytics/ROITab';
import { BarChart3, PieChart, DollarSign, ArrowLeft } from 'lucide-react';

type Tab = 'funnel' | 'answers' | 'roi';

const TABS: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'funnel', label: 'Funnel', icon: BarChart3 },
  { id: 'answers', label: 'Answer Analytics', icon: PieChart },
  { id: 'roi', label: 'ROI', icon: DollarSign },
];

export default function AnalyticsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('funnel');
  const [dateRange, setDateRange] = useState('30d');

  useEffect(() => {
    async function init() {
      const authed = await isAuthenticated();
      if (!authed) {
        router.replace('/sign-in');
        return;
      }
      setLoading(false);
    }
    init();
  }, [router]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    router.push('/sign-in');
    router.refresh();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const showDateFilter = activeTab === 'funnel' || activeTab === 'roi';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#234E76] text-white border-b border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-serif font-bold text-xl">EIN Gov</Link>
            <span className="text-slate-300 text-sm">Analytics</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-sm text-slate-200 hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Dashboard
            </Link>
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

      <div className="flex min-h-[calc(100vh-65px)]">
        {/* Left Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 flex-shrink-0">
          <nav className="py-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-100 text-[#234E76] border-l-4 border-[#234E76]'
                      : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Date Range Filter */}
          {showDateFilter && (
            <div className="mb-6">
              <DateRangeFilter value={dateRange} onChange={setDateRange} />
            </div>
          )}

          {/* Tab Content */}
          {activeTab === 'funnel' && <FunnelTab dateRange={dateRange} />}
          {activeTab === 'answers' && <AnswerAnalyticsTab />}
          {activeTab === 'roi' && <ROITab dateRange={dateRange} />}
        </main>
      </div>
    </div>
  );
}
