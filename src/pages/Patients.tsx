import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileUser } from "lucide-react";

const Patients = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
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
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Patient Details</h1>
                <p className="text-muted-foreground">Access and manage patient records and medical history</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-border">
                  <FileUser className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button className="btn-primary">
                  <FileUser className="w-4 h-4 mr-2" />
                  Add New
                </Button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search patient details..."
                  className="w-full px-4 py-2 pl-10 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <FileUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <Button variant="outline" className="ml-4">
                Advanced Filters
              </Button>
            </div>
          </motion.div>

          {/* Patient Management Section */}
          <Card className="glass-panel">
            <CardHeader className="border-b border-border">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-semibold">Manage Patient Details</CardTitle>
                <span className="text-sm text-primary font-medium">4 Total</span>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left p-4 font-medium text-muted-foreground">Profile</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Contact</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Department</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Admission Date</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-medium">JS</span>
                          </div>
                          <div>
                            <div className="font-medium">John Smith</div>
                            <div className="text-sm text-muted-foreground">ID: 001</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">john.smith@email.com</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Cardiology</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Active</span>
                      </td>
                      <td className="p-4 text-muted-foreground">2023-01-15</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-medium">MC</span>
                          </div>
                          <div>
                            <div className="font-medium">Maria Chen</div>
                            <div className="text-sm text-muted-foreground">ID: 002</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">maria.chen@email.com</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">Emergency</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Active</span>
                      </td>
                      <td className="p-4 text-muted-foreground">2022-11-20</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-medium">ER</span>
                          </div>
                          <div>
                            <div className="font-medium">Emily Rodriguez</div>
                            <div className="text-sm text-muted-foreground">ID: 003</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">emily.rodriguez@email.com</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">Pediatrics</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">On Leave</span>
                      </td>
                      <td className="p-4 text-muted-foreground">2023-03-10</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/20">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-medium">JW</span>
                          </div>
                          <div>
                            <div className="font-medium">James Wilson</div>
                            <div className="text-sm text-muted-foreground">ID: 004</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">james.wilson@email.com</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">Orthopedics</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Active</span>
                      </td>
                      <td className="p-4 text-muted-foreground">2021-09-05</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <FileUser className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="flex justify-between items-center p-4 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  Showing 1 to 4 of 4 results
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
                  <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </motion.div>
    </div>
  );
};

export default Patients;