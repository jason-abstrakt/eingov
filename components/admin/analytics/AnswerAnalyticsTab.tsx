'use client';

import { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis,
} from 'recharts';

interface DataPoint {
  value: string;
  count: number;
}

interface AnswerData {
  entityTypes: DataPoint[];
  reasons: DataPoint[];
  processingOptions: DataPoint[];
  states: DataPoint[];
  businessActivities: DataPoint[];
  hasEmployees: DataPoint[];
  applicantRoles: DataPoint[];
}

const PIE_COLORS = [
  '#234E76', '#3B84C7', '#5BA8E8', '#86C4F5',
  '#22C55E', '#EAB308', '#F97316', '#EF4444',
  '#8B5CF6', '#EC4899', '#14B8A6', '#64748B',
];

const LABEL_MAP: Record<string, Record<string, string>> = {
  entityTypes: {
    llc: 'LLC', sole_proprietor: 'Sole Proprietor', corporation: 'Corporation',
    partnership: 'Partnership', estate: 'Estate', trust: 'Trust', additional: 'Additional/Other',
  },
  reasons: {
    started_new_business: 'Started New Business', hired_employees: 'Hired Employees',
    banking_purposes: 'Banking Purposes', changed_organization_type: 'Changed Org Type',
    purchased_active_business: 'Purchased Business',
  },
  processingOptions: {
    standard: 'Standard ($279)', rush: 'Rush ($319)',
  },
  applicantRoles: {
    self: 'Self', third_party: 'Third Party',
  },
};

function getLabel(category: string, value: string): string {
  return LABEL_MAP[category]?.[value] || value;
}

function PieChartCard({ title, data, category }: { title: string; data: DataPoint[]; category: string }) {
  const total = data.reduce((s, d) => s + d.count, 0);
  const chartData = data.map((d) => ({
    name: getLabel(category, d.value),
    value: d.count,
    pct: total > 0 ? Math.round((d.count / total) * 100) : 0,
  }));

  if (chartData.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">{title}</h4>
        <p className="text-sm text-gray-400 text-center py-8">No data yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">{title}</h4>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => {
                const v = Number(value);
                return [`${v} (${total > 0 ? Math.round((v / total) * 100) : 0}%)`, 'Count'];
              }}
            />
            <Legend
              formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BarChartCard({ title, data, category }: { title: string; data: DataPoint[]; category: string }) {
  const chartData = data.map((d) => ({
    name: getLabel(category, d.value),
    count: d.count,
  }));

  if (chartData.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">{title}</h4>
        <p className="text-sm text-gray-400 text-center py-8">No data yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">{title}</h4>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="name"
              width={140}
              tick={{ fontSize: 11, fill: '#374151' }}
            />
            <Tooltip
              formatter={(value) => [Number(value).toLocaleString(), 'Count']}
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
            />
            <Bar dataKey="count" fill="#3B84C7" radius={[0, 4, 4, 0]} barSize={20}
              label={{ position: 'right', fontSize: 11, fill: '#374151' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function AnswerAnalyticsTab() {
  const [data, setData] = useState<AnswerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/analytics/answers')
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-gray-500">Loading answer data...</div>;
  }

  if (!data) {
    return <div className="py-12 text-center text-gray-500">Failed to load data.</div>;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Answer Analytics</h3>
      <p className="text-sm text-gray-500 -mt-4">Distribution of form responses across all completed applications</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChartCard title="Entity Type" data={data.entityTypes} category="entityTypes" />
        <PieChartCard title="Reason for Applying" data={data.reasons} category="reasons" />
        <PieChartCard title="Processing Option" data={data.processingOptions} category="processingOptions" />
        <PieChartCard title="Applicant Role" data={data.applicantRoles} category="applicantRoles" />
        <PieChartCard title="Has Employees" data={data.hasEmployees} category="hasEmployees" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <BarChartCard title="Top States" data={data.states} category="states" />
        <BarChartCard title="Business Activity" data={data.businessActivities} category="businessActivities" />
      </div>
    </div>
  );
}
