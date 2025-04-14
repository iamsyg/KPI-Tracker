"use client";

import React from "react";
import {FiRefreshCw} from "react-icons/fi";

type Props = {
  title: string;
  description: string;
  timeRange: '7d' | '30d' | '90d';
  onTimeRangeChange: (range: '7d' | '30d' | '90d') => void;
};

export default function DashboardHeader({ title, description, timeRange, onTimeRangeChange }: Props) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2">
        <p className="text-gray-600">{description}</p>
        <div className="flex gap-2">
          <select
            className="border rounded px-3 py-1 text-sm bg-white text-gray-600"
            value={timeRange}
            onChange={(e) => onTimeRangeChange(e.target.value as any)}
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            <span className="animate-spin"> <FiRefreshCw  /> </span>
             Refresh
          </button>
        </div>
      </div>
    </header>
  );
}