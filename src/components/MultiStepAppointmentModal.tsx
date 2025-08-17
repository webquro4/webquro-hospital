
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressBar } from './appointment/ProgressBar';
import { ServiceSelection } from './appointment/ServiceSelection';
import { DoctorSelection } from './appointment/DoctorSelection';
import { TimeSlotSelection } from './appointment/TimeSlotSelection';
import { PatientProfile } from './appointment/PatientProfile';
import { AppointmentConfirmation } from './appointment/AppointmentConfirmation';

interface MultiStepAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data for demonstration
const doctorsData = {
  '1': { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', initials: 'SJ', price: 150 },
  '2': { name: 'Dr. Michael Chen', specialty: 'Neurologist', initials: 'MC', price: 180 },
  '3': { name: 'Dr. Emily Rodriguez', specialty: 'Pediatrician', initials: 'ER', price: 130 },
  '4': { name: 'Dr. James Wilson', specialty: 'Orthopedic Surgeon', initials: 'JW', price: 200 },
  '5': { name: 'Dr. Lisa Park', specialty: 'Ophthalmologist', initials: 'LP', price: 140 },
  '6': { name: 'Dr. David Kumar', specialty: 'General Practitioner', initials: 'DK', price: 100 },
};

const servicesData = {
  'cardiology': 'Cardiology',
  'neurology': 'Neurology', 
  'pediatrics': 'Pediatrics',
  'general': 'General Checkup',
  'ophthalmology': 'Ophthalmology',
  'orthopedics': 'Orthopedics',
  'pharmacy': 'Pharmacy',
  'emergency': 'Emergency'
};

export const MultiStepAppointmentModal: React.FC<MultiStepAppointmentModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientData, setPatientData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    medicalHistory: ''
  });

  if (!isOpen) return null;

  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleClose = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
    setIsLoggedIn(false);
    setPatientData({
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      medicalHistory: ''
    });
    onClose();
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedDoctor !== null;
      case 3:
        return selectedDate !== '' && selectedTime !== '';
      case 4:
        return isLoggedIn && patientData.name && patientData.email && patientData.phone;
      default:
        return true;
    }
  };

  const getAppointmentData = () => {
    const doctor = selectedDoctor ? doctorsData[selectedDoctor as keyof typeof doctorsData] : null;
    const service = selectedService ? servicesData[selectedService as keyof typeof servicesData] : '';
    
    return {
      service,
      doctorName: doctor?.name || '',
      doctorSpecialty: doctor?.specialty || '',
      doctorInitials: doctor?.initials || '',
      date: selectedDate,
      time: selectedTime,
      price: doctor?.price || 0,
      patientName: patientData.name
    };
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelection
            selectedService={selectedService}
            onSelectService={setSelectedService}
          />
        );
      case 2:
        return (
          <DoctorSelection
            selectedDoctor={selectedDoctor}
            onSelectDoctor={setSelectedDoctor}
            serviceType={selectedService || undefined}
          />
        );
      case 3:
        return (
          <TimeSlotSelection
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelectDate={setSelectedDate}
            onSelectTime={setSelectedTime}
          />
        );
      case 4:
        return (
          <PatientProfile
            patientData={patientData}
            onUpdatePatientData={setPatientData}
            isLoggedIn={isLoggedIn}
            onLogin={handleLogin}
          />
        );
      case 5:
        return (
          <AppointmentConfirmation
            appointmentData={getAppointmentData()}
            onViewAppointment={() => {}}
            onClose={handleClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="inset-0 z-50 flex items-center justify-center p-4">
      {/* Simple backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={handleClose}
      />
      
      {/* Clean modal */}
      <div className="relative w-full max-w-3xl max-h-[100vh] bg-background rounded-2xl shadow-2xl overflow-hidden border flex flex-col mt-22">
        {/* Simple header */}
        <div className="flex items-center justify-between p-6 border-b bg-primary/5 flex-shrink-0">
          <h1 className="text-2xl font-bold text-foreground">Book Appointment</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress bar */}
        <div className="p-6 border-b bg-secondary/20 flex-shrink-0">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Content - with hidden scrollbar */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-6 mt-10">
          {renderStepContent()}
        </div>

        {/* Footer - Always show for steps 1-4 */}
        {currentStep < 5 && (
          <div className="flex justify-between p-6 border-t bg-secondary/20 flex-shrink-0">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={currentStep === 1}
              className="min-w-[100px]"
            >
              Back
            </Button>
            <Button 
              variant="default"
              onClick={handleNext}
              disabled={!canProceedToNext()}
              className="min-w-[100px]"
            >
              {currentStep === 4 ? 'Confirm' : 'Continue'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
