import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) return (
    <div className="container mx-auto py-16 text-center">
      <p className="mb-4">Service not found.</p>
      <Button asChild><Link to="/services">Back to Services</Link></Button>
    </div>
  );

  const specialists = doctorsData.filter((d) => [service.category, service.title].includes(d.specialty));

  return (
    <>
      <Helmet>
        <title>{service.title} | Webquro Service Details</title>
        <meta name="description" content={`${service.title} at Webquro: ${service.description}`} />
        <link rel="canonical" href={`/services/${service.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What treatments are available in ${service.title}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${service.title} at Webquro offers advanced diagnostics and evidence-based treatments.`,
                },
              },
              {
                "@type": "Question",
                name: `How do I prepare for a ${service.title} appointment?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bring previous reports and medication list; follow fasting instructions if advised.",
                },
              },
              {
                "@type": "Question",
                name: "How soon can I get an appointment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Same-day and next-day slots are often available. Use the Book Appointment button.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
          <p className="text-muted-foreground max-w-3xl">{service.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 flex flex-col gap-4 md:mr-6">
            {service.gallery?.length ? service.gallery.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${service.title} facility image ${idx + 1}`}
                className="w-full h-60 object-cover rounded-xl border hover-scale"
                loading="lazy"
              />
            )) : (
              <img src={service.image} alt={`${service.title} facility`} className="w-full h-60 object-cover rounded-xl border" />
            )}
          </div>
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-3">About this service</h2>
            <p className="text-muted-foreground mb-6">{service.full}</p>

            <section className="grid md:grid-cols-2 gap-6 mb-8">
              <article>
                <h3 className="text-lg font-semibold mb-2">Key treatments & procedures</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Advanced diagnostics and imaging tailored to {service.title}</li>
                  <li>Minimally invasive procedures and day-care options</li>
                  <li>Personalized rehab and follow-up programs</li>
                </ul>
              </article>
              <article>
                <h3 className="text-lg font-semibold mb-2">Conditions we treat</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Common and complex {service.title.toLowerCase()} cases</li>
                  <li>Preventive care and long-term management</li>
                  <li>Rapid-response pathways for emergencies</li>
                </ul>
              </article>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Benefits of choosing Webquro</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Board-certified specialists and multidisciplinary team</li>
                <li>Modern facilities with evidence-based protocols</li>
                <li>Transparent, patient-first care with clear communication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Preparation, risks & recovery</h3>
              <p className="text-muted-foreground mb-2">Your care team shares personalized preparation steps, discusses potential risks, and provides recovery milestones.</p>
              <p className="text-muted-foreground">We focus on comfort, early mobility, and safe discharge planning with clear home-care guidance.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-2">FAQs</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>What tests are commonly done in {service.title}?</AccordionTrigger>
                  <AccordionContent>Typical evaluations include advanced labs and imaging; your doctor will recommend the right set for you.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger>Do I need a referral to book an appointment?</AccordionTrigger>
                  <AccordionContent>No referral is required; you can book directly or call our helpline for assistance.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger>How should I prepare before my visit?</AccordionTrigger>
                  <AccordionContent>Carry prior reports and medication lists; fasting may be needed for specific tests—we'll inform you beforehand.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <div className="flex gap-3">
              <Button asChild variant="default"><Link to="/login">Book Appointment</Link></Button>
              <Button asChild variant="outline"><Link to="/doctors">Find Specialists</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Facility & Equipment</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {(service.equipmentImages?.length ? service.equipmentImages : service.gallery ?? [service.image]).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${service.title} equipment angle ${i + 1}`}
                className="w-60 h-48 flex-shrink-0 object-cover rounded-lg border hover-scale"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Doctors in this service</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {specialists.length ? specialists.map((doc) => (
              <article key={doc.id} className="rounded-xl border p-4">
                <img src={doc.image} alt={`${doc.name} - ${doc.specialty}`} className="w-full h-40 object-cover rounded-md mb-3" loading="lazy" />
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-muted-foreground text-sm">{doc.specialty} • {doc.experience} • ★ {doc.rating}</p>
                <div className="mt-3">
                  <Button asChild size="sm" variant="default"><Link to="/doctors">View Profile</Link></Button>
                </div>
              </article>
            )) : (
              <p className="text-muted-foreground">No specialists listed yet.</p>
            )}
          </div>
        </div>
      </section>

    </>
  );
}
