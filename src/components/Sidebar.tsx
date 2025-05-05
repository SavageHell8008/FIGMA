import React from 'react';
import { 
  Home, 
  GraduationCap, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <button 
        onClick={toggleSidebar} 
        className="fixed z-50 bottom-4 right-4 p-2 rounded-full bg-primary-600 text-white shadow-lg md:hidden hover:bg-primary-700 transition-all duration-300 hover:scale-105"
      >
        {collapsed ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div 
        className={`${
          collapsed ? '-translate-x-full' : 'translate-x-0'
        } fixed inset-y-0 left-0 z-40 w-64 bg-[#2E3A59]/95 backdrop-blur-md text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-center p-4">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h1 className="ml-3 text-xl font-bold">EduDash</h1>
          </div>

          <nav className="mt-8 flex flex-col gap-2 px-2">
            <NavItem icon={<Home size={20} />} label="Dashboard" active href="/dashboard" />
            <NavItem icon={<GraduationCap size={20} />} label="Courses" href="/courses" />
            <NavItem icon={<Users size={20} />} label="Students" href="/students" />
            <NavItem icon={<BarChart3 size={20} />} label="Reports" href="/reports" />
            <NavItem icon={<MessageSquare size={20} />} label="Messages" href="/messages" />
            <NavItem icon={<Settings size={20} />} label="Settings" href="/settings" />
          </nav>

          <div className="mt-auto p-4">
            <div className="flex items-center rounded-lg bg-[#2E3A59]/50 backdrop-blur-sm p-3 hover:bg-[#2E3A59]/70 transition-all duration-300">
              <div className="h-10 w-10 rounded-full bg-[#2E3A59] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Profile" 
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Abhishek</p>
                <p className="text-xs text-gray-300">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
}

const NavItem = ({ icon, label, active = false, href }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#2E3A59]/70 hover:scale-105 ${
        active ? 'bg-[#2E3A59]/70 scale-105' : ''
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </a>
  );
};

export default Sidebar;