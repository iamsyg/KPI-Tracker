"use client";

import { FiDownload } from 'react-icons/fi';
import { KpiData } from '@/Types';
import StatusBadge from './StatusBadge';

export default function RecentKPIs({ kpis }: { kpis: KpiData[] }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">Recent KPIs</h2>
        <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
          <FiDownload /> Export
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left font-bold text-xs text-gray-600 uppercase">District</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-gray-600 uppercase">Metric</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-gray-600 uppercase">Value</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-gray-600 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {kpis.slice(0, 5).map(kpi => (
              <tr key={kpi.id}>
                <td className="px-3 py-2 whitespace-nowrap text-gray-600 text-sm">{kpi.district}</td>
                <td className="px-3 py-2 whitespace-nowrap text-gray-600 text-sm">{kpi.metric}</td>
                <td className="px-3 py-2 whitespace-nowrap text-gray-600 text-sm font-mono">{kpi.value}%</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <StatusBadge status={kpi.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}