import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Users, Sparkles, ArrowRight, Search, Calendar } from 'lucide-react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
const Hero = () => {
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
      
      <Nav />
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="px-4 py-1 bg-[#FAFAFA]/10 rounded-full backdrop-blur-sm text-xs font-medium tracking-wider uppercase">
              Featured Essay
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            <span className="block">Exploring the</span>
            <span className="block mt-2 text-[#FAFAFA] relative">
              Depths of Human Thought
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FAFAFA]/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAFAFA]/70 mb-8 max-w-3xl mx-auto leading-relaxed font-serif">
            Join us on a journey through the history of ideas, from ancient wisdom to contemporary discourse on the fundamental questions of existence.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm mb-10">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-[#FAFAFA]/60" />
              <span className="text-[#FAFAFA]/60">February 26, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FAFAFA]/20 flex items-center justify-center overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/128633214?s=400&u=d571e7b84a3e389d48c9a2e964a03eb0a9c26abd&v=4" alt="Author" className="w-full h-full object-cover" />
              </div>
              <span className="text-[#FAFAFA]/60">By axmed.</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button className="bg-[#FAFAFA] text-[#09090B] hover:bg-[#FAFAFA]/90 px-8 py-6 text-lg shadow-lg font-medium">
              <Link to="/article">Read Full Essay</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-[#FAFAFA]/20 hover:bg-[#FAFAFA]/10 px-8 py-6 text-lg backdrop-blur-sm text-[#FAFAFA] bg-black hover:text-black">
              <Link to="/articles">Explore More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;