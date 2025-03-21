
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRightIcon, Dog } from 'lucide-react';

const PetMotivation = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Check if the user has logged any symptoms today
    const hasLoggedToday = localStorage.getItem('lastLoggedDate') === new Date().toDateString();
    setProgress(hasLoggedToday ? 100 : 0);
    
    // Animation for the progress ring when the page loads
    if (!hasLoggedToday) {
      const timer = setTimeout(() => setProgress(30), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-50/80 to-blue-50/60 p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 rounded-full bg-teal-100/60 px-6 py-2 inline-block">
          <p className="text-teal-600 font-medium">Your logging companion</p>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">Meet Your Pet</span>
        </h1>
        
        <p className="text-xl text-gray-500 mb-8">
          Don't forget to log daily to feed your pet!
        </p>
        
        <div className="relative mb-10 inline-block">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="transparent" 
                stroke="#e2f5f5" 
                strokeWidth="5"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="transparent" 
                stroke="#26a69a" 
                strokeWidth="5"
                strokeDasharray="283" 
                strokeDashoffset={283 - (283 * progress) / 100}
                transform="rotate(-90 50 50)"
                className="transition-all duration-1000 ease-in-out"
              />
            </svg>
          </div>
          <div className="relative z-10 p-6">
            <img 
              src="/lovable-uploads/08ad6087-5ad3-49d1-945a-d7a5a1e81f13.png" 
              alt="Pet Dog" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-teal-500 mb-2">
            {progress === 100 ? "Thank you for logging today!" : "Your pet is hungry!"}
          </h3>
          <p className="text-gray-500">
            {progress === 100 
              ? "Your pet is happy and healthy. Come back tomorrow!" 
              : "Log your symptoms in the journal to feed your pet."}
          </p>
        </div>
        
        <Button 
          className="w-full mb-4 bg-teal-500 hover:bg-teal-600 text-white font-medium text-lg py-6 rounded-full flex items-center justify-center"
          onClick={() => navigate('/dashboard')}
        >
          Go to Journal
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default PetMotivation;
