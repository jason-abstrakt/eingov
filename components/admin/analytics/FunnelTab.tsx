'use client';

import { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
} from 'recharts';

interface FunnelStep {
  step: number;
  label: string;
  count: number;
}

interface PaymentBreakdown {
  no_action: number;
  declined_then_abandoned: number;
  error_then_abandoned: number;
  after_terms_before_submit: number;
}

interface FunnelData {
  funnel: FunnelStep[];
  paymentBreakdown: PaymentBreakdown;
  successCount: number;
}

interface FunnelTabProps {
  dateRange: string;
}

const BAR_COLORS = [
  '#234E76', '#2B6091', '#3372AC', '#3B84C7',
  '#4A96D9', '#5BA8E8', '#22C55E',
];

const ABANDON_LABELS: Record<string, string> = {
  no_action: 'No action — left before attempting payment',
  declined_then_abandoned: 'Card declined then abandoned',
  error_then_abandoned: 'Payment error then abandoned',
  after_terms_before_submit: 'Agreed to terms but didn\'t submit',
  success: 'Successful payment',
};

const ABANDON_COLORS: Record<string, string> = {
  no_action: '#94a3b8',
  declined_then_abandoned: '#ef4444',
  error_then_abandoned: '#f97316',
  after_terms_before_submit: '#eab308',
  success: '#22c55e',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload, funnelStart }: any) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  const pct = funnelStart > 0 ? ((data.count / funnelStart) * 100).toFixed(1) : '0';
  const dropOff = data.prevCount > 0
    ? ((1 - data.count / data.prevCount) * 100).toFixed(1)
    : null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm">
      <p className="font-semibold text-gray-900">{data.label}</p>
      <p className="text-gray-700">{data.count.toLocaleString()} visitors</p>
      <p className="text-gray-500">{pct}% of total starts</p>
      {dropOff !== null && data.step > 1 && (
        <p className="text-red-500">{dropOff}% drop-off from previous step</p>
      )}
    </div>
  );
}

export default function FunnelTab({ dateRange }: FunnelTabProps) {
  const [data, setData] = useState<FunnelData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics/funnel?range=${dateRange}`)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [dateRange]);

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Loading funnel data...</div>;
  }

  if (!data) {
    return <div className="py-12 text-center text-gray-500">Failed to load data.</div>;
  }

  const funnelStart = data.funnel[0]?.count || 0;

  // Add prevCount for drop-off calculation
  const chartData = data.funnel.map((step, i) => {
    const pct = funnelStart > 0 ? Math.round((step.count / funnelStart) * 100) : 0;
    return {
      ...step,
      prevCount: i > 0 ? data.funnel[i - 1].count : step.count,
      pct,
      displayLabel: `${step.count.toLocaleString()} (${pct}%)`,
    };
  });

  // Payment breakdown data
  const breakdownData = [
    { key: 'no_action', label: ABANDON_LABELS.no_action, count: data.paymentBreakdown.no_action },
    { key: 'declined_then_abandoned', label: ABANDON_LABELS.declined_then_abandoned, count: data.paymentBreakdown.declined_then_abandoned },
    { key: 'error_then_abandoned', label: ABANDON_LABELS.error_then_abandoned, count: data.paymentBreakdown.error_then_abandoned },
    { key: 'after_terms_before_submit', label: ABANDON_LABELS.after_terms_before_submit, count: data.paymentBreakdown.after_terms_before_submit },
    { key: 'success', label: ABANDON_LABELS.success, count: data.successCount },
  ];

  const totalPaymentEvents = breakdownData.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="space-y-8">
      {/* Main Funnel */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Application Funnel</h3>
        <p className="text-sm text-gray-500 mb-6">
          {funnelStart.toLocaleString()} total starts
        </p>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 60, left: 0, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="label"
                width={140}
                tick={{ fontSize: 13, fill: '#374151' }}
              />
              <Tooltip
                content={<CustomTooltip funnelStart={funnelStart} />}
                cursor={{ fill: 'rgba(0,0,0,0.04)' }}
              />
              <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={28}>
                <LabelList
                  dataKey="displayLabel"
                  position="right"
                  fontSize={12}
                  fill="#374151"
                />
                {chartData.map((_, i) => (
                  <Cell key={i} fill={BAR_COLORS[i] || BAR_COLORS[0]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Step Breakdown */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Payment Step Breakdown</h3>
        <p className="text-sm text-gray-500 mb-6">
          How users on the payment step resolved
        </p>

        <div className="space-y-3">
          {breakdownData.map((item) => {
            const pct = totalPaymentEvents > 0
              ? Math.round((item.count / totalPaymentEvents) * 100)
              : 0;
            return (
              <div key={item.key} className="group">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {item.count.toLocaleString()} ({pct}%)
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: ABANDON_COLORS[item.key] || '#94a3b8',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
