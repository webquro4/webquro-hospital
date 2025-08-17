import { useState } from "react";
import { motion } from "framer-motion";
import { 
  UserCog, 
  Users, 
  Building2, 
  Calendar,
  TrendingUp,
  Activity,
  Heart
} from "lucide-react";
import { AppSidebar } from "@/components/AppSidebar";
import { StatCard } from "@/components/StatCard";
import { DashboardCharts } from "@/components/DashboardCharts";
import { AppointmentsTable } from "@/components/AppointmentsTable";

const AdminIndex = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background medical-bg">
      <AppSidebar isCollapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <main
        className="transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? "80px" : "280px",
          width: sidebarCollapsed ? "calc(100% - 80px)" : "calc(100% - 280px)"
        }}
      >
        <div className="p-6 space-y-6">
          {/* Hero Section */}
          <motion.section
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <motion.h1
                  className="text-3xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Welcome back, Dr. Wilson! 👩‍⚕️
                </motion.h1>
                <motion.p
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentDate} • Ready to make a difference today?
                </motion.p>
              </div>
              <motion.div
                className="hidden md:flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">98.5%</p>
                  <p className="text-sm text-muted-foreground">System Health</p>
                </div>
                <Activity className="w-8 h-8 text-success heartbeat" />
              </motion.div>
            </div>
          </motion.section>

          {/* Statistics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Doctors"
              value={45}
              icon={UserCog}
              color="primary"
              trend={{ value: 12, isPositive: true }}
              delay={0}
            />
            <StatCard
              title="Active Patients"
              value={1247}
              icon={Users}
              color="success"
              trend={{ value: 8, isPositive: true }}
              delay={1}
            />
            <StatCard
              title="Available Rooms"
              value={23}
              icon={Building2}
              color="warning"
              trend={{ value: 5, isPositive: false }}
              delay={2}
            />
            <StatCard
              title="Today's Appointments"
              value={78}
              icon={Calendar}
              color="destructive"
              trend={{ value: 15, isPositive: true }}
              delay={3}
            />
          </section>

          {/* Analytics Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Analytics Overview</h2>
            </div>
            <DashboardCharts />
          </motion.section>

          {/* Recent Appointments */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-destructive heartbeat" />
              <h2 className="text-2xl font-bold text-foreground">Patient Care Dashboard</h2>
            </div>
            <AppointmentsTable />
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default AdminIndex;
