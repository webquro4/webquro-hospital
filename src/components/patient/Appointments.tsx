import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Video,
  Phone,
  Edit,
  X,
  Plus
} from "lucide-react";

const upcomingAppointments = [
  {
    id: 1,
    date: "2024-01-25",
    time: "10:30 AM",
    doctor: "Dr. Michael Chen",
    department: "Cardiology",
    type: "Follow-up",
    location: "Room 302, Building A",
    mode: "In-person",
    status: "Confirmed"
  },
  {
    id: 2,
    date: "2024-02-02",
    time: "2:15 PM",
    doctor: "Dr. Sarah Williams",
    department: "Internal Medicine",
    type: "Annual Checkup",
    location: "Virtual Meeting",
    mode: "Video Call",
    status: "Confirmed"
  },
  {
    id: 3,
    date: "2024-02-08",
    time: "9:00 AM",
    doctor: "Dr. Emily Rodriguez",
    department: "Psychiatry",
    type: "Therapy Session",
    location: "Room 205, Building B",
    mode: "In-person",
    status: "Pending"
  }
];

const pastAppointments = [
  {
    id: 4,
    date: "2024-01-15",
    time: "11:00 AM",
    doctor: "Dr. Michael Chen",
    department: "Cardiology",
    type: "Initial Consultation",
    location: "Room 302, Building A",
    mode: "In-person",
    status: "Completed"
  },
  {
    id: 5,
    date: "2023-12-03",
    time: "3:30 PM",
    doctor: "Dr. Sarah Williams",
    department: "Internal Medicine",
    type: "Lab Review",
    location: "Virtual Meeting",
    mode: "Video Call",
    status: "Completed"
  },
  {
    id: 6,
    date: "2023-11-20",
    time: "1:45 PM",
    doctor: "Dr. James Park",
    department: "Allergy/Immunology",
    type: "Allergy Testing",
    location: "Room 150, Building C",
    mode: "In-person",
    status: "Completed"
  }
];

export const Appointments = () => {
  const [showCancelModal, setShowCancelModal] = useState<number | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Confirmed":
        return <Badge variant="secondary" className="bg-success/10 text-success">Confirmed</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-warning/10 text-warning">Pending</Badge>;
      case "Completed":
        return <Badge variant="secondary" className="bg-info/10 text-info">Completed</Badge>;
      case "Cancelled":
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "Video Call":
        return <Video className="w-4 h-4" />;
      case "Phone Call":
        return <Phone className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const AppointmentCard = ({ appointment, showActions = false }: { appointment: any, showActions?: boolean }) => (
    <Card className="shadow-card hover:shadow-medium transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-4 flex-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{appointment.doctor}</h3>
                  {getStatusBadge(appointment.status)}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(appointment.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{appointment.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Badge variant="outline" className="text-xs">{appointment.department}</Badge>
                    <span>•</span>
                    <span>{appointment.type}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {getModeIcon(appointment.mode)}
                    <span>{appointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {showActions && (
            <div className="flex gap-2 ml-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Reschedule
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 text-destructive hover:text-destructive"
                onClick={() => setShowCancelModal(appointment.id)}
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Appointments
          </h1>
          <p className="text-muted-foreground">Manage your upcoming and past appointments</p>
        </div>
        
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Book New Appointment
        </Button>
      </div>

      {/* Appointments Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-96">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4">
            {upcomingAppointments.map((appointment) => (
              <AppointmentCard 
                key={appointment.id} 
                appointment={appointment} 
                showActions={true}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-4">
            {pastAppointments.map((appointment) => (
              <AppointmentCard 
                key={appointment.id} 
                appointment={appointment} 
                showActions={false}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-sm text-muted-foreground">Upcoming</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">28</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">1</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3">
              <X className="w-6 h-6 text-destructive" />
            </div>
            <p className="text-2xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground">Cancelled</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};