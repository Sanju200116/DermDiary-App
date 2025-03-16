
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import CategoryCard from '@/components/CategoryCard';
import Header from '@/components/Header';

const Dashboard = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>(new Date());

  const handleCategoryClick = (category: string) => {
    navigate(`/log/${category}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Symptom Tracker" />
      
      <main className="container max-w-md mx-auto p-4 pt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-teal-500">Journal</h2>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="border-tracker-border">
                <CalendarIcon className="mr-2 h-4 w-4 text-tracker-primary" />
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
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">What would you like to log today?</h3>
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
        
        <Card className="p-4 mb-6 bg-tracker-card border-tracker-border">
          <h3 className="font-medium text-gray-700 mb-2">Today's Summary</h3>
          <div className="text-sm text-gray-500">
            {/* This would show data from the current day's logs */}
            <p>No entries for today. Start logging to see your summary.</p>
          </div>
        </Card>
        
        <Button 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white" 
          onClick={() => navigate('/insights')}
        >
          View Insights
        </Button>
      </main>
    </div>
  );
};

export default Dashboard;
