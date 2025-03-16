
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-50/80 to-blue-50/60 p-4">
      <div className="text-center max-w-md">
        <div className="mb-8 rounded-full bg-teal-100/60 px-6 py-2 inline-block">
          <p className="text-teal-600 font-medium">Your personal skin health journal</p>
        </div>
        
        <h1 className="text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">Derm</span>
          <span className="text-gray-400"> Diary</span>
        </h1>
        
        <p className="text-xl text-gray-500 mb-12">
          Your Skin, Your Insights, Your Control
        </p>
        
        <Button 
          className="w-full mb-4 bg-teal-500 hover:bg-teal-600 text-white font-medium text-lg py-6 rounded-full flex items-center justify-center"
          onClick={() => navigate('/dashboard')}
        >
          Get Started
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
        
        <Button 
          variant="outline"
          className="w-full text-gray-500 hover:text-gray-700 border-gray-300 font-medium py-6 rounded-full"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Index;
