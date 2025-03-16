
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
        "category-card",
        isActive && "category-card-active",
        className
      )}
      onClick={onClick}
    >
      <span className="text-2xl mb-2">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

export default CategoryCard;
