import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { roomsData } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Calendar, MapPin, Bed, Users, Shield, Wifi, Car, Coffee, Clock, Bath, Tv, AirVent } from "lucide-react";

export default function RoomDetail() {
  const { id } = useParams();
  const room = roomsData.find((x) => x.id === id);
  
  if (!room) return (
    <div className="container mx-auto py-16 text-center">
      <p className="mb-4">Room not found.</p>
      <Button asChild><Link to="/rooms">Back to Rooms</Link></Button>
    </div>
  );

  // Mock data for reviews and related rooms
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent room! Very clean and comfortable. The staff was very helpful and the amenities were great."
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg",
      rating: 4,
      date: "1 month ago",
      text: "Great experience overall. The room was spacious and well-maintained. Good value for money."
    },
    {
      id: 3,
      name: "Emily Davis",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "3 weeks ago",
      text: "Perfect stay! The room had all the amenities I needed and the location was convenient."
    }
  ];

  const relatedRooms = roomsData.filter(r => r.id !== room.id && r.type !== room.type);

  const renderStars = (rating: number, size = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
      />
    ));
  };

  const getAmenityIcon = (amenity: string) => {
    const icons: Record<string, any> = {
      "Attached bath": Bath,
      "TV": Tv,
      "AC": AirVent,
      "Visitor seating": Users,
      "Suite layout": Bed,
      "Recliner": Users,
      "Mini-fridge": Coffee,
      "City view": MapPin,
      "Monitors": Shield,
      "Central oxygen": Shield,
      "Strict infection control": Shield,
    };
    return icons[amenity] || Bed;
  };

  return (
    <>
      <Helmet>
        <title>{room.type} Room | Webquro</title>
        <meta name="description" content={`${room.type} room with amenities: ${room.amenities.join(', ')}`} />
        <link rel="canonical" href={`/rooms/${room.id}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Main Profile Section */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 mb-12">
            {/* Room Profile Card */}
            <Card className="h-fit">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={room.images[0]}
                    alt={`${room.type} room`}
                    className="w-full h-48 rounded-lg mx-auto mb-4 object-cover border-4 border-primary/10"
                  />
                  <h1 className="text-2xl font-bold mb-2">{room.type} Room</h1>
                  <p className="text-muted-foreground mb-3">Floor {room.floor} | Room #{room.id.toUpperCase()}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(4)}
                    </div>
                    <span className="font-semibold">4.5</span>
                    <span className="text-muted-foreground">(28 reviews)</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Badge variant={room.available ? "default" : "secondary"} className="text-lg px-4 py-2">
                        {room.available ? "Available" : "Occupied"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="text-xl font-bold text-blue-600">৳{room.pricePerDay}/day</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full" disabled={!room.available}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {room.available ? "Book This Room" : "Room Occupied"}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    View Floor Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="space-y-8">
              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Room</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {room.description} This {room.type.toLowerCase()} room is located on floor {room.floor} and offers excellent comfort and care for patients and their families.
                  </p>
                  
                  {/* Amenities Grid */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Room Amenities</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => {
                        const IconComponent = getAmenityIcon(amenity);
                        return (
                          <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                            <IconComponent className="w-4 h-4 text-primary" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">Floor {room.floor} - Webquro Medical Center</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">Family Visiting Hours: 8 AM - 8 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">24/7 Nursing Care Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm">Hospital Grade Sanitization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="pricing">
                      <AccordionTrigger>What's included in the room rate?</AccordionTrigger>
                      <AccordionContent>
                        The room rate includes basic accommodation, daily housekeeping, nursing care, and all listed amenities. Medical treatments and medications are charged separately.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="visitors">
                      <AccordionTrigger>What are the visitor policies?</AccordionTrigger>
                      <AccordionContent>
                        Visitors are allowed from 8 AM to 8 PM. A maximum of 2 visitors are allowed at a time. All visitors must register at the reception and follow hospital guidelines.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="booking">
                      <AccordionTrigger>How can I book this room?</AccordionTrigger>
                      <AccordionContent>
                        You can book the room through our online booking system, by calling our helpline, or by visiting the hospital reception. Advance booking is recommended.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cancellation">
                      <AccordionTrigger>What is the cancellation policy?</AccordionTrigger>
                      <AccordionContent>
                        Cancellations made 24 hours before the scheduled date are eligible for a full refund. Cancellations within 24 hours may be subject to charges.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Guest Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                {/* Overall Rating */}
                <div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">4.5</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {renderStars(4, "w-5 h-5")}
                    </div>
                    <p className="text-muted-foreground">Based on 28 reviews</p>
                  </div>

                  {/* Rating Bars */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Comfort</span>
                      <Progress value={90} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Cleanliness</span>
                      <Progress value={95} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Staff</span>
                      <Progress value={88} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.4</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Value</span>
                      <Progress value={85} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Location</span>
                      <Progress value={92} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.6</span>
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h5 className="font-semibold">{review.name}</h5>
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Rooms Section */}
          {relatedRooms.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">OTHER AVAILABLE ROOMS</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {relatedRooms.map((relatedRoom) => (
                      <CarouselItem key={relatedRoom.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <Link to={`/rooms/${relatedRoom.id}`} className="block">
                          <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="relative mb-4">
                              <img
                                src={relatedRoom.images[0]}
                                alt={relatedRoom.type}
                                className="w-24 h-24 rounded-lg mx-auto object-cover border-4 border-background shadow-lg"
                              />
                              <Badge 
                                variant={relatedRoom.available ? "default" : "secondary"} 
                                className="absolute -top-2 -right-2 text-xs"
                              >
                                {relatedRoom.available ? "Available" : "Occupied"}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-base mb-2 text-foreground">{relatedRoom.type} Room</h4>
                            <p className="text-sm text-muted-foreground mb-3">Floor {relatedRoom.floor}</p>
                            <div className="flex items-center justify-center gap-1 mb-2">
                              {renderStars(4)}
                              <span className="text-sm ml-1 font-medium">4.5</span>
                            </div>
                            <p className="text-sm font-bold text-primary">৳{relatedRoom.pricePerDay}/day</p>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
