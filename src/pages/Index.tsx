
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-tracker-primary mb-6">Symptom Snapshot</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Track Your Skin Health Journey</h2>
          <p className="text-gray-600 mb-6">
            Log and monitor your skin conditions, lifestyle factors, and symptoms to discover patterns and improve your health.
          </p>
          <Button 
            className="w-full bg-tracker-primary hover:bg-purple-700 text-white font-medium"
            onClick={() => navigate('/dashboard')}
          >
            Get Started
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-tracker-primary text-xl">📊</span>
            </div>
            <p className="text-sm text-gray-600">Track Symptoms</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-tracker-primary text-xl">🔍</span>
            </div>
            <p className="text-sm text-gray-600">Identify Triggers</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-tracker-primary text-xl">📈</span>
            </div>
            <p className="text-sm text-gray-600">Monitor Progress</p>
          </div>
        </div>
      </div>
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© 2024 Symptom Snapshot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
