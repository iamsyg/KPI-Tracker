"use client";

import { LineChart } from './Charts';
import { KpiData } from '@/Types';

export default function TrendChart({ kpis }: { kpis: KpiData[] }) {
  const trendData = kpis
    .filter(kpi => kpi.metric === 'Electrification')
    .reduce((acc, curr) => {
      const date = new Date(curr.last_updated).toLocaleDateString('en-US', { month: 'short' });
      if (!acc[date]) acc[date] = 0;
      acc[date] += curr.value;
      return acc;
    }, {} as Record<string, number>);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-black">Electrification Trend</h2>
      <LineChart
        data={Object.entries(trendData).map(([date, value]) => ({ date, value }))}
        xField="date"
        yField="value"
        seriesField="Electrification"
      />
    </div>
  );
}