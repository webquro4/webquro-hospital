import { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-hospital.jpg";
import orImage from "@/assets/facility-or.jpg";
import imagingImage from "@/assets/facility-imaging.jpg";
import roomImage from "@/assets/facility-room.jpg";
import { Button } from "@/components/ui/button";
import Counter from "@/components/Counter";
import { services, doctors, stats, testimonials, blogs } from "@/data/home";
import { HeartPulse, Brain, Bone, Baby, Syringe, Stethoscope, Ambulance, Microscope, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const iconMap: Record<string, React.ReactNode> = {
  cardiology: <HeartPulse />, neurology: <Brain />, orthopedics: <Bone />, pediatrics: <Baby />, oncology: <Syringe />, gynecology: <Stethoscope />, gastro: <Microscope />, emergency: <Ambulance />,
};

export default function Index() {
  const [visibleServices, setVisibleServices] = useState(4);
  const hasMoreServices = visibleServices < services.length;
  return (
    <Fragment>
      <Helmet>
        <title>Webquro Hospital | Best Doctors & Advanced Care</title>
        <meta name="description" content="Webquro Hospital offers world-class doctors, advanced facilities, and compassionate care. Book appointments and find specialists." />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] grid place-items-center overflow-hidden">
        <img src={heroImage} alt="Webquro Hospital modern lobby" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/10" />
        <div className="relative container mx-auto text-center animate-enter">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Compassion. Excellence. Trust.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">World-class healthcare powered by leading specialists and state-of-the-art technology.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="default" size="lg">Book Appointment</Button>
            <Button variant="outline" size="lg">Find a Doctor</Button>
            <Button variant="secondary" size="lg">Our Services</Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16 bg-secondary/50">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.id} className="p-6 rounded-lg bg-card border shadow-sm animate-fade-in">
              <div className="text-3xl md:text-4xl font-semibold text-primary"><Counter end={s.value} /></div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-14">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={roomImage} alt="Premium patient room at Webquro" className="w-full h-[320px] object-cover rounded-xl border shadow" loading="lazy" />
          <div>
            <h2 className="text-3xl font-semibold mb-3">Webquro: Your Partner in Health</h2>
            <p className="text-muted-foreground mb-6">For over three decades, Webquro has delivered compassionate, cutting-edge healthcare across specialties—from heart and neuro sciences to critical care and pediatrics.</p>
            <Button variant="default">Read More</Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Centers of Excellence</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, visibleServices).map((svc) => (
              <div key={svc.id} className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow animate-fade-in">
                <div className="mb-4 text-primary">{iconMap[svc.id] ?? <Stethoscope />}</div>
                <h3 className="font-semibold mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{svc.description}</p>
                <Button variant="link" className="px-0">Learn more →</Button>
              </div>
            ))}
          </div>
          {hasMoreServices && (
            <div className="mt-6 text-center">
              <Button variant="secondary" onClick={() => setVisibleServices(v => Math.min(v + 4, services.length))}>
                Load more
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Find a Doctor */}
      <section className="py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Find a Doctor</h2>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
            <input className="flex-1 h-11 rounded-md border px-4 bg-background focus-visible:ring-2 focus-visible:ring-ring" placeholder="Search by name or specialty" aria-label="Search doctors" />
            <select className="h-11 rounded-md border px-3 bg-background">
              <option>All Departments</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Neurology</option>
            </select>
            <Button variant="default" className="h-11">Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Featured Doctors</h2>
          <Carousel className="relative">
            <CarouselContent>
              {doctors.map((d) => (
                <CarouselItem key={d.id} className="basis-full md:basis-1/3">
                  <div className="p-6 border rounded-xl bg-card h-full flex flex-col">
                    <img src="/placeholder.svg" alt={`${d.name} portrait`} className="w-full h-44 object-cover rounded-md mb-4" />
                    <h3 className="font-semibold">{d.name}</h3>
                    <p className="text-sm text-muted-foreground">{d.specialty} • {d.experience}</p>
                    <div className="mt-2 text-primary flex items-center gap-1"><Star className="h-4 w-4" /> {d.rating.toFixed(1)}</div>
                    <Button variant="secondary" className="mt-4">Book Now</Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Facilities</h2>
          <Carousel>
            <CarouselContent>
              {[orImage, imagingImage, roomImage].map((img, i) => (
                <CarouselItem key={i} className="basis-full md:basis-1/2">
                  <figure className="overflow-hidden rounded-xl border bg-card">
                    <img src={img} className="w-full h-[320px] object-cover" alt={`Facility ${i+1}`} loading="lazy" />
                    <figcaption className="p-3 text-sm text-muted-foreground">World-class infrastructure and equipment.</figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Patient Stories</h2>
          <Carousel>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="basis-full md:basis-1/2">
                  <div className="p-6 rounded-xl border bg-card h-full">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="italic mb-2">“{t.quote}”</p>
                    <div className="text-sm text-muted-foreground">— {t.name}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Awards & Accreditations */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2">
            {['NABH', 'JCI', 'ISO 9001', 'Best Hospital 2024', 'Top Cardiac Center'].map((l) => (
              <span key={l} className="px-4 py-2 rounded-full border bg-secondary/60 text-sm whitespace-nowrap hover-scale">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Health Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <article key={b.id} className="rounded-xl border overflow-hidden bg-card hover:shadow-lg transition-shadow">
                <img src={b.image} alt={b.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{b.excerpt}</p>
                  <Button variant="link" className="px-0">Read more →</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-3">We’re here for you 24x7</h2>
          <p className="text-muted-foreground mb-6">Call +1 800 123 4567 or write to care@webquro.com</p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="default">Contact Us</Button>
            <Button variant="outline">Get Directions</Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
