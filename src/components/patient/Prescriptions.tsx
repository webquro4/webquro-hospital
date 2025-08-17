import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Pill, 
  Download, 
  User, 
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText
} from "lucide-react";

const prescriptions = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    duration: "Ongoing",
    prescribedBy: "Dr. Michael Chen",
    prescribedDate: "2024-01-15",
    status: "Active",
    instructions: "Take with food. Monitor blood pressure regularly.",
    refillsRemaining: 3
  },
  {
    id: 2,
    medication: "Sertraline",
    dosage: "50mg",
    frequency: "Once daily (morning)",
    duration: "6 months",
    prescribedBy: "Dr. Emily Rodriguez",
    prescribedDate: "2023-10-20",
    status: "Active",
    instructions: "Take consistently at the same time each day. May cause drowsiness initially.",
    refillsRemaining: 1
  },
  {
    id: 3,
    medication: "Vitamin D3",
    dosage: "2000 IU",
    frequency: "Once daily",
    duration: "3 months",
    prescribedBy: "Dr. Sarah Williams",
    prescribedDate: "2023-12-03",
    status: "Completed",
    instructions: "Take with fat-containing meal for better absorption.",
    refillsRemaining: 0
  },
  {
    id: 4,
    medication: "Cetirizine",
    dosage: "10mg",
    frequency: "Once daily (evening)",
    duration: "As needed",
    prescribedBy: "Dr. James Park",
    prescribedDate: "2023-08-12",
    status: "Active",
    instructions: "Use during allergy season. May cause mild drowsiness.",
    refillsRemaining: 2
  },
  {
    id: 5,
    medication: "Ibuprofen",
    dosage: "400mg",
    frequency: "As needed (max 3x daily)",
    duration: "PRN",
    prescribedBy: "Dr. Michael Chen",
    prescribedDate: "2024-01-15",
    status: "Active",
    instructions: "Take with food. Do not exceed 1200mg in 24 hours.",
    refillsRemaining: 0
  }
];

export const Prescriptions = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge variant="secondary" className="bg-success/10 text-success">Active</Badge>;
      case "Completed":
        return <Badge variant="secondary" className="bg-info/10 text-info">Completed</Badge>;
      case "Discontinued":
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive">Discontinued</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRefillBadge = (refills: number) => {
    if (refills === 0) {
      return <Badge variant="secondary" className="bg-warning/10 text-warning">No Refills</Badge>;
    } else if (refills <= 1) {
      return <Badge variant="secondary" className="bg-orange/10 text-orange">{refills} Refill</Badge>;
    } else {
      return <Badge variant="secondary" className="bg-success/10 text-success">{refills} Refills</Badge>;
    }
  };

  const activePrescriptions = prescriptions.filter(p => p.status === "Active");
  const completedPrescriptions = prescriptions.filter(p => p.status === "Completed");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Pill className="w-6 h-6 text-primary" />
            Prescriptions
          </h1>
          <p className="text-muted-foreground">View current medications and prescription history</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">{activePrescriptions.length}</p>
            <p className="text-sm text-muted-foreground">Active Medications</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">
              {activePrescriptions.filter(p => p.refillsRemaining <= 1).length}
            </p>
            <p className="text-sm text-muted-foreground">Need Refills</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-info" />
            </div>
            <p className="text-2xl font-bold text-foreground">{prescriptions.length}</p>
            <p className="text-sm text-muted-foreground">Total Prescriptions</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">4</p>
            <p className="text-sm text-muted-foreground">Prescribing Doctors</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Prescriptions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            Active Prescriptions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activePrescriptions.map((prescription) => (
              <div key={prescription.id} className="border rounded-xl p-4 hover:bg-accent/20 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Pill className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground text-lg">
                            {prescription.medication}
                          </h3>
                          {getStatusBadge(prescription.status)}
                          {getRefillBadge(prescription.refillsRemaining)}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Dosage & Frequency</p>
                            <p className="font-medium">{prescription.dosage} - {prescription.frequency}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Duration</p>
                            <p className="font-medium">{prescription.duration}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span>{prescription.prescribedBy}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{new Date(prescription.prescribedDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 p-3 bg-accent/30 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Instructions:</strong> {prescription.instructions}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Prescription History */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Prescription History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Medication</TableHead>
                  <TableHead className="font-semibold">Dosage</TableHead>
                  <TableHead className="font-semibold">Prescribed By</TableHead>
                  <TableHead className="font-semibold">Date</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="w-32">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prescriptions.map((prescription) => (
                  <TableRow key={prescription.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{prescription.medication}</TableCell>
                    <TableCell>{prescription.dosage}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        {prescription.prescribedBy}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        {new Date(prescription.prescribedDate).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(prescription.status)}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download className="w-3 h-3" />
                        PDF
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};