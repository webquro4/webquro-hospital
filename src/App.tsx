import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "@/pages/Index";
import NotFound from "./pages/NotFound";
import SiteLayout from "@/components/layout/SiteLayout";
import ChatbotWidget from "@/components/ChatbotWidget";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Contact from "./pages/Contact";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminIndex from "@/pages/AdminIndex";
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

import { AuthProvider } from "@/hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <HelmetProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorDetail />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:id" element={<RoomDetail />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminIndex />} />
              <Route path="dashboard" element={<AdminIndex />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="appointments" element={<Appointments />} />
              <Route path="doctors" element={<Doctors />} />
              <Route path="doctors/add" element={<AddDoctor />} />
              <Route path="doctors/list" element={<ListDoctors />} />
              <Route path="doctors/:id" element={<ListDoctors />} />
              <Route path="staff" element={<ListStaff />} />
              <Route path="staff/add" element={<AddStaff />} />
              <Route path="staff/list" element={<ListStaff />} />
              <Route path="staff/:id" element={<StaffDetails />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="rooms/add" element={<AddRoom />} />
              <Route path="rooms/list" element={<ListRooms />} />
              <Route path="rooms/:id" element={<Rooms />} />
              <Route path="patients" element={<Patients />} />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="admin-settings" element={<AdminSettings />} />
              <Route path="logout" element={<Logout />} />

              
            </Route>
            ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatbotWidget />
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
