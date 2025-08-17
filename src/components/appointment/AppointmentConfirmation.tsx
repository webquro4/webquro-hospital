import React from 'react';
import { CheckCircle, Calendar, Clock, User, Heart, MapPin, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface AppointmentData {
  service: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorInitials: string;
  date: string;
  time: string;
  price: number;
  patientName: string;
}

interface AppointmentConfirmationProps {
  appointmentData: AppointmentData;
  onViewAppointment: () => void;
  onClose: () => void;
}

export const AppointmentConfirmation: React.FC<AppointmentConfirmationProps> = ({
  appointmentData,
  onViewAppointment,
  onClose
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6 text-center">
      {/* Simple success */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Appointment Confirmed!
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Your appointment has been successfully booked
        </p>
      </div>

      {/* Appointment Details Card */}
      <Card className="text-left max-w-md mx-auto border-primary/20 bg-primary/5">
        <CardContent className="p-6 space-y-6">
          <div className="text-center border-b border-border pb-4">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              Appointment Details
            </h3>
            <Badge variant="secondary" className="bg-medical-success/10 text-medical-success">
              Confirmed
            </Badge>
          </div>

          {/* Service */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Service</p>
              <p className="font-semibold text-foreground">{appointmentData.service}</p>
            </div>
          </div>

          {/* Doctor */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {appointmentData.doctorInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Doctor</p>
              <p className="font-semibold text-foreground">{appointmentData.doctorName}</p>
              <p className="text-sm text-muted-foreground">{appointmentData.doctorSpecialty}</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="text-sm font-medium">{formatDate(appointmentData.date)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="text-sm font-medium">{appointmentData.time}</p>
              </div>
            </div>
          </div>

          {/* Patient */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Patient</p>
              <p className="font-semibold text-foreground">{appointmentData.patientName}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold text-foreground">Webquro Hospital</p>
              <p className="text-sm text-muted-foreground">Main Building, Floor 2</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Consultation Fee</span>
            </div>
            <span className="text-2xl font-bold text-primary">${appointmentData.price}</span>
          </div>
        </CardContent>
      </Card>

      {/* Simple action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="default" onClick={onViewAppointment} className="min-w-[160px]">
          View Appointment
        </Button>
        <Button variant="outline" onClick={onClose} className="min-w-[160px]">
          Close
        </Button>
      </div>

      {/* Simple info */}
      <div className="text-center pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">
          A confirmation email has been sent to your registered email address.
        </p>
        <p className="text-xs text-muted-foreground">
          Please arrive 15 minutes before your appointment time.
        </p>
      </div>
    </div>
  );
};