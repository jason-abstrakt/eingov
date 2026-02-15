'use client';

import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

interface RevenueData {
  totalRevenue: number;
  totalOrders: number;
  funnelStarts: number;
  revenuePerLanding: number;
  averageOrderValue: number;
  conversionRate: number;
  rushCount: number;
  standardCount: number;
  rushRevenue: number;
  standardRevenue: number;
  timeSeries: { date: string; orders: number; revenue: number }[];
}

interface ROITabProps {
  dateRange: string;
}

function KPICard({ label, value, subtext }: { label: string; value: string; subtext?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
    </div>
  );
}

export default function ROITab({ dateRange }: ROITabProps) {
  const [data, setData] = useState<RevenueData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics/revenue?range=${dateRange}`)
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [dateRange]);

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Loading revenue data...</div>;
  }

  if (!data) {
    return <div className="py-12 text-center text-gray-500">Failed to load data.</div>;
  }

  const splitData = [
    { name: 'Standard ($279)', value: data.standardCount, revenue: data.standardRevenue },
    { name: 'Rush ($319)', value: data.rushCount, revenue: data.rushRevenue },
  ];

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Revenue & ROI</h3>
      <p className="text-sm text-gray-500 -mt-4">Revenue metrics based on known data only (no cost assumptions)</p>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <KPICard
          label="Total Revenue"
          value={`$${data.totalRevenue.toLocaleString()}`}
          subtext={`${data.totalOrders} orders`}
        />
        <KPICard
          label="Revenue per Landing"
          value={`$${data.revenuePerLanding.toFixed(2)}`}
          subtext={`${data.funnelStarts.toLocaleString()} landings`}
        />
        <KPICard
          label="Avg Order Value"
          value={`$${data.averageOrderValue.toFixed(2)}`}
        />
        <KPICard
          label="Conversion Rate"
          value={`${data.conversionRate.toFixed(1)}%`}
          subtext="Landings to purchase"
        />
        <KPICard
          label="Rush Orders"
          value={data.rushCount.toLocaleString()}
          subtext={`$${data.rushRevenue.toLocaleString()} revenue`}
        />
        <KPICard
          label="Standard Orders"
          value={data.standardCount.toLocaleString()}
          subtext={`$${data.standardRevenue.toLocaleString()} revenue`}
        />
      </div>

      {/* Revenue Over Time + Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Revenue Over Time</h4>
          {data.timeSeries.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-12">No data yet</p>
          ) : (
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.timeSeries} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#6b7280' }}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                    labelFormatter={(label) => formatDate(String(label))}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#234E76"
                    strokeWidth={2}
                    dot={{ r: 3, fill: '#234E76' }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Rush vs Standard Pie */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">Rush vs Standard</h4>
          {data.totalOrders === 0 ? (
            <p className="text-sm text-gray-400 text-center py-12">No data yet</p>
          ) : (
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={splitData}
                    cx="50%"
                    cy="45%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    <Cell fill="#3B84C7" />
                    <Cell fill="#F97316" />
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => {
                      const v = Number(value);
                      const item = splitData.find(d => d.name === name);
                      return [`${v} orders ($${item?.revenue.toLocaleString() || 0})`, String(name)];
                    }}
                  />
                  <Legend
                    formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
