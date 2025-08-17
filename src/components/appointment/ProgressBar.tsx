import React from 'react';
import { Check, Calendar, Heart, Clock, User, CheckCircle } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { id: 1, title: 'Service', icon: Heart },
  { id: 2, title: 'Doctor', icon: Calendar },
  { id: 3, title: 'Time', icon: Clock },
  { id: 4, title: 'Profile', icon: User },
  { id: 5, title: 'Confirm', icon: CheckCircle },
];

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full">
      {/* Simple progress bar */}
      <div className="relative mb-6">
        <div className="h-2 bg-secondary rounded-full">
          <div 
            className="h-2 bg-gradient-medical rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Clean step indicators */}
      <div className="flex justify-between items-center">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const IconComponent = step.icon;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                ${isCompleted 
                  ? 'bg-gradient-success text-white' 
                  : isActive
                    ? 'bg-gradient-medical text-white'
                    : 'bg-secondary text-muted-foreground'
                }
              `}>
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <IconComponent className="h-5 w-5" />
                )}
              </div>
              <span className={`
                text-xs font-medium mt-2 transition-colors duration-300
                ${isActive ? 'text-primary' : isCompleted ? 'text-medical-success' : 'text-muted-foreground'}
              `}>
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};