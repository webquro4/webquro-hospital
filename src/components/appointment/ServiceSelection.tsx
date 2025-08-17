import React from 'react';
import { Heart, Brain, Baby, Stethoscope, Eye, Bone, Pill, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface ServiceSelectionProps {
  selectedService: string | null;
  onSelectService: (serviceId: string) => void;
}

const services: Service[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Heart and cardiovascular care',
    icon: Heart,
    color: 'text-red-500'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Brain and nervous system',
    icon: Brain,
    color: 'text-purple-500'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description: 'Child healthcare services',
    icon: Baby,
    color: 'text-blue-500'
  },
  {
    id: 'general',
    name: 'General Checkup',
    description: 'Routine health examination',
    icon: Stethoscope,
    color: 'text-green-500'
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    description: 'Eye care and vision',
    icon: Eye,
    color: 'text-indigo-500'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Bone and joint care',
    icon: Bone,
    color: 'text-orange-500'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    description: 'Medication consultation',
    icon: Pill,
    color: 'text-cyan-500'
  },
  {
    id: 'emergency',
    name: 'Emergency',
    description: 'Urgent medical care',
    icon: Activity,
    color: 'text-red-600'
  }
];

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  selectedService,
  onSelectService
}) => {
  return (
    <div className="space-y-6">
      {/* Simple header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose a Service</h2>
        <p className="text-muted-foreground">Select the medical service you need</p>
      </div>

      {/* Clean service grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service) => {
          const IconComponent = service.icon;
          const isSelected = selectedService === service.id;

          return (
            <Card
              key={service.id}
              className={`
                cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105
                ${isSelected 
                  ? 'border-primary shadow-md bg-primary/5' 
                  : 'border-border hover:border-primary/50'
                }
              `}
              onClick={() => onSelectService(service.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`
                  w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center
                  ${isSelected ? 'bg-gradient-medical' : 'bg-secondary'}
                  transition-all duration-300
                `}>
                  <IconComponent 
                    className={`h-6 w-6 ${isSelected ? 'text-white' : service.color}`}
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};