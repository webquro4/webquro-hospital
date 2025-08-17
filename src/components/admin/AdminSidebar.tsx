import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Calendar, 
  UserCheck, 
  Users, 
  Bed, 
  UserRound,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Stethoscope
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
  },
  {
    title: "Payments",
    icon: CreditCard,
    path: "/admin/payments",
  },
  {
    title: "Appointment Management",
    icon: Calendar,
    path: "/admin/appointments",
  },
  {
    title: "Doctor Management",
    icon: UserCheck,
    path: "/admin/doctors",
    subItems: [
      { title: "Add Doctor", path: "/admin/doctors/add" },
      { title: "List Doctors", path: "/admin/doctors/list" },
      { title: "Doctor Details", path: "/admin/doctors/details" },
      { title: "Disable Doctor Listing", path: "/admin/doctors/disable" },
    ],
  },
  {
    title: "Staff Management",
    icon: Users,
    path: "/admin/staff",
    subItems: [
      { title: "Add Staff", path: "/admin/staff/add" },
      { title: "List Staff", path: "/admin/staff/list" },
      { title: "Staff Details", path: "/admin/staff/details" },
      { title: "Disable Staff", path: "/admin/staff/disable" },
    ],
  },
  {
    title: "Room Management",
    icon: Bed,
    path: "/admin/rooms",
    subItems: [
      { title: "Add Room", path: "/admin/rooms/add" },
      { title: "List Rooms", path: "/admin/rooms/list" },
      { title: "Room Details", path: "/admin/rooms/details" },
      { title: "Disable Room", path: "/admin/rooms/disable" },
    ],
  },
  {
    title: "Patient Details",
    icon: UserRound,
    path: "/admin/patients",
  },
];

export function AdminSidebar() {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (basePath: string) => location.pathname.startsWith(basePath);

  return (
    <aside className="w-80 h-full relative overflow-hidden">
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary-glow/10"></div>
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 glass border-r border-border/50"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="p-8 border-b border-border/30">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Admin Portal
              </h1>
              <p className="text-sm text-muted-foreground">Webquro Hospital</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.title} className="space-y-1">
              <div
                className={cn(
                  "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden",
                  isGroupActive(item.path)
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg"
                    : "hover:bg-accent/10 hover:shadow-md text-foreground"
                )}
                onClick={() => {
                  if (item.subItems) {
                    toggleExpanded(item.title);
                  }
                }}
              >
                {/* Gradient overlay for active state */}
                {isGroupActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl" />
                )}
                
                <NavLink
                  to={item.path}
                  className="flex items-center gap-3 flex-1 relative z-10"
                  onClick={(e) => item.subItems && e.preventDefault()}
                >
                  <div className={cn(
                    "p-2 rounded-lg transition-all duration-300",
                    isGroupActive(item.path) 
                      ? "bg-white/20" 
                      : "bg-accent/20 group-hover:bg-accent/30"
                  )}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                </NavLink>
                
                {item.subItems && (
                  <div className="relative z-10 transition-transform duration-300">
                    {expandedItems.includes(item.title) || isGroupActive(item.path) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                )}
              </div>

              {/* Sub-items */}
              {item.subItems && (expandedItems.includes(item.title) || isGroupActive(item.path)) && (
                <div className="ml-6 space-y-1 animate-fade-in">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={cn(
                        "block px-4 py-2.5 text-sm rounded-lg transition-all duration-300 hover:translate-x-1",
                        isActive(subItem.path)
                          ? "bg-primary/15 text-primary font-medium border-l-2 border-primary"
                          : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                      )}
                    >
                      {subItem.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-border/30">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
              AD
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">webquro4@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}