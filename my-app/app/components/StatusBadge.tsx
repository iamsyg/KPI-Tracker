"use client";

import React from "react";

export default function StatusBadge({ status }: { status: 'on-track' | 'delayed' | 'at-risk' }) {
    const statusClasses = {
      'on-track': 'bg-green-100 text-green-800',
      'delayed': 'bg-yellow-100 text-yellow-800',
      'at-risk': 'bg-red-100 text-red-800'
    };
    
    const statusText = {
      'on-track': 'On Track',
      'delayed': 'Delayed',
      'at-risk': 'At Risk'
    };
  
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {statusText[status]}
      </span>
    );
  }