
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

const ContactsForm = () => {
  const [skinProducts, setSkinProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState('');
  const [sharedBed, setSharedBed] = useState(false);
  const [animalContact, setAnimalContact] = useState(false);
  const [contactNotes, setContactNotes] = useState('');
  
  const handleAddProduct = () => {
    if (newProduct.trim()) {
      setSkinProducts([...skinProducts, newProduct.trim()]);
      setNewProduct('');
    }
  };
  
  const handleRemoveProduct = (index: number) => {
    setSkinProducts(skinProducts.filter((_, i) => i !== index));
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="section-title">Skin Products</h3>
        <p className="text-sm text-gray-500 mb-3">
          What skin products have you used today?
        </p>
        
        <div className="flex space-x-2 mb-2">
          <Input 
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Enter product name"
            className="symptom-input"
          />
          <Button 
            type="button" 
            onClick={handleAddProduct}
            className="bg-tracker-primary hover:bg-purple-700"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-2 mt-3">
          {skinProducts.length === 0 ? (
            <p className="text-sm text-gray-400">No products added yet.</p>
          ) : (
            skinProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm">{product}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleRemoveProduct(index)}
                >
                  <X className="h-4 w-4 text-gray-500" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div>
        <h3 className="section-title">People & Animals</h3>
        <div className="space-y-3 mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="shared-bed" 
              checked={sharedBed}
              onCheckedChange={(checked) => setSharedBed(checked === true)}
            />
            <Label 
              htmlFor="shared-bed"
              className="text-sm font-normal cursor-pointer"
            >
              Shared bed with someone
            </Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="animal-contact" 
              checked={animalContact}
              onCheckedChange={(checked) => setAnimalContact(checked === true)}
            />
            <Label 
              htmlFor="animal-contact"
              className="text-sm font-normal cursor-pointer"
            >
              Had contact with animals
            </Label>
          </div>
        </div>
      </div>
      
      <div>
        <Label htmlFor="contact-notes" className="section-title">Notes</Label>
        <Textarea 
          id="contact-notes"
          value={contactNotes}
          onChange={(e) => setContactNotes(e.target.value)}
          placeholder="Any additional details about contacts or product changes..."
          className="mt-1 symptom-input"
        />
      </div>
    </div>
  );
};

export default ContactsForm;
