"use client";

import React from "react";
import { KpiData, PortalStatus } from "@/Types";

function StatCard({ title, value, change }: { title: string; value: any; change: string }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
        <h3 className=" text-black text-sm font-medium">{title}</h3>
        <p className="text-2xl text-gray-600  font-bold my-2">{value}</p>
        <p className="text-sm text-gray-600">{change}</p>
      </div>
    );
}
export default function StatsOverview({ portals, kpis }: { portals: PortalStatus[]; kpis: KpiData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Portals Tracked" 
        value={portals.length} 
        change="+2 this month" 
      />
      <StatCard 
        title="Success Rate" 
        value={`${Math.round((portals.filter(p => p.status === 'success').length / Math.max(1, portals.length) * 100))}%`} 
        change="±0% from yesterday" 
      />
      <StatCard 
        title="On-Track KPIs" 
        value={kpis.filter(k => k.status === 'on-track').length} 
        change={`${kpis.length} total`} 
      />
      <StatCard 
        title="Last Updated" 
        value={new Date(kpis[0]?.last_updated || Date.now()).toLocaleTimeString()} 
        change="Next refresh: 5:00 PM" 
      />
    </div>
  );
}