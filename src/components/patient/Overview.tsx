import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Heart,
  Thermometer,
  Activity,
  Weight,
  Edit3,
  FileText,
  CreditCard,
  Clock
} from "lucide-react";

export const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Patient Basic Info Card */}
      <Card className="shadow-card">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <User className="w-12 h-12 text-primary" />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Sarah Johnson</h2>
                  <p className="text-muted-foreground">Patient ID: P-2024-001</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Age: 34 years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span>Female</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                    <span>Blood Group: O+</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>sarah.johnson@email.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>123 Main Street, New York, NY 10001</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-success/10 text-success">
                Active
              </Badge>
              <Button size="sm" className="gap-2">
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Vital Signs */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Current Vital Signs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-sm text-muted-foreground">Blood Pressure</p>
              <p className="text-lg font-semibold">120/80</p>
              <Badge variant="secondary" className="bg-success/10 text-success text-xs">Normal</Badge>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-sm text-muted-foreground">Heart Rate</p>
              <p className="text-lg font-semibold">72 bpm</p>
              <Badge variant="secondary" className="bg-success/10 text-success text-xs">Normal</Badge>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mx-auto">
                <Thermometer className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-sm text-muted-foreground">Temperature</p>
              <p className="text-lg font-semibold">98.6°F</p>
              <Badge variant="secondary" className="bg-success/10 text-success text-xs">Normal</Badge>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mx-auto">
                <Activity className="w-6 h-6 text-teal-500" />
              </div>
              <p className="text-sm text-muted-foreground">Oxygen Saturation</p>
              <p className="text-lg font-semibold">98%</p>
              <Badge variant="secondary" className="bg-success/10 text-success text-xs">Normal</Badge>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mx-auto">
                <Weight className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="text-lg font-semibold">65 kg</p>
              <Badge variant="secondary" className="bg-warning/10 text-warning text-xs">Monitor</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Summary Cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-medium transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Appointments</h3>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">2 upcoming, 1 pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-medium transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Outstanding Bills</h3>
                <p className="text-2xl font-bold text-warning">$1,240</p>
                <p className="text-sm text-muted-foreground">2 pending invoices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-medium transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-info" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Medical Records</h3>
                <p className="text-2xl font-bold text-info">24</p>
                <p className="text-sm text-muted-foreground">Last updated 2 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/30">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-success" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Appointment Completed</p>
                <p className="text-sm text-muted-foreground">Cardiology consultation with Dr. Michael Chen</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/30">
              <div className="w-8 h-8 rounded-full bg-info/20 flex items-center justify-center">
                <FileText className="w-4 h-4 text-info" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Lab Results Available</p>
                <p className="text-sm text-muted-foreground">Blood work and cholesterol panel results</p>
                <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/30">
              <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-warning" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Payment Reminder</p>
                <p className="text-sm text-muted-foreground">Invoice #INV-2024-156 is due in 3 days</p>
                <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};