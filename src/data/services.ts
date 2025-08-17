import facilityImaging from "@/assets/facility-imaging.jpg";
import facilityOR from "@/assets/facility-or.jpg";
import facilityRoom from "@/assets/facility-room.jpg";

export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  full: string;
  gallery?: string[];
  equipmentImages?: string[];
};

export const serviceCategories = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Oncology",
  "Pediatrics",
  "Gastroenterology",
  "Dermatology",
  "Emergency",
];

export const servicesData: ServiceDetail[] = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Advanced heart diagnostics, angioplasty, bypass surgery.",
    category: "Cardiology",
    image: facilityImaging,
    full:
      "Our Cardiology Center offers comprehensive cardiac care including preventive screenings, interventional cardiology (angioplasty, stenting), cardiac surgery, heart failure management, and cardiac rehab programs.",
    gallery: [facilityImaging, facilityOR, facilityRoom],
    equipmentImages: [facilityImaging, facilityOR],
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Brain, spine, and nerve disorder treatments.",
    category: "Neurology",
    image: "/placeholder.svg",
    full:
      "Neurology services include stroke care, epilepsy management, neuromuscular disorder clinics, and advanced neuroimaging. Multidisciplinary neuro-rehab available.",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Joint replacement, sports injuries, trauma care.",
    category: "Orthopedics",
    image: "/placeholder.svg",
    full:
      "We specialize in knee/hip replacements, arthroscopy, spine surgery, and sports injury management. Dedicated physiotherapy and recovery programs.",
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Personalized cancer care across specialties.",
    category: "Oncology",
    image: "/placeholder.svg",
    full:
      "Our Oncology Institute provides medical, surgical, and radiation oncology with tumor boards, day-care chemo, targeted and immunotherapies, and survivorship clinics.",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Comprehensive care for infants and children.",
    category: "Pediatrics",
    image: "/placeholder.svg",
    full:
      "Well-baby clinics, immunizations, pediatric ICU, neonatal care, pediatric surgeries, and developmental pediatrics under one roof.",
  },
  {
    id: "gastro",
    title: "Gastroenterology",
    description: "Digestive and liver disease management.",
    category: "Gastroenterology",
    image: "/placeholder.svg",
    full:
      "Endoscopy, ERCP, liver clinics, IBD management, and minimally invasive GI surgeries with advanced imaging.",
  },
  {
    id: "derma",
    title: "Dermatology",
    description: "Skin, hair and nail treatments.",
    category: "Dermatology",
    image: "/placeholder.svg",
    full:
      "Clinical and cosmetic dermatology including acne, psoriasis, vitiligo clinics, hair restoration, and laser therapies.",
  },
  {
    id: "emergency",
    title: "Emergency",
    description: "24x7 trauma and critical care.",
    category: "Emergency",
    image: "/placeholder.svg",
    full:
      "Round-the-clock emergency with red/amber triage, cardiac and stroke pathways, and rapid imaging and surgical backup.",
  },
];
