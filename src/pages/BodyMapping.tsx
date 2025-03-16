
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRightIcon, RotateCwIcon, HomeIcon } from 'lucide-react';
import Header from '@/components/Header';

// Face map region names
const faceRegions = {
  1: 'Right Forehead',
  2: 'Central Forehead',
  3: 'Left Forehead',
  4: 'Left Ear',
  5: 'Left Cheek',
  6: 'Left Eye Area',
  7: 'Nose',
  8: 'Right Eye Area',
  9: 'Right Cheek',
  10: 'Right Ear',
  11: 'Right Mouth Area',
  12: 'Chin',
  13: 'Left Mouth Area',
  14: 'Neck'
};

// Body map regions
const bodyRegions = {
  'head': 'Head',
  'chest': 'Chest',
  'abdomen': 'Abdomen',
  'back': 'Back',
  'left_arm': 'Left Arm',
  'right_arm': 'Right Arm',
  'left_leg': 'Left Leg',
  'right_leg': 'Right Leg',
  'left_foot': 'Left Foot',
  'right_foot': 'Right Foot'
};

const BodyMapping = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'body' | 'face'>('body');
  const [bodyView, setBodyView] = useState<'front' | 'back'>('front');
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  
  const handleAreaClick = (area: string) => {
    setSelectedArea(area);
  };
  
  const handleRotate = () => {
    if (view === 'body') {
      setBodyView(bodyView === 'front' ? 'back' : 'front');
    }
    // For face view, we simply switch to body view
    else {
      setView('body');
    }
  };
  
  const toggleView = () => {
    setView(view === 'body' ? 'face' : 'body');
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
  
  // Face map clickable areas
  const renderFaceMap = () => {
    return (
      <div className="relative mb-4 max-w-sm mx-auto">
        <img 
          src="/lovable-uploads/975eb351-7434-4dc9-97db-ee5b288f86b9.png" 
          alt="Face map diagram"
          className="w-full"
        />
        
        {/* Map clickable areas over face regions */}
        {Object.entries(faceRegions).map(([regionId, regionName]) => (
          <div 
            key={regionId}
            className={`absolute rounded-full hover:bg-teal-200 hover:opacity-40 cursor-pointer 
              ${selectedArea === regionName ? 'bg-teal-400 opacity-50' : ''}`}
            style={getFaceRegionStyle(regionId)}
            onClick={() => handleAreaClick(regionName)}
          />
        ))}
      </div>
    );
  };
  
  // Body map clickable areas
  const renderBodyMap = () => {
    return (
      <div className="relative mb-4 max-w-sm mx-auto">
        <img 
          src="/lovable-uploads/ac2a26fa-0a4a-4724-b950-2211b6149e93.png" 
          alt={`${bodyView} view of body map`}
          className="w-full"
        />
        
        {/* Map clickable areas over body regions */}
        {Object.entries(bodyRegions).map(([regionId, regionName]) => (
          <div 
            key={regionId}
            className={`absolute rounded hover:bg-teal-200 hover:opacity-40 cursor-pointer
              ${selectedArea === regionName ? 'bg-teal-400 opacity-50' : ''}`}
            style={getBodyRegionStyle(regionId, bodyView)}
            onClick={() => handleAreaClick(regionName)}
          />
        ))}
      </div>
    );
  };
  
  // Helper function to get positioning styles for face regions
  const getFaceRegionStyle = (regionId: string) => {
    const styles: {[key: string]: any} = {
      '1': { top: '15%', right: '30%', width: '15%', height: '15%' },
      '2': { top: '15%', left: '45%', width: '10%', height: '15%' },
      '3': { top: '15%', left: '30%', width: '15%', height: '15%' },
      '4': { top: '25%', left: '10%', width: '10%', height: '15%' },
      '5': { top: '35%', left: '25%', width: '15%', height: '15%' },
      '6': { top: '30%', left: '35%', width: '10%', height: '10%' },
      '7': { top: '40%', left: '45%', width: '10%', height: '10%' },
      '8': { top: '30%', right: '35%', width: '10%', height: '10%' },
      '9': { top: '35%', right: '25%', width: '15%', height: '15%' },
      '10': { top: '25%', right: '10%', width: '10%', height: '15%' },
      '11': { bottom: '25%', right: '35%', width: '10%', height: '10%' },
      '12': { bottom: '15%', left: '45%', width: '10%', height: '10%' },
      '13': { bottom: '25%', left: '35%', width: '10%', height: '10%' },
      '14': { bottom: '5%', left: '40%', width: '20%', height: '10%' }
    };
    
    return styles[regionId] || {};
  };
  
  // Helper function to get positioning styles for body regions based on front/back view
  const getBodyRegionStyle = (regionId: string, view: 'front' | 'back') => {
    // Define position styles for front view
    const frontStyles: {[key: string]: any} = {
      'head': { top: '5%', left: '40%', width: '20%', height: '10%' },
      'chest': { top: '17%', left: '35%', width: '30%', height: '15%' },
      'abdomen': { top: '33%', left: '37%', width: '26%', height: '15%' },
      'left_arm': { top: '25%', left: '20%', width: '15%', height: '25%' },
      'right_arm': { top: '25%', right: '20%', width: '15%', height: '25%' },
      'left_leg': { top: '50%', left: '35%', width: '15%', height: '35%' },
      'right_leg': { top: '50%', right: '35%', width: '15%', height: '35%' },
      'left_foot': { bottom: '2%', left: '35%', width: '15%', height: '10%' },
      'right_foot': { bottom: '2%', right: '35%', width: '15%', height: '10%' }
    };
    
    // Define position styles for back view (would be different in a real app)
    const backStyles: {[key: string]: any} = {
      'head': { top: '5%', left: '40%', width: '20%', height: '10%' },
      'back': { top: '17%', left: '35%', width: '30%', height: '30%' },
      'left_arm': { top: '25%', right: '20%', width: '15%', height: '25%' },
      'right_arm': { top: '25%', left: '20%', width: '15%', height: '25%' },
      'left_leg': { top: '50%', right: '35%', width: '15%', height: '35%' },
      'right_leg': { top: '50%', left: '35%', width: '15%', height: '35%' },
      'left_foot': { bottom: '2%', right: '35%', width: '15%', height: '10%' },
      'right_foot': { bottom: '2%', left: '35%', width: '15%', height: '10%' }
    };
    
    return view === 'front' ? frontStyles[regionId] || {} : backStyles[regionId] || {};
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
            Tap on the diagram to indicate where you're experiencing skin issues
          </p>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-600">
              {view === 'body' 
                ? (bodyView === 'front' ? 'Body (Front View)' : 'Body (Back View)') 
                : 'Face View'}
            </span>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={toggleView} 
                className="flex items-center gap-2 border-gray-200"
              >
                {view === 'body' ? 'Face View' : 'Body View'}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleRotate} 
                className="flex items-center gap-2 border-gray-200"
                disabled={view === 'face'}
              >
                <RotateCwIcon className="h-4 w-4" /> 
                Rotate
              </Button>
            </div>
          </div>
          
          {view === 'face' ? renderFaceMap() : renderBodyMap()}
          
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
