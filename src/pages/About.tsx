import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-hospital.jpg";
import facilityOr from "@/assets/facility-or.jpg";
import facilityImaging from "@/assets/facility-imaging.jpg";
import facilityRoom from "@/assets/facility-room.jpg";
import { HeartPulse, Award, Users, Target, Building2, Stethoscope, Clock, TrendingUp, Shield, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { doctorsData } from "@/data/doctors";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Webquro Hospital | Mission, Vision, Leadership</title>
        <meta name="description" content="Learn about Webquro Hospital's mission, vision, milestones, leadership, and world-class facilities." />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion, innovation, and excellence.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Welcome to Webquro Hospital</h2>
              <p className="text-muted-foreground leading-relaxed">
                For over three decades, Webquro Hospital has been at the forefront of medical excellence, 
                providing comprehensive healthcare services to our community. Our state-of-the-art facilities 
                and experienced medical professionals ensure that every patient receives the highest quality 
                care in a compassionate environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to advancing medical science through research, education, and innovation 
                while maintaining our core values of integrity, compassion, and excellence in everything we do.
              </p>
              <Button size="lg" className="mt-4">Learn More About Our Services</Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Webquro Hospital Building" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Mission / Values / Vision */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional healthcare services with empathy, innovation, and integrity, 
                  ensuring every patient receives world-class medical care in a compassionate environment.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Compassion in care, excellence in service, integrity in practice, innovation in medicine, 
                  and respect for every individual we serve.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted healthcare partner globally, pioneering advanced medical solutions 
                  and setting new standards in patient care and medical excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey - Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Central line */}
                <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary/20"></div>
                
                <div className="space-y-12">
                  {[
                    { year: 1990, text: "Webquro founded with 50 beds and 20 dedicated clinicians, beginning our journey of healthcare excellence." },
                    { year: 2005, text: "Opened specialized Cardiac & Neurology Centers of Excellence, expanding our expertise in critical care." },
                    { year: 2015, text: "Launched state-of-the-art robotic surgery program and 24x7 emergency services for comprehensive care." },
                    { year: 2023, text: "Achieved prestigious NABH & JCI accreditations, recognizing our commitment to international quality standards." }
                  ].map((milestone, index) => (
                    <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                          <p className="text-muted-foreground leading-relaxed">{milestone.text}</p>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-background z-10">
                        <div className="w-3 h-3 bg-background rounded-full"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {doctorsData.slice(0, 8).map((doctor) => (
                  <CarouselItem key={doctor.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="text-center overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <img 
                        src={doctor.image} 
                        alt={`${doctor.name} portrait`} 
                        loading="lazy" 
                        className="w-full h-56 object-cover" 
                      />
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                        <p className="text-primary font-medium text-sm mb-1">{doctor.specialty}</p>
                        <p className="text-muted-foreground text-sm">{doctor.experience}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { src: facilityOr, title: "Operation Theatres", desc: "State-of-the-art surgical suites with advanced technology" },
                  { src: facilityImaging, title: "Advanced Imaging", desc: "Latest diagnostic equipment for precise medical imaging" },
                  { src: facilityRoom, title: "Patient Rooms", desc: "Comfortable and modern recovery spaces for optimal healing" },
                  { src: heroImage, title: "Emergency Department", desc: "24/7 emergency care with rapid response capabilities" }
                ].map((facility, i) => (
                  <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="group overflow-hidden rounded-xl border bg-card text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full">
                          <img 
                            src={facility.src} 
                            alt={facility.title} 
                            loading="lazy" 
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                          />
                          <div className="p-4">
                            <h3 className="font-semibold mb-2">{facility.title}</h3>
                            <p className="text-sm text-muted-foreground">{facility.desc}</p>
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden">
                        <img src={facility.src} alt={`${facility.title} large view`} className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "What are your visiting hours?",
                  answer: "Our general visiting hours are 10:00 AM to 8:00 PM daily. ICU visiting hours are 11:00 AM to 1:00 PM and 4:00 PM to 6:00 PM. Please check with the nursing station for specific ward timings."
                },
                {
                  question: "Do you accept insurance coverage?",
                  answer: "Yes, we accept most major insurance plans including government schemes like CGHS, ECHS, and private insurers. Please contact our billing department for specific coverage details."
                },
                {
                  question: "How can I book an appointment?",
                  answer: "You can book appointments through our online portal, by calling our helpline at +91-XXX-XXXX-XXX, or by visiting the hospital reception. Online booking is available 24/7."
                },
                {
                  question: "What emergency services do you provide?",
                  answer: "We provide 24/7 emergency services including trauma care, cardiac emergencies, stroke care, and critical care. Our emergency department is equipped with advanced life support systems."
                },
                {
                  question: "Do you provide ambulance services?",
                  answer: "Yes, we have a fleet of well-equipped ambulances available 24/7 for emergency transport. Our ambulances are staffed with trained paramedics and equipped with life support systems."
                },
                {
                  question: "What are your payment options?",
                  answer: "We accept cash, credit cards, debit cards, and digital payments. We also offer installment plans for major procedures and accept most insurance policies."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="border rounded-lg px-6 bg-card shadow-sm">
                  <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Our Achievements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* First Row */}
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">NABH Accredited</h3>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">JCI Certified</h3>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">ISO 9001:2015</h3>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Best Hospital 2024</h3>
              </div>

              {/* Second Row */}
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Cardiac Excellence</h3>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Green Building</h3>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Patient Safety Award</h3>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Stethoscope className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Medical Excellence</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Certificates */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Certificates</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">NABH Accreditation</h3>
                <p className="text-muted-foreground">National Accreditation Board for Hospitals & Healthcare Providers</p>
              </div>
              
              <div className="bg-card rounded-lg p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">JCI Certification</h3>
                <p className="text-muted-foreground">Joint Commission International Quality & Safety Standards</p>
              </div>
              
              <div className="bg-card rounded-lg p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">ISO 9001:2015</h3>
                <p className="text-muted-foreground">International Quality Management System Certification</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" variant="outline">
                View All Certificates
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
