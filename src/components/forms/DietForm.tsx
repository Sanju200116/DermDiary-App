
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const DietForm = () => {
  const [consumedFoods, setConsumedFoods] = useState<string[]>([]);
  const [dietaryNotes, setDietaryNotes] = useState('');
  
  const foodCategories = [
    { id: 'dairy', label: 'Dairy' },
    { id: 'eggs', label: 'Eggs' },
    { id: 'gluten', label: 'Gluten' },
    { id: 'soya', label: 'Soya' },
    { id: 'meat', label: 'Meat' },
    { id: 'oily-food', label: 'Oily Food' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'nuts', label: 'Nuts' },
    { id: 'sugar', label: 'Processed Sugar' },
    { id: 'alcohol', label: 'Alcohol' }
  ];
  
  const handleFoodChange = (id: string) => {
    setConsumedFoods(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="section-title">What did you eat today?</h3>
        <p className="text-sm text-gray-500 mb-3">
          Select all food categories you consumed today.
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {foodCategories.map((food) => (
            <div key={food.id} className="flex items-center space-x-2">
              <Checkbox 
                id={food.id} 
                checked={consumedFoods.includes(food.id)}
                onCheckedChange={() => handleFoodChange(food.id)}
              />
              <Label 
                htmlFor={food.id}
                className="text-sm font-normal cursor-pointer"
              >
                {food.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="diet-notes" className="section-title">Food diary</Label>
        <Textarea 
          id="diet-notes"
          value={dietaryNotes}
          onChange={(e) => setDietaryNotes(e.target.value)}
          placeholder="Add details about your meals, snacks, and drinks..."
          className="mt-1 symptom-input min-h-[150px]"
        />
      </div>
    </div>
  );
};

export default DietForm;
