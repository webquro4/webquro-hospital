import React, { useState } from 'react';
import { Star, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  price: number;
  avatar: string;
  initials: string;
  available: boolean;
}

interface DoctorSelectionProps {
  selectedDoctor: string | null;
  onSelectDoctor: (doctorId: string) => void;
  serviceType?: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: '12 years',
    rating: 4.9,
    price: 150,
    avatar: '',
    initials: 'SJ',
    available: true
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: '8 years',
    rating: 4.8,
    price: 180,
    avatar: '',
    initials: 'MC',
    available: true
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: '10 years',
    rating: 4.9,
    price: 130,
    avatar: '',
    initials: 'ER',
    available: true
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    experience: '15 years',
    rating: 4.7,
    price: 200,
    avatar: '',
    initials: 'JW',
    available: false
  },
  {
    id: '5',
    name: 'Dr. Lisa Park',
    specialty: 'Ophthalmologist',
    experience: '6 years',
    rating: 4.8,
    price: 140,
    avatar: '',
    initials: 'LP',
    available: true
  },
  {
    id: '6',
    name: 'Dr. David Kumar',
    specialty: 'General Practitioner',
    experience: '20 years',
    rating: 4.9,
    price: 100,
    avatar: '',
    initials: 'DK',
    available: true
  }
];

export const DoctorSelection: React.FC<DoctorSelectionProps> = ({
  selectedDoctor,
  onSelectDoctor,
  serviceType
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-3 w-3 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Doctor</h2>
        <p className="text-muted-foreground">Select from our qualified medical professionals</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search doctors by name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
        {filteredDoctors.map((doctor) => {
          const isSelected = selectedDoctor === doctor.id;
          
          return (
            <Card
              key={doctor.id}
              className={`
                cursor-pointer transition-all duration-300 hover:shadow-medical
                ${isSelected 
                  ? 'border-primary shadow-glow bg-primary/5' 
                  : 'border-border hover:border-primary/50'
                }
                ${!doctor.available ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              onClick={() => doctor.available && onSelectDoctor(doctor.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={doctor.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {doctor.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground truncate">
                          {doctor.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {doctor.specialty}
                        </Badge>
                      </div>
                      {!doctor.available && (
                        <Badge variant="destructive" className="text-xs">
                          Unavailable
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {renderStars(doctor.rating)}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {doctor.rating}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {doctor.experience} experience
                      </span>
                      <span className="text-lg font-bold text-primary">
                        ${doctor.price}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No doctors found matching your search.</p>
        </div>
      )}
    </div>
  );
};