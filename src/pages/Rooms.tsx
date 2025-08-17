import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { roomsData } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bed, Building2, CheckCircle2, XCircle } from "lucide-react";

export default function Rooms(){
  const [roomTypes, setRoomTypes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [availabilities, setAvailabilities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("type");

  const list = useMemo(()=>{
    let filtered = roomsData.filter((r)=>{
      if(roomTypes.length > 0 && !roomTypes.includes(r.type)) return false;
      if(availabilities.length > 0 && !availabilities.includes(r.available ? "Available" : "Unavailable")) return false;
      if(r.pricePerDay > maxPrice) return false;
      return true;
    });

    // Sort the filtered results
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "type":
          return a.type.localeCompare(b.type);
        case "price":
          return a.pricePerDay - b.pricePerDay; // Lower price first
        case "floor":
          return a.floor - b.floor; // Lower floor first
        case "availability":
          return Number(b.available) - Number(a.available); // Available first
        default:
          return 0;
      }
    });
  },[roomTypes, maxPrice, availabilities, sortBy]);

  return (
    <>
      <Helmet>
        <title>Rooms & Tariff | Webquro Hospital</title>
        <meta name="description" content="Browse room types, amenities, and prices. Filter by availability and book your room at Webquro." />
        <link rel="canonical" href="/rooms" />
      </Helmet>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Rooms</h1>
          <p className="text-muted-foreground">Comfortable, hygienic rooms with modern amenities.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-[260px_1fr] gap-8">
          <aside className="md:sticky md:top-20 h-max border rounded-xl p-4 bg-card">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Room Type</label>
                <div className="space-y-2">
                  {["General", "Semi-Private", "Private", "Deluxe", "ICU"].map((roomType) => (
                    <div key={roomType} className="flex items-center space-x-2">
                      <Checkbox 
                        id={roomType}
                        checked={roomTypes.includes(roomType)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setRoomTypes([...roomTypes, roomType]);
                          } else {
                            setRoomTypes(roomTypes.filter(t => t !== roomType));
                          }
                        }}
                      />
                      <label htmlFor={roomType} className="text-sm cursor-pointer">{roomType}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Max Price / day: ${maxPrice}</label>
                <input type="range" min={100} max={1000} step={50} value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className="w-full mt-2" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-3 block">Availability</label>
                <div className="space-y-2">
                  {['Available', 'Unavailable'].map((avail) => (
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
            </div>
          </aside>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">{list.length} rooms</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type">Type</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="floor">Floor</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((r)=>(
                <Card key={r.id} className="group overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                  <div className="relative">
                    <img src={r.images[0]} alt={`${r.type} room at Webquro`} loading="lazy" className="w-full h-44 object-cover" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {r.available ? <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> : <XCircle className="h-3.5 w-3.5" />}
                        {r.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full bg-background/90 border px-3 py-1 text-sm font-medium">
                      ${r.pricePerDay}/day
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h2 className="font-semibold flex items-center gap-2"><Bed className="h-4 w-4" /> {r.type}</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-2"><Building2 className="h-4 w-4" /> Floor {r.floor}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.amenities.slice(0,3).map(a => <Badge key={a} variant="outline">{a}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 flex gap-2">
                    <Button asChild variant="secondary"><Link to={`/rooms/${r.id}`}>View Details</Link></Button>
                    <Button asChild variant="default"><Link to="/login">Book</Link></Button>
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
