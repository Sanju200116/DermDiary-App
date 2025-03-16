
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const EnvironmentForm = () => {
  const [indoorOutdoor, setIndoorOutdoor] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [environmentFactors, setEnvironmentFactors] = useState<string[]>([]);
  const [environmentNotes, setEnvironmentNotes] = useState('');
  
  const factors = [
    { id: 'sun-exposure', label: 'Sun exposure' },
    { id: 'high-pollen', label: 'High pollen' },
    { id: 'humid', label: 'Humid' },
    { id: 'dry-air', label: 'Dry air' },
    { id: 'windy', label: 'Windy' },
    { id: 'air-conditioning', label: 'Air conditioning' },
    { id: 'heating', label: 'Heating' },
    { id: 'dust', label: 'Dusty environment' }
  ];
  
  const handleFactorChange = (id: string) => {
    setEnvironmentFactors(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  return (
    <div className="space-y-6">
      <div>
        <Label className="section-title">Where did you spend most of your day?</Label>
        <RadioGroup value={indoorOutdoor} onValueChange={setIndoorOutdoor} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mostly-indoor" id="env-indoor" />
            <Label htmlFor="env-indoor" className="text-sm">Mostly indoor</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mostly-outdoor" id="env-outdoor" />
            <Label htmlFor="env-outdoor" className="text-sm">Mostly outdoor</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mixed" id="env-mixed" />
            <Label htmlFor="env-mixed" className="text-sm">Mixed indoor/outdoor</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <div className="flex justify-between">
          <Label className="text-sm text-gray-600">Temperature</Label>
          <span className="text-sm text-tracker-primary font-medium">
            {temperature === 0 ? 'Freezing' : 
             temperature <= 3 ? 'Cold' : 
             temperature <= 5 ? 'Cool' :
             temperature <= 7 ? 'Warm' : 'Hot'}
          </span>
        </div>
        <Slider 
          value={[temperature]} 
          onValueChange={(value) => setTemperature(value[0])}
          max={10}
          step={1}
          className="mt-2"
        />
      </div>
      
      <div>
        <h3 className="section-title">Environmental factors</h3>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {factors.map((factor) => (
            <div key={factor.id} className="flex items-center space-x-2">
              <Checkbox 
                id={factor.id} 
                checked={environmentFactors.includes(factor.id)}
                onCheckedChange={() => handleFactorChange(factor.id)}
              />
              <Label 
                htmlFor={factor.id}
                className="text-sm font-normal cursor-pointer"
              >
                {factor.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="environment-notes" className="section-title">Additional notes</Label>
        <Textarea 
          id="environment-notes"
          value={environmentNotes}
          onChange={(e) => setEnvironmentNotes(e.target.value)}
          placeholder="Any additional details about your environment..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default EnvironmentForm;
