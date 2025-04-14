"use client";

import React from 'react';
import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const DEFAULT_COLORS = [
  '#4f46e5', // Indigo
  '#10b981', // Emerald
  '#f59e0b', // Amber
];

export function BarChart({
  data,
  xField,
  yField,
  seriesField,
  colors = DEFAULT_COLORS,
  height = 300,
}: {
  data: any[];
  xField: string;
  yField: string;
  seriesField: string;
  colors?: string[];
  height?: number;
}) {
  const seriesValues = Array.from(new Set(data.map(d => d[seriesField])));

  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
          <XAxis dataKey={xField}/>
          <YAxis />
          <Tooltip />
          <Legend />
          {seriesValues.map((series, idx) => (
            <Bar
              key={series}
              dataKey={yField}
              name={series}
              fill={colors[idx % colors.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LineChart({
  data,
  xField,
  yField,
  seriesField,
  colors = DEFAULT_COLORS,
  height = 300,
}: {
  data: any[];
  xField: string;
  yField: string;
  seriesField: string;
  colors?: string[];
  height?: number;
}) {
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey={xField} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={yField}
            name={seriesField}
            stroke={colors[0]}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}