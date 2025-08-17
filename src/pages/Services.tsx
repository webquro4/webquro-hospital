import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { servicesData, serviceCategories } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const [category, setCategory] = useState<string>("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    let arr = servicesData;
    if (category !== "All") arr = arr.filter((s) => s.category === category);
    if (q.trim()) arr = arr.filter((s) => (s.title + s.description + s.full).toLowerCase().includes(q.toLowerCase()));
    return arr;
  }, [category, q]);

  return (
    <>
      <Helmet>
        <title>Hospital Services | Webquro Centers of Excellence</title>
        <meta name="description" content="Explore Webquro services: cardiology, neurology, orthopedics, oncology, pediatrics and more. Filter and learn more." />
        <link rel="canonical" href="/services" />
      </Helmet>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-muted-foreground">Find care across specialties and book appointments.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-3">
              <select className="h-11 rounded-md border px-3 bg-background" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>All</option>
                {serviceCategories.map((c) => <option key={c}>{c}</option>)}
              </select>
              <input className="h-11 rounded-md border px-3 bg-background" placeholder="Search services" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div className="text-sm text-muted-foreground">{list.length} results</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {list.map((s) => (
              <Card key={s.id} className="group overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                <div className="relative">
                  <img src={s.image} alt={`${s.title} service at Webquro`} loading="lazy" className="w-full h-36 object-cover" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary">{s.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h2 className="font-semibold mb-1">{s.title}</h2>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button asChild variant="link" className="px-0">
                    <Link to={`/services/${s.id}`}>Learn more →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
