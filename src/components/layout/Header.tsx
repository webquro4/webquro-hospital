import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Calendar, Heart, Clock, Users, Stethoscope, PhoneCall, UserCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LoginSignupModal from "@/components/auth/LoginSignupModal";
import { MultiStepAppointmentModal } from '@/components/MultiStepAppointmentModal';
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    (isActive ? "text-primary" : "text-foreground") +
    " hover:text-primary transition-colors";

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2">
          <Stethoscope className="text-primary" />
          <span className="font-display text-xl">Webquro</span>
        </NavLink>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/services" className={linkCls}>Services</NavLink>
          <NavLink to="/doctors" className={linkCls}>Doctors</NavLink>
          <NavLink to="/rooms" className={linkCls}>Rooms</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  {user?.firstName} {user?.lastName}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <NavLink to="/profile" className="flex items-center gap-2 w-full">
                    <UserCircle className="h-4 w-4" />
                    Profile
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" onClick={() => setLoginModalOpen(true)}>
              Login/Signup
            </Button>
          )}
          <Button 
              variant="default" 
              onClick={() => setIsModalOpen(true)}
              className="shadow-medical"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Button>
        </div>
        <Button className="md:hidden" variant="outline" size="icon" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          ☰
        </Button>
      </div>
      {open && (
        <div className="md:hidden border-t animate-fade-in">
          <div className="container mx-auto py-3 grid gap-3">
            <NavLink to="/about" className="story-link" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/services" className="story-link" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/doctors" className="story-link" onClick={() => setOpen(false)}>Doctors</NavLink>
            <NavLink to="/rooms" className="story-link" onClick={() => setOpen(false)}>Rooms</NavLink>
            <NavLink to="/contact" className="story-link" onClick={() => setOpen(false)}>Contact</NavLink>
            <NavLink to="/login" className="story-link" onClick={() => setOpen(false)}>Book Appointment</NavLink>
          </div>
        </div>
      )}
      
      <LoginSignupModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
      {/* Multi-Step Appointment Modal */}
      <MultiStepAppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );

}
