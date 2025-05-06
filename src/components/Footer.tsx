import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Chandan Kumar
            </p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio<span className="text-blue-500">.</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} - All rights reserved
            </p>
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;