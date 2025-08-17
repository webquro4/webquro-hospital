import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Files, 
  Upload, 
  Download, 
  Eye, 
  Search,
  FileText,
  Image,
  FileIcon,
  Calendar,
  User,
  Plus
} from "lucide-react";

const documents = [
  {
    id: 1,
    name: "Blood Test Results - January 2024",
    type: "Lab Report",
    uploadDate: "2024-01-16",
    uploadedBy: "Dr. Sarah Williams",
    fileType: "PDF",
    fileSize: "2.3 MB",
    category: "Lab Results"
  },
  {
    id: 2,
    name: "Chest X-Ray Scan",
    type: "Imaging",
    uploadDate: "2024-01-15",
    uploadedBy: "Dr. Michael Chen",
    fileType: "DICOM",
    fileSize: "45.7 MB",
    category: "Medical Imaging"
  },
  {
    id: 3,
    name: "ECG Report - Cardiology Visit",
    type: "Test Result",
    uploadDate: "2024-01-15",
    uploadedBy: "Dr. Michael Chen",
    fileType: "PDF",
    fileSize: "1.8 MB",
    category: "Cardiology"
  },
  {
    id: 4,
    name: "Prescription - Lisinopril",
    type: "Prescription",
    uploadDate: "2024-01-15",
    uploadedBy: "Dr. Michael Chen",
    fileType: "PDF",
    fileSize: "0.5 MB",
    category: "Prescriptions"
  },
  {
    id: 5,
    name: "Mental Health Assessment",
    type: "Assessment",
    uploadDate: "2023-10-20",
    uploadedBy: "Dr. Emily Rodriguez",
    fileType: "PDF",
    fileSize: "3.2 MB",
    category: "Mental Health"
  },
  {
    id: 6,
    name: "Insurance Authorization Form",
    type: "Insurance",
    uploadDate: "2023-12-01",
    uploadedBy: "Admin Staff",
    fileType: "PDF",
    fileSize: "1.1 MB",
    category: "Administrative"
  }
];

export const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Lab Results", "Medical Imaging", "Cardiology", "Prescriptions", "Mental Health", "Administrative"];

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FileText className="w-6 h-6 text-red-500" />;
      case "dicom":
      case "jpg":
      case "png":
        return <Image className="w-6 h-6 text-blue-500" />;
      default:
        return <FileIcon className="w-6 h-6 text-gray-500" />;
    }
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      "Lab Results": "bg-green-50 text-green-700",
      "Medical Imaging": "bg-blue-50 text-blue-700",
      "Cardiology": "bg-red-50 text-red-700",
      "Prescriptions": "bg-purple-50 text-purple-700",
      "Mental Health": "bg-indigo-50 text-indigo-700",
      "Administrative": "bg-gray-50 text-gray-700"
    };
    return (
      <Badge variant="secondary" className={colors[category as keyof typeof colors] || "bg-gray-50 text-gray-700"}>
        {category}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Files className="w-6 h-6 text-primary" />
            Documents
          </h1>
          <p className="text-muted-foreground">Access medical reports, lab results, and uploaded documents</p>
        </div>
        
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Upload Document
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Document Stats */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Files className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">{documents.length}</p>
            <p className="text-sm text-muted-foreground">Total Documents</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">
              {documents.filter(d => d.category === "Lab Results").length}
            </p>
            <p className="text-sm text-muted-foreground">Lab Reports</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mx-auto mb-3">
              <Image className="w-6 h-6 text-info" />
            </div>
            <p className="text-2xl font-bold text-foreground">
              {documents.filter(d => d.category === "Medical Imaging").length}
            </p>
            <p className="text-sm text-muted-foreground">Medical Images</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-3">
              <Upload className="w-6 h-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-sm text-muted-foreground">Recent Uploads</p>
          </CardContent>
        </Card>
      </div>

      {/* Documents Grid */}
      <div className="grid gap-4">
        {filteredDocuments.map((document) => (
          <Card key={document.id} className="shadow-card hover:shadow-medium transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-muted/20 flex items-center justify-center">
                    {getFileIcon(document.fileType)}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground">{document.name}</h3>
                      {getCategoryBadge(document.category)}
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(document.uploadDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{document.uploadedBy}</span>
                      </div>
                      <span>{document.fileType} • {document.fileSize}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{document.type}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Area */}
      <Card className="shadow-card border-dashed border-2 border-muted-foreground/20">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Upload New Document</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop files here, or click to browse
          </p>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Choose Files
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Supported formats: PDF, DICOM, JPG, PNG (Max 50MB)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};