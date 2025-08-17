import roomPrivate from "@/assets/room-private.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomIcu from "@/assets/room-icu.jpg";
import roomGeneral from "@/assets/room-general.jpg";
import roomSemiPrivate from "@/assets/room-semi-private.jpg";

export type Room = {
  id: string;
  type: "General" | "Semi-Private" | "Private" | "Deluxe" | "ICU";
  pricePerDay: number;
  floor: number;
  available: boolean;
  amenities: string[];
  images: string[];
  description: string;
};

export const roomTypes = ["General", "Semi-Private", "Private", "Deluxe", "ICU"] as const;

export const roomsData: Room[] = [
  {
    id: "r1",
    type: "Private",
    pricePerDay: 250,
    floor: 3,
    available: true,
    amenities: ["Attached bath", "TV", "AC", "Visitor seating"],
    images: [roomPrivate],
    description: "Comfortable private room ideal for longer stays with privacy.",
  },
  {
    id: "r2",
    type: "Deluxe",
    pricePerDay: 400,
    floor: 5,
    available: false,
    amenities: ["Suite layout", "Recliner", "Mini-fridge", "City view"],
    images: [roomDeluxe],
    description: "Premium suite with upscale amenities and enhanced comfort.",
  },
  {
    id: "r3",
    type: "ICU",
    pricePerDay: 600,
    floor: 2,
    available: true,
    amenities: ["Monitors", "Central oxygen", "Strict infection control"],
    images: [roomIcu],
    description: "Intensive care unit with round-the-clock monitoring.",
  },
  {
    id: "r4",
    type: "General",
    pricePerDay: 150,
    floor: 1,
    available: true,
    amenities: ["Shared bath", "Basic furniture", "Fan"],
    images: [roomGeneral],
    description: "Standard room with essential amenities for short-term stays.",
  },
  {
    id: "r5",
    type: "Semi-Private",
    pricePerDay: 200,
    floor: 2,
    available: true,
    amenities: ["Shared room", "TV", "AC", "Two beds"],
    images: [roomSemiPrivate],
    description: "Shared room with another patient, cost-effective option.",
  },
];
