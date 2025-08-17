import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Search, 
  Filter, 
  ChevronDown,
  Calendar,
  User,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const medicalHistory = [
  {
    id: 1,
    date: "2024-01-15",
    diagnosis: "Hypertension Stage 1",
    treatment: "Lisinopril 10mg daily, lifestyle modifications",
    doctor: "Dr. Michael Chen",
    department: "Cardiology",
    status: "Ongoing",
    notes: "Patient responded well to initial treatment. Blood pressure stabilized."
  },
  {
    id: 2,
    date: "2023-12-03",
    diagnosis: "Vitamin D Deficiency",
    treatment: "Vitamin D3 2000 IU daily",
    doctor: "Dr. Sarah Williams",
    department: "Internal Medicine",
    status: "Resolved",
    notes: "Follow-up lab shows improved vitamin D levels. Continue supplementation."
  },
  {
    id: 3,
    date: "2023-10-20",
    diagnosis: "Anxiety Disorder",
    treatment: "Cognitive behavioral therapy, Sertraline 50mg",
    doctor: "Dr. Emily Rodriguez",
    department: "Psychiatry",
    status: "Stable",
    notes: "Patient shows significant improvement with combined therapy approach."
  },
  {
    id: 4,
    date: "2023-08-12",
    diagnosis: "Allergic Rhinitis",
    treatment: "Cetirizine 10mg daily, nasal corticosteroids",
    doctor: "Dr. James Park",
    department: "Allergy/Immunology",
    status: "Managed",
    notes: "Seasonal symptoms well controlled with current medication regimen."
  }
];

export const MedicalHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const filteredHistory = medicalHistory.filter(
    (record) =>
      record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ongoing":
        return <Badge variant="secondary" className="bg-warning/10 text-warning">Ongoing</Badge>;
      case "Resolved":
        return <Badge variant="secondary" className="bg-success/10 text-success">Resolved</Badge>;
      case "Stable":
        return <Badge variant="secondary" className="bg-info/10 text-info">Stable</Badge>;
      case "Managed":
        return <Badge variant="secondary" className="bg-primary/10 text-primary">Managed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Medical History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by diagnosis, doctor, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {/* Medical History Table */}
          <div className="border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Date</TableHead>
                  <TableHead className="font-semibold">Diagnosis</TableHead>
                  <TableHead className="font-semibold">Doctor</TableHead>
                  <TableHead className="font-semibold">Department</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredHistory.map((record) => (
                  <>
                    <TableRow 
                      key={record.id}
                      className="hover:bg-muted/30 cursor-pointer transition-colors"
                      onClick={() => setExpandedRow(expandedRow === record.id ? null : record.id)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          {new Date(record.date).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{record.diagnosis}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          {record.doctor}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{record.department}</Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${
                          expandedRow === record.id ? 'rotate-180' : ''
                        }`} />
                      </TableCell>
                    </TableRow>
                    
                    {expandedRow === record.id && (
                      <TableRow>
                        <TableCell colSpan={6} className="bg-accent/20">
                          <div className="p-4 space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-primary" />
                                Treatment Details
                              </h4>
                              <p className="text-sm text-muted-foreground bg-background p-3 rounded-lg">
                                {record.treatment}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                Clinical Notes
                              </h4>
                              <p className="text-sm text-muted-foreground bg-background p-3 rounded-lg">
                                {record.notes}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Medical Summary Stats */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-sm text-muted-foreground">Total Records</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground">Active Conditions</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">18</p>
            <p className="text-sm text-muted-foreground">Resolved Cases</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-info" />
            </div>
            <p className="text-2xl font-bold text-foreground">8</p>
            <p className="text-sm text-muted-foreground">Consulting Doctors</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};