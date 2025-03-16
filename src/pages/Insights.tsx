
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';

// Mock data - in a real app this would come from your database
const skinConditionsData = [
  { name: 'Eczema', value: 8, color: '#33C3F0' },
  { name: 'Acne', value: 5, color: '#9F9EA1' },
  { name: 'Psoriasis', value: 3, color: '#FEC6A1' },
];

const locationData = [
  { name: 'Face', count: 6 },
  { name: 'Arms', count: 4 },
  { name: 'Legs', count: 2 },
  { name: 'Torso', count: 3 },
  { name: 'Scalp', count: 5 },
];

const severityData = [
  { date: 'May 1', severity: 7 },
  { date: 'May 2', severity: 5 },
  { date: 'May 3', severity: 8 },
  { date: 'May 4', severity: 6 },
  { date: 'May 5', severity: 4 },
  { date: 'May 6', severity: 3 },
  { date: 'May 7', severity: 5 },
];

const Insights = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/80 to-blue-50/60">
      <Header title="Insights" showBack />
      
      <main className="container max-w-md mx-auto p-4 pt-20">
        <h2 className="text-2xl font-semibold text-teal-500 mb-6">Your Skin Health Insights</h2>
        
        <Tabs defaultValue="summary" className="mb-6">
          <TabsList className="w-full bg-white">
            <TabsTrigger value="summary" className="flex-1 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-500">Summary</TabsTrigger>
            <TabsTrigger value="trends" className="flex-1 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-500">Trends</TabsTrigger>
            <TabsTrigger value="triggers" className="flex-1 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-500">Triggers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="summary">
            <Card className="p-4 bg-white border-gray-100 shadow-sm">
              <h3 className="text-lg font-medium text-gray-600 mb-4">Symptom Distribution</h3>
              <div className="h-64 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={skinConditionsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {skinConditionsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <h3 className="text-lg font-medium text-gray-600 mb-4">Most Affected Locations</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={locationData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#26a69a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="trends">
            <Card className="p-4 bg-white border-gray-100 shadow-sm">
              <h3 className="text-lg font-medium text-gray-600 mb-4">Symptom Severity Over Time</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={severityData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Bar dataKey="severity" fill="#26a69a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="triggers">
            <Card className="p-4 bg-white border-gray-100 shadow-sm">
              <h3 className="text-lg font-medium text-gray-600 mb-4">Potential Triggers</h3>
              <ul className="space-y-2">
                <li className="p-3 bg-teal-50 rounded-lg">
                  <span className="font-medium">Dairy products</span>
                  <p className="text-sm text-gray-500">Correlation with flare-ups: 75%</p>
                </li>
                <li className="p-3 bg-teal-50 rounded-lg">
                  <span className="font-medium">Stress</span>
                  <p className="text-sm text-gray-500">Correlation with flare-ups: 68%</p>
                </li>
                <li className="p-3 bg-teal-50 rounded-lg">
                  <span className="font-medium">Weather changes</span>
                  <p className="text-sm text-gray-500">Correlation with flare-ups: 62%</p>
                </li>
                <li className="p-3 bg-teal-50 rounded-lg">
                  <span className="font-medium">New skincare product</span>
                  <p className="text-sm text-gray-500">Correlation with flare-ups: 58%</p>
                </li>
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Button 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full" 
          onClick={() => navigate('/dashboard')}
        >
          Back to Journal
        </Button>
      </main>
    </div>
  );
};

export default Insights;
