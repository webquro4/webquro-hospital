import { Bell, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const PatientHeader = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Patient Profile</h1>
          <p className="text-muted-foreground">
            View and manage patient records, history, and activities
          </p>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search patient records..."
              className="pl-10 w-64 bg-background"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>

          {/* Doctor Info */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">
              DR
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Dr. Michael Chen</p>
              <p className="text-xs text-muted-foreground">Cardiologist</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};