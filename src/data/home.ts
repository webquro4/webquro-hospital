export type Service = { id: string; title: string; description: string };
export type Doctor = { id: string; name: string; specialty: string; rating: number; experience: string; language: string };
export type Testimonial = { id: string; name: string; rating: number; quote: string };

export const stats = [
  { id: "doctors", label: "Expert Doctors", value: 1200 },
  { id: "patients", label: "Patients Served", value: 250000 },
  { id: "years", label: "Years of Service", value: 35 },
  { id: "beds", label: "Beds Available", value: 850 },
];

export const services: Service[] = [
  { id: "cardiology", title: "Cardiology", description: "Advanced heart care, from diagnosis to surgery." },
  { id: "neurology", title: "Neurology", description: "Brain, spine and nerve disorders care." },
  { id: "orthopedics", title: "Orthopedics", description: "Joint replacement, sports injuries and trauma." },
  { id: "pediatrics", title: "Pediatrics", description: "Comprehensive care for infants and children." },
  { id: "oncology", title: "Oncology", description: "Personalized cancer diagnosis and treatment." },
  { id: "gynecology", title: "Gynecology", description: "Women’s health and maternity care." },
  { id: "gastro", title: "Gastroenterology", description: "Digestive system and liver treatments." },
  { id: "emergency", title: "Emergency", description: "24x7 critical care and rapid response." },
  { id: "urology", title: "Urology", description: "Kidney and urinary tract treatments." },
  { id: "ent", title: "ENT", description: "Ear, nose and throat procedures." },
  { id: "derma", title: "Dermatology", description: "Skin, hair and nail treatments." },
  { id: "endocrine", title: "Endocrinology", description: "Diabetes and hormone disorders." },
];

export const doctors: Doctor[] = [
  { id: "d1", name: "Dr. Ayesha Rao", specialty: "Cardiology", rating: 4.9, experience: "15+ yrs", language: "English, Hindi" },
  { id: "d2", name: "Dr. Karan Shah", specialty: "Orthopedics", rating: 4.8, experience: "13+ yrs", language: "English, Gujarati" },
  { id: "d3", name: "Dr. Neha Mehta", specialty: "Neurology", rating: 4.7, experience: "12+ yrs", language: "English, Hindi" },
  { id: "d4", name: "Dr. Rohan Iyer", specialty: "Oncology", rating: 4.9, experience: "16+ yrs", language: "English, Marathi" },
  { id: "d5", name: "Dr. Sara Pillai", specialty: "Pediatrics", rating: 4.8, experience: "10+ yrs", language: "English, Malayalam" },
  { id: "d6", name: "Dr. Vikram S", specialty: "Gastroenterology", rating: 4.7, experience: "11+ yrs", language: "English, Tamil" },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "A. Kumar", rating: 5, quote: "Exceptional care! The doctors and nurses were compassionate and professional throughout my surgery." },
  { id: "t2", name: "S. Nair", rating: 5, quote: "State-of-the-art facilities and a team that truly listens. Highly recommended." },
  { id: "t3", name: "R. Singh", rating: 4, quote: "Smooth experience from admission to discharge. Great post-op follow-up." },
];

export const blogs = [
  { id: "b1", title: "5 Heart Health Tips for Busy Professionals", image: "/placeholder.svg", excerpt: "Small lifestyle changes that go a long way for your heart." },
  { id: "b2", title: "Understanding Childhood Immunizations", image: "/placeholder.svg", excerpt: "A parent’s guide to vaccines and schedules." },
  { id: "b3", title: "Recovering After Joint Replacement", image: "/placeholder.svg", excerpt: "Physiotherapy milestones and home care." },
];
