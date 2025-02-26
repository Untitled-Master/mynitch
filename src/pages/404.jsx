import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';
import Nav from '../components/Nav'; // Import the Nav component

const NotFound = () => {
  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen overflow-hidden">
      {/* Background image with improved overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/70 to-[#09090B]/90 z-10" /> {/* Gradient overlay */}
        <img 
          src="https://i.pinimg.com/736x/70/15/46/7015460e89880329186e0e415cef6aad.jpg" 
          alt="Philosophy Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAFAFA]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FAFAFA]/5 rounded-full blur-3xl"></div>
      
      {/* Navigation bar */}
      <Nav /> {/* Use the Nav component here */}
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="px-4 py-1 bg-[#FAFAFA]/10 rounded-full backdrop-blur-sm text-xs font-medium tracking-wider uppercase">
              404 Error
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">Page Not Found</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Lost in Thought
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            The page you're looking for doesn't exist. Perhaps it was lost in the depths of philosophical inquiry. Let's guide you back to the right path.
          </p>
          
          {/* Call to action */}
          <div className="flex justify-center">
            <Button className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-8 py-6 text-lg shadow-lg font-medium">
              Go Home
              <Home className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;