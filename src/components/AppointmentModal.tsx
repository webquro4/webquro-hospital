import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Heart, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  fee: number;
  avatar: string;
  initials: string;
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiology', fee: 150, avatar: '', initials: 'SJ' },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'Emergency Medicine', fee: 120, avatar: '', initials: 'MC' },
  { id: '3', name: 'Dr. Emily Rodriguez', specialty: 'Pediatrics', fee: 130, avatar: '', initials: 'ER' },
  { id: '4', name: 'Dr. James Wilson', specialty: 'Orthopedics', fee: 180, avatar: '', initials: 'JW' },
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirmAppointment = () => {
    setIsConfirming(true);
    // Simulate API call
    setTimeout(() => {
      setIsConfirming(false);
      setIsConfirmed(true);
      setTimeout(() => {
        setIsConfirmed(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  if (isConfirmed) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-backdrop-in" />
        <div className="relative bg-background rounded-2xl p-8 text-center shadow-modal animate-modal-in">
          <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Appointment Confirmed!</h3>
          <p className="text-muted-foreground">You will receive a confirmation email shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-backdrop-in" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl shadow-modal animate-modal-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 to-primary/10">
          <h2 className="text-2xl font-bold text-foreground">Book Appointment</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full hover:bg-primary/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6 space-y-8">
            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Patient Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientName">Patient Name</Label>
                  <Input id="patientName" placeholder="Enter patient name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input id="contactNumber" placeholder="Enter phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Enter age" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Doctor Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Doctor Selection
              </h3>
              <div className="space-y-2">
                <Label htmlFor="doctor">Choose Doctor</Label>
                <Select onValueChange={(value) => {
                  const doctor = doctors.find(d => d.id === value);
                  setSelectedDoctor(doctor || null);
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={doctor.avatar} />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {doctor.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{doctor.name}</div>
                            <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedDoctor && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={selectedDoctor.avatar} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {selectedDoctor.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{selectedDoctor.name}</h4>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {selectedDoctor.specialty}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Consultation Fee</div>
                        <div className="text-xl font-bold text-primary">${selectedDoctor.fee}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Appointment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Appointment Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="appointmentDate">Appointment Date</Label>
                  <Input 
                    id="appointmentDate" 
                    type="date" 
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="appointmentType">Appointment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-person">In-Person Consultation</SelectItem>
                      <SelectItem value="video-call">Video Call Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Available Time Slots
                </Label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={selectedTimeSlot === slot ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className="h-10"
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes/Reason for Appointment</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Describe your symptoms or reason for visit..." 
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Payment Information */}
            {selectedDoctor && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Information
                </h3>
                
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-foreground">Consultation Fee:</span>
                      <span className="text-2xl font-bold text-primary">${selectedDoctor.fee}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" className="h-12 flex-col gap-1">
                          <CreditCard className="h-4 w-4" />
                          <span className="text-xs">Card</span>
                        </Button>
                        <Button variant="outline" className="h-12 flex-col gap-1">
                          <Banknote className="h-4 w-4" />
                          <span className="text-xs">Cash</span>
                        </Button>
                        <Button variant="outline" className="h-12 flex-col gap-1">
                          <Smartphone className="h-4 w-4" />
                          <span className="text-xs">UPI</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3 p-6 border-t border-border bg-secondary/30">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="default"
            onClick={handleConfirmAppointment}
            disabled={!selectedDoctor || !appointmentDate || !selectedTimeSlot || isConfirming}
            className="min-w-[150px]"
          >
            {isConfirming ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Confirming...
              </div>
            ) : (
              'Confirm Appointment'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};