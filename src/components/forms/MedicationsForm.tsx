
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

const MedicationsForm = () => {
  const [medications, setMedications] = useState<Array<{name: string, type: string}>>([]);
  const [newMedName, setNewMedName] = useState('');
  const [newMedType, setNewMedType] = useState('');
  const [medicationNotes, setMedicationNotes] = useState('');
  
  const medTypes = [
    'Topical cream',
    'Contraceptive',
    'Prescribed medication',
    'Vitamin',
    'Supplement',
    'Other'
  ];
  
  const handleAddMedication = () => {
    if (newMedName.trim() && newMedType) {
      setMedications([...medications, {
        name: newMedName.trim(),
        type: newMedType
      }]);
      setNewMedName('');
      setNewMedType('');
    }
  };
  
  const handleRemoveMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="section-title">Medications</h3>
        <p className="text-sm text-gray-500 mb-3">
          Add medications, vitamins, or supplements you took today.
        </p>
        
        <div className="space-y-2">
          <Input 
            value={newMedName}
            onChange={(e) => setNewMedName(e.target.value)}
            placeholder="Medication name"
            className="symptom-input"
          />
          
          <div className="grid grid-cols-2 gap-2">
            {medTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`med-type-${type}`} 
                  checked={newMedType === type}
                  onCheckedChange={() => setNewMedType(newMedType === type ? '' : type)}
                />
                <Label 
                  htmlFor={`med-type-${type}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
          
          <Button 
            type="button" 
            onClick={handleAddMedication}
            className="w-full bg-tracker-primary hover:bg-purple-700 mt-2"
            disabled={!newMedName.trim() || !newMedType}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Medication
          </Button>
        </div>
        
        <div className="space-y-2 mt-4">
          {medications.length === 0 ? (
            <p className="text-sm text-gray-400">No medications added yet.</p>
          ) : (
            medications.map((med, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <div>
                  <span className="text-sm font-medium">{med.name}</span>
                  <span className="text-xs text-gray-500 ml-2">({med.type})</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveMedication(index)}
                >
                  <X className="h-4 w-4 text-gray-500" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="medication-notes" className="section-title">Additional notes</Label>
        <Textarea 
          id="medication-notes"
          value={medicationNotes}
          onChange={(e) => setMedicationNotes(e.target.value)}
          placeholder="Any additional details about your medications..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default MedicationsForm;
