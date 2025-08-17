import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, Clock } from "lucide-react";

const appointments = [
  {
    id: 1,
    patientName: "Emily Johnson",
    patientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b2e1a3c2?w=150&h=150&fit=crop&crop=face",
    doctorName: "Dr. Michael Chen",
    doctorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    department: "Cardiology",
    time: "09:00 AM",
    date: "Today",
    status: "Completed",
    priority: "Normal"
  },
  {
    id: 2,
    patientName: "Robert Davis",
    patientAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    doctorName: "Dr. Sarah Wilson",
    doctorAvatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    department: "Neurology",
    time: "10:30 AM",
    date: "Today",
    status: "Pending",
    priority: "High"
  },
  {
    id: 3,
    patientName: "Maria Garcia",
    patientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    doctorName: "Dr. James Kumar",
    doctorAvatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    department: "Pediatrics",
    time: "02:15 PM",
    date: "Today",
    status: "In Progress",
    priority: "Normal"
  },
  {
    id: 4,
    patientName: "John Smith",
    patientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    doctorName: "Dr. Lisa Thompson",
    doctorAvatar: "https://images.unsplash.com/photo-1594824411935-1a7df5b5daed?w=150&h=150&fit=crop&crop=face",
    department: "Orthopedics",
    time: "03:45 PM",
    date: "Today",
    status: "Cancelled",
    priority: "Low"
  },
  {
    id: 5,
    patientName: "Anna Wilson",
    patientAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    doctorName: "Dr. David Park",
    doctorAvatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=150&h=150&fit=crop&crop=face",
    department: "Dermatology",
    time: "04:00 PM",
    date: "Tomorrow",
    status: "Scheduled",
    priority: "Normal"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Pending":
      return "warning";
    case "In Progress":
      return "primary";
    case "Cancelled":
      return "destructive";
    case "Scheduled":
      return "secondary";
    default:
      return "secondary";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "destructive";
    case "Normal":
      return "primary";
    case "Low":
      return "secondary";
    default:
      return "secondary";
  }
};

export function AppointmentsTable() {
  return (
    <motion.div
      className="glass-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Appointments</h3>
        <Button variant="outline" size="sm" className="gap-2">
          <Calendar className="w-4 h-4" />
          View All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Patient</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Doctor</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Department</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Time</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Priority</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <motion.tr
                key={appointment.id}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={appointment.patientAvatar} alt={appointment.patientName} />
                      <AvatarFallback>{appointment.patientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{appointment.patientName}</p>
                      <p className="text-sm text-muted-foreground">Patient ID: #{appointment.id.toString().padStart(4, '0')}</p>
                    </div>
                  </div>
                </td>
                
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={appointment.doctorAvatar} alt={appointment.doctorName} />
                      <AvatarFallback>{appointment.doctorName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <p className="font-medium text-foreground">{appointment.doctorName}</p>
                  </div>
                </td>
                
                <td className="py-4 px-2">
                  <p className="text-foreground">{appointment.department}</p>
                </td>
                
                <td className="py-4 px-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">{appointment.time}</p>
                      <p className="text-sm text-muted-foreground">{appointment.date}</p>
                    </div>
                  </div>
                </td>
                
                <td className="py-4 px-2">
                  <Badge variant={getStatusColor(appointment.status) as any}>
                    {appointment.status}
                  </Badge>
                </td>
                
                <td className="py-4 px-2">
                  <Badge variant={getPriorityColor(appointment.priority) as any}>
                    {appointment.priority}
                  </Badge>
                </td>
                
                <td className="py-4 px-2">
                  <Button variant="ghost" size="sm" className="gap-2 hover-glow">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}