import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Clock, Phone, Mail, MapPin, Edit, Briefcase } from "lucide-react";

const StaffDetails = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const staffMember = {
    name: "Alice Johnson",
    department: "Nursing",
    position: "Senior Nurse",
    experience: "8 years",
    status: "Active",
    shift: "Morning",
    phone: "+1 (555) 123-4567",
    email: "alice.johnson@hospital.com",
    address: "123 Medical Street, Health City, HC 12345",
    qualifications: "BSN, RN, Critical Care Certified",
    joinDate: "2016-03-15",
    emergencyContact: "John Johnson - +1 (555) 987-6543",
    supervisor: "Head Nurse Margaret Wilson"
  };

  const workHistory = [
    { date: "2024-01-01", shift: "Morning", hours: "8", department: "ICU", notes: "Regular shift" },
    { date: "2024-01-02", shift: "Morning", hours: "8", department: "ICU", notes: "Training new nurse" },
    { date: "2024-01-03", shift: "Morning", hours: "10", department: "Emergency", notes: "Overtime - emergency coverage" },
    { date: "2024-01-04", shift: "Morning", hours: "8", department: "ICU", notes: "Regular shift" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "On Leave": return "bg-yellow-100 text-yellow-800";
      case "Inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getShiftColor = (shift: string) => {
    switch (shift) {
      case "Morning": return "bg-blue-100 text-blue-800";
      case "Evening": return "bg-orange-100 text-orange-800";
      case "Night": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
        <main className="p-8 ml-0" style={{ marginLeft: isCollapsed ? '80px' : '280px' }}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Staff Details</h1>
                <p className="text-muted-foreground">Comprehensive staff member information</p>
              </div>
              <Button className="btn-primary">
                <Edit className="w-4 h-4 mr-2" />
                Edit Details
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="xl:col-span-1"
            >
              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{staffMember.name}</h2>
                    <p className="text-primary font-medium">{staffMember.position}</p>
                    <p className="text-muted-foreground">{staffMember.department}</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge className={getStatusColor(staffMember.status)} variant="secondary">
                        {staffMember.status}
                      </Badge>
                      <Badge className={getShiftColor(staffMember.shift)} variant="secondary">
                        {staffMember.shift} Shift
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{staffMember.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{staffMember.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{staffMember.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Joined: {staffMember.joinDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="xl:col-span-2 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-panel hover:glass-panel-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="text-2xl font-bold text-blue-500">{staffMember.experience}</p>
                      </div>
                      <Briefcase className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-panel hover:glass-panel-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Hours This Week</p>
                        <p className="text-2xl font-bold text-green-500">42</p>
                      </div>
                      <Clock className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle>Professional Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Qualifications</h3>
                    <p className="text-muted-foreground">{staffMember.qualifications}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Supervisor</h3>
                      <p className="text-muted-foreground">{staffMember.supervisor}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Emergency Contact</h3>
                      <p className="text-muted-foreground">{staffMember.emergencyContact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Recent Work History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workHistory.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                        <div>
                          <p className="font-medium text-foreground">{record.date}</p>
                          <p className="text-sm text-muted-foreground">{record.department}</p>
                        </div>
                        <div className="text-center">
                          <Badge className={getShiftColor(record.shift)} variant="secondary">
                            {record.shift}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{record.hours} hours</p>
                        </div>
                        <div className="text-right max-w-48">
                          <p className="text-sm text-muted-foreground">{record.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default StaffDetails;