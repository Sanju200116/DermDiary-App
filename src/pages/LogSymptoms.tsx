
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SaveIcon, LineChartIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import SkinConditionsForm from '@/components/forms/SkinConditionsForm';
import LifestyleForm from '@/components/forms/LifestyleForm';
import DietForm from '@/components/forms/DietForm';
import ContactsForm from '@/components/forms/ContactsForm';
import HygieneForm from '@/components/forms/HygieneForm';
import MenstrualForm from '@/components/forms/MenstrualForm';
import MedicationsForm from '@/components/forms/MedicationsForm';
import EnvironmentForm from '@/components/forms/EnvironmentForm';
import SymptomsForm from '@/components/forms/SymptomsForm';

type CategoryTypes = {
  [key: string]: {
    title: string;
    icon: string;
    description: string;
  }
};

const categoryInfo: CategoryTypes = {
  'skin-conditions': {
    title: 'Skin Conditions',
    icon: '❋',
    description: 'Track acne, eczema, psoriasis and other skin conditions'
  },
  'lifestyle': {
    title: 'Lifestyle Factors',
    icon: '⚡',
    description: 'Log physical activity, stress levels, and sleep patterns'
  },
  'diet': {
    title: 'Diet',
    icon: '🍽️',
    description: 'Record food intake and potential triggers'
  },
  'contacts': {
    title: 'Contacts',
    icon: '👥',
    description: 'Track skin products used and contact with people/animals'
  },
  'hygiene': {
    title: 'Hygiene',
    icon: '🚿',
    description: 'Log showering, face washing, and handwashing'
  },
  'menstrual': {
    title: 'Menstrual Cycle',
    icon: '📅',
    description: 'Track menstruation and related symptoms'
  },
  'medications': {
    title: 'Medications',
    icon: '💊',
    description: 'Log prescribed medications, vitamins, and supplements'
  },
  'environment': {
    title: 'Environment',
    icon: '🌤️',
    description: 'Record weather conditions and indoor/outdoor exposure'
  },
  'symptoms': {
    title: 'Symptoms',
    icon: '🔍',
    description: 'Track severity, location, and onset of symptoms'
  }
};

const LogSymptoms = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('main');
  
  const currentCategory = category ? categoryInfo[category] : undefined;
  
  if (!currentCategory) {
    return <div>Category not found</div>;
  }
  
  const handleSave = () => {
    // Record that the user has logged today
    localStorage.setItem('lastLoggedDate', new Date().toDateString());
    
    toast({
      title: "Entry Saved",
      description: `Your ${currentCategory.title} entry has been saved.`,
    });
    navigate('/dashboard');
  };
  
  // Render the appropriate form based on the category
  const renderForm = () => {
    switch(category) {
      case 'skin-conditions':
        return <SkinConditionsForm />;
      case 'lifestyle':
        return <LifestyleForm />;
      case 'diet':
        return <DietForm />;
      case 'contacts':
        return <ContactsForm />;
      case 'hygiene':
        return <HygieneForm />;
      case 'menstrual':
        return <MenstrualForm />;
      case 'medications':
        return <MedicationsForm />;
      case 'environment':
        return <EnvironmentForm />;
      case 'symptoms':
        return <SymptomsForm />;
      default:
        return <div>Form not available</div>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/80 to-blue-50/60">
      <Header title={currentCategory.title} showBack />
      
      <main className="container max-w-md mx-auto p-4 pt-20">
        <Card className="p-4 mb-6 bg-white border-gray-100 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-2">{currentCategory.icon}</span>
            <div>
              <h2 className="text-xl font-semibold text-teal-500">{currentCategory.title}</h2>
              <p className="text-sm text-gray-500">{currentCategory.description}</p>
            </div>
          </div>
          
          {renderForm()}
          
          <div className="flex justify-between mt-6">
            <Button variant="outline" className="mr-2 border-gray-200" onClick={() => navigate('/dashboard')}>
              Cancel
            </Button>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="border-teal-400 text-teal-500" 
                onClick={() => navigate('/insights')}
              >
                <LineChartIcon className="h-4 w-4 mr-2" />
                Insights
              </Button>
              <Button className="bg-teal-500 hover:bg-teal-600" onClick={handleSave}>
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Entry
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default LogSymptoms;
