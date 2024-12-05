'use client';

// 사이드바 컴포넌트
// 네비게이션 메뉴 항목들을 표시
// 현재 선택된 메뉴를 하이라이트하고 메뉴 클릭 이벤트를 처리
interface SidebarProps {
  activeMenu: string;
  onMenuChange: (menu: string) => void;
}

export default function Sidebar({ activeMenu, onMenuChange }: SidebarProps) {
  // 사이드바에 표시될 메뉴 항목들
  const menuItems = [
    { id: 'dashboard', label: 'Sync Dashboards' },
    { id: 'monitor', label: 'Sync Monitors' },
    { id: 'recommendation-dashboard', label: 'Recommendation Dashboards' },
    { id: 'recommendation-monitor', label: 'Recommendation Monitors' },
  ];

  return (
    <div className="w-64 bg-purple-800 text-white">
      <div className="p-4 border-b border-purple-700">
        <h1 className="text-xl font-bold">Datadog Sync Tool</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full text-left px-4 py-2.5 transition-colors ${
              activeMenu === item.id 
                ? 'bg-purple-900 font-medium' 
                : 'hover:bg-purple-700'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
} 