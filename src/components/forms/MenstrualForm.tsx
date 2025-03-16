
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';

const MenstrualForm = () => {
  const [menstruating, setMenstruating] = useState('');
  const [flowIntensity, setFlowIntensity] = useState(0);
  const [menstrualNotes, setMenstrualNotes] = useState('');
  
  return (
    <div className="space-y-6">
      <div>
        <Label className="section-title">Are you menstruating today?</Label>
        <RadioGroup value={menstruating} onValueChange={setMenstruating} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="mens-yes" />
            <Label htmlFor="mens-yes" className="text-sm">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="mens-no" />
            <Label htmlFor="mens-no" className="text-sm">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="spotting" id="mens-spotting" />
            <Label htmlFor="mens-spotting" className="text-sm">Spotting</Label>
          </div>
        </RadioGroup>
      </div>
      
      {menstruating === 'yes' && (
        <div>
          <div className="flex justify-between">
            <Label className="text-sm text-gray-600">Flow intensity</Label>
            <span className="text-sm text-tracker-primary font-medium">
              {flowIntensity === 0 ? 'None' : 
               flowIntensity <= 3 ? 'Light' : 
               flowIntensity <= 7 ? 'Medium' : 'Heavy'}
            </span>
          </div>
          <Slider 
            value={[flowIntensity]} 
            onValueChange={(value) => setFlowIntensity(value[0])}
            max={10}
            step={1}
            className="mt-2"
          />
        </div>
      )}
      
      <div>
        <Label htmlFor="menstrual-notes" className="section-title">Additional notes</Label>
        <Textarea 
          id="menstrual-notes"
          value={menstrualNotes}
          onChange={(e) => setMenstrualNotes(e.target.value)}
          placeholder="Record any other symptoms related to your cycle..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default MenstrualForm;
