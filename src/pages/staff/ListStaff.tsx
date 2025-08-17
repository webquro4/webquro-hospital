import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Users, Eye, Edit, Trash2, Plus } from "lucide-react";

const staff = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Nursing",
    position: "Senior Nurse",
    experience: "8 years",
    status: "Active",
    shift: "Morning",
    phone: "+1 (555) 123-4567"
  },
  {
    id: 2,
    name: "Robert Chen",
    department: "Laboratory",
    position: "Lab Technician",
    experience: "5 years",
    status: "Active",
    shift: "Evening",
    phone: "+1 (555) 234-5678"
  },
  {
    id: 3,
    name: "Maria Garcia",
    department: "Pharmacy",
    position: "Pharmacist",
    experience: "12 years",
    status: "On Leave",
    shift: "Morning",
    phone: "+1 (555) 345-6789"
  },
  {
    id: 4,
    name: "David Brown",
    department: "Security",
    position: "Security Officer",
    experience: "3 years",
    status: "Active",
    shift: "Night",
    phone: "+1 (555) 456-7890"
  }
];

const ListStaff = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredStaff = staff.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-4xl font-bold text-foreground mb-2">Staff List</h1>
                <p className="text-muted-foreground">Manage all hospital staff members</p>
              </div>
              <Button className="btn-primary" onClick={() => window.location.href = '/staff/add'}>
                <Plus className="w-4 h-4 mr-2" />
                Add Staff
              </Button>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search staff..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  All Staff Members ({filteredStaff.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStaff.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <Badge className={getStatusColor(member.status)}>
                          {member.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-1">{member.position}</p>
                      <p className="text-sm text-muted-foreground mb-3">{member.department}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Experience:</span>
                          <span className="font-medium">{member.experience}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="font-medium text-xs">{member.phone}</span>
                        </div>
                        <div className="flex justify-between text-sm items-center">
                          <span className="text-muted-foreground">Shift:</span>
                          <Badge className={getShiftColor(member.shift)} variant="secondary">
                            {member.shift}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            // Staff card click functionality - could open modal or navigate
                            console.log(`Viewing staff: ${member.name}`);
                          }}
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-3 h-3" />
                        </Button>
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

export default ListStaff;