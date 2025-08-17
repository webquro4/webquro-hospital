import { TabType } from "@/pages/Profile";
import { 
  User, 
  FileText, 
  Calendar, 
  Pill, 
  CreditCard, 
  Files, 
  MessageSquare,
  Activity,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const sidebarItems = [
  { id: 'overview' as TabType, label: 'Overview', icon: User },
  { id: 'medical-history' as TabType, label: 'Medical History', icon: FileText },
  { id: 'appointments' as TabType, label: 'Appointments', icon: Calendar },
  { id: 'prescriptions' as TabType, label: 'Prescriptions', icon: Pill },
  { id: 'billing' as TabType, label: 'Billing', icon: CreditCard },
  { id: 'documents' as TabType, label: 'Documents', icon: Files },
  { id: 'messages' as TabType, label: 'Messages', icon: MessageSquare },
  { id: 'settings' as TabType, label: 'Settings', icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-card border-r border-border shadow-medium z-10">
      {/* Hospital Logo/Header */}
      <div className="p-16 border-b border-border">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-lg font-semibold text-foreground"></h1>
            <p className="text-sm text-muted-foreground"></p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-card" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-transform group-hover:scale-110",
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                )} />
                <span className={cn(
                  "font-medium",
                  isActive ? "text-primary-foreground" : ""
                )}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Patient Quick Info */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-accent/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">ID: P-2024-001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};