import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Phone, Calendar, MapPin, Award, Users, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react";

export default function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctorsData.find((x) => x.id === id);
  
  if (!doctor) return (
    <div className="container mx-auto py-16 text-center">
      <p className="mb-4">Doctor not found.</p>
      <Button asChild><Link to="/doctors">Back to Doctors</Link></Button>
    </div>
  );

  // Mock data for reviews and related doctors
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent doctor! Very professional and took time to explain everything clearly. Highly recommend."
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg",
      rating: 4,
      date: "1 month ago",
      text: "Great experience overall. The consultation was thorough and the treatment plan was effective."
    },
    {
      id: 3,
      name: "Emily Davis",
      avatar: "/placeholder.svg",
      rating: 5,
      date: "3 weeks ago",
      text: "Dr. was very caring and attentive. The staff was also very helpful and professional."
    }
  ];

  const relatedDoctors = doctorsData.filter(d => d.id !== doctor.id && d.specialty === doctor.specialty);

  const ratingDistribution = [
    { stars: 5, count: 128, percentage: 80 },
    { stars: 4, count: 24, percentage: 15 },
    { stars: 3, count: 5, percentage: 3 },
    { stars: 2, count: 2, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 }
  ];

  const renderStars = (rating: number, size = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>{doctor.name} | {doctor.specialty} at Webquro</title>
        <meta name="description" content={`${doctor.name}, ${doctor.specialty}. ${doctor.bio}`} />
        <link rel="canonical" href={`/doctors/${doctor.id}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Main Profile Section */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 mb-12">
            {/* Doctor Profile Card */}
            <Card className="h-fit">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={doctor.image}
                    alt={`Dr. ${doctor.name}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/10"
                  />
                  <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
                  <p className="text-muted-foreground mb-3">MBBS | {doctor.specialty}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(Math.floor(doctor.rating))}
                    </div>
                    <span className="font-semibold">{doctor.rating}</span>
                    <span className="text-muted-foreground">(150 reviews)</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-lg font-medium text-foreground">{doctor.experience} Experience</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-xl font-bold text-blue-600">Call price: ৳500</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="space-y-8">
              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {doctor.bio} Dr. {doctor.name} practices at Webquro Medical College & Community Hospital and has extensive experience in treating complex cardiac conditions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">Webquro Medical Center</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">150+ Patients Treated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Available {doctor.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm">Verified Professional</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Points Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="experience">
                      <AccordionTrigger>What is Dr. {doctor.name}'s experience?</AccordionTrigger>
                      <AccordionContent>
                        Dr. {doctor.name} has {doctor.experience} of experience in {doctor.specialty}. They have successfully treated hundreds of patients and stay updated with the latest medical advancements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="consultation">
                      <AccordionTrigger>How much does a consultation cost?</AccordionTrigger>
                      <AccordionContent>
                        In-person consultation fees start at ৳800, while video consultations are available for ৳500. Follow-up appointments may have different pricing.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="booking">
                      <AccordionTrigger>How can I book an appointment?</AccordionTrigger>
                      <AccordionContent>
                        You can easily book an appointment using the "Book Appointment" button above, or call our helpline. Online booking is available 24/7.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="languages">
                      <AccordionTrigger>What languages does the doctor speak?</AccordionTrigger>
                      <AccordionContent>
                        Dr. {doctor.name} is fluent in {doctor.language}, ensuring clear communication with patients from diverse backgrounds.
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
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                {/* Overall Rating */}
                <div>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">{doctor.rating}</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {renderStars(Math.floor(doctor.rating), "w-5 h-5")}
                    </div>
                    <p className="text-muted-foreground">Based on 160 reviews</p>
                  </div>

                  {/* Rating Bars */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-12">Care</span>
                      <Progress value={95} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-12">Safety</span>
                      <Progress value={92} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.6</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-12">Staff</span>
                      <Progress value={88} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.4</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-12">Fees</span>
                      <Progress value={85} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-12">Location</span>
                      <Progress value={90} className="flex-1" />
                      <span className="text-sm text-muted-foreground">4.5</span>
                    </div>
                  </div>

                  {/* Rating Distribution */}
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold mb-3">Rating Distribution</h4>
                    <div className="space-y-2">
                      {ratingDistribution.map((item) => (
                        <div key={item.stars} className="flex items-center gap-2 text-sm">
                          <span className="w-6">{item.stars}★</span>
                          <Progress value={item.percentage} className="flex-1 h-2" />
                          <span className="w-8 text-muted-foreground">{item.count}</span>
                        </div>
                      ))}
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

          {/* Related Doctors Section */}
          {relatedDoctors.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">RELATED DOCTORS</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {relatedDoctors.map((relatedDoctor) => (
                      <CarouselItem key={relatedDoctor.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <Link to={`/doctors/${relatedDoctor.id}`} className="block">
                          <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="relative mb-4">
                              <img
                                src={relatedDoctor.image}
                                alt={relatedDoctor.name}
                                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-background shadow-lg"
                              />
                            </div>
                            <h4 className="font-semibold text-base mb-2 text-foreground">{relatedDoctor.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{relatedDoctor.specialty}</p>
                            <div className="flex items-center justify-center gap-1 mb-2">
                              {renderStars(Math.floor(relatedDoctor.rating))}
                              <span className="text-sm ml-1 font-medium">{relatedDoctor.rating}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{relatedDoctor.experience} Experience</p>
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