
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const LifestyleForm = () => {
  const [activityType, setActivityType] = useState('');
  const [activityIntensity, setActivityIntensity] = useState(0);
  const [sweatAmount, setSweatAmount] = useState(0);
  const [stressLevel, setStressLevel] = useState(0);
  const [sleepHours, setSleepHours] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="section-title">Physical Activity</h3>
        <div className="space-y-3">
          <div>
            <Label htmlFor="activity-type" className="text-sm text-gray-600">
              Type of activity
            </Label>
            <Input 
              id="activity-type"
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
              placeholder="Walking, running, cycling, etc."
              className="symptom-input mt-1"
            />
          </div>
          
          <div>
            <div className="flex justify-between">
              <Label className="text-sm text-gray-600">Activity intensity</Label>
              <span className="text-sm text-tracker-primary font-medium">
                {activityIntensity === 0 ? 'None' : 
                 activityIntensity <= 3 ? 'Low' : 
                 activityIntensity <= 7 ? 'Medium' : 'High'}
              </span>
            </div>
            <Slider 
              value={[activityIntensity]} 
              onValueChange={(value) => setActivityIntensity(value[0])}
              max={10}
              step={1}
              className="mt-2"
            />
          </div>
          
          <div>
            <div className="flex justify-between">
              <Label className="text-sm text-gray-600">Amount of sweat</Label>
              <span className="text-sm text-tracker-primary font-medium">
                {sweatAmount === 0 ? 'None' : 
                 sweatAmount <= 3 ? 'Light' : 
                 sweatAmount <= 7 ? 'Moderate' : 'Heavy'}
              </span>
            </div>
            <Slider 
              value={[sweatAmount]} 
              onValueChange={(value) => setSweatAmount(value[0])}
              max={10}
              step={1}
              className="mt-2"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="section-title">Mental</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between">
              <Label className="text-sm text-gray-600">Stress level</Label>
              <span className="text-sm text-tracker-primary font-medium">
                {stressLevel === 0 ? 'None' : 
                 stressLevel <= 3 ? 'Low' : 
                 stressLevel <= 7 ? 'Medium' : 'High'}
              </span>
            </div>
            <Slider 
              value={[stressLevel]} 
              onValueChange={(value) => setStressLevel(value[0])}
              max={10}
              step={1}
              className="mt-2"
            />
          </div>
          
          <div>
            <Label htmlFor="sleep-hours" className="text-sm text-gray-600">
              Hours of sleep
            </Label>
            <Input 
              id="sleep-hours"
              type="number"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              placeholder="8"
              className="symptom-input mt-1"
            />
          </div>
          
          <div>
            <Label className="text-sm text-gray-600 mb-2 block">Sleep quality</Label>
            <RadioGroup value={sleepQuality} onValueChange={setSleepQuality}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="sleep-poor" />
                <Label htmlFor="sleep-poor" className="text-sm">Poor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fair" id="sleep-fair" />
                <Label htmlFor="sleep-fair" className="text-sm">Fair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="sleep-good" />
                <Label htmlFor="sleep-good" className="text-sm">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excellent" id="sleep-excellent" />
                <Label htmlFor="sleep-excellent" className="text-sm">Excellent</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleForm;
