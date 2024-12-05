'use client';

import { ReactNode } from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardSyncForm from './DashboardSyncForm';
import MonitorSyncForm from './MonitorSyncForm';
import RecommendationDashboards from './RecommendationDashboards';
import RecommendationMonitors from './RecommendationMonitors';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return children || <DashboardSyncForm />;
      case 'monitor':
        return <MonitorSyncForm />;
      case 'recommendation-dashboard':
        return <RecommendationDashboards />;
      case 'recommendation-monitor':
        return <RecommendationMonitors />;
      default:
        return children || <DashboardSyncForm />;
    }
  };

  return (
    <div className="flex min-h-screen bg-purple-50">
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Layout; 