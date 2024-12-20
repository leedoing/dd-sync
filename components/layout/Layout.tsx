'use client';

import { ReactNode } from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import DashboardSync from '../sync/dashboard/DashboardSync';
import MonitorSync from '../sync/monitor/MonitorSync';
import RecommendationDashboards from '../recommendations/dashboard/RecommendationDashboards';
import RecommendationMonitors from '../recommendations/monitor/RecommendationMonitors';
import MainDashboard from '../home/MainDashboard';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [activeMenu, setActiveMenu] = useState('');

  const resetMenu = () => {
    setActiveMenu('');
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return children || <DashboardSync />;
      case 'monitor':
        return <MonitorSync />;
      case 'recommendation-dashboard':
        return <RecommendationDashboards />;
      case 'recommendation-monitor':
        return <RecommendationMonitors />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-[1296px] mx-auto">
      <Header resetMenu={resetMenu} />
      <div className="flex flex-1">
        <Sidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          resetMenu={resetMenu} 
        />
        <main className="flex-1 p-6">
          <div className="max-w-[1350px] mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout; 