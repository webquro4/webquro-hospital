import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddRoom = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Room Added Successfully",
      description: "New room has been added to the system.",
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Add New Room</h1>
            <p className="text-muted-foreground">Add a new room to the hospital system</p>
          </motion.div>

          <Card className="glass-panel max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Room Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="roomNumber">Room Number</Label>
                    <Input id="roomNumber" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roomType">Room Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="icu">ICU</SelectItem>
                        <SelectItem value="general">General Ward</SelectItem>
                        <SelectItem value="private">Private Room</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="surgery">Surgery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" className="btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Room
                  </Button>
                  <Button type="button" variant="outline">Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </motion.div>
    </div>
  );
};

export default AddRoom;