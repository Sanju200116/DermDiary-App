
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  icon: string;
  onClick: () => void;
  className?: string;
  isActive?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  onClick, 
  className,
  isActive = false 
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border",
        isActive ? "border-teal-500 bg-teal-50" : "border-gray-100",
        className
      )}
      onClick={onClick}
    >
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-sm font-medium text-gray-600">{title}</span>
    </div>
  );
};

export default CategoryCard;
