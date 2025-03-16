
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, MapPinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const SymptomsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [symptomType, setSymptomType] = useState('');
  const [bodyLocation, setBodyLocation] = useState('');
  const [onsetDate, setOnsetDate] = useState<Date>(new Date());
  const [onsetTime, setOnsetTime] = useState('');
  const [severity, setSeverity] = useState(5);
  const [symptomNotes, setSymptomNotes] = useState('');
  
  // Check if location is coming from the URL search params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const locationParam = params.get('location');
    if (locationParam) {
      setBodyLocation(locationParam);
    }
  }, [location]);
  
  const handleBodyMapClick = () => {
    navigate('/body-mapping');
  };
  
  return (
    <div className="space-y-6">
      <div>
        <Label className="section-title">Symptom type</Label>
        <RadioGroup value={symptomType} onValueChange={setSymptomType} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="eczema" id="symp-eczema" />
            <Label htmlFor="symp-eczema" className="text-sm">Eczema</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="acne" id="symp-acne" />
            <Label htmlFor="symp-acne" className="text-sm">Acne</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="psoriasis" id="symp-psoriasis" />
            <Label htmlFor="symp-psoriasis" className="text-sm">Psoriasis</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="symp-other" />
            <Label htmlFor="symp-other" className="text-sm">Other</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <Label htmlFor="location" className="section-title">Location on body</Label>
        <div className="flex mt-1">
          <Input 
            id="location"
            value={bodyLocation}
            onChange={(e) => setBodyLocation(e.target.value)}
            placeholder="Face, arms, legs, etc."
            className="symptom-input flex-1 mr-2"
            readOnly
          />
          <Button 
            type="button" 
            className="bg-teal-500 hover:bg-teal-600"
            onClick={handleBodyMapClick}
          >
            <MapPinIcon className="h-4 w-4 mr-2" />
            Select on Body Map
          </Button>
        </div>
      </div>
      
      <div>
        <h3 className="section-title">Onset</h3>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div>
            <Label htmlFor="onset-date" className="text-sm text-gray-600 mb-1 block">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="onset-date"
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(onsetDate, 'PP')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={onsetDate}
                  onSelect={(date) => date && setOnsetDate(date)}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label htmlFor="onset-time" className="text-sm text-gray-600 mb-1 block">Time</Label>
            <div className="relative">
              <Input 
                id="onset-time"
                type="time"
                value={onsetTime}
                onChange={(e) => setOnsetTime(e.target.value)}
                className="symptom-input pl-8"
              />
              <Clock className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between">
          <Label className="text-sm text-gray-600">Severity (1-10)</Label>
          <span className="text-sm text-teal-500 font-medium">
            {severity}
          </span>
        </div>
        <Slider 
          value={[severity]} 
          onValueChange={(value) => setSeverity(value[0])}
          min={1}
          max={10}
          step={1}
          className="mt-2"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Mild</span>
          <span>Moderate</span>
          <span>Severe</span>
        </div>
      </div>
      
      <div>
        <Label htmlFor="symptom-notes" className="section-title">Additional notes</Label>
        <Textarea 
          id="symptom-notes"
          value={symptomNotes}
          onChange={(e) => setSymptomNotes(e.target.value)}
          placeholder="Describe your symptoms in detail..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default SymptomsForm;
