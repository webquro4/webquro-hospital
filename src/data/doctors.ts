import doctorAyeshaRao from "@/assets/doctor-ayesha-rao.jpg";
import doctorKaranShah from "@/assets/doctor-karan-shah.jpg";
import doctorNehaMehta from "@/assets/doctor-neha-mehta.jpg";
import doctorRohanIyer from "@/assets/doctor-rohan-iyer.jpg";

export type DoctorEx = {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  language: string;
  availability: "Today" | "Tomorrow" | "This Week";
  image: string;
  bio: string;
};

export const doctorSpecialties = [
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Oncology",
  "Pediatrics",
  "Gastroenterology",
];

export const doctorsData: DoctorEx[] = [
  {
    id: "d1",
    name: "Dr. Ayesha Rao",
    specialty: "Cardiology",
    rating: 4.9,
    experience: "15+ yrs",
    language: "English, Hindi",
    availability: "Today",
    image: doctorAyeshaRao,
    bio: "Interventional cardiologist specializing in complex angioplasties and heart failure care.",
  },
  {
    id: "d2",
    name: "Dr. Karan Shah",
    specialty: "Orthopedics",
    rating: 4.8,
    experience: "13+ yrs",
    language: "English, Gujarati",
    availability: "Tomorrow",
    image: doctorKaranShah,
    bio: "Joint replacement and sports injury surgeon with expertise in arthroscopy.",
  },
  {
    id: "d3",
    name: "Dr. Neha Mehta",
    specialty: "Neurology",
    rating: 4.7,
    experience: "12+ yrs",
    language: "English, Hindi",
    availability: "This Week",
    image: doctorNehaMehta,
    bio: "Neurologist focusing on stroke, epilepsy, and neuroimmunology.",
  },
  {
    id: "d4",
    name: "Dr. Rohan Iyer",
    specialty: "Oncology",
    rating: 4.9,
    experience: "16+ yrs",
    language: "English, Marathi",
    availability: "Today",
    image: doctorRohanIyer,
    bio: "Medical oncologist with interest in immunotherapy and precision medicine.",
  },
];
