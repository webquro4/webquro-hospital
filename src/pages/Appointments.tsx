import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Filter, Plus, Clock, User, Stethoscope } from "lucide-react";

const appointments = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    doctorName: "Dr. Smith",
    department: "Cardiology",
    time: "09:00 AM",
    date: "2024-01-15",
    status: "Confirmed",
    type: "Consultation",
    duration: "30 min"
  },
  {
    id: 2,
    patientName: "Michael Chen",
    doctorName: "Dr. Williams",
    department: "Orthopedics",
    time: "10:30 AM",
    date: "2024-01-15",
    status: "Pending",
    type: "Follow-up",
    duration: "20 min"
  },
  {
    id: 3,
    patientName: "Emily Davis",
    doctorName: "Dr. Brown",
    department: "Neurology",
    time: "02:00 PM",
    date: "2024-01-15",
    status: "Completed",
    type: "Emergency",
    duration: "45 min"
  },
  {
    id: 4,
    patientName: "Robert Miller",
    doctorName: "Dr. Jones",
    department: "Pediatrics",
    time: "03:30 PM",
    date: "2024-01-15",
    status: "Cancelled",
    type: "Routine Check",
    duration: "25 min"
  }
];

const Appointments = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Completed": return "bg-green-100 text-green-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background relative">
      <div className="medical-pattern" />
      <AppSidebar isCollapsed={isCollapsed} onToggleSidebar={toggleSidebar} />
      
      <motion.div
        className="transition-all duration-300"
        style={{ marginLeft: isCollapsed ? "80px" : "280px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        
        <main className="p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Appointment Management</h1>
                <p className="text-muted-foreground">Manage and track all patient appointments</p>
              </div>
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Appointment
              </Button>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date Range
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Today's Appointments", value: "24", icon: Calendar, color: "text-blue-500" },
              { title: "Pending Confirmations", value: "8", icon: Clock, color: "text-yellow-500" },
              { title: "Completed Today", value: "16", icon: User, color: "text-green-500" },
              { title: "Available Slots", value: "12", icon: Stethoscope, color: "text-purple-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="glass-panel hover:glass-panel-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Today's Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAppointments.map((appointment, index) => (
                    <motion.div
                      key={appointment.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{appointment.patientName}</h3>
                          <p className="text-sm text-muted-foreground">
                            {appointment.doctorName} • {appointment.department}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-medium text-foreground">{appointment.time}</p>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
};

export default Appointments;