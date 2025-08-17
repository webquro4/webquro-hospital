import { 
  UserCheck, 
  UserRound, 
  Bed, 
  Calendar,
  TrendingUp,
  Activity,
  Bell,
  Settings
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Total Doctors",
    value: "24",
    change: "+2 from last month",
    icon: UserCheck,
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100"
  },
  {
    title: "Active Patients", 
    value: "342",
    change: "+15 from yesterday",
    icon: UserRound,
    color: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100"
  },
  {
    title: "Available Rooms",
    value: "18",
    change: "68 occupied",
    icon: Bed,
    color: "from-purple-500 to-purple-600", 
    bgGradient: "from-purple-50 to-purple-100"
  },
  {
    title: "Today's Appointments",
    value: "28",
    change: "12 completed",
    icon: Calendar,
    color: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100"
  }
];

const recentActivities = [
  {
    time: "10:30 AM",
    activity: "New patient registration",
    user: "Dr. Sarah Johnson", 
    status: "Completed",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    time: "10:15 AM",
    activity: "Room 204 discharged",
    user: "Nurse Emily",
    status: "Processed", 
    statusColor: "bg-blue-100 text-blue-800"
  },
  {
    time: "09:45 AM",
    activity: "Emergency admission",
    user: "Dr. Michael Chen",
    status: "Urgent",
    statusColor: "bg-red-100 text-red-800"
  },
  {
    time: "09:30 AM",
    activity: "Surgery scheduled",
    user: "Dr. Amanda Wilson",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-800"
  }
];

export function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Welcome back, Admin!</h1>
            <p className="text-xl text-primary-foreground/90">
              Here's what's happening at Webquro Hospital today
            </p>
            <p className="text-primary-foreground/80">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="Admin Avatar" 
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="text-right">
                <p className="font-medium">Admin User</p>
                <p className="text-sm text-primary-foreground/80">System Administrator</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="group hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-50`}></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors border border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{activity.activity}</p>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.user}</p>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${activity.statusColor}`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-accent transition-all duration-300">
              <UserCheck className="h-4 w-4" />
              Add New Doctor
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-accent/10">
              <Calendar className="h-4 w-4" />
              Schedule Appointment
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-accent/10">
              <Bed className="h-4 w-4" />
              Manage Rooms
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-accent/10">
              <UserRound className="h-4 w-4" />
              Patient Records
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}