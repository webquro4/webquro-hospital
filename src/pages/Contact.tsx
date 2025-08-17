import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail, AlarmClock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast({
      title: "Message sent",
      description: "Thanks! Our team will contact you shortly.",
    });
    form.reset();
  };

  const info = [
    { title: "Phone", value: "+1 800 123 4567", icon: Phone },
    { title: "Email", value: "care@webquro.com", icon: Mail },
    { title: "Hours", value: "Mon–Sun • 24 Hours", icon: AlarmClock },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Webquro | Phone, Email, Hours</title>
        <meta
          name="description"
          content="Contact Webquro Hospital: phone, email, hours, and a contact form. Find us on the map."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <header className="py-12 md:py-16 bg-secondary/30 border-b">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Contact Us</h1>
          <p className="text-muted-foreground">We're here 24x7 for your care.</p>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <section aria-labelledby="contact-info" className="space-y-6">
            <h2 id="contact-info" className="text-2xl font-semibold">
              Get in touch
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {info.map(({ title, value, icon: Icon }) => (
                <Card key={title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    <div className="size-10 rounded-full grid place-items-center bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <CardTitle className="text-base">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section aria-labelledby="contact-form">
            <Card className="p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle id="contact-form" className="text-xl">
                  Send a message
                </CardTitle>
              </CardHeader>
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" required placeholder="+1 555 000 1234" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea id="message" name="message" required placeholder="Write your message here..." className="min-h-[140px]" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by Webquro.
                  </p>
                  <Button type="submit" variant="default" className="whitespace-nowrap">
                    Submit
                  </Button>
                </div>
              </form>
            </Card>
          </section>
        </div>

        <section className="container mx-auto mt-12 md:mt-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Find us on the map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title="Webquro location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.232!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1710000000000"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </AspectRatio>
                <div className="p-6">
                  <div className="grid gap-3 text-sm text-muted-foreground">
                    <p><span className="font-medium">Entrance & Parking:</span> Visitor parking via Gate B. First 30 minutes free; accessible spots near the main entrance.</p>
                    <p><span className="font-medium">Public Transport:</span> Bus 21, 30, 45 stop at Health Ave. Metro Line M1 — Med City Central (10 min walk).</p>
                    <p><span className="font-medium">Navigation:</span> Search "Webquro Hospital" in your maps app. GPS: 37.7749, -122.4194.</p>
                    <p><span className="font-medium">Accessibility:</span> Wheelchair ramps, elevators, and assistance available at reception.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}