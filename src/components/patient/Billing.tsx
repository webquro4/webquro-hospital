import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CreditCard, 
  Download, 
  Printer, 
  DollarSign,
  Calendar,
  Receipt,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const billingData = [
  {
    id: 1,
    invoiceNumber: "INV-2024-156",
    date: "2024-01-15",
    service: "Cardiology Consultation",
    department: "Cardiology",
    doctor: "Dr. Michael Chen",
    amount: 320.00,
    status: "Paid",
    paymentDate: "2024-01-16",
    paymentMethod: "Insurance + Card"
  },
  {
    id: 2,
    invoiceNumber: "INV-2024-157",
    date: "2024-01-20",
    service: "Blood Work & Lab Tests",
    department: "Laboratory",
    doctor: "Dr. Sarah Williams",
    amount: 180.00,
    status: "Pending",
    paymentDate: null,
    paymentMethod: null
  },
  {
    id: 3,
    invoiceNumber: "INV-2024-158",
    date: "2024-01-22",
    service: "Prescription Medications",
    department: "Pharmacy",
    doctor: "Dr. Michael Chen",
    amount: 95.50,
    status: "Overdue",
    paymentDate: null,
    paymentMethod: null
  },
  {
    id: 4,
    invoiceNumber: "INV-2023-245",
    date: "2023-12-03",
    service: "Annual Physical Exam",
    department: "Internal Medicine",
    doctor: "Dr. Sarah Williams",
    amount: 450.00,
    status: "Paid",
    paymentDate: "2023-12-05",
    paymentMethod: "Insurance"
  },
  {
    id: 5,
    invoiceNumber: "INV-2023-198",
    date: "2023-10-20",
    service: "Mental Health Consultation",
    department: "Psychiatry",
    doctor: "Dr. Emily Rodriguez",
    amount: 280.00,
    status: "Paid",
    paymentDate: "2023-10-22",
    paymentMethod: "Insurance + Card"
  }
];

export const Billing = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Paid":
        return <Badge variant="secondary" className="bg-success/10 text-success">Paid</Badge>;
      case "Pending":
        return <Badge variant="secondary" className="bg-warning/10 text-warning">Pending</Badge>;
      case "Overdue":
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const totalPaid = billingData.filter(b => b.status === "Paid").reduce((sum, b) => sum + b.amount, 0);
  const totalPending = billingData.filter(b => b.status === "Pending").reduce((sum, b) => sum + b.amount, 0);
  const totalOverdue = billingData.filter(b => b.status === "Overdue").reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-primary" />
            Billing & Payments
          </h1>
          <p className="text-muted-foreground">Track invoices, payments, and outstanding balances</p>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">${totalPaid.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Total Paid</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">${totalPending.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Pending Payment</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <p className="text-2xl font-bold text-foreground">${totalOverdue.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">Overdue Amount</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mx-auto mb-3">
              <Receipt className="w-6 h-6 text-info" />
            </div>
            <p className="text-2xl font-bold text-foreground">{billingData.length}</p>
            <p className="text-sm text-muted-foreground">Total Invoices</p>
          </CardContent>
        </Card>
      </div>

      {/* Outstanding Balance Alert */}
      {totalOverdue > 0 && (
        <Card className="shadow-card border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-destructive mb-2">Payment Overdue</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You have overdue payments totaling ${totalOverdue.toFixed(2)}. Please settle these amounts to avoid any service interruptions.
                </p>
                <Button variant="destructive" size="sm" className="gap-2">
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Billing History Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-primary" />
            Billing History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Invoice #</TableHead>
                  <TableHead className="font-semibold">Date</TableHead>
                  <TableHead className="font-semibold">Service</TableHead>
                  <TableHead className="font-semibold">Department</TableHead>
                  <TableHead className="font-semibold">Amount</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {billingData.map((invoice) => (
                  <TableRow key={invoice.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        {new Date(invoice.date).toLocaleDateString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{invoice.service}</p>
                        <p className="text-sm text-muted-foreground">{invoice.doctor}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{invoice.department}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">${invoice.amount.toFixed(2)}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="w-3 h-3" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Printer className="w-3 h-3" />
                          Print
                        </Button>
                        {invoice.status !== "Paid" && (
                          <Button size="sm" className="gap-1">
                            <CreditCard className="w-3 h-3" />
                            Pay
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Payment Methods
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Insurance Information</h4>
              <div className="p-4 border rounded-xl">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider:</span>
                    <span className="font-medium">Blue Cross Blue Shield</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Policy Number:</span>
                    <span className="font-medium">BC123456789</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Group Number:</span>
                    <span className="font-medium">GRP-2024-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coverage:</span>
                    <span className="font-medium">80% Medical, 60% Dental</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Saved Payment Methods</h4>
              <div className="space-y-3">
                <div className="p-4 border rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">**** **** **** 4321</p>
                      <p className="text-sm text-muted-foreground">Expires 12/26</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-success/10 text-success">Primary</Badge>
                </div>
                
                <Button variant="outline" className="w-full gap-2">
                  <CreditCard className="w-4 h-4" />
                  Add Payment Method
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};