/* eslint-disable @next/next/no-img-element */
'use client';

interface SidebarProps {
  activeMenu: string;
  onMenuChange: (menu: string) => void;
  resetMenu: () => void;
}

export default function Sidebar({ activeMenu, onMenuChange, resetMenu }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboards Sync' },
    { id: 'monitor', label: 'Monitors Sync' },
    { id: 'recommendation-dashboard', label: 'Recommended Dashboards' },
    { id: 'recommendation-monitor', label: 'Recommended Monitors' },
  ];

  return (
    <div className="w-64 bg-[#633C95] text-white min-h-[calc(100vh-4rem)]">  {/* w-72에서 w-64로 변경 */}
      <div className="px-5 py-6">
        <button 
          onClick={resetMenu}
          className="w-full flex justify-center items-center hover:opacity-90 transition-opacity"
        >
          <img 
            src="/main.png"
            alt="Datadog Sync Tool Logo" 
            className="h-36 w-auto"
          />
        </button>
      </div>
      <nav className="pt-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full text-left px-6 py-3.5 transition-all text-xl font-medium  
              ${activeMenu === item.id 
                ? 'bg-[#4F3076] text-white shadow-lg' 
                : 'text-purple-100 hover:bg-[#573585] hover:text-white'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}