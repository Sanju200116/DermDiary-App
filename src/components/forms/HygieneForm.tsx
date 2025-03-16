
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

const HygieneForm = () => {
  const [showered, setShowered] = useState(false);
  const [facewashed, setFacewashed] = useState(false);
  const [handwashing, setHandwashing] = useState('');
  const [hygieneNotes, setHygieneNotes] = useState('');
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="section-title">Daily Hygiene</h3>
        <div className="space-y-3 mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="showered" 
              checked={showered}
              onCheckedChange={(checked) => setShowered(checked === true)}
            />
            <Label 
              htmlFor="showered"
              className="text-sm font-normal cursor-pointer"
            >
              Showered today
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="face-washed" 
              checked={facewashed}
              onCheckedChange={(checked) => setFacewashed(checked === true)}
            />
            <Label 
              htmlFor="face-washed"
              className="text-sm font-normal cursor-pointer"
            >
              Washed face today
            </Label>
          </div>
        </div>
      </div>
      
      <div>
        <Label className="section-title">Hand washing frequency</Label>
        <RadioGroup value={handwashing} onValueChange={setHandwashing} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rarely" id="hw-rarely" />
            <Label htmlFor="hw-rarely" className="text-sm">Rarely (0-2 times)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sometimes" id="hw-sometimes" />
            <Label htmlFor="hw-sometimes" className="text-sm">Sometimes (3-5 times)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="often" id="hw-often" />
            <Label htmlFor="hw-often" className="text-sm">Often (6-10 times)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="frequently" id="hw-frequently" />
            <Label htmlFor="hw-frequently" className="text-sm">Frequently (10+ times)</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <Label htmlFor="hygiene-notes" className="section-title">Additional notes</Label>
        <Textarea 
          id="hygiene-notes"
          value={hygieneNotes}
          onChange={(e) => setHygieneNotes(e.target.value)}
          placeholder="Any additional details about your hygiene routine..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default HygieneForm;
