import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { doctorsData, doctorSpecialties } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Languages, CalendarDays } from "lucide-react";

export default function Doctors() {
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [availabilities, setAvailabilities] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const list = useMemo(() => {
    let filtered = doctorsData.filter((d) => {
      if (specialties.length > 0 && !specialties.includes(d.specialty)) return false;
      if (availabilities.length > 0 && !availabilities.includes(d.availability)) return false;
      if (d.rating < minRating) return false;
      if (q.trim() && !(d.name + d.language + d.bio).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });

    // Sort the filtered results
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating; // Higher ratings first
        case "experience":
          return parseInt(b.experience) - parseInt(a.experience); // More experience first
        case "availability":
          const availOrder = ["Today", "Tomorrow", "This Week"];
          return availOrder.indexOf(a.availability) - availOrder.indexOf(b.availability);
        default:
          return 0;
      }
    });
  }, [specialties, availabilities, minRating, q, sortBy]);

  return (
    <>
      <Helmet>
        <title>Find a Doctor | Webquro Specialists & Surgeons</title>
        <meta name="description" content="Browse Webquro doctors by department, experience, language, rating, and availability. Book appointments online." />
        <link rel="canonical" href="/doctors" />
      </Helmet>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Find a Doctor</h1>
          <p className="text-muted-foreground">Top-rated specialists across departments.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar Filters */}
          <aside className="md:sticky md:top-20 h-max border rounded-xl p-4 bg-card">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Department</label>
                <div className="space-y-2">
                  {doctorSpecialties.map((dept) => (
                    <div key={dept} className="flex items-center space-x-2">
                      <Checkbox 
                        id={dept}
                        checked={specialties.includes(dept)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSpecialties([...specialties, dept]);
                          } else {
                            setSpecialties(specialties.filter(s => s !== dept));
                          }
                        }}
                      />
                      <label htmlFor={dept} className="text-sm cursor-pointer">{dept}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-3 block">Availability</label>
                <div className="space-y-2">
                  {['Today', 'Tomorrow', 'This Week'].map((avail) => (
                    <div key={avail} className="flex items-center space-x-2">
                      <Checkbox 
                        id={avail}
                        checked={availabilities.includes(avail)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setAvailabilities([...availabilities, avail]);
                          } else {
                            setAvailabilities(availabilities.filter(a => a !== avail));
                          }
                        }}
                      />
                      <label htmlFor={avail} className="text-sm cursor-pointer">{avail}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Minimum Rating: {minRating.toFixed(1)}</label>
                <input type="range" min={0} max={5} step={0.5} value={minRating} onChange={(e)=>setMinRating(Number(e.target.value))} className="w-full mt-2" />
              </div>
              
              <div>
                <label className="text-sm font-medium">Search</label>
                <input className="w-full h-10 rounded-md border px-3 bg-background mt-2" placeholder="Name, language..." value={q} onChange={(e)=>setQ(e.target.value)} />
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">{list.length} doctors</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="experience">Experience</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((d)=> (
                <Card key={d.id} className="group overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                  <div className="relative">
                    <img src={d.image} alt={`${d.name} portrait at Webquro`} loading="lazy" className="w-full h-44 object-cover" />
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-xs">
                      <Star className="h-3.5 w-3.5 text-primary" />
                      <span className="font-medium">{d.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h2 className="font-semibold">{d.name}</h2>
                    <p className="text-sm text-muted-foreground">{d.specialty} • {d.experience}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1"><Languages className="h-3.5 w-3.5" /> {d.language}</Badge>
                      <Badge className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {d.availability}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex gap-2">
                    <Button asChild variant="secondary"><Link to={`/doctors/${d.id}`}>View Profile</Link></Button>
                    <Button asChild variant="default"><Link to="/login">Book Now</Link></Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
