import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Upload, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddStaff = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    experience: "",
    qualification: "",
    shift: "",
    address: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Staff Member Added Successfully",
      description: `${formData.firstName} ${formData.lastName} has been added to the system.`,
    });
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Add New Staff Member</h1>
            <p className="text-muted-foreground">Add a new staff member to the hospital system</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-panel max-w-4xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-primary" />
                  Staff Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select onValueChange={(value) => setFormData({...formData, department: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administration">Administration</SelectItem>
                          <SelectItem value="nursing">Nursing</SelectItem>
                          <SelectItem value="pharmacy">Pharmacy</SelectItem>
                          <SelectItem value="laboratory">Laboratory</SelectItem>
                          <SelectItem value="radiology">Radiology</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="security">Security</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        placeholder="e.g., Senior Nurse, Lab Technician"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        type="number"
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="qualification">Qualifications</Label>
                      <Input
                        id="qualification"
                        value={formData.qualification}
                        onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                        placeholder="e.g., BSN, RN, Certified"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shift">Shift</Label>
                    <Select onValueChange={(value) => setFormData({...formData, shift: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shift" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (7:00 AM - 3:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (3:00 PM - 11:00 PM)</SelectItem>
                        <SelectItem value="night">Night (11:00 PM - 7:00 AM)</SelectItem>
                        <SelectItem value="rotating">Rotating Shifts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="Full residential address..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Profile Photo</Label>
                    <div className="flex items-center gap-4">
                      <Button type="button" variant="outline" className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload Photo
                      </Button>
                      <span className="text-sm text-muted-foreground">JPG, PNG up to 5MB</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button type="submit" className="btn-primary">
                      <Users className="w-4 h-4 mr-2" />
                      Add Staff Member
                    </Button>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
};

export default AddStaff;