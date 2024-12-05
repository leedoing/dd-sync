'use client';

import { useState } from 'react';

export default function MonitorSync() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSync = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/sync/monitor');
      const data = await response.json();
      console.log('Monitor sync completed:', data);
    } catch (error) {
      console.error('Monitor sync failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Monitor Synchronization</h2>
      <button
        onClick={handleSync}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Syncing...' : 'Sync Monitors'}
      </button>
    </div>
  );
} 