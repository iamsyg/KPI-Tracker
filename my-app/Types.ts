export type KpiData = {
    id: number;
    district: string;
    metric: string;
    value: number;
    target: number;
    last_updated: string;
    status: 'on-track' | 'delayed' | 'at-risk';
  };
  
  export type PortalStatus = {
    id: number;
    name: string;
    last_scraped: string;
    status: 'success' | 'failed';
    error?: string;
  };