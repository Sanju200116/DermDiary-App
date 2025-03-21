
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Dog } from 'lucide-react';
import { cn } from '@/lib/utils';
import CategoryCard from '@/components/CategoryCard';
import Header from '@/components/Header';

const Dashboard = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>(new Date());
  const [hasLoggedToday, setHasLoggedToday] = useState(false);

  useEffect(() => {
    // Check if user has logged today
    const lastLoggedDate = localStorage.getItem('lastLoggedDate');
    setHasLoggedToday(lastLoggedDate === new Date().toDateString());
  }, []);

  const handleCategoryClick = (category: string) => {
    navigate(`/log/${category}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/80 to-blue-50/60">
      <Header title="Symptom Tracker" />
      
      <main className="container max-w-md mx-auto p-4 pt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-teal-500">Journal</h2>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="border-gray-200">
                <CalendarIcon className="mr-2 h-4 w-4 text-teal-500" />
                {format(date, 'MMMM d, yyyy')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Pet Status Card */}
        <Card className="p-4 mb-6 bg-white border-gray-100 shadow-sm flex items-center">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/08ad6087-5ad3-49d1-945a-d7a5a1e81f13.png" 
                alt="Pet" 
                className="w-full h-full object-cover"
              />
            </div>
            {hasLoggedToday && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-medium text-teal-500">Your Pet</h3>
            <p className="text-sm text-gray-500">
              {hasLoggedToday ? "Fed today! Great job!" : "Don't forget to log today's symptoms."}
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="text-teal-500 hover:text-teal-600 hover:bg-teal-50"
            onClick={() => navigate('/pet')}
          >
            Visit
          </Button>
        </Card>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-3">What would you like to log today?</h3>
          <div className="grid grid-cols-2 gap-4">
            <CategoryCard 
              title="Skin Conditions" 
              icon="❋"
              onClick={() => handleCategoryClick('skin-conditions')} 
            />
            <CategoryCard 
              title="Lifestyle Factors" 
              icon="⚡"
              onClick={() => handleCategoryClick('lifestyle')} 
            />
            <CategoryCard 
              title="Diet" 
              icon="🍽️"
              onClick={() => handleCategoryClick('diet')} 
            />
            <CategoryCard 
              title="Contacts" 
              icon="👥"
              onClick={() => handleCategoryClick('contacts')} 
            />
            <CategoryCard 
              title="Hygiene" 
              icon="🚿"
              onClick={() => handleCategoryClick('hygiene')} 
            />
            <CategoryCard 
              title="Menstrual Cycle" 
              icon="📅"
              onClick={() => handleCategoryClick('menstrual')} 
            />
            <CategoryCard 
              title="Medications" 
              icon="💊"
              onClick={() => handleCategoryClick('medications')} 
            />
            <CategoryCard 
              title="Environment" 
              icon="🌤️"
              onClick={() => handleCategoryClick('environment')} 
            />
            <CategoryCard 
              title="Symptoms" 
              icon="🔍"
              onClick={() => handleCategoryClick('symptoms')} 
              className="col-span-2"
            />
          </div>
        </div>
        
        <Card className="p-4 mb-6 bg-white border-gray-100 shadow-sm">
          <h3 className="font-medium text-gray-600 mb-2">Today's Summary</h3>
          <div className="text-sm text-gray-500">
            <p>{hasLoggedToday ? "You've logged your symptoms today." : "No entries for today. Start logging to see your summary."}</p>
          </div>
        </Card>
        
        <Button 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full" 
          onClick={() => navigate('/insights')}
        >
          View Insights
        </Button>
      </main>
    </div>
  );
};

export default Dashboard;
