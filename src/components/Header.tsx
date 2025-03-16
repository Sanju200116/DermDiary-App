
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = false, children }) => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-10 shadow-sm">
      <div className="container mx-auto max-w-md px-4 h-16 flex items-center">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
        )}
        <h1 className="text-xl font-semibold bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">{title}</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
