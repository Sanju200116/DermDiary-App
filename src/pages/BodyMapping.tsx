
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRightIcon, RotateCwIcon, HomeIcon } from 'lucide-react';
import Header from '@/components/Header';

const BodyMapping = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'front' | 'back'>('front');
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  
  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
  };
  
  const handleRotate = () => {
    setView(view === 'front' ? 'back' : 'front');
  };
  
  const handleContinue = () => {
    if (selectedArea) {
      // Return to symptoms form with the selected area
      navigate(`/log/symptoms?location=${selectedArea}`);
    }
  };
  
  const handleClear = () => {
    setSelectedArea(null);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/80 to-blue-50/60">
      <Header title="Body Mapping" showBack>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto" 
          onClick={() => navigate('/dashboard')}
        >
          <HomeIcon className="h-5 w-5 text-gray-700" />
        </Button>
      </Header>
      
      <main className="container max-w-md mx-auto p-4 pt-20">
        <Card className="p-6 bg-white rounded-2xl shadow-sm border-gray-100">
          <h2 className="text-2xl font-semibold text-center text-teal-500 mb-2">
            Select Affected Area
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Tap on the body map to indicate where you're experiencing skin issues
          </p>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-600">
              {view === 'front' ? 'Front View' : 'Back View'}
            </span>
            <Button 
              variant="outline" 
              onClick={handleRotate} 
              className="flex items-center gap-2 border-gray-200"
            >
              <RotateCwIcon className="h-4 w-4" /> 
              Rotate View
            </Button>
          </div>
          
          <div className="relative mb-4">
            <img 
              src={view === 'front' 
                ? '/lovable-uploads/1ec899bb-f92f-45b2-87ef-8317f60722a3.png' 
                : '/lovable-uploads/1ec899bb-f92f-45b2-87ef-8317f60722a3.png'} 
              alt={`${view} view of body map`} 
              className="w-full"
            />
            
            {/* Interactive areas - these would be properly mapped in a real app */}
            <div 
              className={`absolute top-[15%] right-[29%] w-12 h-12 rounded-full 
                ${selectedArea === 'Head' ? 'bg-teal-400 opacity-50' : 'hover:bg-teal-200 hover:opacity-30 cursor-pointer'}`}
              onClick={() => handleAreaClick('Head')}
            ></div>
            {/* Add more interactive areas as needed */}
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-medium text-gray-600">
              {selectedArea ? `Selected: ${selectedArea}` : 'No area selected'}
            </div>
            <Button variant="ghost" onClick={handleClear} className="text-gray-500">
              Clear
            </Button>
          </div>
          
          <Button 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full"
            onClick={handleContinue}
            disabled={!selectedArea}
          >
            Continue <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default BodyMapping;
