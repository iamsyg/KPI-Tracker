"use client";

import { useState } from 'react';

import DashboardHeader from '../components/DashboardHeader';
import { KpiData, PortalStatus as PortalStatusType } from '@/Types';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  const kpis: KpiData[] = [
    { id: 1, district: 'Varanasi', metric: 'Electrification', value: 92, target: 95, last_updated: new Date().toISOString(), status: 'on-track' },
    { id: 2, district: 'Prayagraj', metric: 'Electrification', value: 85, target: 90, last_updated: new Date().toISOString(), status: 'delayed' },
  ];

  const portals: PortalStatusType[] = [
    { id: 1, name: 'UP Rural Portal', last_scraped: new Date().toISOString(), status: 'success' },
    { id: 2, name: 'Bihar KPI Dashboard', last_scraped: new Date(Date.now() - 86400000).toISOString(), status: 'failed', error: 'CAPTCHA failed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <DashboardHeader 
        title="Rural Development KPI Dashboard"
        description="Automated tracking across government portals"
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
      />
    </div>
  );
}