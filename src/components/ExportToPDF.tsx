
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ExportToPDFProps {
  data: any;
  fileName?: string;
}

const ExportToPDF = ({ data, fileName = 'skin-health-report' }: ExportToPDFProps) => {
  const { toast } = useToast();

  const handleExport = () => {
    // In a real app, this would generate a PDF using a library like jspdf
    // For this demo, we'll just show a toast message
    
    toast({
      title: "PDF Export Initiated",
      description: "Your skin health report is being prepared for your doctor.",
    });
    
    // Simulate PDF generation delay
    setTimeout(() => {
      toast({
        title: "PDF Export Complete",
        description: "Your skin health report has been downloaded.",
      });
    }, 2000);
  };

  return (
    <Button 
      onClick={handleExport}
      className="bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center"
    >
      <FileText className="mr-2 h-4 w-4" />
      Export for Doctor
    </Button>
  );
};

export default ExportToPDF;
