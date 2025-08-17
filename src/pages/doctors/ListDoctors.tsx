import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, UserCog, Eye, Edit, Trash2, Plus } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Smith",
    specialization: "Cardiology",
    experience: "12 years",
    status: "Active",
    patients: 156,
    rating: 4.8,
    schedule: "Mon-Fri: 9:00 AM - 5:00 PM"
  },
  {
    id: 2,
    name: "Dr. Michael Johnson",
    specialization: "Neurology",
    experience: "8 years",
    status: "Active",
    patients: 89,
    rating: 4.9,
    schedule: "Tue-Sat: 10:00 AM - 6:00 PM"
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialization: "Pediatrics",
    experience: "15 years",
    status: "On Leave",
    patients: 203,
    rating: 4.7,
    schedule: "Mon-Wed: 8:00 AM - 4:00 PM"
  },
  {
    id: 4,
    name: "Dr. David Wilson",
    specialization: "Orthopedics",
    experience: "10 years",
    status: "Active",
    patients: 134,
    rating: 4.6,
    schedule: "Mon-Fri: 11:00 AM - 7:00 PM"
  }
];

const ListDoctors = () => {
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

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-4xl font-bold text-foreground mb-2">Doctors List</h1>
                <p className="text-muted-foreground">Manage all registered doctors</p>
              </div>
              <Button className="btn-primary" onClick={() => window.location.href = '/doctors/add'}>
                <Plus className="w-4 h-4 mr-2" />
                Add Doctor
              </Button>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search doctors..."
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
                  <UserCog className="w-5 h-5 text-primary" />
                  All Doctors ({filteredDoctors.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDoctors.map((doctor, index) => (
                    <motion.div
                      key={doctor.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <UserCog className="w-8 h-8 text-primary" />
                        </div>
                        <Badge className={getStatusColor(doctor.status)}>
                          {doctor.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
                      <p className="text-primary font-medium mb-2">{doctor.specialization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{doctor.experience} experience</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Patients:</span>
                          <span className="font-medium">{doctor.patients}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Rating:</span>
                          <span className="font-medium">⭐ {doctor.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-4">{doctor.schedule}</p>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            // Doctor card click functionality - could open modal or navigate
                            console.log(`Viewing doctor: ${doctor.name}`);
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

export default ListDoctors;