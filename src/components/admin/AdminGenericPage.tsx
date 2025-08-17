import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

interface AdminGenericPageProps {
  title: string;
  description: string;
}

const mockData = [
  {
    id: "001",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@webquro.com",
    department: "Cardiology",
    status: "Active",
    joinDate: "2023-01-15",
    image: "/api/placeholder/40/40"
  },
  {
    id: "002", 
    name: "Dr. Michael Chen",
    email: "michael.chen@webquro.com",
    department: "Emergency Medicine",
    status: "Active",
    joinDate: "2022-11-20",
    image: "/api/placeholder/40/40"
  },
  {
    id: "003",
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@webquro.com", 
    department: "Pediatrics",
    status: "On Leave",
    joinDate: "2023-03-10",
    image: "/api/placeholder/40/40"
  },
  {
    id: "004",
    name: "Dr. James Wilson",
    email: "james.wilson@webquro.com",
    department: "Orthopedics", 
    status: "Active",
    joinDate: "2021-09-05",
    image: "/api/placeholder/40/40"
  }
];

export function AdminGenericPage({ title, description }: AdminGenericPageProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-primary transition-all duration-300">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()}...`}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5 border-b border-border/50">
          <CardTitle className="flex items-center justify-between">
            <span>Manage {title}</span>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {mockData.length} Total
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30 border-b border-border/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Profile</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Contact</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Department</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Join Date</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              
              <tbody>
                {mockData.map((item, index) => (
                  <tr 
                    key={item.id} 
                    className={`border-b border-border/30 hover:bg-accent/5 transition-colors ${
                      index % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">ID: {item.id}</p>
                        </div>
                      </div>
                    </td>
                    
                    <td className="p-4">
                      <p className="text-sm text-foreground">{item.email}</p>
                    </td>
                    
                    <td className="p-4">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {item.department}
                      </Badge>
                    </td>
                    
                    <td className="p-4">
                      <Badge 
                        variant={item.status === 'Active' ? 'default' : 'secondary'}
                        className={item.status === 'Active' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        }
                      >
                        {item.status}
                      </Badge>
                    </td>
                    
                    <td className="p-4">
                      <p className="text-sm text-muted-foreground">{item.joinDate}</p>
                    </td>
                    
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent/20">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {mockData.length} of {mockData.length} results
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}