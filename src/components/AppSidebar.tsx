import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Calendar,
  UserCog,
  Users,
  Building2,
  FileUser,
  ChevronRight,
  Plus,
  Settings,
  LogOut,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import adminAvatar from "@/assets/admin-avatar.png";
import { NavLink, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
    hasSubmenu: false
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
    hasSubmenu: false
  },
  {
    title: "Appointments",
    icon: Calendar,
    href: "/admin/appointments",
    hasSubmenu: false
  },
  {
    title: "Doctor Management",
    icon: UserCog,
    href: "/admin/doctors/list",
    hasSubmenu: false
  },
  {
    title: "Staff Management",
    icon: Users,
    href: "/admin/staff/list",
    hasSubmenu: false
  },
  {
    title: "Room Management",
    icon: Building2,
    href: "/admin/rooms/list",
    hasSubmenu: false
  },
  {
    title: "Patient Details",
    icon: FileUser,
    href: "/admin/patients",
    hasSubmenu: false
  },
  {
    title: "User Management",
    icon: User,
    href: "/admin/user-management",
    hasSubmenu: false
  },
];

interface AppSidebarProps {
  isCollapsed: boolean;
  onToggleSidebar: () => void;
}

export function AppSidebar({ isCollapsed, onToggleSidebar }: AppSidebarProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen bg-sidebar backdrop-blur-xl border-r border-white/10 sidebar-slide-in z-50 flex flex-col"
      initial={{ width: isCollapsed ? 80 : 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Header Section */}
      <div className="border-b border-white/10 px-4 py-4 flex-shrink-0">
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  className="text-sidebar-foreground font-semibold text-lg"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  MediAdmin
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="text-sidebar-foreground hover:bg-sidebar-hover"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} />
          </Button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Navigation Menu */}
        <nav className="py-6 px-3">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                      isActive
                        ? "bg-blue-500 text-white shadow-lg"
                        : "text-sidebar-foreground hover:bg-sidebar-hover hover:text-white"
                    }`
                  }
                >
                  <div className="relative z-10">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        className="font-medium relative z-10"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                      >
                        {item.title}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-20"
                      layoutId="sidebar-highlight"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Footer with Profile and Admin Options */}
        <div className="p-4 border-t border-white/10 space-y-2">
          {/* Administrator Profile */}
          <motion.div
            className={`flex items-center gap-3 px-3 py-3 rounded-xl bg-sidebar-hover/50 ${isCollapsed ? 'justify-center' : ''}`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={adminAvatar}
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
            />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  className="text-left flex-1"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                >
                  <p className="font-medium text-sm text-sidebar-foreground">Dr. Sarah Wilson</p>
                  <p className="text-xs text-sidebar-foreground/60">Administrator</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Admin Settings */}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1"
              >
                <NavLink
                  to="/admin/admin-settings"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-sidebar-foreground/80 hover:bg-gray-500/20 hover:text-white"
                    }`
                  }
                >
                  <Settings className="w-4 h-4" />
                  <span>Admin Settings</span>
                </NavLink>
                
                <NavLink
                  to="/admin/logout"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 text-sidebar-foreground/80 hover:bg-gray-500/20 hover:text-white"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className="text-center text-sidebar-foreground/60 text-xs pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                © 2024 MediAdmin
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}