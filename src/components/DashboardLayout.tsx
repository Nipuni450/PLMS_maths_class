import { ReactNode, useState } from "react";
import Logo from "./Logo";
import { Avatar } from "./ui";

interface NavItem {
  icon: string;
  label: string;
  page: string;
}

interface DashboardLayoutProps {
  children: ReactNode;
  navItems: NavItem[];
  currentPage: string;
  onNavigate: (page: string) => void;
  userName: string;
  userRole: string;
  pageTitle: string;
}

export default function DashboardLayout({
  children, navItems, currentPage, onNavigate, userName, userRole, pageTitle,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full bg-[#F0F4FF]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full z-30 w-64 bg-[#0D1B5E] flex flex-col transition-transform duration-300
        lg:static lg:translate-x-0 lg:z-auto
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Logo area */}
        <div className="px-5 py-5 border-b border-white/10 flex-shrink-0">
          <Logo size="sm" variant="light" />
        </div>

        {/* User card */}
        <div className="px-4 py-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <Avatar name={userName} size="sm" />
            <div className="overflow-hidden">
              <p className="text-white text-sm font-semibold truncate">{userName}</p>
              <p className="text-blue-300 text-xs">{userRole}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 sidebar-scroll py-3 px-3">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => { onNavigate(item.page); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-0.5 transition-all cursor-pointer
                ${currentPage === item.page
                  ? "bg-[#1565C0] text-white shadow-md"
                  : "text-[#CBD5F0] hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10 flex-shrink-0">
          <button
            onClick={() => onNavigate("landing")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-all cursor-pointer"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-[#D1DAEA] px-6 py-3 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={() => setSidebarOpen(true)}>
              ☰
            </button>
            <h2 className="text-lg font-bold text-[#0D1B5E]">{pageTitle}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative text-slate-500 hover:text-[#1565C0] transition-colors p-1">
              <span className="text-xl">🔔</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2">
              <Avatar name={userName} size="sm" />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-700">{userName}</p>
                <p className="text-xs text-slate-400">{userRole}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
