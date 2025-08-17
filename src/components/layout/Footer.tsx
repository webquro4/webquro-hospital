import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 py-12">
        <div>
          <h4 className="font-semibold mb-3">Webquro Hospital</h4>
          <p className="text-muted-foreground">World-class care with compassion.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/services" className="hover:text-primary">Services</NavLink></li>
            <li><NavLink to="/doctors" className="hover:text-primary">Find a Doctor</NavLink></li>
            <li><NavLink to="/rooms" className="hover:text-primary">Rooms</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-primary">Contact</NavLink></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li>123 Health Ave, Med City</li>
            <li>+1 800 123 4567</li>
            <li>care@webquro.com</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Find Us</h5>
          <div className="rounded-md overflow-hidden border">
            <iframe
              title="Webquro on Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.232!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1710000000000"
              width="100%"
              height="160"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Webquro Hospital. All rights reserved.
      </div>
    </footer>
  );
}
