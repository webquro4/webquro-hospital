import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AdminIndex from "/AdminIndex";
import NotFound from "@/pages/NotFound";
import Analytics from "@/pages/Analytics";
import Appointments from "@/pages/Appointments";
import AddDoctor from "@/pages/doctors/AddDoctor";
import ListDoctors from "@/pages/doctors/ListDoctors";

import AddStaff from "@/pages/staff/AddStaff";
import ListStaff from "@/pages/staff/ListStaff";
import StaffDetails from "@/pages/staff/StaffDetails";

import AddRoom from "@/pages/rooms/AddRoom";
import ListRooms from "@/pages/rooms/ListRooms";
import Patients from "@/pages/Patients";
import UserManagement from "@/pages/UserManagement";
import AdminSettings from "@/pages/AdminSettings";
import Logout from "@/pages/Logout";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";


const queryClient = new QueryClient();

export default function AdminLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Webquro Hospital</title>
        <meta
          name="description"
          content="Hospital management system admin dashboard for managing doctors, staff, patients, rooms and appointments."
        />
        <link rel="canonical" href="/admin" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5 flex">
        <AppSidebar
          isCollapsed={isCollapsed}
          onToggleSidebar={() => setIsCollapsed((prev) => !prev)}
        />

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}