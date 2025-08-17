import { Button } from "@/components/ui/button";

export const AegisCareHeader = () => {
  return (
    <header className="bg-white border-b border-border shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-white bg-transparent"></div>
          </div>
          <span className="text-xl font-semibold text-foreground">Webquro</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Doctors
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Rooms
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">User Name</span>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};