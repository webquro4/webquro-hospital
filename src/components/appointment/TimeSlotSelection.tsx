import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface TimeSlotSelectionProps {
  selectedDate: string;
  selectedTime: string;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}

const timeSlots = {
  morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  afternoon: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'],
  evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM']
};

export const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Pick a Date & Time</h2>
        <p className="text-muted-foreground">Choose your preferred appointment slot</p>
      </div>

      {/* Date Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <Label htmlFor="appointmentDate" className="text-lg font-semibold">
            Select Date
          </Label>
        </div>
        <Input
          id="appointmentDate"
          type="date"
          value={selectedDate}
          onChange={(e) => onSelectDate(e.target.value)}
          min={today}
          className="w-full max-w-xs"
        />
      </div>

      {/* Time Period Selection */}
      {selectedDate && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <Label className="text-lg font-semibold">Select Time Period</Label>
          </div>
          
          <div className="flex gap-2">
            {Object.keys(timeSlots).map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period as 'morning' | 'afternoon' | 'evening')}
                className="capitalize"
              >
                {period}
              </Button>
            ))}
          </div>

          {/* Time Slots Grid */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                {selectedPeriod} Slots
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {timeSlots[selectedPeriod].map((slot) => (
                <Button
                  key={slot}
                  variant={selectedTime === slot ? "default" : "outline"}
                  size="sm"
                  onClick={() => onSelectTime(slot)}
                  className="h-12 text-sm"
                >
                  {slot}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Selected Appointment</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary" />
              <span>{selectedTime}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};