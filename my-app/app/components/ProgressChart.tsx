"use client";

import React from "react";

import { BarChart } from './Charts';
import { KpiData } from "@/Types";

export default function ProgressChart({ kpis }: { kpis: KpiData[] }) {
  const progressData = kpis.map(kpi => ({
    district: kpi.district,
    value: kpi.value,
    target: kpi.target,
    metric: kpi.metric
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-black">District Progress vs Targets</h2>
      <BarChart
        data={progressData}
        xField="district"
        yField="value"
        seriesField="metric"
        colors={['#4f46e5', '#10b981']}
      />
    </div>
  );
}