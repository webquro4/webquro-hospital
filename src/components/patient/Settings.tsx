import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, Database, Mail } from "lucide-react";

export const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <Card className="shadow-soft border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg text-foreground">Profile Settings</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Sarah" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Johnson" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+1 (555) 123-4567" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Update Profile</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="shadow-soft border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg text-foreground">Notification Preferences</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive appointment reminders via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">SMS Notifications</p>
              <p className="text-sm text-muted-foreground">Receive text message updates</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Push Notifications</p>
              <p className="text-sm text-muted-foreground">Receive browser notifications</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card className="shadow-soft border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg text-foreground">Privacy & Security</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" placeholder="Enter current password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" placeholder="Enter new password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
          </div>
          <Button variant="outline">Change Password</Button>
          
          <Separator className="my-4" />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card className="shadow-soft border-border/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg text-foreground">Data Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Download My Data</p>
              <p className="text-sm text-muted-foreground">Export all your medical records</p>
            </div>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-destructive">Delete Account</p>
              <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
            </div>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};