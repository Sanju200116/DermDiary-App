
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const SkinConditionsForm = () => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  
  const conditions = [
    { id: 'acne', label: 'Acne' },
    { id: 'eczema', label: 'Eczema' },
    { id: 'psoriasis', label: 'Psoriasis' },
    { id: 'rosacea', label: 'Rosacea' },
    { id: 'dryness', label: 'Dryness' },
    { id: 'redness', label: 'Redness/Irritation' },
    { id: 'hives', label: 'Hives/Rash' },
    { id: 'other', label: 'Other' }
  ];
  
  const handleConditionChange = (id: string) => {
    setSelectedConditions(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  return (
    <div className="space-y-4">
      <div>
        <h3 className="section-title">Select your skin conditions:</h3>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {conditions.map((condition) => (
            <div key={condition.id} className="flex items-center space-x-2">
              <Checkbox 
                id={condition.id} 
                checked={selectedConditions.includes(condition.id)}
                onCheckedChange={() => handleConditionChange(condition.id)}
              />
              <Label 
                htmlFor={condition.id}
                className="text-sm font-normal cursor-pointer"
              >
                {condition.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="notes" className="section-title">Additional notes:</Label>
        <Textarea 
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any details about your skin conditions here..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default SkinConditionsForm;
