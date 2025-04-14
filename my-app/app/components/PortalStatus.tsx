"use client";

import React from "react";
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { PortalStatus as PortalStatusType } from "@/Types";

export default function PortalStatus({ portals }: { portals: PortalStatusType[] }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">Portal Status</h2>
        <span className="text-sm text-gray-600">
          {new Date().toLocaleDateString()}
        </span>
      </div>
      <div className="space-y-3">
        {portals.map(portal => (
          <div key={portal.id} className={`p-3 rounded-lg border-l-4 text-black ${
            portal.status === 'success' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
          }`}>
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{portal.name}</h3>
              {portal.status === 'success' ? (
                <span className="text-green-500">
                    <FiCheckCircle  />
                </span>
                
              ) : (
                <span className="text-red-500">
                    <FiAlertCircle  />
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Last scraped: {new Date(portal.last_scraped).toLocaleString()}
            </p>
            {portal.error && (
              <p className="text-sm text-red-600 mt-1">Error: {portal.error}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}